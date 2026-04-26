// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2020
// Mathematics Paper — Academic Year 2020-2021 (taken summer 2020)
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2020_REAL: ExamData = {
  year: 2020,
  date: 'Summer 2020 — Academic Year 2020-2021',
  duration: 60,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam for Faculties of General Medicine, Dental Medicine, Pharmacy — Academic Year 2020-2021`,
  instructions: `The mathematics paper contains 20 multiple-choice questions (Q61 through Q80), each offering 5 options (A through E) with a single correct answer. Indicate on the answer sheet the letter corresponding to your choice. The use of calculators is strictly forbidden.`,
  questions: [
    // ── Q1 (Q61) ────────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = \\ln(9 - x^{2}).`,
      question: `\\text{The domain of definition } D_f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]-3\\,;3[`, isCorrect: true },
        { id: 'B', latex: `[-3\\,;3]`, isCorrect: false },
        { id: 'C', latex: `[0\\,;3[`, isCorrect: false },
        { id: 'D', latex: `]0\\,;3[`, isCorrect: false },
        { id: 'E', latex: `]0\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `For $\\ln(9-x^{2})$ to be defined we need the argument to be strictly positive`,
          latex: `9 - x^{2} > 0 \\iff x^{2} < 9 \\iff -3 < x < 3`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{D_f = \\,]-3\\,;3[ \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['domain', 'logarithm', 'quadratic'],
      relatedTips: ['log-domain'],
    },

    // ── Q2 (Q62) ────────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Asymptotes',
      statement: `\\text{Let } f(x) = \\dfrac{2e^{x} - 3}{e^{x} + 3}.`,
      question: `\\text{The curve of } f \\text{ admits at } -\\infty \\text{ an asymptote of equation:}`,
      choices: [
        { id: 'A', latex: `y = 2`, isCorrect: false },
        { id: 'B', latex: `y = 2x+3`, isCorrect: false },
        { id: 'C', latex: `y = 2x`, isCorrect: false },
        { id: 'D', latex: `y = -1`, isCorrect: true },
        { id: 'E', latex: `y = 2x-3`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute the limit at $-\\infty$. Recall $\\lim_{x\\to-\\infty} e^{x} = 0$`,
          latex: `\\lim_{x\\to-\\infty} \\dfrac{2e^{x} - 3}{e^{x} + 3} = \\dfrac{0 - 3}{0 + 3} = -1`,
        },
        {
          label: `A finite limit at $-\\infty$ means a horizontal asymptote`,
          latex: `\\boxed{y = -1 \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['asymptote', 'horizontal', 'exponential', 'limits'],
      relatedTips: ['asymptotes'],
    },

    // ── Q3 (Q63) ────────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Logarithmic Equations',
      statement: `\\text{Consider the equation } (E_{1}):\\ \\ln(x-3) + \\ln(x-2) = \\ln(2).`,
      question: `\\text{The solution set of } (E_{1}) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `S = \\emptyset`, isCorrect: false },
        { id: 'B', latex: `S = \\{1\\}`, isCorrect: false },
        { id: 'C', latex: `S = \\{4\\}`, isCorrect: true },
        { id: 'D', latex: `S = \\{1\\,;4\\}`, isCorrect: false },
        { id: 'E', latex: `S = \\{2\\,;3\\}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: both $x-3 > 0$ and $x-2 > 0$, giving $x > 3$`,
          latex: `D = \\,]3\\,;+\\infty[`,
        },
        {
          label: `Combine the logs and equate arguments: $\\ln(a) + \\ln(b) = \\ln(ab)$`,
          latex: `(x-3)(x-2) = 2 \\iff x^{2} - 5x + 6 = 2 \\iff x^{2} - 5x + 4 = 0`,
        },
        {
          label: `Factor: $(x-1)(x-4) = 0 \\iff x = 1 \\text{ or } x = 4$. Apply the domain $x > 3$`,
          latex: `\\boxed{S = \\{4\\} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['logarithm', 'equation', 'domain'],
      relatedTips: ['log-domain'],
    },

    // ── Q4 (Q64) ────────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Limits',
      statement: `\\text{Consider the sequence } u_n = \\dfrac{3^{n} + 1}{2^{n} - 1}.`,
      question: `\\lim_{n\\to+\\infty} u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `3`, isCorrect: false },
        { id: 'B', latex: `2`, isCorrect: false },
        { id: 'C', latex: `1`, isCorrect: false },
        { id: 'D', latex: `-1`, isCorrect: false },
        { id: 'E', latex: `+\\infty`, isCorrect: true },
      ],
      solution: [
        {
          label: `Identify the dominant term in each: numerator $\\sim 3^{n}$, denominator $\\sim 2^{n}$`,
          latex: `u_n = \\dfrac{3^{n}\\bigl(1 + 3^{-n}\\bigr)}{2^{n}\\bigl(1 - 2^{-n}\\bigr)} = \\left(\\dfrac{3}{2}\\right)^{n} \\cdot \\dfrac{1 + 3^{-n}}{1 - 2^{-n}}`,
        },
        {
          label: `As $n\\to+\\infty$, the second factor tends to $1$, while $(3/2)^{n} \\to +\\infty$ since $3/2 > 1$`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} u_n = +\\infty \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['limits', 'sequences', 'geometric'],
      relatedTips: ['geometric-sum'],
    },

    // ── Q5 (Q65) ────────────────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Integrals',
      statement: `\\text{Let } K = \\displaystyle\\int_{-1}^{1} \\dfrac{x}{1+x^{2}}\\,dx.`,
      question: `\\text{The integral } K \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `1`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{1}{16}`, isCorrect: false },
        { id: 'C', latex: `\\ln(2)`, isCorrect: false },
        { id: 'D', latex: `0`, isCorrect: true },
        { id: 'E', latex: `-\\ln(2)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Check the parity of the integrand. Let $\\varphi(x) = \\dfrac{x}{1+x^{2}}$, then $\\varphi(-x) = -\\varphi(x)$ — ODD function`,
          latex: `\\varphi(-x) = \\dfrac{-x}{1+(-x)^{2}} = -\\dfrac{x}{1+x^{2}} = -\\varphi(x)`,
        },
        {
          label: `Integral of an odd function over a symmetric interval $[-a,a]$ is zero`,
          latex: `\\boxed{K = \\int_{-1}^{1} \\varphi(x)\\,dx = 0 \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['integral', 'odd-function', 'symmetry'],
      relatedTips: ['integration-tan'],
    },

    // ── Q6 (Q66) ────────────────────────────────────────────
    {
      number: 6,
      exercise: 6,
      topic: 'Complex Numbers',
      statement: `\\text{Consider the equation } (II):\\ |iz - 1| = |1 - i\\sqrt{3}|. \\text{ The set of points } M(z) \\text{ verifying } (II) \\text{ is the circle of center } \\Omega \\text{ and radius } R.`,
      question: `\\Omega \\text{ and } R \\text{ are:}`,
      choices: [
        { id: 'A', latex: `\\Omega(i) \\;,\\; R = 2`, isCorrect: false },
        { id: 'B', latex: `\\Omega(-i) \\;,\\; R = 2`, isCorrect: true },
        { id: 'C', latex: `\\Omega(-i) \\;,\\; R = 4`, isCorrect: false },
        { id: 'D', latex: `\\Omega(1+i) \\;,\\; R = 2`, isCorrect: false },
        { id: 'E', latex: `\\Omega(1-i) \\;,\\; R = 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute the right-hand side: $|1 - i\\sqrt{3}| = \\sqrt{1 + 3} = 2$`,
          latex: `|1 - i\\sqrt{3}| = 2`,
        },
        {
          label: `Factor $i$ out of the left side: $iz - 1 = i\\bigl(z - \\tfrac{1}{i}\\bigr) = i(z + i)$ since $\\tfrac{1}{i} = -i$`,
          latex: `iz - 1 = i(z + i) \\implies |iz - 1| = |i|\\cdot|z + i| = |z - (-i)|`,
        },
        {
          label: `So the equation becomes $|z - (-i)| = 2$ — a circle centered at $-i$ with radius $2$`,
          latex: `\\boxed{\\Omega(-i) \\;,\\; R = 2 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'circle', 'modulus'],
      relatedTips: ['locus-complex'],
    },

    // ── Q7 (Q67) ────────────────────────────────────────────
    {
      number: 7,
      exercise: 7,
      topic: 'Function Analysis',
      statement: `\\text{Let } g(x) = \\ln(x) + \\dfrac{1}{2}x^{2}.`,
      question: `\\text{The curve of } g \\text{ admits an inflection point with coordinates:}`,
      choices: [
        { id: 'A', latex: `\\bigl(1\\,;\\tfrac{1}{2}\\bigr)`, isCorrect: true },
        { id: 'B', latex: `(1\\,;2)`, isCorrect: false },
        { id: 'C', latex: `(0\\,;0)`, isCorrect: false },
        { id: 'D', latex: `(1\\,;0)`, isCorrect: false },
        { id: 'E', latex: `\\bigl(-1\\,;\\tfrac{1}{2}\\bigr)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute the first two derivatives. Domain: $x>0$`,
          latex: `g'(x) = \\dfrac{1}{x} + x \\;,\\quad g''(x) = -\\dfrac{1}{x^{2}} + 1 = \\dfrac{x^{2}-1}{x^{2}}`,
        },
        {
          label: `Inflection point requires a sign change in $g''$. Solve $g''(x) = 0 \\iff x^{2} = 1 \\iff x = 1$ (since $x>0$)`,
          latex: `g''(x) = 0 \\iff x = 1`,
        },
        {
          label: `Verify the sign change: $g'' < 0$ for $0<x<1$, $g'' > 0$ for $x>1$ — change confirmed`,
          latex: `\\text{sign change at } x=1 \\implies \\text{inflection point}`,
        },
        {
          label: `Compute the y-coordinate $g(1) = \\ln(1) + \\tfrac{1}{2}(1)^{2} = 0 + \\tfrac{1}{2} = \\tfrac{1}{2}$`,
          latex: `\\boxed{(1\\,;\\tfrac{1}{2}) \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['inflection-point', 'second-derivative', 'logarithm'],
      relatedTips: ['convexity-no-inflection'],
    },

    // ── Q8 (Q68) ────────────────────────────────────────────
    {
      number: 8,
      exercise: 8,
      topic: 'Equations',
      statement: `\\text{The equation } x + e^{x} = 0 \\text{ admits a unique solution } \\alpha.`,
      question: `\\alpha \\text{ verifies:}`,
      choices: [
        { id: 'A', latex: `1 < \\alpha < 2`, isCorrect: false },
        { id: 'B', latex: `0 < \\alpha < 1`, isCorrect: false },
        { id: 'C', latex: `2 < \\alpha < 3`, isCorrect: false },
        { id: 'D', latex: `-2 < \\alpha < -1`, isCorrect: false },
        { id: 'E', latex: `-1 < \\alpha < 0`, isCorrect: true },
      ],
      solution: [
        {
          label: `Define $f(x) = x + e^{x}$. Show it is strictly increasing on $\\mathbb{R}$`,
          latex: `f'(x) = 1 + e^{x} > 0 \\;\\forall x \\in \\mathbb{R}`,
        },
        {
          label: `Test signs at strategic points: $f(0) = 0 + 1 = 1 > 0$ and $f(-1) = -1 + e^{-1} \\approx -0.63 < 0$`,
          latex: `f(-1) < 0 \\;,\\quad f(0) > 0`,
        },
        {
          label: `By the Intermediate Value Theorem applied to a strictly monotonic continuous function, $\\alpha \\in \\,]-1\\,;0[$`,
          latex: `\\boxed{-1 < \\alpha < 0 \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['IVT', 'exponential', 'monotonicity'],
      relatedTips: ['function-range'],
    },

    // ── Q9 (Q69) ────────────────────────────────────────────
    {
      number: 9,
      exercise: 9,
      topic: 'Complex Numbers',
      statement: `\\text{Let } Z = \\dfrac{(2+2i)^{5}}{(\\sqrt{3}+i)^{4}}.`,
      question: `\\text{An argument of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `-\\dfrac{\\pi}{12}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{7\\pi}{6}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{7\\pi}{12}`, isCorrect: true },
        { id: 'D', latex: `-\\dfrac{\\pi}{6}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{5\\pi}{4}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Convert each base to exponential form. $|2+2i| = 2\\sqrt{2}$, $\\arg(2+2i) = \\pi/4$`,
          latex: `2+2i = 2\\sqrt{2}\\,e^{i\\pi/4} \\implies (2+2i)^{5} \\text{ has argument } 5\\cdot\\dfrac{\\pi}{4} = \\dfrac{5\\pi}{4}`,
        },
        {
          label: `Similarly $\\sqrt{3} + i = 2\\,e^{i\\pi/6}$`,
          latex: `(\\sqrt{3}+i)^{4} \\text{ has argument } 4\\cdot\\dfrac{\\pi}{6} = \\dfrac{2\\pi}{3}`,
        },
        {
          label: `Subtract for the quotient`,
          latex: `\\arg(Z) = \\dfrac{5\\pi}{4} - \\dfrac{2\\pi}{3} = \\dfrac{15\\pi - 8\\pi}{12} = \\dfrac{7\\pi}{12}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\arg(Z) \\equiv \\dfrac{7\\pi}{12} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'argument', 'exponential-form'],
      relatedTips: ['complex-arg'],
    },

    // ── Q10 (Q70) ───────────────────────────────────────────
    {
      number: 10,
      exercise: 10,
      topic: 'Derivatives',
      statement: `\\text{Let } f(x) = \\dfrac{x\\,e^{x}}{x+1}.`,
      question: `f'(x) \\text{ is defined by:}`,
      choices: [
        { id: 'A', latex: `f'(x) = \\dfrac{(x^{2}-x+1)e^{x}}{(x+1)^{2}}`, isCorrect: false },
        { id: 'B', latex: `f'(x) = \\dfrac{(x^{2}+x+1)e^{x}}{(x+1)^{2}}`, isCorrect: false },
        { id: 'C', latex: `f'(x) = \\dfrac{(x^{2}+x+1)e^{x}}{(x+1)^{2}}`, isCorrect: true },
        { id: 'D', latex: `f'(x) = \\dfrac{x e^{x}}{(x+1)^{2}}`, isCorrect: false },
        { id: 'E', latex: `f'(x) = \\dfrac{(x^{2}+2x+1)e^{x}}{(x+1)^{2}}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply the quotient rule with $u(x) = x e^{x}$ and $v(x) = x + 1$. Compute $u'(x) = e^{x} + x e^{x} = (1+x)e^{x}$ (product rule)`,
          latex: `u'(x) = (1+x)e^{x} \\;,\\quad v'(x) = 1`,
        },
        {
          label: `Substitute into the quotient formula and simplify the numerator`,
          latex: `f'(x) = \\dfrac{(1+x)e^{x}(x+1) - x e^{x}}{(x+1)^{2}} = \\dfrac{e^{x}\\bigl[(x+1)^{2} - x\\bigr]}{(x+1)^{2}}`,
        },
        {
          label: `Expand $(x+1)^{2} - x = x^{2} + 2x + 1 - x = x^{2} + x + 1$`,
          latex: `\\boxed{f'(x) = \\dfrac{(x^{2}+x+1)e^{x}}{(x+1)^{2}} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['derivative', 'quotient-rule', 'product-rule', 'exponential'],
      relatedTips: ['product-derivative'],
    },

    // ── Q11 (Q71) ───────────────────────────────────────────
    {
      number: 11,
      exercise: 11,
      topic: 'Sequences',
      statement: `(u_n) \\text{ is an arithmetic sequence with } u_{2} = 1 \\text{ and } u_{6} = -7.`,
      question: `\\text{For all } n \\in \\mathbb{N}, u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `u_n = 2 - 5n`, isCorrect: false },
        { id: 'B', latex: `u_n = 3n - 5`, isCorrect: false },
        { id: 'C', latex: `u_n = 1 - 2n`, isCorrect: false },
        { id: 'D', latex: `u_n = 5 - 2n`, isCorrect: true },
        { id: 'E', latex: `u_n = 5 + 2n`, isCorrect: false },
      ],
      solution: [
        {
          label: `Use the relation $u_n = u_p + (n-p)r$ to find the common difference $r$ from $u_2$ and $u_6$`,
          latex: `u_{6} - u_{2} = (6-2)r \\iff -7 - 1 = 4r \\iff r = -2`,
        },
        {
          label: `Find $u_0$ using $u_2 = u_0 + 2r$`,
          latex: `1 = u_0 + 2(-2) \\iff u_0 = 5`,
        },
        {
          label: `Write the explicit formula $u_n = u_0 + n r$`,
          latex: `\\boxed{u_n = 5 - 2n \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['sequences', 'arithmetic', 'closed-form'],
      relatedTips: ['suite-type'],
    },

    // ── Q12 (Q72) ───────────────────────────────────────────
    {
      number: 12,
      exercise: 12,
      topic: 'Complex Numbers',
      statement: `\\text{Let } Z = (1-i)^{9}.`,
      question: `\\text{The algebraic form of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `Z = (\\sqrt{2})^{9}`, isCorrect: false },
        { id: 'B', latex: `Z = (\\sqrt{2})^{9}(1-i)`, isCorrect: false },
        { id: 'C', latex: `Z = (\\sqrt{2})^{9}(1+i)`, isCorrect: false },
        { id: 'D', latex: `Z = 2^{4}\\,i`, isCorrect: false },
        { id: 'E', latex: `Z = 2^{4}(1-i)`, isCorrect: true },
      ],
      solution: [
        {
          label: `Trick: $(1-i)^{2} = 1 - 2i + i^{2} = -2i$ (a clean closed form)`,
          latex: `(1-i)^{2} = -2i`,
        },
        {
          label: `Raise to the 4th power: $(1-i)^{8} = \\bigl((1-i)^{2}\\bigr)^{4} = (-2i)^{4} = 16\\,i^{4} = 16$`,
          latex: `(1-i)^{8} = 16 = 2^{4}`,
        },
        {
          label: `Multiply by one extra factor of $(1-i)$ to get the 9th power`,
          latex: `\\boxed{Z = (1-i)^{9} = 2^{4}(1-i) \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'powers', 'algebraic-form'],
      relatedTips: ['complex-arg'],
    },

    // ── Q13 (Q73) ───────────────────────────────────────────
    {
      number: 13,
      exercise: 13,
      topic: 'Sequences',
      statement: `u_{n+1} = \\dfrac{3u_n + 4}{u_n + 3} \\;,\\; u_0 = 1.\\\\ \\text{Define } w_n = \\dfrac{u_n - 2}{u_n + 2} \\text{ for every } n \\in \\mathbb{N}.`,
      question: `(w_n) \\text{ is geometric with common ratio:}`,
      choices: [
        { id: 'A', latex: `q = \\dfrac{1}{5}`, isCorrect: true },
        { id: 'B', latex: `q = -2`, isCorrect: false },
        { id: 'C', latex: `q = -\\dfrac{1}{5}`, isCorrect: false },
        { id: 'D', latex: `q = \\dfrac{4}{3}`, isCorrect: false },
        { id: 'E', latex: `q = -\\dfrac{4}{3}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $u_{n+1} - 2$ and $u_{n+1} + 2$ using the recurrence`,
          latex: `u_{n+1} - 2 = \\dfrac{3u_n + 4 - 2(u_n+3)}{u_n+3} = \\dfrac{u_n - 2}{u_n+3}`,
        },
        {
          label: `Similarly`,
          latex: `u_{n+1} + 2 = \\dfrac{3u_n + 4 + 2(u_n+3)}{u_n+3} = \\dfrac{5u_n + 10}{u_n+3} = \\dfrac{5(u_n+2)}{u_n+3}`,
        },
        {
          label: `Take the ratio and simplify`,
          latex: `w_{n+1} = \\dfrac{u_{n+1}-2}{u_{n+1}+2} = \\dfrac{u_n - 2}{5(u_n+2)} = \\dfrac{1}{5}\\,w_n`,
        },
        {
          label: `Identify the geometric ratio`,
          latex: `\\boxed{q = \\dfrac{1}{5} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['sequences', 'geometric', 'recurrence'],
      relatedTips: ['suite-type'],
    },

    // ── Q14 (Q74) ───────────────────────────────────────────
    {
      number: 14,
      exercise: 14,
      topic: 'Complex Numbers',
      statement: `Z = 1 + e^{i\\pi/3} + e^{i\\,2\\pi/3} + e^{i\\,3\\pi/3} + \\cdots + e^{i\\,59\\pi/3}.`,
      question: `\\text{The complex number } Z \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `0`, isCorrect: true },
        { id: 'B', latex: `e^{-i\\pi/3}`, isCorrect: false },
        { id: 'C', latex: `2e^{i\\pi/3}`, isCorrect: false },
        { id: 'D', latex: `2e^{i\\,4\\pi/3}`, isCorrect: false },
        { id: 'E', latex: `1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify $Z$ as a finite geometric sum: $Z = \\sum_{k=0}^{59} q^{k}$ with $q = e^{i\\pi/3}$ (60 terms)`,
          latex: `Z = \\sum_{k=0}^{59} \\left(e^{i\\pi/3}\\right)^{k}`,
        },
        {
          label: `Compute $q^{6} = e^{i\\,6\\pi/3} = e^{i\\,2\\pi} = 1$. So the powers of $q$ cycle every 6 terms`,
          latex: `q^{6} = 1`,
        },
        {
          label: `Apply the geometric sum formula: since $q^{60} = (q^{6})^{10} = 1$, we get $Z = \\dfrac{q^{60} - 1}{q - 1} = 0$`,
          latex: `Z = \\dfrac{q^{60} - 1}{q - 1} = \\dfrac{0}{q - 1} = 0`,
        },
        {
          label: `(Equivalent argument: 10 complete cycles, each summing to $1+q+\\cdots+q^{5} = 0$)`,
          latex: `\\boxed{Z = 0 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['complex-numbers', 'roots-of-unity', 'geometric-sum'],
      relatedTips: ['complex-arg', 'geometric-sum'],
    },

    // ── Q15 (Q75) ───────────────────────────────────────────
    {
      number: 15,
      exercise: 15,
      topic: 'Antiderivatives',
      statement: `\\text{Let } f(x) = e^{2x} - \\dfrac{2}{x} \\text{ on } ]0\\,;+\\infty[.`,
      question: `\\text{An antiderivative } F \\text{ of } f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `F(x) = 2e^{2x} - \\ln(x^{2})`, isCorrect: false },
        { id: 'B', latex: `F(x) = 2x e^{2x} - \\ln(x^{2})`, isCorrect: false },
        { id: 'C', latex: `F(x) = \\dfrac{1}{2}e^{2x} - \\ln(x^{2})`, isCorrect: true },
        { id: 'D', latex: `F(x) = x e^{2x} - \\ln(x)`, isCorrect: false },
        { id: 'E', latex: `F(x) = \\dfrac{1}{2}e^{2x} - \\ln(x)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Antiderivative of $e^{2x}$: divide by the inner derivative $2$`,
          latex: `\\int e^{2x}\\,dx = \\dfrac{1}{2}e^{2x} + C`,
        },
        {
          label: `Antiderivative of $\\dfrac{2}{x}$ on $x > 0$: $\\int \\dfrac{2}{x}\\,dx = 2\\ln(x) = \\ln(x^{2})$`,
          latex: `\\int \\dfrac{2}{x}\\,dx = 2\\ln(x) = \\ln(x^{2})`,
        },
        {
          label: `Combine`,
          latex: `\\boxed{F(x) = \\dfrac{1}{2}e^{2x} - \\ln(x^{2}) \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['antiderivative', 'exponential', 'logarithm'],
      relatedTips: ['integration-tan'],
    },

    // ── Q16 (Q76) ───────────────────────────────────────────
    {
      number: 16,
      exercise: 16,
      topic: 'Tangent Line',
      statement: `\\text{Let } f(x) = x^{3}\\,e^{x}.`,
      question: `\\text{The tangent to the curve of } f \\text{ at the point of abscissa } 0 \\text{ has equation:}`,
      choices: [
        { id: 'A', latex: `y = x + 1`, isCorrect: false },
        { id: 'B', latex: `y = 0`, isCorrect: true },
        { id: 'C', latex: `y = 1`, isCorrect: false },
        { id: 'D', latex: `y = x - 1`, isCorrect: false },
        { id: 'E', latex: `y = x`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $f(0) = 0^{3}\\cdot e^{0} = 0$`,
          latex: `f(0) = 0`,
        },
        {
          label: `Differentiate using the product rule on $x^{3}\\cdot e^{x}$`,
          latex: `f'(x) = 3x^{2}\\,e^{x} + x^{3}\\,e^{x} = x^{2}(3+x)e^{x}`,
        },
        {
          label: `Evaluate at $x=0$: $f'(0) = 0$`,
          latex: `f'(0) = 0`,
        },
        {
          label: `Apply the tangent equation $y = f'(0)(x - 0) + f(0)$`,
          latex: `\\boxed{y = 0 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['tangent', 'derivative', 'exponential'],
      relatedTips: ['product-derivative'],
    },

    // ── Q17 (Q77) ───────────────────────────────────────────
    {
      number: 17,
      exercise: 17,
      topic: 'Sequences',
      statement: `(u_n) \\text{ is a geometric sequence with } u_{4} = -1 \\text{ and } u_{7} = \\dfrac{1}{27}.`,
      question: `\\text{The common ratio of } (u_n) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `q = \\dfrac{1}{3}`, isCorrect: false },
        { id: 'B', latex: `q = -\\dfrac{1}{3}`, isCorrect: true },
        { id: 'C', latex: `q = 2`, isCorrect: false },
        { id: 'D', latex: `q = 3`, isCorrect: false },
        { id: 'E', latex: `q = -\\dfrac{1}{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Use the geometric relation $u_p / u_n = q^{p-n}$`,
          latex: `\\dfrac{u_{7}}{u_{4}} = q^{3} \\iff q^{3} = \\dfrac{1/27}{-1} = -\\dfrac{1}{27}`,
        },
        {
          label: `Take the cube root (real cube root keeps the sign)`,
          latex: `q = \\sqrt[3]{-\\dfrac{1}{27}} = -\\dfrac{1}{3}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{q = -\\dfrac{1}{3} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['sequences', 'geometric'],
      relatedTips: ['suite-type'],
    },

    // ── Q18 (Q78) ───────────────────────────────────────────
    {
      number: 18,
      exercise: 18,
      topic: 'Complex Numbers',
      statement: `\\text{Let } Z = 1 + e^{i\\pi/5}.`,
      question: `\\text{The modulus of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `2\\cos\\dfrac{\\pi}{5}`, isCorrect: false },
        { id: 'B', latex: `1 + \\cos^{2}\\dfrac{\\pi}{5}`, isCorrect: false },
        { id: 'C', latex: `\\sqrt{1 + \\cos^{2}\\dfrac{\\pi}{5}}`, isCorrect: false },
        { id: 'D', latex: `\\cos\\dfrac{\\pi}{10}`, isCorrect: false },
        { id: 'E', latex: `2\\cos\\dfrac{\\pi}{10}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Write $Z$ in algebraic form. Then $|Z|^{2} = (1 + \\cos\\theta)^{2} + \\sin^{2}\\theta$ with $\\theta = \\pi/5$`,
          latex: `|Z|^{2} = 1 + 2\\cos\\theta + \\cos^{2}\\theta + \\sin^{2}\\theta = 2 + 2\\cos\\theta`,
        },
        {
          label: `Apply the half-angle identity: $2 + 2\\cos\\theta = 4\\cos^{2}(\\theta/2)$`,
          latex: `|Z|^{2} = 4\\cos^{2}\\!\\left(\\dfrac{\\theta}{2}\\right) \\implies |Z| = 2\\bigl|\\cos(\\theta/2)\\bigr|`,
        },
        {
          label: `Since $\\theta/2 = \\pi/10 \\in \\,]0,\\pi/2[$, $\\cos(\\theta/2) > 0$. Conclude`,
          latex: `\\boxed{|Z| = 2\\cos\\dfrac{\\pi}{10} \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['complex-numbers', 'modulus', 'half-angle'],
      relatedTips: ['complex-arg'],
    },

    // ── Q19 (Q79) ───────────────────────────────────────────
    {
      number: 19,
      exercise: 19,
      topic: 'Limits',
      statement: `\\text{Compute } \\displaystyle\\lim_{x\\to+\\infty} x\\,\\ln\\!\\left(\\dfrac{x+4}{x+1}\\right).`,
      question: `\\text{The limit equals:}`,
      choices: [
        { id: 'A', latex: `4`, isCorrect: false },
        { id: 'B', latex: `3`, isCorrect: true },
        { id: 'C', latex: `+\\infty`, isCorrect: false },
        { id: 'D', latex: `0`, isCorrect: false },
        { id: 'E', latex: `1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Rewrite the argument of the log: $\\dfrac{x+4}{x+1} = 1 + \\dfrac{3}{x+1}$`,
          latex: `\\dfrac{x+4}{x+1} = 1 + \\dfrac{3}{x+1}`,
        },
        {
          label: `As $x \\to +\\infty$, $\\frac{3}{x+1} \\to 0$, so use $\\ln(1+u) \\sim u$ when $u \\to 0$`,
          latex: `\\ln\\!\\left(1 + \\dfrac{3}{x+1}\\right) \\underset{x\\to+\\infty}{\\sim} \\dfrac{3}{x+1}`,
        },
        {
          label: `Multiply by $x$ and take the limit: $\\dfrac{3x}{x+1} \\to 3$`,
          latex: `\\boxed{\\lim_{x\\to+\\infty} x\\,\\ln\\!\\left(\\dfrac{x+4}{x+1}\\right) = 3 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['limits', 'logarithm', 'equivalents'],
      relatedTips: ['asymptotes'],
    },

    // ── Q20 (Q80) ───────────────────────────────────────────
    {
      number: 20,
      exercise: 20,
      topic: 'Inequalities',
      statement: `\\text{Consider the inequality } (E_{2}):\\ (x-2)\\,\\ln(x+2) \\leq 0.`,
      question: `\\text{The solution set of } (E_{2}) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `[-1\\,;2]`, isCorrect: true },
        { id: 'B', latex: `]-1\\,;2[`, isCorrect: false },
        { id: 'C', latex: `]-2\\,;2[`, isCorrect: false },
        { id: 'D', latex: `]-2\\,;2]`, isCorrect: false },
        { id: 'E', latex: `]2\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: $\\ln(x+2)$ requires $x+2 > 0 \\iff x > -2$`,
          latex: `D = \\,]-2\\,;+\\infty[`,
        },
        {
          label: `Sign of $x - 2$: negative on $]-2\\,;2[$, zero at $x=2$, positive on $]2\\,;+\\infty[$`,
          latex: `\\text{sign}(x-2) = - \\text{ on } ]-2\\,;2[\\,,\\;\\; 0 \\text{ at } 2\\,,\\;\\; + \\text{ on } ]2\\,;+\\infty[`,
        },
        {
          label: `Sign of $\\ln(x+2)$: $\\ln(x+2) = 0 \\iff x = -1$. Negative on $]-2\\,;-1[$, positive on $]-1\\,;+\\infty[$`,
          latex: `\\text{sign}(\\ln(x+2)) = - \\text{ on } ]-2\\,;-1[\\,,\\;\\; 0 \\text{ at } -1\\,,\\;\\; + \\text{ on } ]-1\\,;+\\infty[`,
        },
        {
          label: `Build the product sign table: positive on $]-2\\,;-1[$, negative on $]-1\\,;2[$, positive on $]2\\,;+\\infty[$. The product is $\\leq 0$ on $[-1\\,;2]$ (zeros included)`,
          latex: `\\boxed{S = [-1\\,;2] \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['inequality', 'logarithm', 'sign-table'],
      relatedTips: ['log-domain'],
    },
  ],
}
