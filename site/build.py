"""Build Assetly as a dependency-free static site from content/guides/*.md."""

from __future__ import annotations

import html
import re
import shutil
from pathlib import Path



ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "content" / "guides"
OUTPUT = ROOT / "dist"
STATIC = ROOT / "site" / "static"
DOMAIN = "https://assetly.online"
GROUPS = ["Organize", "Prepare", "Deliver"]
GROUP_COPY = {
    "Organize": "Make working files easy to find and safer to revise.",
    "Prepare": "Choose formats, dimensions, and descriptions with a clear purpose.",
    "Deliver": "Send the right version with enough context to use it.",
}


def read_article(path: Path) -> dict[str, str]:
    raw = path.read_text(encoding="utf-8")
    if not raw.startswith("---\n"):
        raise ValueError(f"Missing front matter: {path}")
    _, front, body = raw.split("---\n", 2)
    meta: dict[str, str] = {}
    for line in front.splitlines():
        if ":" not in line:
            raise ValueError(f"Invalid front matter line in {path}: {line}")
        key, value = line.split(":", 1)
        meta[key.strip()] = value.strip().strip('"')
    needed = {"title", "description", "category", "slug"}
    if not needed.issubset(meta) or meta["category"] not in GROUPS:
        raise ValueError(f"Invalid article metadata: {path}")
    return {**meta, "body": body.strip(), "url": f"/guides/{meta['slug']}/"}


def inline(value: str) -> str:
    escaped = html.escape(value, quote=True)
    code: list[str] = []

    def save_code(match: re.Match[str]) -> str:
        code.append(f"<code>{match.group(1)}</code>")
        return f"@@CODE{len(code) - 1}@@"

    escaped = re.sub(r"`([^`]+)`", save_code, escaped)
    def link(match: re.Match[str]) -> str:
        destination = match.group(2)
        if destination.startswith("/guides/") and not destination.endswith("/"):
            destination += "/"
        return f'<a href="{destination}">{match.group(1)}</a>'

    escaped = re.sub(
        r"\[([^\]]+)\]\(([^)]+)\)",
        link,
        escaped,
    )
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<strong>\1</strong>", escaped)
    escaped = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<em>\1</em>", escaped)
    for index, snippet in enumerate(code):
        escaped = escaped.replace(f"@@CODE{index}@@", snippet)
    return escaped


def slugify(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def markdown(value: str) -> tuple[str, list[tuple[str, str]]]:
    lines = value.splitlines()
    pieces: list[str] = []
    headings: list[tuple[str, str]] = []
    index = 0
    while index < len(lines):
        line = lines[index]
        if not line.strip():
            index += 1
            continue
        if line.startswith("```"):
            language = slugify(line[3:].strip())
            block: list[str] = []
            index += 1
            while index < len(lines) and not lines[index].startswith("```"):
                block.append(lines[index])
                index += 1
            pieces.append(f'<pre class="code-block" data-language="{language}"><code>{html.escape(chr(10).join(block))}</code></pre>')
            index += 1
            continue
        heading = re.match(r"^(#{1,3})\s+(.+)$", line)
        if heading:
            level = len(heading.group(1))
            label = heading.group(2)
            anchor = slugify(label)
            if level == 1:
                index += 1
                continue
            if level == 2:
                headings.append((label, anchor))
            pieces.append(f'<h{level} id="{anchor}">{inline(label)}</h{level}>')
            index += 1
            continue
        if line.startswith("| ") and index + 1 < len(lines) and re.match(r"^\|[\s|:-]+\|$", lines[index + 1]):
            headers = [part.strip() for part in line.strip().strip("|").split("|")]
            index += 2
            rows: list[list[str]] = []
            while index < len(lines) and lines[index].startswith("| "):
                rows.append([part.strip() for part in lines[index].strip().strip("|").split("|")])
                index += 1
            head = "".join(f"<th scope=\"col\">{inline(cell)}</th>" for cell in headers)
            body = "".join("<tr>" + "".join(f"<td>{inline(cell)}</td>" for cell in row) + "</tr>" for row in rows)
            pieces.append(f'<div class="table-wrap"><table><thead><tr>{head}</tr></thead><tbody>{body}</tbody></table></div>')
            continue
        if line.startswith(">"):
            block: list[str] = []
            while index < len(lines) and lines[index].startswith(">"):
                block.append(lines[index].lstrip("> "))
                index += 1
            paragraphs = "".join(f"<p>{inline(part)}</p>" for part in "\n".join(block).split("\n\n") if part.strip())
            pieces.append(f"<blockquote>{paragraphs}</blockquote>")
            continue
        if re.match(r"^(- |\d+\. )", line):
            ordered = bool(re.match(r"^\d+\. ", line))
            tag = "ol" if ordered else "ul"
            items: list[str] = []
            while index < len(lines) and re.match(r"^(- |\d+\. )", lines[index]):
                item = re.sub(r"^(- |\d+\. )", "", lines[index])
                if item.startswith("[ ] "):
                    item = '<span class="check-box" aria-hidden="true"></span>' + inline(item[4:])
                else:
                    item = inline(item)
                items.append(f"<li>{item}</li>")
                index += 1
            pieces.append(f"<{tag}>" + "".join(items) + f"</{tag}>")
            continue
        paragraph = [line]
        index += 1
        while index < len(lines) and lines[index].strip() and not re.match(r"^(#{1,3} |```|> |\| |-|\d+\. )", lines[index]):
            paragraph.append(lines[index])
            index += 1
        pieces.append(f"<p>{inline(' '.join(paragraph))}</p>")
    return "\n".join(pieces), headings


def layout(title: str, description: str, path: str, body: str, active: str = "") -> str:
    canonical = DOMAIN + path
    nav = [
        ("Guides", "/guides/"),
        ("About", "/about/"),
        ("Contact", "/contact/"),
    ]
    links = "".join(
        f'<a href="{url}"{(" aria-current=\"page\"" if label == active else "")}>{label}</a>'
        for label, url in nav
    )
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{html.escape(title)} | Assetly</title>
  <meta name="description" content="{html.escape(description, quote=True)}">
  <link rel="canonical" href="{canonical}">
  <link rel="stylesheet" href="/assets/style.css">
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4853830432940647" crossorigin="anonymous"></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="shell header-inner">
      <a class="brand" href="/" aria-label="Assetly home"><span class="brand-mark" aria-hidden="true">A<span class="brand-dot">.</span></span><span>Assetly<small>File practice for creative work</small></span></a>
      <nav aria-label="Main navigation">{links}</nav>
    </div>
  </header>
  <main id="main">{body}</main>
  <footer class="site-footer">
    <div class="shell footer-inner"><div><strong>Assetly</strong><p>Clearer files. Easier handoffs.</p></div><nav aria-label="Footer navigation"><a href="/guides/">Guides</a><a href="/about/">About</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a><a href="/terms/">Terms</a></nav></div>
    <div class="shell footer-bottom">Original guides and fictional teaching examples. © 2026 Assetly.</div>
  </footer>
</body>
</html>"""


def card(article: dict[str, str]) -> str:
    return f'<a class="guide-card" href="{article["url"]}"><span class="card-kicker">{html.escape(article["category"])}</span><h3>{html.escape(article["title"])}</h3><p>{html.escape(article["description"])}</p><span class="card-action">Read guide <span aria-hidden="true">↗</span></span></a>'


def write_page(path: str, content: str) -> None:
    target = OUTPUT / path.lstrip("/") / "index.html" if path != "/" else OUTPUT / "index.html"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(content, encoding="utf-8")


def build() -> None:
    articles = [read_article(path) for path in sorted(CONTENT.glob("*.md"))]
    if len({item["slug"] for item in articles}) != len(articles):
        raise ValueError("Duplicate article slug")
    if OUTPUT.exists():
        if OUTPUT.resolve().parent != ROOT.resolve() or OUTPUT.name != "dist":
            raise RuntimeError("Refusing to clean output outside the workspace dist directory")
        shutil.rmtree(OUTPUT)
    (OUTPUT / "assets").mkdir(parents=True)
    shutil.copy2(STATIC / "style.css", OUTPUT / "assets" / "style.css")
    shutil.copy2(STATIC / "google9a048b4d22be138f.html", OUTPUT / "google9a048b4d22be138f.html")

    for article in articles:
        rendered, headings = markdown(article["body"])
        contents = "".join(f'<a href="#{anchor}">{html.escape(label)}</a>' for label, anchor in headings)
        body = f'''<div class="shell article-shell"><div class="breadcrumbs"><a href="/">Home</a><span>/</span><a href="/guides/">Guides</a><span>/</span><span>{html.escape(article['category'])}</span></div><div class="article-grid"><article class="article"><div class="article-intro"><span class="eyebrow">{html.escape(article['category'])} · Field guide</span><h1>{html.escape(article['title'])}</h1><p class="deck">{html.escape(article['description'])}</p></div><div class="prose">{rendered}</div><div class="article-end"><span>Keep working</span><a href="/guides/">Explore all guides ↗</a></div></article><aside class="toc" aria-label="On this page"><div class="toc-sticky"><strong>In this guide</strong>{contents}<a class="toc-all" href="/guides/">All guides ↗</a></div></aside></div></div>'''
        write_page(article["url"], layout(article["title"], article["description"], article["url"], body, "Guides"))

    groups = "".join(
        f'<section class="guide-group" id="{group.lower()}"><div class="section-heading"><span class="eyebrow">{group}</span><h2>{group}</h2><p>{GROUP_COPY[group]}</p></div><div class="card-grid">' + "".join(card(article) for article in articles if article["category"] == group) + "</div></section>"
        for group in GROUPS
    )
    guide_body = f'<div class="shell"><div class="page-hero"><span class="eyebrow">The library</span><h1>Find the right file. Then make it easier for someone else to use.</h1><p>Twelve practical guides follow a creative asset from working folder to finished handoff. Start with the problem in front of you.</p><div class="topic-links"><a href="#organize">Organize</a><a href="#prepare">Prepare</a><a href="#deliver">Deliver</a></div></div>{groups}</div>'
    write_page("/guides/", layout("Guides", "Original guides for naming, preparing, and delivering creative files.", "/guides/", guide_body, "Guides"))

    featured = [next(a for a in articles if a["slug"] == slug) for slug in ("filename-system", "image-format-choice", "asset-delivery-checklist")]
    home = f'''<div class="shell"><section class="home-hero"><div class="hero-copy"><span class="eyebrow">A field guide for creative files</span><h1>Make your files<br><em>make sense.</em></h1><p>Name them clearly. Export them for the right use. Hand them over so the next person can find what they need.</p><a class="primary-link" href="/guides/">Explore the guides <span aria-hidden="true">↗</span></a></div><div class="file-panel" aria-label="Example project file structure"><div class="panel-top"><span>PROJECT / HARBORFIELD-LAUNCH</span><span class="panel-status">EXAMPLE</span></div><div class="tree"><div>▾ &nbsp; harborfield-launch/</div><div class="tree-child">├─ 01-brief/</div><div class="tree-child">├─ 02-source/</div><div class="tree-child">├─ 03-review/</div><div class="tree-child active-file">└─ 04-delivery/ <span>← ready to use</span></div><div class="tree-grandchild">harborfield_header_wide_v03.webp</div><div class="tree-grandchild">harborfield_social_square_v03.png</div></div><p>Fictional example, real workflow.</p></div></section><section class="pathway"><div class="section-heading"><span class="eyebrow">The workflow</span><h2>From loose files to a clear handoff.</h2></div><div class="steps"><a href="/guides/#organize"><b>01</b><h3>Organize</h3><p>Give a project a structure people can follow.</p><span>Explore organizing ↗</span></a><a href="/guides/#prepare"><b>02</b><h3>Prepare</h3><p>Choose the export that fits the job.</p><span>Explore preparation ↗</span></a><a href="/guides/#deliver"><b>03</b><h3>Deliver</h3><p>Make the approved version unmistakable.</p><span>Explore delivery ↗</span></a></div></section><section class="featured"><div class="section-heading"><span class="eyebrow">Start here</span><h2>Three guides for common file problems.</h2></div><div class="card-grid">{''.join(card(article) for article in featured)}</div><p class="all-guides"><a href="/guides/">View all twelve guides ↗</a></p></section></div>'''
    write_page("/", layout("Creative asset guides", "Original guides for organizing, preparing, and delivering creative files.", "/", home))

    simple_pages = {
        "about": ("About Assetly", "Assetly explains practical ways to organize and deliver creative files.", '''<p>Assetly is an independent editorial resource run by Albert. It is a personal website for people who work with creative files. The guides focus on naming, folder structure, formats, version decisions, and handoff notes: the small choices that make an asset usable by the next person.</p><p>We use a recurring fictional project called Harborfield Coffee to make the examples concrete. It is a teaching device, not a customer or a case study. Technical references are linked in relevant guides. We aim to keep examples reproducible and distinguish general methods from platform-specific requirements.</p><p>You can read every guide without creating an account or buying anything. If you spot an unclear step or outdated reference, use the contact route below to tell us which page needs attention.</p><p><a href="/contact/">Contact Assetly ↗</a></p>'''),
        "contact": ("Contact", "Contact Assetly about corrections, accessibility, or questions about the guides.", '''<p>Questions about a guide, a broken link, or an accessibility issue? Email <a href="mailto:support@assetly.online">support@assetly.online</a>. Include the page URL and the specific step that needs attention. Please do not send passwords, confidential client files, or private customer information.</p><p>If you purchased from the earlier Assetly store and need help with an order or download, email us with the order reference and the address used at checkout. We read correction requests and revise guides when we can verify the issue.</p>'''),
        "privacy": ("Privacy", "How the Assetly guide site handles contact messages and site data.", '''<p>This policy describes the Assetly guide site. The pages are public and do not require an account. Vercel hosts the pages and processes technical request data such as IP addresses and browser information to deliver and secure the site. See <a href="https://vercel.com/legal/privacy-policy">Vercel's privacy policy</a> for details about its processing.</p><h2>When you contact us</h2><p>If you email <a href="mailto:support@assetly.online">support@assetly.online</a>, we receive the address and information you choose to send. We use it to understand and reply to your message, including questions about earlier store orders. Do not include passwords or payment card details. Your email provider and ours also process messages under their own policies.</p><h2>Google advertising</h2><p>We load the Google AdSense script to connect this site to AdSense and prepare for advertising. Google and its partners may place or read cookies, use web beacons, and collect IP addresses or other identifiers when their services are used. Third-party vendors, including Google, may use cookies to serve ads based on your visits to this site or other websites. Google's advertising cookies enable Google and its partners to serve ads based on those visits. You can opt out of personalized advertising in <a href="https://adssettings.google.com/">Google Ads Settings</a>. Learn more about Google's use of data on <a href="https://policies.google.com/technologies/partner-sites">sites that use Google services</a>. We will provide consent choices where required before serving ads to affected visitors.</p><h2>Questions</h2><p>For a privacy question, contact <a href="mailto:support@assetly.online">support@assetly.online</a>.</p>'''),
        "terms": ("Terms of use", "Terms for reading and using the Assetly guide site.", '''<p>Assetly publishes educational guides about digital file workflows. You may read the public pages and use the ideas in your own work. The fictional examples are provided for illustration and should be adapted to your actual project requirements.</p><p>Technical formats, platform requirements, and third-party services can change. Check the current requirements of your own tools and destinations before delivering files. External links lead to sites with their own terms and privacy practices.</p><p>Do not present Assetly's articles as your own or redistribute complete copies without permission. Short quotations with a link to the source are welcome. For a reuse request or correction, contact <a href="mailto:support@assetly.online">support@assetly.online</a>.</p><p>These terms describe the guide library only. They do not create a service agreement or a guarantee that a file will work in every application.</p>'''),
    }
    for slug, (title, description, copy) in simple_pages.items():
        body = f'<div class="shell simple-page"><div class="breadcrumbs"><a href="/">Home</a><span>/</span><span>{html.escape(title)}</span></div><div class="simple-grid"><div><span class="eyebrow">Assetly</span><h1>{html.escape(title)}</h1></div><div class="prose">{copy}</div></div></div>'
        write_page(f"/{slug}/", layout(title, description, f"/{slug}/", body, title if title in {"About", "Contact"} else ""))

    urls = ["/", "/guides/", *[a["url"] for a in articles], *[f"/{slug}/" for slug in simple_pages]]
    (OUTPUT / "sitemap.xml").write_text('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + "".join(f"<url><loc>{DOMAIN}{url}</loc></url>" for url in urls) + "</urlset>", encoding="utf-8")
    (OUTPUT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {DOMAIN}/sitemap.xml\n", encoding="utf-8")
    (OUTPUT / "ads.txt").write_text("google.com, pub-4853830432940647, DIRECT, f08c47fec0942fa0\n", encoding="utf-8")
    print(f"Built {len(urls)} pages in {OUTPUT}")


if __name__ == "__main__":
    build()
