import type { ExamData } from './exam-data'

export const REVISION_2025: ExamData = {
  year: 2025,
  date: 'Revision Series 2025',
  duration: 40,
  categoryId: 'revision-series',
  title: `Revision Series — Exam-Style Practice 2025`,
  instructions: `These exercises mirror the real 2025 exam format. Practice at a guided pace: 40 min for 8 questions (~5 min each). Note: the real exam is faster — 10 questions in 30 min (~3 min each). Use the extra time here to study the detailed solutions carefully.`,
  questions: [
    // ── Q1: Complex Numbers — Modulus & argument ────────────
    {
      number: 1, exercise: 1, topic: 'Complex Numbers', difficulty: 'medium',
      tags: ['complex-numbers', 'modulus', 'argument', 'exponential-form'],
      relatedTips: ['complex-equation-2025'],
      statement: `\\text{Let } z = \\dfrac{1-i\\sqrt{3}}{1+i}`,
      question: `\\text{Write } z \\text{ in exponential form.}`,
      choices: [
        { id: 'A', latex: `z = \\sqrt{2}\\,e^{-i\\frac{7\\pi}{12}}`, isCorrect: true },
        { id: 'B', latex: `z = \\sqrt{2}\\,e^{i\\frac{7\\pi}{12}}`, isCorrect: false },
        { id: 'C', latex: `z = 2\\,e^{-i\\frac{7\\pi}{12}}`, isCorrect: false },
        { id: 'D', latex: `z = \\sqrt{2}\\,e^{-i\\frac{5\\pi}{12}}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Write numerator and denominator in exponential form separately`,
          latex: `1-i\\sqrt{3}:\\; |\\cdot| = \\sqrt{1+3} = 2,\\; \\arg = -\\frac{\\pi}{3} \\implies 2\\,e^{-i\\frac{\\pi}{3}}`,
        },
        {
          label: `Denominator: $1+i = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}$`,
          latex: `z = \\frac{2\\,e^{-i\\frac{\\pi}{3}}}{\\sqrt{2}\\,e^{i\\frac{\\pi}{4}}} = \\frac{2}{\\sqrt{2}}\\,e^{-i\\left(\\frac{\\pi}{3}+\\frac{\\pi}{4}\\right)} = \\sqrt{2}\\,e^{-i\\frac{7\\pi}{12}}`,
        },
        {
          label: `Conclude: the argument sum is $\\frac{4\\pi+3\\pi}{12} = \\frac{7\\pi}{12}$`,
          latex: `\\boxed{z = \\sqrt{2}\\,e^{-i\\frac{7\\pi}{12}} \\implies \\text{Answer: A}}`,
        },
      ],
    },
    // ── Q2: Complex Numbers — Rotation + cube ───────────────
    {
      number: 2, exercise: 2, topic: 'Complex Numbers', difficulty: 'hard',
      tags: ['complex-numbers', 'rotation', 'powers'],
      relatedTips: ['rotation-2025'],
      statement: `r \\text{ is the rotation with center } O \\text{ and angle } \\theta = \\frac{\\pi}{3}.\\quad z_A = 2.\\quad B = r(A).`,
      question: `\\text{Find } (z_B)^3.`,
      choices: [
        { id: 'A', latex: `(z_B)^3 = 8`, isCorrect: false },
        { id: 'B', latex: `(z_B)^3 = -8`, isCorrect: true },
        { id: 'C', latex: `(z_B)^3 = 8i`, isCorrect: false },
        { id: 'D', latex: `(z_B)^3 = -8i`, isCorrect: false },
      ],
      solution: [
        {
          label: `Use the power shortcut: $(z_B)^3 = (e^{i\\pi/3})^3 \\cdot z_A^3$`,
          latex: `(z_B)^3 = e^{i\\pi} \\cdot 2^3 = (-1) \\cdot 8 = -8`,
        },
        {
          label: `Verify: $e^{i\\pi} = -1$ and $z_A^3 = 8$`,
          latex: `\\boxed{(z_B)^3 = -8 \\implies \\text{Answer: B}}`,
        },
      ],
    },
    // ── Q3: Sequences — Geometric from logarithm ────────────
    {
      number: 3, exercise: 3, topic: 'Sequences', difficulty: 'medium',
      tags: ['sequences', 'logarithm', 'geometric'],
      relatedTips: ['auxiliary-sequence-2025'],
      statement: `(t_n) \\text{ is a sequence with positive terms defined by:}`,
      question: `\\ln(3^{n} \\cdot t_n) = 2n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(t_n) \\text{ is arithmetic with difference } 2 - \\ln 3`, isCorrect: false },
        { id: 'B', latex: `(t_n) \\text{ is geometric with ratio } \\dfrac{e^2}{3}`, isCorrect: true },
        { id: 'C', latex: `(t_n) \\text{ is geometric with ratio } 3e^2`, isCorrect: false },
        { id: 'D', latex: `(t_n) \\text{ is arithmetic with difference } \\dfrac{e^2}{3}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Expand the log using $\\ln(ab) = \\ln a + \\ln b$, then isolate $\\ln(t_n)$`,
          latex: `n\\ln 3 + \\ln t_n = 2n \\implies \\ln t_n = n(2 - \\ln 3)`,
        },
        {
          label: `Exponentiate: $\\ln(t_n) = an$ means $t_n = (e^a)^n$ — geometric with ratio $e^a$`,
          latex: `t_n = e^{n(2-\\ln 3)} = \\left(\\frac{e^2}{e^{\\ln 3}}\\right)^{\\!n} = \\left(\\frac{e^2}{3}\\right)^{\\!n} \\implies \\boxed{\\text{Answer: B}}`,
        },
      ],
    },
    // ── Q4: Sequences — Oscillating convergence ─────────────
    {
      number: 4, exercise: 4, topic: 'Sequences', difficulty: 'medium',
      tags: ['sequences', 'recursive', 'limit', 'oscillating'],
      relatedTips: ['auxiliary-sequence-2025'],
      statement: `\\text{The sequence } (u_n) \\text{ is defined by } u_0 = 3 \\text{ and } u_{n+1} = -\\dfrac{1}{2}u_n + 3 \\text{ for all } n \\in \\mathbb{N}.`,
      question: `\\text{Which statement about } (u_n) \\text{ is correct?}`,
      choices: [
        { id: 'A', latex: `(u_n) \\text{ is increasing}`, isCorrect: false },
        { id: 'B', latex: `(u_n) \\text{ is decreasing}`, isCorrect: false },
        { id: 'C', latex: `\\displaystyle\\lim_{n\\to+\\infty} u_n = 2`, isCorrect: true },
        { id: 'D', latex: `(u_n) \\text{ diverges}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Shortcut: for an affine recurrence $u_{n+1} = a u_n + b$ with $|a| < 1$, the sequence always converges to the fixed point $L = \\tfrac{b}{1-a}$. Here $a = -\\tfrac{1}{2},\\, b = 3$`,
          latex: `L = \\frac{3}{1 - (-\\tfrac{1}{2})} = \\frac{3}{3/2} = 2 \\implies \\boxed{\\lim u_n = 2 \\;\\text{— Answer: C}}`,
        },
      ],
      visualization: {
        type: 'affine-recurrence',
        a: -0.5,
        b: 3,
        u0: 3,
        steps: 14,
        title: 'Affine recurrence — interactive plot',
        description: `Drag the sliders to explore how the ratio $a$ controls the behavior of $(u_n)$. Rule: $|a|<1 \\Rightarrow u_n \\to L=\\tfrac{b}{1-a}$; if $a<0$, the sequence oscillates around $L$.`,
      },
    },
    // ── Q5: Function Analysis — Evaluate f(ln k) ────────────
    {
      number: 5, exercise: 5, topic: 'Function Analysis', difficulty: 'medium',
      tags: ['functions', 'logarithm', 'exponential', 'evaluation'],
      relatedTips: ['function-evaluation-2025'],
      statement: `\\text{The function } h \\text{ is defined on } \\mathbb{R} \\text{ by } h(x) = e^{-2x}\\,\\ln(1+e^{2x}).`,
      question: `h(\\ln 3) = \\;?`,
      choices: [
        { id: 'A', latex: `h(\\ln 3) = \\dfrac{\\ln 10}{9}`, isCorrect: true },
        { id: 'B', latex: `h(\\ln 3) = \\ln\\sqrt{10}`, isCorrect: false },
        { id: 'C', latex: `h(\\ln 3) = \\dfrac{\\ln 9}{10}`, isCorrect: false },
        { id: 'D', latex: `h(\\ln 3) = 9\\ln 10`, isCorrect: false },
      ],
      solution: [
        {
          label: `Use $e^{2\\ln 3} = 9$ (so $e^{-2\\ln 3} = 1/9$), then substitute directly`,
          latex: `h(\\ln 3) = \\tfrac{1}{9}\\,\\ln(1+9) = \\boxed{\\tfrac{\\ln 10}{9} \\;\\text{— Answer: A}}`,
        },
      ],
    },
    // ── Q6: Integrals — Identify the primitive ──────────────
    {
      number: 6, exercise: 6, topic: 'Integrals', difficulty: 'medium',
      tags: ['integrals', 'primitive', 'exponential', 'product-rule'],
      relatedTips: ['derivative-verification-2025'],
      statement: `\\text{Consider the functions defined on } \\mathbb{R} \\text{ by:}\\\\f(x) = (6x-1)\\,e^{3x},\\quad u(x) = 2x-1,\\quad v(x) = e^{3x}.`,
      question: `[u(x)\\cdot v(x)]' = \\;?`,
      choices: [
        { id: 'A', latex: `[u(x)\\cdot v(x)]' = f(x)`, isCorrect: true },
        { id: 'B', latex: `[u(x)\\cdot v(x)]' = 3f(x)`, isCorrect: false },
        { id: 'C', latex: `[u(x)\\cdot v(x)]' = -f(x)`, isCorrect: false },
        { id: 'D', latex: `[u(x)\\cdot v(x)]' = (6x+5)\\,e^{3x}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Product rule $[uv]' = u'v + uv'$, then factor $e^{3x}$`,
          latex: `[u v]' = 2e^{3x} + (2x-1)\\cdot 3e^{3x} = e^{3x}(2 + 6x - 3) = (6x-1)e^{3x} = f(x) \\implies \\boxed{\\text{Answer: A}}`,
        },
      ],
    },
    // ── Q7: Integrals — Compute the definite integral ───────
    {
      number: 7, exercise: 7, topic: 'Integrals', difficulty: 'medium',
      tags: ['integrals', 'definite-integral', 'exponential'],
      relatedTips: ['definite-integral-2025'],
      statement: `\\text{Using the result of Q6: } [u(x)\\cdot v(x)]' = f(x), \\text{ i.e. } [(2x-1)e^{3x}]' = (6x-1)e^{3x},\\\\ \\text{so } F(x) = (2x-1)e^{3x} \\text{ is a primitive of } f \\text{ on } \\mathbb{R}.`,
      question: `\\int_0^1 (6x-1)\\,e^{3x}\\,dx = \\;?`,
      choices: [
        { id: 'A', latex: `\\int_0^1 (6x-1)\\,e^{3x}\\,dx = e^3 + 1`, isCorrect: true },
        { id: 'B', latex: `\\int_0^1 (6x-1)\\,e^{3x}\\,dx = e^3 - 1`, isCorrect: false },
        { id: 'C', latex: `\\int_0^1 (6x-1)\\,e^{3x}\\,dx = e^3`, isCorrect: false },
        { id: 'D', latex: `\\int_0^1 (6x-1)\\,e^{3x}\\,dx = 2e^3`, isCorrect: false },
      ],
      solution: [
        {
          label: `Primitive from Q6: $F(x) = (2x-1)e^{3x}$. Evaluate $F(1) - F(0)$`,
          latex: `\\bigl[(2x-1)e^{3x}\\bigr]_0^1 = e^3 - (-1) = e^3 + 1 \\implies \\boxed{\\text{Answer: A}}`,
        },
      ],
    },
    // ── Q8: Function Analysis — Convexity & inflection ──────
    {
      number: 8, exercise: 8, topic: 'Function Analysis', difficulty: 'hard',
      tags: ['functions', 'inflection-point', 'second-derivative', 'convexity'],
      relatedTips: ['inflection-point-2025'],
      statement: `\\text{The function } f \\text{ is defined on } ]0, +\\infty[ \\text{ by } f(x) = x\\ln(x) - \\dfrac{x^2}{2}.`,
      question: `\\text{Which statement about } f \\text{ is correct?}`,
      choices: [
        { id: 'A', latex: `f \\text{ has an inflection point at } x = 1`, isCorrect: true },
        { id: 'B', latex: `f \\text{ is convex on } ]0, +\\infty[`, isCorrect: false },
        { id: 'C', latex: `f \\text{ is concave on } ]0, +\\infty[`, isCorrect: false },
        { id: 'D', latex: `f \\text{ has two inflection points}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $f''$ directly: $f'(x) = \\ln x + 1 - x$, then $f''(x) = \\tfrac{1}{x} - 1 = \\tfrac{1-x}{x}$. It changes sign only at $x=1$`,
          latex: `f''(x) = \\frac{1-x}{x} \\;\\;\\text{changes sign at } x=1 \\implies \\boxed{\\text{unique inflection at } x=1 \\;\\text{— Answer: A}}`,
        },
      ],
    },
  ],
}
