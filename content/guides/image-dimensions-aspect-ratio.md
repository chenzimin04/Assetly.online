---
title: Image Dimensions and Aspect Ratios Without Guesswork
description: Learn a repeatable way to plan image dimensions, crops, and text-safe areas before exporting assets for multiple placements.
category: Prepare
slug: image-dimensions-aspect-ratio
---

# Image Dimensions and Aspect Ratios Without Guesswork

An image's dimensions describe its pixel width and height. Its aspect ratio describes the shape. A 1600 × 900 image and an 800 × 450 image have the same 16:9 ratio, but different pixel counts. Changing a ratio usually requires a crop, extra canvas, or a new layout; simply resizing does not make a wide composition square.

## Begin with placements

List every place the asset will appear before creating variants. For the fictional Harborfield Coffee launch, the list might include a wide website header, a square social post, and a narrow email banner. Record the real dimensions requested by each publishing system. If no dimensions are specified, inspect the actual layout rather than selecting a size because it sounds standard.

Draw a rectangle for each placement and mark where a face, product, logo, or text must remain visible. A crop that removes background may be harmless; a crop that cuts the product label changes the meaning of the image.

## Calculate a ratio

Divide width by height. A 1200 × 1200 image is 1:1. A 1600 × 900 image is about 1.78:1, commonly expressed as 16:9. For a target ratio, calculate the crop before exporting. If a 1600 × 900 image must become square without stretching, the largest centered square is 900 × 900. You will lose 700 pixels of horizontal area in total, usually 350 from each side. If the subject is off-center, move the crop window rather than blindly centering it.

This arithmetic says what is possible, not what looks good. A composition with text near an edge may need a separate design for each placement.

## Do not confuse pixel count with quality

Exporting a small source at a larger pixel size cannot restore detail that was never present. For a raster image, start from an adequately detailed source and inspect the actual exported result. For a vector graphic, use the editable source to generate each required size. Be cautious with tiny text: an image can have enough pixels overall while its labels are still unreadable on a phone.

## Make a variant plan

| Placement | Shape | Keep visible | Action |
| --- | --- | --- | --- |
| Website header | Wide | Product and short headline | Use a wide composition |
| Square post | Square | Product and logo | Reposition elements, then export |
| Email banner | Narrow | Product name | Simplify copy and crop |

These are example placements, not universal platform specifications. Replace them with the current requirements of the channels you use.

## Inspect in context

Put each export into a mock page or the actual publishing preview. Check on a phone and a larger screen. The file should preserve the important subject, avoid unintended cropping, and keep any text legible. If the publishing platform applies its own crop, adjust the source composition and preview again.

**Continue:** [Choose the image format](/guides/image-format-choice) and [check the export](/guides/image-export-checklist) before delivery.
