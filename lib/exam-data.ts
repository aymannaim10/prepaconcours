// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2024
// Mathematics Paper — July 20, 2024 — Duration 30 min
// ============================================================

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D'
  latex: string
  isCorrect: boolean
}

export interface ExamQuestion {
  number: number
  exercise: number
  topic: string
  statement: string
  question: string
  choices: Choice[]
  solution: string[]
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
}

export interface ExamData {
  year: number
  date: string
  duration: number
  categoryId: string
  title: string
  instructions: string
  questions: ExamQuestion[]
}

// ─────────────────────────────────────────────────────────────
export const EXAM_2024_REAL: ExamData = {
  year: 2024,
  date: 'July 20, 2024',
  duration: 30,
  categoryId: 'real-exam',
  title: `Common Entrance Exam for Faculties of Medicine, Dental Medicine, Pharmacy — English Track`,
  instructions: `For each question, choose among the four proposed answers – THE UNIQUE CORRECT ANSWER by indicating on the answer sheet the letter corresponding to your answer. The use of calculators is strictly forbidden.`,
  questions: [
    // ── EXERCISE 1 ──────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Sequences',
      statement: `\\text{Consider the numerical sequence } (u_n) \\text{ defined by:}`,
      question: `u_n = \\dfrac{1 + 5 + 5^2 + \\cdots + 5^n}{1 - 5^n} \\;,\\quad \\forall n \\in \\mathbb{N}^*`,
      choices: [
        { id: 'A', latex: `\\lim u_n = -1`, isCorrect: false },
        { id: 'B', latex: `\\lim u_n = -\\dfrac{25}{4}`, isCorrect: false },
        { id: 'C', latex: `\\lim u_n = -\\dfrac{5}{4}`, isCorrect: true },
        { id: 'D', latex: `\\lim u_n = -\\dfrac{1}{4}`, isCorrect: false },
      ],
      solution: [
        `\\text{The numerator is a geometric series with ratio 5:}`,
        `1+5+\\cdots+5^n = \\dfrac{5^{n+1}-1}{5-1} = \\dfrac{5^{n+1}-1}{4}`,
        `u_n = \\dfrac{5^{n+1}-1}{4(1-5^n)} = \\dfrac{5 \\cdot 5^n - 1}{4(1 - 5^n)}`,
        `\\text{Divide by } 5^n : \\quad u_n = \\dfrac{5 - 5^{-n}}{4(5^{-n} - 1)} \\xrightarrow[n\\to+\\infty]{} \\dfrac{5}{-4} = \\boxed{-\\dfrac{5}{4}}`,
      ],
      difficulty: 'medium',
      tags: ['sequences', 'limit', 'geometric'],
    },

    // ── EXERCISE 2 ──────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Sequences',
      statement: `(v_n) \\text{ is a sequence with positive nonzero terms defined by:}`,
      question: `\\ln(5^n \\times v_n) = \\dfrac{1}{2}\\,n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(v_n) \\text{ is arithmetic with ratio } \\dfrac{e}{5}`, isCorrect: false },
        { id: 'B', latex: `(v_n) \\text{ is geometric with ratio } \\dfrac{e}{5}`, isCorrect: false },
        { id: 'C', latex: `(v_n) \\text{ is arithmetic with ratio } \\dfrac{\\sqrt{e}}{5}`, isCorrect: false },
        { id: 'D', latex: `(v_n) \\text{ is geometric with ratio } \\dfrac{\\sqrt{e}}{5}`, isCorrect: true },
      ],
      solution: [
        `\\ln(5^n \\cdot v_n) = \\tfrac{n}{2} \\implies n\\ln 5 + \\ln v_n = \\tfrac{n}{2}`,
        `\\ln v_n = \\tfrac{n}{2} - n\\ln 5 = n\\!\\left(\\tfrac{1}{2} - \\ln 5\\right)`,
        `v_n = e^{n(\\frac{1}{2}-\\ln 5)} = \\left(e^{\\frac{1}{2}-\\ln 5}\\right)^n = \\left(\\dfrac{\\sqrt{e}}{5}\\right)^{\\!n}`,
        `\\boxed{\\text{Geometric sequence with ratio } \\dfrac{\\sqrt{e}}{5}}`,
      ],
      difficulty: 'medium',
      tags: ['sequences', 'logarithm', 'geometric', 'arithmetic'],
    },

    // ── EXERCISE 3 ──────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Complex Numbers',
      statement: `\\text{In the plane with a direct orthonormal frame } (O,\\vec{u},\\vec{v})`,
      question: `z = -e^{i\\frac{5\\pi}{12}} \\quad \\text{and} \\quad z' = (1+i)\\,\\bar{z} \\quad \\text{Find } \\arg(z')`,
      choices: [
        { id: 'A', latex: `\\arg(z') \\equiv -\\dfrac{7\\pi}{6} \\pmod{2\\pi}`, isCorrect: true },
        { id: 'B', latex: `\\arg(z') \\equiv -\\dfrac{\\pi}{6} \\pmod{2\\pi}`, isCorrect: false },
        { id: 'C', latex: `\\arg(z') \\equiv \\dfrac{\\pi}{6} \\pmod{2\\pi}`, isCorrect: false },
        { id: 'D', latex: `\\arg(z') \\equiv \\dfrac{7\\pi}{6} \\pmod{2\\pi}`, isCorrect: false },
      ],
      solution: [
        `z = -e^{i\\frac{5\\pi}{12}} \\implies \\bar{z} = -e^{-i\\frac{5\\pi}{12}}`,
        `1+i = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}`,
        `z' = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}} \\cdot (-e^{-i\\frac{5\\pi}{12}}) = -\\sqrt{2}\\,e^{i(\\frac{\\pi}{4}-\\frac{5\\pi}{12})}`,
        `= -\\sqrt{2}\\,e^{-i\\frac{\\pi}{6}} = \\sqrt{2}\\,e^{i(\\pi - \\frac{\\pi}{6})} = \\sqrt{2}\\,e^{i\\frac{5\\pi}{6}}`,
        `\\boxed{\\arg(z') = \\tfrac{5\\pi}{6} \\equiv -\\tfrac{7\\pi}{6} \\pmod{2\\pi}}`,
      ],
      difficulty: 'hard',
      tags: ['complex numbers', 'argument', 'conjugate', 'trigonometry'],
    },

    // ── EXERCISE 4 ──────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Complex Numbers',
      statement: `z_A = 4+i \\;,\\; z_B = e^{-i\\frac{\\pi}{2}} = -i \\;,\\; A' = R\\!\\left(B,\\tfrac{\\pi}{2}\\right)(A)`,
      question: `z_{A'} = \\;?`,
      choices: [
        { id: 'A', latex: `z_{A'} = 2 - 3i`, isCorrect: false },
        { id: 'B', latex: `z_{A'} = 2 + 3i`, isCorrect: false },
        { id: 'C', latex: `z_{A'} = -2 - 3i`, isCorrect: false },
        { id: 'D', latex: `z_{A'} = -2 + 3i`, isCorrect: true },
      ],
      solution: [
        `z_B = e^{-i\\frac{\\pi}{2}} = -i`,
        `z_{A'} - z_B = e^{i\\frac{\\pi}{2}}(z_A - z_B)`,
        `z_A - z_B = (4+i)-(-i) = 4+2i`,
        `e^{i\\frac{\\pi}{2}} = i \\implies i(4+2i) = 4i+2i^2 = -2+4i`,
        `\\boxed{z_{A'} = z_B + (-2+4i) = -i-2+4i = -2+3i}`,
      ],
      difficulty: 'medium',
      tags: ['complex numbers', 'rotation', 'geometry'],
    },

    // ── EXERCISE 5 – PART 1 ──────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Integrals',
      statement: `\\text{Consider the integrals:}`,
      question: `I = \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}} \\tan(x)\\,dx \\quad \\text{and} \\quad J = \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}} \\dfrac{1}{\\tan(x)}\\,dx`,
      choices: [
        { id: 'A', latex: `I = -\\ln(\\sqrt{3})`, isCorrect: false },
        { id: 'B', latex: `I = \\ln(\\sqrt{3})`, isCorrect: true },
        { id: 'C', latex: `I = -2\\ln(3)`, isCorrect: false },
        { id: 'D', latex: `I = 2\\ln(3)`, isCorrect: false },
      ],
      solution: [
        `I = \\int_{\\pi/6}^{\\pi/3} \\frac{\\sin x}{\\cos x}\\,dx = \\Big[-\\ln|\\cos x|\\Big]_{\\pi/6}^{\\pi/3}`,
        `= -\\ln\\!\\left(\\tfrac{1}{2}\\right) + \\ln\\!\\left(\\tfrac{\\sqrt{3}}{2}\\right)`,
        `= \\ln 2 + \\ln\\tfrac{\\sqrt{3}}{2} = \\ln\\!\\left(2 \\cdot \\tfrac{\\sqrt{3}}{2}\\right)`,
        `\\boxed{I = \\ln\\sqrt{3}}`,
      ],
      difficulty: 'medium',
      tags: ['integrals', 'trigonometry', 'logarithm'],
    },

    // ── EXERCISE 5 – PART 2 ──────────────────────────────────
    {
      number: 6,
      exercise: 5,
      topic: 'Integrals',
      statement: `\\text{With the same } I \\text{ and } J \\text{ (continued)}`,
      question: `\\text{Find the relationship between } I \\text{ and } J`,
      choices: [
        { id: 'A', latex: `I = J`, isCorrect: true },
        { id: 'B', latex: `I = -J`, isCorrect: false },
        { id: 'C', latex: `I = \\dfrac{1}{J}`, isCorrect: false },
        { id: 'D', latex: `I + J = \\ln(\\sqrt{3})`, isCorrect: false },
      ],
      solution: [
        `J = \\int_{\\pi/6}^{\\pi/3} \\cot x\\,dx = \\Big[\\ln|\\sin x|\\Big]_{\\pi/6}^{\\pi/3}`,
        `= \\ln\\tfrac{\\sqrt{3}}{2} - \\ln\\tfrac{1}{2} = \\ln\\!\\left(\\tfrac{\\sqrt{3}/2}{1/2}\\right) = \\ln\\sqrt{3}`,
        `\\boxed{I = J = \\ln\\sqrt{3}}`,
      ],
      difficulty: 'medium',
      tags: ['integrals', 'trigonometry'],
    },

    // ── EXERCISE 6 ──────────────────────────────────────────
    {
      number: 7,
      exercise: 6,
      topic: 'Improper Integrals',
      statement: `\\text{For } \\lambda \\in\\,]0\\,;\\,2[\\, \\text{ we define:}`,
      question: `I(\\lambda) = \\int_{\\lambda}^{2} \\ln(x)\\,dx \\quad \\text{Compute } \\lim_{\\lambda \\to 0^+} I(\\lambda)`,
      choices: [
        { id: 'A', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = -2 + \\ln 4`, isCorrect: true },
        { id: 'B', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = 2 - \\ln 4`, isCorrect: false },
        { id: 'C', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = 2 + 2\\ln 2`, isCorrect: false },
        { id: 'D', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = -2 - \\ln 4`, isCorrect: false },
      ],
      solution: [
        `I(\\lambda) = \\Big[x\\ln x - x\\Big]_{\\lambda}^{2} = (2\\ln 2 - 2)-(\\lambda\\ln\\lambda - \\lambda)`,
        `\\lim_{\\lambda\\to 0^+}\\lambda\\ln\\lambda = 0 \\quad \\text{and} \\quad \\lim_{\\lambda\\to 0^+}\\lambda = 0`,
        `\\boxed{\\lim_{\\lambda\\to 0^+} I(\\lambda) = 2\\ln 2 - 2 = \\ln 4 - 2}`,
      ],
      difficulty: 'hard',
      tags: ['integrals', 'improper integral', 'logarithm', 'limit'],
    },

    // ── EXERCISE 7 – PART 1 ──────────────────────────────────
    {
      number: 8,
      exercise: 7,
      topic: 'Function Analysis',
      statement: `\\text{Let } f \\text{ be defined on } [0,+\\infty[ \\text{ by } \\begin{cases} f(x) = e^x + x[\\ln(x)-e-1] & x>0 \\\\ f(0)= 1 \\end{cases}`,
      question: `\\text{Asymptotic behavior of } (C_f) \\text{:}`,
      choices: [
        { id: 'A', latex: `(C_f) \\text{ has a vertical asymptote}`, isCorrect: false },
        { id: 'B', latex: `(C_f) \\text{ has a horizontal asymptote}`, isCorrect: false },
        { id: 'C', latex: `(C_f) \\text{ has a parabolic branch in the direction of } Ox`, isCorrect: false },
        { id: 'D', latex: `(C_f) \\text{ has a parabolic branch in the direction of } Oy`, isCorrect: true },
      ],
      solution: [
        `\\lim_{x\\to +\\infty} f(x) = +\\infty \\quad \\text{(no horizontal asymptote)}`,
        `f \\text{ is continuous at } 0,\\; f(0)=1 \\quad \\text{(no vertical asymptote)}`,
        `\\dfrac{f(x)}{x} = \\dfrac{e^x}{x} + \\ln x - e -1 \\xrightarrow[x\\to+\\infty]{} +\\infty`,
        `\\boxed{(C_f) \\text{ has a parabolic branch in the direction of } Oy}`,
      ],
      difficulty: 'hard',
      tags: ['functions', 'asymptote', 'parabolic branch'],
    },

    // ── EXERCISE 7 – PART 2 ──────────────────────────────────
    {
      number: 9,
      exercise: 7,
      topic: 'Function Analysis',
      statement: `\\text{Given that } f'(x) = e^x + \\ln(x) - e \\;,\\; \\forall x > 0`,
      question: `\\text{Half-tangent on the right of } 0 \\text{ for } (C_f) \\text{:}`,
      choices: [
        { id: 'A', latex: `\\text{Horizontal half-tangent}`, isCorrect: false },
        { id: 'B', latex: `\\text{Vertical half-tangent pointing downward}`, isCorrect: false },
        { id: 'C', latex: `\\text{Vertical half-tangent pointing upward}`, isCorrect: true },
        { id: 'D', latex: `\\text{The point } x=1 \\text{ is an inflection point}`, isCorrect: false },
      ],
      solution: [
        `\\lim_{x\\to 0^+} \\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to 0^+} \\dfrac{e^x-1}{x} + \\ln x - e - 1`,
        `= 1 + (-\\infty) - e - 1 = -\\infty`,
        `\\text{The slope tends to } -\\infty \\text{, so it is a vertical tangent.}`,
        `\\text{Since } f(x) \\to f(0)=1 \\text{ from values > 1 near } 0^+`,
        `\\boxed{\\text{The curve has a vertical half-tangent pointing upward}}`,
      ],
      difficulty: 'hard',
      tags: ['functions', 'derivative', 'tangent'],
    },

    // ── EXERCISE 7 – PART 3 ──────────────────────────────────
    {
      number: 10,
      exercise: 7,
      topic: 'Function Analysis',
      statement: `\\text{(Continuation of Exercise 7)}`,
      question: `\\text{Determine the properties of } f \\text{:}`,
      choices: [
        { id: 'A', latex: `f \\text{ is concave on } [0,1] \\text{ and convex on } [1,+\\infty[`, isCorrect: false },
        { id: 'B', latex: `f([0,+\\infty[) = [-1,+\\infty[`, isCorrect: true },
        { id: 'C', latex: `f([0,+\\infty[) = [1,+\\infty[`, isCorrect: false },
        { id: 'D', latex: `f([0,+\\infty[) = ]-1,+\\infty[`, isCorrect: false },
      ],
      solution: [
        `f''(x) = e^x + \\dfrac{1}{x} > 0 \\;\\forall x>0 \\implies f \\text{ is convex (A is false)}`,
        `f'(1) = e + 0 - e = 0 \\quad \\text{and} \\quad f''(1) = e+1>0 \\implies x=1 \\text{ is a minimum}`,
        `f(1) = e + 1\\cdot[\\ln 1 - e - 1] = e + (0-e-1) = -1`,
        `f(0) = 1,\\; f(1)=-1,\\; \\lim_{x\\to+\\infty} f(x)=+\\infty`,
        `\\boxed{f([0,+\\infty[) = [-1,+\\infty[}`,
      ],
      difficulty: 'hard',
      tags: ['functions', 'convexity', 'range', 'minimum'],
    },
  ],
}

export const EXAM_DATA_MAP: Record<string, ExamData> = {
  '2024-real-exam': EXAM_2024_REAL,
}

export function getExamData(year: number, categoryId: string): ExamData | undefined {
  return EXAM_DATA_MAP[`${year}-${categoryId}`]
}
