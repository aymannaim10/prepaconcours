import type { ExamData } from './exam-data'

export const REVISION_2024: ExamData = {
  year: 2024,
  date: 'Revision Series 2024',
  duration: 40,
  categoryId: 'revision-series',
  title: `Revision Series — Exam-Style Practice 2024`,
  instructions: `These exercises mirror the real exam format. Practice at a guided pace: 40 min for 8 questions (~5 min each). Note: the real exam is faster — 10 questions in 30 min (~3 min each). Use the extra time here to study the detailed solutions carefully.`,
  questions: [
    {
      number: 1, exercise: 1, topic: 'Sequences', difficulty: 'medium',
      tags: ['sequences', 'geometric', 'limit'],
      relatedTips: ['geometric-sum'],
      statement: `\\text{Let the sequence } (w_n) \\text{ be defined by:}`,
      question: `w_n = \\dfrac{1+3+3^{2}+\\cdots+3^{n}}{2 \\cdot 3^{n} - 1} \\;,\\quad \\forall n \\in \\mathbb{N}^*`,
      choices: [
        { id: 'A', latex: `\\lim w_n = \\dfrac{1}{2}`, isCorrect: false },
        { id: 'B', latex: `\\lim w_n = \\dfrac{3}{4}`, isCorrect: true },
        { id: 'C', latex: `\\lim w_n = \\dfrac{3}{2}`, isCorrect: false },
        { id: 'D', latex: `\\lim w_n = 1`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify the geometric series in the numerator: ratio $q = 3$, $n+1$ terms from $k=0$ to $k=n$ — apply the finite sum formula`,
          latex: `\\text{Numerator: } \\sum_{k=0}^n 3^{k} = \\dfrac{3^{n+1}-1}{3-1} = \\dfrac{3^{n+1}-1}{2}`,
        },
        {
          label: `Substitute into $w_n$ and rewrite the numerator as $3 \\cdot 3^{n} - 1$ to make the dominant power explicit`,
          latex: `w_n = \\dfrac{3^{n+1}-1}{2(2 \\cdot 3^{n}-1)} = \\dfrac{3 \\cdot 3^{n} - 1}{4 \\cdot 3^{n} - 2}`,
        },
        {
          label: `Divide numerator and denominator by $3^{n}$ (the dominant power) so that $3^{-n} \\to 0$ and the limit appears`,
          latex: `\\dfrac{3 - 3^{-n}}{4 - 2 \\cdot 3^{-n}} \\xrightarrow[n\\to+\\infty]{} \\dfrac{3 - 0}{4 - 0}`,
        },
        {
          label: `Conclude: the limit equals 3/4 — answer B`,
          latex: `\\boxed{\\lim w_n = \\dfrac{3}{4}}`,
        },
      ],
    },
    {
      number: 2, exercise: 2, topic: 'Sequences', difficulty: 'medium',
      tags: ['sequences', 'logarithm'],
      relatedTips: ['suite-type'],
      statement: `(t_n) \\text{ is defined by:}`,
      question: `\\ln(2^{n} \\cdot t_n) = 3n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(t_n) \\text{ is geometric with ratio } \\dfrac{e^3}{2}`, isCorrect: true },
        { id: 'B', latex: `(t_n) \\text{ is arithmetic with ratio } \\dfrac{e^3}{2}`, isCorrect: false },
        { id: 'C', latex: `(t_n) \\text{ is geometric with ratio } \\dfrac{e^2}{3}`, isCorrect: false },
        { id: 'D', latex: `(t_n) \\text{ is arithmetic with ratio } 3-\\ln 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Expand the log of the product using $\\ln(ab) = \\ln a + \\ln b$, then isolate $\\ln(t_n)$ on the left`,
          latex: `n\\ln 2 + \\ln t_n = 3n \\implies \\ln t_n = 3n - n\\ln 2 = n(3-\\ln 2)`,
        },
        {
          label: `Exponentiate both sides: $\\ln(t_n) = na$ means $t_n = (e^a)^n$, the structure of a geometric sequence with ratio $e^a$`,
          latex: `t_n = e^{n(3-\\ln 2)} = \\left(e^{3-\\ln 2}\\right)^n = \\left(\\dfrac{e^3}{e^{\\ln 2}}\\right)^{\\!n}`,
        },
        {
          label: `Simplify using $e^{\\ln 2} = 2$, then state the conclusion: geometric sequence with constant ratio $\\frac{e^3}{2}$ — answer A`,
          latex: `\\boxed{t_n = \\left(\\dfrac{e^3}{2}\\right)^{\\!n} \\implies \\text{geometric with ratio } \\dfrac{e^3}{2}}`,
        },
      ],
    },
    {
      number: 3, exercise: 3, topic: 'Complex Numbers', difficulty: 'hard',
      tags: ['complex numbers', 'argument'],
      relatedTips: ['complex-arg'],
      statement: `\\text{Consider:}`,
      question: `z = e^{i\\frac{\\pi}{3}} \\;,\\quad w = (1-i)\\bar{z} \\quad \\text{Find } \\arg(w)`,
      choices: [
        { id: 'A', latex: `\\arg(w) = \\dfrac{\\pi}{12} \\;[2\\pi]`, isCorrect: false },
        { id: 'B', latex: `\\arg(w) = -\\dfrac{\\pi}{12} \\;[2\\pi]`, isCorrect: false },
        { id: 'C', latex: `\\arg(w) = -\\dfrac{7\\pi}{12} \\;[2\\pi]`, isCorrect: true },
        { id: 'D', latex: `\\arg(w) = \\dfrac{7\\pi}{12} \\;[2\\pi]`, isCorrect: false },
      ],
      solution: [
        {
          label: `Take the conjugate of $z$: since $z = e^{i\\pi/3}$, its conjugate is $\\bar{z} = e^{-i\\pi/3}$ (flip the sign of the exponent)`,
          latex: `\\bar{z} = e^{-i\\frac{\\pi}{3}}`,
        },
        {
          label: `Write $1-i$ in exponential form: modulus $= \\sqrt{2}$, argument $= -\\frac{\\pi}{4}$ (fourth quadrant, equal real and imaginary parts)`,
          latex: `1-i = \\sqrt{2}\\,e^{-i\\frac{\\pi}{4}}`,
        },
        {
          label: `Compute $w = (1-i)\\cdot\\bar{z}$ by multiplying exponential forms: moduli multiply, arguments add`,
          latex: `w = \\sqrt{2}\\,e^{-i\\frac{\\pi}{4}} \\cdot e^{-i\\frac{\\pi}{3}} = \\sqrt{2}\\,e^{-i\\left(\\frac{\\pi}{4}+\\frac{\\pi}{3}\\right)}`,
        },
        {
          label: `Add the arguments with a common denominator 12, then read off the result — answer C`,
          latex: `\\boxed{\\arg(w) = -\\left(\\tfrac{3\\pi}{12}+\\tfrac{4\\pi}{12}\\right) = -\\tfrac{7\\pi}{12}}`,
        },
      ],
    },
    {
      number: 4, exercise: 4, topic: 'Complex Numbers', difficulty: 'medium',
      tags: ['complex numbers', 'rotation'],
      relatedTips: ['rotation'],
      statement: `\\text{Let } A \\text{ and } B \\text{ be the points with affixes } z_A = 3-2i \\text{ and } z_B = 1+i.\\\\ \\text{Let } A' \\text{ be the image of } A \\text{ by the rotation with center } B \\text{ and angle } -\\tfrac{\\pi}{2}.`,
      question: `z_{A'} = \\;?`,
      choices: [
        { id: 'A', latex: `z_{A'} = 4 + 4i`, isCorrect: false },
        { id: 'B', latex: `z_{A'} = -2 + 3i`, isCorrect: false },
        { id: 'C', latex: `z_{A'} = -2 - i`, isCorrect: true },
        { id: 'D', latex: `z_{A'} = 4 + 3i`, isCorrect: false },
      ],
      solution: [
        {
          label: `Write the rotation formula: $z_{A'} - z_B = e^{i\\theta}(z_A - z_B)$, here $\\theta = -\\frac{\\pi}{2}$`,
          latex: `z_{A'}-z_B = e^{-i\\frac{\\pi}{2}}\\cdot(z_A-z_B)`,
        },
        {
          label: `Compute the vector $z_A - z_B$ — always subtract the center $B$ from $A$ before applying the rotation`,
          latex: `z_A-z_B = (3-2i)-(1+i) = 2-3i`,
        },
        {
          label: `Multiply by $e^{-i\\pi/2} = -i$ and expand using $i^2 = -1$`,
          latex: `-i\\cdot(2-3i) = -2i+3i^2 = -2i-3 = -3-2i`,
        },
        {
          label: `Add back the center $z_B$ to recover $z_{A'}$ — don't forget to re-add it after the rotation`,
          latex: `\\boxed{z_{A'} = (1+i)+(-3-2i) = -2-i}`,
        },
      ],
    },
    {
      number: 5, exercise: 5, topic: 'Integrals', difficulty: 'medium',
      tags: ['integrals', 'trigonometry'],
      relatedTips: ['trig-integrals'],
      statement: `\\text{Compute:}`,
      question: `K = \\int_0^{\\frac{\\pi}{4}} \\tan(x)\\,dx`,
      choices: [
        { id: 'A', latex: `K = \\ln 2`, isCorrect: false },
        { id: 'B', latex: `K = \\dfrac{1}{2}\\ln 2`, isCorrect: true },
        { id: 'C', latex: `K = 2\\ln 2`, isCorrect: false },
        { id: 'D', latex: `K = -\\ln 2`, isCorrect: false },
      ],
      solution: [
        {
          label: `Write $\\tan(x) = \\frac{\\sin x}{\\cos x}$ — this is a $\\frac{u'}{u}$ integral with $u = \\cos x$, so the antiderivative is $-\\ln|\\cos x|$`,
          latex: `K = \\int_0^{\\pi/4}\\tan(x)\\,dx = \\Big[-\\ln|\\cos x|\\Big]_0^{\\pi/4}`,
        },
        {
          label: `Plug in the bounds: $\\cos(\\pi/4) = \\frac{\\sqrt{2}}{2}$ and $\\cos(0) = 1$, so $\\ln(\\cos 0) = \\ln(1) = 0$`,
          latex: `= -\\ln\\!\\left(\\tfrac{\\sqrt{2}}{2}\\right) + \\ln(1) = -\\ln\\tfrac{\\sqrt{2}}{2}`,
        },
        {
          label: `Use $-\\ln(a/b) = \\ln(b/a)$ to flip the fraction, then simplify $2/\\sqrt{2} = \\sqrt{2}$`,
          latex: `= \\ln\\tfrac{2}{\\sqrt{2}} = \\ln\\sqrt{2}`,
        },
        {
          label: `Rewrite $\\ln(\\sqrt{2}) = \\ln(2^{1/2}) = \\frac{1}{2}\\ln(2)$ — answer B`,
          latex: `\\boxed{K = \\tfrac{1}{2}\\ln 2}`,
        },
      ],
    },
    {
      number: 6, exercise: 6, topic: 'Integrals', difficulty: 'hard',
      correctionLocked: true,
      tags: ['integrals', 'improper'],
      relatedTips: ['improper-integral'],
      statement: `\\text{For } \\mu \\in\\,]0,1[\\, \\text{ we define:}`,
      question: `J(\\mu) = \\int_\\mu^1 \\ln(x)\\,dx \\quad \\lim_{\\mu \\to 0^+} J(\\mu) = \\;?`,
      choices: [
        { id: 'A', latex: `\\lim J(\\mu) = -1`, isCorrect: true },
        { id: 'B', latex: `\\lim J(\\mu) = 0`, isCorrect: false },
        { id: 'C', latex: `\\lim J(\\mu) = 1`, isCorrect: false },
        { id: 'D', latex: `\\lim J(\\mu) = -\\infty`, isCorrect: false },
      ],
      solution: [
        {
          label: `Apply the antiderivative of $\\ln(x)$: $\\int\\ln(x)\\,dx = x\\ln(x) - x + C$, then evaluate between $\\mu$ and $1$`,
          latex: `J(\\mu) = \\Big[x\\ln x - x\\Big]_\\mu^1 = (1\\cdot\\ln 1 - 1)-(\\mu\\ln\\mu - \\mu)`,
        },
        {
          label: `Simplify: $\\ln(1) = 0$, so the upper bound gives $-1$; expand the lower bound terms`,
          latex: `= -1 - \\mu\\ln\\mu + \\mu`,
        },
        {
          label: `Take the limit of each term: $\\mu\\ln(\\mu) \\to 0$ by growth comparison ($\\ln$ crushes slower than $1/\\mu$), and $\\mu \\to 0$`,
          latex: `\\lim_{\\mu\\to 0^+} \\mu\\ln\\mu = 0 \\quad \\text{and} \\quad \\lim_{\\mu\\to 0^+}\\mu = 0`,
        },
        {
          label: `Conclude: the $\\mu$-terms vanish, leaving only $-1$ — answer A`,
          latex: `\\boxed{\\lim_{\\mu\\to 0^+} J(\\mu) = -1}`,
        },
      ],
    },
    {
      number: 7, exercise: 7, topic: 'Function Analysis', difficulty: 'hard',
      correctionLocked: true,
      tags: ['functions', 'derivative', 'tangent'],
      relatedTips: ['half-tangent', 'product-derivative'],
      statement: `\\text{Let } h \\text{ be the function defined on } ]0,+\\infty[ \\text{ by } h(x) = e^x + x\\bigl(2\\ln(x) - e - 2\\bigr),\\\\ \\text{and extended by continuity with } h(0)=1.`,
      question: `\\text{Nature of the half-tangent of } (C_h) \\text{ at } x=0^+\\text{:}`,
      choices: [
        { id: 'A', latex: `h'(x) = e^x + 2\\ln(x) + e \\;,\\; \\forall x > 0`, isCorrect: false },
        { id: 'B', latex: `(C_h) \\text{ admits a horizontal half-tangent on the right of } 0`, isCorrect: false },
        { id: 'C', latex: `(C_h) \\text{ admits a vertical half-tangent on the right of } 0 \\text{ pointing downward}`, isCorrect: true },
        { id: 'D', latex: `(C_h) \\text{ admits a vertical half-tangent on the right of } 0 \\text{ pointing upward}`, isCorrect: false },
      ],
      solution: [
        {
          label: `First check option A by computing $h'(x)$. Apply the product rule to the term $x\\cdot(2\\ln x - e - 2)$`,
          latex: `h'(x) = e^x + [2\\ln x - e - 2] + x\\cdot\\tfrac{2}{x} = e^x + 2\\ln x - e \\quad(\\text{not } +e) \\implies \\text{A is false}`,
        },
        {
          label: `Set up the difference quotient at $0^+$ to determine the nature of the right half-tangent`,
          latex: `\\lim_{x\\to 0^+} \\dfrac{h(x)-h(0)}{x} = \\lim_{x\\to 0^+}\\left(\\dfrac{e^x-1}{x} + 2\\ln x - e - 2\\right)`,
        },
        {
          label: `Evaluate each term: $(e^x-1)/x \\to 1$; $2\\ln(x) \\to -\\infty$ dominates the finite constants $-e-2$`,
          latex: `= 1 + (-\\infty) - e - 2 = -\\infty`,
        },
        {
          label: `Interpret: slope $\\to -\\infty$ means a vertical half-tangent; the sign $-\\infty$ gives the DOWNWARD direction`,
          latex: `h'(0^+) = -\\infty \\implies \\text{vertical half-tangent pointing } \\mathbf{downward}`,
        },
        {
          label: `Rule without exception: $h'(a^+) \\to +\\infty$ ⟹ upward; $h'(a^+) \\to -\\infty$ ⟹ downward. Correct answer: C`,
          latex: `\\boxed{\\text{Vertical half-tangent pointing downward at } x=0}`,
        },
      ],
    },
    {
      number: 8, exercise: 8, topic: 'Function Analysis', difficulty: 'hard',
      correctionLocked: true,
      tags: ['functions', 'convexity', 'range', 'minimum'],
      relatedTips: ['function-range', 'convexity-no-inflection'],
      statement: `\\text{Same function } h(x) = e^x + x\\bigl(2\\ln(x) - e - 2\\bigr) \\text{ on } [0,+\\infty[ \\text{ (with } h(0)=1\\text{).}`,
      question: `\\text{Convexity and range of } h \\text{ on } [0,+\\infty[\\text{:}`,
      choices: [
        { id: 'A', latex: `\\text{The point of abscissa } 1 \\text{ is an inflection point of } (C_h)`, isCorrect: false },
        { id: 'B', latex: `h \\text{ is concave on } [0\\,;1] \\text{ and convex on } [1\\,;+\\infty[`, isCorrect: false },
        { id: 'C', latex: `h([0\\,;+\\infty[) = [-2\\,;+\\infty[`, isCorrect: true },
        { id: 'D', latex: `h([0\\,;+\\infty[) = [1\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $h''(x)$ to study convexity: differentiate $h'(x) = e^x + 2\\ln(x) - e$ term by term`,
          latex: `h''(x) = e^x + \\dfrac{2}{x} > 0 \\quad \\forall x>0 \\implies h \\text{ is strictly convex on } ]0,+\\infty[`,
        },
        {
          label: `Since $h''>0$ everywhere on $]0,+\\infty[$, there is no sign change — so no inflection point (A false) and $h$ is not concave on $[0,1]$ (B false)`,
          latex: `h''(x)>0 \\;\\forall x>0 \\implies \\text{no inflection point; } h \\text{ is convex on the whole domain}`,
        },
        {
          label: `Find the minimum: $h'(1) = e + 2\\ln(1) - e = 0$ and $h''(1) = e+2 > 0$ confirm a global minimum at $x=1$`,
          latex: `h'(1) = e + 0 - e = 0 \\quad \\text{and} \\quad h''(1) = e+2 > 0 \\implies x=1 \\text{ is a global minimum}`,
        },
        {
          label: `Evaluate $h(1)$ to find the minimum value: expand $x\\bigl(2\\ln(x)-e-2\\bigr)$ at $x=1$`,
          latex: `h(1) = e + 1\\cdot[2\\ln 1 - e - 2] = e + (0-e-2) = -2`,
        },
        {
          label: `Assemble the table of variations for $h$ on $[0,+\\infty[$: $h'(0^+)=-\\infty$, $h'(1)=0$, $h'(+\\infty)=+\\infty$ — so $h$ decreases on $[0,1]$ and increases on $[1,+\\infty[$`,
          latex: `\\begin{array}{|c|ccccc|}\\hline x & 0 & & 1 & & +\\infty \\\\\\hline h'(x) & -\\infty & - & 0 & + & +\\infty \\\\\\hline & 1 & & & & +\\infty \\\\ h(x) & & \\searrow & & \\nearrow & \\\\ & & & -2 & & \\\\\\hline\\end{array}`,
        },
        {
          label: `Read the range off the table: boundary values $1$ and $+\\infty$, global minimum $-2$. By continuity + IVT, $h$ takes every value $\\geq -2$`,
          latex: `\\boxed{h([0,+\\infty[) = [-2,+\\infty[}`,
        },
      ],
    },
  ],
}

import { REVISION_2025 } from './revision-2025'

export function getRevisionData(year: number): ExamData | undefined {
  if (year === 2024) return REVISION_2024
  if (year === 2025) return REVISION_2025
  return undefined
}
