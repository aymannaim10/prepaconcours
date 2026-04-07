import type { ExamData } from './exam-data'

export const REVISION_2024: ExamData = {
  year: 2024,
  date: 'Revision Series 2024',
  duration: 40,
  categoryId: 'revision-series',
  title: `Revision Series — Exam-Style Practice 2024`,
  instructions: `These exercises mirror the real exam format. Practice under real conditions: 40 min, no calculator.`,
  questions: [
    {
      number: 1, exercise: 1, topic: 'Sequences', difficulty: 'medium',
      tags: ['sequences', 'geometric', 'limit'],
      statement: `\\text{Let the sequence } (w_n) \\text{ be defined by:}`,
      question: `w_n = \\dfrac{1+3+3^2+\\cdots+3^n}{2 \\cdot 3^n - 1} \\;,\\quad \\forall n \\in \\mathbb{N}^*`,
      choices: [
        { id: 'A', latex: `\\lim w_n = \\dfrac{1}{2}`, isCorrect: false },
        { id: 'B', latex: `\\lim w_n = \\dfrac{3}{4}`, isCorrect: true },
        { id: 'C', latex: `\\lim w_n = \\dfrac{3}{2}`, isCorrect: false },
        { id: 'D', latex: `\\lim w_n = 1`, isCorrect: false },
      ],
      solution: [
        `\\text{Numerator: } \\sum_{k=0}^n 3^k = \\dfrac{3^{n+1}-1}{3-1} = \\dfrac{3^{n+1}-1}{2}`,
        `w_n = \\dfrac{3^{n+1}-1}{2(2 \\cdot 3^n-1)} = \\dfrac{3 \\cdot 3^n - 1}{4 \\cdot 3^n - 2}`,
        `\\text{Divide by } 3^n : \\quad \\dfrac{3 - 3^{-n}}{4 - 2 \\cdot 3^{-n}} \\xrightarrow[n\\to+\\infty]{}`,
        `\\boxed{\\lim w_n = \\dfrac{3}{4}}`,
      ],
    },
    {
      number: 2, exercise: 2, topic: 'Sequences', difficulty: 'medium',
      tags: ['sequences', 'logarithm'],
      statement: `(t_n) \\text{ is defined by:}`,
      question: `\\ln(2^n \\cdot t_n) = 3n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(t_n) \\text{ is geometric with ratio } \\dfrac{e^3}{2}`, isCorrect: true },
        { id: 'B', latex: `(t_n) \\text{ is arithmetic with ratio } \\dfrac{e^3}{2}`, isCorrect: false },
        { id: 'C', latex: `(t_n) \\text{ is geometric with ratio } \\dfrac{e^2}{3}`, isCorrect: false },
        { id: 'D', latex: `(t_n) \\text{ is arithmetic with ratio } 3-\\ln 2`, isCorrect: false },
      ],
      solution: [
        `n\\ln 2 + \\ln t_n = 3n \\implies \\ln t_n = 3n - n\\ln 2 = n(3-\\ln 2)`,
        `t_n = e^{n(3-\\ln 2)} = \\left(e^{3-\\ln 2}\\right)^n = \\left(\\dfrac{e^3}{e^{\\ln 2}}\\right)^{\\!n}`,
        `\\boxed{t_n = \\left(\\dfrac{e^3}{2}\\right)^{\\!n} \\text{ — geometric with ratio } \\dfrac{e^3}{2}}`,
      ],
    },
    {
      number: 3, exercise: 3, topic: 'Complex Numbers', difficulty: 'hard',
      tags: ['complex numbers', 'argument'],
      statement: `\\text{Consider:}`,
      question: `z = e^{i\\frac{\\pi}{3}} \\;,\\quad w = (1-i)\\bar{z} \\quad \\text{Find } \\arg(w)`,
      choices: [
        { id: 'A', latex: `\\arg(w) = \\dfrac{\\pi}{12} \\;[2\\pi]`, isCorrect: false },
        { id: 'B', latex: `\\arg(w) = -\\dfrac{\\pi}{12} \\;[2\\pi]`, isCorrect: false },
        { id: 'C', latex: `\\arg(w) = -\\dfrac{7\\pi}{12} \\;[2\\pi]`, isCorrect: true },
        { id: 'D', latex: `\\arg(w) = \\dfrac{7\\pi}{12} \\;[2\\pi]`, isCorrect: false },
      ],
      solution: [
        `\\bar{z} = e^{-i\\frac{\\pi}{3}}`,
        `1-i = \\sqrt{2}\\,e^{-i\\frac{\\pi}{4}}`,
        `w = \\sqrt{2}\\,e^{-i\\frac{\\pi}{4}} \\cdot e^{-i\\frac{\\pi}{3}} = \\sqrt{2}\\,e^{-i(\\frac{\\pi}{4}+\\frac{\\pi}{3})}`,
        `\\boxed{\\arg(w) = -\\tfrac{3\\pi+4\\pi}{12} = -\\tfrac{7\\pi}{12}}`,
      ],
    },
    {
      number: 4, exercise: 4, topic: 'Complex Numbers', difficulty: 'medium',
      tags: ['complex numbers', 'rotation'],
      statement: `z_A = 3-2i,\\; z_B = 1+i,\\; A' = R(B, -\\tfrac{\\pi}{2})(A)`,
      question: `z_{A'} = \\;?`,
      choices: [
        { id: 'A', latex: `z_{A'} = 4 + 4i`, isCorrect: false },
        { id: 'B', latex: `z_{A'} = -2 + 3i`, isCorrect: false },
        { id: 'C', latex: `z_{A'} = -2 - i`, isCorrect: true },
        { id: 'D', latex: `z_{A'} = 4 + 3i`, isCorrect: false },
      ],
      solution: [
        `z_{A'}-z_B = e^{-i\\frac{\\pi}{2}}(z_A-z_B)`,
        `z_A-z_B = (3-2i)-(1+i) = 2-3i`,
        `e^{-i\\frac{\\pi}{2}} = -i \\implies -i(2-3i) = -2i+3i^2 = -3-2i`,
        `\\boxed{z_{A'} = (1+i)+(-3-2i) = -2-i}`,
      ],
    },
    {
      number: 5, exercise: 5, topic: 'Integrals', difficulty: 'medium',
      tags: ['integrals', 'trigonometry'],
      statement: `\\text{Compute:}`,
      question: `K = \\int_0^{\\frac{\\pi}{4}} \\tan(x)\\,dx`,
      choices: [
        { id: 'A', latex: `K = \\ln 2`, isCorrect: false },
        { id: 'B', latex: `K = \\dfrac{1}{2}\\ln 2`, isCorrect: true },
        { id: 'C', latex: `K = 2\\ln 2`, isCorrect: false },
        { id: 'D', latex: `K = -\\ln 2`, isCorrect: false },
      ],
      solution: [
        `K = \\Big[-\\ln|\\cos x|\\Big]_0^{\\pi/4}`,
        `= -\\ln\\!\\left(\\cos\\tfrac{\\pi}{4}\\right) + \\ln(\\cos 0)`,
        `= -\\ln\\tfrac{\\sqrt{2}}{2} + 0 = \\ln\\tfrac{2}{\\sqrt{2}} = \\ln\\sqrt{2}`,
        `\\boxed{K = \\tfrac{1}{2}\\ln 2}`,
      ],
    },
    {
      number: 6, exercise: 6, topic: 'Integrals', difficulty: 'hard',
      tags: ['integrals', 'improper'],
      statement: `\\text{For } \\mu \\in\\,]0,1[\\, \\text{ we define:}`,
      question: `J(\\mu) = \\int_\\mu^1 \\ln(x)\\,dx \\quad \\lim_{\\mu \\to 0^+} J(\\mu) = \\;?`,
      choices: [
        { id: 'A', latex: `\\lim J(\\mu) = -1`, isCorrect: true },
        { id: 'B', latex: `\\lim J(\\mu) = 0`, isCorrect: false },
        { id: 'C', latex: `\\lim J(\\mu) = 1`, isCorrect: false },
        { id: 'D', latex: `\\lim J(\\mu) = -\\infty`, isCorrect: false },
      ],
      solution: [
        `J(\\mu) = \\Big[x\\ln x - x\\Big]_\\mu^1 = (1 \\cdot 0 - 1)-(\\mu\\ln\\mu - \\mu)`,
        `= -1 - \\mu\\ln\\mu + \\mu`,
        `\\lim_{\\mu\\to 0^+} \\mu\\ln\\mu = 0 \\quad \\text{and} \\quad \\lim \\mu = 0`,
        `\\boxed{\\lim_{\\mu\\to 0^+} J(\\mu) = -1}`,
      ],
    },
    {
      number: 7, exercise: 7, topic: 'Function Analysis', difficulty: 'hard',
      tags: ['functions', 'parabolic branch'],
      statement: `\\text{Let } g(x) = x\\,e^x - 2x + 1 \\text{ on } \\mathbb{R}`,
      question: `\\text{Behavior of } (C_g) \\text{ as } x \\to +\\infty \\text{:}`,
      choices: [
        { id: 'A', latex: `\\text{Oblique asymptote } y = -2x+1`, isCorrect: false },
        { id: 'B', latex: `\\text{Horizontal asymptote } y = 1`, isCorrect: false },
        { id: 'C', latex: `\\text{Parabolic branch in direction } Ox`, isCorrect: false },
        { id: 'D', latex: `\\text{Parabolic branch in direction } Oy`, isCorrect: true },
      ],
      solution: [
        `\\dfrac{g(x)}{x} = e^x - 2 + \\dfrac{1}{x}`,
        `\\lim_{x\\to+\\infty} \\dfrac{g(x)}{x} = +\\infty \\quad \\text{since } e^x \\text{ dominates}`,
        `\\boxed{(C_g) \\text{ has a parabolic branch in the direction of } Oy}`,
      ],
    },
    {
      number: 8, exercise: 8, topic: 'Function Analysis', difficulty: 'hard',
      tags: ['functions', 'convexity', 'range'],
      statement: `h(x) = e^x + x(\\ln x + 1 - e) \\text{ on } ]0,+\\infty[,\\; h(0)=1`,
      question: `h'(x)=e^x+\\ln x+2-e,\\; h''(x)=e^x+\\tfrac{1}{x}>0 \\quad h(]0,+\\infty[) = \\;?`,
      choices: [
        { id: 'A', latex: `h(]0,+\\infty[) = [1,+\\infty[`, isCorrect: false },
        { id: 'B', latex: `h(]0,+\\infty[) = ]0,+\\infty[`, isCorrect: false },
        { id: 'C', latex: `h(]0,+\\infty[) = [2-e,+\\infty[`, isCorrect: true },
        { id: 'D', latex: `h(]0,+\\infty[) = \\mathbb{R}`, isCorrect: false },
      ],
      solution: [
        `h'' > 0 \\implies h' \\text{ is strictly increasing}`,
        `h'(1) = e+0+2-e = 2 > 0 \\quad \\text{There exists } x_0 < 1 \\text{ such that } h'(x_0)=0`,
        `h(1) = e + 1\\cdot(0+1-e) = 1 \\quad \\text{and} \\quad h(x_0) = 2-e \\text{ (minimum)}`,
        `\\boxed{h(]0,+\\infty[) = [2-e,+\\infty[}`,
      ],
    },
  ],
}

export function getRevisionData(year: number): ExamData | undefined {
  if (year === 2024) return REVISION_2024
  return undefined
}
