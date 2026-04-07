// ============================================================
// Content Data – 2024 Exam Preparation
// Tips & Tricks + Course Recap — ALL IN ENGLISH
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
    title: 'Geometric Sum Express',
    topic: 'Sequences',
    icon: '⚡',
    color: '#C9A84C',
    summary: `Instantly recognize and compute a geometric sum — the key to Exercise 1.`,
    formulas: [
      { label: 'Finite sum', latex: `1 + q + q^2 + \\cdots + q^n = \\dfrac{q^{n+1}-1}{q-1} \\quad (q \\neq 1)` },
      { label: 'Infinite sum', latex: `\\sum_{k=0}^{+\\infty} q^k = \\dfrac{1}{1-q} \\quad (|q|<1)` },
      { label: 'Limit trick', latex: `\\dfrac{a \\cdot q^n + b}{c \\cdot q^n + d} \\xrightarrow[n\\to+\\infty]{} \\dfrac{a}{c} \\quad \\text{if } |q|>1` },
    ],
    example: {
      question: `u_n = \\dfrac{1+5+5^2+\\cdots+5^n}{1-5^n}`,
      solution: `\\text{Num.} = \\dfrac{5^{n+1}-1}{4} \\implies u_n = \\dfrac{5^{n+1}-1}{4(1-5^n)} \\approx \\dfrac{5 \\cdot 5^n}{-4 \\cdot 5^n} = -\\dfrac{5}{4}`,
    },
    proTip: `Always divide numerator and denominator by the highest power of q to find the limit.`,
  },
  {
    id: 'suite-type',
    title: 'Decode the Sequence Type',
    topic: 'Sequences',
    icon: '🔍',
    color: '#C9A84C',
    summary: `Quick method to distinguish arithmetic vs geometric sequences using ln.`,
    formulas: [
      { label: 'Arithmetic', latex: `u_{n+1} - u_n = r \\implies u_n = u_0 + nr` },
      { label: 'Geometric', latex: `\\dfrac{u_{n+1}}{u_n} = q \\implies u_n = u_0 \\cdot q^n` },
      { label: 'ln→exp trick', latex: `\\ln(v_n) = an+b \\implies v_n = e^b \\cdot (e^a)^n \\;\\text{(geometric, ratio } e^a\\text{)}` },
    ],
    example: {
      question: `\\ln(5^n \\cdot v_n) = \\tfrac{n}{2}`,
      solution: `\\ln v_n = \\tfrac{n}{2} - n\\ln 5 = n\\!\\left(\\tfrac{1}{2}-\\ln 5\\right) \\implies v_n = \\left(\\tfrac{\\sqrt{e}}{5}\\right)^{\\!n}`,
    },
    proTip: `If ln(vₙ) is linear in n → geometric sequence. If vₙ is linear in n → arithmetic sequence.`,
  },
  {
    id: 'complex-arg',
    title: 'Argument in 30 Seconds',
    topic: 'Complex Numbers',
    icon: '🎯',
    color: '#4CADE8',
    summary: `The argument rules to solve Exercise 3 without heavy computation.`,
    formulas: [
      { label: 'Product', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\pmod{2\\pi}` },
      { label: 'Conjugate', latex: `\\arg(\\bar{z}) = -\\arg(z) \\pmod{2\\pi}` },
      { label: 'Minus sign', latex: `\\arg(-z) = \\arg(z) + \\pi \\pmod{2\\pi}` },
      { label: 'Euler', latex: `e^{i\\theta} \\;\\text{has argument } \\theta` },
    ],
    example: {
      question: `z = -e^{i\\frac{5\\pi}{12}},\\; z'=(1+i)\\bar{z}`,
      solution: `\\arg(z') = \\arg(1+i) + \\arg(\\bar{z}) = \\tfrac{\\pi}{4} + \\pi - \\tfrac{5\\pi}{12}`,
    },
    proTip: `Always decompose into simple factors: -1 = e^(iπ), 1+i = √2·e^(iπ/4).`,
  },
  {
    id: 'rotation',
    title: 'The Rotation Formula',
    topic: 'Complex Numbers',
    icon: '🔄',
    color: '#4CADE8',
    summary: `One formula for all rotation problems — Exercise 4.`,
    formulas: [
      { label: 'Key formula', latex: `z_{A'} - z_B = e^{i\\theta} \\cdot (z_A - z_B)` },
      { label: 'Expanded', latex: `z_{A'} = z_B + e^{i\\theta}(z_A - z_B)` },
      { label: 'Common angles', latex: `e^{i\\frac{\\pi}{2}} = i \\quad e^{-i\\frac{\\pi}{2}} = -i \\quad e^{i\\pi} = -1` },
    ],
    example: {
      question: `z_A=4+i,\\; z_B=-i,\\; \\theta=\\tfrac{\\pi}{2}`,
      solution: `z_{A'} = -i + i(4+2i) = -i -2+4i = -2+3i`,
    },
    proTip: `Don't forget: the center B is SUBTRACTED from A before multiplying, then RE-ADDED.`,
  },
  {
    id: 'trig-integrals',
    title: 'Integrals of tan & cot',
    topic: 'Integrals',
    icon: '∫',
    color: '#7C4CE8',
    summary: `The essential antiderivatives for Exercise 5 — learn them by heart.`,
    formulas: [
      { label: 'Tangent', latex: `\\int \\tan(x)\\,dx = -\\ln|\\cos(x)| + C` },
      { label: 'Cotangent', latex: `\\int \\cot(x)\\,dx = \\ln|\\sin(x)| + C` },
      { label: 'Trick', latex: `\\tan(x) = \\dfrac{\\sin x}{\\cos x} \\implies \\int \\dfrac{u'}{u} = \\ln|u|` },
    ],
    example: {
      question: `I = \\int_{\\pi/6}^{\\pi/3} \\tan(x)\\,dx`,
      solution: `I = \\Big[-\\ln|\\cos x|\\Big]_{\\pi/6}^{\\pi/3} = -\\ln\\tfrac{1}{2}+\\ln\\tfrac{\\sqrt{3}}{2} = \\ln\\sqrt{3}`,
    },
    proTip: `tan and cot on [π/6, π/3] give the SAME result due to the interval's symmetry around π/4.`,
  },
  {
    id: 'improper-integral',
    title: 'The Limit x·ln(x) → 0',
    topic: 'Integrals',
    icon: '🔬',
    color: '#7C4CE8',
    summary: `The key growth comparison for improper integrals — Exercise 6.`,
    formulas: [
      { label: 'Crucial limit', latex: `\\lim_{x \\to 0^+} x \\cdot \\ln(x) = 0` },
      { label: 'Antideriv. of ln', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C` },
      { label: 'Improper integral', latex: `\\int_0^a \\ln(x)\\,dx = \\lim_{\\lambda\\to 0^+} \\Big[x\\ln x - x\\Big]_\\lambda^a` },
    ],
    example: {
      question: `I(\\lambda) = \\int_\\lambda^2 \\ln(x)\\,dx`,
      solution: `I(\\lambda) = (2\\ln 2-2)-(\\lambda\\ln\\lambda-\\lambda) \\implies \\lim_{\\lambda\\to 0^+} I = \\ln 4 - 2`,
    },
    proTip: `Remember: x·ln(x) → 0 as x → 0⁺. "ln goes to -∞ but x crushes it to 0."`,
  },
  {
    id: 'parabolic-branch',
    title: 'Asymptotes vs Parabolic Branches',
    topic: 'Function Analysis',
    icon: '📐',
    color: '#4CE87C',
    summary: `The decision tree for Exercise 7 — never confuse them again.`,
    formulas: [
      { label: 'Test 1', latex: `\\lim_{x\\to+\\infty} f(x) = \\ell \\implies \\text{horizontal asymptote } y=\\ell` },
      { label: 'Test 2', latex: `\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\begin{cases} 0 \\implies \\text{PB dir. } Ox \\\\ \\pm\\infty \\implies \\text{PB dir. } Oy \\\\ a \\neq 0 \\implies \\text{oblique asympt.} \\end{cases}` },
    ],
    example: {
      question: `f(x) = e^x + x[\\ln x - e -1]`,
      solution: `\\dfrac{f(x)}{x} = \\dfrac{e^x}{x} + \\ln x - e -1 \\to +\\infty \\implies \\text{PB direction } Oy`,
    },
    proTip: `eˣ dominates EVERY polynomial and logarithm. If f contains eˣ, the answer is almost always "PB direction Oy".`,
  },
  {
    id: 'half-tangent',
    title: 'Half-Tangent: Up or Down?',
    topic: 'Function Analysis',
    icon: '📈',
    color: '#4CE87C',
    summary: `How to determine the direction of the vertical half-tangent.`,
    formulas: [
      { label: 'Vertical half-tangent', latex: `\\lim_{x\\to a^+} \\dfrac{f(x)-f(a)}{x-a} = \\pm\\infty \\implies \\text{vertical tangent}` },
      { label: 'Direction', latex: `\\text{Slope } \\to +\\infty \\implies \\text{upward} \\quad \\text{Slope } \\to -\\infty \\implies \\text{downward}` },
    ],
    example: {
      question: `f(0)=1,\\; f'(0^+) = -\\infty`,
      solution: `\\text{Slope } \\to -\\infty \\text{, but } f(x) > f(0) \\implies \\text{vertical tangent pointing upward}`,
    },
    proTip: `Watch the trap! The SLOPE goes to -∞ but the CURVE can go up if f(x) > f(a). Draw a quick sketch.`,
  },
]

// ─────────────────────────────────────────────────────────────
// COURSE RECAP
// ─────────────────────────────────────────────────────────────
export const RECAP_2024: RecapTopic[] = [
  {
    id: 'suites',
    title: 'Sequences',
    icon: '📊',
    color: '#C9A84C',
    formulas: [
      { label: 'Arithmetic seq.', latex: `u_n = u_0 + n \\cdot r` },
      { label: 'Arithmetic sum', latex: `S_n = \\dfrac{(n+1)(u_0+u_n)}{2}` },
      { label: 'Geometric seq.', latex: `u_n = u_0 \\cdot q^n` },
      { label: 'Geometric sum', latex: `S_n = u_0 \\cdot \\dfrac{1-q^{n+1}}{1-q} \\quad (q\\neq 1)` },
      { label: 'Geometric conv.', latex: `|q|<1 \\implies \\lim q^n = 0 \\quad ; \\quad |q|>1 \\implies \\lim |q^n| = +\\infty` },
      { label: 'Growth comparison', latex: `\\lim_{n\\to+\\infty} \\dfrac{\\ln n}{n} = 0 \\quad ; \\quad \\lim \\dfrac{n^k}{q^n} = 0 \\;(q>1)` },
    ],
    theorems: [
      { name: 'Monotone Convergence', statement: `\\text{Every increasing and bounded above sequence converges.}` },
      { name: 'Geometric seq. & ln', statement: `\\text{If } \\ln(u_n) = an + b \\text{, then } u_n = e^b \\cdot (e^a)^n \\text{ is geometric with ratio } e^a` },
    ],
    pitfalls: [
      `Don't confuse common difference r (arithmetic) with common ratio q (geometric).`,
      `For the geometric sum, the number of terms from 5⁰ to 5ⁿ is n+1, not n.`,
      `Check that q ≠ 1 before applying the sum formula.`,
    ],
  },
  {
    id: 'complexes',
    title: 'Complex Numbers',
    icon: '🌀',
    color: '#4CADE8',
    formulas: [
      { label: 'Exponential form', latex: `z = |z| \\cdot e^{i\\arg(z)}` },
      { label: `Euler's formula`, latex: `e^{i\\theta} = \\cos\\theta + i\\sin\\theta` },
      { label: 'Product modulus', latex: `|z_1 z_2| = |z_1| \\cdot |z_2|` },
      { label: 'Product argument', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\;[2\\pi]` },
      { label: 'Conjugate', latex: `\\overline{z} = |z|\\,e^{-i\\arg(z)} \\quad ; \\quad \\arg(\\bar{z}) = -\\arg(z)` },
      { label: 'Rotation', latex: `z' - \\omega = e^{i\\theta}(z - \\omega) \\quad \\text{(center } \\omega \\text{, angle } \\theta\\text{)}` },
      { label: 'Key angles', latex: `e^{i\\pi/4} = \\tfrac{\\sqrt{2}}{2}(1+i) \\quad e^{i\\pi/2} = i \\quad e^{i\\pi} = -1` },
    ],
    theorems: [
      { name: 'Conjugate rules', statement: `\\overline{z_1+z_2} = \\bar{z_1}+\\bar{z_2} \\quad \\text{and} \\quad \\overline{z_1 z_2} = \\bar{z_1}\\,\\bar{z_2}` },
      { name: 'Negative sign', statement: `-z = z \\cdot e^{i\\pi} \\text{, i.e. } \\arg(-z)=\\arg(z)+\\pi` },
    ],
    pitfalls: [
      `arg(z̄) = -arg(z) but arg(-z) = arg(z) + π. Don't confuse them!`,
      `For rotation, SUBTRACT the center BEFORE multiplying by e^(iθ), then RE-ADD it.`,
      `e^(-iπ/2) = -i (not +i).`,
    ],
  },
  {
    id: 'integrales',
    title: 'Integrals',
    icon: '∫',
    color: '#7C4CE8',
    formulas: [
      { label: 'Antideriv. of xⁿ', latex: `\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n\\neq -1)` },
      { label: 'Antideriv. of 1/x', latex: `\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C` },
      { label: 'Antideriv. of eˣ', latex: `\\int e^x\\,dx = e^x + C` },
      { label: 'Antideriv. of ln', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C` },
      { label: 'Tangent', latex: `\\int \\tan(x)\\,dx = -\\ln|\\cos(x)| + C` },
      { label: 'Cotangent', latex: `\\int \\cot(x)\\,dx = \\ln|\\sin(x)| + C` },
      { label: `u'/u`, latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C` },
    ],
    theorems: [
      { name: 'Integration by Parts', statement: `\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'` },
      { name: 'Crucial limit', statement: `\\lim_{x\\to 0^+} x\\ln x = 0` },
    ],
    pitfalls: [
      `∫tan(x) = -ln|cos(x)|: the MINUS sign is crucial.`,
      `For improper integrals, always go through the limit λ→0⁺.`,
      `x·ln(x) → 0 as x→0⁺: this limit is indispensable.`,
    ],
  },
  {
    id: 'fonctions',
    title: 'Function Analysis',
    icon: '📈',
    color: '#4CE87C',
    formulas: [
      { label: 'Horizontal asympt.', latex: `\\lim_{x\\to\\pm\\infty} f(x) = \\ell \\implies y = \\ell` },
      { label: 'Oblique asympt.', latex: `\\lim \\dfrac{f(x)}{x} = a \\neq 0 \\text{ and } \\lim [f(x)-ax] = b \\implies y=ax+b` },
      { label: 'PB direction Ox', latex: `\\lim \\dfrac{f(x)}{x} = 0` },
      { label: 'PB direction Oy', latex: `\\lim \\dfrac{f(x)}{x} = \\pm\\infty` },
      { label: 'Convexity', latex: `f''(x) > 0 \\implies f \\text{ convex} \\quad ; \\quad f''(x) < 0 \\implies f \\text{ concave}` },
      { label: 'Inflection point', latex: `f'' \\text{ changes sign at } a \\implies a \\text{ is an inflection point}` },
    ],
    theorems: [
      { name: 'Vertical half-tangent', statement: `\\lim_{x\\to a} \\frac{f(x)-f(a)}{x-a} = \\pm\\infty \\implies \\text{vertical tangent}` },
      { name: 'Local extremum', statement: `f'(x_0)=0 \\text{ and } f'' \\text{ has constant sign} \\implies \\text{local extremum}` },
    ],
    pitfalls: [
      `eˣ dominates every polynomial and logarithm at infinity → parabolic branch direction Oy.`,
      `Vertical tangent "upward" if the curve GOES UP (even if the slope is -∞).`,
      `f''(x)>0 everywhere ⟹ CONVEX (not concave). Mnemonic: "convex = smile".`,
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
