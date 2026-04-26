// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2023
// Mathematics Paper — July 2023 — Duration 30 min
// Academic Year 2023-2024
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2023_REAL: ExamData = {
  year: 2023,
  date: 'July 2023',
  duration: 30,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam for Faculties of General Medicine, Dental Medicine, Pharmacy — Academic Year 2023-2024`,
  instructions: `The questionnaire has 10 questions, each question has a unique correct answer. For each question, choose among the four proposed answers the unique correct answer by indicating on the answer sheet the letter corresponding to your answer. The use of calculators is strictly forbidden.`,
  questions: [
    // ── EXERCISE 1 – PART 1 ─────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Sequences',
      statement: `\\text{Consider the sequences } (u_n),\\ (v_n),\\ (w_n) \\text{ defined by:}\\\\ u_0 = 1 \\text{ and } \\forall n \\in \\mathbb{N},\\ u_{n+1} = \\dfrac{2u_n}{2+3u_n}\\;,\\quad \\forall n \\in \\mathbb{N},\\ v_n = \\dfrac{1}{u_n} \\;,\\quad \\forall n \\in \\mathbb{N}^*,\\ w_n = \\sqrt{n^3+1} - \\sqrt{n^3-1}`,
      question: `\\text{The sequence } (v_n) \\text{ is arithmetic with common difference:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{1}{2}`, isCorrect: false },
        { id: 'B', latex: `-\\dfrac{1}{2}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{3}{2}`, isCorrect: true },
        { id: 'D', latex: `-\\dfrac{3}{2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Express $v_{n+1}$ in terms of $u_n$ by substituting the recurrence for $u_{n+1}$`,
          latex: `v_{n+1} = \\dfrac{1}{u_{n+1}} = \\dfrac{2+3u_n}{2u_n}`,
        },
        {
          label: `Split the fraction to reveal the $\\frac{1}{u_n}$ term (which is $v_n$) plus a constant`,
          latex: `v_{n+1} = \\dfrac{2}{2u_n} + \\dfrac{3u_n}{2u_n} = \\dfrac{1}{u_n} + \\dfrac{3}{2} = v_n + \\dfrac{3}{2}`,
        },
        {
          label: `Identify: $v_{n+1} - v_n = \\frac{3}{2}$ is constant, so $(v_n)$ is arithmetic with common difference $\\frac{3}{2}$`,
          latex: `\\boxed{(v_n) \\text{ arithmetic},\\ r = \\dfrac{3}{2} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'arithmetic', 'recurrence'],
      relatedTips: ['suite-type'],
    },

    // ── EXERCISE 1 – PART 2 ─────────────────────────────────
    {
      number: 2,
      exercise: 1,
      topic: 'Sequences',
      statement: `\\text{(Continuation of Exercise 1)} \\text{ Determine the explicit form of } u_n.`,
      question: `u_n = \\;?`,
      choices: [
        { id: 'A', latex: `u_n = \\dfrac{2}{2+3n}`, isCorrect: true },
        { id: 'B', latex: `u_n = \\dfrac{2}{2-3n}`, isCorrect: false },
        { id: 'C', latex: `u_n = \\dfrac{2}{2+n}`, isCorrect: false },
        { id: 'D', latex: `u_n = \\dfrac{2}{2-n}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Use the closed form of the arithmetic sequence $v_n = v_0 + n r$, with $v_0 = \\frac{1}{u_0} = 1$ and $r = \\frac{3}{2}$`,
          latex: `v_n = 1 + \\dfrac{3}{2}\\,n = \\dfrac{2 + 3n}{2}`,
        },
        {
          label: `Recover $u_n$ by inverting $v_n$ since $v_n = \\frac{1}{u_n}$`,
          latex: `u_n = \\dfrac{1}{v_n} = \\dfrac{2}{2+3n}`,
        },
        {
          label: `Verify with $n=0$: $u_0 = \\frac{2}{2} = 1$ ✓`,
          latex: `\\boxed{u_n = \\dfrac{2}{2+3n} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['sequences', 'arithmetic', 'closed-form'],
      relatedTips: ['suite-type'],
    },

    // ── EXERCISE 1 – PART 3 ─────────────────────────────────
    {
      number: 3,
      exercise: 1,
      topic: 'Sequences',
      statement: `\\text{(Continuation of Exercise 1)} \\text{ Study the limit of } (w_n) \\text{ where } w_n = \\sqrt{n^3+1} - \\sqrt{n^3-1}.`,
      question: `\\lim_{n\\to+\\infty} w_n = \\;?`,
      choices: [
        { id: 'A', latex: `+\\infty`, isCorrect: false },
        { id: 'B', latex: `0`, isCorrect: true },
        { id: 'C', latex: `2`, isCorrect: false },
        { id: 'D', latex: `-\\infty`, isCorrect: false },
      ],
      solution: [
        {
          label: `The form is $\\infty - \\infty$. Multiply by the conjugate $\\sqrt{n^3+1}+\\sqrt{n^3-1}$ to remove the indeterminate form`,
          latex: `w_n = \\dfrac{\\left(\\sqrt{n^3+1}-\\sqrt{n^3-1}\\right)\\!\\left(\\sqrt{n^3+1}+\\sqrt{n^3-1}\\right)}{\\sqrt{n^3+1}+\\sqrt{n^3-1}}`,
        },
        {
          label: `Apply $(a-b)(a+b) = a^2 - b^2$ in the numerator, which cancels the $n^3$ terms`,
          latex: `w_n = \\dfrac{(n^3+1)-(n^3-1)}{\\sqrt{n^3+1}+\\sqrt{n^3-1}} = \\dfrac{2}{\\sqrt{n^3+1}+\\sqrt{n^3-1}}`,
        },
        {
          label: `As $n\\to+\\infty$, the denominator tends to $+\\infty$, so the fraction tends to $0$`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} w_n = 0 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'limit', 'conjugate'],
      relatedTips: ['conjugate-trick'],
    },

    // ── EXERCISE 2 – PART 1 ─────────────────────────────────
    {
      number: 4,
      exercise: 2,
      topic: 'Complex Numbers',
      statement: `\\text{Consider the complex numbers: } z_1 = \\sqrt{3}+i,\\quad z_2 = 2 - 2i,\\quad z_3 = i\\!\\left(\\cos\\dfrac{5\\pi}{12} - i\\sin\\dfrac{5\\pi}{12}\\right)`,
      question: `\\text{Exponential form of } z_3:`,
      choices: [
        { id: 'A', latex: `z_3 = e^{i\\frac{5\\pi}{12}}`, isCorrect: false },
        { id: 'B', latex: `z_3 = e^{-i\\frac{5\\pi}{12}}`, isCorrect: false },
        { id: 'C', latex: `z_3 = e^{-i\\frac{\\pi}{12}}`, isCorrect: false },
        { id: 'D', latex: `z_3 = e^{i\\frac{\\pi}{12}}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Recognize $\\cos\\theta - i\\sin\\theta = e^{-i\\theta}$ (conjugate of $e^{i\\theta}$), with $\\theta = \\frac{5\\pi}{12}$`,
          latex: `\\cos\\dfrac{5\\pi}{12} - i\\sin\\dfrac{5\\pi}{12} = e^{-i\\frac{5\\pi}{12}}`,
        },
        {
          label: `Write $i = e^{i\\pi/2}$ and multiply exponentials (add arguments)`,
          latex: `z_3 = e^{i\\frac{\\pi}{2}} \\cdot e^{-i\\frac{5\\pi}{12}} = e^{i\\left(\\frac{\\pi}{2} - \\frac{5\\pi}{12}\\right)}`,
        },
        {
          label: `Bring to the common denominator 12: $\\frac{\\pi}{2} = \\frac{6\\pi}{12}$, then subtract`,
          latex: `\\dfrac{6\\pi}{12} - \\dfrac{5\\pi}{12} = \\dfrac{\\pi}{12}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{z_3 = e^{i\\frac{\\pi}{12}} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'exponential-form', 'conjugate'],
      relatedTips: ['complex-arg'],
    },

    // ── EXERCISE 2 – PART 2 ─────────────────────────────────
    {
      number: 5,
      exercise: 2,
      topic: 'Complex Numbers',
      statement: `\\text{(Continuation of Exercise 2)} \\text{ Find the correct relationship.}`,
      question: `\\text{Which relation holds?}`,
      choices: [
        { id: 'A', latex: `z_1 \\times z_2 = 4\\sqrt{2}\\,z_3`, isCorrect: false },
        { id: 'B', latex: `z_1 \\times z_2 = 4\\sqrt{2}\\,\\overline{z_3}`, isCorrect: true },
        { id: 'C', latex: `z_2 \\times z_3 = \\sqrt{2}\\,z_1`, isCorrect: false },
        { id: 'D', latex: `z_1 \\times z_3 = \\sqrt{2}\\,\\overline{z_2}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Convert $z_1 = \\sqrt{3}+i$ to exponential form: $|z_1| = \\sqrt{3+1} = 2$ and $\\arg(z_1) = \\arctan\\!\\left(\\frac{1}{\\sqrt{3}}\\right) = \\frac{\\pi}{6}$`,
          latex: `z_1 = 2\\,e^{i\\frac{\\pi}{6}}`,
        },
        {
          label: `Convert $z_2 = 2 - 2i$: $|z_2| = \\sqrt{4+4} = 2\\sqrt{2}$ and $\\arg(z_2) = -\\frac{\\pi}{4}$ (fourth quadrant)`,
          latex: `z_2 = 2\\sqrt{2}\\,e^{-i\\frac{\\pi}{4}}`,
        },
        {
          label: `Multiply $z_1 \\cdot z_2$: moduli multiply, arguments add`,
          latex: `z_1 z_2 = 2 \\cdot 2\\sqrt{2}\\,e^{i\\left(\\frac{\\pi}{6}-\\frac{\\pi}{4}\\right)} = 4\\sqrt{2}\\,e^{i\\left(\\frac{2\\pi}{12}-\\frac{3\\pi}{12}\\right)} = 4\\sqrt{2}\\,e^{-i\\frac{\\pi}{12}}`,
        },
        {
          label: `Recognize $e^{-i\\pi/12} = \\overline{e^{i\\pi/12}} = \\overline{z_3}$ using the result from Q4`,
          latex: `\\boxed{z_1 \\times z_2 = 4\\sqrt{2}\\,\\overline{z_3} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['complex-numbers', 'product', 'exponential-form', 'conjugate'],
      relatedTips: ['complex-arg'],
    },

    // ── EXERCISE 3 – PART 1 ─────────────────────────────────
    {
      number: 6,
      exercise: 3,
      topic: 'Complex Numbers',
      statement: `\\text{To every complex number } z = x + iy \\text{ we associate the complex number } z' = z^2 - 2i.`,
      question: `\\text{The set of points } M \\text{ of affix } z \\text{ satisfying } z' \\in i\\mathbb{R} \\text{ is:}`,
      choices: [
        { id: 'A', latex: `\\text{A line}`, isCorrect: false },
        { id: 'B', latex: `\\text{The union of two perpendicular lines}`, isCorrect: true },
        { id: 'C', latex: `\\text{A circle}`, isCorrect: false },
        { id: 'D', latex: `\\text{The empty set}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Expand $z^2 = (x+iy)^2 = x^2 - y^2 + 2ixy$ and subtract $2i$ to get $z'$ in Cartesian form`,
          latex: `z' = (x^2 - y^2) + i(2xy - 2)`,
        },
        {
          label: `"$z' \\in i\\mathbb{R}$" means purely imaginary, i.e. $\\operatorname{Re}(z') = 0$`,
          latex: `x^2 - y^2 = 0 \\iff (x-y)(x+y) = 0`,
        },
        {
          label: `Each factor gives a line through the origin: $y = x$ and $y = -x$. Their slopes satisfy $1 \\cdot (-1) = -1$, so the lines are perpendicular`,
          latex: `\\boxed{y = x \\ \\cup\\ y = -x \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'geometry'],
      relatedTips: ['locus-complex'],
      visualization: {
        type: 'locus-2d',
        preset: 'lines-2023-ex6',
        title: 'Locus of M : z² − 2i is purely imaginary',
        description: 'Two perpendicular lines through the origin: y = x and y = −x.',
      },
    },

    // ── EXERCISE 3 – PART 2 ─────────────────────────────────
    {
      number: 7,
      exercise: 3,
      topic: 'Complex Numbers',
      statement: `\\text{(Continuation of Exercise 3)} \\text{ Same definition: } z' = z^2 - 2i.`,
      question: `\\text{The set of points } M \\text{ of affix } z \\text{ satisfying } z' \\in \\mathbb{R} \\text{ is:}`,
      choices: [
        { id: 'A', latex: `\\text{A parabola}`, isCorrect: false },
        { id: 'B', latex: `\\text{A circle}`, isCorrect: false },
        { id: 'C', latex: `\\text{A hyperbola}`, isCorrect: true },
        { id: 'D', latex: `\\text{A line}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Reuse the Cartesian form: $z' = (x^2-y^2) + i(2xy - 2)$`,
          latex: `z' \\in \\mathbb{R} \\iff \\operatorname{Im}(z') = 0`,
        },
        {
          label: `Set the imaginary part equal to zero and solve`,
          latex: `2xy - 2 = 0 \\iff xy = 1`,
        },
        {
          label: `The equation $xy = 1$ is the standard equation of a rectangular hyperbola with the coordinate axes as asymptotes`,
          latex: `\\boxed{xy = 1 \\implies \\text{A hyperbola (Answer: C)}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'hyperbola'],
      relatedTips: ['locus-complex'],
      visualization: {
        type: 'locus-2d',
        preset: 'hyperbola-2023-ex7',
        title: 'Locus of M : z² − 2i is real',
        description: 'Rectangular hyperbola xy = 1 with the coordinate axes as asymptotes.',
      },
    },

    // ── EXERCISE 4 ──────────────────────────────────────────
    {
      number: 8,
      exercise: 4,
      topic: 'Logarithmic Equations',
      statement: `\\text{Consider in } \\mathbb{R} \\text{ the equation: } 2\\ln^2(x) - \\ln(x) - 3 = 0.`,
      question: `\\text{The solution set } (S) \\text{ of this equation is:}`,
      choices: [
        { id: 'A', latex: `S = \\{\\,e,\\ \\sqrt{e^{-3}}\\,\\}`, isCorrect: false },
        { id: 'B', latex: `S = \\{\\,e^{-1}\\,\\}`, isCorrect: false },
        { id: 'C', latex: `S = \\{\\,\\sqrt{e^{-3}}\\,\\}`, isCorrect: false },
        { id: 'D', latex: `S = \\{\\,e^{-1},\\ \\sqrt{e^{3}}\\,\\}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Substitute $t = \\ln(x)$ to turn the equation into a quadratic in $t$ (valid since $x > 0$ for $\\ln$ to exist)`,
          latex: `2t^2 - t - 3 = 0`,
        },
        {
          label: `Compute the discriminant and apply the quadratic formula`,
          latex: `\\Delta = (-1)^2 - 4\\cdot 2\\cdot(-3) = 1 + 24 = 25 \\implies t = \\dfrac{1 \\pm 5}{4}`,
        },
        {
          label: `Get two values: $t_1 = \\frac{3}{2}$ and $t_2 = -1$`,
          latex: `t_1 = \\dfrac{3}{2},\\quad t_2 = -1`,
        },
        {
          label: `Return to $x = e^t$ for each value of $t$`,
          latex: `x_1 = e^{3/2} = \\sqrt{e^3},\\quad x_2 = e^{-1}`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{S = \\{e^{-1},\\ \\sqrt{e^3}\\} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['logarithm', 'quadratic', 'substitution'],
      relatedTips: ['log-substitution'],
    },

    // ── EXERCISE 5 ──────────────────────────────────────────
    {
      number: 9,
      exercise: 5,
      topic: 'Function Analysis',
      statement: `\\text{Consider the function } f \\text{ defined by: } f(x) = \\ln\\!\\left(\\dfrac{1-x}{1+x}\\right).`,
      question: `\\text{Which statement is correct?}`,
      choices: [
        { id: 'A', latex: `D_f = \\,]-\\infty,-1[\\,\\cup\\,]1,+\\infty[`, isCorrect: false },
        { id: 'B', latex: `\\text{The equation } f(x) = 0 \\text{ has no solution}`, isCorrect: false },
        { id: 'C', latex: `(C_f) \\text{ has two horizontal asymptotes}`, isCorrect: false },
        { id: 'D', latex: `(C_f) \\text{ has two vertical asymptotes}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Find $D_f$: require $\\frac{1-x}{1+x} > 0$. A sign table shows the fraction is positive exactly on $]-1,1[$`,
          latex: `D_f = \\,]-1,\\,1[\\; \\implies \\text{A is false}`,
        },
        {
          label: `Solve $f(x) = 0$: $\\ln(\\cdot) = 0 \\iff \\frac{1-x}{1+x} = 1 \\iff 1-x = 1+x \\iff x = 0$. So $x=0$ is a solution`,
          latex: `f(0) = \\ln(1) = 0 \\implies \\text{B is false}`,
        },
        {
          label: `Behavior at $x \\to 1^-$: $\\frac{1-x}{1+x} \\to 0^+$, so $f(x) \\to -\\infty$ → vertical asymptote $x=1$`,
          latex: `\\lim_{x\\to 1^-} f(x) = -\\infty`,
        },
        {
          label: `Behavior at $x \\to -1^+$: $\\frac{1-x}{1+x} \\to +\\infty$, so $f(x) \\to +\\infty$ → vertical asymptote $x=-1$`,
          latex: `\\lim_{x\\to -1^+} f(x) = +\\infty`,
        },
        {
          label: `Compute $f'(x)$ to study monotonicity. Write $f(x) = \\ln(1-x) - \\ln(1+x)$ and differentiate term by term`,
          latex: `f'(x) = \\dfrac{-1}{1-x} - \\dfrac{1}{1+x} = \\dfrac{-2}{1-x^2} < 0 \\quad \\forall x \\in \\,]-1,1[`,
        },
        {
          label: `Assemble the table of variations: $f$ is strictly decreasing on $]-1,1[$, going from $+\\infty$ at $x=-1^+$ through $f(0)=0$ down to $-\\infty$ at $x=1^-$`,
          latex: `\\begin{array}{|c|ccccc|}\\hline x & -1 & & 0 & & 1 \\\\\\hline f'(x) & & - & - & - & \\\\\\hline & +\\infty & & & & \\\\ f(x) & & \\searrow & 0 & \\searrow & \\\\ & & & & & -\\infty \\\\\\hline\\end{array}`,
        },
        {
          label: `Since $D_f$ is bounded, there is no infinite $x$ to test for horizontal asymptotes — only the two vertical ones`,
          latex: `\\boxed{(C_f) \\text{ has two vertical asymptotes: } x=-1 \\text{ and } x=1 \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['functions', 'logarithm', 'domain', 'asymptote'],
      relatedTips: ['log-domain', 'asymptotes'],
    },

    // ── EXERCISE 6 ──────────────────────────────────────────
    {
      number: 10,
      exercise: 6,
      topic: 'Integrals',
      statement: `\\text{Let } K = \\displaystyle\\int_{-1}^{1} \\dfrac{x^2}{x^3 - 8}\\,dx.`,
      question: `\\text{The value of } 3K \\text{ is:}`,
      choices: [
        { id: 'A', latex: `3K = \\ln(7) - 2\\ln(3)`, isCorrect: true },
        { id: 'B', latex: `3K = 2\\ln(3) - \\ln(7)`, isCorrect: false },
        { id: 'C', latex: `3K = -\\ln(7) + 2\\ln(3)`, isCorrect: false },
        { id: 'D', latex: `3K \\text{ does not exist}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Check continuity on $[-1,1]$: $x^3 - 8 = 0 \\iff x = 2 \\notin [-1,1]$, so the integrand is continuous and $K$ exists`,
          latex: `\\forall x \\in [-1,1],\\ x^3 - 8 \\leq 1 - 8 = -7 < 0 \\implies \\text{no singularity}`,
        },
        {
          label: `Recognize the $\\frac{u'}{u}$ form: with $u(x) = x^3 - 8$, we have $u'(x) = 3x^2$, so $\\frac{x^2}{x^3-8} = \\frac{1}{3}\\cdot\\frac{u'(x)}{u(x)}$`,
          latex: `\\dfrac{x^2}{x^3-8} = \\dfrac{1}{3}\\cdot\\dfrac{(x^3-8)'}{x^3-8}`,
        },
        {
          label: `Integrate: the antiderivative of $\\frac{u'}{u}$ is $\\ln|u|$`,
          latex: `K = \\dfrac{1}{3}\\Big[\\ln|x^3 - 8|\\Big]_{-1}^{1} = \\dfrac{1}{3}\\left(\\ln|1 - 8| - \\ln|-1 - 8|\\right)`,
        },
        {
          label: `Evaluate: $|1-8| = 7$ and $|-1-8| = 9$, then multiply by 3`,
          latex: `K = \\dfrac{1}{3}(\\ln 7 - \\ln 9) \\implies 3K = \\ln 7 - \\ln 9 = \\ln 7 - 2\\ln 3`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{3K = \\ln(7) - 2\\ln(3) \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integrals', 'logarithm', 'u-prime-over-u'],
      relatedTips: ['u-prime-over-u'],
    },
  ],
}
