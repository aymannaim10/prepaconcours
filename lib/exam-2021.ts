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
          label: `Compute the limit of $\\dfrac{x^4}{x^4+1}$ as $x \\to +\\infty$ — divide by $x^4$`,
          latex: `\\lim_{x\\to+\\infty} \\dfrac{x^4}{x^4+1} = \\lim_{x\\to+\\infty} \\dfrac{1}{1 + 1/x^4} = 1`,
        },
        {
          label: `Therefore $f(x) = 2x + 1 - 1 + \\bigl(\\,1 - \\tfrac{x^4}{x^4+1}\\,\\bigr) = 2x + \\dfrac{1}{x^4+1}$`,
          latex: `f(x) - 2x = 1 - \\dfrac{x^4}{x^4+1} = \\dfrac{1}{x^4+1}`,
        },
        {
          label: `Check: $\\lim_{x\\to+\\infty}[\\,f(x) - 2x\\,] = 0$. So the oblique asymptote is $y = 2x$`,
          latex: `\\boxed{y = 2x \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['asymptote', 'oblique', 'limits'],
      relatedTips: ['asymptotes'],
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
        { id: 'C', latex: `z_2 z_1 = 1`, isCorrect: false },
        { id: 'D', latex: `z_1 \\times z_2 = 0`, isCorrect: false },
        { id: 'E', latex: `z_2 = -z_1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Solve with the discriminant $\\Delta = 1 - 4 = -3$, giving $z_{1,2} = \\dfrac{-1 \\pm i\\sqrt{3}}{2}$`,
          latex: `z_1 = \\dfrac{-1+i\\sqrt 3}{2} \\;,\\quad z_2 = \\dfrac{-1-i\\sqrt 3}{2}`,
        },
        {
          label: `Notice that $z_2 = \\bar z_1$. Compute $|z_1|^2 = \\frac{1}{4} + \\frac{3}{4} = 1$, so $|z_1| = 1$`,
          latex: `|z_1| = 1 \\implies z_1 \\bar z_1 = 1 \\implies \\bar z_1 = \\dfrac{1}{z_1}`,
        },
        {
          label: `Combine: $z_2 = \\bar z_1 = 1/z_1$. Equivalently, this matches Vieta's $z_1 z_2 = 1$ from $z_1 z_2 = c/a = 1$`,
          latex: `\\boxed{z_2 = \\dfrac{1}{z_1} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'quadratic', 'roots-of-unity'],
      relatedTips: ['complex-arg'],
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
          label: `Define $g(x) = x^3 + \\ln(x)$ on $]0,+\\infty[$. Then $g'(x) = 3x^2 + \\tfrac{1}{x} > 0$ — strictly increasing`,
          latex: `g'(x) = 3x^2 + \\dfrac{1}{x} > 0 \\;,\\; \\forall x > 0`,
        },
        {
          label: `Check signs at strategic points: $g(1) = 1 + 0 = 1 > 0$ and $g(1/e) = 1/e^3 - 1 < 0$`,
          latex: `g(1) = 1 > 0 \\;,\\quad g\\!\\left(\\dfrac{1}{e}\\right) = \\dfrac{1}{e^3} - 1 < 0`,
        },
        {
          label: `By the Intermediate Value Theorem, $\\alpha \\in \\,]1/e\\,;1[ \\subset \\,]0\\,;1[$`,
          latex: `\\boxed{0 < \\alpha < 1 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['IVT', 'logarithm', 'monotonicity'],
      relatedTips: ['function-range'],
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
          label: `Verify the point: $f(0) = \\ln(0+0+4) = \\ln 4 = 2\\ln 2$ ✓`,
          latex: `f(0) = \\ln(4) = 2\\ln 2`,
        },
        {
          label: `Compute the derivative using the chain rule on $\\ln(u(x))$`,
          latex: `f'(x) = \\dfrac{2x+1}{x^2+x+4}`,
        },
        {
          label: `Evaluate the slope at $x=0$`,
          latex: `f'(0) = \\dfrac{1}{4}`,
        },
        {
          label: `Apply the tangent equation $y - f(x_0) = f'(x_0)(x - x_0)$ at $(0, 2\\ln 2)$`,
          latex: `\\boxed{y = \\dfrac{1}{4}x + 2\\ln 2 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['tangent', 'logarithm', 'derivative'],
      relatedTips: ['product-derivative'],
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
          label: `Compute $f'(x) = \\ln(x) + 1$. Set $f'(x) = 0 \\iff \\ln(x) = -1 \\iff x = 1/e$`,
          latex: `f'(x) = \\ln(x) + 1 \\;,\\quad f'(1/e) = 0`,
        },
        {
          label: `On $]0\\,;1/e]$: $f' < 0$ (decreasing). On $[1/e\\,;1]$: $f' > 0$ (increasing). Minimum at $x=1/e$`,
          latex: `f(1/e) = \\dfrac{1}{e}\\cdot(-1) = -\\dfrac{1}{e}`,
        },
        {
          label: `Boundary values: $\\lim_{x\\to 0^+} x\\ln(x) = 0$ and $f(1) = 0$. So $f$ ranges between min $-1/e$ and 0 (attained at $x=1$)`,
          latex: `\\boxed{f\\bigl(]0\\,;1]\\bigr) = \\left[-\\dfrac{1}{e}\\,;0\\right] \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['function-range', 'logarithm', 'extremum'],
      relatedTips: ['function-range'],
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
          label: `Recognize $j$ as a primitive cube root of unity: $j = e^{i\\,2\\pi/3}$ and $j^3 = 1$`,
          latex: `|j| = 1 \\;,\\; \\arg(j) = \\dfrac{2\\pi}{3} \\;\\implies\\; j^3 = e^{i\\,2\\pi} = 1`,
        },
        {
          label: `Use the geometric sum formula with ratio $j \\neq 1$`,
          latex: `S = \\dfrac{j^{12} - 1}{j - 1} = \\dfrac{(j^3)^4 - 1}{j-1} = \\dfrac{1-1}{j-1} = 0`,
        },
        {
          label: `(Equivalent shortcut: group three by three, using $1+j+j^2=0$)`,
          latex: `\\boxed{S = 0 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'roots-of-unity', 'geometric-sum'],
      relatedTips: ['complex-arg', 'geometric-sum'],
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
          label: `Differentiate $f$ using the product rule on $x\\,e^{-x}$`,
          latex: `f'(x) = -\\bigl(\\,e^{-x} + x\\cdot(-e^{-x})\\,\\bigr) = -e^{-x}(1 - x) = (x-1)\\,e^{-x}`,
        },
        {
          label: `Sign of $f'$: since $e^{-x} > 0$ always, $f'(x)$ has the sign of $x-1$. So $f' < 0$ for $x<1$ and $f' > 0$ for $x>1$ — minimum at $x = 1$`,
          latex: `f'(x) < 0 \\text{ on } ]-\\infty,1[ \\;,\\; f'(x) > 0 \\text{ on } ]1,+\\infty[`,
        },
        {
          label: `Evaluate $f(1)$`,
          latex: `f(1) = 1 - 1\\cdot e^{-1} = 1 - \\dfrac{1}{e}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\min_{\\mathbb{R}} f = 1 - e^{-1} \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['function-analysis', 'derivative', 'minimum', 'exponential'],
      relatedTips: ['function-range'],
    },
  ],
}
