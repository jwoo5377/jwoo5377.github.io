---
title: DesignTrace
subtitle: Decision support through cross-project recall
summary: A prototype that brings a designer’s own past decisions into new spatial design situations, making the reasoning behind each choice visible and reusable.
year: "2026"
period: Spring 2026
category: Research prototype
order: 1
featured: true
role: Solo project · Concept, implementation & evaluation
context: Design Computing · Hanyang University
credit: "An individual project by Jangwoo Park. Course advisor: Prof. Kyung Hoon Hyun. Interface images are reproduced from the project presentation."
tags: [Human–AI Interaction, Design Support, Prototype]
hero: ../../assets/designtrace-graph.png
heroAlt: DesignTrace interface showing a project timeline and an expanded graph of a design decision, including criteria, candidate options, and rationale.
heroCaption: The decision graph makes the reasoning behind a selected design direction inspectable. Screenshot from the project presentation.
gallery:
  - image: ../../assets/designtrace-recall.png
    alt: DesignTrace recall panel displaying related decisions from a previous project and an option to cite a decision as a rationale.
    caption: Past decisions appear alongside the current task. The designer chooses whether to cite them as a basis for a new judgment.
---

## The question

Designers develop valuable judgment through a project, but the reasons behind their choices can remain buried in that project’s files. How might those decisions become available when a similar issue arises in a new project?

> How can a design tool help people build on the judgment they have already developed?

DesignTrace explores this question in early spatial design. I independently developed the concept, implemented the prototype, and conducted a formative study.

## How it works

The system connects an **Active Design Loop** with a **Cross-Project Memory**.

1. **Make reasoning visible.** Project context is organized into a graph of background, issues, criteria, options, and rationales.
2. **Compare and decide.** The designer reviews candidate options and visual artifacts, including bubble diagrams and schematic plans. The system records choices, preference strength, and constraints.
3. **Carry judgment forward.** Decisions accumulate across projects. A keyword retriever gathers candidates, then an LLM ranks their relevance without discarding lower-ranked candidates.
4. **Keep the designer in control.** The designer decides which recalled judgment to cite and confirms or declines suggested changes in the direction of inquiry.

## Formative study

Three interior architecture students completed two zoning tasks. They first designed a street-facing café with no prior decisions in the memory pool, then a coworking lounge with their café decisions available for recall. Each task was capped at 40 minutes.

Participants used prior decisions as a basis for new choices. In one example, a café decision separating ordering, preparation, and seating areas became relevant to separating social and work areas in the coworking task.

Recall suggestions received positive ratings for relevance and usability, averaging approximately **6.3 out of 7** on each item. The study also revealed a tradeoff: one participant found that reading the recalled reasoning added work.

## What I learned

Making a past decision available is only part of the problem. Its rationale must be understandable, relevant to the new context, and worth the effort of reading.

The study was exploratory, with only three participants and a fixed task order. Task differences and practice effects cannot be separated from recall, so the observations do not establish a causal improvement in efficiency. Surface-level word matching could also retrieve unsuitable precedents.

Future work would examine concept-aware retrieval and a larger, counterbalanced study across projects over time.
