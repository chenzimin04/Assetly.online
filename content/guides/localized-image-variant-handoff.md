---
title: How to Hand Off Localized Image Variants Without Mixing Languages
description: Build a placement-by-language manifest, hold unapproved variants, and let a recipient identify the right creative file without guessing.
category: Deliver
slug: localized-image-variant-handoff
---

# How to Hand Off Localized Image Variants Without Mixing Languages

A designer can export every requested image and still send an unusable package. The wide English banner may sit beside a square French post, both named “final.” A recipient who has to open each file and guess the placement can publish the wrong language or an unapproved line of copy.

The fix is to treat **placement** and **language** as two separate decisions. Make a small matrix before exporting, give each approved combination an exact filename, and show the recipient which combinations are ready. This guide uses a fictional Harborfield Coffee campaign; the files and decisions are teaching examples, not a real client delivery.

## Start with a placement-by-language matrix

Write one row for each combination the request actually needs. Do not assume that every placement needs every language. Record the destination's size or format requirements from its current specification rather than copying numbers from a previous campaign.

In our example, the request calls for a wide website hero and a narrow email banner in English and French:

| Placement | Language | Approved copy reference | Export | Review state |
| --- | --- | --- | --- | --- |
| Website hero | English | COPY-14-EN | `harborfield_hero_en_v02.webp` | Approved |
| Website hero | French | COPY-14-FR | `harborfield_hero_fr_v02.webp` | Awaiting language review |
| Email banner | English | COPY-18-EN | `harborfield_email_en_v02.png` | Approved |
| Email banner | French | COPY-18-FR | `harborfield_email_fr_v02.png` | Approved |

The copy references stand for entries in the fictional brief. They are not claims that a French translation has been checked. The matrix immediately exposes the incomplete item: the French hero exists as a review export, but it is not ready for delivery.

## Make the language label unambiguous

Choose labels once and use them in the brief, review notes, filenames, and delivery manifest. For a simple language distinction, `en` and `fr` are clearer than labels such as `international` or `overseas`. If a regional distinction actually matters, record why before adding it. The W3C's [language-tag guidance](https://www.w3.org/International/questions/qa-choosing-language-tags) advises starting with the language and adding a region only when that extra distinction is useful. These tags are a **team naming convention** for the files here, not a claim that creative filenames must follow a web standard.

Do not infer approval from the label. `_fr_` says which language the file is intended for; it does not prove the wording, accent marks, product name, or legal line was reviewed. A reviewer who can assess that language should check the image at its intended display size, alongside the approved copy reference. If no qualified reviewer is available, mark the variant as waiting rather than silently treating a machine translation as approved.

## Review each image as an image

Text can change length between languages. The same frame may crop a word, crowd a button, or cover the product when the copy changes. Open every meaningful variant separately and inspect:

- the text against its approved copy reference;
- line breaks, accents, punctuation, and product names;
- the crop and text-safe area in the actual placement;
- contrast and readability at the likely display size;
- whether a logo or other element should remain unchanged.

For a web placement, consider whether the headline can be real page text instead of being baked into the picture. The [W3C guidance on images of text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) explains that real text is generally easier for people to adjust, with defined exceptions. A social graphic may have different production constraints; the point is to make the choice deliberately. If essential meaning remains inside an image, also prepare the page or platform's appropriate text alternative rather than assuming the filename will communicate it.

## Keep review files out of the delivery set

For the fictional example, the French hero has not passed language review. Keep it in the review area:

```text
03-review/
  harborfield_hero_fr_v02.webp

04-delivery/
  harborfield_hero_en_v02.webp
  harborfield_email_en_v02.png
  harborfield_email_fr_v02.png
  MANIFEST.txt
```

The three files in `04-delivery` are the only approved exports in this sample. A recipient asked for four combinations, so this is an **incomplete package**. Do not send it as a complete multilingual set. Either wait for the French hero review or obtain an explicit decision to deliver the approved subset first. If a partial handoff is agreed, say exactly which placement is missing and who will supply it.

An accompanying manifest could say:

```text
Project: Harborfield Coffee seasonal campaign (fictional example)
Approved set for this partial handoff: v02
Website hero / English: harborfield_hero_en_v02.webp
Email banner / English: harborfield_email_en_v02.png
Email banner / French: harborfield_email_fr_v02.png
NOT INCLUDED: website hero / French — awaiting language review.
Copy references: COPY-14-EN, COPY-18-EN, COPY-18-FR.
Do not use files from 03-review for publication.
```

Before sending, open the package through the same route the recipient will use. Ask someone unfamiliar with the project to find the French email banner and the English website hero using only the manifest. If they need to inspect thumbnails to decide, improve the names or the map.

## Handle a late correction without losing the trail

Suppose the French hero is approved after the partial handoff. Export a new approved file and update the manifest. If the copy changed from the reviewed `v02`, make a new version such as `v03`; do not silently replace the contents of a file already delivered as `v02`. Tell the recipient what the new file replaces and whether any published use needs an update. The [version guide](/guides/asset-version-control) explains how to tie that decision to the file.

This process is narrower than a general [asset delivery checklist](/guides/asset-delivery-checklist): it prevents a specific mix-up at the intersection of language, placement, and approval. For planning crops before export, use the [dimensions and aspect-ratio guide](/guides/image-dimensions-aspect-ratio). For writing alternatives to informative images, use the [alt-text guide](/guides/alt-text-for-creative-assets).

## Sources checked for this draft

- [W3C Internationalization: Choosing a language tag](https://www.w3.org/International/questions/qa-choosing-language-tags) — checked 28 September 2026 for the distinction between language and optional region subtags.
- [W3C WAI: Understanding Images of Text](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text) — checked 28 September 2026 for the web accessibility point about real text versus images of text.
