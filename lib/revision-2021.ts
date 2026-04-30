// ============================================================
// Revision Series – 2021 Exam Preparation
// 8 exam-style questions mirroring the actual 2021 paper:
// 5 options (A–E), single correct answer, 60 min in the real
// exam → 40 min here at a guided pace (~5 min per question).
// Topics rotate through logarithm domain, derivatives, complex
// numbers, sequences (arithmetic / geometric / homographic),
// integrals, function image, asymptotes.
// ============================================================

import type { ExamData } from './exam-data'

export const REVISION_2021: ExamData = {
  year: 2021,
  date: 'Revision Series 2021',
  duration: 40,
  categoryId: 'revision-series',
  title: `Revision Series — Exam-Style Practice 2021`,
  instructions: `These exercises mirror the 2021 concours format (Q61–Q80, 5 options A–E, no calculator). Practice at a guided pace: 40 min for 8 questions (~5 min each). The real exam was 60 min for 20 questions — use the extra time here to study the detailed solutions carefully.`,
  questions: [
    // ── Q1: Logarithm domain ────────────────────────────────
    {
      number: 1, exercise: 1, topic: 'Logarithm', difficulty: 'easy',
      tags: ['domain', 'logarithm', 'square-root'],
      relatedTips: ['log-domain'],
      statement: `\\text{Let } f(x) = \\ln(x-2) + \\sqrt{5-x}.`,
      question: `\\text{The domain of definition } D_{f} \\text{ of } f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]2\\,;5]`, isCorrect: true },
        { id: 'B', latex: `[2\\,;5]`, isCorrect: false },
        { id: 'C', latex: `]2\\,;5[`, isCorrect: false },
        { id: 'D', latex: `]-\\infty\\,;5]`, isCorrect: false },
        { id: 'E', latex: `]2\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `Condition 1: $\\ln(x-2)$ requires $x-2 > 0 \\iff x > 2$ (STRICT inequality)`,
          latex: `\\ln(x-2) \\text{ defined} \\iff x > 2`,
        },
        {
          label: `Condition 2: $\\sqrt{5-x}$ requires $5-x \\geq 0 \\iff x \\leq 5$ (large inequality, $0$ allowed)`,
          latex: `\\sqrt{5-x} \\text{ defined} \\iff x \\leq 5`,
        },
        {
          label: `Intersect both conditions: $x > 2$ AND $x \\leq 5$`,
          latex: `\\boxed{D_{f} = \\,]2\\,;5] \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q2: Derivative — chain rule on ln of polynomial ─────
    {
      number: 2, exercise: 2, topic: 'Derivatives', difficulty: 'easy',
      tags: ['derivative', 'chain-rule', 'logarithm'],
      relatedTips: ['product-derivative'],
      statement: `\\text{Let } f(x) = \\ln(x^{2} + 4).`,
      question: `\\text{The slope of the tangent to } (C_{f}) \\text{ at } x_{0} = 2 \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{1}{2}`, isCorrect: true },
        { id: 'B', latex: `\\dfrac{1}{4}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{1}{8}`, isCorrect: false },
        { id: 'D', latex: `2`, isCorrect: false },
        { id: 'E', latex: `\\ln 8`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply chain rule on $\\ln(u)$ with $u(x) = x^{2}+4$, $u'(x) = 2x$`,
          latex: `f'(x) = \\dfrac{u'(x)}{u(x)} = \\dfrac{2x}{x^{2}+4}`,
        },
        {
          label: `Plug $x_{0}=2$: numerator $= 2\\cdot 2 = 4$, denominator $= 4 + 4 = 8$`,
          latex: `f'(2) = \\dfrac{4}{8} = \\dfrac{1}{2}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{f'(2) = \\dfrac{1}{2} \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q3: Limit — growth hierarchy / dominant base ────────
    {
      number: 3, exercise: 3, topic: 'Limits', difficulty: 'medium',
      tags: ['limits', 'sequences', 'dominant-base'],
      relatedTips: ['geometric-sum', 'asymptotes'],
      statement: `u_{n} = \\dfrac{2^{n} + 3^{n+1}}{3^{n} - 2^{n}}.`,
      question: `\\displaystyle\\lim_{n\\to+\\infty} u_{n} \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `0`, isCorrect: false },
        { id: 'B', latex: `1`, isCorrect: false },
        { id: 'C', latex: `3`, isCorrect: true },
        { id: 'D', latex: `+\\infty`, isCorrect: false },
        { id: 'E', latex: `-1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify the dominant base: $3 > 2$ so $3^{n}$ dominates both top and bottom`,
          latex: `2^{n} + 3^{n+1} \\sim 3^{n+1} \\;,\\; 3^{n} - 2^{n} \\sim 3^{n}`,
        },
        {
          label: `Factor $3^{n}$ everywhere and simplify`,
          latex: `u_{n} = \\dfrac{3^{n}\\bigl((2/3)^{n} + 3\\bigr)}{3^{n}\\bigl(1 - (2/3)^{n}\\bigr)} = \\dfrac{(2/3)^{n} + 3}{1 - (2/3)^{n}}`,
        },
        {
          label: `Take the limit: $(2/3)^{n} \\to 0$ since $|2/3| < 1$`,
          latex: `\\lim_{n\\to+\\infty} u_{n} = \\dfrac{0 + 3}{1 - 0} = 3`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\lim u_{n} = 3 \\implies \\text{Answer: C}}`,
        },
      ],
    },

    // ── Q4: Complex argument — high power ───────────────────
    {
      number: 4, exercise: 4, topic: 'Complex Numbers', difficulty: 'medium',
      tags: ['complex-numbers', 'argument', 'power'],
      relatedTips: ['complex-arg'],
      statement: `Z = \\bigl(1 + i\\sqrt 3\\bigr)^{12}.`,
      question: `\\text{The argument and modulus of } Z \\text{ are:}`,
      choices: [
        { id: 'A', latex: `|Z| = 2^{12},\\ \\arg(Z) \\equiv \\pi \\pmod{2\\pi}`, isCorrect: false },
        { id: 'B', latex: `|Z| = 2^{12},\\ \\arg(Z) \\equiv 0 \\pmod{2\\pi}`, isCorrect: true },
        { id: 'C', latex: `|Z| = 4^{12},\\ \\arg(Z) \\equiv 0 \\pmod{2\\pi}`, isCorrect: false },
        { id: 'D', latex: `|Z| = 2^{12},\\ \\arg(Z) \\equiv \\dfrac{\\pi}{3} \\pmod{2\\pi}`, isCorrect: false },
        { id: 'E', latex: `|Z| = 12,\\ \\arg(Z) \\equiv 4\\pi \\pmod{2\\pi}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Convert $1 + i\\sqrt 3$ to exponential form: $|1+i\\sqrt 3| = \\sqrt{1+3} = 2$, $\\arg(1+i\\sqrt 3) = \\pi/3$`,
          latex: `1 + i\\sqrt 3 = 2\\,e^{i\\pi/3}`,
        },
        {
          label: `Raise to the 12th power: modulus to the power, argument multiplies`,
          latex: `Z = 2^{12}\\,e^{i\\,12\\cdot\\pi/3} = 2^{12}\\,e^{i\\,4\\pi}`,
        },
        {
          label: `Reduce the argument modulo $2\\pi$: $4\\pi \\equiv 0$`,
          latex: `\\arg(Z) \\equiv 4\\pi \\equiv 0 \\pmod{2\\pi}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{|Z| = 2^{12},\\ \\arg(Z) \\equiv 0 \\implies \\text{Answer: B}}`,
        },
      ],
    },

    // ── Q5: Locus — perpendicular bisector ──────────────────
    {
      number: 5, exercise: 5, topic: 'Complex Numbers', difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'perpendicular-bisector'],
      relatedTips: ['locus-complex'],
      statement: `\\text{Set of points } M(z) \\text{ satisfying } |z - 2| = |z + 2i|.`,
      question: `\\text{This set is the line of equation:}`,
      choices: [
        { id: 'A', latex: `y = x`, isCorrect: false },
        { id: 'B', latex: `y = -x`, isCorrect: true },
        { id: 'C', latex: `x = 0`, isCorrect: false },
        { id: 'D', latex: `y = 0`, isCorrect: false },
        { id: 'E', latex: `y = x + 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Set $z = x + iy$. Then $|z-2|^{2} = (x-2)^{2} + y^{2}$ and $|z+2i|^{2} = x^{2} + (y+2)^{2}$`,
          latex: `(x-2)^{2} + y^{2} = x^{2} + (y+2)^{2}`,
        },
        {
          label: `Expand both sides`,
          latex: `x^{2} - 4x + 4 + y^{2} = x^{2} + y^{2} + 4y + 4`,
        },
        {
          label: `Cancel $x^{2}, y^{2}, 4$ and simplify`,
          latex: `-4x = 4y \\iff y = -x`,
        },
        {
          label: `Geometric check: $A(2,0)$ and $B(0,-2)$, perpendicular bisector passes through midpoint $(1,-1)$ with slope $-1$ — equation $y = -x$ ✓`,
          latex: `\\boxed{y = -x \\implies \\text{Answer: B}}`,
        },
      ],
    },

    // ── Q6: Integral — algebraic split ──────────────────────
    {
      number: 6, exercise: 6, topic: 'Integrals', difficulty: 'medium',
      tags: ['integral', 'logarithm', 'algebraic-split'],
      relatedTips: ['integration-tan'],
      statement: `I = \\displaystyle\\int_{2}^{3} \\dfrac{2x+1}{x+1}\\,dx.`,
      question: `I \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2 - \\ln\\!\\left(\\dfrac{4}{3}\\right)`, isCorrect: true },
        { id: 'B', latex: `2 + \\ln\\!\\left(\\dfrac{4}{3}\\right)`, isCorrect: false },
        { id: 'C', latex: `\\ln\\!\\left(\\dfrac{4}{3}\\right)`, isCorrect: false },
        { id: 'D', latex: `2\\ln\\!\\left(\\dfrac{4}{3}\\right)`, isCorrect: false },
        { id: 'E', latex: `1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Algebraic split: rewrite $2x+1 = 2(x+1) - 1$, so $\\dfrac{2x+1}{x+1} = 2 - \\dfrac{1}{x+1}$`,
          latex: `\\dfrac{2x+1}{x+1} = 2 - \\dfrac{1}{x+1}`,
        },
        {
          label: `Antiderivative: $\\int 2\\,dx = 2x$ and $\\int \\dfrac{1}{x+1}\\,dx = \\ln|x+1|$`,
          latex: `I = \\Bigl[\\,2x - \\ln|x+1|\\,\\Bigr]_{2}^{3}`,
        },
        {
          label: `Evaluate at the bounds: $(6 - \\ln 4) - (4 - \\ln 3) = 2 - \\ln 4 + \\ln 3 = 2 - \\ln(4/3)$`,
          latex: `I = 2 - \\ln 4 + \\ln 3 = 2 - \\ln\\!\\left(\\dfrac{4}{3}\\right)`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{I = 2 - \\ln(4/3) \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q7: Sequence — homographic transformation ───────────
    {
      number: 7, exercise: 7, topic: 'Sequences', difficulty: 'hard',
      tags: ['sequences', 'geometric', 'homographic'],
      relatedTips: ['suite-type'],
      statement: `u_{n+1} = \\dfrac{u_{n} + 2}{u_{n} + 1} \\;,\\; u_{0} = 3.\\\\ \\text{Define } w_{n} = \\dfrac{u_{n} - \\sqrt 2}{u_{n} + \\sqrt 2}.`,
      question: `(w_{n}) \\text{ is geometric with common ratio:}`,
      choices: [
        { id: 'A', latex: `q = \\dfrac{1 - \\sqrt 2}{1 + \\sqrt 2}`, isCorrect: true },
        { id: 'B', latex: `q = \\sqrt 2`, isCorrect: false },
        { id: 'C', latex: `q = \\dfrac{1}{2}`, isCorrect: false },
        { id: 'D', latex: `q = -\\sqrt 2`, isCorrect: false },
        { id: 'E', latex: `q = 1 + \\sqrt 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $u_{n+1} - \\sqrt 2$ using the recurrence`,
          latex: `u_{n+1} - \\sqrt 2 = \\dfrac{u_{n}+2 - \\sqrt 2(u_{n}+1)}{u_{n}+1} = \\dfrac{(1-\\sqrt 2)u_{n} + (2 - \\sqrt 2)}{u_{n}+1}`,
        },
        {
          label: `Factor $(1-\\sqrt 2)$ in the numerator: $2 - \\sqrt 2 = \\sqrt 2(\\sqrt 2 - 1) = -\\sqrt 2(1-\\sqrt 2)$, so the numerator is $(1-\\sqrt 2)(u_{n} - \\sqrt 2)$`,
          latex: `u_{n+1} - \\sqrt 2 = \\dfrac{(1-\\sqrt 2)(u_{n} - \\sqrt 2)}{u_{n}+1}`,
        },
        {
          label: `Similarly $u_{n+1} + \\sqrt 2 = \\dfrac{(1+\\sqrt 2)(u_{n} + \\sqrt 2)}{u_{n}+1}$`,
          latex: `u_{n+1} + \\sqrt 2 = \\dfrac{(1+\\sqrt 2)(u_{n} + \\sqrt 2)}{u_{n}+1}`,
        },
        {
          label: `Take the ratio: the $(u_{n}+1)$ cancels, the $(u_{n}\\pm\\sqrt 2)$ collapse into $w_{n}$`,
          latex: `w_{n+1} = \\dfrac{1-\\sqrt 2}{1+\\sqrt 2}\\cdot w_{n}`,
        },
        {
          label: `Conclude — note $\\pm\\sqrt 2$ are the two FIXED POINTS of the recurrence ($u = (u+2)/(u+1) \\Leftrightarrow u^{2} = 2$)`,
          latex: `\\boxed{q = \\dfrac{1-\\sqrt 2}{1+\\sqrt 2} \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q8: Function image / minimum ────────────────────────
    {
      number: 8, exercise: 8, topic: 'Function Analysis', difficulty: 'hard',
      tags: ['function-range', 'minimum', 'logarithm'],
      relatedTips: ['function-range'],
      correctionLocked: true,
      statement: `\\text{Let } f \\text{ be defined on } ]0, +\\infty[ \\text{ by } f(x) = x^{2} - 2\\ln(x).`,
      question: `\\text{The image } f(\\,]0,+\\infty[\\,) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `[1\\,;+\\infty[`, isCorrect: true },
        { id: 'B', latex: `]0\\,;+\\infty[`, isCorrect: false },
        { id: 'C', latex: `[0\\,;+\\infty[`, isCorrect: false },
        { id: 'D', latex: `]1\\,;+\\infty[`, isCorrect: false },
        { id: 'E', latex: `\\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $f'(x)$ and find critical points`,
          latex: `f'(x) = 2x - \\dfrac{2}{x} = \\dfrac{2(x^{2}-1)}{x} = \\dfrac{2(x-1)(x+1)}{x}`,
        },
        {
          label: `On $]0,+\\infty[$: $x > 0$ and $x+1 > 0$, so $f'(x)$ has the sign of $(x-1)$. Critical point at $x = 1$`,
          latex: `f'(x) = 0 \\iff x = 1 \\;\\text{(on } ]0,+\\infty[\\text{)}`,
        },
        {
          label: `Sign analysis: $f' < 0$ on $]0,1[$ and $f' > 0$ on $]1,+\\infty[$ — so $f$ DECREASES then INCREASES with a global minimum at $x=1$`,
          latex: `\\begin{array}{c|ccccc} x & 0 & & 1 & & +\\infty \\\\\\hline f'(x) & & - & 0 & + & \\\\\\hline f(x) & +\\infty & \\searrow & 1 & \\nearrow & +\\infty \\end{array}`,
        },
        {
          label: `Compute the minimum value: $f(1) = 1 - 2\\ln(1) = 1 - 0 = 1$`,
          latex: `f(1) = 1^{2} - 2\\ln(1) = 1`,
        },
        {
          label: `Boundary limits: $\\lim_{x\\to 0^{+}} f(x) = 0 - 2(-\\infty) = +\\infty$ and $\\lim_{x\\to+\\infty} f(x) = +\\infty - 2\\ln(x) = +\\infty$ (growth hierarchy: $x^{2} \\gg \\ln x$)`,
          latex: `\\lim_{x\\to 0^{+}} f = +\\infty \\;,\\; \\lim_{x\\to+\\infty} f = +\\infty`,
        },
        {
          label: `By continuity + IVT, $f$ takes all values $\\geq 1$. Minimum $1$ is ATTAINED at $x=1$ → closed bound`,
          latex: `\\boxed{f(\\,]0,+\\infty[\\,) = [1\\,;+\\infty[ \\implies \\text{Answer: A}}`,
        },
      ],
    },
  ],
}
