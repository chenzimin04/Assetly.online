---
title: How to Document Image and Font Permissions Before a Creative Handoff
description: Build a small rights register that tells the next person what they may publish, edit, credit, or need to check before using each creative asset.
category: Deliver
slug: document-font-image-rights-for-handoff
---

# How to Document Image and Font Permissions Before a Creative Handoff

A folder of approved exports does not tell the next person whether an image may appear in a paid campaign, whether a font file may be shared, or where a credit must appear. Add a short rights register to the package so the recipient can answer those questions before publishing. This guide is about recording decisions and evidence, not determining legal ownership.

## Start with the intended uses

List the actual destinations in the brief: for example, a website header, a paid social post, and an editable design file for a client. A permission that covers one destination should not be silently treated as permission for every destination. Record the owner or contact who can resolve an unclear use.

Then inventory each outside input, not just the final export: photographs, illustrations, icons, font families, and any material supplied by a contractor. A font visible in a flattened image raises a different handoff question from the font software needed to edit a source file. Keep those separate in the register.

## Make one row per asset and permission source

A spreadsheet or CSV is enough. Use columns that answer a recipient's practical questions:

| Field | What to record |
| --- | --- |
| Asset ID and file | The exact file or font family, plus the version if relevant |
| Source and creator | Where it came from and whom to credit, when known |
| Permission evidence | Agreement, purchase record, license URL, or written approval, with its date |
| Intended uses | The channels and deliverables actually checked |
| Credit or other conditions | Exact approved wording and where it must appear |
| Editable-file transfer | Whether source files or font software can be passed to the recipient |
| Status and owner | Cleared, blocked, or needs review; person who will decide |

Keep the evidence itself in a restricted project reference folder when it contains personal or commercial terms. Put a pointer in the register rather than copying a private agreement into a public delivery folder. A link alone may later change or disappear, so preserve the relevant license version or dated permission record where your team can access it.

## Worked example: an incomplete launch package

Harborfield Coffee is an invented café. This example does not describe real licenses or approvals. Its weekend campaign has a website header and social image. The designer creates the layout, but a freelance photographer supplied the product photo and the editable file uses a font activated through a subscription service.

```csv
asset_id,file,permission_evidence,intended_uses,credit_or_conditions,editable_transfer,status,owner
PHOTO-01,coffee-bag-photo.jpg,photographer-agreement-pending,website header + paid social,confirm with photographer,no decision yet,BLOCKED,project owner
FONT-01,display-font-family,provider-license-link-to-check,flattened exports + editable source,check provider terms,do not include font software until checked,NEEDS REVIEW,designer
BRAND-01,harborfield-wordmark.svg,client-approval-2026-09-30,website header + social image,none specified,source transfer approved in example,CLEARED,project owner
```

The date and records above are fictional. The important result is that `PHOTO-01` stays out of the publishing folder until its intended uses are confirmed. A design approval is not a substitute for usage permission. The font question remains open for the editable source even if the recipient can view a flattened export.

## Check the actual license, then prepare the handoff

Read the terms for the *specific asset and license version*. For instance, [Creative Commons Attribution 4.0](https://creativecommons.org/licenses/by/4.0/) requires appropriate credit, a license link, and an indication of changes when its material is shared. That example does not mean every Creative Commons license has identical terms, or that the license resolves privacy and publicity rights. If you use a CC BY asset, put the actual creator, source link, license link, and change note in the register and place the required credit where the audience will encounter it.

Font permissions are particularly easy to overread. [Adobe's guidance on packaging font files](https://helpx.adobe.com/fonts/web/getting-and-using-fonts/package-font-files.html) says its font files cannot simply be copied or moved with a client package under Adobe Fonts terms; other font licenses can differ. Record the font name and provider, then let each recipient obtain access in the way the applicable license permits. Do not zip a font file into the package just because the design application offers a packaging command.

Before sending, compare every approved export and editable source against the register. Move any unresolved item to a clearly named `hold` area. Give the recipient a short delivery note naming the cleared files, the credit instructions, and the contact for questions. Ask the recipient to find the website image's permission row and explain whether they can use it in a new paid placement. If the row does not answer that question, the handoff is not yet complete.

For the rest of the package, use the [creative asset delivery checklist](/guides/asset-delivery-checklist) and keep approvals tied to a [specific asset version](/guides/asset-version-control).

## Sources

- [Creative Commons, Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). The license summary states the attribution and change-notice conditions and warns that other rights may be needed.
- [Adobe Fonts, Packaging font files](https://helpx.adobe.com/fonts/web/getting-and-using-fonts/package-font-files.html). Consulted for the font-transfer example; check the actual provider and license for a real project.

