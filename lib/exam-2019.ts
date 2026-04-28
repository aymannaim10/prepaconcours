// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2019
// Mathematics Paper — Academic Year 2019-2020 (taken summer 2019)
// 4ème épreuve : Mathématiques — 15 QCM (Q46-Q60), 30 min
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2019_REAL: ExamData = {
  year: 2019,
  date: 'Summer 2019 — Academic Year 2019-2020',
  duration: 30,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam for Pharmaceutical Studies — Academic Year 2019-2020`,
  instructions: `The mathematics paper contains 15 multiple-choice questions (Q46 through Q60), each offering 5 options (A through E) with a single correct answer. Indicate on the answer sheet the letter corresponding to your choice. The use of calculators is strictly forbidden.`,
  questions: [
    // ── Q1 (Q46) ────────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = \\dfrac{\\sqrt{\\ln(x)}}{1 - \\ln(x)}.`,
      question: `\\text{The domain of definition } D_f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]e\\,;+\\infty[`, isCorrect: false },
        { id: 'B', latex: `]0\\,;1[\\,\\cup\\,]1\\,;e[`, isCorrect: false },
        { id: 'C', latex: `]1\\,;e[`, isCorrect: false },
        { id: 'D', latex: `[1\\,;e[\\,\\cup\\,]e\\,;+\\infty[`, isCorrect: true },
        { id: 'E', latex: `[1\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `For $\\sqrt{\\ln(x)}$ defined: need $\\ln(x) \\geq 0 \\iff x \\geq 1$`,
          latex: `\\sqrt{\\ln(x)} \\text{ defined} \\iff x \\geq 1`,
        },
        {
          label: `For the denominator to be nonzero: $1 - \\ln(x) \\neq 0 \\iff x \\neq e$`,
          latex: `1 - \\ln(x) \\neq 0 \\iff x \\neq e`,
        },
        {
          label: `Combine the two conditions`,
          latex: `\\boxed{D_f = [1\\,;e[\\,\\cup\\,]e\\,;+\\infty[ \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['domain', 'logarithm', 'square-root'],
      relatedTips: ['log-domain'],
    },

    // ── Q2 (Q47) ────────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Logarithmic Equations',
      statement: `\\text{Consider the equation } (E):\\ \\ln(x+1) + \\ln(x+2) = \\ln(4x+2).`,
      question: `\\text{The solution set of } (E) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `S = \\{0\\}`, isCorrect: false },
        { id: 'B', latex: `S = \\{0\\,;1\\}`, isCorrect: true },
        { id: 'C', latex: `S = \\{1\\}`, isCorrect: false },
        { id: 'D', latex: `S = \\emptyset`, isCorrect: false },
        { id: 'E', latex: `S = \\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: $x+1>0$, $x+2>0$, $4x+2>0$ — all imply $x > -\\tfrac{1}{2}$`,
          latex: `D = \\,]-\\tfrac{1}{2}\\,;+\\infty[`,
        },
        {
          label: `Combine the logs and equate arguments`,
          latex: `(x+1)(x+2) = 4x+2 \\iff x^{2} + 3x + 2 = 4x + 2 \\iff x^{2} - x = 0`,
        },
        {
          label: `Factor: $x(x-1) = 0 \\iff x = 0$ or $x = 1$. Both lie in the domain`,
          latex: `\\boxed{S = \\{0\\,;1\\} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['logarithm', 'equation'],
      relatedTips: ['log-domain'],
    },

    // ── Q3 (Q48) ────────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Asymptotes',
      statement: `\\text{Let } f(x) = x + \\dfrac{2e^{x} - 3e^{-x}}{e^{x} + e^{-x}}.`,
      question: `\\text{The curve of } f \\text{ admits at } +\\infty \\text{ an oblique asymptote of equation:}`,
      choices: [
        { id: 'A', latex: `y = x+2`, isCorrect: true },
        { id: 'B', latex: `y = x-1`, isCorrect: false },
        { id: 'C', latex: `y = x`, isCorrect: false },
        { id: 'D', latex: `y = -x`, isCorrect: false },
        { id: 'E', latex: `y = x-3`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $\\displaystyle\\lim_{x\\to+\\infty} \\dfrac{2e^{x} - 3e^{-x}}{e^{x} + e^{-x}}$ — divide numerator and denominator by $e^{x}$`,
          latex: `\\dfrac{2e^{x} - 3e^{-x}}{e^{x} + e^{-x}} = \\dfrac{2 - 3e^{-2x}}{1 + e^{-2x}} \\xrightarrow[x\\to+\\infty]{} \\dfrac{2}{1} = 2`,
        },
        {
          label: `So $f(x) - x \\to 2$ as $x \\to +\\infty$. The oblique asymptote is $y = x + 2$`,
          latex: `\\boxed{y = x + 2 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['asymptote', 'oblique', 'exponential', 'limits'],
      relatedTips: ['asymptotes'],
    },

    // ── Q4 (Q49) ────────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Limits',
      statement: `u_n = 2n\\,\\ln\\!\\left(1 + \\dfrac{1}{3n}\\right).`,
      question: `\\lim_{n\\to+\\infty} u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `0`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{3}{2}`, isCorrect: false },
        { id: 'C', latex: `+\\infty`, isCorrect: false },
        { id: 'D', latex: `2`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{2}{3}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Use the standard equivalent $\\ln(1+u) \\sim u$ as $u \\to 0$, with $u = \\frac{1}{3n} \\to 0$`,
          latex: `\\ln\\!\\left(1 + \\dfrac{1}{3n}\\right) \\underset{n\\to+\\infty}{\\sim} \\dfrac{1}{3n}`,
        },
        {
          label: `Multiply by $2n$`,
          latex: `u_n \\sim 2n \\cdot \\dfrac{1}{3n} = \\dfrac{2}{3}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} u_n = \\dfrac{2}{3} \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['limits', 'logarithm', 'equivalents'],
      relatedTips: ['asymptotes'],
    },

    // ── Q5 (Q50) ────────────────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Integrals',
      statement: `I = \\displaystyle\\int_{0}^{\\ln 3} \\dfrac{2e^{x}}{1 + e^{x}}\\,dx.`,
      question: `\\text{The integral } I \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2\\ln(3)`, isCorrect: false },
        { id: 'B', latex: `2\\ln(2)`, isCorrect: true },
        { id: 'C', latex: `4\\ln(\\sqrt 2)`, isCorrect: false },
        { id: 'D', latex: `2\\ln(1+e)`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{1}{2}\\ln(1+e)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize $\\frac{u'}{u}$ form with $u(x) = 1 + e^{x}$, $u'(x) = e^{x}$`,
          latex: `\\dfrac{2e^{x}}{1+e^{x}} = 2\\,\\dfrac{u'(x)}{u(x)}`,
        },
        {
          label: `Antiderivative: $2\\ln|u(x)| = 2\\ln(1+e^{x})$`,
          latex: `I = \\bigl[\\,2\\ln(1+e^{x})\\,\\bigr]_{0}^{\\ln 3} = 2\\ln(1+3) - 2\\ln(1+1)`,
        },
        {
          label: `Simplify: $2\\ln 4 - 2\\ln 2 = 2\\ln(4/2) = 2\\ln 2$ (note: $4\\ln\\sqrt{2} = 2\\ln 2$ as well)`,
          latex: `\\boxed{I = 2\\ln(2) \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integral', 'logarithm', 'u-substitution'],
      relatedTips: ['integration-tan'],
    },

    // ── Q6 (Q51) ────────────────────────────────────────────
    {
      number: 6,
      exercise: 6,
      topic: 'Limits',
      statement: `u_n = n^{2} + 1 - \\cos(n).`,
      question: `\\displaystyle\\lim_{n\\to+\\infty} u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `+\\infty`, isCorrect: true },
        { id: 'B', latex: `0`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{1}{2}`, isCorrect: false },
        { id: 'D', latex: `-\\infty`, isCorrect: false },
        { id: 'E', latex: `-\\dfrac{1}{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `$\\cos(n)$ is bounded: $-1 \\leq \\cos(n) \\leq 1$, so $u_n \\geq n^{2} + 1 - 1 = n^{2}$`,
          latex: `u_n \\geq n^{2}`,
        },
        {
          label: `Apply the comparison theorem: $n^{2} \\to +\\infty$ forces $u_n \\to +\\infty$`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} u_n = +\\infty \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['limits', 'comparison-theorem', 'sequences'],
      relatedTips: ['squeeze'],
    },

    // ── Q7 (Q52) ────────────────────────────────────────────
    {
      number: 7,
      exercise: 7,
      topic: 'Limits',
      statement: `\\text{Compute } \\displaystyle\\lim_{x\\to+\\infty} \\sqrt{x^{2}+1} - x.`,
      question: `\\text{This limit equals:}`,
      choices: [
        { id: 'A', latex: `1`, isCorrect: false },
        { id: 'B', latex: `2`, isCorrect: false },
        { id: 'C', latex: `0`, isCorrect: true },
        { id: 'D', latex: `3`, isCorrect: false },
        { id: 'E', latex: `+\\infty`, isCorrect: false },
      ],
      solution: [
        {
          label: `Multiply by the conjugate to remove the indeterminate form $\\infty - \\infty$`,
          latex: `\\sqrt{x^{2}+1} - x = \\dfrac{(x^{2}+1) - x^{2}}{\\sqrt{x^{2}+1} + x} = \\dfrac{1}{\\sqrt{x^{2}+1} + x}`,
        },
        {
          label: `As $x \\to +\\infty$, the denominator tends to $+\\infty$`,
          latex: `\\lim_{x\\to+\\infty} \\dfrac{1}{\\sqrt{x^{2}+1} + x} = 0`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\lim_{x\\to+\\infty} \\sqrt{x^{2}+1} - x = 0 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['limits', 'conjugate', 'square-root'],
      relatedTips: ['asymptotes'],
    },

    // ── Q8 (Q53) ────────────────────────────────────────────
    {
      number: 8,
      exercise: 8,
      topic: 'Complex Numbers',
      statement: `Z = e^{3i\\alpha} + e^{i\\alpha} \\;,\\quad 0 < \\alpha < \\dfrac{\\pi}{2}.`,
      question: `\\text{The modulus of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `2\\cos(\\alpha)`, isCorrect: true },
        { id: 'B', latex: `\\cos^{2}(\\alpha)`, isCorrect: false },
        { id: 'C', latex: `\\cos(2\\alpha)`, isCorrect: false },
        { id: 'D', latex: `\\cos(\\alpha)`, isCorrect: false },
        { id: 'E', latex: `2\\cos(\\alpha)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Factor out the symmetric factor $e^{2i\\alpha}$`,
          latex: `Z = e^{3i\\alpha} + e^{i\\alpha} = e^{2i\\alpha}\\bigl(e^{i\\alpha} + e^{-i\\alpha}\\bigr) = e^{2i\\alpha} \\cdot 2\\cos(\\alpha)`,
        },
        {
          label: `Take the modulus: $|e^{2i\\alpha}| = 1$ and $\\cos(\\alpha) > 0$ on $]0\\,;\\pi/2[$`,
          latex: `|Z| = 1 \\cdot 2\\cos(\\alpha) = 2\\cos(\\alpha)`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{|Z| = 2\\cos(\\alpha) \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'modulus', 'factoring'],
      relatedTips: ['complex-arg'],
    },

    // ── Q9 (Q54) ────────────────────────────────────────────
    {
      number: 9,
      exercise: 9,
      topic: 'Geometry in Space',
      statement: `\\text{In an orthonormal frame, consider the points } A(0\\,;1\\,;0) \\text{ and } B(1\\,;0\\,;1).`,
      question: `\\text{Among the planes parallel to the line } (AB), \\text{ we have:}`,
      choices: [
        { id: 'A', latex: `(P_{1}):\\ y + z = 0`, isCorrect: true },
        { id: 'B', latex: `(P_{2}):\\ 2x - y + z - 2 = 0`, isCorrect: false },
        { id: 'C', latex: `(P_{3}):\\ x - y + z - 1 = 0`, isCorrect: false },
        { id: 'D', latex: `(P_{4}):\\ x - y - 2z - 3 = 0`, isCorrect: false },
        { id: 'E', latex: `(P_{5}):\\ x + y - 1 = 0`, isCorrect: false },
      ],
      solution: [
        {
          label: `Direction vector of $(AB)$: $\\vec{AB} = B - A = (1\\,;-1\\,;1)$`,
          latex: `\\vec{AB} = (1\\,;-1\\,;1)`,
        },
        {
          label: `A plane is parallel to $(AB)$ iff its normal $\\vec n$ is perpendicular to $\\vec{AB}$ AND the plane does not contain the line`,
          latex: `\\vec n \\cdot \\vec{AB} = 0 \\;\\text{ AND } \\; A \\notin (P)`,
        },
        {
          label: `Check $(P_{1})$: normal $(0\\,;1\\,;1)$. Dot product $0 - 1 + 1 = 0$ ✓. Does $A(0,1,0)$ lie on it? $1 + 0 = 1 \\neq 0$ ✗ — not on the plane`,
          latex: `(0\\,;1\\,;1)\\cdot(1\\,;-1\\,;1) = 0 \\quad\\text{and}\\quad A \\notin (P_{1})`,
        },
        {
          label: `So $(P_{1})$ is parallel to $(AB)$ without containing it`,
          latex: `\\boxed{(P_{1}):\\ y + z = 0 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['geometry-3d', 'parallel', 'plane'],
      relatedTips: ['parametric-line'],
    },

    // ── Q10 (Q55) ───────────────────────────────────────────
    {
      number: 10,
      exercise: 10,
      topic: 'Probability',
      statement: `\\text{An urn contains 6 green balls and 3 red balls (indistinguishable to touch). Four balls are drawn successively WITH replacement.}`,
      question: `\\text{The probability of obtaining exactly two green balls is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{15}{81}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{24}{81}`, isCorrect: true },
        { id: 'C', latex: `\\dfrac{4}{81}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{45}{126}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{13}{27}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Binomial setting: $X \\sim \\mathcal{B}(n=4,\\ p=\\tfrac{6}{9}=\\tfrac{2}{3})$. With replacement makes the 4 trials independent`,
          latex: `P(X=k) = \\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}`,
        },
        {
          label: `Compute $P(X=2)$ with $\\binom{4}{2}=6$, $p^{2} = 4/9$, $(1-p)^{2} = 1/9$`,
          latex: `P(X=2) = 6 \\cdot \\dfrac{4}{9}\\cdot\\dfrac{1}{9} = \\dfrac{24}{81}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{P(X=2) = \\dfrac{24}{81} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['probability', 'binomial', 'with-replacement'],
      relatedTips: ['binomial-pmf'],
      visualization: {
        type: 'binomial-arrangements',
        n: 4,
        p: 2 / 3,
        k: 2,
        successLabel: 'Green',
        failureLabel: 'Red',
        successIcon: '🟢',
        failureIcon: '🔴',
        title: '4 draws with replacement — exactly 2 greens',
        description: 'Each row below is one of the C(4,2) = 6 arrangements where exactly 2 of the 4 draws are green.',
      },
    },

    // ── Q11 (Q56) ───────────────────────────────────────────
    {
      number: 11,
      exercise: 11,
      topic: 'Inequalities',
      statement: `\\text{Consider the inequality } e^{2x} - 2e^{x} + 1 \\leq 0.`,
      question: `\\text{The solution set is:}`,
      choices: [
        { id: 'A', latex: `S = [0\\,;+\\infty[`, isCorrect: false },
        { id: 'B', latex: `S = [1\\,;+\\infty[`, isCorrect: false },
        { id: 'C', latex: `S = \\{0\\}`, isCorrect: true },
        { id: 'D', latex: `S = \\emptyset`, isCorrect: false },
        { id: 'E', latex: `S = \\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize the perfect square: $e^{2x} - 2e^{x} + 1 = (e^{x} - 1)^{2}$`,
          latex: `e^{2x} - 2e^{x} + 1 = (e^{x} - 1)^{2} \\geq 0 \\quad \\forall x \\in \\mathbb{R}`,
        },
        {
          label: `A square is $\\leq 0$ only when it equals $0$: $e^{x} = 1 \\iff x = 0$`,
          latex: `(e^{x} - 1)^{2} \\leq 0 \\iff e^{x} = 1 \\iff x = 0`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{S = \\{0\\} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['inequality', 'exponential', 'perfect-square'],
      relatedTips: ['log-domain'],
    },

    // ── Q12 (Q57) ───────────────────────────────────────────
    {
      number: 12,
      exercise: 12,
      topic: 'Sequences',
      statement: `\\forall n \\in \\mathbb{N}, u_n = \\dfrac{1}{n + e^{n}}.`,
      question: `(u_n) \\text{ verifies:}`,
      choices: [
        { id: 'A', latex: `u_0 = e^{-1}`, isCorrect: false },
        { id: 'B', latex: `(u_n) \\text{ is bounded}`, isCorrect: false },
        { id: 'C', latex: `\\lim_{n\\to+\\infty} u_n = 0`, isCorrect: false },
        { id: 'D', latex: `u_n \\leq \\dfrac{1}{n+1}`, isCorrect: true },
        { id: 'E', latex: `\\forall n \\in \\mathbb{N},\\ u_n < 0`, isCorrect: false },
      ],
      solution: [
        {
          label: `Use the inequality $e^{n} \\geq 1$ for every $n \\geq 0$ (with equality at $n=0$)`,
          latex: `e^{n} \\geq 1 \\implies n + e^{n} \\geq n + 1 > 0`,
        },
        {
          label: `Take reciprocals (both sides positive, inequality reverses)`,
          latex: `\\dfrac{1}{n+e^{n}} \\leq \\dfrac{1}{n+1} \\quad \\forall n \\in \\mathbb{N}`,
        },
        {
          label: `Verify the other options. $u_0 = 1/(0+1)=1 \\neq e^{-1}$, so A is false. The bound $u_n \\leq 1/(n+1)$ is a stronger and more specific statement than "bounded" or "tends to 0"`,
          latex: `\\boxed{u_n \\leq \\dfrac{1}{n+1} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'inequality', 'exponential'],
      relatedTips: ['suite-type'],
    },

    // ── Q13 (Q58) ───────────────────────────────────────────
    {
      number: 13,
      exercise: 13,
      topic: 'Tangent Line',
      statement: `\\text{Let } f(x) = \\dfrac{2e^{2x}}{e^{2x} + 1}.`,
      question: `\\text{The tangent at the point of abscissa } 0 \\text{ has equation:}`,
      choices: [
        { id: 'A', latex: `y = x + 1`, isCorrect: true },
        { id: 'B', latex: `y = x`, isCorrect: false },
        { id: 'C', latex: `y = 0`, isCorrect: false },
        { id: 'D', latex: `y = -x - 1`, isCorrect: false },
        { id: 'E', latex: `y = -x`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $f(0) = \\dfrac{2}{2} = 1$`,
          latex: `f(0) = 1`,
        },
        {
          label: `Differentiate using the quotient rule. With $u = 2e^{2x}$ and $v = e^{2x}+1$, $u' = 4e^{2x}$, $v' = 2e^{2x}$`,
          latex: `f'(x) = \\dfrac{4e^{2x}(e^{2x}+1) - 2e^{2x}\\cdot 2e^{2x}}{(e^{2x}+1)^{2}} = \\dfrac{4e^{2x}}{(e^{2x}+1)^{2}}`,
        },
        {
          label: `Evaluate at $x=0$`,
          latex: `f'(0) = \\dfrac{4}{4} = 1`,
        },
        {
          label: `Apply the tangent equation $y = f'(0)(x - 0) + f(0)$`,
          latex: `\\boxed{y = x + 1 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['tangent', 'derivative', 'exponential'],
      relatedTips: ['product-derivative'],
    },

    // ── Q14 (Q59) ───────────────────────────────────────────
    {
      number: 14,
      exercise: 14,
      topic: 'Series',
      statement: `\\forall n \\in \\mathbb{N},\\ u_n = 2^{n} + 6n. \\text{ Let } S_n = u_0 + u_1 + u_2 + \\cdots + u_n.`,
      question: `S_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2^{n+1} + 3n^{2}`, isCorrect: false },
        { id: 'B', latex: `2^{n+1} + 6n^{2} - 1`, isCorrect: false },
        { id: 'C', latex: `2^{n+1} + 6n^{2} + 6n - 1`, isCorrect: false },
        { id: 'D', latex: `2^{n+1} + 3n^{2} + 3n - 1`, isCorrect: true },
        { id: 'E', latex: `2^{n+1} + 6n^{2} + 3n - 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Split into a geometric sum and an arithmetic sum`,
          latex: `S_n = \\sum_{k=0}^{n} 2^{k} + 6\\sum_{k=0}^{n} k`,
        },
        {
          label: `Geometric sum with ratio $2$: $\\sum_{k=0}^{n} 2^{k} = 2^{n+1} - 1$`,
          latex: `\\sum_{k=0}^{n} 2^{k} = \\dfrac{2^{n+1} - 1}{2 - 1} = 2^{n+1} - 1`,
        },
        {
          label: `Arithmetic sum: $\\sum_{k=0}^{n} k = \\dfrac{n(n+1)}{2}$, multiplied by $6$ gives $3n(n+1) = 3n^{2} + 3n$`,
          latex: `6\\sum_{k=0}^{n} k = 3n(n+1) = 3n^{2} + 3n`,
        },
        {
          label: `Combine`,
          latex: `\\boxed{S_n = 2^{n+1} + 3n^{2} + 3n - 1 \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['series', 'geometric-sum', 'arithmetic-sum'],
      relatedTips: ['geometric-sum'],
    },

    // ── Q15 (Q60) ───────────────────────────────────────────
    {
      number: 15,
      exercise: 15,
      topic: 'Equations',
      statement: `\\text{The equation } x^{3} - 3x - 1 = 0 \\text{ admits:}`,
      question: `\\text{the following number of real solutions:}`,
      choices: [
        { id: 'A', latex: `\\text{a unique solution}`, isCorrect: false },
        { id: 'B', latex: `\\text{at most one solution}`, isCorrect: false },
        { id: 'C', latex: `\\text{two distinct solutions}`, isCorrect: false },
        { id: 'D', latex: `\\text{three solutions}`, isCorrect: true },
        { id: 'E', latex: `\\text{four solutions}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Define $f(x) = x^{3} - 3x - 1$. Compute $f'(x) = 3x^{2} - 3 = 3(x-1)(x+1)$`,
          latex: `f'(x) = 0 \\iff x = -1 \\text{ or } x = 1`,
        },
        {
          label: `Sign of $f'$: $f' > 0$ on $]-\\infty,-1[$, $f' < 0$ on $]-1,1[$, $f' > 0$ on $]1,+\\infty[$. Local max at $x=-1$, local min at $x=1$`,
          latex: `f(-1) = -1 + 3 - 1 = 1 > 0 \\;,\\quad f(1) = 1 - 3 - 1 = -3 < 0`,
        },
        {
          label: `Since the local max is positive and the local min is negative, by IVT $f$ has exactly one root in each of the three intervals`,
          latex: `f \\text{ has 3 distinct real roots: one in each of } ]-\\infty,-1[\\,,\\ ]-1,1[\\,,\\ ]1,+\\infty[`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\text{Three solutions} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['IVT', 'cubic', 'monotonicity'],
      relatedTips: ['function-range'],
      visualization: {
        type: 'function-plot',
        preset: 'cubic-2019-ex15',
        title: 'Graph of f(x) = x³ − 3x − 1 — three real roots',
        description: 'Local max at x=−1 (value 1), local min at x=1 (value −3). Both extrema have opposite signs ⟹ three real solutions.',
      },
    },
  ],
}
