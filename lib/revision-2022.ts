// ============================================================
// Revision Series – 2022 Exam Preparation
// 8 exam-style questions mirroring the actual 2022 paper topics:
// derivatives, integrals, differential equations, limits, series,
// probability, complex numbers, geometry in 3D.
// ============================================================

import type { ExamData } from './exam-data'

export const REVISION_2022: ExamData = {
  year: 2022,
  date: 'Revision Series 2022',
  duration: 40,
  categoryId: 'revision-series',
  title: `Revision Series — Exam-Style Practice 2022`,
  instructions: `These exercises mirror the 2022 concours format (Q66-Q80, 5 options A-E). Practice at a guided pace: 40 min for 8 questions (~5 min each). Take time with the detailed solutions to internalize the patterns.`,
  questions: [
    // ── Q1: Derivative — quotient at a point ────────────────
    {
      number: 1, exercise: 1, topic: 'Derivatives', difficulty: 'medium',
      tags: ['derivative', 'quotient-rule', 'evaluation'],
      relatedTips: ['quotient-derivative-2022'],
      statement: `\\text{Let } f(x) = \\dfrac{e^{x}\\,\\ln(x)}{x}.`,
      question: `f'(1) \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `0`, isCorrect: false },
        { id: 'B', latex: `e`, isCorrect: true },
        { id: 'C', latex: `1`, isCorrect: false },
        { id: 'D', latex: `e - 1`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{e}{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply the quotient rule with $u = e^{x}\\ln(x)$ and $v = x$. Compute $u'$ via product rule: $u' = e^{x}\\ln(x) + e^{x}/x$`,
          latex: `u'(x) = e^{x}\\ln(x) + \\dfrac{e^{x}}{x} \\;,\\; v'(x) = 1`,
        },
        {
          label: `Evaluate at $x=1$: $u(1) = 0$, $u'(1) = 0 + e/1 = e$, $v(1) = 1$, $v'(1) = 1$`,
          latex: `u(1) = 0 \\;,\\; u'(1) = e \\;,\\; v(1) = 1 \\;,\\; v'(1) = 1`,
        },
        {
          label: `Plug into the quotient formula`,
          latex: `\\boxed{f'(1) = \\dfrac{e \\cdot 1 - 0 \\cdot 1}{1^{2}} = e \\implies \\text{Answer: B}}`,
        },
      ],
    },

    // ── Q2: Integral — u'/u recognition ─────────────────────
    {
      number: 2, exercise: 2, topic: 'Integrals', difficulty: 'easy',
      tags: ['integral', 'logarithm', 'u-substitution'],
      relatedTips: ['integral-uprime-u-2022'],
      statement: `J = \\displaystyle\\int_{0}^{1} \\dfrac{3x^{2}}{x^{3}+1}\\,dx.`,
      question: `J \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\ln(2)`, isCorrect: true },
        { id: 'B', latex: `\\ln(3)`, isCorrect: false },
        { id: 'C', latex: `2\\ln(2)`, isCorrect: false },
        { id: 'D', latex: `1`, isCorrect: false },
        { id: 'E', latex: `0`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize $u'/u$ form: $u(x) = x^{3}+1$, $u'(x) = 3x^{2}$ — exact match`,
          latex: `\\dfrac{3x^{2}}{x^{3}+1} = \\dfrac{u'(x)}{u(x)}`,
        },
        {
          label: `Antiderivative is $\\ln|x^{3}+1|$ (positive on $[0,1]$, so absolute value drops out)`,
          latex: `J = \\bigl[\\,\\ln(x^{3}+1)\\,\\bigr]_{0}^{1} = \\ln 2 - \\ln 1 = \\ln 2`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{J = \\ln(2) \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q3: Differential equation ───────────────────────────
    {
      number: 3, exercise: 3, topic: 'Differential Equations', difficulty: 'medium',
      tags: ['differential-equation', 'second-order', 'initial-conditions'],
      relatedTips: ['diff-eq-2022'],
      statement: `\\text{Solve } y'' - 4y = 0 \\text{ with } y(0) = 3 \\text{ and } y'(0) = 2.`,
      question: `y(x) \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2e^{2x} + e^{-2x}`, isCorrect: true },
        { id: 'B', latex: `e^{2x} + 2e^{-2x}`, isCorrect: false },
        { id: 'C', latex: `3e^{2x}`, isCorrect: false },
        { id: 'D', latex: `e^{4x} + 2`, isCorrect: false },
        { id: 'E', latex: `3\\cosh(2x)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Characteristic equation: $r^{2} - 4 = 0 \\implies r = \\pm 2$`,
          latex: `r^{2} = 4 \\iff r = 2 \\text{ or } r = -2`,
        },
        {
          label: `General solution: $y(x) = A\\,e^{2x} + B\\,e^{-2x}$, with $y'(x) = 2A\\,e^{2x} - 2B\\,e^{-2x}$`,
          latex: `y(x) = A\\,e^{2x} + B\\,e^{-2x}`,
        },
        {
          label: `Apply initial conditions: $y(0) = A + B = 3$, $y'(0) = 2A - 2B = 2 \\iff A - B = 1$`,
          latex: `\\begin{cases} A + B = 3 \\\\ A - B = 1 \\end{cases} \\implies A = 2,\\ B = 1`,
        },
        {
          label: `Substitute back`,
          latex: `\\boxed{y(x) = 2e^{2x} + e^{-2x} \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q4: Limit — squeeze theorem ─────────────────────────
    {
      number: 4, exercise: 4, topic: 'Limits', difficulty: 'easy',
      tags: ['limits', 'squeeze-theorem', 'trigonometric'],
      relatedTips: ['squeeze-theorem-2022'],
      statement: `\\text{Compute } \\displaystyle\\lim_{n\\to+\\infty} \\dfrac{(-1)^{n}\\,\\sin(n)}{n^{2} + 1}.`,
      question: `\\text{This limit equals:}`,
      choices: [
        { id: 'A', latex: `+\\infty`, isCorrect: false },
        { id: 'B', latex: `1`, isCorrect: false },
        { id: 'C', latex: `0`, isCorrect: true },
        { id: 'D', latex: `-1`, isCorrect: false },
        { id: 'E', latex: `\\text{the limit doesn't exist}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Bound the absolute value: $|(-1)^{n}\\sin(n)| \\leq 1$ for all $n$`,
          latex: `\\left|\\dfrac{(-1)^{n}\\sin(n)}{n^{2}+1}\\right| \\leq \\dfrac{1}{n^{2}+1}`,
        },
        {
          label: `Bounding sequence tends to 0`,
          latex: `\\lim_{n\\to+\\infty} \\dfrac{1}{n^{2}+1} = 0`,
        },
        {
          label: `Apply squeeze theorem`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} \\dfrac{(-1)^{n}\\sin(n)}{n^{2}+1} = 0 \\implies \\text{Answer: C}}`,
        },
      ],
    },

    // ── Q5: Geometric sum ───────────────────────────────────
    {
      number: 5, exercise: 5, topic: 'Series', difficulty: 'easy',
      tags: ['series', 'geometric-sum'],
      relatedTips: ['geometric-sum-2022'],
      statement: `S = 1 + 2 + 4 + 8 + \\cdots + 2^{50}.`,
      question: `S \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2^{51} - 1`, isCorrect: true },
        { id: 'B', latex: `2^{50} - 1`, isCorrect: false },
        { id: 'C', latex: `2^{50}`, isCorrect: false },
        { id: 'D', latex: `2^{51}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{2^{50} - 1}{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Geometric sum with ratio $q = 2$, first term $a = 1$, number of terms = 51 (from $2^{0}$ to $2^{50}$)`,
          latex: `S = \\sum_{k=0}^{50} 2^{k}`,
        },
        {
          label: `Apply formula $\\sum_{k=0}^{n} q^{k} = (q^{n+1}-1)/(q-1)$ with $n=50, q=2$`,
          latex: `S = \\dfrac{2^{51} - 1}{2 - 1} = 2^{51} - 1`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{S = 2^{51} - 1 \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q6: Binomial probability ────────────────────────────
    {
      number: 6, exercise: 6, topic: 'Probability', difficulty: 'medium',
      tags: ['probability', 'binomial'],
      relatedTips: ['binomial-2022'],
      visualization: {
        type: 'binomial-arrangements',
        n: 5,
        p: 1 / 6,
        k: 2,
        successLabel: 'Six',
        failureLabel: 'Other',
        successIcon: '⚅',
        failureIcon: '·',
        title: '5 dice rolls — exactly two 6s',
        description: 'Each row below is one of the C(5,2) = 10 arrangements where exactly 2 of the 5 rolls are a "6".',
      },
      statement: `\\text{A fair die is rolled 5 times.}`,
      question: `\\text{The probability of obtaining exactly two "6"s is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{125}{1944}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{625}{3888}`, isCorrect: true },
        { id: 'C', latex: `\\dfrac{1}{36}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{1}{18}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{1}{6}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Binomial setting: $X \\sim \\mathcal{B}(n=5,\\ p=1/6)$`,
          latex: `P(X=k) = \\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}`,
        },
        {
          label: `Apply with $n=5, k=2, p=1/6$. $\\binom{5}{2} = 10$, $p^{2} = 1/36$, $(5/6)^{3} = 125/216$`,
          latex: `P(X=2) = 10 \\cdot \\dfrac{1}{36} \\cdot \\dfrac{125}{216}`,
        },
        {
          label: `Multiply: $10 \\cdot 125 / (36 \\cdot 216) = 1250 / 7776 = 625/3888$`,
          latex: `\\boxed{P(X=2) = \\dfrac{625}{3888} \\implies \\text{Answer: B}}`,
        },
      ],
    },

    // ── Q7: Complex modulus locus ───────────────────────────
    {
      number: 7, exercise: 7, topic: 'Complex Numbers', difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'circle'],
      relatedTips: [],
      statement: `\\text{The set of points } M(z) \\text{ in the complex plane such that } |z + 1 - 2i| = 4.`,
      question: `\\text{This set is:}`,
      choices: [
        { id: 'A', latex: `\\text{a circle of center } \\Omega(-1+2i) \\text{ and radius } 4`, isCorrect: true },
        { id: 'B', latex: `\\text{a circle of center } \\Omega(1-2i) \\text{ and radius } 4`, isCorrect: false },
        { id: 'C', latex: `\\text{a circle of center } \\Omega(-1+2i) \\text{ and radius } 16`, isCorrect: false },
        { id: 'D', latex: `\\text{a line of equation } x = -1`, isCorrect: false },
        { id: 'E', latex: `\\text{the empty set}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Rewrite the modulus to expose the form $|z - z_{0}| = R$`,
          latex: `|z + 1 - 2i| = |z - (-1 + 2i)|`,
        },
        {
          label: `Equation $|z - z_{0}| = R$ describes a circle of center $\\Omega(z_{0})$ and radius $R$`,
          latex: `|z - (-1 + 2i)| = 4 \\implies M \\text{ on circle of center } \\Omega(-1+2i),\\ R = 4`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\Omega(-1+2i),\\ R = 4 \\implies \\text{Answer: A}}`,
        },
      ],
    },

    // ── Q8: Distance point-plane ────────────────────────────
    {
      number: 8, exercise: 8, topic: 'Geometry in Space', difficulty: 'medium',
      tags: ['geometry-3d', 'distance', 'plane'],
      relatedTips: ['distance-point-plane-2022'],
      statement: `\\text{The space is equipped with an orthonormal frame. Compute the distance from } A(2\\,;-1\\,;3) \\text{ to the plane } (P):\\ x - 2y + 2z - 1 = 0.`,
      question: ``,
      choices: [
        { id: 'A', latex: `\\dfrac{1}{3}`, isCorrect: false },
        { id: 'B', latex: `1`, isCorrect: false },
        { id: 'C', latex: `3`, isCorrect: true },
        { id: 'D', latex: `\\dfrac{9}{\\sqrt{5}}`, isCorrect: false },
        { id: 'E', latex: `\\sqrt{3}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply the formula $d(M, P) = \\dfrac{|a x_{0} + b y_{0} + c z_{0} + d|}{\\sqrt{a^{2}+b^{2}+c^{2}}}$ with $a=1, b=-2, c=2, d=-1$`,
          latex: `d(A, P) = \\dfrac{|1\\cdot 2 + (-2)\\cdot(-1) + 2\\cdot 3 - 1|}{\\sqrt{1 + 4 + 4}}`,
        },
        {
          label: `Compute the numerator: $|2 + 2 + 6 - 1| = |9| = 9$. Denominator: $\\sqrt{9} = 3$`,
          latex: `d(A, P) = \\dfrac{9}{3} = 3`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{d(A, P) = 3 \\implies \\text{Answer: C}}`,
        },
      ],
    },
  ],
}
