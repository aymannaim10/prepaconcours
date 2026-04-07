// ============================================================
// Real Exam Data – Concours Médecine UM6SS 2024
// All LaTeX uses template literals: \frac, \text etc. (single backslash)
// Solutions are string[] arrays: each element = one rendered step
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
  solution: string[]    // each entry = one KaTeX step
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
  date: '20 Juillet 2024',
  duration: 30,
  categoryId: 'real-exam',
  title: `Concours commun d'accès aux Facultés de Médecine, Médecine Dentaire, Pharmacie, Médecine Anglophone`,
  instructions: `Pour chaque question, choisir parmi les quatre réponses proposées – L'UNIQUE RÉPONSE EXACTE en indiquant à chaque fois – sur la grille – la lettre correspondante à votre réponse. L'usage de la calculette est strictement interdit.`,
  questions: [
    // ── EXERCICE 1 ──────────────────────────────────────────
    {
      number: 1,
      exercise: 1,
      topic: 'Suites numériques',
      statement: `\\text{On considère la suite numérique } (u_n) \\text{ définie par :}`,
      question: `u_n = \\dfrac{1 + 5 + 5^2 + \\cdots + 5^n}{1 - 5^n} \\;,\\quad \\forall n \\in \\mathbb{N}^*`,
      choices: [
        { id: 'A', latex: `\\lim u_n = -1`, isCorrect: false },
        { id: 'B', latex: `\\lim u_n = -\\dfrac{25}{4}`, isCorrect: false },
        { id: 'C', latex: `\\lim u_n = -\\dfrac{5}{4}`, isCorrect: true },
        { id: 'D', latex: `\\lim u_n = -\\dfrac{1}{4}`, isCorrect: false },
      ],
      solution: [
        `\\text{Le numérateur est une suite géométrique de raison 5 :}`,
        `1+5+\\cdots+5^n = \\dfrac{5^{n+1}-1}{5-1} = \\dfrac{5^{n+1}-1}{4}`,
        `u_n = \\dfrac{5^{n+1}-1}{4(1-5^n)} = \\dfrac{5 \\cdot 5^n - 1}{4(1 - 5^n)}`,
        `\\text{On divise par } 5^n : \\quad u_n = \\dfrac{5 - 5^{-n}}{4(5^{-n} - 1)} \\xrightarrow[n\\to+\\infty]{} \\dfrac{5}{-4} = \\boxed{-\\dfrac{5}{4}}`,
      ],
      difficulty: 'medium',
      tags: ['suites', 'limite', 'géométrique'],
    },

    // ── EXERCICE 2 ──────────────────────────────────────────
    {
      number: 2,
      exercise: 2,
      topic: 'Suites numériques',
      statement: `(v_n) \\text{ est la suite numérique à termes positifs non nuls définie par :}`,
      question: `\\ln(5^n \\times v_n) = \\dfrac{1}{2}\\,n \\;,\\quad \\forall n \\in \\mathbb{N}`,
      choices: [
        { id: 'A', latex: `(v_n) \\text{ est arithmétique de raison } \\dfrac{e}{5}`, isCorrect: false },
        { id: 'B', latex: `(v_n) \\text{ est géométrique de raison } \\dfrac{e}{5}`, isCorrect: false },
        { id: 'C', latex: `(v_n) \\text{ est arithmétique de raison } \\dfrac{\\sqrt{e}}{5}`, isCorrect: false },
        { id: 'D', latex: `(v_n) \\text{ est géométrique de raison } \\dfrac{\\sqrt{e}}{5}`, isCorrect: true },
      ],
      solution: [
        `\\ln(5^n \\cdot v_n) = \\tfrac{n}{2} \\implies n\\ln 5 + \\ln v_n = \\tfrac{n}{2}`,
        `\\ln v_n = \\tfrac{n}{2} - n\\ln 5 = n\\!\\left(\\tfrac{1}{2} - \\ln 5\\right)`,
        `v_n = e^{n(\\frac{1}{2}-\\ln 5)} = \\left(e^{\\frac{1}{2}-\\ln 5}\\right)^n = \\left(\\dfrac{\\sqrt{e}}{5}\\right)^{\\!n}`,
        `\\boxed{\\text{Suite géométrique de raison } \\dfrac{\\sqrt{e}}{5}}`,
      ],
      difficulty: 'medium',
      tags: ['suites', 'logarithme', 'géométrique', 'arithmétique'],
    },

    // ── EXERCICE 3 ──────────────────────────────────────────
    {
      number: 3,
      exercise: 3,
      topic: 'Nombres complexes',
      statement: `\\text{Dans le plan rapporté à un repère orthonormé direct } (O,\\vec{u},\\vec{v})`,
      question: `z = -e^{i\\frac{5\\pi}{12}} \\quad \\text{et} \\quad z' = (1+i)\\,\\bar{z} \\quad \\text{Trouver } \\arg(z')`,
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
      tags: ['complexes', 'argument', 'conjugué', 'trigonométrie'],
    },

    // ── EXERCICE 4 ──────────────────────────────────────────
    {
      number: 4,
      exercise: 4,
      topic: 'Nombres complexes',
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
      tags: ['complexes', 'rotation', 'géométrie'],
    },

    // ── EXERCICE 5 – PARTIE 1 ────────────────────────────────
    {
      number: 5,
      exercise: 5,
      topic: 'Intégrales',
      statement: `\\text{On considère les intégrales :}`,
      question: `I = \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}} \\tan(x)\\,dx \\quad \\text{et} \\quad J = \\int_{\\frac{\\pi}{6}}^{\\frac{\\pi}{3}} \\dfrac{1}{\\tan(x)}\\,dx`,
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
      tags: ['intégrales', 'trigonométrie', 'logarithme'],
    },

    // ── EXERCICE 5 – PARTIE 2 ────────────────────────────────
    {
      number: 6,
      exercise: 5,
      topic: 'Intégrales',
      statement: `\\text{Avec les mêmes } I \\text{ et } J \\text{ (suite)}`,
      question: `\\text{Trouver la relation entre } I \\text{ et } J`,
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
      tags: ['intégrales', 'trigonométrie'],
    },

    // ── EXERCICE 6 ──────────────────────────────────────────
    {
      number: 7,
      exercise: 6,
      topic: 'Intégrales impropres',
      statement: `\\text{Pour } \\lambda \\in\\,]0\\,;\\,2[\\, \\text{ on pose :}`,
      question: `I(\\lambda) = \\int_{\\lambda}^{2} \\ln(x)\\,dx \\quad \\text{Calculer } \\lim_{\\lambda \\to 0^+} I(\\lambda)`,
      choices: [
        { id: 'A', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = -2 + \\ln 4`, isCorrect: true },
        { id: 'B', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = 2 - \\ln 4`, isCorrect: false },
        { id: 'C', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = 2 + 2\\ln 2`, isCorrect: false },
        { id: 'D', latex: `\\lim_{\\lambda \\to 0^+} I(\\lambda) = -2 - \\ln 4`, isCorrect: false },
      ],
      solution: [
        `I(\\lambda) = \\Big[x\\ln x - x\\Big]_{\\lambda}^{2} = (2\\ln 2 - 2)-(\\lambda\\ln\\lambda - \\lambda)`,
        `\\lim_{\\lambda\\to 0^+}\\lambda\\ln\\lambda = 0 \\quad \\text{et} \\quad \\lim_{\\lambda\\to 0^+}\\lambda = 0`,
        `\\boxed{\\lim_{\\lambda\\to 0^+} I(\\lambda) = 2\\ln 2 - 2 = \\ln 4 - 2}`,
      ],
      difficulty: 'hard',
      tags: ['intégrales', 'intégrale impropre', 'logarithme', 'limite'],
    },

    // ── EXERCICE 7 – PARTIE 1 ────────────────────────────────
    {
      number: 8,
      exercise: 7,
      topic: 'Analyse de fonctions',
      statement: `\\text{Soit } f \\text{ définie sur } [0,+\\infty[ \\text{ par } \\begin{cases} f(x) = e^x + x[\\ln(x)-e-1] & x>0 \\\\ f(0)= 1 \\end{cases}`,
      question: `\\text{Comportement asymptotique de } (C_f) \\text{ :}`,
      choices: [
        { id: 'A', latex: `(C_f) \\text{ admet une asymptote verticale}`, isCorrect: false },
        { id: 'B', latex: `(C_f) \\text{ admet une asymptote horizontale}`, isCorrect: false },
        { id: 'C', latex: `(C_f) \\text{ admet une BP de direction l'axe } Ox`, isCorrect: false },
        { id: 'D', latex: `(C_f) \\text{ admet une BP de direction l'axe } Oy`, isCorrect: true },
      ],
      solution: [
        `\\lim_{x\\to +\\infty} f(x) = +\\infty \\quad \\text{(pas d'asymptote horizontale)}`,
        `f \\text{ est continue en } 0,\\; f(0)=1 \\quad \\text{(pas d'asymptote verticale)}`,
        `\\dfrac{f(x)}{x} = \\dfrac{e^x}{x} + \\ln x - e -1 \\xrightarrow[x\\to+\\infty]{} +\\infty`,
        `\\boxed{(C_f) \\text{ admet une branche parabolique de direction l'axe } Oy}`,
      ],
      difficulty: 'hard',
      tags: ['fonctions', 'asymptote', 'branche parabolique'],
    },

    // ── EXERCICE 7 – PARTIE 2 ────────────────────────────────
    {
      number: 9,
      exercise: 7,
      topic: 'Analyse de fonctions',
      statement: `\\text{Sachant que } f'(x) = e^x + \\ln(x) - e \\;,\\; \\forall x > 0`,
      question: `\\text{Demi-tangente à droite de } 0 \\text{ pour } (C_f) \\text{ :}`,
      choices: [
        { id: 'A', latex: `\\text{Demi-tangente horizontale}`, isCorrect: false },
        { id: 'B', latex: `\\text{Demi-tangente verticale dirigée vers le bas}`, isCorrect: false },
        { id: 'C', latex: `\\text{Demi-tangente verticale dirigée vers le haut}`, isCorrect: true },
        { id: 'D', latex: `\\text{Le point } x=1 \\text{ est un point d'inflexion}`, isCorrect: false },
      ],
      solution: [
        `\\lim_{x\\to 0^+} \\dfrac{f(x)-f(0)}{x} = \\lim_{x\\to 0^+} \\dfrac{e^x-1}{x} + \\ln x - e - 1`,
        `= 1 + (-\\infty) - e - 1 = -\\infty`,
        `\\text{La pente tend vers } -\\infty \\text{, donc tangente verticale.}`,
        `\\text{Comme } f(x) \\to f(0)=1 \\text{ par valeurs > 1 au voisinage de } 0^+`,
        `\\boxed{\\text{La courbe admet une demi-tangente verticale dirigée vers le haut}}`,
      ],
      difficulty: 'hard',
      tags: ['fonctions', 'dérivée', 'tangente'],
    },

    // ── EXERCICE 7 – PARTIE 3 ────────────────────────────────
    {
      number: 10,
      exercise: 7,
      topic: 'Analyse de fonctions',
      statement: `\\text{(Suite de l'exercice 7)}`,
      question: `\\text{Déterminer les propriétés de } f \\text{ :}`,
      choices: [
        { id: 'A', latex: `f \\text{ est concave sur } [0,1] \\text{ et convexe sur } [1,+\\infty[`, isCorrect: false },
        { id: 'B', latex: `f([0,+\\infty[) = [-1,+\\infty[`, isCorrect: true },
        { id: 'C', latex: `f([0,+\\infty[) = [1,+\\infty[`, isCorrect: false },
        { id: 'D', latex: `f([0,+\\infty[) = ]-1,+\\infty[`, isCorrect: false },
      ],
      solution: [
        `f''(x) = e^x + \\dfrac{1}{x} > 0 \\;\\forall x>0 \\implies f \\text{ est convexe (A faux)}`,
        `f'(1) = e + 0 - e = 0 \\quad \\text{et} \\quad f''(1) = e+1>0 \\implies x=1 \\text{ est un minimum}`,
        `f(1) = e + 1\\cdot[\\ln 1 - e - 1] = e + (0-e-1) = -1`,
        `f(0) = 1,\\; f(1)=-1,\\; \\lim_{x\\to+\\infty} f(x)=+\\infty`,
        `\\boxed{f([0,+\\infty[) = [-1,+\\infty[}`,
      ],
      difficulty: 'hard',
      tags: ['fonctions', 'convexité', 'image', 'minimum'],
    },
  ],
}

export const EXAM_DATA_MAP: Record<string, ExamData> = {
  '2024-real-exam': EXAM_2024_REAL,
}

export function getExamData(year: number, categoryId: string): ExamData | undefined {
  return EXAM_DATA_MAP[`${year}-${categoryId}`]
}
