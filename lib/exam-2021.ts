// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2021
// Mathematics Paper — Academic Year 2021-2022 (taken summer 2021)
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2021_REAL: ExamData = {
  year: 2021,
  date: 'Summer 2021 — Academic Year 2021-2022',
  duration: 60,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam for Faculties of General Medicine, Dental Medicine, Pharmacy — Academic Year 2021-2022`,
  instructions: `The mathematics paper contains 20 multiple-choice questions, each offering 5 options (A through E) with a single correct answer. Indicate on the answer sheet the letter corresponding to your choice. The use of calculators is strictly forbidden.`,
  questions: [
    // ── Q1 (Q61) ────────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Function Analysis',
      statement: `\\text{Let } f \\text{ be the function defined by } f(x) = \\sqrt{-x+1} + \\ln(x).`,
      question: `\\text{The domain of definition } D_f \\text{ of } f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]0\\,;+\\infty[`, isCorrect: false },
        { id: 'B', latex: `]0\\,;1]`, isCorrect: true },
        { id: 'C', latex: `]1\\,;+\\infty[`, isCorrect: false },
        { id: 'D', latex: `]-1\\,;0[`, isCorrect: false },
        { id: 'E', latex: `]-1\\,;1[`, isCorrect: false },
      ],
      solution: [
        {
          label: `For $\\sqrt{-x+1}$ to be defined we need $-x+1 \\geq 0 \\iff x \\leq 1$`,
          latex: `\\sqrt{-x+1} \\text{ defined} \\iff x \\leq 1`,
        },
        {
          label: `For $\\ln(x)$ to be defined we need $x > 0$`,
          latex: `\\ln(x) \\text{ defined} \\iff x > 0`,
        },
        {
          label: `Take the intersection of the two conditions: $x > 0$ AND $x \\leq 1$`,
          latex: `\\boxed{D_f = \\,]0\\,;1] \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['domain', 'logarithm', 'square-root'],
      relatedTips: ['log-domain'],
    },

    // ── Q2 (Q62) ────────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Inequalities',
      statement: `\\text{Consider the inequality } (I):\\ 2x\\,\\ln(-x) \\geq 0.`,
      question: `\\text{The solution set of } (I) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]-\\infty\\,;-1[`, isCorrect: false },
        { id: 'B', latex: `]-1\\,;1[`, isCorrect: false },
        { id: 'C', latex: `[-1\\,;0[`, isCorrect: true },
        { id: 'D', latex: `]0\\,;+\\infty[`, isCorrect: false },
        { id: 'E', latex: `]1\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: $\\ln(-x)$ requires $-x > 0 \\iff x < 0$. The product is studied on $]-\\infty,0[$`,
          latex: `D = \\,]-\\infty\\,;0[`,
        },
        {
          label: `On $D$, $2x < 0$. So $2x\\ln(-x) \\geq 0 \\iff \\ln(-x) \\leq 0 \\iff -x \\leq 1 \\iff x \\geq -1$`,
          latex: `2x < 0 \\implies (\\,2x\\ln(-x) \\geq 0 \\iff \\ln(-x) \\leq 0\\,) \\iff x \\geq -1`,
        },
        {
          label: `Combine $x < 0$ and $x \\geq -1$ to obtain the final solution`,
          latex: `\\boxed{S = [-1\\,;0[ \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['logarithm', 'inequality', 'sign-table'],
      relatedTips: ['log-domain'],
    },

    // ── Q3 (Q63) ────────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Limits',
      statement: `\\text{Consider the limit at } +\\infty\\text{:}\\ \\displaystyle\\lim_{x\\to+\\infty} \\dfrac{x^2 + \\ln(x)}{\\ln(x)}.`,
      question: `\\text{This limit equals:}`,
      choices: [
        { id: 'A', latex: `+\\infty`, isCorrect: true },
        { id: 'B', latex: `0`, isCorrect: false },
        { id: 'C', latex: `-1`, isCorrect: false },
        { id: 'D', latex: `-\\infty`, isCorrect: false },
        { id: 'E', latex: `1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Split the fraction: $\\dfrac{x^2 + \\ln(x)}{\\ln(x)} = \\dfrac{x^2}{\\ln(x)} + 1$`,
          latex: `\\dfrac{x^2 + \\ln(x)}{\\ln(x)} = \\dfrac{x^2}{\\ln(x)} + 1`,
        },
        {
          label: `Use the growth hierarchy: $x^\\alpha$ dominates $\\ln(x)$ as $x \\to +\\infty$, so $x^2/\\ln(x) \\to +\\infty$`,
          latex: `\\lim_{x\\to+\\infty} \\dfrac{x^2}{\\ln(x)} = +\\infty`,
        },
        {
          label: `Adding the constant $1$ doesn't change the limit`,
          latex: `\\boxed{\\lim_{x\\to+\\infty} \\dfrac{x^2 + \\ln(x)}{\\ln(x)} = +\\infty \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['limits', 'logarithm', 'growth-comparison'],
      relatedTips: ['asymptotes'],
    },

    // ── Q4 (Q64) ────────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Derivatives',
      statement: `\\text{Let } f(x) = (1-\\ln x)(1+\\ln x).`,
      question: `f'(x) \\text{ is equal to:}`,
      choices: [
        { id: 'A', latex: `-\\dfrac{2}{x}\\ln(x)`, isCorrect: true },
        { id: 'B', latex: `\\dfrac{2}{x}(1-\\ln x)`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{2}{x}\\ln(x)`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{2}{x}(-1+\\ln x)`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{1}{x}(1-\\ln x)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize the difference of squares: $(1-\\ln x)(1+\\ln x) = 1 - (\\ln x)^2$`,
          latex: `f(x) = 1 - (\\ln x)^2`,
        },
        {
          label: `Differentiate using the chain rule: $\\frac{d}{dx}[(\\ln x)^2] = 2\\ln(x) \\cdot \\frac{1}{x}$`,
          latex: `f'(x) = -2\\ln(x) \\cdot \\dfrac{1}{x} = -\\dfrac{2\\ln(x)}{x}`,
        },
        {
          label: `Compare with the options`,
          latex: `\\boxed{f'(x) = -\\dfrac{2}{x}\\ln(x) \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['derivative', 'logarithm', 'chain-rule'],
      relatedTips: ['product-derivative'],
    },

    // ── Q5 (Q65) ────────────────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Complex Numbers',
      statement: `\\text{Let } Z = \\left(\\dfrac{-1}{\\sqrt{3}+i}\\right)^{18}.`,
      question: `\\text{An argument of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `2\\pi`, isCorrect: false },
        { id: 'B', latex: `\\pi`, isCorrect: true },
        { id: 'C', latex: `\\dfrac{\\pi}{6}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{\\pi}{3}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{\\pi}{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Write $\\sqrt{3}+i$ in polar form: modulus $|\\sqrt 3 + i| = \\sqrt{3+1} = 2$, argument $\\arg(\\sqrt{3}+i) = \\dfrac{\\pi}{6}$`,
          latex: `\\sqrt{3}+i = 2\\,e^{i\\pi/6}`,
        },
        {
          label: `Therefore $\\dfrac{1}{\\sqrt{3}+i} = \\dfrac{1}{2}\\,e^{-i\\pi/6}$, and the $-1$ factor adds an argument of $\\pi$`,
          latex: `\\dfrac{-1}{\\sqrt{3}+i} = \\dfrac{1}{2}\\,e^{i(\\pi - \\pi/6)} = \\dfrac{1}{2}\\,e^{i\\,5\\pi/6}`,
        },
        {
          label: `Raise to the 18th power: argument becomes $18 \\cdot \\frac{5\\pi}{6} = 15\\pi$`,
          latex: `\\arg(Z) = 15\\pi \\equiv \\pi \\pmod{2\\pi}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\arg(Z) \\equiv \\pi \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'argument', 'exponential-form'],
      relatedTips: ['complex-arg'],
    },

    // ── Q6 (Q66) ────────────────────────────────────────────
    {
      number: 6,
      exercise: 6,
      topic: 'Sequences',
      statement: `\\text{Consider the sequence } u_n = \\dfrac{4^n + 5^n}{3^n + 2^n + 1}.`,
      question: `\\lim_{n\\to+\\infty} u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `2`, isCorrect: false },
        { id: 'B', latex: `1`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{5}{3}`, isCorrect: false },
        { id: 'D', latex: `+\\infty`, isCorrect: true },
        { id: 'E', latex: `0`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify the dominant terms: numerator $\\sim 5^n$ (largest base), denominator $\\sim 3^n$`,
          latex: `4^n + 5^n \\sim 5^n \\;,\\quad 3^n + 2^n + 1 \\sim 3^n`,
        },
        {
          label: `Factor by the dominant term in each: divide numerator by $5^n$, denominator by $3^n$`,
          latex: `u_n = \\dfrac{5^n\\bigl(\\,(4/5)^n + 1\\bigr)}{3^n\\bigl(1 + (2/3)^n + (1/3)^n\\bigr)} = \\left(\\dfrac{5}{3}\\right)^n \\cdot \\dfrac{(4/5)^n + 1}{1 + (2/3)^n + (1/3)^n}`,
        },
        {
          label: `As $n\\to+\\infty$: the second factor tends to $\\frac{0+1}{1+0+0} = 1$, while $(5/3)^n \\to +\\infty$ since $5/3 > 1$`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} u_n = +\\infty \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'limits', 'geometric'],
      relatedTips: ['geometric-sum'],
    },

    // ── Q7 (Q67) ────────────────────────────────────────────
    {
      number: 7,
      exercise: 7,
      topic: 'Integrals',
      statement: `\\text{Let } I = \\displaystyle\\int_{3}^{4} \\dfrac{x-3}{x-2}\\,dx.`,
      question: `\\text{The integral } I \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\ln(2)`, isCorrect: false },
        { id: 'B', latex: `1 - \\ln(2)`, isCorrect: true },
        { id: 'C', latex: `\\ln(3)`, isCorrect: false },
        { id: 'D', latex: `3`, isCorrect: false },
        { id: 'E', latex: `2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Rewrite the numerator: $x-3 = (x-2) - 1$, so split the fraction`,
          latex: `\\dfrac{x-3}{x-2} = \\dfrac{(x-2)-1}{x-2} = 1 - \\dfrac{1}{x-2}`,
        },
        {
          label: `Antiderivative: $\\int 1\\,dx = x$ and $\\int \\frac{1}{x-2}\\,dx = \\ln|x-2|$`,
          latex: `I = \\Bigl[\\,x - \\ln|x-2|\\,\\Bigr]_3^4`,
        },
        {
          label: `Evaluate at the bounds: $(4 - \\ln 2) - (3 - \\ln 1) = 1 - \\ln 2$ since $\\ln 1 = 0$`,
          latex: `\\boxed{I = 1 - \\ln(2) \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integral', 'logarithm', 'algebraic-manipulation'],
      relatedTips: ['integration-tan'],
    },

    // ── Q8 (Q68) ────────────────────────────────────────────
    {
      number: 8,
      exercise: 8,
      topic: 'Asymptotes',
      statement: `\\text{Let } f(x) = 2x + 1 - \\dfrac{x^4}{x^4+1}.`,
      question: `\\text{The curve of } f \\text{ admits at } +\\infty \\text{ an oblique asymptote of equation:}`,
      choices: [
        { id: 'A', latex: `y = 2x+1`, isCorrect: false },
        { id: 'B', latex: `y = 2x-1`, isCorrect: false },
        { id: 'C', latex: `y = 2x-2`, isCorrect: false },
        { id: 'D', latex: `y = 2x`, isCorrect: true },
        { id: 'E', latex: `y = 2x-4`, isCorrect: false },
      ],
      solution: [
        {
          label: `⚠ STEP 0 — Spot the trap. The expression $f(x) = 2x + 1 - \\dfrac{x^{4}}{x^{4}+1}$ shows "$2x + 1$" plainly, so option A ($y = 2x+1$) looks "obvious". But the rational fraction is NOT negligible — it has a finite, NON-ZERO limit at $+\\infty$. We MUST compute carefully`,
          latex: `\\text{NEVER trust the "literal" expression. Always test } \\lim [f(x) - ax] \\text{ to validate any candidate asymptote.}`,
        },
        {
          label: `STEP 1 — Compute the limit of the rational part. Divide numerator and denominator by $x^{4}$ (the highest power)`,
          latex: `\\dfrac{x^{4}}{x^{4}+1} = \\dfrac{1}{1 + \\frac{1}{x^{4}}} \\xrightarrow[x\\to+\\infty]{} \\dfrac{1}{1+0} = 1`,
        },
        {
          label: `STEP 2 — The fraction tends to 1 (NOT to 0!). So as $x \\to +\\infty$, $f(x)$ behaves like $2x + 1 - 1 = 2x$, not like $2x + 1$. The "+1" is CANCELLED by the "−(x⁴/(x⁴+1)) → −1"`,
          latex: `f(x) = 2x + 1 - \\dfrac{x^{4}}{x^{4}+1} \\xrightarrow[x\\to+\\infty]{} 2x + 1 - 1 = 2x`,
        },
        {
          label: `STEP 3 — Apply the standard test: candidate asymptote $y = ax + b$ requires $\\lim f(x)/x = a$ (slope) AND $\\lim [f(x) - ax] = b$ (intercept). Compute $\\lim f(x)/x$ first`,
          latex: `\\dfrac{f(x)}{x} = 2 + \\dfrac{1}{x} - \\dfrac{x^{3}}{x^{4}+1} \\xrightarrow[x\\to+\\infty]{} 2 + 0 - 0 = 2 \\implies a = 2`,
        },
        {
          label: `STEP 4 — Compute $b = \\lim [f(x) - 2x]$. Algebraic simplification using the identity $1 - \\dfrac{x^{4}}{x^{4}+1} = \\dfrac{(x^{4}+1) - x^{4}}{x^{4}+1} = \\dfrac{1}{x^{4}+1}$`,
          latex: `f(x) - 2x = 1 - \\dfrac{x^{4}}{x^{4}+1} = \\dfrac{1}{x^{4}+1} \\xrightarrow[x\\to+\\infty]{} 0 \\implies b = 0`,
        },
        {
          label: `STEP 5 — Conclude. The asymptote is $y = ax + b = 2x + 0 = 2x$. The "+1" intercept does NOT appear`,
          latex: `\\boxed{y = 2x \\implies \\text{Answer: D}}`,
        },
        {
          label: `STEP 6 — Why option A ($y = 2x + 1$) is WRONG. Test it directly`,
          latex: `f(x) - (2x+1) = -\\dfrac{x^{4}}{x^{4}+1} \\xrightarrow[x\\to+\\infty]{} -1 \\neq 0`,
        },
        {
          label: `The vertical gap to $y = 2x+1$ STABILIZES at $-1$ (constant, NOT zero) — so the curve runs PARALLEL to but never approaches $y = 2x+1$. That line is NOT an asymptote`,
          latex: `\\text{Distance to } y = 2x+1 \\text{ converges to } -1 \\;\\text{(constant gap)} \\implies \\text{NOT an asymptote.}`,
        },
        {
          label: `STEP 7 — Sanity check with numerics. At $x = 10$: $f(10) \\approx 21.0001$, so $f(10) - 2(10) = 1.0001 \\to$ wait, that's close to $1$, not $0$? Let me re-verify: $f(10) = 21 - 10000/10001 = 21 - 0.9999 = 20.0001$. So $f(10) - 20 = 0.0001 \\to 0$. And $f(10) - 21 = -0.9999 \\to -1$. ✓`,
          latex: `f(10) = 20.0001 \\implies f(10) - 2(10) = 0.0001 \\;\\text{(close to 0)} \\;,\\; f(10) - (2(10)+1) = -0.9999 \\;\\text{(close to } -1\\text{)}`,
        },
      ],
      difficulty: 'hard',
      tags: ['asymptote', 'oblique', 'limits', 'trap-question'],
      relatedTips: ['asymptotes'],
      visualization: {
        type: 'function-plot',
        preset: 'oblique-asymp-2021-q8',
        title: 'f(x) = 2x + 1 − x⁴/(x⁴+1) — only y = 2x is the asymptote',
        description: 'Watch the gaps: f(x) − 2x → 0 (true asymptote), f(x) − (2x+1) → −1 (parallel but NOT asymptotic).',
      },
    },

    // ── Q9 (Q69) ────────────────────────────────────────────
    {
      number: 9,
      exercise: 9,
      topic: 'Complex Numbers',
      statement: `\\text{Consider the equation } (II):\\ |z-1| = |\\bar z + 1|.`,
      question: `\\text{The set of points } M(z) \\text{ in the complex plane satisfying } (II) \\text{ is the line of equation:}`,
      choices: [
        { id: 'A', latex: `y = 1`, isCorrect: false },
        { id: 'B', latex: `y = 0`, isCorrect: false },
        { id: 'C', latex: `x = 0`, isCorrect: true },
        { id: 'D', latex: `y = x`, isCorrect: false },
        { id: 'E', latex: `y = -x`, isCorrect: false },
      ],
      solution: [
        {
          label: `Set $z = x + iy$, so $\\bar z = x - iy$. Compute both moduli`,
          latex: `|z-1| = \\sqrt{(x-1)^2 + y^2} \\;,\\quad |\\bar z + 1| = \\sqrt{(x+1)^2 + y^2}`,
        },
        {
          label: `Square both sides to remove the radicals`,
          latex: `(x-1)^2 + y^2 = (x+1)^2 + y^2`,
        },
        {
          label: `Simplify: cancel $y^2$, expand and reduce`,
          latex: `(x-1)^2 = (x+1)^2 \\iff -2x = 2x \\iff x = 0`,
        },
        {
          label: `The locus is the imaginary axis`,
          latex: `\\boxed{x = 0 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['complex-numbers', 'locus', 'modulus'],
      relatedTips: ['locus-complex'],
    },

    // ── Q10 (Q70) ───────────────────────────────────────────
    {
      number: 10,
      exercise: 10,
      topic: 'Complex Numbers',
      statement: `\\text{Let } z_1 \\text{ and } z_2 \\text{ be the two solutions of } z^2 + z + 1 = 0.`,
      question: `\\text{Which property do the roots verify?}`,
      choices: [
        { id: 'A', latex: `z_2 = \\dfrac{1}{z_1}`, isCorrect: true },
        { id: 'B', latex: `z_2 = 1 + z_1`, isCorrect: false },
        { id: 'C', latex: `z_2 + z_1 = 1`, isCorrect: false },
        { id: 'D', latex: `z_1 \\times z_2 = 0`, isCorrect: false },
        { id: 'E', latex: `z_2 = -z_1`, isCorrect: false },
      ],
      solution: [
        {
          label: `STEP 1 — Solve the equation. Compute the discriminant: $\\Delta = b^{2} - 4ac = 1 - 4 = -3 < 0$, so the roots are complex conjugates`,
          latex: `\\Delta = -3 \\implies z_{1,2} = \\dfrac{-1 \\pm i\\sqrt{3}}{2}`,
        },
        {
          label: `STEP 2 — Recognize the roots geometrically. These are exactly $j = e^{i\\,2\\pi/3}$ and $j^{2} = e^{-i\\,2\\pi/3}$ — the two primitive cube roots of unity (along with $1$)`,
          latex: `z_{1} = e^{i\\,2\\pi/3} \\;,\\quad z_{2} = e^{-i\\,2\\pi/3} = \\bar z_{1}`,
        },
        {
          label: `STEP 3 — Use modulus = 1. Compute $|z_{1}|^{2} = \\tfrac{1}{4} + \\tfrac{3}{4} = 1$, so $|z_{1}| = 1$. By definition of conjugate: $z_{1}\\,\\bar z_{1} = |z_{1}|^{2} = 1$`,
          latex: `|z_{1}| = 1 \\implies z_{1}\\,\\bar z_{1} = 1 \\implies \\bar z_{1} = \\dfrac{1}{z_{1}}`,
        },
        {
          label: `STEP 4 — Combine. Since $z_{2} = \\bar z_{1}$ AND $\\bar z_{1} = 1/z_{1}$, we get $z_{2} = 1/z_{1}$. (Vieta confirms: $z_{1}\\,z_{2} = c/a = 1$, so $z_{2} = 1/z_{1}$ — same conclusion)`,
          latex: `z_{2} = \\bar z_{1} = \\dfrac{1}{z_{1}}`,
        },
        {
          label: `STEP 5 — Reject the other options using Vieta's: $z_{1}+z_{2} = -b/a = -1$ and $z_{1}z_{2} = c/a = 1$`,
          latex: `z_{1}+z_{2} = -1 \\;,\\quad z_{1}\\cdot z_{2} = 1`,
        },
        {
          label: `Option B ($z_{2}=1+z_{1}$): would give $z_{1}+z_{2} = 2z_{1}+1$, forcing $z_{1}$ real — false. Option C ($z_{1}+z_{2}=1$): the actual sum is $-1$, not $1$. Option D ($z_{1}z_{2}=0$): the actual product is $1$, not $0$. Option E ($z_{2}=-z_{1}$): would give $z_{1}z_{2}=-z_{1}^{2}$, negative for real $z_{1}$ but here $|z_{1}|^{2}=1$ — incompatible`,
          latex: `\\boxed{z_{2} = \\dfrac{1}{z_{1}} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'quadratic', 'roots-of-unity'],
      relatedTips: ['complex-arg'],
      visualization: {
        type: 'roots-of-unity',
        n: 3,
        highlight: [1, 2],
        highlightLabels: ['z₁', 'z₂'],
        title: 'z² + z + 1 = 0 — the two primitive cube roots of unity',
        description: 'The roots z₁ = j and z₂ = j² (along with 1) form an equilateral triangle on the unit circle. Symmetric about the real axis.',
      },
    },

    // ── Q11 (Q71) ───────────────────────────────────────────
    {
      number: 11,
      exercise: 11,
      topic: 'Equations',
      statement: `\\text{The equation } x^3 + \\ln(x) = 0 \\text{ admits a unique solution } \\alpha \\text{ on } ]0,+\\infty[.`,
      question: `\\alpha \\text{ verifies:}`,
      choices: [
        { id: 'A', latex: `-2 < \\alpha < -1`, isCorrect: false },
        { id: 'B', latex: `-1 < \\alpha < 0`, isCorrect: false },
        { id: 'C', latex: `0 < \\alpha < 1`, isCorrect: true },
        { id: 'D', latex: `1 < \\alpha < 2`, isCorrect: false },
        { id: 'E', latex: `1 < \\alpha < e`, isCorrect: false },
      ],
      solution: [
        {
          label: `STEP 1 — Define and study $g$. Let $g(x) = x^{3} + \\ln(x)$ on $]0, +\\infty[$. We seek the unique $\\alpha$ with $g(\\alpha) = 0$`,
          latex: `g(x) = x^{3} + \\ln(x) \\;,\\; x \\in \\,]0, +\\infty[`,
        },
        {
          label: `STEP 2 — Show $g$ is strictly increasing. Differentiate: both terms have positive derivatives on $]0, +\\infty[$`,
          latex: `g'(x) = 3x^{2} + \\dfrac{1}{x} > 0 \\;,\\; \\forall x > 0 \\implies g \\nearrow`,
        },
        {
          label: `STEP 3 — Check boundary limits: $g(0^{+}) = 0 + (-\\infty) = -\\infty$ and $g(+\\infty) = +\\infty + (+\\infty) = +\\infty$. By IVT + monotonicity, there is a UNIQUE root $\\alpha$ in $]0, +\\infty[$`,
          latex: `\\lim_{x\\to 0^{+}} g(x) = -\\infty \\;,\\; \\lim_{x\\to+\\infty} g(x) = +\\infty \\implies \\exists!\\, \\alpha > 0,\\, g(\\alpha) = 0`,
        },
        {
          label: `STEP 4 — Localize $\\alpha$. Test at $x = 1/e$ and $x = 1$ (strategic since $\\ln(1) = 0$ and $\\ln(1/e) = -1$)`,
          latex: `g\\!\\left(\\dfrac{1}{e}\\right) = \\dfrac{1}{e^{3}} - 1 < 0 \\;\\text{(since } 1/e^{3} \\approx 0.05 < 1\\text{)} \\;,\\quad g(1) = 1 + 0 = 1 > 0`,
        },
        {
          label: `STEP 5 — Conclude with IVT. Since $g$ is continuous, strictly increasing, $g(1/e) < 0$ and $g(1) > 0$, the unique root satisfies`,
          latex: `\\dfrac{1}{e} < \\alpha < 1 \\implies 0 < \\alpha < 1`,
        },
        {
          label: `Reject other intervals: options A and B are negative (out of domain), D and E require $\\alpha \\geq 1$ but $g(1) > 0$ already`,
          latex: `\\boxed{0 < \\alpha < 1 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['IVT', 'logarithm', 'monotonicity'],
      relatedTips: ['function-range'],
      visualization: {
        type: 'function-plot',
        preset: 'cubic-log-2021-q11',
        title: 'g(x) = x³ + ln(x) — unique root α in ]1/e, 1[',
        description: 'The curve crosses y = 0 once in the interval ]1/e ; 1[. Strictly increasing, sign change confirmed.',
      },
    },

    // ── Q12 (Q72) ───────────────────────────────────────────
    {
      number: 12,
      exercise: 12,
      topic: 'Tangent Line',
      statement: `\\text{Let } f(x) = \\ln(x^2 + x + 4).`,
      question: `\\text{The tangent to } (C_f) \\text{ at } P(0\\,;\\,2\\ln 2) \\text{ has equation:}`,
      choices: [
        { id: 'A', latex: `y = x`, isCorrect: false },
        { id: 'B', latex: `y = \\dfrac{1}{4}x - 2\\ln 2`, isCorrect: false },
        { id: 'C', latex: `y = \\dfrac{1}{4}x + 2\\ln 2`, isCorrect: true },
        { id: 'D', latex: `y = \\dfrac{1}{2}x + 2\\ln 2`, isCorrect: false },
        { id: 'E', latex: `y = 2\\ln 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `STEP 1 — Verify the point lies on the curve. Substitute $x = 0$ into $f$`,
          latex: `f(0) = \\ln(0 + 0 + 4) = \\ln(4) = 2\\ln(2) \\;\\checkmark`,
        },
        {
          label: `STEP 2 — Compute $f'$ via the chain rule on $\\ln(u(x))$ with $u(x) = x^{2}+x+4$. Recall $(\\ln u)' = u'/u$`,
          latex: `f'(x) = \\dfrac{u'(x)}{u(x)} = \\dfrac{2x + 1}{x^{2} + x + 4}`,
        },
        {
          label: `STEP 3 — Evaluate the slope at the point $x_{0} = 0$. The numerator is $2(0)+1 = 1$, the denominator is $0+0+4 = 4$`,
          latex: `f'(0) = \\dfrac{1}{4}`,
        },
        {
          label: `STEP 4 — Apply the tangent equation $T_{a}: y = f'(a)(x - a) + f(a)$ at $a = 0$, plugging in numbers`,
          latex: `T_{0}:\\ y = \\dfrac{1}{4}(x - 0) + 2\\ln 2 = \\dfrac{1}{4}x + 2\\ln 2`,
        },
        {
          label: `STEP 5 — Reject wrong options. Option B has the wrong sign for the constant; D has wrong slope (1/2 instead of 1/4); E ignores the slope (only the y-value)`,
          latex: `\\boxed{y = \\dfrac{1}{4}x + 2\\ln 2 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['tangent', 'logarithm', 'derivative'],
      relatedTips: ['product-derivative'],
      visualization: {
        type: 'function-plot',
        preset: 'tangent-log-2021-q12',
        title: 'f(x) = ln(x² + x + 4) and its tangent at P(0, 2 ln 2)',
        description: 'Toggle the tangent (purple dashed) — slope 1/4 passing through P. The curve hugs the tangent near x = 0.',
      },
    },

    // ── Q13 (Q73) ───────────────────────────────────────────
    {
      number: 13,
      exercise: 13,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = x\\,\\ln(x).`,
      question: `\\text{The image of the interval } ]0\\,;1] \\text{ by } f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `\\left[\\dfrac{-1}{e}\\,;0\\right]`, isCorrect: true },
        { id: 'B', latex: `\\left[\\dfrac{-1}{e}\\,;0\\right[`, isCorrect: false },
        { id: 'C', latex: `\\left[\\dfrac{-1}{e}\\,;e\\right]`, isCorrect: false },
        { id: 'D', latex: `\\left]0\\,;\\dfrac{1}{e}\\right]`, isCorrect: false },
        { id: 'E', latex: `\\left]0\\,;\\dfrac{1}{e}\\right[`, isCorrect: false },
      ],
      solution: [
        {
          label: `STEP 1 — Compute $f'$ using the product rule on $x \\cdot \\ln(x)$`,
          latex: `f'(x) = (x)' \\ln(x) + x\\,(\\ln x)' = \\ln(x) + x \\cdot \\dfrac{1}{x} = \\ln(x) + 1`,
        },
        {
          label: `STEP 2 — Find critical points: $f'(x) = 0 \\iff \\ln(x) = -1 \\iff x = e^{-1} = 1/e \\approx 0.368$. This $x$ is in $]0, 1]$`,
          latex: `f'(x) = 0 \\iff x = \\dfrac{1}{e}`,
        },
        {
          label: `STEP 3 — Sign analysis of $f'$. $\\ln(x) + 1 < 0 \\iff x < 1/e$, so $f$ is DECREASING on $]0, 1/e]$ and INCREASING on $[1/e, 1]$`,
          latex: `\\begin{array}{c|ccc} x & 0 & 1/e & 1 \\\\\\hline f'(x) & & - \\;\\; 0 \\;\\; + & \\\\\\hline f(x) & 0 & \\searrow \\; -1/e \\; \\nearrow & 0 \\end{array}`,
        },
        {
          label: `STEP 4 — Compute the extreme values. The minimum is at $x = 1/e$`,
          latex: `f(1/e) = \\dfrac{1}{e}\\cdot\\ln\\!\\left(\\dfrac{1}{e}\\right) = \\dfrac{1}{e}\\cdot(-1) = -\\dfrac{1}{e}`,
        },
        {
          label: `STEP 5 — Compute boundary values. At $x = 1$: $f(1) = 1 \\cdot 0 = 0$. At the OPEN boundary $x \\to 0^{+}$: classical limit $\\lim_{x\\to 0^{+}} x\\ln x = 0$`,
          latex: `\\lim_{x\\to 0^{+}} x\\ln(x) = 0 \\;\\text{(classical)} \\;,\\; f(1) = 0`,
        },
        {
          label: `STEP 6 — Read the image off the table. $f$ takes the minimum value $-1/e$ AT $x = 1/e \\in \\,]0, 1]$, and reaches $0$ at $x = 1$ (closed bound). Both bounds are ATTAINED — the image is a CLOSED interval`,
          latex: `\\boxed{f\\bigl(]0,1]\\bigr) = \\left[-\\dfrac{1}{e}\\,;\\, 0\\right] \\implies \\text{Answer: A}}`,
        },
        {
          label: `Why not option B ($[-1/e, 0[$)? Because $0$ IS attained at $x = 1$. Why not D or E (positive values)? Because $f \\leq 0$ everywhere on $]0, 1]$ since $\\ln(x) \\leq 0$ and $x > 0$`,
          latex: `\\text{All other options either miss the attained max or have wrong sign.}`,
        },
      ],
      difficulty: 'medium',
      tags: ['function-range', 'logarithm', 'extremum'],
      relatedTips: ['function-range'],
      visualization: {
        type: 'function-plot',
        preset: 'xlnx-2021-q13',
        title: 'f(x) = x·ln(x) on ]0, 1] — minimum at (1/e, −1/e)',
        description: 'The curve dips to its minimum at x = 1/e, then climbs back to 0 at x = 1. Both bounds of the image are attained.',
      },
    },

    // ── Q14 (Q74) ───────────────────────────────────────────
    {
      number: 14,
      exercise: 14,
      topic: 'Complex Transformations',
      statement: `\\text{The transformation defined by } z' = \\left(\\dfrac{1}{2} + i\\dfrac{\\sqrt 3}{2}\\right) z \\text{ is the rotation } r(\\Omega\\,;\\,\\theta).`,
      question: `\\Omega \\text{ and } \\theta \\text{ are:}`,
      choices: [
        { id: 'A', latex: `\\Omega(0\\,;1)\\,;\\ \\theta = \\dfrac{\\pi}{6}`, isCorrect: false },
        { id: 'B', latex: `\\Omega(1\\,;1)\\,;\\ \\theta = \\dfrac{\\pi}{3}`, isCorrect: false },
        { id: 'C', latex: `\\Omega(0\\,;0)\\,;\\ \\theta = \\dfrac{\\pi}{6}`, isCorrect: false },
        { id: 'D', latex: `\\Omega(1\\,;0)\\,;\\ \\theta = \\dfrac{\\pi}{6}`, isCorrect: false },
        { id: 'E', latex: `\\Omega(0\\,;0)\\,;\\ \\theta = \\dfrac{\\pi}{3}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Rewrite the coefficient in exponential form: modulus $|\\frac{1}{2} + i\\frac{\\sqrt 3}{2}| = 1$, argument $\\dfrac{\\pi}{3}$`,
          latex: `\\dfrac{1}{2} + i\\dfrac{\\sqrt 3}{2} = e^{i\\pi/3}`,
        },
        {
          label: `Identify the form: $z' = e^{i\\theta} z$ describes a rotation centered at the origin with angle $\\theta$`,
          latex: `z' = e^{i\\theta} z \\implies r\\bigl(O\\,;\\,\\theta\\bigr) \\;\\text{with}\\; \\theta = \\dfrac{\\pi}{3}`,
        },
        {
          label: `Therefore the center is the origin and the angle is $\\pi/3$`,
          latex: `\\boxed{\\Omega(0\\,;0)\\,;\\ \\theta = \\dfrac{\\pi}{3} \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['complex-numbers', 'rotation', 'transformation'],
      relatedTips: ['complex-arg'],
    },

    // ── Q15 (Q75) ───────────────────────────────────────────
    {
      number: 15,
      exercise: 15,
      topic: 'Sequences',
      statement: `(u_n) \\text{ is an arithmetic sequence with } u_0 = -2 \\text{ and } u_3 + u_4 + u_5 = 30.`,
      question: `\\text{The common difference } r \\text{ of } (u_n) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `r = 0`, isCorrect: false },
        { id: 'B', latex: `r = -2`, isCorrect: false },
        { id: 'C', latex: `r = 3`, isCorrect: true },
        { id: 'D', latex: `r = -3`, isCorrect: false },
        { id: 'E', latex: `r = 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Express each term explicitly: $u_n = u_0 + n r = -2 + n r$`,
          latex: `u_3 = -2+3r \\;,\\; u_4 = -2+4r \\;,\\; u_5 = -2+5r`,
        },
        {
          label: `Sum and equate to 30`,
          latex: `u_3 + u_4 + u_5 = -6 + 12r = 30`,
        },
        {
          label: `Solve for $r$`,
          latex: `\\boxed{r = 3 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['sequences', 'arithmetic'],
      relatedTips: ['suite-type'],
    },

    // ── Q16 (Q76) ───────────────────────────────────────────
    {
      number: 16,
      exercise: 16,
      topic: 'Logarithmic Equations',
      statement: `\\text{Consider the equation } (III):\\ \\ln(x-1) + \\ln(x-3) = \\ln(3).`,
      question: `\\text{The solution set of } (III) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `S = \\{0\\,;4\\}`, isCorrect: false },
        { id: 'B', latex: `S = \\{-1\\,;5\\}`, isCorrect: false },
        { id: 'C', latex: `S = \\{4\\}`, isCorrect: true },
        { id: 'D', latex: `S = \\emptyset`, isCorrect: false },
        { id: 'E', latex: `S = \\{1\\,;3\\}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: need both $x-1 > 0$ AND $x-3 > 0$, giving $x > 3$`,
          latex: `D = \\,]3\\,;+\\infty[`,
        },
        {
          label: `Combine the logs: $\\ln(x-1) + \\ln(x-3) = \\ln\\bigl((x-1)(x-3)\\bigr)$, then equate arguments`,
          latex: `(x-1)(x-3) = 3 \\iff x^2 - 4x + 3 = 3 \\iff x^2 - 4x = 0`,
        },
        {
          label: `Factor: $x(x-4) = 0$, so $x = 0$ or $x = 4$. Apply the domain $x > 3$ to discard $x=0$`,
          latex: `\\boxed{S = \\{4\\} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['logarithm', 'equation', 'domain'],
      relatedTips: ['log-domain'],
    },

    // ── Q17 (Q77) ───────────────────────────────────────────
    {
      number: 17,
      exercise: 17,
      topic: 'Complex Numbers',
      statement: `\\text{Let } j = -\\dfrac{1}{2} + i\\dfrac{\\sqrt 3}{2}.`,
      question: `\\text{The sum } S = 1 + j + j^2 + j^3 + \\cdots + j^{11} \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `1`, isCorrect: false },
        { id: 'B', latex: `0`, isCorrect: true },
        { id: 'C', latex: `i`, isCorrect: false },
        { id: 'D', latex: `i\\sqrt 3`, isCorrect: false },
        { id: 'E', latex: `10\\,i`, isCorrect: false },
      ],
      solution: [
        {
          label: `STEP 1 — Identify $j$ in exponential form. $j = -1/2 + i\\sqrt{3}/2$ has $|j|^{2} = 1/4 + 3/4 = 1$ and argument $2\\pi/3$ (Q2)`,
          latex: `j = e^{i\\,2\\pi/3} \\;,\\; |j| = 1 \\;,\\; \\arg(j) = \\dfrac{2\\pi}{3}`,
        },
        {
          label: `STEP 2 — Show $j$ is a primitive cube root of unity. Cube it: argument multiplies by 3, giving $2\\pi \\equiv 0$, so $j^{3} = e^{i\\,2\\pi} = 1$`,
          latex: `j^{3} = e^{i\\,2\\pi} = 1`,
        },
        {
          label: `STEP 3 — Method 1 (geometric sum). $S$ has 12 terms, ratio $j \\neq 1$, first term $1$. Apply $\\sum_{k=0}^{n} q^{k} = (q^{n+1}-1)/(q-1)$`,
          latex: `S = \\sum_{k=0}^{11} j^{k} = \\dfrac{j^{12} - 1}{j - 1}`,
        },
        {
          label: `STEP 4 — Use $j^{3} = 1$ to simplify $j^{12}$`,
          latex: `j^{12} = (j^{3})^{4} = 1^{4} = 1 \\implies S = \\dfrac{1 - 1}{j - 1} = \\dfrac{0}{j-1} = 0`,
        },
        {
          label: `STEP 5 — Method 2 (grouping). The 12 terms split into 4 groups of 3, each summing to $1 + j + j^{2} = 0$ (well-known property of cube roots of unity)`,
          latex: `S = \\underbrace{(1 + j + j^{2})}_{= 0} + \\underbrace{(j^{3} + j^{4} + j^{5})}_{= 0} + \\underbrace{(j^{6} + j^{7} + j^{8})}_{= 0} + \\underbrace{(j^{9} + j^{10} + j^{11})}_{= 0} = 0`,
        },
        {
          label: `STEP 6 — Geometric interpretation. The 12 powers $j^{0}, j^{1}, \\ldots, j^{11}$ visit only 3 distinct points (since $j^{3} = 1$): $1$, $j$, $j^{2}$, each appearing 4 times. Sum = $4(1 + j + j^{2}) = 0$`,
          latex: `\\boxed{S = 4 \\cdot (1 + j + j^{2}) = 0 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'roots-of-unity', 'geometric-sum'],
      relatedTips: ['complex-arg', 'geometric-sum'],
      visualization: {
        type: 'roots-of-unity',
        n: 3,
        highlight: [0, 1, 2],
        highlightLabels: ['1', 'j', 'j²'],
        title: 'The 3 cube roots of unity — sum is zero',
        description: 'Since j³ = 1, the 12 powers cycle through these 3 points. Their sum is 0 (centroid of an equilateral triangle at origin).',
      },
    },

    // ── Q18 (Q78) ───────────────────────────────────────────
    {
      number: 18,
      exercise: 18,
      topic: 'Sequences',
      statement: `u_{n+1} = \\dfrac{2u_n + 9}{u_n + 2} \\;,\\; u_0 = 5.\\\\ \\text{Define } w_n = \\dfrac{u_n - 3}{u_n + 3} \\text{ for every } n \\in \\mathbb{N}.`,
      question: `(w_n) \\text{ is a geometric sequence with common ratio:}`,
      choices: [
        { id: 'A', latex: `q = -\\dfrac{1}{5}`, isCorrect: true },
        { id: 'B', latex: `q = 2`, isCorrect: false },
        { id: 'C', latex: `q = \\dfrac{1}{5}`, isCorrect: false },
        { id: 'D', latex: `q = \\dfrac{9}{2}`, isCorrect: false },
        { id: 'E', latex: `q = -2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $u_{n+1} - 3$ and $u_{n+1} + 3$ using the recurrence`,
          latex: `u_{n+1} - 3 = \\dfrac{2u_n + 9 - 3(u_n+2)}{u_n+2} = \\dfrac{-u_n + 3}{u_n+2}`,
        },
        {
          label: `Similarly for $u_{n+1} + 3$`,
          latex: `u_{n+1} + 3 = \\dfrac{2u_n + 9 + 3(u_n+2)}{u_n+2} = \\dfrac{5u_n + 15}{u_n+2} = \\dfrac{5(u_n+3)}{u_n+2}`,
        },
        {
          label: `Take the ratio and simplify`,
          latex: `w_{n+1} = \\dfrac{u_{n+1}-3}{u_{n+1}+3} = \\dfrac{-(u_n-3)}{5(u_n+3)} = -\\dfrac{1}{5}\\,w_n`,
        },
        {
          label: `Identify the geometric ratio`,
          latex: `\\boxed{q = -\\dfrac{1}{5} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['sequences', 'geometric', 'recurrence'],
      relatedTips: ['suite-type'],
    },

    // ── Q19 (Q79) ───────────────────────────────────────────
    {
      number: 19,
      exercise: 19,
      topic: 'Antiderivatives',
      statement: `\\text{Let } f(x) = \\dfrac{3(e^x - e^{-x})}{(e^x + e^{-x})^4}.`,
      question: `\\text{An antiderivative } F \\text{ of } f \\text{ on } \\mathbb{R} \\text{ is:}`,
      choices: [
        { id: 'A', latex: `F(x) = \\dfrac{-1}{(e^x + e^{-x})^3}`, isCorrect: true },
        { id: 'B', latex: `F(x) = (e^x + e^{-x})^3`, isCorrect: false },
        { id: 'C', latex: `F(x) = \\dfrac{3}{(e^x + e^{-x})^3}`, isCorrect: false },
        { id: 'D', latex: `F(x) = \\dfrac{-1}{(e^x - e^{-x})^3}`, isCorrect: false },
        { id: 'E', latex: `F(x) = 3\\ln(e^x + e^{-x})`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify $u(x) = e^x + e^{-x}$, then $u'(x) = e^x - e^{-x}$ — exactly what appears in the numerator`,
          latex: `u(x) = e^x + e^{-x} \\;,\\quad u'(x) = e^x - e^{-x}`,
        },
        {
          label: `Rewrite $f$ in the form $\\dfrac{u'}{u^4} = u'\\,u^{-4}$. The antiderivative of $u'\\,u^{-4}$ is $\\dfrac{u^{-3}}{-3}$`,
          latex: `f(x) = 3\\,\\dfrac{u'(x)}{u(x)^4} \\;\\implies\\; F(x) = 3 \\cdot \\dfrac{u(x)^{-3}}{-3} = -\\dfrac{1}{u(x)^3}`,
        },
        {
          label: `Substitute back $u = e^x + e^{-x}$`,
          latex: `\\boxed{F(x) = \\dfrac{-1}{(e^x + e^{-x})^3} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['antiderivative', 'exponential', 'composition'],
      relatedTips: ['integration-tan'],
    },

    // ── Q20 (Q80) ───────────────────────────────────────────
    {
      number: 20,
      exercise: 20,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = 1 - x\\,e^{-x}.`,
      question: `\\text{The minimum value of } f \\text{ on } \\mathbb{R} \\text{ is:}`,
      choices: [
        { id: 'A', latex: `0`, isCorrect: false },
        { id: 'B', latex: `1 - e`, isCorrect: false },
        { id: 'C', latex: `1 + e`, isCorrect: false },
        { id: 'D', latex: `1 + e^{-1}`, isCorrect: false },
        { id: 'E', latex: `1 - e^{-1}`, isCorrect: true },
      ],
      solution: [
        {
          label: `STEP 1 — Compute $f'$ using product rule on $x \\cdot e^{-x}$. Recall $(e^{-x})' = -e^{-x}$`,
          latex: `f'(x) = 0 - \\bigl[\\,(x)' e^{-x} + x \\cdot (e^{-x})'\\,\\bigr] = -\\bigl[e^{-x} - x e^{-x}\\bigr] = -e^{-x}(1 - x) = (x - 1)\\,e^{-x}`,
        },
        {
          label: `STEP 2 — Find critical points: $f'(x) = 0$. Since $e^{-x} > 0$ always, only the linear factor matters`,
          latex: `f'(x) = 0 \\iff x - 1 = 0 \\iff x = 1`,
        },
        {
          label: `STEP 3 — Sign analysis. $e^{-x} > 0$ everywhere, so $f'(x)$ has the sign of $(x - 1)$`,
          latex: `\\begin{array}{c|ccccc} x & -\\infty & & 1 & & +\\infty \\\\\\hline f'(x) & & - & 0 & + & \\\\\\hline f(x) & +\\infty & \\searrow & 1 - 1/e & \\nearrow & 1 \\end{array}`,
        },
        {
          label: `STEP 4 — Identify minimum. $f'$ changes sign $-\\to+$ at $x = 1$, so this is a global MINIMUM (the unique critical point on $\\mathbb{R}$)`,
          latex: `f'\\text{ changes } - \\to + \\text{ at } x=1 \\implies x = 1 \\text{ is global min}`,
        },
        {
          label: `STEP 5 — Evaluate the minimum value`,
          latex: `f(1) = 1 - 1 \\cdot e^{-1} = 1 - \\dfrac{1}{e}`,
        },
        {
          label: `STEP 6 — Verify boundary behavior. As $x \\to +\\infty$: $x e^{-x} \\to 0$ (exponential beats polynomial), so $f(x) \\to 1$. As $x \\to -\\infty$: $x e^{-x} = x \\cdot e^{|x|} \\to -\\infty$, so $f(x) \\to +\\infty$. Min value is achieved at $x=1$, NOT at boundaries`,
          latex: `\\lim_{x\\to+\\infty} f = 1 \\;,\\; \\lim_{x\\to-\\infty} f = +\\infty \\;,\\; f(1) = 1 - 1/e \\approx 0.632`,
        },
        {
          label: `Reject wrong options: A ($0$) — never reached; B ($1-e \\approx -1.7$) — too small; C ($1+e$) and D ($1+1/e$) — bigger than $1$, but $f \\leq 1$ for $x \\geq 0$`,
          latex: `\\boxed{\\min_{\\mathbb{R}} f = 1 - e^{-1} \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['function-analysis', 'derivative', 'minimum', 'exponential'],
      relatedTips: ['function-range'],
      visualization: {
        type: 'function-plot',
        preset: 'minimum-2021-q20',
        title: 'f(x) = 1 − x·e⁻ˣ — global minimum at x = 1',
        description: 'The curve dips at x = 1 to its minimum 1 − 1/e ≈ 0.632, then rises asymptotically to y = 1.',
      },
    },
  ],
}
