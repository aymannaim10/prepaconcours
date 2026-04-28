// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2024
// Mathematics Paper — July 20, 2024 — Duration 30 min
// ============================================================

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D' | 'E'
  latex: string
  isCorrect: boolean
}

export interface SolutionStep {
  label: string   // plain-text description shown to the reader ("what we do in this step")
  latex: string   // the actual math computation in LaTeX
}

export type QuestionVisualization =
  | {
      type: 'affine-recurrence'
      a: number
      b: number
      u0: number
      steps?: number
      title?: string
      description?: string
    }
  | {
      type: 'function-plot'
      /** Plot preset — each one is a hand-tuned chart for a specific exam function */
      preset: 'f-2024-ex7' | 'cubic-2019-ex15' | 'h-2022-q10'
      title?: string
      description?: string
    }
  | {
      type: 'locus-2d'
      /** Locus preset — a hand-tuned 2D geometric figure for a specific exam question */
      preset: 'lines-2023-ex6' | 'hyperbola-2023-ex7'
      title?: string
      description?: string
    }
  | {
      type: 'circle-locus'
      /** Parameterized circle locus: |z - z0| = R, drawn in the complex plane */
      cx: number
      cy: number
      R: number
      title?: string
      description?: string
    }
  | {
      type: 'binomial-pmf'
      /** Binomial distribution X ~ B(n, p). Highlights the asked value k. */
      n: number
      p: number
      k: number
      title?: string
      description?: string
    }
  | {
      type: 'venn-2-sets'
      /** Two-set Venn diagram with the four region probabilities. */
      pA: number
      pB: number
      pAandB: number
      labelA?: string
      labelB?: string
      title?: string
      description?: string
    }
  | {
      type: 'prob-breakdown'
      /** Generic decomposition: P(event) = Σ items[i].value. */
      total: { label: string; value: string }
      items: { label: string; value: number; color?: string; explanation?: string }[]
      title?: string
      description?: string
    }
  | {
      type: 'urn-tree'
      /** Bag illustration + probability tree for 2 sequential draws. */
      balls: { color: string; label: string; count: number }[]
      withReplacement: boolean
      /** Which leaves of the tree should be highlighted as favorable outcomes */
      favorable: 'same-color' | { type: 'second-is'; label: string }
      title?: string
      description?: string
    }
  | {
      type: 'binomial-arrangements'
      /** n positions with k successes — shows C(n,k) arrangements explicitly. */
      n: number
      p: number
      k: number
      successLabel: string
      failureLabel: string
      successIcon?: string
      failureIcon?: string
      title?: string
      description?: string
    }

export interface ExamQuestion {
  number: number
  exercise: number
  topic: string
  statement: string
  question: string
  choices: Choice[]
  solution: SolutionStep[]
  difficulty: 'easy' | 'medium' | 'hard'
  tags: string[]
  relatedTips?: string[]
  visualization?: QuestionVisualization
  /** When true, the detailed correction is hidden behind a premium gate. Overrides ExamData.correctionLocked when set. */
  correctionLocked?: boolean
}

export interface ExamData {
  year: number
  date: string
  duration: number
  categoryId: string
  title: string
  instructions: string
  questions: ExamQuestion[]
  /** When true, the detailed correction of every question in this exam is hidden behind a premium gate. Per-question `correctionLocked` overrides this. */
  correctionLocked?: boolean
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
      question: `u_n = \\dfrac{1 + 5 + 5^{2} + \\cdots + 5^{n}}{1 - 5^{n}} \\;,\\quad \\forall n \\in \\mathbb{N}^*`,
      choices: [
        { id: 'A', latex: `\\lim u_n = -1`, isCorrect: false },
        { id: 'B', latex: `\\lim u_n = -\\dfrac{25}{4}`, isCorrect: false },
        { id: 'C', latex: `\\lim u_n = -\\dfrac{5}{4}`, isCorrect: true },
        { id: 'D', latex: `\\lim u_n = -\\dfrac{1}{4}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify the geometric series in the numerator: ratio $q = 5$, first term $1$, total of $n+1$ terms — apply the finite sum formula`,
          latex: `1+5+\\cdots+5^{n} = \\dfrac{5^{n+1}-1}{5-1} = \\dfrac{5^{n+1}-1}{4}`,
        },
        {
          label: `Substitute back into $u_n$ to get an explicit fraction in terms of $5^{n}$`,
          latex: `u_n = \\dfrac{5^{n+1}-1}{4(1-5^{n})} = \\dfrac{5 \\cdot 5^{n} - 1}{4(1 - 5^{n})}`,
        },
        {
          label: `Divide numerator and denominator by $5^{n}$ (the dominant power) so that $5^{-n} \\to 0$ and the limit appears`,
          latex: `u_n = \\dfrac{5 - 5^{-n}}{4(5^{-n} - 1)} \\xrightarrow[n\\to+\\infty]{} \\dfrac{5 - 0}{4(0 - 1)} = \\boxed{-\\dfrac{5}{4}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'limit', 'geometric'],
      relatedTips: ['geometric-sum'],
    },

    // ── EXERCISE 2 ──────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Sequences',
      statement: `(v_n) \\text{ is a sequence with positive nonzero terms defined by:}`,
      question: `\\ln(5^{n} \\times v_n) = \\dfrac{1}{2}\\,n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(v_n) \\text{ is arithmetic with ratio } \\dfrac{e}{5}`, isCorrect: false },
        { id: 'B', latex: `(v_n) \\text{ is geometric with ratio } \\dfrac{e}{5}`, isCorrect: false },
        { id: 'C', latex: `(v_n) \\text{ is arithmetic with ratio } \\dfrac{\\sqrt{e}}{5}`, isCorrect: false },
        { id: 'D', latex: `(v_n) \\text{ is geometric with ratio } \\dfrac{\\sqrt{e}}{5}`, isCorrect: true },
      ],
      solution: [
        {
          label: `Expand the log of a product using $\\ln(ab) = \\ln a + \\ln b$, then isolate $\\ln(v_n)$`,
          latex: `\\ln(5^{n} \\cdot v_n) = \\tfrac{n}{2} \\implies n\\ln 5 + \\ln v_n = \\tfrac{n}{2}`,
        },
        {
          label: `Isolate $\\ln(v_n)$ and factor out $n$ to reveal the linear-in-$n$ structure`,
          latex: `\\ln v_n = \\tfrac{n}{2} - n\\ln 5 = n\\!\\left(\\tfrac{1}{2} - \\ln 5\\right)`,
        },
        {
          label: `Exponentiate both sides: $\\ln(v_n) = na$ implies $v_n = (e^a)^n$, which is a geometric sequence`,
          latex: `v_n = e^{n(\\frac{1}{2}-\\ln 5)} = \\left(e^{\\frac{1}{2}-\\ln 5}\\right)^n = \\left(\\dfrac{\\sqrt{e}}{5}\\right)^{\\!n}`,
        },
        {
          label: `Conclude: geometric sequence with ratio $\\frac{\\sqrt{e}}{5}$. Verify: $v_0 = 1$ and $\\frac{v_{n+1}}{v_n} = \\frac{\\sqrt{e}}{5}$ = constant`,
          latex: `\\boxed{(v_n) \\text{ is geometric with ratio } \\dfrac{\\sqrt{e}}{5}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['sequences', 'logarithm', 'geometric', 'arithmetic'],
      relatedTips: ['suite-type'],
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
        {
          label: `Take the conjugate of $z$: $\\arg(\\bar{z}) = -\\arg(z)$, so flip the sign of the imaginary exponent`,
          latex: `z = -e^{i\\frac{5\\pi}{12}} \\implies \\bar{z} = -e^{-i\\frac{5\\pi}{12}}`,
        },
        {
          label: `Write $1+i$ in exponential form: modulus $\\sqrt{2}$, argument $\\frac{\\pi}{4}$`,
          latex: `1+i = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}`,
        },
        {
          label: `Compute $z' = (1+i)\\cdot\\bar{z}$ by multiplying exponential forms: moduli multiply, arguments add`,
          latex: `z' = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}} \\cdot \\left(-e^{-i\\frac{5\\pi}{12}}\\right) = -\\sqrt{2}\\,e^{i\\left(\\frac{\\pi}{4}-\\frac{5\\pi}{12}\\right)} = -\\sqrt{2}\\,e^{-i\\frac{\\pi}{6}}`,
        },
        {
          label: `Absorb the minus sign: $-e^{i\\theta} = e^{i(\\theta+\\pi)}$, then simplify the argument`,
          latex: `-\\sqrt{2}\\,e^{-i\\frac{\\pi}{6}} = \\sqrt{2}\\,e^{i\\left(\\pi - \\frac{\\pi}{6}\\right)} = \\sqrt{2}\\,e^{i\\frac{5\\pi}{6}}`,
        },
        {
          label: `Read off the argument: $\\frac{5\\pi}{6}$ is already in $(-\\pi, \\pi]$; its equivalent modulo $2\\pi$ is $-\\frac{7\\pi}{6}$`,
          latex: `\\boxed{\\arg(z') = \\tfrac{5\\pi}{6} \\equiv -\\tfrac{7\\pi}{6} \\pmod{2\\pi}}`,
        },
      ],
      difficulty: 'hard',
      tags: ['complex numbers', 'argument', 'conjugate', 'trigonometry'],
      relatedTips: ['complex-arg'],
    },

    // ── EXERCISE 4 ──────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Complex Numbers',
      statement: `\\text{Let } A \\text{ and } B \\text{ be the points with affixes } z_A = 4+i \\text{ and } z_B = e^{-i\\frac{\\pi}{2}} = -i.\\\\ \\text{Let } A' \\text{ be the image of } A \\text{ by the rotation with center } B \\text{ and angle } \\tfrac{\\pi}{2}.`,
      question: `z_{A'} = \\;?`,
      choices: [
        { id: 'A', latex: `z_{A'} = 2 - 3i`, isCorrect: false },
        { id: 'B', latex: `z_{A'} = 2 + 3i`, isCorrect: false },
        { id: 'C', latex: `z_{A'} = -2 - 3i`, isCorrect: false },
        { id: 'D', latex: `z_{A'} = -2 + 3i`, isCorrect: true },
      ],
      solution: [
        {
          label: `Find the affix of the rotation center $B$ by converting from exponential form`,
          latex: `z_B = e^{-i\\frac{\\pi}{2}} = \\cos\\!\\left(-\\tfrac{\\pi}{2}\\right)+i\\sin\\!\\left(-\\tfrac{\\pi}{2}\\right) = -i`,
        },
        {
          label: `Write the rotation formula: $z_{A'} - z_B = e^{i\\theta}(z_A - z_B)$, here $\\theta = \\frac{\\pi}{2}$`,
          latex: `z_{A'} - z_B = e^{i\\frac{\\pi}{2}}\\cdot(z_A - z_B)`,
        },
        {
          label: `Compute the vector $z_A - z_B$ — always subtract the center $B$ from $A$ before multiplying`,
          latex: `z_A - z_B = (4+i)-(-i) = 4+2i`,
        },
        {
          label: `Multiply by $e^{i\\pi/2} = i$ and expand using $i^2 = -1$`,
          latex: `i\\cdot(4+2i) = 4i + 2i^2 = 4i - 2 = -2+4i`,
        },
        {
          label: `Add back the center $z_B$ to recover $z_{A'}$ — don't forget to re-add it after the rotation`,
          latex: `\\boxed{z_{A'} = z_B + (-2+4i) = -i + (-2+4i) = -2+3i}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex numbers', 'rotation', 'geometry'],
      relatedTips: ['rotation'],
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
        {
          label: `Write $\\tan(x) = \\frac{\\sin x}{\\cos x}$ to recognize a $\\frac{u'}{u}$ integral ($u = \\cos x$, $u' = -\\sin x$), antiderivative is $-\\ln|\\cos x|$`,
          latex: `I = \\int_{\\pi/6}^{\\pi/3} \\frac{\\sin x}{\\cos x}\\,dx = \\Big[-\\ln|\\cos x|\\Big]_{\\pi/6}^{\\pi/3}`,
        },
        {
          label: `Plug in the bounds: $\\cos(\\pi/3) = \\frac{1}{2}$ and $\\cos(\\pi/6) = \\frac{\\sqrt{3}}{2}$`,
          latex: `-\\ln\\!\\left(\\tfrac{1}{2}\\right) + \\ln\\!\\left(\\tfrac{\\sqrt{3}}{2}\\right) = \\ln 2 + \\ln\\tfrac{\\sqrt{3}}{2}`,
        },
        {
          label: `Combine using $\\ln(a) + \\ln(b) = \\ln(ab)$ and simplify`,
          latex: `= \\ln\\!\\left(2 \\cdot \\tfrac{\\sqrt{3}}{2}\\right) = \\boxed{\\ln\\sqrt{3}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integrals', 'trigonometry', 'logarithm'],
      relatedTips: ['trig-integrals'],
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
        {
          label: `Write $\\cot(x) = \\frac{\\cos x}{\\sin x}$ — this is $\\frac{u'}{u}$ with $u = \\sin x$, so the antiderivative is $\\ln|\\sin x|$`,
          latex: `J = \\int_{\\pi/6}^{\\pi/3} \\cot x\\,dx = \\Big[\\ln|\\sin x|\\Big]_{\\pi/6}^{\\pi/3}`,
        },
        {
          label: `Plug in the bounds: $\\sin(\\pi/3) = \\frac{\\sqrt{3}}{2}$, $\\sin(\\pi/6) = \\frac{1}{2}$, then use $\\ln(a) - \\ln(b) = \\ln(a/b)$`,
          latex: `= \\ln\\tfrac{\\sqrt{3}}{2} - \\ln\\tfrac{1}{2} = \\ln\\!\\left(\\tfrac{\\sqrt{3}/2}{1/2}\\right) = \\ln\\sqrt{3}`,
        },
        {
          label: `Compare with $I$: both equal $\\ln(\\sqrt{3})$, so $I = J$. Their sum $I+J = 2\\ln(\\sqrt{3}) = \\ln 3$. The symmetry of $[\\pi/6, \\pi/3]$ around $\\pi/4$ explains why $I = J$`,
          latex: `\\boxed{I = J = \\ln\\sqrt{3} \\implies I + J = \\ln 3}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integrals', 'trigonometry'],
      relatedTips: ['complementary-substitution', 'trig-integrals'],
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
        {
          label: `Apply the antiderivative of $\\ln(x)$: $\\int\\ln(x)\\,dx = x\\ln(x) - x + C$ (derive by parts: $u=\\ln x$, $v'=1$)`,
          latex: `I(\\lambda) = \\Big[x\\ln x - x\\Big]_{\\lambda}^{2} = (2\\ln 2 - 2)-(\\lambda\\ln\\lambda - \\lambda)`,
        },
        {
          label: `Take the limit of each term as $\\lambda \\to 0^+$: $\\lambda\\ln(\\lambda) \\to 0$ by growth comparison, and $\\lambda \\to 0$`,
          latex: `\\lim_{\\lambda\\to 0^+}\\lambda\\ln\\lambda = 0 \\quad \\text{and} \\quad \\lim_{\\lambda\\to 0^+}\\lambda = 0`,
        },
        {
          label: `Conclude: the $\\lambda$-terms vanish, leaving only the value at $2$. Rewrite $2\\ln(2)$ as $\\ln(4)$`,
          latex: `\\boxed{\\lim_{\\lambda\\to 0^+} I(\\lambda) = 2\\ln 2 - 2 = \\ln 4 - 2}`,
        },
      ],
      difficulty: 'hard',
      tags: ['integrals', 'improper integral', 'logarithm', 'limit'],
      relatedTips: ['improper-integral'],
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
        {
          label: `Test for a horizontal asymptote: compute $\\lim_{x\\to+\\infty} f(x)$. If finite $\\ell$ → asymptote $y=\\ell$; if infinite → none`,
          latex: `\\lim_{x\\to +\\infty} f(x) = +\\infty \\implies \\text{no horizontal asymptote}`,
        },
        {
          label: `Test for a vertical asymptote: $f$ is continuous at $0$ with $f(0)=1$ finite → no vertical asymptote`,
          latex: `f(0) = 1 \\in \\mathbb{R} \\implies \\text{no vertical asymptote}`,
        },
        {
          label: `Test for a parabolic branch: compute $\\lim \\frac{f(x)}{x}$. Result $0$ → direction $Ox$; $\\pm\\infty$ → direction $Oy$; finite $a\\neq 0$ → oblique asymptote`,
          latex: `\\dfrac{f(x)}{x} = \\dfrac{e^x}{x} + \\ln x - e -1 \\xrightarrow[x\\to+\\infty]{} +\\infty`,
        },
        {
          label: `Conclude: $\\lim f(x)/x = +\\infty$ → parabolic branch in the direction of $Oy$. The $e^x$ term drives this result`,
          latex: `\\boxed{(C_f) \\text{ has a parabolic branch in the direction of } Oy}`,
        },
      ],
      difficulty: 'hard',
      tags: ['functions', 'asymptote', 'parabolic branch'],
      relatedTips: ['parabolic-branch'],
    },

    // ── EXERCISE 7 – PART 2 ──────────────────────────────────
    {
      number: 9,
      exercise: 7,
      topic: 'Function Analysis',
      statement: ``,
      question: `\\text{(Continuation of Question 8)}`,
      choices: [
        { id: 'A', latex: `f'(x) = e^x + \\ln(x) + e \\;,\\; \\forall x > 0`, isCorrect: false },
        { id: 'B', latex: `(C_f) \\text{ admits a horizontal half-tangent on the right of } 0`, isCorrect: false },
        { id: 'C', latex: `(C_f) \\text{ admits a vertical half-tangent on the right of } 0 \\text{ pointing downward}`, isCorrect: true },
        { id: 'D', latex: `(C_f) \\text{ admits a vertical half-tangent on the right of } 0 \\text{ pointing upward}`, isCorrect: false },
      ],
      solution: [
        {
          label: `First check option A by computing $f'(x)$. Differentiate $f(x)=e^x + x[\\ln(x)-e-1]$ using the product rule on the second term`,
          latex: `f'(x) = e^x + [\\ln(x)-e-1] + x\\cdot\\tfrac{1}{x} = e^x + \\ln(x) - e \\quad(\\text{not } +e) \\implies \\text{A is false}`,
        },
        {
          label: `Compute the difference quotient at $0^+$ to determine the nature of the right half-tangent`,
          latex: `\\lim_{x\\to 0^+} \\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to 0^+} \\left(\\dfrac{e^x-1}{x} + \\ln x - e - 1\\right)`,
        },
        {
          label: `Evaluate each term: $(e^x-1)/x \\to 1$; $\\ln(x) \\to -\\infty$; the constants $-e-1$ are negligible compared to $-\\infty$`,
          latex: `= 1 + (-\\infty) - e - 1 = -\\infty`,
        },
        {
          label: `Interpret: difference quotient $\\to -\\infty$ means a vertical half-tangent. The sign $-\\infty$ gives the direction: DOWNWARD`,
          latex: `f'(0^+) = -\\infty \\implies \\text{vertical half-tangent pointing } \\mathbf{downward}`,
        },
        {
          label: `Rule without exception: $f'(a^+) \\to +\\infty$ ⟹ upward; $f'(a^+) \\to -\\infty$ ⟹ downward. Correct answer: C`,
          latex: `\\boxed{\\text{Vertical half-tangent pointing downward at } x=0}`,
        },
      ],
      difficulty: 'hard',
      tags: ['functions', 'derivative', 'tangent'],
      relatedTips: ['half-tangent', 'product-derivative'],
    },

    // ── EXERCISE 7 – PART 3 ──────────────────────────────────
    {
      number: 10,
      exercise: 7,
      topic: 'Function Analysis',
      statement: ``,
      question: `\\text{(Continuation of Question 8)}`,
      choices: [
        { id: 'A', latex: `\\text{Le point d'abscisse } 1 \\text{ est un point d'inflexion pour la courbe } (C_f)`, isCorrect: false },
        { id: 'B', latex: `f \\text{ est concave sur } [0\\,;1] \\text{ et convexe sur } [1\\,;+\\infty[`, isCorrect: false },
        { id: 'C', latex: `f([0\\,;+\\infty[) = [-1\\,;+\\infty[`, isCorrect: true },
        { id: 'D', latex: `f([0\\,;+\\infty[) = [1\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `Compute $f''(x)$ to study convexity: differentiate $f'(x) = e^x + \\ln(x) - e$ term by term`,
          latex: `f''(x) = e^x + \\dfrac{1}{x} > 0 \\quad \\forall x>0 \\implies f \\text{ is strictly convex on } ]0,+\\infty[`,
        },
        {
          label: `Since $f''>0$ everywhere on $]0,+\\infty[$, there is no sign change — so no inflection point (A false) and $f$ is not concave on $[0,1]$ (B false)`,
          latex: `f''(x)>0 \\;\\forall x>0 \\implies \\text{no inflection point, } f \\text{ is convex on the whole domain}`,
        },
        {
          label: `Find the minimum: $f'(1) = e + \\ln(1) - e = 0$ and $f''(1) = e+1 > 0$ confirm a global minimum at $x=1$`,
          latex: `f'(1) = e + 0 - e = 0 \\quad \\text{and} \\quad f''(1) = e+1 > 0 \\implies x=1 \\text{ is a global minimum}`,
        },
        {
          label: `Evaluate $f(1)$ to find the minimum value: expand $x[\\ln(x)-e-1]$ at $x=1$`,
          latex: `f(1) = e + 1\\cdot[\\ln 1 - e - 1] = e + (0-e-1) = -1`,
        },
        {
          label: `Check boundary values: $f(0)=1$ (given), global min $f(1)=-1$, $\\lim_{x\\to+\\infty} f(x) = +\\infty$. By continuity, $f$ takes all values $\\geq -1$`,
          latex: `\\boxed{f([0,+\\infty[) = [-1,+\\infty[}`,
        },
      ],
      difficulty: 'hard',
      tags: ['functions', 'convexity', 'range', 'minimum'],
      relatedTips: ['function-range', 'convexity-no-inflection'],
      visualization: {
        type: 'function-plot',
        preset: 'f-2024-ex7',
        title: 'Graph of f(x) = eˣ + x(ln x − e − 1)',
        description: 'Interactive plot — hover to read values, toggle derivatives, and watch the minimum appear at x = 1.',
      },
    },
  ],
}

import { EXAM_2025_REAL } from './exam-2025'
import { EXAM_2023_REAL } from './exam-2023'
import { EXAM_2022_REAL } from './exam-2022'
import { EXAM_2021_REAL } from './exam-2021'
import { EXAM_2020_REAL } from './exam-2020'
import { EXAM_2019_REAL } from './exam-2019'
import { EXAM_2018_REAL } from './exam-2018'

export const EXAM_DATA_MAP: Record<string, ExamData> = {
  '2018-real-exam': EXAM_2018_REAL,
  '2019-real-exam': EXAM_2019_REAL,
  '2020-real-exam': EXAM_2020_REAL,
  '2021-real-exam': EXAM_2021_REAL,
  '2022-real-exam': EXAM_2022_REAL,
  '2023-real-exam': EXAM_2023_REAL,
  '2024-real-exam': EXAM_2024_REAL,
  '2025-real-exam': EXAM_2025_REAL,
}

export function getExamData(year: number, categoryId: string): ExamData | undefined {
  return EXAM_DATA_MAP[`${year}-${categoryId}`]
}
