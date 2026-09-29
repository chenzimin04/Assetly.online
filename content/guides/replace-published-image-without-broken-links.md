---
title: How to Replace a Published Image Without Breaking Its Links
description: Map every live use, publish a new image URL, update references, and check what visitors actually receive before retiring the old file.
category: Deliver
slug: replace-published-image-without-broken-links
---

# How to Replace a Published Image Without Breaking Its Links

Replacing a file in a design folder does not replace the image a visitor sees. A page may still point to the old URL, a responsive image may have an unchanged `srcset`, or a cache may continue to serve the old bytes. Deleting the old image first can leave a broken page or an email with a dead image.

This guide is for a small website team replacing one already published image. It uses a **fictional** Harborfield Coffee homepage. The names and results below are a worked example, not a report of a real deployment.

## Record the current image and every known use

Start at the published page, not the working folder. Write down the page URL, the image URL it currently requests, the placement, and the person who can approve the replacement. Check the page's `<img src>`, any `srcset` or `<picture>` sources, and any relevant CSS background. Also check a social preview image such as `og:image` if the page has one. A CMS may store these references in separate fields.

Search the site's content or templates for the exact old filename. Then ask whether the URL was also used in an email, a downloadable file, or another site. A search of one codebase cannot prove that an externally shared URL is unused. Mark those uses **unknown** until someone checks them.

For our sample, the current record is:

| Field | Fictional value |
| --- | --- |
| Page | `https://harborfield.example/` |
| Current hero URL | `/images/harborfield-hero-v03.webp` |
| New approved export | `harborfield-hero-v04.webp` |
| Known references | Homepage `<img src>` and social preview `og:image` |
| Still to check | Welcome email template and any externally shared image URL |

The fictional `.example` domain is only a placeholder. On a real project, capture the actual URLs and approval record before changing anything. If the image itself attracts search traffic, record its current Search Console page and image performance before replacing or retiring its URL; do not assume the effect will be zero.

## Prepare a new URL before changing the page

Export the approved replacement and open the file outside the design application. Compare its crop, dimensions, text, and format with the destination's requirements. The [image export checklist](/guides/image-export-checklist) covers that file review. Give the replacement its own URL, such as `/images/harborfield-hero-v04.webp`, when the content has meaningfully changed.

Why use a new URL? HTTP caches can treat a response as fresh for a period set by `Cache-Control: max-age` or related rules. Overwriting the bytes at the old URL does not guarantee that every visitor immediately receives those new bytes. A new URL lets the updated page request a distinct resource; it does **not** by itself update cached HTML, old emails, or references elsewhere. The exact behavior depends on the site's browser, CDN, and hosting configuration. If a same-URL replacement is unavoidable, coordinate the host's cache invalidation and verify the result rather than assuming that an upload clears every cache.

Upload or stage the new file first. Open its direct URL and check that it loads the intended image. Keep the old file available while you change references, especially if its external uses are not yet known.

## Change the references together

Update every reference that should show the new picture. In the fictional homepage, that means the `<img src>` and `og:image` value. If the page uses responsive variants, update each relevant `srcset` or `<picture>` source and keep a working `<img src>` fallback. Google's [image SEO guidance](https://developers.google.com/search/docs/appearance/google-images) says it can discover images from an `<img>` `src` and recommends a fallback when using responsive image markup. A CSS background used only for decoration may have a different role; inspect it for visual correctness, but do not assume it replaces a meaningful `<img>`.

Keep the page's existing URL unless the page itself is changing for a separate reason. Review the image's alternative text in the page context. If the new image conveys different information, the old alt text may now be inaccurate; if it is decorative, an empty alternative may be appropriate. The [alt-text guide](/guides/alt-text-for-creative-assets) helps make that decision. Do not mechanically copy the filename into `alt`.

For a small release, use a change note that ties the file to its references:

```text
Change: homepage hero v03 -> v04 (fictional example)
New image URL: /images/harborfield-hero-v04.webp
Update: homepage img src; social preview og:image
Check: responsive sources, CSS references, welcome email template
Keep v03 available until external uses and rollback window are decided
Approved copy/crop: verify against the current review record
```

The note does not mark the welcome email as updated. It remains an open check until someone inspects that template.

## Verify the published result as a visitor would

After the page is published, open the public page and the new image URL. Check both a narrow and a wide viewport if the site serves responsive variants. Inspect the page's actual image request or rendered HTML: is it asking for `v04`, and does the response show the expected picture? A private browser window is useful for a second view, but it is not proof that all CDN caches or old email clients have updated.

Use this compact sign-off list:

1. The new URL opens and displays the approved file.
2. The published page requests the new URL in every intended placement and responsive variant.
3. The image is readable at the displayed size; the surrounding text and alt text still fit its meaning.
4. Social preview metadata and other known references have been checked.
5. The old URL remains available or has a documented retirement decision for its known uses.

If the page still requests `v03`, fix the page reference or the published HTML first. If it requests `v04` but shows old pixels, inspect the actual file at `v04` and the response's cache behavior. Do not keep renaming files at random; identify which layer is wrong.

## Retire the old image only after tracing its users

Once the replacement is stable, decide whether to keep the old URL for earlier emails or records, redirect it to a genuinely equivalent image, or remove it under the site's retention policy. An old campaign email may need to keep showing the image it originally sent; a corrected safety or legal claim may need a different decision. Ask the owner of that use rather than applying one rule to every file.

This process begins where the [asset version guide](/guides/asset-version-control) ends. That guide explains how to name and approve `v04`; this one follows the URL through publication, caches, and retirement. If the old file is also being removed from a shared folder, use the [duplicate-file cleanup guide](/guides/duplicate-file-cleanup) to check other references before deletion.

## Sources checked for this draft

- [Google Search Central: Image SEO best practices](https://developers.google.com/search/docs/appearance/google-images) — checked 29 September 2026 for image discovery, responsive fallback, page context, filenames, and alt text.
- [RFC 9111: HTTP Caching](https://www.rfc-editor.org/rfc/rfc9111.html) — checked 29 September 2026 for freshness and `Cache-Control: max-age` behavior.
