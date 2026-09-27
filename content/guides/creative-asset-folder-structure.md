---
title: A Practical Folder Structure for Creative Assets
description: Organize briefs, source files, review exports, and delivered files so a teammate can find the correct asset without extra explanation.
category: Organize
slug: creative-asset-folder-structure
---

# A Practical Folder Structure for Creative Assets

A folder structure succeeds when it answers two questions: where should a new file go, and where should a finished file be found? Start with the work that happens in a project, not with a large taxonomy copied from another team. A five-folder structure can be enough for a small campaign.

## Example structure

For the fictional Harborfield Coffee launch, begin with:

```text
harborfield-launch/
  01-brief/
  02-source/
  03-review/
  04-delivery/
  05-reference/
  README.txt
```

The numbered prefixes keep the stages in a consistent order. `01-brief` contains the approved request, product facts, and copy. `02-source` contains editable design files and working assets. `03-review` contains exports shared for feedback. `04-delivery` contains only files ready for handoff. `05-reference` contains licensed or supplied material used as input. `README.txt` explains what was delivered and where the original source lives.

The labels can change. The important distinction is between material being edited, material under review, and material someone is expected to use.

## Define what does not belong

Do not put every image downloaded during research into `04-delivery`. Do not make `final/` the default place for a file simply because it looks polished. A delivery folder should be small enough that a recipient can open it and know which files to use. If you need to preserve abandoned concepts, keep them in the source area or an archive with a clear status.

Keep sensitive credentials and private client information outside a broadly shared asset folder. The folder layout should reflect who can access it; a neat directory name does not provide access control.

## Handle variants by project, not by endless folders

Subfolders are useful when a category is large. For example, `04-delivery/social/` and `04-delivery/web/` may help when each contains many files. For three exports, the extra layer may slow people down. Use descriptive file names for small sets and add subfolders only when a real retrieval task becomes difficult.

If the same asset has desktop, mobile, and print versions, keep them near each other or use matching stems. Do not create separate folders that make it hard to compare what changed between variants.

## Create a handoff note

A simple note prevents many support questions:

```text
Project: Harborfield Coffee launch (fictional example)
Delivered: 2026-09-24
Use: web header, square social graphic, email banner
Approved version: v03
Source files: ../02-source/
Questions: contact the project owner through the agreed channel
```

For a real project, replace the example details and include any usage limits or linked documentation that the recipient needs. Do not put a license in the note unless you have the right to grant it.

## Review the structure after one project

Ask the person receiving the files to find the approved square graphic and its editable source. If they open a review draft first, the structure needs a clearer stage distinction. If no one uses a folder, remove it. File organization should reduce decisions rather than create a new ceremony.

**Continue:** [Choose a naming rule](/guides/filename-system) and use the [delivery checklist](/guides/asset-delivery-checklist) before handing files over.
