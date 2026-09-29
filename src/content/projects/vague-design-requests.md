---
title: Interpreting Vague Design Requests
subtitle: Preserving direction and magnitude in conversational search
summary: A study of how expressions such as “a little more” can be translated into structured design requests without losing the size of the intended change.
year: "2026"
period: June – August 2026
category: Research internship
order: 2
featured: true
role: Prompt design, utterance analysis & evaluation
context: HCC Lab · KDMS 2026 poster
credit: "Research conducted during an HCC Lab internship at Hanyang University. Report advisors: Myungjin Kim and Kyungsik Han. Poster authors: Jangwoo Park, Myungjin Kim, and Kyungsik Han."
tags: [Natural Language, LLM Prompts, KDMS Poster]
heroCaption: "An illustrative example of the study’s two-axis classification: adjustment direction and the expressed magnitude of change."
gallery:
  - image: ../../assets/hcc-pipeline.png
    alt: Flowchart of a prompt pipeline extracting concepts and attributes, applying search-state operations and weight adjustments, then producing JSON.
    caption: The broader internship task translated conversational requests into structured updates to an image-search state.
  - image: ../../assets/hcc-conversation.png
    alt: A six-turn fashion image-search conversation illustrating how successive requests update concepts, categories, attributes, and exclusions.
    caption: A worked six-turn conversation from the report illustrates how search conditions accumulate and change.
---

## The question

In conversational design support, a request such as “reduce it a little” carries both a direction and a rough magnitude. If a system treats it exactly like “reduce it a lot,” part of the user’s intention is lost.

During my HCC Lab internship, I designed the LLM prompts that translate requests into structured search-state updates for a conversational image-search project. My contribution focused on this interpretation pipeline and the degree-expression study, within the lab’s broader system.

## From search state to degree expressions

The prompt pipeline extracts concepts, categories, attributes, and exclusions. It interprets requests through five operations: **EXPAND, NARROW, DELETE, REFINEMENT, and WEIGHT**, then produces structured JSON updates.

Building on this work, I analyzed **189 user utterances** from image-generation and conversational interactions. **46 utterances (24.3%)** contained degree expressions, including relative adjustments, words such as “more” or “less,” excess expressions, and attribute modifiers.

I separated interpretation into two axes:

| Axis | Categories | Purpose |
| --- | --- | --- |
| Adjustment | primary, moderately, decrease | Direction and priority of an adjustment |
| Magnitude | slight, default, strong | Expressed size of a change |

For `primary`, magnitude is `null`: selecting an element as the highest priority does not specify a size of change.

## Evaluation and findings

I constructed a ten-input fashion-search scenario with **26 checks across five evaluation criteria**, and repeated the checks three times using GPT-4o.

In the first evaluation, the degree-classification criterion passed 22 of 24 checks. The other criteria passed. I examined the errors and clarified the handling of quantity-limiting expressions and the distinction between strong emphasis and highest priority.

After revision, all 26 checks passed across three repetitions in the second evaluation. This was a re-evaluation of the same development test suite. It does not establish 100% accuracy on unseen user requests; broader testing, comparison prompts, and more repetitions remain necessary.

One useful boundary case was “조금만 넣어줘” (“add only a little”). The study’s policy mapped this to a limiting adjustment. Whether such language implies reduction or a small addition can depend on the existing state, making context an important question for further work.

## Poster

**LLM 기반 지원 시스템을 위한 사용자의 모호한 정도 표현 유형 분석 및 분류 프롬프트 설계**

**Jangwoo Park**, Myungjin Kim, and Kyungsik Han. 2026 Korea Data Mining Society Summer Conference. **Poster P2-23**.

English title used in my CV: *Analyzing Types of Vague Degree Expressions and Designing a Classification Prompt for LLM-based Support Systems*.

This poster presents the degree-expression analysis and classification study developed within the internship project.
