// ============================================================
// Real Exam Data – UM6SS Medical Entrance Exam 2018
// Mathematics Paper — Concours d'accès Juillet 2018, Faculté de Médecine
// 10 QCM (Q21-Q30), 30 min
// ============================================================

import type { ExamData } from './exam-data'

export const EXAM_2018_REAL: ExamData = {
  year: 2018,
  date: 'July 2018',
  duration: 30,
  categoryId: 'real-exam',
  correctionLocked: true,
  title: `Common Entrance Exam — Faculty of Medicine, UM6SS Casablanca — July 2018`,
  instructions: `The mathematics paper contains 10 multiple-choice questions (Q21 through Q30), each offering 5 options (A through E) with a single correct answer. Mark your choice with a "X" inside the box on the answer sheet. The use of calculators is strictly forbidden. The use of correction fluid (Blanco) is strongly discouraged.`,
  questions: [
    // ── Q1 (Q21) ────────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Function Analysis',
      statement: `\\text{Let } f(x) = \\dfrac{\\ln(2 - |x|)}{x^{2} - 9}.`,
      question: `\\text{The domain of definition } D_f \\text{ is:}`,
      choices: [
        { id: 'A', latex: `]-2\\,;2[`, isCorrect: true },
        { id: 'B', latex: `\\mathbb{R} \\setminus \\{-3\\,;3\\}`, isCorrect: false },
        { id: 'C', latex: `\\mathbb{R} \\setminus \\{-3\\,;-2\\,;2\\,;3\\}`, isCorrect: false },
        { id: 'D', latex: `]-3\\,;-2[\\,\\cup\\,]2\\,;3[`, isCorrect: false },
        { id: 'E', latex: `]-\\infty\\,;-3[\\,\\cup\\,]3\\,;+\\infty[`, isCorrect: false },
      ],
      solution: [
        {
          label: `For $\\ln(2 - |x|)$ to be defined: need $2 - |x| > 0 \\iff |x| < 2 \\iff -2 < x < 2$`,
          latex: `\\ln(2 - |x|) \\text{ defined} \\iff -2 < x < 2`,
        },
        {
          label: `For the denominator to be nonzero: $x^{2} - 9 \\neq 0 \\iff x \\neq \\pm 3$`,
          latex: `x^{2} - 9 \\neq 0 \\iff x \\neq \\pm 3`,
        },
        {
          label: `Intersect: the interval $]-2\\,;2[$ does not contain $\\pm 3$, so the second condition is automatically satisfied`,
          latex: `\\boxed{D_f = \\,]-2\\,;2[ \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['domain', 'logarithm', 'absolute-value'],
      relatedTips: ['log-domain'],
    },

    // ── Q2 (Q22) ────────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Equations',
      statement: `\\text{Consider the equation } (E):\\ \\bigl(e^{2x} - 4e^{x} + 3\\bigr)\\,\\ln(x-1) = 0.`,
      question: `\\text{The solution set of } (E) \\text{ is:}`,
      choices: [
        { id: 'A', latex: `\\{2\\,;\\ln 3\\}`, isCorrect: true },
        { id: 'B', latex: `\\{2\\,;\\ln 3\\,;0\\}`, isCorrect: false },
        { id: 'C', latex: `\\{1\\,;2\\,;\\ln 3\\}`, isCorrect: false },
        { id: 'D', latex: `\\{0\\,;2\\}`, isCorrect: false },
        { id: 'E', latex: `\\{0\\,;\\ln 3\\}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Domain: $\\ln(x-1)$ requires $x > 1$`,
          latex: `D = \\,]1\\,;+\\infty[`,
        },
        {
          label: `Product = 0 means at least one factor is zero. Factor 1: substitute $u = e^{x}$ to solve $e^{2x} - 4e^{x} + 3 = 0$`,
          latex: `u^{2} - 4u + 3 = 0 \\iff (u-1)(u-3) = 0 \\iff u = 1 \\text{ or } u = 3`,
        },
        {
          label: `Recover $x$: $u=1 \\implies x = 0$ (rejected, not in domain); $u=3 \\implies x = \\ln 3 \\approx 1.099 > 1$ (kept)`,
          latex: `x = \\ln 3 \\;\\text{ (since } \\ln 3 > 1\\text{)}`,
        },
        {
          label: `Factor 2: $\\ln(x-1) = 0 \\iff x - 1 = 1 \\iff x = 2$ (in the domain)`,
          latex: `\\ln(x-1) = 0 \\iff x = 2`,
        },
        {
          label: `Combine the two solutions`,
          latex: `\\boxed{S = \\{2\\,;\\ln 3\\} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['equation', 'exponential', 'logarithm', 'factoring'],
      relatedTips: ['log-substitution'],
    },

    // ── Q3 (Q23) ────────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Limits',
      statement: `\\text{Compute } \\displaystyle\\lim_{x\\to 0} \\dfrac{4\\bigl(\\sqrt{3+e^{x}} - 2\\bigr)}{e^{x} - 1}.`,
      question: `\\text{This limit equals:}`,
      choices: [
        { id: 'A', latex: `4`, isCorrect: false },
        { id: 'B', latex: `1`, isCorrect: true },
        { id: 'C', latex: `2`, isCorrect: false },
        { id: 'D', latex: `+\\infty`, isCorrect: false },
        { id: 'E', latex: `4\\sqrt 3`, isCorrect: false },
      ],
      solution: [
        {
          label: `At $x=0$: numerator $= 4(\\sqrt 4 - 2) = 0$, denominator $= 0$. Indeterminate $0/0$ — use the conjugate trick`,
          latex: `\\dfrac{4(\\sqrt{3+e^{x}} - 2)}{e^{x}-1} \\cdot \\dfrac{\\sqrt{3+e^{x}} + 2}{\\sqrt{3+e^{x}} + 2}`,
        },
        {
          label: `Simplify the numerator: $(\\sqrt{3+e^{x}})^{2} - 2^{2} = (3+e^{x}) - 4 = e^{x} - 1$`,
          latex: `= \\dfrac{4(e^{x}-1)}{(e^{x}-1)\\bigl(\\sqrt{3+e^{x}} + 2\\bigr)} = \\dfrac{4}{\\sqrt{3+e^{x}} + 2}`,
        },
        {
          label: `Substitute $x = 0$: $\\sqrt{3+1} + 2 = 4$`,
          latex: `\\boxed{\\lim_{x\\to 0} \\dfrac{4(\\sqrt{3+e^{x}} - 2)}{e^{x}-1} = \\dfrac{4}{4} = 1 \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['limits', 'conjugate', 'indeterminate-form', 'exponential'],
      relatedTips: ['squeeze'],
    },

    // ── Q4 (Q24) ────────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Complex Numbers',
      statement: `\\text{Let } Z = \\dfrac{2i\\,(1+i)^{3}}{1-i}.`,
      question: `\\text{The algebraic form of } Z \\text{ is:}`,
      choices: [
        { id: 'A', latex: `2-2i`, isCorrect: false },
        { id: 'B', latex: `2i-2`, isCorrect: false },
        { id: 'C', latex: `4i`, isCorrect: false },
        { id: 'D', latex: `2i`, isCorrect: false },
        { id: 'E', latex: `-4i`, isCorrect: true },
      ],
      solution: [
        {
          label: `Compute $(1+i)^{2} = 1 + 2i + i^{2} = 2i$, then $(1+i)^{3} = (1+i)(1+i)^{2} = (1+i)(2i) = 2i + 2i^{2} = -2 + 2i$`,
          latex: `(1+i)^{3} = -2 + 2i`,
        },
        {
          label: `Multiply by $2i$: $2i(-2+2i) = -4i + 4i^{2} = -4 - 4i$`,
          latex: `2i\\,(1+i)^{3} = -4 - 4i`,
        },
        {
          label: `Divide by $1 - i$: multiply numerator and denominator by the conjugate $1+i$`,
          latex: `Z = \\dfrac{(-4-4i)(1+i)}{(1-i)(1+i)} = \\dfrac{(-4-4i)(1+i)}{2}`,
        },
        {
          label: `Expand the numerator: $(-4-4i)(1+i) = -4 - 4i - 4i - 4i^{2} = -4 - 8i + 4 = -8i$`,
          latex: `Z = \\dfrac{-8i}{2} = -4i`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{Z = -4i \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'algebraic-form', 'powers', 'conjugate'],
      relatedTips: ['complex-arg'],
    },

    // ── Q5 (Q25) ────────────────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Series',
      statement: `u_n = 2 + \\dfrac{1}{3} + \\left(\\dfrac{1}{3}\\right)^{2} + \\left(\\dfrac{1}{3}\\right)^{3} + \\cdots + \\left(\\dfrac{1}{3}\\right)^{n} \\;,\\; n \\in \\mathbb{N}^{*}.`,
      question: `\\displaystyle\\lim_{n\\to+\\infty} u_n \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{5}{2}`, isCorrect: true },
        { id: 'B', latex: `\\dfrac{3}{2}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{2}{3}`, isCorrect: false },
        { id: 'D', latex: `+\\infty`, isCorrect: false },
        { id: 'E', latex: `\\dfrac{7}{3}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Identify the geometric tail: $S = \\sum_{k=1}^{n} (1/3)^{k}$ with first term $a = 1/3$ and ratio $q = 1/3$`,
          latex: `u_n = 2 + S \\;,\\quad S = \\dfrac{(1/3)\\bigl(1 - (1/3)^{n}\\bigr)}{1 - 1/3} = \\dfrac{1}{2}\\bigl(1 - (1/3)^{n}\\bigr)`,
        },
        {
          label: `As $n \\to +\\infty$, $(1/3)^{n} \\to 0$ since $|1/3| < 1$`,
          latex: `S \\xrightarrow[n\\to+\\infty]{} \\dfrac{1}{2}`,
        },
        {
          label: `Add the constant $2$`,
          latex: `\\boxed{\\lim_{n\\to+\\infty} u_n = 2 + \\dfrac{1}{2} = \\dfrac{5}{2} \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['series', 'geometric-sum', 'limits'],
      relatedTips: ['geometric-sum'],
    },

    // ── Q6 (Q26) ────────────────────────────────────────────
    {
      number: 6,
      exercise: 6,
      topic: 'Integrals',
      statement: `I = \\displaystyle\\int_{0}^{1} \\dfrac{x^{2} + 2x + 1}{x^{2} + 1}\\,dx.`,
      question: `\\text{The integral } I \\text{ equals:}`,
      choices: [
        { id: 'A', latex: `\\ln(2)`, isCorrect: false },
        { id: 'B', latex: `1 + \\ln(2)`, isCorrect: true },
        { id: 'C', latex: `2`, isCorrect: false },
        { id: 'D', latex: `\\ln(3)`, isCorrect: false },
        { id: 'E', latex: `\\ln(3) - \\ln(2)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Split the numerator: $x^{2} + 2x + 1 = (x^{2} + 1) + 2x$`,
          latex: `\\dfrac{x^{2} + 2x + 1}{x^{2} + 1} = 1 + \\dfrac{2x}{x^{2}+1}`,
        },
        {
          label: `Recognize the second term as $u'/u$ with $u = x^{2}+1$, $u' = 2x$`,
          latex: `I = \\int_{0}^{1} 1\\,dx + \\int_{0}^{1} \\dfrac{2x}{x^{2}+1}\\,dx`,
        },
        {
          label: `Compute each integral. The first is just the length of the interval; the second is $\\ln(x^{2}+1)$ between $0$ and $1$`,
          latex: `I = \\bigl[\\,x\\,\\bigr]_{0}^{1} + \\bigl[\\,\\ln(x^{2}+1)\\,\\bigr]_{0}^{1} = 1 + (\\ln 2 - \\ln 1) = 1 + \\ln 2`,
        },
        {
          label: `Conclude`,
          latex: `\\boxed{I = 1 + \\ln(2) \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['integral', 'logarithm', 'algebraic-manipulation'],
      relatedTips: ['integration-tan'],
    },

    // ── Q7 (Q27) ────────────────────────────────────────────
    {
      number: 7,
      exercise: 7,
      topic: 'Asymptotes',
      statement: `\\text{Let } f(x) = \\dfrac{2x - \\sqrt{x^{2}+1}}{x}.`,
      question: `\\text{The curve of } f \\text{ admits at } +\\infty \\text{ an asymptote of equation:}`,
      choices: [
        { id: 'A', latex: `y = 2`, isCorrect: false },
        { id: 'B', latex: `y = 2x`, isCorrect: false },
        { id: 'C', latex: `y = 3`, isCorrect: false },
        { id: 'D', latex: `y = 3x`, isCorrect: false },
        { id: 'E', latex: `y = 1`, isCorrect: true },
      ],
      solution: [
        {
          label: `Split the fraction`,
          latex: `f(x) = \\dfrac{2x}{x} - \\dfrac{\\sqrt{x^{2}+1}}{x} = 2 - \\dfrac{\\sqrt{x^{2}+1}}{x}`,
        },
        {
          label: `For $x > 0$: $\\dfrac{\\sqrt{x^{2}+1}}{x} = \\sqrt{1 + 1/x^{2}}$. As $x \\to +\\infty$, this tends to $1$`,
          latex: `\\lim_{x\\to+\\infty} \\dfrac{\\sqrt{x^{2}+1}}{x} = 1`,
        },
        {
          label: `Therefore $f(x) \\to 2 - 1 = 1$ — horizontal asymptote $y = 1$`,
          latex: `\\boxed{y = 1 \\implies \\text{Answer: E}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['asymptote', 'horizontal', 'square-root', 'limits'],
      relatedTips: ['asymptotes'],
    },

    // ── Q8 (Q28) ────────────────────────────────────────────
    {
      number: 8,
      exercise: 8,
      topic: 'Complex Numbers',
      statement: `\\text{Consider the equation } (E_{1}):\\ |1 - z - i| = |i + z|. \\text{ The set of points } M(z) \\text{ verifying } (E_{1}) \\text{ is the perpendicular bisector of segment } [AB].`,
      question: `A \\text{ and } B \\text{ are:}`,
      choices: [
        { id: 'A', latex: `A(i) \\text{ and } B(1-i)`, isCorrect: false },
        { id: 'B', latex: `A(-i) \\text{ and } B(1-i)`, isCorrect: true },
        { id: 'C', latex: `A(-i) \\text{ and } B(-1+i)`, isCorrect: false },
        { id: 'D', latex: `A(i) \\text{ and } B(-i)`, isCorrect: false },
        { id: 'E', latex: `A(-i) \\text{ and } B(1+i)`, isCorrect: false },
      ],
      solution: [
        {
          label: `Rewrite each modulus in the form $|z - \\text{point}|$. For the left side: $1 - z - i = -\\bigl(z - (1-i)\\bigr)$`,
          latex: `|1 - z - i| = |z - (1-i)|`,
        },
        {
          label: `For the right side: $i + z = z - (-i)$`,
          latex: `|i + z| = |z - (-i)|`,
        },
        {
          label: `The equation becomes $|z - (1-i)| = |z - (-i)|$ — points equidistant from affixes $1-i$ and $-i$`,
          latex: `|z - (1-i)| = |z - (-i)|`,
        },
        {
          label: `So the locus is the perpendicular bisector of $[AB]$ with $A(-i)$ and $B(1-i)$`,
          latex: `\\boxed{A(-i) \\text{ and } B(1-i) \\implies \\text{Answer: B}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['complex-numbers', 'locus', 'perpendicular-bisector', 'modulus'],
      relatedTips: ['locus-complex'],
    },

    // ── Q9 (Q29) ────────────────────────────────────────────
    {
      number: 9,
      exercise: 9,
      topic: 'Geometry in Space',
      statement: `\\text{In an orthonormal frame, consider the points } A(1\\,;-1\\,;0) \\text{ and } B(0\\,;1\\,;-1). \\text{ The set of points } M(x\\,;y\\,;z) \\text{ such that } AM = BM \\text{ is the plane of equation:}`,
      question: `\\text{(P): }`,
      choices: [
        { id: 'A', latex: `x - 2y + z = 0`, isCorrect: true },
        { id: 'B', latex: `x - 2y - z = 0`, isCorrect: false },
        { id: 'C', latex: `x + 2y + z = 0`, isCorrect: false },
        { id: 'D', latex: `x + 2y + 2z = 0`, isCorrect: false },
        { id: 'E', latex: `2x - 2y + z = 0`, isCorrect: false },
      ],
      solution: [
        {
          label: `$AM = BM \\iff AM^{2} = BM^{2}$. Write each squared distance and equate`,
          latex: `(x-1)^{2} + (y+1)^{2} + z^{2} = x^{2} + (y-1)^{2} + (z+1)^{2}`,
        },
        {
          label: `Expand both sides`,
          latex: `x^{2} - 2x + 1 + y^{2} + 2y + 1 + z^{2} = x^{2} + y^{2} - 2y + 1 + z^{2} + 2z + 1`,
        },
        {
          label: `Cancel common terms ($x^{2}, y^{2}, z^{2}, +1, +1$) and rearrange`,
          latex: `-2x + 2y = -2y + 2z \\iff -2x + 4y - 2z = 0`,
        },
        {
          label: `Divide by $-2$`,
          latex: `\\boxed{x - 2y + z = 0 \\implies \\text{Answer: A}}`,
        },
      ],
      difficulty: 'medium',
      tags: ['geometry-3d', 'plane', 'perpendicular-bisector'],
      relatedTips: ['parametric-line'],
    },

    // ── Q10 (Q30) ───────────────────────────────────────────
    {
      number: 10,
      exercise: 10,
      topic: 'Probability',
      statement: `\\text{An urn contains 3 red, 3 green, and 1 white balls (indistinguishable to touch). Two balls are drawn successively WITH replacement.}`,
      question: `\\text{The probability of drawing two balls of the same color is:}`,
      choices: [
        { id: 'A', latex: `\\dfrac{18}{49}`, isCorrect: false },
        { id: 'B', latex: `\\dfrac{6}{49}`, isCorrect: false },
        { id: 'C', latex: `\\dfrac{1}{7}`, isCorrect: false },
        { id: 'D', latex: `\\dfrac{19}{49}`, isCorrect: true },
        { id: 'E', latex: `\\dfrac{2}{7}`, isCorrect: false },
      ],
      solution: [
        {
          label: `Total balls: $7$. With replacement, draws are independent. Use $P(\\text{same}) = P(RR) + P(GG) + P(WW)$`,
          latex: `P(\\text{same color}) = P(RR) + P(GG) + P(WW)`,
        },
        {
          label: `Compute each: $P(RR) = (3/7)^{2} = 9/49$. $P(GG) = (3/7)^{2} = 9/49$. $P(WW) = (1/7)^{2} = 1/49$`,
          latex: `P(RR) = \\dfrac{9}{49} \\;,\\; P(GG) = \\dfrac{9}{49} \\;,\\; P(WW) = \\dfrac{1}{49}`,
        },
        {
          label: `Sum`,
          latex: `\\boxed{P(\\text{same}) = \\dfrac{9 + 9 + 1}{49} = \\dfrac{19}{49} \\implies \\text{Answer: D}}`,
        },
      ],
      difficulty: 'easy',
      tags: ['probability', 'with-replacement', 'independence'],
      relatedTips: ['conditional-prob'],
    },
  ],
}
