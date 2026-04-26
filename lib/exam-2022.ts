// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2022
// Mathematics Paper — Academic Year 2022-2023 (taken summer 2022)
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2022_REAL: ExamData = {
  year: 2022,
  date: 'Summer 2022 — Academic Year 2022-2023',
  duration: 45,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam for Faculties of General Medicine, Dental Medicine, Pharmacy — Academic Year 2022-2023`,
  instructions: `The mathematics paper contains 15 multiple-choice questions (Q66 through Q80), each offering 5 options (A through E) with a single correct answer. Indicate on the answer sheet the letter corresponding to your choice. The use of calculators is strictly forbidden.`,
  questions: [
    // ── Q1 (Q66) ────────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Derivatives',
      statement: `\\text{Let } f(x) = \\dfrac{x\\,\\ln(x)}{x+1}. \\text{ Let } f' \\text{ be the derivative of } f.`,
      question: `f'(1) \\text{ is equal to:}`,
      choices: [
        { id: 'A', latex: `-1`, isCorrect: false },
        { id: 'B', latex: `-\\dfrac{1}{2}`, isCorrect: false },
        { id: 'C', latex: `1`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{1}{2}`, isCorrect: true },
        { id: 'E', latex: `\\dfrac{1}{4}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply the quotient rule with $u(x) = x\\ln(x)$ and $v(x) = x+1$. Compute $u'(x) = \\ln(x) + 1$ (product rule) and $v'(x) = 1$`,
          latex: `f'(x) = \\dfrac{u'(x)\\,v(x) - u(x)\\,v'(x)}{v(x)^2} = \\dfrac{(\\ln(x)+1)(x+1) - x\\ln(x)}{(x+1)^2}`,
        },
        {
          label: `Evaluate at $x=1$: $u(1) = 0$, $v(1) = 2$, $u'(1) = 1$, $v'(1) = 1$`,
          latex: `f'(1) = \\dfrac{1\\cdot 2 - 0\\cdot 1}{2^2} = \\dfrac{2}{4} = \\dfrac{1}{2}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{f'(1) = \\dfrac{1}{2} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['derivative', 'quotient-rule', 'logarithm'],
      relatedTips: ['product-derivative'],
    },

    // ── Q2 (Q67) ────────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Integrals',
      statement: `\\text{Let } J = \\displaystyle\\int_{0}^{1} \\dfrac{2x}{x^2+1}\\,dx.`,
      question: `\\text{The integral } J \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\ln(2)`, isCorrect: true },
        { id: 'B', latex: `1`, isCorrect: false },
        { id: 'C', latex: `2`, isCorrect: false },
        { id: 'D', latex: `-1`, isCorrect: false },
        { id: 'E', latex: `-2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize the form $\\frac{u'}{u}$ with $u(x) = x^2 + 1$ and $u'(x) = 2x$`,
          latex: `\\dfrac{2x}{x^2+1} = \\dfrac{u'(x)}{u(x)} \\implies \\int \\dfrac{2x}{x^2+1}\\,dx = \\ln|x^2+1| + C`,
        },
        {
          label: `Apply the bounds: $J = [\\ln(x^2+1)]_0^1 = \\ln(2) - \\ln(1)$`,
          latex: `J = \\ln(2) - \\ln(1) = \\ln(2)`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{J = \\ln(2) \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['integral', 'logarithm', 'u-substitution'],
      relatedTips: ['integration-tan'],
    },

    // ── Q3 (Q68) ────────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Differential Equations',
      statement: `\\text{Consider the equation } (**):\\ y'' - y = 0. \\text{ Suppose } g \\text{ is a solution of } (**) \\text{ such that } g(0)=2 \\text{ and } g'(0)=2.`,
      question: `g(x) \\text{ is equal to:}`,
      choices: [
        { id: 'A', latex: `2e^{x}`, isCorrect: true },
        { id: 'B', latex: `2e^{2x}`, isCorrect: false },
        { id: 'C', latex: `2e^{-x}`, isCorrect: false },
        { id: 'D', latex: `2e^{-2x}`, isCorrect: false },
        { id: 'E', latex: `e^{x}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Characteristic equation $r^2 - 1 = 0 \\implies r = \\pm 1$. The general solution is a linear combination of $e^x$ and $e^{-x}$`,
          latex: `g(x) = A\\,e^{x} + B\\,e^{-x}`,
        },
        {
          label: `Differentiate: $g'(x) = A\\,e^{x} - B\\,e^{-x}$. Apply the initial conditions at $x=0$`,
          latex: `\\begin{cases} g(0) = A + B = 2 \\\\ g'(0) = A - B = 2 \\end{cases} \\implies A = 2,\\; B = 0`,
        },
        {
          label: `Substitute back into the general solution`,
          latex: `\\boxed{g(x) = 2e^{x} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['differential-equation', 'second-order', 'initial-conditions'],
      relatedTips: ['ode-second-order'],
    },

    // ── Q4 (Q69) ────────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Limits',
      statement: `\\text{Compute } \\displaystyle\\lim_{n\\to+\\infty} \\dfrac{\\cos(n)}{n}.`,
      question: `\\text{The limit equals:}`,
      choices: [
        { id: 'A', latex: `-\\infty`, isCorrect: false },
        { id: 'B', latex: `-1`, isCorrect: false },
        { id: 'C', latex: `0`, isCorrect: true },
        { id: 'D', latex: `1`, isCorrect: false },
        { id: 'E', latex: `+\\infty`, isCorrect: false },
      ],
      solution: [
        {
          label: `Bound the cosine: $-1 \\leq \\cos(n) \\leq 1$ for every $n$`,
          latex: `-\\dfrac{1}{n} \\leq \\dfrac{\\cos(n)}{n} \\leq \\dfrac{1}{n} \\;,\\; \\forall n \\geq 1`,
        },
        {
          label: `Take the limit of the bounding sequences: both go to $0$`,
          latex: `\\lim_{n\\to+\\infty} \\dfrac{1}{n} = 0 \\;,\\quad \\lim_{n\\to+\\infty} -\\dfrac{1}{n} = 0`,
        },
        {
          label: `Apply the squeeze theorem`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} \\dfrac{\\cos(n)}{n} = 0 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['limits', 'squeeze-theorem', 'trigonometric'],
      relatedTips: ['squeeze'],
    },

    // ── Q5 (Q70) ────────────────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Series',
      statement: `\\text{Let } S = 1 + e + e^{2} + \\cdots + e^{98} + e^{99} + e^{100}.`,
      question: `\\text{The sum } S \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{1 - e^{101}}{1 - e^{100}}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{1 + e^{101}}{1 + e^{100}}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{1 + e^{101}}{1 + e}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{1 - e^{101}}{1 - e}`, isCorrect: true },
        { id: 'E', latex: `\\dfrac{1 - e^{100}}{1 - e}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize a finite geometric sum: first term $a = 1$, common ratio $q = e \\neq 1$, total of $101$ terms (from $e^0$ to $e^{100}$)`,
          latex: `S = \\sum_{k=0}^{100} e^{k} \\;,\\; \\text{geometric with } q = e`,
        },
        {
          label: `Apply the formula $\\sum_{k=0}^{n} q^k = \\dfrac{1 - q^{n+1}}{1 - q}$ with $n = 100$`,
          latex: `S = \\dfrac{1 - e^{101}}{1 - e}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{S = \\dfrac{1 - e^{101}}{1 - e} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['geometric-sum', 'exponential', 'series'],
      relatedTips: ['geometric-sum'],
    },

    // ── Q6 (Q71) ────────────────────────────────────────────
    {
      number: 6,
      exercise: 6,
      topic: 'Sequences',
      statement: `\\text{Let } (u_n) \\text{ be the sequence with } u_0 = 3 \\text{ and } \\dfrac{e^{u_{n+1}}}{e^{u_n}} = 2 \\text{ for every } n \\in \\mathbb{N}.`,
      question: `(u_n) \\text{ is an arithmetic sequence with common difference:}`,
      choices: [
        { id: 'A', latex: `2`, isCorrect: false },
        { id: 'B', latex: `\\ln(2)`, isCorrect: true },
        { id: 'C', latex: `3`, isCorrect: false },
        { id: 'D', latex: `\\ln(3)`, isCorrect: false },
        { id: 'E', latex: `\\ln(6)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Simplify the ratio of exponentials using the property $e^a/e^b = e^{a-b}$`,
          latex: `\\dfrac{e^{u_{n+1}}}{e^{u_n}} = e^{u_{n+1} - u_n} = 2`,
        },
        {
          label: `Take the natural log of both sides to extract the difference`,
          latex: `u_{n+1} - u_n = \\ln(2)`,
        },
        {
          label: `Since $u_{n+1} - u_n$ is the constant $\\ln(2)$, the sequence is arithmetic with common difference $\\ln(2)$`,
          latex: `\\boxed{r = \\ln(2) \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['sequences', 'arithmetic', 'exponential', 'logarithm'],
      relatedTips: ['suite-type'],
    },

    // ── Q7 (Q72) ────────────────────────────────────────────
    {
      number: 7,
      exercise: 7,
      topic: 'Probability',
      statement: `\\text{A fair coin is tossed 4 times in succession.}`,
      question: `\\text{The probability of obtaining exactly two "heads" is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{1}{2}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{3}{8}`, isCorrect: true },
        { id: 'C', latex: `\\dfrac{1}{8}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{1}{16}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{1}{4}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Recognize a binomial distribution $X \\sim B(n=4,\\ p=\\tfrac{1}{2})$. The probability of getting exactly $k$ heads is $\\binom{n}{k} p^{k}(1-p)^{n-k}$`,
          latex: `P(X=k) = \\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}`,
        },
        {
          label: `Apply with $n=4$, $k=2$, $p = 1/2$. Compute the binomial coefficient $\\binom{4}{2} = 6$`,
          latex: `P(X=2) = \\binom{4}{2}\\,\\left(\\dfrac{1}{2}\\right)^{2}\\left(\\dfrac{1}{2}\\right)^{2} = 6 \\cdot \\dfrac{1}{16}`,
        },
        {
          label: `Simplify the fraction`,
          latex: `\\boxed{P(X=2) = \\dfrac{6}{16} = \\dfrac{3}{8} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['probability', 'binomial', 'coin-toss'],
      relatedTips: ['binomial-pmf'],
    },

    // ── Q8 (Q73) ────────────────────────────────────────────
    {
      number: 8,
      exercise: 8,
      topic: 'Probability',
      statement: `\\text{A bag contains 4 blue balls and 2 yellow balls. Two balls are drawn successively WITH replacement.}`,
      question: `\\text{The probability that the second ball drawn is yellow is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{1}{2}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{1}{3}`, isCorrect: true },
        { id: 'C', latex: `\\dfrac{2}{9}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{1}{18}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{2}{3}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Key insight: WITH replacement, the bag's contents are reset before the second draw, so the two draws are INDEPENDENT`,
          latex: `\\text{2nd draw independent of 1st} \\implies P(\\text{2nd yellow}) = P(\\text{yellow on a single draw})`,
        },
        {
          label: `Compute the marginal probability of drawing a yellow ball: 2 yellow out of 6 total`,
          latex: `P(\\text{yellow}) = \\dfrac{2}{6} = \\dfrac{1}{3}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{P(\\text{2nd yellow}) = \\dfrac{1}{3} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['probability', 'with-replacement', 'independence'],
      relatedTips: ['conditional-prob'],
    },

    // ── Q9 (Q74) ────────────────────────────────────────────
    {
      number: 9,
      exercise: 9,
      topic: 'Probability',
      statement: `\\text{Let } A \\text{ and } B \\text{ be two events of a random experiment with } P(B) = 0.6,\\ P(A) = 0.5,\\ P(A \\cup B) = 0.7.`,
      question: `P(A \\cap B) \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `0.1`, isCorrect: false },
        { id: 'B', latex: `0.2`, isCorrect: false },
        { id: 'C', latex: `0.3`, isCorrect: false },
        { id: 'D', latex: `0.4`, isCorrect: true },
        { id: 'E', latex: `0.9`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply the inclusion-exclusion formula`,
          latex: `P(A \\cup B) = P(A) + P(B) - P(A \\cap B)`,
        },
        {
          label: `Solve for $P(A\\cap B)$ and substitute the given values`,
          latex: `P(A \\cap B) = P(A) + P(B) - P(A \\cup B) = 0.5 + 0.6 - 0.7`,
        },
        {
          label: `Compute`,
          latex: `\\boxed{P(A \\cap B) = 0.4 \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['probability', 'inclusion-exclusion'],
      relatedTips: ['conditional-prob'],
    },

    // ── Q10 (Q75) ───────────────────────────────────────────
    {
      number: 10,
      exercise: 10,
      topic: 'Function Analysis',
      statement: `\\text{Let } h(x) = \\dfrac{e^{x} - 1}{e^{x} + 1} \\text{ defined on } \\mathbb{R}.`,
      question: `h \\text{ admits an inverse function } h^{-1} \\text{ defined on the interval:}`,
      choices: [
        { id: 'A', latex: `]0\\,;1[`, isCorrect: false },
        { id: 'B', latex: `]-1\\,;1[`, isCorrect: true },
        { id: 'C', latex: `[0\\,;+\\infty[`, isCorrect: false },
        { id: 'D', latex: `]-\\infty\\,;+\\infty[`, isCorrect: false },
        { id: 'E', latex: `[-1\\,;1]`, isCorrect: false },
      ],
      solution: [
        {
          label: `The inverse $h^{-1}$ is defined on the IMAGE of $h$. So we need to compute $h(\\mathbb{R})$. First, check monotonicity via $h'$`,
          latex: `h'(x) = \\dfrac{e^{x}(e^{x}+1) - (e^{x}-1)e^{x}}{(e^{x}+1)^{2}} = \\dfrac{2e^{x}}{(e^{x}+1)^{2}} > 0`,
        },
        {
          label: `So $h$ is strictly increasing on $\\mathbb{R}$. Compute the boundary limits to find the image`,
          latex: `\\lim_{x\\to -\\infty} h(x) = \\dfrac{0-1}{0+1} = -1 \\;,\\quad \\lim_{x\\to +\\infty} h(x) = \\dfrac{1 - e^{-x}}{1 + e^{-x}}\\bigg|_{e^{-x}\\to 0} = 1`,
        },
        {
          label: `Since $h$ is strictly increasing and continuous, $h(\\mathbb{R}) = \\,]-1\\,;1[$ (boundaries not attained)`,
          latex: `h(\\mathbb{R}) = \\,]-1\\,;1[`,
        },
        {
          label: `Therefore $h^{-1}$ is defined on $]-1\\,;1[$`,
          latex: `\\boxed{h^{-1}: \\,]-1\\,;1[ \\,\\to\\, \\mathbb{R} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['function-range', 'inverse-function', 'exponential'],
      relatedTips: ['function-range'],
    },

    // ── Q11 (Q76) ───────────────────────────────────────────
    {
      number: 11,
      exercise: 11,
      topic: 'Complex Numbers',
      statement: `\\text{Let } Z = \\dfrac{(1-i)^{3}(1+i)^{3}}{(\\sqrt{3}-i)^{5}}.`,
      question: `\\text{An argument of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `-\\dfrac{5\\pi}{6}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{\\pi}{6}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{5\\pi}{6}`, isCorrect: true },
        { id: 'D', latex: `\\dfrac{\\pi}{3}`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{3\\pi}{4}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Simplify the numerator: group $(1-i)$ with $(1+i)$. Their product is real: $(1-i)(1+i) = 1 - i^{2} = 2$`,
          latex: `(1-i)^{3}(1+i)^{3} = \\bigl[(1-i)(1+i)\\bigr]^{3} = 2^{3} = 8 \\;,\\; \\arg(8) = 0`,
        },
        {
          label: `For the denominator, find the modulus and argument of $\\sqrt{3} - i$: $|\\sqrt{3}-i| = 2$, $\\arg = -\\pi/6$`,
          latex: `\\sqrt{3} - i = 2\\,e^{-i\\pi/6} \\implies (\\sqrt{3}-i)^{5} = 32\\,e^{-i\\,5\\pi/6}`,
        },
        {
          label: `Divide: argument of quotient = (argument of numerator) − (argument of denominator)`,
          latex: `\\arg(Z) = 0 - \\left(-\\dfrac{5\\pi}{6}\\right) = \\dfrac{5\\pi}{6}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{\\arg(Z) \\equiv \\dfrac{5\\pi}{6} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'argument', 'exponential-form'],
      relatedTips: ['complex-arg'],
    },

    // ── Q12 (Q77) ───────────────────────────────────────────
    {
      number: 12,
      exercise: 12,
      topic: 'Complex Numbers',
      statement: `\\text{Consider the equation } (***):\\ |z - i| = |4 + 3i|. \\text{ The set of points } M(z) \\text{ verifying } (***) \\text{ is the circle of center } \\Omega \\text{ and radius } R.`,
      question: `\\Omega \\text{ and } R \\text{ are:}`,
      choices: [
        { id: 'A', latex: `\\Omega(i) \\;,\\; R = 5`, isCorrect: true },
        { id: 'B', latex: `\\Omega(i) \\;,\\; R = 25`, isCorrect: false },
        { id: 'C', latex: `\\Omega(-i) \\;,\\; R = 5`, isCorrect: false },
        { id: 'D', latex: `\\Omega(-i) \\;,\\; R = \\sqrt{5}`, isCorrect: false },
        { id: 'E', latex: `\\Omega(i) \\;,\\; R = 7`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute the right-hand side: $|4+3i| = \\sqrt{4^{2} + 3^{2}} = \\sqrt{25} = 5$`,
          latex: `|4 + 3i| = 5`,
        },
        {
          label: `Rewrite the equation: $|z - i| = 5$ is the distance from $M(z)$ to the point of affix $i$ equal to $5$`,
          latex: `|z - i| = 5 \\iff M \\text{ is at distance } 5 \\text{ from } \\Omega(i)`,
        },
        {
          label: `Identify: this is a circle of center $\\Omega$ (affix $i$) and radius $R = 5$`,
          latex: `\\boxed{\\Omega(i) \\;,\\; R = 5 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['complex-numbers', 'locus', 'circle', 'modulus'],
      relatedTips: ['locus-complex'],
    },

    // ── Q13 (Q78) ───────────────────────────────────────────
    {
      number: 13,
      exercise: 13,
      topic: 'Geometry in Space',
      statement: `\\text{In space with reference frame } (O\\,;\\vec\\imath,\\vec\\jmath,\\vec k), \\text{ consider the point } A(-1\\,;1\\,;2).`,
      question: `\\text{A parametric representation of the line } (OA) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `\\begin{cases} x = -t-1 \\\\ y = k+1 \\\\ z = h+2 \\end{cases},\\;(t,h,k)\\in\\mathbb{R}^{3}`, isCorrect: false },
        { id: 'B', latex: `\\begin{cases} x = 2t-1 \\\\ y = -2t+1 \\\\ z = -4t+2 \\end{cases},\\;t\\in\\mathbb{R}`, isCorrect: true },
        { id: 'C', latex: `\\begin{cases} x = -1+t \\\\ y = 1+t \\\\ z = 2+t \\end{cases},\\;t\\in\\mathbb{R}`, isCorrect: false },
        { id: 'D', latex: `\\begin{cases} x = -t+1 \\\\ y = t+2 \\\\ z = 2t-2 \\end{cases},\\;t\\in\\mathbb{R}`, isCorrect: false },
        { id: 'E', latex: `\\begin{cases} x = 2t+1 \\\\ y = -2t+1 \\\\ z = 4t+1 \\end{cases},\\;t\\in\\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        {
          label: `The line $(OA)$ has direction vector $\\vec{OA} = (-1\\,;1\\,;2)$. Any nonzero scalar multiple is also a valid direction`,
          latex: `\\vec{OA} = (-1\\,;1\\,;2) \\;\\;\\text{(or any multiple)}`,
        },
        {
          label: `Test option B: direction $(2\\,;-2\\,;-4) = -2 \\cdot (-1\\,;1\\,;2)$ — a valid scalar multiple of $\\vec{OA}$. ✓ Direction parallel.`,
          latex: `(2\\,;-2\\,;-4) = -2\\,\\vec{OA}`,
        },
        {
          label: `Verify B passes through $A$ at $t=0$: $(2(0)-1\\,;-2(0)+1\\,;-4(0)+2) = (-1\\,;1\\,;2) = A$ ✓`,
          latex: `t = 0 \\implies (x,y,z) = (-1\\,;1\\,;2) = A`,
        },
        {
          label: `Verify B passes through $O$ at $t = 1/2$: $(2(1/2)-1\\,;-2(1/2)+1\\,;-4(1/2)+2) = (0\\,;0\\,;0) = O$ ✓`,
          latex: `\\boxed{\\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['geometry-3d', 'parametric-line', 'vectors'],
      relatedTips: ['parametric-line'],
    },

    // ── Q14 (Q79) ───────────────────────────────────────────
    {
      number: 14,
      exercise: 14,
      topic: 'Geometry in Space',
      statement: `\\text{The space is equipped with an orthonormal frame. Consider the point } A(-5\\,;1\\,;-1) \\text{ and the plane } (P) \\text{ of equation } 4x + 3z + 3 = 0.`,
      question: `\\text{The distance from } A \\text{ to } (P) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `-4`, isCorrect: false },
        { id: 'B', latex: `5`, isCorrect: false },
        { id: 'C', latex: `4\\sqrt{5}`, isCorrect: false },
        { id: 'D', latex: `1`, isCorrect: false },
        { id: 'E', latex: `4`, isCorrect: true },
      ],
      solution: [
        {
          label: `Recall the formula for the distance from $M(x_0,y_0,z_0)$ to a plane $ax+by+cz+d=0$`,
          latex: `d(M,P) = \\dfrac{|a x_0 + b y_0 + c z_0 + d|}{\\sqrt{a^{2} + b^{2} + c^{2}}}`,
        },
        {
          label: `Identify coefficients: $a=4$, $b=0$, $c=3$, $d=3$. Substitute $A(-5\\,;1\\,;-1)$`,
          latex: `d(A,P) = \\dfrac{|4(-5) + 0\\cdot 1 + 3(-1) + 3|}{\\sqrt{16 + 0 + 9}} = \\dfrac{|-20 - 3 + 3|}{\\sqrt{25}}`,
        },
        {
          label: `Simplify`,
          latex: `\\boxed{d(A,P) = \\dfrac{20}{5} = 4 \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['geometry-3d', 'distance-point-plane'],
      relatedTips: ['distance-formula'],
    },

    // ── Q15 (Q80) ───────────────────────────────────────────
    {
      number: 15,
      exercise: 15,
      topic: 'Geometry in Space',
      statement: `\\text{The space is equipped with an orthonormal frame. Consider the sphere } (S) \\text{ of equation } x^{2} + y^{2} + z^{2} - 2x + 4y - 2z + 4 = 0.`,
      question: `\\text{A Cartesian equation of the plane } (P) \\text{ tangent to } (S) \\text{ at the point } A(2\\,;-1\\,;1) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `x - z - 1 = 0`, isCorrect: false },
        { id: 'B', latex: `x + y - 3 = 0`, isCorrect: false },
        { id: 'C', latex: `x + y - 1 = 0`, isCorrect: true },
        { id: 'D', latex: `x - 2y + z - 5 = 0`, isCorrect: false },
        { id: 'E', latex: `x - y - 1 = 0`, isCorrect: false },
      ],
      solution: [
        {
          label: `Complete the square to find the center of $(S)$: group by variable and add/subtract constants`,
          latex: `(x-1)^{2} + (y+2)^{2} + (z-1)^{2} = 1 + 4 + 1 - 4 = 2 \\implies C(1\\,;-2\\,;1),\\; r = \\sqrt{2}`,
        },
        {
          label: `Verify $A$ lies on $(S)$: $(2-1)^{2} + (-1+2)^{2} + (1-1)^{2} = 1 + 1 + 0 = 2$ ✓`,
          latex: `A \\in (S) \\;\\checkmark`,
        },
        {
          label: `The tangent plane at $A$ is perpendicular to the radius $\\vec{CA}$. Compute the direction`,
          latex: `\\vec{CA} = A - C = (2-1\\,;-1-(-2)\\,;1-1) = (1\\,;1\\,;0)`,
        },
        {
          label: `Use the normal-form equation $1\\cdot(x-2) + 1\\cdot(y+1) + 0\\cdot(z-1) = 0$ and simplify`,
          latex: `(x - 2) + (y + 1) = 0 \\iff x + y - 1 = 0`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{x + y - 1 = 0 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['geometry-3d', 'sphere', 'tangent-plane'],
      relatedTips: ['tangent-plane'],
    },
  ],
}
