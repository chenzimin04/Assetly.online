---
title: An End-to-End Creative Asset Handoff Example
description: Follow a fictional campaign from brief through naming, format selection, version approval, export, and delivery.
category: Deliver
slug: asset-handoff-example
---

# An End-to-End Creative Asset Handoff Example

This is a fictional teaching example. Harborfield Coffee is an invented café, and the files and approval notes below are illustrative. The purpose is to show how several small practices work together, not to imply a real client project or measured outcome.

## The request

The café needs three pieces for a weekend launch: a wide website header, a square social post, and a narrow email banner. The approved product name is “Autumn Blend.” The team has a product photo, a simple wordmark, and a short line of copy. The person publishing the materials needs ready-to-use images; the designer needs to keep editable sources.

Before design starts, the project owner writes down where each piece will appear, who approves the copy, and which account or tool will publish it. The team does not assume one crop will fit all three placements.

## The workspace

```text
harborfield-launch/
  01-brief/
  02-source/
  03-review/
  04-delivery/
  05-reference/
  README.txt
```

The brief and approved copy live in `01-brief`. The original photo and its usage information go in `05-reference`. Editable layouts stay in `02-source`; review exports go in `03-review`. Only approved files move to `04-delivery`.

## Design and version decisions

The first wide composition leaves room for a headline beside the coffee bag. A centered square crop would cut the headline, so the designer rearranges the text for the square version instead of stretching the wide image. `v01` is reviewed. The owner asks for a shorter line of copy, producing `v02`. The email banner text is hard to read at its actual display size, so it is simplified and exported again as `v03`.

The review note records that `v03` is approved for all three placements. “Approved” is tied to those specific exports, not to every file created that day.

## Format and export choices

The website header is exported as WebP with a JPEG alternative for the publishing workflow. The square social image is a PNG because it includes crisp text and graphic elements. The source layout is preserved in its editable form. These choices are examples; a real team should follow the destination's current requirements and inspect each export.

The designer opens every exported file, checks the product label, reads the text at likely display size, and verifies the crops. A smaller file is accepted only if the important details remain clear.

## Delivery note

```text
Project: Harborfield Coffee weekend launch (fictional example)
Approved set: v03
Website header: harborfield_header_wide_v03.webp
Website alternate: harborfield_header_wide_v03.jpg
Square post: harborfield_social_square_v03.png
Email banner: harborfield_email_narrow_v03.png
Editable sources: 02-source/
Please publish only the files in 04-delivery/.
```

The sender opens the shared package through the recipient-facing link. The recipient confirms that the three intended images can be identified without opening the review folder. If a new product name arrives later, the team creates `v04`, replaces published uses deliberately, and updates the note rather than overwriting `v03` silently.

## What this example teaches

The folder structure shows the stage of work. File names show the asset and variant. A review note identifies approval. The delivery note maps files to uses. No single convention solves every problem, but together they make a handoff easier to inspect and correct.

**Use the pieces separately:** [Naming](/guides/filename-system), [Formats](/guides/image-format-choice), [Versions](/guides/asset-version-control), and the [Delivery Checklist](/guides/asset-delivery-checklist).
