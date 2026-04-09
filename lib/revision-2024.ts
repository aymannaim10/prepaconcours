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
      statement: `z_A = 3-2i,\\; z_B = 1+i,\\; A' = R(B, -\\tfrac{\\pi}{2})(A)`,
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
      tags: ['functions', 'parabolic branch'],
      relatedTips: ['parabolic-branch'],
      statement: `\\text{Let } g(x) = x\\,e^x - 2x + 1 \\text{ on } \\mathbb{R}`,
      question: `\\text{Behavior of } (C_g) \\text{ as } x \\to +\\infty \\text{:}`,
      choices: [
        { id: 'A', latex: `\\text{Oblique asymptote } y = -2x+1`, isCorrect: false },
        { id: 'B', latex: `\\text{Horizontal asymptote } y = 1`, isCorrect: false },
        { id: 'C', latex: `\\text{Parabolic branch in direction } Ox`, isCorrect: false },
        { id: 'D', latex: `\\text{Parabolic branch in direction } Oy`, isCorrect: true },
      ],
      solution: [
        {
          label: `Test for a parabolic branch: compute $\\lim \\frac{g(x)}{x}$. Result $0$ → direction $Ox$; $\\pm\\infty$ → direction $Oy$; finite $a\\neq 0$ → oblique asymptote`,
          latex: `\\dfrac{g(x)}{x} = \\dfrac{x\\,e^x - 2x + 1}{x} = e^x - 2 + \\dfrac{1}{x}`,
        },
        {
          label: `Evaluate the limit: $e^x \\to +\\infty$ dominates all other terms, so $g(x)/x \\to +\\infty$`,
          latex: `\\lim_{x\\to+\\infty} \\dfrac{g(x)}{x} = +\\infty \\quad \\text{(}e^x\\text{ dominates every polynomial)}`,
        },
        {
          label: `Conclude: $\\lim g(x)/x = +\\infty$ → parabolic branch in the direction of $Oy$ — answer D`,
          latex: `\\boxed{(C_g) \\text{ has a parabolic branch in the direction of } Oy}`,
        },
      ],
    },
    {
      number: 8, exercise: 8, topic: 'Function Analysis', difficulty: 'hard',
      tags: ['functions', 'convexity', 'range'],
      relatedTips: ['function-range', 'convexity-no-inflection'],
      statement: `h(x) = e^x + x(\\ln x + 1 - e) \\text{ on } ]0,+\\infty[,\\; h(0)=1`,
      question: `h'(x)=e^x+\\ln x+2-e,\\; h''(x)=e^x+\\tfrac{1}{x}>0 \\quad h(]0,+\\infty[) = \\;?`,
      choices: [
        { id: 'A', latex: `h(]0,+\\infty[) = [1,+\\infty[`, isCorrect: false },
        { id: 'B', latex: `h(]0,+\\infty[) = ]0,+\\infty[`, isCorrect: false },
        { id: 'C', latex: `h(]0,+\\infty[) = [2-e,+\\infty[`, isCorrect: true },
        { id: 'D', latex: `h(]0,+\\infty[) = \\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Since $h''(x) = e^x + \\frac{1}{x} > 0$ for all $x > 0$, $h'$ is strictly increasing — there is at most one zero`,
          latex: `h''(x) = e^x + \\tfrac{1}{x} > 0 \\implies h' \\text{ is strictly increasing on } ]0,+\\infty[`,
        },
        {
          label: `Evaluate $h'(1)$ to locate the minimum: $h'(1) = e + 0 + 2 - e = 2 > 0$, so the zero $x_0$ must lie to the LEFT of $1$`,
          latex: `h'(1) = e+\\ln 1+2-e = 2 > 0 \\implies \\exists\\, x_0 < 1 \\text{ such that } h'(x_0) = 0`,
        },
        {
          label: `Find the minimum value $h(x_0) = 2-e$ using the given formula, and check $h(1) = 1$ as a reference point`,
          latex: `h(x_0) = 2-e \\text{ (global min)} \\quad h(1) = e + 1\\cdot(0+1-e) = 1`,
        },
        {
          label: `Conclude the range: global minimum is $2-e$, $h$ is continuous and tends to $+\\infty$ → the image is $[2-e, +\\infty[$ — answer C`,
          latex: `\\boxed{h(]0,+\\infty[) = [2-e,+\\infty[}`,
        },
      ],
    },
  ],
}

export function getRevisionData(year: number): ExamData | undefined {
  if (year === 2024) return REVISION_2024
  return undefined
}
