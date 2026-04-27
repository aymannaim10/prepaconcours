// ============================================================
// Content Data – 2024 Exam Preparation
// Tips & Tricks + Course Recap — ALL IN ENGLISH
// ============================================================

export interface ExamRef {
  section: 'real-exam' | 'revision-series'
  question: number
  label: string
}

export interface Tip {
  id: string
  title: string
  topic: string
  icon: string
  color: string
  summary: string
  why: string
  formulas: { label: string; latex: string; description: string }[]
  example: { question: string; solution: string; explanation: string }
  proTip: string
  examRefs?: ExamRef[]
}

export interface RecapTopic {
  id: string
  title: string
  icon: string
  color: string
  summary: string
  formulas: { label: string; latex: string; description: string }[]
  theorems: { name: string; statement: string; keyIdea: string }[]
  pitfalls: string[]
  /** Optional id of a dedicated visual diagram to render for this topic */
  diagram?: 'asymptotic-tree' | 'diff-eq-tree'
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
    why: `Exercise 1 of the 2024 concours gives you a fraction with $1 + 5 + 5^2 + \\cdots + 5^n$ in the numerator. If you don't spot the geometric sum pattern immediately, you'll waste 5+ minutes expanding terms. This tip teaches you to recognize and simplify it in under 30 seconds.`,
    formulas: [
      { label: 'Finite sum', latex: `1 + q + q^2 + \\cdots + q^n = \\dfrac{q^{n+1}-1}{q-1} \\quad (q \\neq 1)`, description: 'Add up $n+1$ terms of a geometric series. The numerator uses $q$ raised to $(n+1)$, not $n$. This is the most common mistake — always count your terms carefully.' },
      { label: 'Infinite sum', latex: `\\sum_{k=0}^{+\\infty} q^k = \\dfrac{1}{1-q} \\quad (|q|<1)`, description: 'When the ratio $q$ is between $-1$ and $1$, the terms shrink to zero and the infinite sum converges to this clean fraction. This only works if $|q| < 1$ — check this condition first!' },
      { label: 'Limit trick', latex: `\\dfrac{a \\cdot q^n + b}{c \\cdot q^n + d} \\xrightarrow[n\\to+\\infty]{} \\dfrac{a}{c} \\quad \\text{if } |q|>1`, description: 'When $|q| > 1$, the dominant term is the one with the highest power of $q$. Divide top and bottom by that power, and all the smaller terms vanish — leaving just the ratio of leading coefficients.' },
    ],
    example: {
      question: `u_n = \\dfrac{1+5+5^{2}+\\cdots+5^{n}}{1-5^{n}}`,
      solution: `\\text{Num.} = \\dfrac{5^{n+1}-1}{4} \\implies u_n = \\dfrac{5^{n+1}-1}{4(1-5^{n})} \\approx \\dfrac{5 \\cdot 5^{n}}{-4 \\cdot 5^{n}} = -\\dfrac{5}{4}`,
      explanation: `Step 1: The numerator is a geometric sum with $q = 5$ and $n+1$ terms, so apply the finite sum formula. Step 2: To find the limit, note that $|q| = 5 > 1$, so divide numerator and denominator by $5^n$ (the highest power). Step 3: All terms with $5^{-n}$ vanish, leaving $-\\tfrac{5}{4}$.`,
    },
    proTip: `Always divide numerator and denominator by the highest power of $q$ to find the limit. This works whether $q$ is in the numerator, denominator, or both. Never try to "evaluate at infinity" directly — factor out $q^n$ first.`,
    examRefs: [
      { section: 'real-exam', question: 1, label: 'Real Exam Q1' },
      { section: 'revision-series', question: 1, label: 'Revision Q1' },
    ],
  },
  {
    id: 'suite-type',
    title: 'Decode the Sequence Type',
    topic: 'Sequences',
    icon: '🔍',
    color: '#C9A84C',
    summary: `Quick method to distinguish arithmetic vs geometric sequences using ln.`,
    why: `The concours often gives a sequence wrapped inside a logarithm (e.g., $\\ln(5^n \\cdot v_n) = \\tfrac{n}{2}$) and asks you to identify the type of $v_n$. Students who try to guess the type waste time. This systematic method using $\\ln$ always works: if $\\ln(v_n)$ is linear in $n$, it's geometric — period.`,
    formulas: [
      { label: 'Arithmetic', latex: `u_{n+1} - u_n = r \\implies u_n = u_0 + nr`, description: 'An arithmetic sequence has a constant DIFFERENCE between consecutive terms. Each term is obtained by adding the same value $r$. Think of it as a straight line: the general term is linear in $n$.' },
      { label: 'Geometric', latex: `\\dfrac{u_{n+1}}{u_n} = q \\implies u_n = u_0 \\cdot q^n`, description: 'A geometric sequence has a constant RATIO between consecutive terms. Each term is obtained by multiplying by the same value $q$. Think of it as exponential growth (or decay if $|q| < 1$).' },
      { label: 'ln→exp trick', latex: `\\ln(v_n) = an+b \\implies v_n = e^b \\cdot (e^a)^n \\;\\text{(geometric, ratio } e^a\\text{)}`, description: 'This is the golden rule: when $\\ln(v_n)$ is a linear function of $n$ (i.e., $an + b$), exponentiate both sides to get $v_n = e^b \\cdot (e^a)^n$. This is a geometric sequence with first term $e^b$ and ratio $e^a$.' },
    ],
    example: {
      question: `\\ln(5^{n} \\cdot v_n) = \\tfrac{n}{2}`,
      solution: `\\ln v_n = \\tfrac{n}{2} - n\\ln 5 = n\\!\\left(\\tfrac{1}{2}-\\ln 5\\right) \\implies v_n = \\left(\\tfrac{\\sqrt{e}}{5}\\right)^{\\!n}`,
      explanation: `Step 1: Isolate $\\ln(v_n)$ by expanding: $\\ln(5^n) + \\ln(v_n) = \\tfrac{n}{2}$, so $\\ln(v_n) = \\tfrac{n}{2} - n\\ln 5$. Step 2: Factor out $n$ to get $\\ln(v_n) = n\\bigl(\\tfrac{1}{2} - \\ln 5\\bigr)$. This is linear in $n$ (form $an + b$ with $b = 0$). Step 3: Exponentiate: $v_n = \\bigl(e^{\\frac{1}{2} - \\ln 5}\\bigr)^{\\!n} = \\bigl(\\tfrac{\\sqrt{e}}{5}\\bigr)^{\\!n}$. It's geometric with ratio $\\tfrac{\\sqrt{e}}{5}$.`,
    },
    proTip: `If $\\ln(v_n)$ is linear in $n$ → geometric sequence. If $v_n$ is linear in $n$ → arithmetic sequence. This rule NEVER fails. When in doubt, compute $\\ln(v_n)$ and check if it simplifies to the form $an + b$.`,
    examRefs: [
      { section: 'real-exam', question: 2, label: 'Real Exam Q2' },
      { section: 'revision-series', question: 2, label: 'Revision Q2' },
    ],
  },
  {
    id: 'complex-arg',
    title: 'Argument in 30 Seconds',
    topic: 'Complex Numbers',
    icon: '🎯',
    color: '#4CADE8',
    summary: `The argument rules to solve Exercise 3 without heavy computation.`,
    why: `Exercise 3 asks for the argument of expressions like $(1+i)\\bar{z}$ where $z = -e^{i\\frac{5\\pi}{12}}$. Computing this by converting to $a+bi$ form is long and error-prone. Instead, use these 4 rules to break ANY argument into simple additions — you can literally solve it in your head.`,
    formulas: [
      { label: 'Product', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\pmod{2\\pi}`, description: 'When you multiply two complex numbers, their arguments ADD. So to find $\\arg(z_1 z_2)$, just add the individual arguments. This is the most frequently used rule in the concours.' },
      { label: 'Conjugate', latex: `\\arg(\\bar{z}) = -\\arg(z) \\pmod{2\\pi}`, description: 'The conjugate of $z$ is its reflection across the real axis. This flips the sign of the argument. If $z$ has argument $\\theta$, then $\\bar{z}$ has argument $-\\theta$.' },
      { label: 'Minus sign', latex: `\\arg(-z) = \\arg(z) + \\pi \\pmod{2\\pi}`, description: 'Multiplying by $-1$ is a half-turn rotation ($180°$). So negating $z$ adds $\\pi$ to the argument. CAREFUL: this is $+\\pi$, not $-\\pi$ (they are the same modulo $2\\pi$, but $+\\pi$ is the convention).' },
      { label: 'Euler', latex: `e^{i\\theta} \\;\\text{has argument } \\theta`, description: 'This is the definition: the exponential form $e^{i\\theta}$ represents a complex number with modulus $1$ and argument $\\theta$. Whenever you see $e^{i\\theta}$, you instantly know the argument is $\\theta$.' },
    ],
    example: {
      question: `z = -e^{i\\frac{5\\pi}{12}},\\; z'=(1+i)\\bar{z}`,
      solution: `\\arg(z) = \\pi + \\tfrac{5\\pi}{12} = \\tfrac{17\\pi}{12} \\equiv -\\tfrac{7\\pi}{12}\\;[2\\pi] \\implies \\arg(\\bar{z}) = \\tfrac{7\\pi}{12} \\implies \\arg(z') = \\tfrac{\\pi}{4} + \\tfrac{7\\pi}{12} = \\tfrac{3\\pi+7\\pi}{12} = \\tfrac{5\\pi}{6} \\equiv -\\tfrac{7\\pi}{6}\\;[2\\pi]`,
      explanation: `Step 1: $z = -e^{i\\frac{5\\pi}{12}}$, so $\\arg(z) = \\arg(-1) + \\arg(e^{i\\frac{5\\pi}{12}}) = \\pi + \\tfrac{5\\pi}{12} = \\tfrac{17\\pi}{12}$. Step 2: For $\\bar{z}$, flip the sign: $\\arg(\\bar{z}) = -\\tfrac{17\\pi}{12} = \\tfrac{7\\pi}{12}$ (mod $2\\pi$). Step 3: For $z' = (1+i)\\cdot\\bar{z}$, use the product rule: $\\arg(1+i) = \\tfrac{\\pi}{4}$, so $\\arg(z') = \\tfrac{\\pi}{4} + \\tfrac{7\\pi}{12} = \\tfrac{5\\pi}{6}$.`,
    },
    proTip: `Always decompose into simple factors: $-1 = e^{i\\pi}$, $1+i = \\sqrt{2}\\,e^{i\\frac{\\pi}{4}}$. For $z = -e^{i\\theta}$: $\\arg(\\bar{z}) = -(\\pi+\\theta) \\equiv \\pi-\\theta \\;[2\\pi]$. Memorize these decompositions — they turn a 5-minute calculation into 30 seconds.`,
    examRefs: [
      { section: 'real-exam', question: 3, label: 'Real Exam Q3' },
      { section: 'revision-series', question: 3, label: 'Revision Q3' },
    ],
  },
  {
    id: 'rotation',
    title: 'The Rotation Formula',
    topic: 'Complex Numbers',
    icon: '🔄',
    color: '#4CADE8',
    summary: `One formula for all rotation problems — Exercise 4.`,
    why: `Exercise 4 asks you to rotate a point $A$ around a center $B$ by an angle $\\theta$. Many students forget the correct order of operations and get the wrong answer. This tip gives you a single formula that works every time: subtract the center, multiply by $e^{i\\theta}$, then add the center back.`,
    formulas: [
      { label: 'Key formula', latex: `z_{A'} - z_B = e^{i\\theta} \\cdot (z_A - z_B)`, description: 'This is the rotation formula in its purest form. It says: the vector from center $B$ to the new point $A\'$ equals the vector from $B$ to $A$, rotated by angle $\\theta$. The rotation is done by multiplying by $e^{i\\theta}$.' },
      { label: 'Expanded', latex: `z_{A'} = z_B + e^{i\\theta}(z_A - z_B)`, description: 'The same formula solved for $z_{A\'}$: first compute $(z_A - z_B)$, multiply by $e^{i\\theta}$, then add $z_B$ back. The order matters — subtract BEFORE rotating, add AFTER rotating.' },
      { label: 'Common angles', latex: `e^{i\\frac{\\pi}{2}} = i \\quad e^{-i\\frac{\\pi}{2}} = -i \\quad e^{i\\pi} = -1`, description: 'For $90°$ rotation, multiply by $i$. For $-90°$ rotation, multiply by $-i$. For $180°$ rotation, multiply by $-1$. These three cases cover most concours rotation problems.' },
    ],
    example: {
      question: `z_A=4+i,\\; z_B=-i,\\; \\theta=\\tfrac{\\pi}{2}`,
      solution: `z_{A'} = -i + i(4+2i) = -i -2+4i = -2+3i`,
      explanation: `Step 1: Compute the vector $z_A - z_B = (4+i) - (-i) = 4+2i$. Step 2: $\\theta = \\tfrac{\\pi}{2}$, so multiply by $e^{i\\frac{\\pi}{2}} = i$: $i \\cdot (4+2i) = 4i + 2i^2 = 4i - 2 = -2+4i$. Step 3: Add the center back: $z_{A'} = z_B + (-2+4i) = -i + (-2+4i) = -2+3i$.`,
    },
    proTip: `Don't forget: the center $B$ is SUBTRACTED from $A$ before multiplying, then RE-ADDED. The most common error is forgetting to re-add $z_B$ at the end, which gives you the rotated VECTOR instead of the rotated POINT.`,
    examRefs: [
      { section: 'real-exam', question: 4, label: 'Real Exam Q4' },
      { section: 'revision-series', question: 4, label: 'Revision Q4' },
    ],
  },
  {
    id: 'trig-integrals',
    title: 'Integrals of tan & cot',
    topic: 'Integrals',
    icon: '∫',
    color: '#9066EE',
    summary: `The essential antiderivatives for Exercise 5 — learn them by heart.`,
    why: `Exercise 5 of the concours directly asks you to compute $\\int \\tan(x)\\,dx$ and $\\int \\cot(x)\\,dx$ on $\\bigl[\\tfrac{\\pi}{6},\\, \\tfrac{\\pi}{3}\\bigr]$. These are NOT in the standard formula sheet. If you don't know them by heart, you need to derive them from scratch using the $u'/u$ trick — which costs precious time under exam pressure.`,
    formulas: [
      { label: 'Tangent', latex: `\\int \\tan(x)\\,dx = -\\ln|\\cos(x)| + C`, description: 'Write $\\tan(x) = \\sin(x)/\\cos(x)$. Since the derivative of $\\cos(x)$ is $-\\sin(x)$, the numerator is $-u\'$ where $u = \\cos(x)$. So the integral is $-\\ln|\\cos(x)|$. The minus sign is the #1 source of errors — drill it.' },
      { label: 'Cotangent', latex: `\\int \\cot(x)\\,dx = \\ln|\\sin(x)| + C`, description: 'Write $\\cot(x) = \\cos(x)/\\sin(x)$. The derivative of $\\sin(x)$ is $\\cos(x)$, so the numerator IS $u\'$ where $u = \\sin(x)$. The integral is simply $\\ln|\\sin(x)|$ — no minus sign this time.' },
      { label: 'Trick', latex: `\\tan(x) = \\dfrac{\\sin x}{\\cos x} \\implies \\int \\dfrac{u'}{u} = \\ln|u|`, description: 'This is the underlying pattern: any integral of the form $\\int u\'/u\\,dx$ equals $\\ln|u|$. For $\\tan$, $u = \\cos(x)$ and $u\' = -\\sin(x)$, giving the minus sign. For $\\cot$, $u = \\sin(x)$ and $u\' = \\cos(x)$, with no sign issue.' },
    ],
    example: {
      question: `I = \\int_{\\pi/6}^{\\pi/3} \\tan(x)\\,dx`,
      solution: `I = \\Big[-\\ln|\\cos x|\\Big]_{\\pi/6}^{\\pi/3} = -\\ln\\tfrac{1}{2}+\\ln\\tfrac{\\sqrt{3}}{2} = \\ln\\sqrt{3}`,
      explanation: `Step 1: Apply the formula: $\\int\\tan(x)\\,dx = -\\ln|\\cos(x)|$. Step 2: Evaluate at bounds: $-\\ln\\!\\bigl|\\cos\\tfrac{\\pi}{3}\\bigr| + \\ln\\!\\bigl|\\cos\\tfrac{\\pi}{6}\\bigr| = -\\ln\\tfrac{1}{2} + \\ln\\tfrac{\\sqrt{3}}{2}$. Step 3: Simplify: $-\\ln\\tfrac{1}{2} = \\ln 2$, and $\\ln\\tfrac{\\sqrt{3}}{2} = \\ln\\sqrt{3} - \\ln 2$. So $I = \\ln 2 + \\ln\\sqrt{3} - \\ln 2 = \\ln\\sqrt{3}$.`,
    },
    proTip: `$\\tan$ and $\\cot$ on $\\bigl[\\tfrac{\\pi}{6},\\,\\tfrac{\\pi}{3}\\bigr]$ give the SAME result due to the interval's symmetry around $\\tfrac{\\pi}{4}$. This is not a coincidence — it's because $\\tan\\!\\bigl(\\tfrac{\\pi}{2} - x\\bigr) = \\cot(x)$, and the interval is symmetric around $\\tfrac{\\pi}{4}$.`,
    examRefs: [
      { section: 'real-exam', question: 5, label: 'Real Exam Q5' },
      { section: 'real-exam', question: 6, label: 'Real Exam Q6' },
      { section: 'revision-series', question: 5, label: 'Revision Q5' },
    ],
  },
  {
    id: 'complementary-substitution',
    title: 'Substitution t = π/2 − x: Prove I = J Instantly',
    topic: 'Integrals',
    icon: '∫',
    color: '#9066EE',
    summary: `One substitution proves I = J on [π/6, π/3], then I+J = ln(3) — Exercise 5.`,
    why: `Exercise 5 asks you to show that $I = J$ (integrals of $\\tan$ and $\\cot$ over the same interval). The substitution $t = \\tfrac{\\pi}{2} - x$ transforms $\\tan$ into $\\cot$ automatically. It is the most elegant and fastest technique — replacing 10 lines of computation with 3.`,
    formulas: [
      { label: 'Substitution', latex: `t = \\tfrac{\\pi}{2} - x,\\quad dt = -dx`, description: 'Set $t = \\tfrac{\\pi}{2} - x$. When $x$ goes from $\\tfrac{\\pi}{6}$ to $\\tfrac{\\pi}{3}$, $t$ goes from $\\tfrac{\\pi}{3}$ to $\\tfrac{\\pi}{6}$ (bounds flip). The negative sign from $dt$ cancels with the flipped bounds.' },
      { label: 'Key identity', latex: `\\tan\\!\\left(\\tfrac{\\pi}{2}-x\\right) = \\cot(x) = \\dfrac{1}{\\tan x}`, description: 'This is the complementary identity: $\\tan$ and $\\cot$ are "mirrors" around $\\tfrac{\\pi}{4}$. When you substitute $t = \\tfrac{\\pi}{2} - x$ into $\\tan(x)$, you get $\\cot(t)$. This is what transforms $I$ into $J$.' },
      { label: 'Computing J', latex: `J = \\Big[\\ln|\\sin x|\\Big]_{\\pi/6}^{\\pi/3} = \\ln\\tfrac{\\sqrt{3}}{2} - \\ln\\tfrac{1}{2} = \\ln\\!\\sqrt{3}`, description: 'Evaluate directly: $\\sin\\tfrac{\\pi}{3} = \\tfrac{\\sqrt{3}}{2}$ and $\\sin\\tfrac{\\pi}{6} = \\tfrac{1}{2}$. Result: $\\ln\\tfrac{\\sqrt{3}}{2} - \\ln\\tfrac{1}{2} = \\ln\\sqrt{3}$.' },
      { label: 'Result', latex: `I = J = \\ln\\!\\sqrt{3} \\implies I+J = 2\\ln\\!\\sqrt{3} = \\ln 3`, description: 'Since $I = J = \\ln(\\sqrt{3})$, their sum is $2\\ln(\\sqrt{3}) = \\ln(\\sqrt{3}^2) = \\ln(3)$. Watch the trap: the answer is $\\ln(3)$, NOT $\\ln(\\sqrt{3})$. Many students forget to double.' },
    ],
    example: {
      question: `J = \\int_{\\pi/6}^{\\pi/3} \\dfrac{dx}{\\tan x}.\\; \\text{Show } J=I \\text{ and compute } I+J.`,
      solution: `\\text{Let } t=\\tfrac{\\pi}{2}-x.\\; x:\\tfrac{\\pi}{6}\\to\\tfrac{\\pi}{3} \\Leftrightarrow t:\\tfrac{\\pi}{3}\\to\\tfrac{\\pi}{6}.\\; J=\\int_{\\pi/3}^{\\pi/6}\\cot\\!\\left(\\tfrac{\\pi}{2}-t\\right)(-dt)=\\int_{\\pi/6}^{\\pi/3}\\tan t\\,dt=I \\implies I+J=2\\ln\\!\\sqrt{3}=\\ln 3`,
      explanation: `Step 1: Substitute $t = \\tfrac{\\pi}{2} - x$ into $J$. Bounds flip: $x = \\tfrac{\\pi}{6} \\to t = \\tfrac{\\pi}{3}$, $x = \\tfrac{\\pi}{3} \\to t = \\tfrac{\\pi}{6}$. Step 2: $\\cot(x) = \\cot\\!\\bigl(\\tfrac{\\pi}{2} - t\\bigr) = \\tan(t)$ by the complementary identity. Step 3: The $-dt$ plus flipped bounds give a positive sign: $J = \\int_{\\pi/6}^{\\pi/3} \\tan(t)\\,dt = I$. Step 4: $I + J = 2I = 2\\ln\\sqrt{3} = \\ln 3$.`,
    },
    proTip: `Whenever the interval is $\\bigl[\\tfrac{\\pi}{6},\\,\\tfrac{\\pi}{3}\\bigr]$ (symmetric around $\\tfrac{\\pi}{4}$) and the integrands are $f(x)$ and $f\\!\\bigl(\\tfrac{\\pi}{2}-x\\bigr)$, the two integrals are equal. This eliminates traps like $I=-J$, $I=\\tfrac{1}{J}$, and the distractor $I+J=\\ln(\\sqrt{3})$.`,
    examRefs: [
      { section: 'real-exam', question: 6, label: 'Real Exam Q6' },
    ],
  },
  {
    id: 'improper-integral',
    title: 'The Limit x·ln(x) → 0',
    topic: 'Integrals',
    icon: '🔬',
    color: '#9066EE',
    summary: `The key growth comparison for improper integrals — Exercise 6.`,
    why: `Exercise 6 asks you to compute $\\int_0^2 \\ln(x)\\,dx$. The problem: $\\ln(x) \\to -\\infty$ as $x \\to 0^+$, so the integral is improper. To evaluate it, you MUST know that $x\\ln(x) \\to 0$. Without this fact, you cannot compute the boundary term and the entire exercise collapses.`,
    formulas: [
      { label: 'Crucial limit', latex: `\\lim_{x \\to 0^+} x \\cdot \\ln(x) = 0`, description: 'This is the most important limit for improper integrals. Even though $\\ln(x) \\to -\\infty$, the factor $x \\to 0$ wins the "race to zero." The product $x\\ln(x)$ goes to $0$. Memorize this — it appears in every concours.' },
      { label: 'Antideriv. of ln', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C`, description: 'Found by integration by parts: let $u = \\ln(x)$ and $v\' = 1$. Then $u\' = \\tfrac{1}{x}$ and $v = x$. Apply the formula: $\\int\\ln(x)\\,dx = x\\ln(x) - \\int x \\cdot \\tfrac{1}{x}\\,dx = x\\ln(x) - x + C$.' },
      { label: 'Improper integral', latex: `\\int_0^a \\ln(x)\\,dx = \\lim_{\\lambda\\to 0^+} \\Big[x\\ln x - x\\Big]_\\lambda^a`, description: 'Since $\\ln(x)$ is undefined at $x = 0$, replace the lower bound by $\\lambda > 0$, compute the definite integral, then take the limit as $\\lambda \\to 0^+$. The boundary term $\\lambda\\ln(\\lambda) \\to 0$ by the crucial limit above.' },
    ],
    example: {
      question: `I(\\lambda) = \\int_\\lambda^2 \\ln(x)\\,dx`,
      solution: `I(\\lambda) = (2\\ln 2-2)-(\\lambda\\ln\\lambda-\\lambda) \\implies \\lim_{\\lambda\\to 0^+} I = \\ln 4 - 2`,
      explanation: `Step 1: Antiderivative is $x\\ln(x) - x$. Step 2: Evaluate at $x = 2$: $2\\ln(2) - 2 = \\ln(4) - 2$. Step 3: Evaluate at $x = \\lambda$: $\\lambda\\ln(\\lambda) - \\lambda$. Step 4: Take $\\lambda \\to 0^+$: $\\lambda\\ln(\\lambda) \\to 0$ (crucial limit!) and $\\lambda \\to 0$. So the lower bound contributes $0 - 0 = 0$. Final answer: $\\ln(4) - 2$.`,
    },
    proTip: `Remember: $x\\ln(x) \\to 0$ as $x \\to 0^+$. Intuition: "$\\ln$ goes to $-\\infty$ but $x$ crushes it to $0$." If you forget this limit, you can re-derive it using L'Hôpital's rule on $\\dfrac{\\ln(x)}{1/x}$, but that costs 2 extra minutes.`,
    examRefs: [
      { section: 'real-exam', question: 7, label: 'Real Exam Q7' },
      { section: 'revision-series', question: 6, label: 'Revision Q6' },
    ],
  },
  {
    id: 'parabolic-branch',
    title: 'Asymptotes vs Parabolic Branches',
    topic: 'Function Analysis',
    icon: '📐',
    color: '#4CE87C',
    summary: `The decision tree for Exercise 7 — never confuse them again.`,
    why: `Exercise 7 always asks: "Does f have an asymptote or a parabolic branch at infinity?" Students mix up the three cases (horizontal asymptote, oblique asymptote, parabolic branch). This decision tree gives you a systematic 2-step test that eliminates all confusion.`,
    formulas: [
      { label: 'Test 1', latex: `\\lim_{x\\to+\\infty} f(x) = \\ell \\implies \\text{horizontal asymptote } y=\\ell`, description: 'First check: does $f(x)$ approach a finite value $\\ell$? If YES → horizontal asymptote $y = \\ell$, and you\'re done. If $f(x) \\to \\pm\\infty$, move to Test 2.' },
      { label: 'Test 2', latex: `\\lim_{x\\to+\\infty} \\dfrac{f(x)}{x} = \\begin{cases} 0 \\implies \\text{PB dir. } Ox \\\\ \\pm\\infty \\implies \\text{PB dir. } Oy \\\\ a \\neq 0 \\implies \\text{oblique asympt.} \\end{cases}`, description: 'Divide $f(x)$ by $x$ and take the limit. Three possibilities: (a) limit is $0$ → parabolic branch direction $Ox$ (curve grows but slower than a line). (b) limit is $\\pm\\infty$ → parabolic branch direction $Oy$ (curve grows faster than any line). (c) limit is a nonzero constant $a$ → look for oblique asymptote $y = ax + b$.' },
    ],
    example: {
      question: `f(x) = e^x + x[\\ln x - e -1]`,
      solution: `\\dfrac{f(x)}{x} = \\dfrac{e^x}{x} + \\ln x - e -1 \\to +\\infty \\implies \\text{PB direction } Oy`,
      explanation: `Step 1: $f(x) \\to +\\infty$ (because of $e^x$), so no horizontal asymptote. Move to Test 2. Step 2: Compute $f(x)/x = e^x/x + \\ln(x) - e - 1$. Step 3: $\\tfrac{e^x}{x} \\to +\\infty$ (exponential dominates polynomial), and $\\ln(x) \\to +\\infty$. So the whole expression $\\to +\\infty$. Conclusion: parabolic branch direction $Oy$.`,
    },
    proTip: `$e^x$ dominates EVERY polynomial and logarithm. If $f$ contains $e^x$, the answer is almost always "PB direction $Oy$". The only exception is if $e^x$ appears in a way that cancels (rare in the concours).`,
    examRefs: [
      { section: 'real-exam', question: 8, label: 'Real Exam Q8' },
      { section: 'revision-series', question: 7, label: 'Revision Q7' },
    ],
  },
  {
    id: 'product-derivative',
    title: "Differentiate f(x) = eˣ + x·g(x) Without the Trap",
    topic: 'Function Analysis',
    icon: '✏️',
    color: '#4CE87C',
    summary: `The product rule trap with x·ln(x) that costs students the f'(x) question in Exercise 7.`,
    why: `The question "compute f'(x)" looks simple, but the product $x(\\ln x - e - 1)$ contains a classic trap: $x \\cdot \\ln x$ differentiates to $\\ln x + 1$ (not just $\\ln x$). The $+1$ cancels with the $-1$ from the constant $(-e-1)$, giving a net result of $-e$. If you forget the $+1$, you get $-e-1$ instead of $-e$.`,
    formulas: [
      { label: 'Product rule', latex: `[u(x)\\cdot v(x)]' = u'(x)\\,v(x) + u(x)\\,v'(x)`, description: 'The fundamental rule: to differentiate a product, differentiate the first factor while keeping the second, then add the first factor times the derivative of the second. Never differentiate both factors at once.' },
      { label: 'Key derivatives', latex: `(e^x)' = e^x \\qquad (\\ln x)' = \\tfrac{1}{x} \\qquad (x\\ln x)' = \\ln x + 1`, description: 'Three derivatives to know by heart. Note the last one: $(x\\ln x)\' = 1 \\cdot \\ln(x) + x \\cdot \\tfrac{1}{x} = \\ln(x) + 1$. The "$+1$" comes from the product rule — it is the trap in this exercise.' },
      { label: 'Net result', latex: `f(x) = e^x + x(\\ln x - e - 1) \\implies f'(x) = e^x + \\ln x + 1 - e - 1 = e^x + \\ln x - e`, description: 'Expanding: $f\'(x) = e^x + \\bigl[1 \\cdot (\\ln x - e - 1) + x \\cdot \\tfrac{1}{x}\\bigr] = e^x + \\ln x - e - 1 + 1 = e^x + \\ln x - e$. The $+1$ and $-1$ cancel perfectly, leaving just $-e$.' },
    ],
    example: {
      question: `f(x) = e^x + x(\\ln x - e - 1),\\; x>0.\\; \\text{Compute } f'(x).`,
      solution: `f'(x) = e^x + (\\ln x - e - 1) + x\\cdot\\tfrac{1}{x} = e^x + \\ln x \\underbrace{- e - 1 + 1}_{= -e} = e^x + \\ln x - e`,
      explanation: `Step 1: Differentiate $e^x \\to e^x$. Step 2: Differentiate $x(\\ln x - e - 1)$ with the product rule: $u = x$, $v = \\ln x - e - 1$, $u\' = 1$, $v\' = \\tfrac{1}{x}$. Result: $1 \\cdot (\\ln x - e - 1) + x \\cdot \\tfrac{1}{x} = \\ln x - e - 1 + 1$. Step 3: Simplify: $-1 + 1 = 0$, so we're left with $e^x + \\ln x - e$. Check: $f\'(1) = e + 0 - e = 0$ ✓`,
    },
    proTip: `The trap: differentiating $x(-e-1)$ gives $(-e-1)$, and $x\\ln x$ gives $\\ln x+1$. The $+1$ and $-1$ cancel. Result: $-e$, NOT $+e$. Check: $f'(1) = e + 0 - e = 0$ ✓ (minimum at $x=1$). Always verify your derivative at a simple point like $x = 1$.`,
    examRefs: [
      { section: 'real-exam', question: 9, label: 'Real Exam Q9' },
    ],
  },
  {
    id: 'function-range',
    title: "Range of f: 4-Step Method",
    topic: 'Function Analysis',
    icon: '🎯',
    color: '#4CE87C',
    summary: `The systematic method to find f([0, +∞[) — an explicit question in Exercise 7.`,
    why: `"Determine the range of f" is a classic question worth 2-3 points. Many students just say "f goes from −∞ to +∞" without justification. The 4-step method gives a rigorous, complete answer: find the minimum, evaluate the bounds, conclude with the Intermediate Value Theorem.`,
    formulas: [
      { label: 'Step 1 — critical point', latex: `f'(x_0) = 0 \\implies x_0 \\text{ candidate extremum}`, description: 'Start by finding where the derivative equals zero. These points are candidates for extrema (minimum or maximum). Solve $f\'(x) = 0$.' },
      { label: 'Step 2 — nature', latex: `f''(x_0) > 0 \\implies \\text{local minimum at } x_0`, description: 'Check the nature of each critical point using the second derivative. If $f\'\'(x_0) > 0$, it is a minimum (curve "smiles"). If $f\'\'(x_0) < 0$, it is a maximum.' },
      { label: 'Step 3 — values', latex: `\\text{Evaluate } f(0),\\; f(x_0),\\; \\lim_{x\\to+\\infty}f(x)`, description: 'Compute $f$ at key points: domain boundaries, extrema, and limits at infinity. These values determine the range of $f$.' },
      { label: 'Step 4 — IVT', latex: `f \\text{ continuous} + \\text{global min} \\implies f([0,+\\infty[) = [f(x_0),+\\infty[`, description: 'By the Intermediate Value Theorem, a continuous function takes all values between its minimum and maximum. If $f \\to +\\infty$, the range is $[\\text{minimum},\\,+\\infty[$.' },
    ],
    example: {
      question: `f(x) = e^x + x(\\ln x - e - 1),\\; f(0)=1.\\; \\text{Find } f([0,+\\infty[).`,
      solution: `f'(x)=e^x+\\ln x-e=0 \\text{ at } x=1\\;(e+0-e=0\\checkmark).\\quad f(1)=e+(0-e-1)=-1\\;(\\text{global min, since }f''>0).\\quad f(0)=1,\\; f\\to+\\infty.\\quad \\therefore\\; f([0,+\\infty[)=[-1,+\\infty[`,
      explanation: `Step 1: $f\'(x) = e^x + \\ln x - e = 0$ → solving gives $x = 1$ (check: $e + 0 - e = 0$ ✓). Step 2: $f\'\'(1) = e + 1 > 0$ → it is a minimum. Step 3: $f(0) = 1$, $f(1) = e + 0 - e - 1 = -1$ (global minimum), $f(+\\infty) = +\\infty$. Step 4: $f$ is continuous with minimum $-1$ and $f \\to +\\infty$, so $f([0,+\\infty[) = [-1,\\,+\\infty[$.`,
    },
    proTip: `Always verify $f'(x_0)=0$: $f'(1)=e+\\ln 1-e=0$ ✓. Then $f(1)=e+1\\cdot(0-e-1)=-1$. The range is $[\\text{minimum}, +\\infty[$ when $f$ is eventually increasing and continuous. Don't forget to mention the IVT in your solution.`,
    examRefs: [
      { section: 'real-exam', question: 10, label: 'Real Exam Q10' },
      { section: 'revision-series', question: 8, label: 'Revision Q8' },
    ],
  },
  {
    id: 'convexity-no-inflection',
    title: "Always Convex: When f″ Never Changes Sign",
    topic: 'Function Analysis',
    icon: '📐',
    color: '#4CE87C',
    summary: `Why x=1 is NOT an inflection point — Questions 9 and 10 of Exercise 7.`,
    why: `Questions 9 and 10 of Exercise 7 are traps designed for students who confuse "$f\'\'(x_0) = 0$" with "$x_0$ is an inflection point." An inflection point requires a SIGN CHANGE of $f\'\'$. Here $f\'\' > 0$ everywhere, so there is no inflection point — the curve is always convex.`,
    formulas: [
      { label: 'Definition', latex: `x_0 \\text{ is an inflection point} \\iff f'' \\text{ changes sign at } x_0`, description: 'The TRUE definition of an inflection point: it is NOT $f\'\'(x_0) = 0$ (necessary but not sufficient). It is $f\'\'$ switching from positive to negative (or vice versa) at $x_0$. No sign change, no inflection.' },
      { label: 'Computing f″', latex: `f'(x) = e^x + \\ln x - e \\implies f''(x) = e^x + \\dfrac{1}{x}`, description: 'Differentiate $f\'(x)$: $(e^x)\' = e^x$ and $(\\ln x)\' = \\tfrac{1}{x}$. The constant $-e$ vanishes. Result: $f\'\'(x) = e^x + \\tfrac{1}{x}$.' },
      { label: 'Sign of f″', latex: `\\forall x>0:\\; e^x > 0 \\text{ and } \\tfrac{1}{x} > 0 \\implies f''(x) > 0 \\text{ — NEVER changes sign}`, description: 'Both terms $e^x$ and $\\tfrac{1}{x}$ are STRICTLY positive for all $x > 0$. Their sum is therefore strictly positive. $f\'\'$ never equals zero and never changes sign → no inflection point, $f$ is convex on all of $]0,\\,+\\infty[$.' },
    ],
    example: {
      question: `\\text{Is } x=1 \\text{ an inflection point of } f\\,?`,
      solution: `f''(x) = e^x + \\tfrac{1}{x} > 0\\;\\forall x>0.\\; f'' \\text{ never changes sign} \\implies \\text{no inflection point.}\\; f \\text{ is strictly CONVEX on } ]0,+\\infty[.`,
      explanation: `Step 1: Compute $f\'\'(1) = e + 1 \\approx 3.72 > 0$. Step 2: But this is NOT sufficient — we must show that $f\'\'$ NEVER changes sign. Step 3: For all $x > 0$, $e^x > 0$ and $\\tfrac{1}{x} > 0$, so $f\'\'(x) > 0$ always. Conclusion: $f\'\'$ is always positive → $f$ is strictly convex → no inflection point anywhere.`,
    },
    proTip: `Classic trap: $f''(1)=e+1\\neq 0$ is enough to exclude $x=1$. But the real reason is $f''>0$ everywhere → $f$ is convex on ALL of $[0,+\\infty[$. So $f$ is NOT concave on $[0,1]$. Watch out for the MCQ trap that proposes "f is concave on [0,1] and convex on [1,+∞[" — this is FALSE.`,
    examRefs: [
      { section: 'real-exam', question: 10, label: 'Real Exam Q10' },
    ],
  },
  {
    id: 'half-tangent',
    title: 'Half-Tangent: Up or Down?',
    topic: 'Function Analysis',
    icon: '📈',
    color: '#4CE87C',
    summary: `How to determine the direction of the vertical half-tangent at a boundary point.`,
    why: `The concours asks "determine the half-tangent at $x = 0$." Students often get the formula right but answer "upward" instead of "downward" (or vice versa). This tip gives you an infallible rule: the SIGN of the limit of the difference quotient tells you the direction. Positive = up, negative = down. No exceptions.`,
    formulas: [
      { label: 'Vertical half-tangent', latex: `\\lim_{x\\to a^+} \\dfrac{f(x)-f(a)}{x-a} = \\pm\\infty \\implies \\text{vertical tangent}`, description: 'A vertical half-tangent occurs when the slope of the secant line from $(a,\\,f(a))$ to $(x,\\,f(x))$ tends to $\\pm\\infty$ as $x$ approaches $a$. This means the curve becomes vertical at that point — it goes straight up or straight down.' },
      { label: 'Direction', latex: `\\text{Slope } \\to +\\infty \\implies \\text{upward} \\quad \\text{Slope } \\to -\\infty \\implies \\text{downward}`, description: 'The rule is intuitive: if the slope is going to $+\\infty$, the tangent points upward (the curve rises steeply). If the slope goes to $-\\infty$, the tangent points downward (the curve drops steeply). This rule has NO exceptions.' },
    ],
    example: {
      question: `f'(0^+) = \\lim_{x\\to 0^+}(e^x + \\ln x - e) = -\\infty`,
      solution: `\\dfrac{f(x)-f(0)}{x-0} \\xrightarrow[x\\to 0^+]{} -\\infty \\implies \\text{demi-tangente verticale dirigée vers le } \\mathbf{BAS}`,
      explanation: `Step 1: Compute the limit of $f\'(x)$ as $x \\to 0^+$: $f\'(x) = e^x + \\ln(x) - e$. As $x \\to 0^+$, $e^x \\to 1$, $\\ln(x) \\to -\\infty$, so $f\'(0^+) = 1 - \\infty - e = -\\infty$. Step 2: The slope goes to $-\\infty$, which means the curve drops vertically. Conclusion: vertical half-tangent directed DOWNWARD.`,
    },
    proTip: `Rule with no exceptions: $f'(a^+) \\to +\\infty$ ⟹ half-tangent pointing UP; $f'(a^+) \\to -\\infty$ ⟹ pointing DOWN. For this concours: $f'(0^+) = e^0 + \\ln(0^+) - e = 1 - \\infty - e = -\\infty$ → answer: DOWNWARD. Visualize: the curve "plunges" vertically at x = 0.`,
    examRefs: [
      { section: 'real-exam', question: 9, label: 'Real Exam Q9' },
    ],
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
    summary: 'A sequence is an ordered list of numbers following a rule. You need to know two families: arithmetic (constant difference) and geometric (constant ratio). The concours tests your ability to identify the type, compute sums, and find limits.',
    formulas: [
      { label: 'Arithmetic seq.', latex: `u_n = u_0 + n \\cdot r`, description: 'Each term equals the first term plus n times the common difference r.' },
      { label: 'Arithmetic sum', latex: `S_n = \\dfrac{(n+1)(u_0+u_n)}{2}`, description: 'Sum of n+1 consecutive terms: multiply the count by the average of first and last.' },
      { label: 'Geometric seq.', latex: `u_n = u_0 \\cdot q^n`, description: 'Each term equals the first term multiplied by the ratio $q$ raised to power $n$.' },
      { label: 'Geometric sum', latex: `S_n = u_0 \\cdot \\dfrac{1-q^{n+1}}{1-q} \\quad (q\\neq 1)`, description: 'Finite sum of a geometric series. Only valid when $q \\neq 1$.' },
      { label: 'Geometric conv.', latex: `|q|<1 \\implies \\lim q^n = 0 \\quad ; \\quad |q|>1 \\implies \\lim |q^n| = +\\infty`, description: 'If |q| < 1, powers shrink to 0. If |q| > 1, they explode to infinity.' },
      { label: 'Growth comparison', latex: `\\lim_{n\\to+\\infty} \\dfrac{\\ln n}{n} = 0 \\quad ; \\quad \\lim \\dfrac{n^k}{q^n} = 0 \\;(q>1)`, description: 'Logarithms grow slower than any power, and powers grow slower than exponentials.' },
    ],
    theorems: [
      { name: 'Monotone Convergence', statement: `\\text{Every increasing and bounded above sequence converges.}`, keyIdea: 'If a sequence always goes up but can\'t exceed a ceiling, it must settle at a limit.' },
      { name: 'Geometric seq. & ln', statement: `\\text{If } \\ln(u_n) = an + b \\text{, then } u_n = e^b \\cdot (e^a)^n \\text{ is geometric with ratio } e^a`, keyIdea: 'When ln(uₙ) is linear in n, exponentiate to reveal a geometric sequence.' },
    ],
    pitfalls: [
      `Don't confuse common difference $r$ (arithmetic) with common ratio $q$ (geometric).`,
      `For the geometric sum, the number of terms from $5^0$ to $5^n$ is $n+1$, not $n$.`,
      `Check that $q \\neq 1$ before applying the sum formula.`,
    ],
  },
  {
    id: 'complexes',
    title: 'Complex Numbers',
    icon: '🌀',
    color: '#4CADE8',
    summary: 'Complex numbers extend the real numbers with i² = −1. Every complex number has a modulus (distance from origin) and an argument (angle). The concours heavily tests exponential form, argument rules, and geometric transformations like rotations.',
    formulas: [
      { label: 'Exponential form', latex: `z = |z| \\cdot e^{i\\arg(z)}`, description: 'Every complex number can be written as its modulus times e raised to i times its argument.' },
      { label: `Euler's formula`, latex: `e^{i\\theta} = \\cos\\theta + i\\sin\\theta`, description: 'The bridge between exponential and trigonometric forms of complex numbers.' },
      { label: 'Product modulus', latex: `|z_1 z_2| = |z_1| \\cdot |z_2|`, description: 'The modulus of a product is the product of the moduli.' },
      { label: 'Product argument', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\;[2\\pi]`, description: 'The argument of a product is the sum of the arguments (modulo 2π).' },
      { label: 'Conjugate', latex: `\\overline{z} = |z|\\,e^{-i\\arg(z)} \\quad ; \\quad \\arg(\\bar{z}) = -\\arg(z)`, description: 'Conjugation flips the sign of the argument — it reflects across the real axis.' },
      { label: 'Rotation', latex: `z' - \\omega = e^{i\\theta}(z - \\omega) \\quad \\text{(center } \\omega \\text{, angle } \\theta\\text{)}`, description: 'To rotate point $z$ around center $\\omega$ by angle $\\theta$, subtract $\\omega$, multiply by $e^{i\\theta}$, then re-add $\\omega$.' },
      { label: 'Key angles', latex: `e^{i\\pi/4} = \\tfrac{\\sqrt{2}}{2}(1+i) \\quad e^{i\\pi/2} = i \\quad e^{i\\pi} = -1`, description: 'The most common Euler values you must know by heart for the concours.' },
    ],
    theorems: [
      { name: 'Conjugate rules', statement: `\\overline{z_1+z_2} = \\bar{z_1}+\\bar{z_2} \\quad \\text{and} \\quad \\overline{z_1 z_2} = \\bar{z_1}\\,\\bar{z_2}`, keyIdea: 'Conjugation distributes over addition and multiplication — like a "mirror" operator.' },
      { name: 'Negative sign', statement: `-z = z \\cdot e^{i\\pi} \\text{, i.e. } \\arg(-z)=\\arg(z)+\\pi`, keyIdea: 'Negating a complex number adds π to its argument (half-turn rotation).' },
    ],
    pitfalls: [
      `$\\arg(\\bar{z}) = -\\arg(z)$ but $\\arg(-z) = \\arg(z) + \\pi$. Don't confuse them!`,
      `For rotation, SUBTRACT the center BEFORE multiplying by $e^{i\\theta}$, then RE-ADD it.`,
      `$e^{-i\\frac{\\pi}{2}} = -i$ (not $+i$).`,
    ],
  },
  {
    id: 'integrales',
    title: 'Integrals',
    icon: '∫',
    color: '#9066EE',
    summary: 'Integration computes the area under a curve. You must know the standard antiderivatives by heart, especially for trigonometric functions. The concours also tests improper integrals where one bound tends to 0 or ∞.',
    formulas: [
      { label: 'Antideriv. of xⁿ', latex: `\\int x^n\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\quad (n\\neq -1)`, description: 'Increase the exponent by $1$ and divide by the new exponent. Fails when $n = -1$.' },
      { label: 'Antideriv. of 1/x', latex: `\\int \\dfrac{1}{x}\\,dx = \\ln|x| + C`, description: 'The special case $n = -1$: the antiderivative of $\\tfrac{1}{x}$ is $\\ln|x|$.' },
      { label: 'Antideriv. of eˣ', latex: `\\int e^x\\,dx = e^x + C`, description: 'The exponential is its own antiderivative — the simplest rule in calculus.' },
      { label: 'Antideriv. of ln', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C`, description: 'Found by integration by parts with $u = \\ln(x)$ and $v\' = 1$.' },
      { label: 'Tangent', latex: `\\int \\tan(x)\\,dx = -\\ln|\\cos(x)| + C`, description: 'Write $\\tan = \\sin/\\cos$, then recognize the $-u\'/u$ pattern. Watch the minus sign!' },
      { label: 'Cotangent', latex: `\\int \\cot(x)\\,dx = \\ln|\\sin(x)| + C`, description: 'Write $\\cot = \\cos/\\sin$, then recognize the $u\'/u$ pattern giving $\\ln|\\sin|$.' },
      { label: `u'/u`, latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C`, description: 'The master pattern: whenever the numerator is the derivative of the denominator, the answer is $\\ln$.' },
    ],
    theorems: [
      { name: 'Integration by Parts', statement: `\\int_a^b u'v = [uv]_a^b - \\int_a^b uv'`, keyIdea: 'Trade one integral for an easier one. Classic use: ∫ln(x)dx with u = ln x, v\' = 1.' },
      { name: 'Crucial limit', statement: `\\lim_{x\\to 0^+} x\\ln x = 0`, keyIdea: 'Near zero, x shrinks faster than ln(x) diverges — the product goes to 0.' },
    ],
    pitfalls: [
      `$\\int\\tan(x) = -\\ln|\\cos(x)|$: the MINUS sign is crucial.`,
      `For improper integrals, always go through the limit $\\lambda \\to 0^+$.`,
      `$x\\ln(x) \\to 0$ as $x \\to 0^+$: this limit is indispensable.`,
    ],
  },
  {
    id: 'fonctions',
    title: 'Function Analysis',
    icon: '📈',
    color: '#4CE87C',
    summary: 'Function analysis is about understanding a function\'s behavior: limits at infinity (asymptotes vs parabolic branches), local extrema via derivatives, and convexity via the second derivative. This topic appears in every concours.',
    formulas: [
      { label: 'Horizontal asympt.', latex: `\\lim_{x\\to\\pm\\infty} f(x) = \\ell \\implies y = \\ell`, description: 'If $f(x)$ approaches a finite value $\\ell$ at infinity, the curve flattens to the line $y = \\ell$.' },
      { label: 'Oblique asympt.', latex: `\\lim \\dfrac{f(x)}{x} = a \\neq 0 \\text{ and } \\lim [f(x)-ax] = b \\implies y=ax+b`, description: 'If $\\tfrac{f(x)}{x}$ approaches a nonzero $a$, look for an oblique asymptote $y = ax + b$.' },
      { label: 'PB direction Ox', latex: `\\lim \\dfrac{f(x)}{x} = 0`, description: 'When $f(x)/x \\to 0$, the curve grows slower than any line — it bends toward the x-axis.' },
      { label: 'PB direction Oy', latex: `\\lim \\dfrac{f(x)}{x} = \\pm\\infty`, description: 'When $f(x)/x \\to \\pm\\infty$, the curve grows faster than any line — it shoots up along the y-axis.' },
      { label: 'Convexity', latex: `f''(x) > 0 \\implies f \\text{ convex} \\quad ; \\quad f''(x) < 0 \\implies f \\text{ concave}`, description: 'f\'\' > 0 means the curve smiles (convex). f\'\' < 0 means it frowns (concave).' },
      { label: 'Inflection point', latex: `f'' \\text{ changes sign at } a \\implies a \\text{ is an inflection point}`, description: 'A point where the curve switches from smiling to frowning (or vice versa).' },
    ],
    theorems: [
      { name: 'Vertical half-tangent', statement: `\\lim_{x\\to a} \\frac{f(x)-f(a)}{x-a} = \\pm\\infty \\implies \\text{vertical tangent}`, keyIdea: 'When the slope explodes to ±∞, the curve becomes vertical. Sign tells direction: +∞ = up, −∞ = down.' },
      { name: 'Local extremum', statement: `f'(x_0)=0 \\text{ and } f'' \\text{ has constant sign} \\implies \\text{local extremum}`, keyIdea: 'Zero derivative + positive second derivative = minimum. Zero derivative + negative second derivative = maximum.' },
    ],
    pitfalls: [
      `$e^x$ dominates every polynomial and logarithm at infinity → parabolic branch direction $Oy$.`,
      `Demi-tangente verticale : slope $\\to +\\infty$ ⟹ HAUT ; slope $\\to -\\infty$ ⟹ BAS. Règle sans exception.`,
      `$f''(x)>0$ everywhere ⟹ CONVEX (not concave). Mnemonic: "convex = smile".`,
    ],
  },
  {
    id: 'asymptotic-behavior',
    title: 'Asymptotic Behavior',
    icon: '📉',
    color: '#F5A623',
    diagram: 'asymptotic-tree',
    summary: `Asymptotic behavior describes how a function behaves "at the edges" of its domain — typically as $x\\to\\pm\\infty$ or near a point where the function explodes. In Exercise 7 of the 2024 concours, this is the core skill: given $f(x) = e^x + x[\\ln(x) - e - 1]$, determine whether the graph $(C_f)$ has a horizontal asymptote, an oblique asymptote, or a parabolic branch at $+\\infty$. Mastering the two-step decision tree below turns a conceptual question into a mechanical 30-second calculation.`,
    formulas: [
      { label: 'Horizontal asymptote', latex: `\\lim_{x\\to+\\infty} f(x) = \\ell \\in \\mathbb{R} \\implies (C_f)\\text{ admits } y=\\ell \\text{ as H.A.}`, description: 'The simplest case: if $f(x)$ tends to a finite real number, the curve flattens onto the horizontal line $y=\\ell$. Always test this FIRST — if the limit is finite, stop.' },
      { label: 'Oblique asymptote', latex: `\\lim \\dfrac{f(x)}{x} = a\\neq 0 \\;\\text{ and }\\; \\lim[f(x)-ax] = b \\implies y=ax+b`, description: 'Two-step test: (1) the slope $a = \\lim f(x)/x$ must be a finite, nonzero real; (2) then $b = \\lim [f(x)-ax]$ must also be finite. Both conditions are required.' },
      { label: 'Parabolic branch — $Ox$', latex: `\\lim_{x\\to+\\infty} f(x) = \\pm\\infty \\;\\text{ and }\\; \\lim \\dfrac{f(x)}{x} = 0 \\implies \\text{PB direction } Ox`, description: 'The curve escapes to infinity but grows SLOWER than any line — it bends toward the x-axis. Classic example: $f(x)=\\sqrt{x}$ or $f(x)=\\ln(x)$.' },
      { label: 'Parabolic branch — $Oy$', latex: `\\lim_{x\\to+\\infty} f(x) = \\pm\\infty \\;\\text{ and }\\; \\lim \\dfrac{f(x)}{x} = \\pm\\infty \\implies \\text{PB direction } Oy`, description: 'The curve shoots up FASTER than any line — it becomes nearly vertical. Hallmark of exponentials: whenever $e^x$ is in $f$, this is almost always the verdict.' },
      { label: 'Growth hierarchy', latex: `\\ln(x) \\;\\ll\\; x^\\alpha \\;\\ll\\; e^x \\quad (\\text{as } x\\to+\\infty,\\ \\alpha>0)`, description: 'The golden chain of comparative growth: logarithms grow slower than any power, and any power grows slower than the exponential. Use it to resolve indeterminate forms at infinity in one line.' },
      { label: 'Vertical asymptote', latex: `\\lim_{x\\to a} f(x) = \\pm\\infty \\implies x=a \\text{ is a V.A.}`, description: 'At a point $a$ where $f$ explodes (e.g., $\\ln(x)$ at $0$, or $1/(x-a)$), the curve hugs the vertical line $x=a$. Check both sides: $x\\to a^-$ and $x\\to a^+$.' },
    ],
    theorems: [
      { name: 'Decision tree at $+\\infty$', statement: `\\text{(1) } \\lim f = \\ell \\Rightarrow y=\\ell.\\; \\text{(2) Else compute } \\lim f/x: \\begin{cases} 0 & \\Rightarrow \\text{PB } Ox \\\\ \\pm\\infty & \\Rightarrow \\text{PB } Oy \\\\ a\\in\\mathbb{R}^* & \\Rightarrow \\text{try oblique} \\end{cases}`, keyIdea: 'A 2-step mechanical test. Never guess — always compute $\\lim f$ first, then $\\lim f/x$ if needed. Every concours question on asymptotic behavior resolves with this tree.' },
      { name: 'Exponential dominance', statement: `\\lim_{x\\to+\\infty} \\dfrac{e^x}{x^n} = +\\infty \\quad \\forall n\\in\\mathbb{N}`, keyIdea: 'The exponential beats every polynomial. So any $f$ containing $e^x$ as a leading term has $f(x)/x \\to +\\infty$ → parabolic branch $Oy$.' },
      { name: 'Logarithmic slowness', statement: `\\lim_{x\\to+\\infty} \\dfrac{\\ln(x)}{x^\\alpha} = 0 \\quad \\forall\\alpha>0`, keyIdea: 'Logarithms are "slower than any power." So $\\ln(x)$ contributions vanish when compared with $x$ or higher powers. Key when proving $\\lim f/x = 0$.' },
      { name: 'Limit at a boundary — $x\\ln x$', statement: `\\lim_{x\\to 0^+} x\\ln(x) = 0`, keyIdea: 'At the left boundary $x=0^+$, the factor $x\\to 0$ crushes $\\ln(x)\\to -\\infty$. Indispensable for improper integrals AND for studying $f$ near $0$ in Exercise 7.' },
    ],
    pitfalls: [
      `Don't stop after computing $\\lim f = +\\infty$: that only rules OUT a horizontal asymptote. You still must compute $\\lim f(x)/x$ to know between oblique and parabolic branch.`,
      `If $\\lim f(x)/x = a\\in\\mathbb{R}^*$, an oblique asymptote is only a CANDIDATE — you must then verify $\\lim [f(x)-ax]$ is finite. If this second limit is $\\pm\\infty$, there is NO oblique asymptote (it's still a parabolic branch).`,
      `"Parabolic branch" does NOT mean the curve is a parabola — it just means no asymptote exists. Don't write $y = x^2$ as an answer!`,
      `For Exercise 7's $f(x)=e^x+x[\\ln x - e - 1]$: $f(x)/x = e^x/x + \\ln x - e - 1 \\to +\\infty$ because $e^x/x\\to+\\infty$. Verdict: parabolic branch direction $Oy$.`,
      `Always check the SIDE: $\\lim_{x\\to+\\infty}$ and $\\lim_{x\\to-\\infty}$ can give different behaviors. The concours often asks only about $+\\infty$, but read the question carefully.`,
    ],
  },
  {
    id: 'half-tangents',
    title: 'Half-Tangents at a Boundary',
    icon: '↕️',
    color: '#9A7BFF',
    summary: `A "half-tangent" is the tangent-line behavior of a curve at an endpoint of its domain — typically at a point where $f$ is continuous but not differentiable. In Exercise 7 of the 2024 concours, $f(x)=e^x+x[\\ln(x)-e-1]$ is extended by continuity with $f(0)=1$; since $\\ln(x)\\to-\\infty$ as $x\\to 0^+$, the right-derivative blows up and the curve arrives at $(0,1)$ with a VERTICAL tangent. The direction (up or down) is read directly from the SIGN of the infinite limit. Master this one-line rule and any half-tangent MCQ is a 30-second computation.`,
    formulas: [
      { label: 'Difference quotient at $a^+$', latex: `\\tau(x) = \\dfrac{f(x)-f(a)}{x-a} \\;,\\; x\\to a^+`, description: 'This is the slope of the secant line between $(a,f(a))$ and $(x,f(x))$. Its limit as $x\\to a^+$ is the RIGHT derivative $f\'_d(a)$ — the slope of the right half-tangent.' },
      { label: 'Finite limit $\\Rightarrow$ oblique/horizontal', latex: `\\lim_{x\\to a^+} \\tau(x) = m \\in \\mathbb{R} \\implies \\text{half-tangent of slope } m`, description: 'If the difference quotient has a finite limit, the curve enters the point with a regular tangent of that slope. Special case $m=0$: HORIZONTAL half-tangent.' },
      { label: 'Limit $=+\\infty$ $\\Rightarrow$ vertical UP', latex: `\\lim_{x\\to a^+} \\tau(x) = +\\infty \\implies \\text{vertical half-tangent pointing UPWARD}`, description: 'The slope explodes to $+\\infty$ — the secant becomes vertical, and since values are increasing toward the boundary, the half-tangent points UP. Sign $+$ = up.' },
      { label: 'Limit $=-\\infty$ $\\Rightarrow$ vertical DOWN', latex: `\\lim_{x\\to a^+} \\tau(x) = -\\infty \\implies \\text{vertical half-tangent pointing DOWNWARD}`, description: 'The slope explodes to $-\\infty$ — again vertical, but now the curve plunges. Sign $-$ = down. This is the verdict for Exercise 7 at $x=0^+$.' },
      { label: 'Sign $\\leftrightarrow$ direction (mnemonic)', latex: `\\boxed{\\;+\\infty \\to \\uparrow \\;\\text{HAUT}\\;,\\quad -\\infty \\to \\downarrow \\;\\text{BAS}\\;}`, description: 'The rule has NO exception: read the sign of the infinite limit and translate it directly into up/down. Do not try to visualize — trust the sign.' },
    ],
    theorems: [
      { name: 'Half-tangent classification', statement: `\\lim_{x\\to a^+}\\dfrac{f(x)-f(a)}{x-a} = \\begin{cases} m\\in\\mathbb{R} & \\Rightarrow \\text{slope } m \\text{ (horizontal if } m=0\\text{)} \\\\ +\\infty & \\Rightarrow \\text{vertical, UP} \\\\ -\\infty & \\Rightarrow \\text{vertical, DOWN} \\end{cases}`, keyIdea: 'One limit, three cases, one answer. This IS the decision procedure — no geometry required. Every MCQ option in the style of "horizontal / vertical up / vertical down" comes from this table.' },
      { name: 'When to expect a vertical half-tangent', statement: `f \\text{ extended by continuity at } a \\text{ AND } \\lim_{x\\to a^+} f'(x) = \\pm\\infty \\implies (C_f) \\text{ has a vertical half-tangent at } a`, keyIdea: 'In practice: if $f$ was defined by a formula on an open interval and you glued the endpoint by continuity, check whether $f\'$ blows up at the boundary. The usual culprits are $\\ln(x)$ at $0$, $\\sqrt{x}$ at $0$, or $1/x$-style factors.' },
      { name: 'Recognizing the setup in Ex. 7', statement: `\\tau(x) = \\dfrac{e^x-1}{x} + \\ln(x) - e - 1 \\;,\\; x\\to 0^+`, keyIdea: 'Split the difference quotient into pieces you already know: $(e^x-1)/x \\to 1$ is a classical limit; $\\ln(x)\\to -\\infty$ dominates every constant. Result: $1-\\infty-e-1 = -\\infty \\Rightarrow$ vertical, DOWN.' },
    ],
    pitfalls: [
      `Don't confuse "HORIZONTAL half-tangent" with "vertical half-tangent pointing right/left" — a horizontal half-tangent simply means slope $0$, a regular (finite) tangent. Vertical half-tangents only exist when the limit is $\\pm\\infty$.`,
      `The sign rule $+\\infty \\to$ UP, $-\\infty \\to$ DOWN is absolute. Students often swap them by "intuition" — don't. Trust the sign.`,
      `Always compute on the correct SIDE. A right half-tangent uses $x\\to a^+$; a left half-tangent uses $x\\to a^-$. In Exercise 7, $f$ is only defined on $[0,+\\infty[$, so only the right side makes sense at $a=0$.`,
      `You CANNOT answer this question by computing $f'(0)$ directly — $f'$ isn't defined at the boundary. You must go back to the DIFFERENCE QUOTIENT $\\tau(x) = (f(x)-f(a))/(x-a)$ and take its limit.`,
      `If the difference quotient has a FINITE limit but you were expecting a vertical half-tangent, re-check: you probably forgot that a finite $m$ (including $m=0$) gives a regular tangent, NOT a vertical one.`,
    ],
  },
]

// ── Lookup functions ─────────────────────────────────────────
import { TIPS_2025, RECAP_2025 } from './content-2025'
import { TIPS_2023, RECAP_2023 } from './content-2023'
import { TIPS_2022, RECAP_2022 } from './content-2022'

export function getTipsData(year: number): Tip[] | undefined {
  if (year === 2022) return TIPS_2022
  if (year === 2023) return TIPS_2023
  if (year === 2024) return TIPS_2024
  if (year === 2025) return TIPS_2025
  return undefined
}

export function getRecapData(year: number): RecapTopic[] | undefined {
  if (year === 2022) return RECAP_2022
  if (year === 2023) return RECAP_2023
  if (year === 2024) return RECAP_2024
  if (year === 2025) return RECAP_2025
  return undefined
}
