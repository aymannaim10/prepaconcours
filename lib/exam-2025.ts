// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2025
// Mathematics Paper — July 13, 2025 — Duration 30 min
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2025_REAL: ExamData = {
  year: 2025,
  date: 'July 13, 2025',
  duration: 30,
  categoryId: 'real-exam',
  title: `Common Entrance Exam for Faculties of Medicine, Dental Medicine, Pharmacy — English Track`,
  instructions: `For each question, choose among the four proposed answers – THE UNIQUE CORRECT ANSWER by indicating on the answer sheet the letter corresponding to your answer. The use of calculators is strictly forbidden.`,
  questions: [
    // ── EXERCISE 1 ──────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Complex Numbers',
      statement: `\\text{In the Complex Numbers section, the plane is referred to a direct orthonormal frame } (O,\\vec{u},\\vec{v}).\\\\\\text{Consider in } \\mathbb{C} \\text{ the equation:}`,
      question: `i(z+1) = -z - i`,
      choices: [
        { id: 'A', latex: `z = 2\\,e^{i\\frac{3\\pi}{4}}`, isCorrect: false },
        { id: 'B', latex: `z = \\sqrt{2}\\,e^{i\\frac{3\\pi}{4}}`, isCorrect: false },
        { id: 'C', latex: `z = \\sqrt{2}\\,e^{i\\frac{5\\pi}{4}}`, isCorrect: true },
        { id: 'D', latex: `z = 2\\,e^{i\\frac{5\\pi}{4}}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Expand and collect $z$ terms on one side`,
          latex: `iz + i = -z - i \\implies iz + z = -i - i \\implies z(i+1) = -2i`,
        },
        {
          label: `Isolate $z$ and rationalize the denominator by multiplying by the conjugate of $(1+i)$`,
          latex: `z = \\frac{-2i}{1+i} = \\frac{-2i(1-i)}{(1+i)(1-i)} = \\frac{-2i + 2i^2}{2} = \\frac{-2 - 2i}{2} = -1 - i`,
        },
        {
          label: `Convert $z = -1 - i$ to exponential form: modulus and argument`,
          latex: `|z| = \\sqrt{(-1)^2+(-1)^2} = \\sqrt{2} \\qquad z \\in \\text{Q3} \\implies \\arg(z) = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}`,
        },
        {
          label: `Write the exponential form and conclude`,
          latex: `\\boxed{z = \\sqrt{2}\\,e^{i\\frac{5\\pi}{4}} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'equation', 'exponential-form', 'argument'],
      relatedTips: ['complex-equation-2025'],
    },

    // ── EXERCISE 2 ──────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Complex Numbers',
      statement: `\\text{Let } r \\text{ be the rotation with center } O \\text{ and angle } \\theta = \\frac{\\pi}{3}.\\quad A \\text{ has affix } z_A = -i.\\quad B = r(A).`,
      question: `\\text{Find } (z_B)^3.`,
      choices: [
        { id: 'A', latex: `(z_B)^3 = i`, isCorrect: false },
        { id: 'B', latex: `(z_B)^3 = 1 - i`, isCorrect: false },
        { id: 'C', latex: `(z_B)^3 = 1 + i`, isCorrect: false },
        { id: 'D', latex: `(z_B)^3 = -i`, isCorrect: true },
      ],
      solution: [
        {
          label: `A rotation of angle $\\theta$ centered at $O$ maps $z_A$ to $z_B = e^{i\\theta} \\cdot z_A$`,
          latex: `z_B = e^{i\\frac{\\pi}{3}} \\cdot (-i)`,
        },
        {
          label: `Compute $(z_B)^3$ using the exponent laws: $(ab)^3 = a^3 b^3$`,
          latex: `(z_B)^3 = \\left(e^{i\\frac{\\pi}{3}}\\right)^{\\!3} \\cdot (-i)^3 = e^{i\\pi} \\cdot (-i)^3`,
        },
        {
          label: `Simplify: $e^{i\\pi} = -1$ and $(-i)^3 = (-i)^2 \\cdot (-i) = (-1)\\cdot(-i) = i$`,
          latex: `(z_B)^3 = (-1) \\cdot i = \\boxed{-i \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'rotation', 'powers', 'geometry'],
      relatedTips: ['rotation-2025'],
    },

    // ── EXERCISE 3 — Q3.1 ───────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Sequences',
      statement: `\\text{The sequences } (u_n) \\text{ and } (v_n) \\text{ are defined by:}\\\\u_0 = \\dfrac{4}{5},\\quad u_{n+1} = -\\dfrac{1}{4}\\,u_n + \\dfrac{3}{4},\\quad v_n = u_n - \\dfrac{3}{5}`,
      question: `\\text{Determine the nature of } (v_n).`,
      choices: [
        { id: 'A', latex: `(v_n) \\text{ is geometric with ratio } {-0.25}`, isCorrect: true },
        { id: 'B', latex: `(v_n) \\text{ is geometric with ratio } 0.25`, isCorrect: false },
        { id: 'C', latex: `(v_n) \\text{ is geometric with ratio } 0.50`, isCorrect: false },
        { id: 'D', latex: `(v_n) \\text{ is geometric with ratio } {-0.50}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $v_{n+1}$ using the recurrence for $u_n$ and the definition $v_n = u_n - \\frac{3}{5}$`,
          latex: `v_{n+1} = u_{n+1} - \\frac{3}{5} = -\\frac{1}{4}u_n + \\frac{3}{4} - \\frac{3}{5} = -\\frac{1}{4}u_n + \\frac{15-12}{20} = -\\frac{1}{4}u_n + \\frac{3}{20}`,
        },
        {
          label: `Express in terms of $v_n$: since $u_n = v_n + \\frac{3}{5}$`,
          latex: `v_{n+1} = -\\frac{1}{4}\\left(v_n + \\frac{3}{5}\\right) + \\frac{3}{20} = -\\frac{1}{4}v_n - \\frac{3}{20} + \\frac{3}{20} = -\\frac{1}{4}\\,v_n`,
        },
        {
          label: `Since $v_{n+1} = -\\frac{1}{4}\\,v_n$ with $v_0 = \\frac{4}{5} - \\frac{3}{5} = \\frac{1}{5} \\neq 0$, $(v_n)$ is geometric with ratio $-\\frac{1}{4}$`,
          latex: `v_0 = \\frac{1}{5},\\quad \\frac{v_{n+1}}{v_n} = -\\frac{1}{4} = -0.25 \\implies \\boxed{\\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'recursive', 'geometric', 'auxiliary-sequence'],
      relatedTips: ['auxiliary-sequence-2025'],
    },

    // ── EXERCISE 3 — Q3.2 ───────────────────────────────────
    {
      number: 4,
      exercise: 3,
      topic: 'Sequences',
      statement: `\\text{(Continuation of Exercise 3) With } v_n = \\frac{1}{5}\\left(-\\frac{1}{4}\\right)^{\\!n} \\text{ and } u_n = v_n + \\frac{3}{5}`,
      question: `\\text{Which statement about } (u_n) \\text{ is correct?}`,
      choices: [
        { id: 'A', latex: `(u_n) \\text{ is increasing}`, isCorrect: false },
        { id: 'B', latex: `(u_n) \\text{ is decreasing}`, isCorrect: false },
        { id: 'C', latex: `(u_n) \\text{ is neither increasing nor decreasing}`, isCorrect: true },
        { id: 'D', latex: `\\displaystyle \\lim_{n \\to +\\infty} u_n = -\\dfrac{3}{5}`, isCorrect: false },
      ],
      solution: [
        {
          label: `From Q3.1: $v_n = \\frac{1}{5}(-\\frac{1}{4})^n$ and $u_n = v_n + \\frac{3}{5}$, so $u_n = \\frac{3}{5} + \\frac{1}{5}(-\\frac{1}{4})^n$`,
          latex: `u_n = \\frac{3}{5} + \\frac{1}{5}\\left(-\\frac{1}{4}\\right)^{\\!n}`,
        },
        {
          label: `The ratio $-\\tfrac{1}{4}$ is negative, so $(-\\tfrac{1}{4})^n$ alternates in sign → $u_n$ oscillates around $\\tfrac{3}{5}$. Check: $u_0 = 0.8,\\, u_1 = 0.55,\\, u_2 = 0.6125$ — not monotone, so A and B are false`,
          latex: `u_0 = 0.8 > u_1 = 0.55 < u_2 = 0.6125 \\implies (u_n) \\text{ is neither increasing nor decreasing}`,
        },
        {
          label: `Compute the limit: $|-\\tfrac{1}{4}| < 1$ so $(-\\tfrac{1}{4})^n \\to 0$ and $u_n \\to \\tfrac{3}{5}$ (positive). Option D claims $-\\tfrac{3}{5}$ — the sign is wrong, so D is false`,
          latex: `\\lim_{n\\to+\\infty} u_n = \\tfrac{3}{5} \\;\\neq\\; -\\tfrac{3}{5} \\implies \\text{D is false}`,
        },
        {
          label: `Only option C correctly describes $(u_n)$: the oscillation makes it neither increasing nor decreasing`,
          latex: `\\boxed{(u_n) \\text{ is neither increasing nor decreasing} \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'limit', 'oscillating', 'convergence'],
      relatedTips: ['auxiliary-sequence-2025'],
    },

    // ── EXERCISE 4 ──────────────────────────────────────────
    {
      number: 5,
      exercise: 4,
      topic: 'Sequences',
      statement: `\\text{The sequence } (u_n) \\text{ is defined by:}`,
      question: `u_n = 1 - \\left(\\dfrac{4}{5}\\right)^{\\!n} \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(u_n) \\text{ is geometric}`, isCorrect: false },
        { id: 'B', latex: `(u_n) \\text{ is increasing}`, isCorrect: true },
        { id: 'C', latex: `\\displaystyle \\lim_{n \\to +\\infty} u_n = 0`, isCorrect: false },
        { id: 'D', latex: `(u_n) \\text{ is decreasing}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $u_{n+1} - u_n$ to determine monotonicity`,
          latex: `u_{n+1} - u_n = \\left(\\frac{4}{5}\\right)^{\\!n} - \\left(\\frac{4}{5}\\right)^{\\!n+1} = \\left(\\frac{4}{5}\\right)^{\\!n}\\!\\left(1-\\frac{4}{5}\\right) = \\frac{1}{5}\\left(\\frac{4}{5}\\right)^{\\!n} > 0`,
        },
        {
          label: `Since $u_{n+1} - u_n > 0$ for all $n$, the sequence is strictly increasing`,
          latex: `u_{n+1} - u_n > 0 \\;\\forall n \\implies (u_n) \\text{ is strictly increasing}`,
        },
        {
          label: `Check other options: $\\lim (4/5)^n = 0$ so $\\lim u_n = 1 \\neq 0$ (C is false). $u_{n+1}/u_n$ is not constant (A is false)`,
          latex: `\\lim u_n = 1 - 0 = 1 \\neq 0 \\implies \\boxed{\\text{Answer: B — increasing}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['sequences', 'monotonicity', 'limit'],
      relatedTips: ['sequence-monotonicity-2025'],
    },

    // ── EXERCISE 5 ──────────────────────────────────────────
    {
      number: 6,
      exercise: 5,
      topic: 'Function Analysis',
      statement: `\\text{The function } f \\text{ is defined on } \\mathbb{R} \\text{ by } f(x) = (x-1)\\,e^{-0.5x}`,
      question: `a \\text{ is the slope of the tangent to } (C_f) \\text{ at the point with } x = 0. \\text{ Find } a.`,
      choices: [
        { id: 'A', latex: `a = 0.5`, isCorrect: false },
        { id: 'B', latex: `a = -0.5`, isCorrect: false },
        { id: 'C', latex: `a = 1.5`, isCorrect: true },
        { id: 'D', latex: `a = -1.5`, isCorrect: false },
      ],
      solution: [
        {
          label: `The slope of the tangent at $x=0$ is $f'(0)$. Differentiate $f(x) = (x-1)e^{-0.5x}$ using the product rule`,
          latex: `f'(x) = 1 \\cdot e^{-0.5x} + (x-1) \\cdot (-0.5)\\,e^{-0.5x} = e^{-0.5x}\\bigl[1 - 0.5(x-1)\\bigr]`,
        },
        {
          label: `Simplify the bracket: $1 - 0.5x + 0.5 = 1.5 - 0.5x$`,
          latex: `f'(x) = e^{-0.5x}(1.5 - 0.5x)`,
        },
        {
          label: `Evaluate $f'(0)$: substitute $x = 0$`,
          latex: `a = f'(0) = e^{0} \\cdot (1.5 - 0) = \\boxed{1.5 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['functions', 'derivative', 'tangent', 'product-rule'],
      relatedTips: ['product-derivative-2025'],
    },

    // ── EXERCISE 6 — Q6.1 ───────────────────────────────────
    {
      number: 7,
      exercise: 6,
      topic: 'Integrals',
      statement: `\\text{Consider the functions defined on } \\mathbb{R} \\text{ by:}\\\\f(x)=(2x-1)e^{2x},\\quad u(x) = x-1,\\quad v(x) = e^{2x}`,
      question: `[u(x) \\cdot v(x)]' = \\;?`,
      choices: [
        { id: 'A', latex: `[u(x) \\cdot v(x)]' = 2f(x)`, isCorrect: false },
        { id: 'B', latex: `[u(x) \\cdot v(x)]' = -2f(x)`, isCorrect: false },
        { id: 'C', latex: `[u(x) \\cdot v(x)]' = -f(x)`, isCorrect: false },
        { id: 'D', latex: `[u(x) \\cdot v(x)]' = f(x)`, isCorrect: true },
      ],
      solution: [
        {
          label: `Apply the product rule to $u(x) \\cdot v(x) = (x-1)e^{2x}$`,
          latex: `[u \\cdot v]' = u'v + uv' = 1 \\cdot e^{2x} + (x-1) \\cdot 2e^{2x}`,
        },
        {
          label: `Factor $e^{2x}$ and simplify`,
          latex: `= e^{2x}[1 + 2(x-1)] = e^{2x}(2x - 1) = f(x)`,
        },
        {
          label: `Conclude: the derivative of $u(x)v(x)$ is exactly $f(x)$`,
          latex: `\\boxed{[u(x) \\cdot v(x)]' = f(x) \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['integrals', 'derivative', 'product-rule', 'exponential'],
      relatedTips: ['derivative-verification-2025'],
    },

    // ── EXERCISE 6 — Q6.2 ───────────────────────────────────
    {
      number: 8,
      exercise: 6,
      topic: 'Integrals',
      statement: `\\text{Using the result of Q6.1: } [u(x)\\cdot v(x)]' = f(x), \\text{ i.e. } [(x-1)e^{2x}]' = (2x-1)e^{2x}`,
      question: `\\int_0^1 f(x)\\,dx = \\int_0^1 (2x-1)\\,e^{2x}\\,dx`,
      choices: [
        { id: 'A', latex: `\\int_0^1 f(x)\\,dx = -1`, isCorrect: false },
        { id: 'B', latex: `\\int_0^1 f(x)\\,dx = -2`, isCorrect: false },
        { id: 'C', latex: `\\int_0^1 f(x)\\,dx = 1`, isCorrect: true },
        { id: 'D', latex: `\\int_0^1 f(x)\\,dx = 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `From Q6.1, $f(x) = [(x-1)e^{2x}]'$, so $(x-1)e^{2x}$ is a primitive of $f$`,
          latex: `\\int_0^1 f(x)\\,dx = \\bigl[(x-1)e^{2x}\\bigr]_0^1`,
        },
        {
          label: `Evaluate at the bounds separately`,
          latex: `F(1) = (1-1)e^{2} = 0 \\qquad F(0) = (0-1)e^{0} = -1`,
        },
        {
          label: `Subtract: $F(1) - F(0)$`,
          latex: `\\int_0^1 f(x)\\,dx = 0 - (-1) = \\boxed{1 \\implies \\text{Answer: C}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integrals', 'definite-integral', 'exponential', 'primitive'],
      relatedTips: ['definite-integral-2025'],
    },

    // ── EXERCISE 7 — Q7.1 ───────────────────────────────────
    {
      number: 9,
      exercise: 7,
      topic: 'Function Analysis',
      statement: `\\text{Consider the functions defined on } ]0, +\\infty[ \\text{ by:}\\\\f(x) = e^{-x}\\ln(1+e^x) \\quad \\text{and} \\quad g(x) = 2x\\ln(x) - \\dfrac{1}{x}`,
      question: `f(\\ln 2) = \\;?`,
      choices: [
        { id: 'A', latex: `f(\\ln 2) = -2\\ln 3`, isCorrect: false },
        { id: 'B', latex: `f(\\ln 2) = \\ln(\\sqrt{3})`, isCorrect: true },
        { id: 'C', latex: `f(\\ln 2) = 3\\ln(\\sqrt{2})`, isCorrect: false },
        { id: 'D', latex: `f(\\ln 2) = -3\\ln(\\sqrt{2})`, isCorrect: false },
      ],
      solution: [
        {
          label: `Substitute $x = \\ln 2$: use $e^{\\ln 2} = 2$ and $e^{-\\ln 2} = 1/2$`,
          latex: `f(\\ln 2) = e^{-\\ln 2} \\cdot \\ln(1 + e^{\\ln 2}) = \\frac{1}{2} \\cdot \\ln(1 + 2)`,
        },
        {
          label: `Simplify: $\\frac{1}{2}\\ln 3 = \\ln(3^{1/2}) = \\ln\\sqrt{3}$`,
          latex: `f(\\ln 2) = \\frac{1}{2}\\ln 3 = \\boxed{\\ln\\sqrt{3} \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['functions', 'logarithm', 'exponential', 'evaluation'],
      relatedTips: ['function-evaluation-2025'],
    },

    // ── EXERCISE 7 — Q7.2 ───────────────────────────────────
    {
      number: 10,
      exercise: 7,
      topic: 'Function Analysis',
      statement: `\\text{With } g(x) = 2x\\ln(x) - \\dfrac{1}{x} \\text{ defined on } ]0, +\\infty[`,
      question: `\\text{Which statement about } g \\text{ is correct?}`,
      choices: [
        { id: 'A', latex: `g \\text{ has exactly one inflection point}`, isCorrect: true },
        { id: 'B', latex: `g \\text{ has two distinct inflection points}`, isCorrect: false },
        { id: 'C', latex: `g \\text{ is convex on } ]0, 1]`, isCorrect: false },
        { id: 'D', latex: `g \\text{ is concave on } [2, +\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $g'(x)$ using the product rule on $2x\\ln x$ and the derivative of $-1/x$`,
          latex: `g'(x) = 2\\ln x + 2x \\cdot \\frac{1}{x} + \\frac{1}{x^2} = 2\\ln x + 2 + \\frac{1}{x^2}`,
        },
        {
          label: `Compute $g''(x)$ to study convexity`,
          latex: `g''(x) = \\frac{2}{x} - \\frac{2}{x^3} = \\frac{2(x^2 - 1)}{x^3}`,
        },
        {
          label: `Find where $g''(x) = 0$: $x^2 - 1 = 0 \\implies x = 1$ (only $x > 0$)`,
          latex: `g''(x) = 0 \\iff x^2 = 1 \\iff x = 1`,
        },
        {
          label: `Sign analysis: for $x \\in\\, ]0,1[$, $x^2 < 1$ so $g'' < 0$ (concave). For $x > 1$, $x^2 > 1$ so $g'' > 0$ (convex). Sign change at $x = 1$`,
          latex: `g'' < 0 \\text{ on } ]0,1[ \\;(\\text{concave}) \\qquad g'' > 0 \\text{ on } ]1,+\\infty[ \\;(\\text{convex})`,
        },
        {
          label: `$g''$ changes sign at $x = 1$: exactly one inflection point. C is false (concave, not convex on $]0,1]$). D is false (convex, not concave on $[2,+\\infty[$)`,
          latex: `\\boxed{g \\text{ has exactly one inflection point at } x = 1 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['functions', 'inflection-point', 'second-derivative', 'convexity'],
      relatedTips: ['inflection-point-2025'],
    },
  ],
}
