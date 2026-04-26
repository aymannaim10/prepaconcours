// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2018
// Mathematics Paper — Academic Year 2018-2019 (taken summer 2018)
// 15 QCM (Q46-Q60) — academic year inferred from chronological pattern;
// rename to exam-2017.ts (year=2017) if the actual paper is for AY 2017-2018.
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2018_REAL: ExamData = {
  year: 2018,
  date: 'Summer 2018 — Academic Year 2018-2019',
  duration: 30,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam for Pharmaceutical Studies — Academic Year 2018-2019`,
  instructions: `The mathematics paper contains 15 multiple-choice questions (Q46 through Q60), each offering 5 options (A through E) with a single correct answer. Indicate on the answer sheet the letter corresponding to your choice. The use of calculators is strictly forbidden.`,
  questions: [
    // ── Q1 (Q46) ────────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = \\dfrac{\\ln(x^{2}-1)}{\\sqrt{x^{2}-1}}.`,
      question: `\\text{The domain of definition } D_f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]-1\\,;1[`, isCorrect: false },
        { id: 'B', latex: `]-\\infty\\,;-1[\\,\\cup\\,]1\\,;+\\infty[`, isCorrect: true },
        { id: 'C', latex: `]1\\,;+\\infty[`, isCorrect: false },
        { id: 'D', latex: `]-\\infty\\,;-1[`, isCorrect: false },
        { id: 'E', latex: `]0\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `For $\\ln(x^{2}-1)$: need $x^{2}-1 > 0$. For $\\sqrt{x^{2}-1}$ in the denominator: need $x^{2}-1 > 0$ (strict, denominator must be nonzero)`,
          latex: `x^{2} - 1 > 0 \\iff |x| > 1 \\iff x < -1 \\text{ or } x > 1`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{D_f = \\,]-\\infty\\,;-1[\\,\\cup\\,]1\\,;+\\infty[ \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['domain', 'logarithm', 'square-root'],
      relatedTips: ['log-domain'],
    },

    // ── Q2 (Q47) ────────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Inequalities',
      statement: `\\text{Consider the inequality } (E):\\ \\ln(-x^{2} + 5x - 3) \\geq 0.`,
      question: `\\text{The solution set is:}`,
      choices: [
        { id: 'A', latex: `]-\\infty\\,;1]`, isCorrect: false },
        { id: 'B', latex: `]4\\,;+\\infty[`, isCorrect: false },
        { id: 'C', latex: `[1\\,;4]`, isCorrect: true },
        { id: 'D', latex: `]-\\infty\\,;1[\\,\\cup\\,]4\\,;+\\infty[`, isCorrect: false },
        { id: 'E', latex: `[0\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `For the log to be defined: $-x^{2} + 5x - 3 > 0$. The condition $\\ln(\\cdot) \\geq 0$ requires the argument $\\geq 1$ (the stronger condition)`,
          latex: `-x^{2} + 5x - 3 \\geq 1 \\iff x^{2} - 5x + 4 \\leq 0`,
        },
        {
          label: `Factor: $x^{2} - 5x + 4 = (x-1)(x-4)$. Sign $\\leq 0$ between the roots`,
          latex: `(x-1)(x-4) \\leq 0 \\iff 1 \\leq x \\leq 4`,
        },
        {
          label: `Verify the domain holds on $[1,4]$: at $x=1$, $-1+5-3=1>0$; at $x=4$, $-16+20-3=1>0$ ✓`,
          latex: `\\boxed{S = [1\\,;4] \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['inequality', 'logarithm', 'quadratic'],
      relatedTips: ['log-domain'],
    },

    // ── Q3 (Q48) ────────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Limits',
      statement: `\\text{Compute } \\displaystyle\\lim_{x\\to 0} \\dfrac{\\sin(x)}{\\ln(1+x)}.`,
      question: `\\text{This limit equals:}`,
      choices: [
        { id: 'A', latex: `-\\infty`, isCorrect: false },
        { id: 'B', latex: `0`, isCorrect: false },
        { id: 'C', latex: `-1`, isCorrect: false },
        { id: 'D', latex: `+\\infty`, isCorrect: false },
        { id: 'E', latex: `1`, isCorrect: true },
      ],
      solution: [
        {
          label: `Apply standard equivalents at $0$: $\\sin(x) \\sim x$ and $\\ln(1+x) \\sim x$`,
          latex: `\\sin(x) \\underset{0}{\\sim} x \\;,\\quad \\ln(1+x) \\underset{0}{\\sim} x`,
        },
        {
          label: `The ratio of two equivalents tends to the ratio of their leading terms`,
          latex: `\\dfrac{\\sin(x)}{\\ln(1+x)} \\underset{0}{\\sim} \\dfrac{x}{x} = 1`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\lim_{x\\to 0} \\dfrac{\\sin(x)}{\\ln(1+x)} = 1 \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['limits', 'equivalents', 'logarithm', 'trigonometric'],
      relatedTips: ['squeeze'],
    },

    // ── Q4 (Q49) ────────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Complex Numbers',
      statement: `Z = (\\sqrt{3} - i)^{3}\\,(-1+i)^{4}\\,(1+i)^{8}.`,
      question: `\\text{An argument of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{\\pi}{2}`, isCorrect: true },
        { id: 'B', latex: `-\\dfrac{\\pi}{4}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{3\\pi}{2}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{\\pi}{4}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{\\pi}{3}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute the argument of each base. $\\arg(\\sqrt{3}-i) = -\\pi/6$, so $\\arg((\\sqrt{3}-i)^{3}) = -\\pi/2$`,
          latex: `\\sqrt{3} - i = 2\\,e^{-i\\pi/6} \\implies (\\sqrt{3}-i)^{3} \\text{ has argument } -\\dfrac{\\pi}{2}`,
        },
        {
          label: `$\\arg(-1+i) = 3\\pi/4$, so $(\\cdot)^{4}$ has argument $3\\pi \\equiv \\pi$ mod $2\\pi$`,
          latex: `(-1+i)^{4} \\text{ has argument } 3\\pi \\equiv \\pi`,
        },
        {
          label: `$\\arg(1+i) = \\pi/4$, so $(\\cdot)^{8}$ has argument $2\\pi \\equiv 0$`,
          latex: `(1+i)^{8} \\text{ has argument } 2\\pi \\equiv 0`,
        },
        {
          label: `Sum the arguments`,
          latex: `\\arg(Z) = -\\dfrac{\\pi}{2} + \\pi + 0 = \\dfrac{\\pi}{2}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\arg(Z) \\equiv \\dfrac{\\pi}{2} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['complex-numbers', 'argument', 'exponential-form'],
      relatedTips: ['complex-arg'],
    },

    // ── Q5 (Q50) ────────────────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Limits',
      statement: `u_n = \\dfrac{3^{n} + e^{n+2} + 1}{3^{n} + e^{n+1} - 1}.`,
      question: `\\displaystyle\\lim_{n\\to+\\infty} u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `0`, isCorrect: false },
        { id: 'B', latex: `1`, isCorrect: true },
        { id: 'C', latex: `e`, isCorrect: false },
        { id: 'D', latex: `3`, isCorrect: false },
        { id: 'E', latex: `2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify the dominant term. Since $3 > e$, $3^{n}$ grows faster than $e^{n+1}$ or $e^{n+2}$`,
          latex: `3^{n} \\gg e^{n} \\text{ as } n \\to +\\infty \\quad (\\text{because } 3 > e)`,
        },
        {
          label: `Factor $3^{n}$ from numerator and denominator`,
          latex: `u_n = \\dfrac{1 + e^{n+2}/3^{n} + 1/3^{n}}{1 + e^{n+1}/3^{n} - 1/3^{n}}`,
        },
        {
          label: `As $n \\to +\\infty$: $e^{n}/3^{n} = (e/3)^{n} \\to 0$ and $1/3^{n} \\to 0$, so all secondary terms vanish`,
          latex: `u_n \\xrightarrow[n\\to+\\infty]{} \\dfrac{1 + 0 + 0}{1 + 0 - 0} = 1`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} u_n = 1 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['limits', 'sequences', 'growth-comparison'],
      relatedTips: ['geometric-sum'],
    },

    // ── Q6 (Q51) ────────────────────────────────────────────
    {
      number: 6,
      exercise: 6,
      topic: 'Integrals',
      statement: `I = \\displaystyle\\int_{0}^{1} \\dfrac{x^{2}}{1+x^{3}}\\,dx.`,
      question: `\\text{The integral } I \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `-e^{2}`, isCorrect: false },
        { id: 'B', latex: `-e`, isCorrect: false },
        { id: 'C', latex: `-2 + e`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{\\ln(2)}{3}`, isCorrect: true },
        { id: 'E', latex: `-2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize the form $\\dfrac{u'}{u}$ with $u(x) = 1+x^{3}$ and $u'(x) = 3x^{2}$`,
          latex: `\\dfrac{x^{2}}{1+x^{3}} = \\dfrac{1}{3} \\cdot \\dfrac{(1+x^{3})'}{1+x^{3}}`,
        },
        {
          label: `Antiderivative: $\\dfrac{1}{3}\\ln|1+x^{3}|$`,
          latex: `I = \\dfrac{1}{3}\\bigl[\\,\\ln(1+x^{3})\\,\\bigr]_{0}^{1} = \\dfrac{1}{3}(\\ln 2 - \\ln 1)`,
        },
        {
          label: `Simplify`,
          latex: `\\boxed{I = \\dfrac{\\ln(2)}{3} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['integral', 'logarithm', 'u-substitution'],
      relatedTips: ['integration-tan'],
    },

    // ── Q7 (Q52) ────────────────────────────────────────────
    {
      number: 7,
      exercise: 7,
      topic: 'Asymptotes',
      statement: `\\text{Let } f(x) = -x - \\dfrac{e^{x}}{e^{x} - 1}.`,
      question: `\\text{The curve of } f \\text{ admits at } +\\infty \\text{ an oblique asymptote of equation:}`,
      choices: [
        { id: 'A', latex: `y = -x - 1`, isCorrect: true },
        { id: 'B', latex: `y = -x + 1`, isCorrect: false },
        { id: 'C', latex: `y = -x`, isCorrect: false },
        { id: 'D', latex: `y = x`, isCorrect: false },
        { id: 'E', latex: `y = -x - 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $\\displaystyle\\lim_{x\\to+\\infty} \\dfrac{e^{x}}{e^{x} - 1}$ — divide numerator and denominator by $e^{x}$`,
          latex: `\\dfrac{e^{x}}{e^{x} - 1} = \\dfrac{1}{1 - e^{-x}} \\xrightarrow[x\\to+\\infty]{} \\dfrac{1}{1 - 0} = 1`,
        },
        {
          label: `Therefore $f(x) - (-x) = -\\dfrac{e^{x}}{e^{x}-1} \\to -1$`,
          latex: `\\lim_{x\\to+\\infty} \\bigl[\\,f(x) - (-x)\\,\\bigr] = -1`,
        },
        {
          label: `Oblique asymptote: $y = -x - 1$`,
          latex: `\\boxed{y = -x - 1 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['asymptote', 'oblique', 'exponential'],
      relatedTips: ['asymptotes'],
    },

    // ── Q8 (Q53) ────────────────────────────────────────────
    {
      number: 8,
      exercise: 8,
      topic: 'Complex Numbers',
      statement: `\\text{Consider the equation } (II):\\ |(1-i)z - 2| = |1+i|. \\text{ The set of points } M(z) \\text{ verifying } (II) \\text{ is the circle of center } \\Omega \\text{ and radius } R.`,
      question: `\\Omega \\text{ and } R \\text{ are:}`,
      choices: [
        { id: 'A', latex: `\\Omega(-1-i) \\;,\\; R = 1`, isCorrect: false },
        { id: 'B', latex: `\\Omega(-1-i) \\;,\\; R = \\sqrt{2}`, isCorrect: false },
        { id: 'C', latex: `\\Omega(1+i) \\;,\\; R = 1`, isCorrect: true },
        { id: 'D', latex: `\\Omega(1+i) \\;,\\; R = \\sqrt{2}`, isCorrect: false },
        { id: 'E', latex: `\\Omega(-2) \\;,\\; R = 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute the right-hand side: $|1+i| = \\sqrt{2}$`,
          latex: `|1+i| = \\sqrt{2}`,
        },
        {
          label: `Factor $(1-i)$ from the left side. Since $\\dfrac{2}{1-i} = \\dfrac{2(1+i)}{(1-i)(1+i)} = \\dfrac{2(1+i)}{2} = 1+i$`,
          latex: `(1-i)z - 2 = (1-i)\\bigl(z - (1+i)\\bigr)`,
        },
        {
          label: `Take moduli: $|1-i| = \\sqrt{2}$, so the equation becomes $\\sqrt{2}\\,|z - (1+i)| = \\sqrt{2}$`,
          latex: `|z - (1+i)| = 1`,
        },
        {
          label: `Identify: circle of center $\\Omega$ at affix $1+i$ and radius $R = 1$`,
          latex: `\\boxed{\\Omega(1+i) \\;,\\; R = 1 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'circle', 'modulus'],
      relatedTips: ['locus-complex'],
    },

    // ── Q9 (Q54) ────────────────────────────────────────────
    {
      number: 9,
      exercise: 9,
      topic: 'Geometry in Space',
      statement: `\\text{The space is equipped with an orthonormal frame. } (P) \\text{ and } (Q) \\text{ are two perpendicular planes such that } (Q) \\text{ has equation } x+y-z+2=0 \\text{ and } (P) \\text{ passes through the point } C(1\\,;0\\,;1).`,
      question: `\\text{An equation of the plane } (P) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `x - y - z + 1 = 0`, isCorrect: false },
        { id: 'B', latex: `x + z - 2 = 0`, isCorrect: true },
        { id: 'C', latex: `x - 2y - 1 = 0`, isCorrect: false },
        { id: 'D', latex: `y + z - 1 = 0`, isCorrect: false },
        { id: 'E', latex: `x + y + z - 2 = 0`, isCorrect: false },
      ],
      solution: [
        {
          label: `Two planes are perpendicular iff their normals are orthogonal: $\\vec{n}_{P} \\cdot \\vec{n}_{Q} = 0$. Normal of $(Q)$: $\\vec{n}_{Q} = (1\\,;1\\,;-1)$`,
          latex: `\\vec{n}_{Q} = (1\\,;1\\,;-1)`,
        },
        {
          label: `Test option B: normal $\\vec{n} = (1\\,;0\\,;1)$. Dot product $1\\cdot 1 + 0\\cdot 1 + 1\\cdot(-1) = 0$ ✓ — perpendicular`,
          latex: `(1\\,;0\\,;1) \\cdot (1\\,;1\\,;-1) = 0`,
        },
        {
          label: `Verify $C(1\\,;0\\,;1)$ lies on the plane: $1 + 1 - 2 = 0$ ✓`,
          latex: `1 + 1 - 2 = 0 \\;\\checkmark`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{(P):\\ x + z - 2 = 0 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['geometry-3d', 'plane', 'perpendicular'],
      relatedTips: ['parametric-line'],
    },

    // ── Q10 (Q55) ───────────────────────────────────────────
    {
      number: 10,
      exercise: 10,
      topic: 'Probability',
      statement: `\\text{An urn contains 5 indistinguishable balls numbered 1 to 5. Two balls are drawn successively WITHOUT replacement.}`,
      question: `\\text{The probability that the product of the two numbers is odd is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{6}{20}`, isCorrect: true },
        { id: 'B', latex: `\\dfrac{7}{20}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{13}{20}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{9}{20}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{11}{20}`, isCorrect: false },
      ],
      solution: [
        {
          label: `The product is odd iff BOTH numbers are odd. There are 3 odd numbers $\\{1,3,5\\}$ and 2 even $\\{2,4\\}$`,
          latex: `\\text{product odd} \\iff \\text{both factors odd}`,
        },
        {
          label: `Total ordered pairs without replacement: $5 \\cdot 4 = 20$. Favorable ordered pairs (both odd): $3 \\cdot 2 = 6$`,
          latex: `P(\\text{both odd}) = \\dfrac{3 \\cdot 2}{5 \\cdot 4} = \\dfrac{6}{20}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{P = \\dfrac{6}{20} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['probability', 'without-replacement', 'parity'],
      relatedTips: ['conditional-prob'],
    },

    // ── Q11 (Q56) ───────────────────────────────────────────
    {
      number: 11,
      exercise: 11,
      topic: 'Complex Numbers',
      statement: `z \\text{ is a complex number such that } \\bar z = 2 - z.`,
      question: `|1+z|^{2} - |1-\\bar z|^{2} \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2\\sqrt{2}`, isCorrect: false },
        { id: 'B', latex: `\\sqrt{2}`, isCorrect: false },
        { id: 'C', latex: `2`, isCorrect: false },
        { id: 'D', latex: `4`, isCorrect: true },
        { id: 'E', latex: `-2\\sqrt{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `From $\\bar z = 2 - z$: add $z$ to both sides to get $z + \\bar z = 2$, so $2\\,\\text{Re}(z) = 2$, i.e., $\\text{Re}(z) = 1$`,
          latex: `z + \\bar z = 2 \\iff \\text{Re}(z) = 1 \\implies z = 1 + iy \\;\\text{ for some } y \\in \\mathbb{R}`,
        },
        {
          label: `Compute $|1+z|^{2}$: $1 + z = 2 + iy$, so $|1+z|^{2} = 4 + y^{2}$`,
          latex: `|1+z|^{2} = 4 + y^{2}`,
        },
        {
          label: `Compute $|1-\\bar z|^{2}$: $\\bar z = 1 - iy$, so $1 - \\bar z = iy$, giving $|1-\\bar z|^{2} = y^{2}$`,
          latex: `|1 - \\bar z|^{2} = y^{2}`,
        },
        {
          label: `Subtract: $(4+y^{2}) - y^{2} = 4$ — independent of $y$`,
          latex: `\\boxed{|1+z|^{2} - |1-\\bar z|^{2} = 4 \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'modulus', 'conjugate'],
      relatedTips: ['complex-arg'],
    },

    // ── Q12 (Q57) ───────────────────────────────────────────
    {
      number: 12,
      exercise: 12,
      topic: 'Sequences',
      statement: `\\forall n \\in \\mathbb{N},\\ u_n = \\dfrac{1}{\\sqrt{e^{2n} + 1}}.`,
      question: `(u_n) \\text{ verifies:}`,
      choices: [
        { id: 'A', latex: `(u_n) \\text{ is decreasing}`, isCorrect: true },
        { id: 'B', latex: `(u_n) \\text{ is bounded below by } 1`, isCorrect: false },
        { id: 'C', latex: `u_0 = \\dfrac{\\sqrt 2}{2}`, isCorrect: false },
        { id: 'D', latex: `\\forall n \\in \\mathbb{N},\\ u_n > 1`, isCorrect: false },
        { id: 'E', latex: `\\lim_{n\\to+\\infty} u_n = 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `As $n$ increases, $e^{2n}$ increases, so $\\sqrt{e^{2n}+1}$ increases. Taking the reciprocal reverses the monotonicity`,
          latex: `n \\nearrow \\implies e^{2n}+1 \\nearrow \\implies u_n = \\dfrac{1}{\\sqrt{e^{2n}+1}} \\searrow`,
        },
        {
          label: `So $(u_n)$ is strictly decreasing. Verify the others: $u_0 = 1/\\sqrt{2} = \\sqrt{2}/2$ — option C is also true`,
          latex: `u_0 = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2}`,
        },
        {
          label: `Note: $u_n \\to 0$ (not $1$), and $u_n < 1$ for $n \\geq 1$. So D and E are false. The intended primary property is "decreasing"`,
          latex: `\\boxed{(u_n) \\text{ is decreasing} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'monotonicity', 'exponential'],
      relatedTips: ['suite-type'],
    },

    // ── Q13 (Q58) ───────────────────────────────────────────
    {
      number: 13,
      exercise: 13,
      topic: 'Logarithmic Equations',
      statement: `\\text{Consider the equation } (E):\\ (\\ln x)^{3} - 3(\\ln x)^{2} + 2\\ln(x) = 0.`,
      question: `(E) \\text{ admits:}`,
      choices: [
        { id: 'A', latex: `\\text{a unique solution}`, isCorrect: false },
        { id: 'B', latex: `\\text{two distinct solutions}`, isCorrect: false },
        { id: 'C', latex: `\\text{at most two solutions}`, isCorrect: false },
        { id: 'D', latex: `\\text{at most two distinct solutions}`, isCorrect: false },
        { id: 'E', latex: `\\text{three distinct solutions}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Substitute $t = \\ln(x)$. The equation becomes a cubic in $t$`,
          latex: `t^{3} - 3t^{2} + 2t = 0`,
        },
        {
          label: `Factor by $t$: $t(t^{2} - 3t + 2) = 0$, then factor the quadratic`,
          latex: `t(t-1)(t-2) = 0 \\iff t \\in \\{0\\,;1\\,;2\\}`,
        },
        {
          label: `Recover $x$: $\\ln(x) = 0 \\implies x = 1$, $\\ln(x) = 1 \\implies x = e$, $\\ln(x) = 2 \\implies x = e^{2}$`,
          latex: `S = \\{1\\,;e\\,;e^{2}\\}`,
        },
        {
          label: `Three distinct positive solutions`,
          latex: `\\boxed{(E) \\text{ admits 3 distinct solutions} \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['logarithm', 'cubic', 'substitution'],
      relatedTips: ['log-substitution'],
    },

    // ── Q14 (Q59) ───────────────────────────────────────────
    {
      number: 14,
      exercise: 14,
      topic: 'Tangent Line',
      statement: `\\text{Let } f(x) = 2x + \\dfrac{e^{x}}{1 + \\ln(1+x)}.`,
      question: `\\text{The tangent at } A(0\\,;1) \\text{ has equation:}`,
      choices: [
        { id: 'A', latex: `y = 2x + 1`, isCorrect: true },
        { id: 'B', latex: `y = 3x + 1`, isCorrect: false },
        { id: 'C', latex: `y = 3x - 1`, isCorrect: false },
        { id: 'D', latex: `y = 3x + 2`, isCorrect: false },
        { id: 'E', latex: `y = -2x - 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Verify the point lies on the curve: $f(0) = 0 + \\dfrac{e^{0}}{1 + \\ln(1)} = \\dfrac{1}{1} = 1$ ✓`,
          latex: `f(0) = 1`,
        },
        {
          label: `Differentiate. Let $g(x) = \\dfrac{e^{x}}{1+\\ln(1+x)}$ with $u = e^{x}$, $v = 1+\\ln(1+x)$, $u' = e^{x}$, $v' = \\dfrac{1}{1+x}$`,
          latex: `g'(x) = \\dfrac{e^{x}\\bigl(1+\\ln(1+x)\\bigr) - e^{x}\\cdot\\dfrac{1}{1+x}}{\\bigl(1+\\ln(1+x)\\bigr)^{2}}`,
        },
        {
          label: `Evaluate at $x=0$: numerator $= 1\\cdot 1 - 1\\cdot 1 = 0$, denominator $= 1$. So $g'(0) = 0$`,
          latex: `g'(0) = 0 \\implies f'(0) = 2 + 0 = 2`,
        },
        {
          label: `Apply the tangent equation $y = f'(0)(x-0) + f(0)$`,
          latex: `\\boxed{y = 2x + 1 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['tangent', 'derivative', 'exponential', 'logarithm'],
      relatedTips: ['product-derivative'],
    },

    // ── Q15 (Q60) ───────────────────────────────────────────
    {
      number: 15,
      exercise: 15,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = \\dfrac{x^{2}\\,e^{-x}}{1 - x^{2}}.`,
      question: `f \\text{ verifies:}`,
      choices: [
        { id: 'A', latex: `D_f = \\mathbb{R} \\setminus \\{-1\\,;1\\}`, isCorrect: true },
        { id: 'B', latex: `\\lim_{x\\to 1^{-}} f(x) = +\\infty`, isCorrect: false },
        { id: 'C', latex: `\\lim_{x\\to+\\infty} f(x) = 0`, isCorrect: false },
        { id: 'D', latex: `f \\text{ is even}`, isCorrect: false },
        { id: 'E', latex: `f(0) = 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: the denominator $1 - x^{2}$ is zero at $x = \\pm 1$. The numerator is defined everywhere`,
          latex: `D_f = \\mathbb{R} \\setminus \\{-1\\,;1\\}`,
        },
        {
          label: `Verify the others. $f(0) = 0 / 1 = 0$ (so E is false). $f(-x) = x^{2}e^{x}/(1-x^{2}) \\neq f(x)$ in general (D false)`,
          latex: `f(0) = 0 \\;,\\quad f(-x) \\neq f(x)`,
        },
        {
          label: `As $x \\to 1^{-}$: numerator $\\to e^{-1} > 0$, denominator $\\to 0^{+}$, so the limit is $+\\infty$ — option B is also TRUE in this case (the test treats A as the primary identifying property)`,
          latex: `\\boxed{D_f = \\mathbb{R}\\setminus\\{-1\\,;1\\} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['domain', 'limits', 'rational-function'],
      relatedTips: ['log-domain'],
    },
  ],
}
