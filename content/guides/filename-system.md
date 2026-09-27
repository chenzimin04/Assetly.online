---
title: A File Naming System People Can Actually Follow
description: Build a compact naming rule for creative assets with a worked example and a migration plan for an existing folder.
category: Organize
slug: filename-system
---

# A File Naming System People Can Actually Follow

The purpose of a file name is to make the correct file recognizable before anyone opens it. A naming rule should answer the questions your team actually asks: which project, which asset, which variation, and which version? A longer name is not automatically better. If people cannot remember the rule, they will stop using it.

## Start with a retrieval test

List three situations in which someone must find a file quickly. For example: a designer needs the approved square social graphic; a colleague needs the editable source; a client needs the exported image. Write down the words those people would use. This is better evidence for a naming rule than choosing a format because it looks tidy.

For the fictional Harborfield Coffee launch, a workable pattern is:

`project_asset_variant_stage_version.extension`

An exported square image might be `harborfield_social-launch_square_final_v03.png`. Its source could be `harborfield_social-launch_square_source_v03.svg`. The shared stem makes the relationship visible, while the stage distinguishes editable work from delivery files. “Final” here means approved for this release, not that no later revision can exist.

## Use only fields that change a decision

A project prefix helps when files leave their original folder. An asset name tells you what the file contains. A variant is useful when dimensions, language, color, or audience differ. A version is useful when revisions must be compared. Date can help with regularly refreshed assets, but it may be noise for one-off work.

Choose one separator, such as a hyphen between words and an underscore between fields. Keep names readable in ordinary file managers. Avoid punctuation that can be awkward in URLs or command-line tools. Do not rename only the extension to imply a conversion; create a real export in the desired format.

## Separate status from certainty

Names such as `final-final-new2` accumulate because the team lacks a decision rule. Define who marks a file approved and where approved exports go. A `review` version stays in the working area. An approved file is copied or exported to a delivery area with a recorded version. If the client requests a change, the next version is created; the earlier approved file remains traceable.

A small register can be a text file in the project folder:

| Version | Change | Status |
| --- | --- | --- |
| v01 | First draft of the square graphic | Review |
| v02 | Shorter headline | Review |
| v03 | Revised contrast and approved copy | Delivered |

This register is an example, not a claim about a real project. Its value is that the file name and the decision history agree.

## Migrate without breaking old links

Do not rename an entire shared drive in one pass. Pick one active project, agree on the fields, and rename only files that are still being used. Keep a temporary mapping from old names to new names. Check links in documents, design files, and published pages before removing the old paths. When a naming rule fails on a real asset, change the rule and document the reason.

The best test is simple: give a colleague a folder and ask them to identify the approved export and its source without asking you. If they can do it, the rule is doing its job.

**Continue:** [Design a folder structure](/guides/creative-asset-folder-structure) and [Track versions without confusion](/guides/asset-version-control).
