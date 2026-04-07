// ============================================================
// Content Data – 2024 Exam Preparation
// Tips & Tricks + Course Recap
// ALL LaTeX uses template literals (backticks) with single \\
// ALL text in LaTeX uses \\text{} for proper spacing
// ============================================================

export interface Tip {
  id: string
  title: string
  topic: string
  icon: string
  color: string
  summary: string
  formulas: { label: string; latex: string }[]
  example: { question: string; solution: string }
  proTip: string
}

export interface RecapTopic {
  id: string
  title: string
  icon: string
  color: string
  formulas: { label: string; latex: string }[]
  theorems: { name: string; statement: string }[]
  pitfalls: string[]
}

// ─────────────────────────────────────────────────────────────
// TIPS & TRICKS
// ─────────────────────────────────────────────────────────────
export const TIPS_2024: Tip[] = [
  {
    id: 'geometric-sum',
    title: 'Somme Géométrique Express',
    topic: 'Suites numériques',
    icon: '⚡',
    color: '#C9A84C',
    summary: `Reconnaître et calculer instantanément une somme géométrique — la clé de l'Exercice 1.`,
    formulas: [
      { label: 'Somme finie', latex: `1 + q + q^2 + \\cdots + q^n = \\dfrac{q^{n+1}-1}{q-1} \\quad (q \\neq 1)` },
      { label: 'Somme infinie', latex: `\\sum_{k=0}^{+\\infty} q^k = \\dfrac{1}{1-q} \\quad (|q|<1)` },
      { label: 'Astuce limite', latex: `\\dfrac{a \\cdot q^n + b}{c \\cdot q^n + d} \\xrightarrow[n\\to+\\infty]{} \\dfrac{a}{c} \\quad \\text{si } |q|>1` },
    ],
    example: {
      question: `u_n = \\dfrac{1+5+5^2+\\cdots+5^n}{1-5^n}`,
      solution: `\\text{Num.} = \\dfrac{5^{n+1}-1}{4} \\implies u_n = \\dfrac{5^{n+1}-1}{4(1-5^n)} \\approx \\dfrac{5 \\cdot 5^n}{-4 \\cdot 5^n} = -\\dfrac{5}{4}`,
    },
    proTip: `Divisez toujours numérateur et dénominateur par la plus grande puissance de q pour trouver la limite.`,
  },
  {
    id: 'suite-type',
    title: 'Décoder le Type de Suite',
    topic: 'Suites numériques',
    icon: '🔍',
    color: '#C9A84C',
    summary: `Méthode rapide pour distinguer suite arithmétique vs géométrique à partir de ln.`,
    formulas: [
      { label: 'Arithmétique', latex: `u_{n+1} - u_n = r \\implies u_n = u_0 + nr` },
      { label: 'Géométrique', latex: `\\dfrac{u_{n+1}}{u_n} = q \\implies u_n = u_0 \\cdot q^n` },
      { label: 'Astuce ln→exp', latex: `\\ln(v_n) = an+b \\implies v_n = e^b \\cdot (e^a)^n \\;\\text{(géom. de raison } e^a\\text{)}` },
    ],
    example: {
      question: `\\ln(5^n \\cdot v_n) = \\tfrac{n}{2}`,
      solution: `\\ln v_n = \\tfrac{n}{2} - n\\ln 5 = n\\!\\left(\\tfrac{1}{2}-\\ln 5\\right) \\implies v_n = \\left(\\tfrac{\\sqrt{e}}{5}\\right)^{\\!n}`,
    },
    proTip: `Si ln(vₙ) est affine en n → suite géométrique. Si vₙ est affine en n → arithmétique.`,
  },
  {
    id: 'complex-arg',
    title: 'Argument en 30 Secondes',
    topic: 'Nombres complexes',
    icon: '🎯',
    color: '#4CADE8',
    summary: `Les règles d'argument pour résoudre l'Exercice 3 sans calcul lourd.`,
    formulas: [
      { label: 'Produit', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\pmod{2\\pi}` },
      { label: 'Conjugué', latex: `\\arg(\\bar{z}) = -\\arg(z) \\pmod{2\\pi}` },
      { label: 'Signe moins', latex: `\\arg(-z) = \\arg(z) + \\pi \\pmod{2\\pi}` },
      { label: 'Euler', latex: `e^{i\\theta} \\;\\text{a pour argument } \\theta` },
    ],
    example: {
      question: `z = -e^{i\\frac{5\\pi}{12}},\\; z'=(1+i)\\bar{z}`,
      solution: `\\arg(z') = \\arg(1+i) + \\arg(\\bar{z}) = \\tfrac{\\pi}{4} + \\pi - \\tfrac{5\\pi}{12}`,
    },
    proTip: `Décomposez toujours en produit de facteurs simples : -1 = e^(iπ), 1+i = √2·e^(iπ/4).`,
  },
  {
    id: 'rotation',
    title: 'La Formule de Rotation',
    topic: 'Nombres complexes',
    icon: '🔄',
    color: '#4CADE8',
    summary: `Une seule formule pour tous les problèmes de rotation — Exercice 4.`,
    formulas: [
      { label: 'Formule clé', latex: `z_{A'} - z_B = e^{i\\theta} \\cdot (z_A - z_B)` },
      { label: 'Développement', latex: `z_{A'} = z_B + e^{i\\theta}(z_A - z_B)` },
      { label: 'Angles classiques', latex: `e^{i\\frac{\\pi}{2}} = i \\quad e^{-i\\frac{\\pi}{2}} = -i \\quad e^{i\\pi} = -1` },
    ],
    example: {
      question: `z_A=4+i,\\; z_B=-i,\\; \\theta=\\tfrac{\\pi}{2}`,
      solution: `z_{A'} = -i + i(4+2i) = -i -2+4i = -2+3i`,
    },
    proTip: `N'oubliez pas : le centre B est SOUSTRAIT de A avant la multiplication, puis RE-AJOUTÉ.`,
  },
  {
    id: 'trig-integrals',
    title: 'Intégrales de tan & cotan',
    topic: 'Intégrales',
    icon: '∫',
    color: '#7C4CE8',
    summary: `Les primitives essentielles pour l'Exercice 5 — à connaître par cœur.`,
    formulas: [
      { label: 'Tangente', latex: `\\int \\tan(x)\\,dx = -\\ln|\\cos(x)| + C` },
      { label: 'Cotangente', latex: `\\int \\cot(x)\\,dx = \\ln|\\sin(x)| + C` },
      { label: 'Astuce', latex: `\\tan(x) = \\dfrac{\\sin x}{\\cos x} \\implies \\int \\dfrac{u'}{u} = \\ln|u|` },
    ],
    example: {
      question: `I = \\int_{\\pi/6}^{\\pi/3} \\tan(x)\\,dx`,
      solution: `I = \\Big[-\\ln|\\cos x|\\Big]_{\\pi/6}^{\\pi/3} = -\\ln\\tfrac{1}{2}+\\ln\\tfrac{\\sqrt{3}}{2} = \\ln\\sqrt{3}`,
    },
    proTip: `tan et cotan sur [π/6, π/3] donnent le MÊME résultat grâce à la symétrie autour de π/4.`,
  },
  {
    id: 'improper-integral',
    title: 'La Limite x·ln(x) → 0',
    topic: 'Intégrales',
    icon: '🔬',
    color: '#7C4CE8',
    summary: `La croissance comparée clé pour les intégrales impropres — Exercice 6.`,
    formulas: [
      { label: 'Limite cruciale', latex: `\\lim_{x \\to 0^+} x \\cdot \\ln(x) = 0` },
      { label: 'Primitive de ln', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C` },
      { label: 'Intégrale impropre', latex: `\\int_0^a \\ln(x)\\,dx = \\lim_{\\lambda\\to 0^+} \\Big[x\\ln x - x\\Big]_\\lambda^a` },
    ],
    example: {
      question: `I(\\lambda) = \\int_\\lambda^2 \\ln(x)\\,dx`,
      solution: `I(\\lambda) = (2\\ln 2-2)-(\\lambda\\ln\\lambda-\\lambda) \\implies \\lim_{\\lambda\\to 0^+} I = \\ln 4 - 2`,
    },
    proTip: `Retenez : x·ln(x) → 0 quand x → 0⁺. Le « ln va vers -∞ mais x l'écrase vers 0 ».`,
  },
  {
    id: 'parabolic-branch',
    title: 'Asymptotes vs Branches Paraboliques',
    topic: 'Analyse de fonctions',
    icon: '📐',
    color: '#4CE87C',
    summary: `L'arbre de décision pour l'Exercice 7 — ne confondez plus jamais.`,
    formulas: [
      { label: 'Test 1', latex: `\\lim_{x\\to+\\infty} f(x) = \\ell \\implies \\text{asymptote horizontale } y=\\ell` },
      { label: 'Test 2', latex: `\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\begin{cases} 0 \\implies \\text{BP dir. } Ox \\\\ \\pm\\infty \\implies \\text{BP dir. } Oy \\\\ a \\neq 0 \\implies \\text{asympt. oblique} \\end{cases}` },
    ],
    example: {
      question: `f(x) = e^x + x[\\ln x - e -1]`,
      solution: `\\dfrac{f(x)}{x} = \\dfrac{e^x}{x} + \\ln x - e -1 \\to +\\infty \\implies \\text{BP direction axe } Oy`,
    },
    proTip: `eˣ domine TOUT polynôme et logarithme. Si f contient eˣ, la réponse est presque toujours « BP direction Oy ».`,
  },
  {
    id: 'half-tangent',
    title: 'Demi-Tangente : Haut ou Bas ?',
    topic: 'Analyse de fonctions',
    icon: '📈',
    color: '#4CE87C',
    summary: `Comment déterminer la direction de la demi-tangente verticale.`,
    formulas: [
      { label: 'Demi-tangente verticale', latex: `\\lim_{x\\to a^+} \\dfrac{f(x)-f(a)}{x-a} = \\pm\\infty \\implies \\text{tangente verticale}` },
      { label: 'Direction', latex: `\\text{Pente } \\to +\\infty \\implies \\text{vers le haut} \\quad \\text{Pente } \\to -\\infty \\implies \\text{vers le bas}` },
    ],
    example: {
      question: `f(0)=1,\\; f'(0^+) = -\\infty`,
      solution: `\\text{Pente } \\to -\\infty \\text{, mais } f(x) > f(0) \\implies \\text{tangente verticale dirigée vers le haut}`,
    },
    proTip: `Attention au piège ! La PENTE va vers -∞ mais la COURBE peut monter si f(x) > f(a). Tracez un schéma.`,
  },
]

// ─────────────────────────────────────────────────────────────
// COURSE RECAP
// ─────────────────────────────────────────────────────────────
export const RECAP_2024: RecapTopic[] = [
  {
    id: 'suites',
    title: 'Suites Numériques',
    icon: '📊',
    color: '#C9A84C',
    formulas: [
      { label: 'Suite arithmétique', latex: `u_n = u_0 + n \\cdot r` },
      { label: 'Somme arithmétique', latex: `S_n = \\dfrac{(n+1)(u_0+u_n)}{2}` },
      { label: 'Suite géométrique', latex: `u_n = u_0 \\cdot q^n` },
      { label: 'Somme géométrique', latex: `S_n = u_0 \\cdot \\dfrac{1-q^{n+1}}{1-q} \\quad (q\\neq 1)` },
      { label: 'Convergence géom.', latex: `|q|<1 \\implies \\lim q^n = 0 \\quad ; \\quad |q|>1 \\implies \\lim |q^n| = +\\infty` },
      { label: 'Croissance comparée', latex: `\\lim_{n\\to+\\infty} \\dfrac{\\ln n}{n} = 0 \\quad ; \\quad \\lim \\dfrac{n^k}{q^n} = 0 \\;(q>1)` },
    ],
    theorems: [
      { name: 'Convergence monotone', statement: `\\text{Toute suite croissante et majorée converge.}` },
      { name: 'Suite géom. et ln', statement: `\\text{Si } \\ln(u_n) = an + b \\text{, alors } u_n = e^b \\cdot (e^a)^n \\text{ est géom. de raison } e^a` },
    ],
    pitfalls: [
      `Ne pas confondre la raison r (arithmétique) et la raison q (géométrique).`,
      `Pour la somme géométrique, le nombre de termes de 5⁰ à 5ⁿ est n+1, pas n.`,
      `Vérifier que q ≠ 1 avant d'appliquer la formule de somme.`,
    ],
  },
  {
    id: 'complexes',
    title: 'Nombres Complexes',
    icon: '🌀',
    color: '#4CADE8',
    formulas: [
      { label: 'Forme exponentielle', latex: `z = |z| \\cdot e^{i\\arg(z)}` },
      { label: `Formule d'Euler`, latex: `e^{i\\theta} = \\cos\\theta + i\\sin\\theta` },
      { label: 'Module du produit', latex: `|z_1 z_2| = |z_1| \\cdot |z_2|` },
      { label: 'Argument du produit', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\;[2\\pi]` },
      { label: 'Conjugué', latex: `\\overline{z} = |z|\\,e^{-i\\arg(z)} \\quad ; \\quad \\arg(\\bar{z}) = -\\arg(z)` },
      { label: 'Rotation', latex: `z' - \\omega = e^{i\\theta}(z - \\omega) \\quad \\text{(centre } \\omega \\text{, angle } \\theta\\text{)}` },
      { label: 'Angles remarquables', latex: `e^{i\\pi/4} = \\tfrac{\\sqrt{2}}{2}(1+i) \\quad e^{i\\pi/2} = i \\quad e^{i\\pi} = -1` },
    ],
    theorems: [
      { name: 'Passage au conjugué', statement: `\\overline{z_1+z_2} = \\bar{z_1}+\\bar{z_2} \\quad \\text{et} \\quad \\overline{z_1 z_2} = \\bar{z_1}\\,\\bar{z_2}` },
      { name: 'Signe négatif', statement: `-z = z \\cdot e^{i\\pi} \\text{, soit } \\arg(-z)=\\arg(z)+\\pi` },
    ],
    pitfalls: [
      `arg(z̄) = -arg(z) mais arg(-z) = arg(z) + π. Ne pas confondre !`,
      `Pour la rotation, SOUSTRAIRE le centre AVANT de multiplier par e^(iθ), puis RE-AJOUTER.`,
      `e^(-iπ/2) = -i (pas +i).`,
    ],
  },
  {
    id: 'integrales',
    title: 'Intégrales',
    icon: '∫',
    color: '#7C4CE8',
    formulas: [
      { label: 'Primitive de xⁿ', latex: `\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n\\neq -1)` },
      { label: 'Primitive de 1/x', latex: `\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C` },
      { label: 'Primitive de eˣ', latex: `\\int e^x\\,dx = e^x + C` },
      { label: 'Primitive de ln', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C` },
      { label: 'Tangente', latex: `\\int \\tan(x)\\,dx = -\\ln|\\cos(x)| + C` },
      { label: 'Cotangente', latex: `\\int \\cot(x)\\,dx = \\ln|\\sin(x)| + C` },
      { label: `u'/u`, latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C` },
    ],
    theorems: [
      { name: 'IPP', statement: `\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'` },
      { name: 'Limite cruciale', statement: `\\lim_{x\\to 0^+} x\\ln x = 0` },
    ],
    pitfalls: [
      `∫tan(x) = -ln|cos(x)| : le signe MOINS est crucial.`,
      `Pour les intégrales impropres, toujours passer par la limite λ→0⁺.`,
      `x·ln(x) → 0 quand x→0⁺ : cette limite est indispensable.`,
    ],
  },
  {
    id: 'fonctions',
    title: 'Étude de Fonctions',
    icon: '📈',
    color: '#4CE87C',
    formulas: [
      { label: 'Asymptote horiz.', latex: `\\lim_{x\\to\\pm\\infty} f(x) = \\ell \\implies y = \\ell` },
      { label: 'Asymptote oblique', latex: `\\lim \\dfrac{f(x)}{x} = a \\neq 0 \\text{ et } \\lim [f(x)-ax] = b \\implies y=ax+b` },
      { label: 'BP direction Ox', latex: `\\lim \\dfrac{f(x)}{x} = 0` },
      { label: 'BP direction Oy', latex: `\\lim \\dfrac{f(x)}{x} = \\pm\\infty` },
      { label: 'Convexité', latex: `f''(x) > 0 \\implies f \\text{ convexe} \\quad ; \\quad f''(x) < 0 \\implies f \\text{ concave}` },
      { label: `Point d'inflexion`, latex: `f'' \\text{ change de signe en } a \\implies a \\text{ est un point d'inflexion}` },
    ],
    theorems: [
      { name: 'Demi-tangente verticale', statement: `\\lim_{x\\to a} \\frac{f(x)-f(a)}{x-a} = \\pm\\infty \\implies \\text{tangente verticale}` },
      { name: 'Extremum local', statement: `f'(x_0)=0 \\text{ et } f'' \\text{ du même signe} \\implies \\text{extremum local}` },
    ],
    pitfalls: [
      `eˣ domine tout polynôme et logarithme à l'infini → branche parabolique direction Oy.`,
      `Tangente verticale « vers le haut » si la courbe MONTE (même si la pente est -∞).`,
      `f''(x)>0 partout ⟹ CONVEXE (pas concave). Mnémo : « convexe = sourire ».`,
    ],
  },
]

// ── Lookup functions ─────────────────────────────────────────
export function getTipsData(year: number): Tip[] | undefined {
  if (year === 2024) return TIPS_2024
  return undefined
}

export function getRecapData(year: number): RecapTopic[] | undefined {
  if (year === 2024) return RECAP_2024
  return undefined
}
