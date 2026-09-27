---
title: Choose Between JPEG, PNG, WebP, and SVG for a Creative Asset
description: A decision guide for common web image formats, with examples for photographs, screenshots, logos, and handoff files.
category: Prepare
slug: image-format-choice
---

# Choose Between JPEG, PNG, WebP, and SVG for a Creative Asset

The right image format depends on the image and the job it must do. A photograph, a screenshot with small text, and a simple logo have different requirements. Begin with the source and the recipient's use, then export and inspect a few options. Changing a filename extension is not a conversion.

## Four common choices

| Format | Good starting point for | Watch for |
| --- | --- | --- |
| JPEG | Photographs without transparency | Lossy compression and no transparent background |
| PNG | Screenshots, crisp interface details, or transparency | Larger files for photographic content in many cases |
| WebP | Web delivery when smaller raster files are useful | Check the destination's support and the actual visual result |
| SVG | Logos, icons, and simple diagrams made from shapes | The receiving platform may require a raster export |

This is a starting table, not a rule that one format always produces the smallest or best file. The result depends on the source image, export settings, and destination. MDN's [image format guide](https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Formats/Image_types) documents format properties and web delivery options.

## Example: a three-asset campaign

The fictional Harborfield Coffee project needs a café photograph, a menu screenshot, and a simple wordmark. For the photograph, make a JPEG and a WebP export at the same display dimensions, then compare file size and visible detail around faces, steam, and lettering. For the screenshot, start with PNG because small text and sharp boundaries matter. For the wordmark, preserve an editable vector source and export SVG for a web context that accepts it; also provide a raster version if the recipient's publishing system requires one.

Do not use the same format for every item merely to make the folder look consistent. Consistent naming and documentation matter more than identical extensions.

## Check the destination before export

Ask where the file will be used: a website, email, social platform, slide deck, or print document. The recipient may specify dimensions, size limits, color requirements, or accepted formats. Those requirements can overrule a general web recommendation. If you cannot confirm platform support, give the recipient a widely usable fallback and explain which file is intended for which use.

For a website you control, modern formats can be offered with fallbacks using HTML's `<picture>` element. For a single file handed to someone else, you do not control their viewer, so test the format in their actual workflow when possible.

## Export, then inspect

View each export at its intended display size and at a closer zoom. Look for blurry text, halos around edges, lost transparency, altered colors, and unexpected crops. Check the file size only after confirming the image still does its job. A smaller file that makes product details unreadable is not an improvement.

Finally, record the purpose in the file name or delivery note: `header-photo.webp`, `menu-screenshot.png`, `wordmark.svg`. The recipient should not need to guess which format is the source and which is ready to publish.

**Continue:** [Plan image dimensions and crops](/guides/image-dimensions-aspect-ratio) and run the [export quality check](/guides/image-export-checklist).
