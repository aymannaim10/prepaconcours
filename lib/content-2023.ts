// ============================================================
// Content Data – 2023 Exam Preparation
// Tips & Tricks + Course Recap — comprehensive coverage
// Aligned with the 2023 exam topics: sequences, complex numbers,
// loci, logarithmic equations, function analysis, integrals
// ============================================================

import type { Tip, RecapTopic } from './content-2024'

// ─────────────────────────────────────────────────────────────
// TIPS & TRICKS
// ─────────────────────────────────────────────────────────────
export const TIPS_2023: Tip[] = [
  {
    id: 'auxiliary-sequence-2023',
    title: 'Auxiliary Sequence v_n = 1/u_n',
    topic: 'Sequences',
    icon: '🔄',
    color: '#C9A84C',
    summary: `Convert a homographic recurrence $u_{n+1} = \\frac{2u_n}{2+3u_n}$ into an arithmetic one — the key to Exercise 1.`,
    why: `Exercise 1 of the 2023 concours defines $u_0 = 1$ and $u_{n+1} = \\frac{2u_n}{2+3u_n}$, then asks for the common difference of $v_n = 1/u_n$. The naive route (compute $u_1, u_2, u_3$ then guess) wastes time. The smart route inverts the recurrence ALGEBRAICALLY, which directly reveals $v_n$ as arithmetic with $r = 3/2$.`,
    formulas: [
      { label: 'Invert the recurrence', latex: `v_{n+1} = \\dfrac{1}{u_{n+1}} = \\dfrac{2 + 3u_n}{2u_n}`, description: 'When the recurrence is a quotient with $u_n$ in the denominator, take the reciprocal to swap numerator and denominator. This often "linearizes" the relation.' },
      { label: 'Split the fraction', latex: `\\dfrac{2 + 3u_n}{2u_n} = \\dfrac{2}{2u_n} + \\dfrac{3u_n}{2u_n} = \\dfrac{1}{u_n} + \\dfrac{3}{2} = v_n + \\dfrac{3}{2}`, description: 'Splitting reveals $v_n$ on the right plus a constant — the signature of an arithmetic sequence.' },
      { label: 'Closed form', latex: `v_n = v_0 + n r \\;,\\; r = \\dfrac{3}{2} \\;,\\; v_0 = \\dfrac{1}{u_0} = 1 \\implies u_n = \\dfrac{2}{2+3n}`, description: 'Once $v_n$ is arithmetic, write its closed form, then invert to get $u_n$. Check at $n=0$: $u_0 = 2/2 = 1$ ✓.' },
    ],
    example: {
      question: `u_0 = 1,\\ u_{n+1} = \\dfrac{2u_n}{2+3u_n},\\ v_n = \\dfrac{1}{u_n}.\\ \\text{Find } u_n.`,
      solution: `v_{n+1} = v_n + \\tfrac{3}{2} \\implies v_n = 1 + \\tfrac{3n}{2} = \\tfrac{2+3n}{2} \\implies u_n = \\tfrac{2}{2+3n}`,
      explanation: `Step 1: invert $u_{n+1}$. Step 2: split the fraction to recover $v_n + 3/2$. Step 3: identify $r = 3/2$. Step 4: write the closed form $v_n = v_0 + nr$. Step 5: invert again for $u_n$.`,
    },
    proTip: `When you see $u_{n+1} = \\frac{a u_n}{b + c u_n}$ (a "homographic" recurrence with NO additive term), 99% of the time the trick is to invert: $1/u_n$ becomes arithmetic. Check by writing the recurrence on $1/u_n$.`,
    examRefs: [
      { section: 'real-exam', question: 1, label: 'Real Exam Q1' },
      { section: 'real-exam', question: 2, label: 'Real Exam Q2' },
    ],
  },
  {
    id: 'complex-product-arg-2023',
    title: 'Argument of a Complex Product Without Computing Z',
    topic: 'Complex Numbers',
    icon: '🎯',
    color: '#4CADE8',
    summary: `For $Z = z_1 \\cdot z_2 \\cdot z_3$ where each factor has a known argument, $\\arg(Z) = \\arg(z_1) + \\arg(z_2) + \\arg(z_3)$ — never multiply out.`,
    why: `Exam questions often give $Z$ as a product of complex numbers (sometimes raised to powers) and ask for an argument. Multiplying out is slow and error-prone. The correct approach: convert each factor to exponential form, then sum the arguments. For powers, multiply the argument by the exponent.`,
    formulas: [
      { label: 'Argument of a product', latex: `\\arg(z_1 z_2) = \\arg(z_1) + \\arg(z_2) \\pmod{2\\pi}`, description: 'Arguments add when complex numbers multiply. This is a direct consequence of $e^{i\\alpha}\\cdot e^{i\\beta} = e^{i(\\alpha+\\beta)}$.' },
      { label: 'Argument of a power', latex: `\\arg(z^n) = n\\,\\arg(z) \\pmod{2\\pi}`, description: 'Multiplying argument by the exponent. So $(2e^{i\\pi/6})^5$ has argument $5\\pi/6$.' },
      { label: 'Argument of a quotient', latex: `\\arg\\!\\left(\\dfrac{z_1}{z_2}\\right) = \\arg(z_1) - \\arg(z_2) \\pmod{2\\pi}`, description: 'Subtraction for division. Reduce mod $2\\pi$ at the end if needed.' },
      { label: 'Standard arguments', latex: `\\arg(1+i) = \\tfrac{\\pi}{4} \\;,\\; \\arg(1+i\\sqrt 3) = \\tfrac{\\pi}{3} \\;,\\; \\arg(\\sqrt 3 + i) = \\tfrac{\\pi}{6}`, description: 'These three appear in roughly 80% of all complex MCQs. Memorize them.' },
    ],
    example: {
      question: `Z = (1+i\\sqrt 3)\\,(\\sqrt 3 + i)\\,(1+i)`,
      solution: `\\arg(Z) = \\tfrac{\\pi}{3} + \\tfrac{\\pi}{6} + \\tfrac{\\pi}{4} = \\tfrac{4\\pi + 2\\pi + 3\\pi}{12} = \\tfrac{9\\pi}{12} = \\tfrac{3\\pi}{4}`,
      explanation: `Don't multiply $Z$ out. Just sum the arguments: $\\frac{\\pi}{3} + \\frac{\\pi}{6} + \\frac{\\pi}{4}$. Common denominator 12: $\\frac{4\\pi+2\\pi+3\\pi}{12} = \\frac{9\\pi}{12} = \\frac{3\\pi}{4}$. Done in 30 seconds.`,
    },
    proTip: `If the modulus isn't asked (only the argument), don't compute it. Saves time. Conversely, if only modulus is asked, just multiply moduli — never expand the product.`,
    examRefs: [
      { section: 'real-exam', question: 3, label: 'Real Exam Q3' },
      { section: 'real-exam', question: 4, label: 'Real Exam Q4' },
      { section: 'real-exam', question: 5, label: 'Real Exam Q5' },
    ],
  },
  {
    id: 'locus-cartesian-2023',
    title: 'Identify the Locus from Re(z\') = 0 or Im(z\') = 0',
    topic: 'Complex Numbers',
    icon: '🧭',
    color: '#9066EE',
    summary: `Convert "$z' \\in i\\mathbb{R}$" or "$z' \\in \\mathbb{R}$" into a Cartesian equation, then read off the locus shape (line, circle, parabola, hyperbola).`,
    why: `Exercise 3 gives $z' = z^{2} - 2i$ and asks two questions: (i) the locus where $z' \\in i\\mathbb{R}$, (ii) the locus where $z' \\in \\mathbb{R}$. Both reduce to standard Cartesian curves once you write $z' = X + iY$ in terms of $x, y$. Knowing which equation maps to which shape is the entire game.`,
    formulas: [
      { label: 'Algebraic expansion', latex: `z = x + iy \\implies z^{2} = (x^{2}-y^{2}) + 2ixy`, description: 'Always write $z = x+iy$ and expand. Real part is even-symmetric in $x,y$; imaginary part is the "$2xy$ term". Keep this template in mind.' },
      { label: '"$z\' \\in i\\mathbb{R}$" rule', latex: `z' \\in i\\mathbb{R} \\iff \\operatorname{Re}(z') = 0`, description: 'Purely imaginary means the real part vanishes. This usually gives a polynomial equation in $x, y$ that factors into lines or conics.' },
      { label: '"$z\' \\in \\mathbb{R}$" rule', latex: `z' \\in \\mathbb{R} \\iff \\operatorname{Im}(z') = 0`, description: 'Purely real means imaginary part vanishes. Often easier than the previous case.' },
      { label: 'Shape catalogue', latex: `\\begin{array}{ll} ax+by+c=0 & \\text{line} \\\\ x^2+y^2 = r^2 & \\text{circle} \\\\ y = ax^2+bx+c & \\text{parabola} \\\\ xy = k & \\text{rectangular hyperbola} \\\\ (x-y)(x+y)=0 & \\text{two perpendicular lines} \\end{array}`, description: 'Memorize this table. Most concours loci land in one of these five categories.' },
    ],
    example: {
      question: `z' = z^{2} - 2i.\\ \\text{Locus of } M(z) \\text{ such that } z' \\in i\\mathbb{R}.`,
      solution: `\\operatorname{Re}(z') = x^{2} - y^{2} = 0 \\iff (x-y)(x+y) = 0 \\implies y = x \\text{ or } y = -x`,
      explanation: `Step 1: expand $z^{2} = (x^{2}-y^{2}) + 2ixy$, so $z' = (x^{2}-y^{2}) + i(2xy - 2)$. Step 2: $\\operatorname{Re}(z') = 0 \\iff x^{2} = y^{2}$. Step 3: factor as $(x-y)(x+y) = 0$. Step 4: this is the union of two perpendicular lines (slopes $1$ and $-1$, product $= -1$).`,
    },
    proTip: `If the locus equation factors as $(\\text{linear})\\cdot(\\text{linear}) = 0$, it's a UNION of two lines (perpendicular if slope product is $-1$). If it's $xy = k$, it's a hyperbola. If it's $x^{2} + y^{2} = $ constant, circle. Train your eye to recognize these patterns INSTANTLY.`,
    examRefs: [
      { section: 'real-exam', question: 6, label: 'Real Exam Q6' },
      { section: 'real-exam', question: 7, label: 'Real Exam Q7' },
    ],
  },
  {
    id: 'log-substitution-2023',
    title: 'Quadratic in ln(x) — Substitute t = ln(x)',
    topic: 'Logarithm',
    icon: '🔁',
    color: '#4CE87C',
    summary: `When you see $a\\ln^{2}(x) + b\\ln(x) + c = 0$, set $t = \\ln(x)$. The equation becomes a regular quadratic — solve for $t$, then back-substitute.`,
    why: `Exercise 4 of the 2023 concours: $2\\ln^{2}(x) - \\ln(x) - 3 = 0$. Trying to solve directly is hopeless. The substitution $t = \\ln(x)$ converts it to $2t^{2} - t - 3 = 0$, a standard quadratic. After solving for $t$, exponentiate to recover $x = e^{t}$.`,
    formulas: [
      { label: 'Substitution', latex: `t = \\ln(x) \\;,\\; x \\in \\,]0,+\\infty[ \\;\\Longleftrightarrow\\; t \\in \\mathbb{R}`, description: 'The transformation is bijective on the domain $x > 0$. Every real $t$ corresponds to a unique positive $x = e^{t}$.' },
      { label: 'Quadratic formula', latex: `at^{2} + bt + c = 0 \\implies t = \\dfrac{-b \\pm \\sqrt{b^{2}-4ac}}{2a}`, description: 'Standard discriminant. Compute $\\Delta = b^{2}-4ac$, take roots, get two values of $t$.' },
      { label: 'Back-substitute', latex: `t_{1}, t_{2} \\implies x_{1} = e^{t_{1}}, x_{2} = e^{t_{2}}`, description: 'Both values are valid (no domain issue since the substitution is bijective). The solution set is $S = \\{e^{t_{1}}, e^{t_{2}}\\}$.' },
      { label: 'Common factorings', latex: `2t^{2}-t-3 = (2t-3)(t+1) \\implies t = 3/2 \\text{ or } t = -1`, description: 'For $2t^{2}-t-3$, the discriminant is $1+24=25$, giving $t = (1\\pm 5)/4 = 3/2 \\text{ or } -1$. Always check by expanding the factored form.' },
    ],
    example: {
      question: `2\\ln^{2}(x) - \\ln(x) - 3 = 0`,
      solution: `t = \\ln(x):\\ 2t^{2} - t - 3 = 0 \\iff (2t-3)(t+1) = 0 \\iff t \\in \\{3/2,\\ -1\\} \\implies x \\in \\{e^{3/2},\\ e^{-1}\\}`,
      explanation: `Step 1: substitute $t = \\ln(x)$. Step 2: factor the quadratic $(2t-3)(t+1)$. Step 3: roots $t = 3/2$ and $t = -1$. Step 4: exponentiate to get $x = e^{3/2} = \\sqrt{e^{3}}$ and $x = e^{-1} = 1/e$. Both are positive, so both are valid.`,
    },
    proTip: `If the equation has $\\ln^{2}(x), \\ln(x)$, and a constant, ALWAYS substitute. If it has only $\\ln(x)$ alone (no square), substitution is unnecessary — just isolate $\\ln(x)$ and apply $\\exp$.`,
    examRefs: [
      { section: 'real-exam', question: 8, label: 'Real Exam Q8' },
    ],
  },
  {
    id: 'asymptote-decision-2023',
    title: 'Vertical Asymptote Detector for $\\ln$',
    topic: 'Function Analysis',
    icon: '📉',
    color: '#F5A623',
    summary: `If $f(x) = \\ln\\!\\bigl(\\frac{P(x)}{Q(x)}\\bigr)$ and the argument tends to $0^{+}$ at a point, you have a vertical asymptote $\\to -\\infty$.`,
    why: `Exercise 5 gives $f(x) = \\ln\\!\\bigl(\\frac{1-x}{1+x}\\bigr)$ on $D_{f} = \\,]-1, 1[$. The boundaries are $-1^{+}$ and $1^{-}$, NOT $\\pm\\infty$ — so there are no horizontal asymptotes. But the argument $\\frac{1-x}{1+x}$ tends to $+\\infty$ at $x \\to -1^{+}$ and to $0^{+}$ at $x \\to 1^{-}$, giving TWO vertical asymptotes.`,
    formulas: [
      { label: 'Argument to $0^{+}$', latex: `\\lim_{x\\to a} \\dfrac{P(x)}{Q(x)} = 0^{+} \\implies \\lim_{x\\to a} \\ln\\!\\left(\\dfrac{P(x)}{Q(x)}\\right) = -\\infty \\;\\Rightarrow\\; \\text{V.A. } x = a`, description: 'Logarithm of a tiny positive number is a large negative. So an argument tending to $0^{+}$ creates a vertical asymptote going DOWN.' },
      { label: 'Argument to $+\\infty$', latex: `\\lim_{x\\to a} \\dfrac{P(x)}{Q(x)} = +\\infty \\implies \\lim_{x\\to a} \\ln\\!\\left(\\dfrac{P(x)}{Q(x)}\\right) = +\\infty \\;\\Rightarrow\\; \\text{V.A. } x = a`, description: 'Logarithm of a huge positive is a huge positive. Vertical asymptote going UP.' },
      { label: 'Argument to $\\ell > 0$ finite', latex: `\\lim_{x\\to a} \\dfrac{P(x)}{Q(x)} = \\ell > 0 \\implies \\lim_{x\\to a} \\ln(\\cdot) = \\ln(\\ell)`, description: 'A finite positive limit just gives a finite value of the logarithm — no asymptote at $a$.' },
      { label: 'Bounded domain rule', latex: `D_{f} \\text{ is bounded} \\implies \\text{no horizontal asymptote possible at } \\pm\\infty`, description: 'You can only have horizontal asymptotes if $D_{f}$ extends to $\\pm\\infty$. If $D_{f} = \\,]a,b[$, only vertical asymptotes are possible.' },
    ],
    example: {
      question: `f(x) = \\ln\\!\\left(\\dfrac{1-x}{1+x}\\right) \\;,\\; D_{f} = \\,]-1,1[`,
      solution: `\\text{At } x \\to 1^{-},\\ \\dfrac{1-x}{1+x} \\to 0^{+} \\implies f \\to -\\infty.\\\\ \\text{At } x \\to -1^{+},\\ \\dfrac{1-x}{1+x} \\to +\\infty \\implies f \\to +\\infty.`,
      explanation: `Two vertical asymptotes: $x = 1$ (going DOWN) and $x = -1$ (going UP). No horizontal asymptote because $D_{f}$ is bounded. Answer: D.`,
    },
    proTip: `Sign matters at the boundary: argument $\\to 0^{+}$ gives $-\\infty$ (V.A. down); argument $\\to 0^{-}$ would mean the log is undefined there — that point is OUTSIDE $D_{f}$, NOT an asymptote. Always verify the SIGN of the argument when approaching boundary.`,
    examRefs: [
      { section: 'real-exam', question: 9, label: 'Real Exam Q9' },
    ],
  },
  {
    id: 'integral-uprime-u-2023',
    title: 'Integral of P(x)/Q(x) when P(x) = c·Q\'(x)',
    topic: 'Integrals',
    icon: '∫',
    color: '#4CE87C',
    summary: `$\\int \\frac{x^{2}}{x^{3}-8}\\,dx$ — recognize $u'(x)/u(x)$ with $u(x) = x^{3}-8$, then antiderivative is $\\frac{1}{3}\\ln|u(x)|$.`,
    why: `Exercise 6 asks for $K = \\int_{-1}^{1} \\frac{x^{2}}{x^{3}-8}\\,dx$. Trying to expand or use partial fractions is overkill. Spot that the numerator is proportional to the derivative of the denominator: $\\frac{d}{dx}(x^{3}-8) = 3x^{2}$. So $\\frac{x^{2}}{x^{3}-8} = \\frac{1}{3}\\cdot\\frac{(x^{3}-8)'}{x^{3}-8}$ — a textbook $u'/u$ form.`,
    formulas: [
      { label: '$u\'/u$ pattern', latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C`, description: 'The fundamental form. Whenever the numerator IS the derivative of the denominator (up to a constant factor), apply this directly.' },
      { label: 'Pull out the constant', latex: `\\int \\dfrac{c\\cdot u'(x)}{u(x)}\\,dx = c\\,\\ln|u(x)| + C`, description: 'If the numerator is $c$ times the derivative of the denominator, factor out the $c$ first.' },
      { label: 'Verify continuity', latex: `\\text{Need } u(x) \\neq 0 \\text{ on } [a, b] \\implies \\text{integral exists}`, description: 'Before integrating, check the denominator does not vanish on the interval. For $x^{3}-8 = 0 \\iff x = 2 \\notin [-1,1]$, so we are safe.' },
      { label: 'Sign-aware logarithm', latex: `\\ln|u(x)| \\;\\text{(absolute value)}`, description: 'Use $\\ln|u|$, not $\\ln(u)$. The absolute value handles the case $u < 0$ (which is fine for the antiderivative).' },
    ],
    example: {
      question: `K = \\displaystyle\\int_{-1}^{1} \\dfrac{x^{2}}{x^{3}-8}\\,dx`,
      solution: `K = \\dfrac{1}{3}\\bigl[\\,\\ln|x^{3}-8|\\,\\bigr]_{-1}^{1} = \\dfrac{1}{3}\\bigl[\\,\\ln 7 - \\ln 9\\,\\bigr] \\implies 3K = \\ln 7 - 2\\ln 3`,
      explanation: `Step 1: $u(x) = x^{3}-8$, $u'(x) = 3x^{2}$. So $\\frac{x^{2}}{x^{3}-8} = \\frac{1}{3}\\frac{u'(x)}{u(x)}$. Step 2: antiderivative $\\frac{1}{3}\\ln|x^{3}-8|$. Step 3: at $x=1$: $\\ln|{-7}| = \\ln 7$. At $x=-1$: $\\ln|{-9}| = \\ln 9 = 2\\ln 3$. Step 4: $3K = \\ln 7 - 2\\ln 3$. Answer: A.`,
    },
    proTip: `Train your eye to recognize $u'/u$ in disguise. Hints: (1) the numerator has degree exactly one less than the derivative of the denominator's outermost form, (2) coefficients match up to a constant. If both hold, the antiderivative is a logarithm.`,
    examRefs: [
      { section: 'real-exam', question: 10, label: 'Real Exam Q10' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// COURSE RECAP
// ─────────────────────────────────────────────────────────────
export const RECAP_2023: RecapTopic[] = [
  {
    id: 'sequences-2023',
    title: 'Sequences — Recurrence, Closed Form & Limits',
    icon: '🔢',
    color: '#C9A84C',
    summary: `Most concours sequence questions are about (i) classifying $u_{n+1} = f(u_n)$ as arithmetic, geometric, or neither, and (ii) finding a closed form. The toolkit: identify a fixed point $L$, define $v_n = u_n - L$ or $v_n = 1/u_n$, and compute $v_{n+1}$ in terms of $v_n$. If $v_{n+1} - v_n$ is constant, $v$ is arithmetic. If $v_{n+1}/v_n$ is constant, $v$ is geometric. Limits then follow from $|q| < 1 \\Rightarrow v_n \\to 0$.`,
    formulas: [
      { label: 'Arithmetic', latex: `u_{n+1} - u_n = r \\;\\text{constant} \\implies u_n = u_0 + n r`, description: 'Constant common DIFFERENCE. Closed form is linear in $n$.' },
      { label: 'Geometric', latex: `\\dfrac{u_{n+1}}{u_n} = q \\;\\text{constant} \\implies u_n = u_0 \\cdot q^{n}`, description: 'Constant common RATIO. Closed form is exponential in $n$.' },
      { label: 'Linear recurrence (affine)', latex: `u_{n+1} = a u_n + b \\implies L = \\dfrac{b}{1-a} \\;,\\; v_n = u_n - L \\text{ geometric, ratio } a`, description: 'Find the fixed point $L$ from $L = aL + b$. Then $v_n = u_n - L$ satisfies $v_{n+1} = a v_n$, geometric.' },
      { label: 'Homographic recurrence', latex: `u_{n+1} = \\dfrac{a u_n}{b + c u_n} \\implies v_n = \\dfrac{1}{u_n} \\text{ usually arithmetic}`, description: 'Inverting often linearizes the recurrence. Try this whenever the recurrence has $u_n$ in the denominator.' },
      { label: 'Geometric finite sum', latex: `\\sum_{k=0}^{n} q^{k} = \\dfrac{1 - q^{n+1}}{1 - q} \\;,\\; q \\neq 1`, description: 'Closed form for partial geometric sums. Number of terms is $n+1$ (from $k=0$ to $k=n$).' },
      { label: 'Limit of geometric', latex: `|q| < 1 \\implies q^{n} \\to 0 \\implies u_n \\to L \\;\\text{(if } u_n = L + v_n,\\, v_n \\text{ geometric)}`, description: 'Convergence iff $|q| < 1$. Otherwise $u_n$ diverges (or oscillates if $q = -1$).' },
      { label: 'Comparison/squeeze', latex: `|u_n - L| \\leq \\varepsilon_n \\to 0 \\implies u_n \\to L`, description: 'If you can bound $|u_n - L|$ by a sequence going to zero, conclude. Useful when the recurrence is contractive.' },
    ],
    theorems: [
      { name: 'Fixed-point method', statement: `\\text{If } u_{n+1} = a u_n + b \\text{ with } a \\neq 1, \\text{ the unique fixed point } L = b/(1-a) \\text{ makes } v_n = u_n - L \\text{ geometric of ratio } a.`, keyIdea: 'Always start by finding the fixed point. Then study $v_n = u_n - L$, which is "purely" geometric.' },
      { name: 'Inversion trick', statement: `\\text{If } u_{n+1} = \\dfrac{a u_n}{b + c u_n}, \\text{ define } v_n = 1/u_n. \\text{ Compute } v_{n+1} \\text{ — usually arithmetic with } r = c/a.`, keyIdea: 'Inverse linearizes most homographic recurrences. Always try.' },
      { name: 'Bounded + monotone $\\Rightarrow$ converges', statement: `(u_n) \\text{ increasing and bounded above} \\implies (u_n) \\text{ converges}`, keyIdea: 'A classical sufficient condition. Typical proof: show monotonicity by induction, then bound by induction.' },
    ],
    pitfalls: [
      `Don't confuse "arithmetic" with "geometric": arithmetic = constant DIFFERENCE, geometric = constant RATIO. They're different shapes (linear vs exponential growth).`,
      `When the linear coefficient $a < 0$, the auxiliary sequence $v_n$ has NEGATIVE ratio. Then $u_n$ OSCILLATES around the limit (not monotone).`,
      `Always verify the closed form at $n=0$ as a sanity check. A wrong sign or off-by-one error usually shows up here.`,
      `For the geometric sum, be careful with the number of terms: $\\sum_{k=0}^{n} q^{k}$ has $n+1$ terms (from $k=0$ to $k=n$). The exponent in $q^{n+1}-1$ is the number of terms.`,
    ],
  },
  {
    id: 'complex-numbers-2023',
    title: 'Complex Numbers — Algebra & Exponential Form',
    icon: '🔮',
    color: '#4CADE8',
    summary: `Three forms: algebraic ($z = x + iy$), trigonometric ($z = r(\\cos\\theta + i\\sin\\theta)$), and exponential ($z = re^{i\\theta}$). Each is best for a different operation: algebraic for sums and conjugates, exponential for products, powers, and arguments. Switch between them fluidly. Conjugate $\\bar z = x - iy = re^{-i\\theta}$.`,
    formulas: [
      { label: 'Algebraic form', latex: `z = x + iy \\;,\\; x = \\operatorname{Re}(z) \\;,\\; y = \\operatorname{Im}(z) \\;,\\; \\bar z = x - iy`, description: 'Best for sums, differences, conjugates, and reading off real/imaginary parts.' },
      { label: 'Modulus', latex: `|z| = \\sqrt{x^{2} + y^{2}} = \\sqrt{z\\,\\bar z}`, description: 'Always non-negative. Geometrically, the distance from the origin to the affix point.' },
      { label: 'Exponential form', latex: `z = r\\,e^{i\\theta} \\;,\\; r = |z| > 0 \\;,\\; \\theta = \\arg(z)`, description: 'Best for products, powers, roots. Argument $\\theta$ is defined modulo $2\\pi$.' },
      { label: 'Product / quotient', latex: `z_1 z_2 = r_1 r_2\\,e^{i(\\theta_1 + \\theta_2)} \\;,\\; \\dfrac{z_1}{z_2} = \\dfrac{r_1}{r_2}\\,e^{i(\\theta_1 - \\theta_2)}`, description: 'Moduli multiply (or divide), arguments add (or subtract).' },
      { label: 'De Moivre / power', latex: `(r\\,e^{i\\theta})^{n} = r^{n}\\,e^{in\\theta} \\;,\\; n \\in \\mathbb{Z}`, description: 'Modulus is raised to the power, argument is multiplied. Reduce $n\\theta$ mod $2\\pi$ at the end.' },
      { label: 'Conjugate properties', latex: `\\overline{z_1 \\pm z_2} = \\bar z_1 \\pm \\bar z_2 \\;,\\; \\overline{z_1 z_2} = \\bar z_1 \\bar z_2 \\;,\\; \\bar z = re^{-i\\theta}`, description: 'Conjugation distributes over sum, product, quotient. Geometrically, reflection across the real axis.' },
      { label: 'Standard angles', latex: `\\arg(1) = 0 \\;,\\; \\arg(i) = \\tfrac{\\pi}{2} \\;,\\; \\arg(-1) = \\pi \\;,\\; \\arg(1+i) = \\tfrac{\\pi}{4} \\;,\\; \\arg(\\sqrt 3 + i) = \\tfrac{\\pi}{6}`, description: 'These appear constantly in concours questions. Memorize them.' },
    ],
    theorems: [
      { name: 'Three-form bridge', statement: `z = x + iy = r(\\cos\\theta + i\\sin\\theta) = r\\,e^{i\\theta} \\quad \\text{where } x = r\\cos\\theta,\\ y = r\\sin\\theta,\\ r = \\sqrt{x^{2}+y^{2}}`, keyIdea: 'Switch forms based on the operation. Algebraic for + and conjugate; exponential for ×, /, ^.' },
      { name: 'Argument quadrant rule', statement: `\\text{If } z = x + iy:\\ \\arg(z) = \\begin{cases} \\arctan(y/x) & \\text{if } x > 0 \\\\ \\pi + \\arctan(y/x) & \\text{if } x < 0,\\ y \\geq 0 \\\\ -\\pi + \\arctan(y/x) & \\text{if } x < 0,\\ y < 0 \\\\ \\pi/2 \\text{ or } -\\pi/2 & \\text{if } x = 0 \\end{cases}`, keyIdea: 'Mind the quadrant! $-1-i$ is in Q3 with argument $-3\\pi/4$ (or $5\\pi/4$), NOT $\\pi/4$.' },
      { name: 'Roots of unity', statement: `z^{n} = 1 \\iff z = e^{i\\,2k\\pi/n} \\;,\\; k = 0, 1, \\ldots, n-1`, keyIdea: '$n$ solutions evenly spaced on the unit circle. The 3rd roots of unity are $1$, $j = e^{i\\,2\\pi/3}$, $j^{2} = e^{-i\\,2\\pi/3}$, with $1 + j + j^{2} = 0$.' },
    ],
    pitfalls: [
      `When taking the argument of $a + ib$, ALWAYS check the QUADRANT first. $\\arctan(y/x)$ alone gives a value in $(-\\pi/2, \\pi/2)$ — not always correct.`,
      `For products: arguments ADD; moduli MULTIPLY. Never multiply arguments or add moduli — that's a classic exam trap.`,
      `Conjugate of an exponential: $\\overline{re^{i\\theta}} = re^{-i\\theta}$ (not $re^{i\\theta}$ with opposite sign on $r$).`,
      `Reduce arguments modulo $2\\pi$ AT THE END. Don't reduce intermediate steps if it confuses you. The MCQ may give equivalent values like $5\\pi/6$ vs $-7\\pi/6$.`,
    ],
  },
  {
    id: 'loci-complex-2023',
    title: 'Loci in the Complex Plane',
    icon: '🗺️',
    color: '#9066EE',
    summary: `Given a constraint on $z$, the set of points $M(z)$ is one of: a LINE (often a perpendicular bisector), a CIRCLE, a PARABOLA, or a HYPERBOLA. The strategy: write $z = x + iy$ in algebraic form, expand the constraint, and recognize the resulting Cartesian equation.`,
    formulas: [
      { label: 'Line', latex: `ax + by + c = 0 \\implies \\text{straight line}`, description: 'Single linear equation. Special case: perpendicular bisector of $[AB]$ is $|z - z_A| = |z - z_B|$, which becomes a line.' },
      { label: 'Circle', latex: `|z - z_0| = R \\iff (x-x_0)^{2} + (y-y_0)^{2} = R^{2}`, description: 'Center at $z_0$, radius $R$. Look for "$|z - \\text{const}| = $ const" pattern.' },
      { label: 'Two perpendicular lines', latex: `(x-y)(x+y) = 0 \\iff y = x \\text{ or } y = -x`, description: 'When the equation factors into two linear factors, you get a UNION of two lines.' },
      { label: 'Rectangular hyperbola', latex: `xy = k \\;,\\; k \\neq 0`, description: 'Two branches in opposite quadrants (Q1+Q3 if $k > 0$). Asymptotes: the coordinate axes.' },
      { label: 'Parabola', latex: `y = ax^{2} + bx + c \\;\\text{or}\\; x = ay^{2} + by + c`, description: 'One quadratic term + one linear term. Axis is parallel to a coordinate axis.' },
      { label: 'Empty set', latex: `\\text{If the equation has no solutions: } S = \\emptyset`, description: 'Always check for impossible equations like $x^{2} + y^{2} = -1$ or contradictory factor systems.' },
    ],
    theorems: [
      { name: 'Distance interpretation', statement: `|z - z_A| = \\text{dist}(M, A) \\implies |z - z_A| = R \\text{ is a circle}, \\;|z - z_A| = |z - z_B| \\text{ is a perpendicular bisector}.`, keyIdea: 'The modulus-of-difference is a distance. Learn to translate distance equations directly into geometric shapes.' },
      { name: 'Standard expansions', statement: `z = x + iy \\implies \\begin{cases} z^{2} = (x^{2}-y^{2}) + 2ixy \\\\ |z|^{2} = x^{2} + y^{2} \\\\ z + \\bar z = 2x \\\\ z - \\bar z = 2iy \\end{cases}`, keyIdea: 'These four expansions handle 90% of locus problems. Memorize.' },
      { name: 'Re/Im cleanup', statement: `\\operatorname{Re}(z') = 0 \\Leftrightarrow \\text{horizontal-axis line in } z'\\text{-plane} \\Rightarrow \\text{algebraic equation in } x, y \\text{ for } z\\text{-plane locus}`, keyIdea: 'Constraints like "$z\' \\in \\mathbb{R}$" or "$z\' \\in i\\mathbb{R}$" translate directly to $\\operatorname{Im}(z\') = 0$ or $\\operatorname{Re}(z\') = 0$.' },
    ],
    pitfalls: [
      `When you get $x^{2} + y^{2} = $ NEGATIVE constant, the locus is EMPTY, not a circle. Always check the sign on the right.`,
      `When you get a polynomial equation that factors into linear pieces, the locus is a UNION (not a single line). Watch for $(x-y)(x+y) = 0 \\Rightarrow$ two lines, not one.`,
      `An equation like $|z - z_A| = |z - z_B|$ is the perpendicular BISECTOR, NOT the line through $A$ and $B$.`,
      `Parabolas in concours problems usually open along an axis. If you see $y = $ quadratic in $x$, axis is vertical; if $x = $ quadratic in $y$, axis is horizontal.`,
    ],
  },
  {
    id: 'logarithm-2023',
    title: 'Logarithm — Domain, Equations, Inequalities',
    icon: '📚',
    color: '#4CE87C',
    summary: `$\\ln(x)$ is defined only on $]0, +\\infty[$, strictly increasing, with $\\ln(1) = 0$ and $\\ln(e) = 1$. Inverse of $e^{x}$. Properties: $\\ln(ab) = \\ln(a) + \\ln(b)$, $\\ln(a^{n}) = n\\ln(a)$, $\\ln(1/a) = -\\ln(a)$. For equations, set up the domain FIRST, then equate arguments. For inequalities, the direction is preserved (since $\\ln$ is increasing).`,
    formulas: [
      { label: 'Domain', latex: `\\ln(u(x)) \\text{ defined} \\iff u(x) > 0`, description: 'STRICT inequality. Setting the domain is the FIRST step of any logarithm problem.' },
      { label: 'Properties', latex: `\\ln(ab) = \\ln a + \\ln b \\;,\\; \\ln(a/b) = \\ln a - \\ln b \\;,\\; \\ln(a^{n}) = n\\ln a`, description: 'These three identities transform products/quotients/powers into sums/differences/products. Use to simplify before solving.' },
      { label: 'Inverse property', latex: `\\ln(e^{x}) = x \\;,\\; e^{\\ln x} = x \\;\\text{(for } x > 0\\text{)}`, description: 'Use to convert between $\\ln$ and $\\exp$ when solving equations.' },
      { label: 'Equation rule', latex: `\\ln u = \\ln v \\iff u = v \\;\\text{(both } u, v > 0\\text{)}`, description: 'Since $\\ln$ is INJECTIVE, equating arguments is valid. Always check positivity afterward.' },
      { label: 'Inequality rule', latex: `\\ln u \\geq \\ln v \\iff u \\geq v \\;\\text{(both } > 0\\text{)}`, description: '$\\ln$ is increasing, so the direction is preserved. (Compare: $1/x$ would FLIP it.)' },
      { label: 'Limits', latex: `\\lim_{x\\to 0^{+}} \\ln x = -\\infty \\;,\\; \\lim_{x\\to +\\infty} \\ln x = +\\infty \\;,\\; \\lim_{x\\to+\\infty} \\dfrac{\\ln x}{x^{\\alpha}} = 0 \\;\\forall \\alpha > 0`, description: 'Logarithm grows SLOWER than any positive power. Crucial for asymptote and growth comparisons.' },
      { label: 'Derivative & integral', latex: `(\\ln u)' = \\dfrac{u'}{u} \\;,\\; \\int \\dfrac{u'}{u}\\,dx = \\ln|u| + C`, description: 'The "$u\'/u$" pattern is by FAR the most common integral form involving logarithms.' },
    ],
    theorems: [
      { name: 'Equation procedure', statement: `\\text{Step 1: write domain. Step 2: combine logs into one. Step 3: equate arguments. Step 4: discard solutions outside domain.}`, keyIdea: 'NEVER skip the domain step — equations like $\\ln(x-3) + \\ln(x-2) = \\ln 2$ have domain $x > 3$, which kills any negative solution.' },
      { name: 'Inequality + composite', statement: `f \\text{ increasing}: \\ln(f(x)) > 0 \\iff f(x) > 1.\\\\f \\text{ decreasing}: \\ln(f(x)) > 0 \\iff f(x) > 1 \\text{ — same direction!}`, keyIdea: '$\\ln(\\cdot) > 0$ is equivalent to $\\cdot > 1$. The monotonicity of the inner function only matters if you go back to $x$.' },
      { name: 'Substitution for $\\ln^{2}$', statement: `\\text{If equation contains } \\ln^{2}(x) \\text{ and } \\ln(x), \\text{ set } t = \\ln(x). \\text{ The equation becomes a regular polynomial.}`, keyIdea: 'Bijection $t = \\ln x \\Leftrightarrow x = e^{t}$. After solving for $t$, exponentiate.' },
    ],
    pitfalls: [
      `Forgetting the domain: $\\ln(x-3) + \\ln(x-2) = \\ln 2$ gives $x = 0$ or $x = 4$ — but $x = 0$ violates $x > 3$. Only $x = 4$ is a real solution.`,
      `$\\ln(a + b) \\neq \\ln a + \\ln b$. The product property is $\\ln(ab) = \\ln a + \\ln b$ — sum INSIDE the log is NOT separable.`,
      `$\\ln$ is only defined for STRICTLY positive arguments. Don't accept $\\ln(0)$ or $\\ln(-3)$ as valid.`,
      `For $\\ln$ inequalities, don't flip the direction. $\\ln$ is INCREASING, unlike $1/x$.`,
    ],
  },
  {
    id: 'function-analysis-2023',
    title: 'Function Analysis — Domain, Limits, Asymptotes',
    icon: '📈',
    color: '#F5A623',
    summary: `For any function $f$, the workflow is: (1) compute domain $D_{f}$ (rules: square root requires $\\geq 0$, log requires $> 0$, denominator $\\neq 0$), (2) limits at the boundary of $D_{f}$, (3) asymptotes (horizontal, vertical, oblique, parabolic), (4) derivative $f'$ for monotonicity, (5) second derivative $f''$ for convexity. Build a TABLE OF VARIATIONS to summarize.`,
    formulas: [
      { label: 'Domain rules', latex: `\\sqrt{u(x)}: u(x) \\geq 0 \\;,\\; \\dfrac{1}{u(x)}: u(x) \\neq 0 \\;,\\; \\ln(u(x)): u(x) > 0`, description: 'Memorize these three. Combine via INTERSECTION when multiple conditions apply.' },
      { label: 'Horizontal asymptote', latex: `\\lim_{x\\to\\pm\\infty} f(x) = \\ell \\in \\mathbb{R} \\implies y = \\ell`, description: 'Finite limit at infinity. Test FIRST.' },
      { label: 'Vertical asymptote', latex: `\\lim_{x\\to a} f(x) = \\pm\\infty \\implies x = a`, description: 'At a point of $D_{f}$\'s boundary where $f$ blows up. Common: $x = 0$ for $\\ln(x)$ or $1/x$.' },
      { label: 'Oblique asymptote', latex: `\\lim \\dfrac{f(x)}{x} = a \\neq 0 \\;\\text{ and }\\; \\lim [f(x) - ax] = b \\implies y = ax + b`, description: 'Two-step test. Both limits must exist and be finite.' },
      { label: 'Parabolic branch — direction $Ox$', latex: `\\lim f(x) = \\pm\\infty \\;\\text{ and }\\; \\lim \\dfrac{f(x)}{x} = 0 \\implies \\text{PB along } Ox`, description: 'Curve grows but slower than any line. Example: $\\sqrt x$, $\\ln x$.' },
      { label: 'Parabolic branch — direction $Oy$', latex: `\\lim f(x) = \\pm\\infty \\;\\text{ and }\\; \\lim \\dfrac{f(x)}{x} = \\pm\\infty \\implies \\text{PB along } Oy`, description: 'Curve grows FASTER than any line. Example: $e^{x}$, $x^{2}$.' },
      { label: 'Growth hierarchy', latex: `\\ln(x) \\;\\ll\\; x^{\\alpha} \\;\\ll\\; e^{x} \\quad (x \\to +\\infty,\\, \\alpha > 0)`, description: 'Logarithm < power < exponential. Use to resolve indeterminate forms.' },
    ],
    theorems: [
      { name: 'Asymptote decision tree', statement: `\\text{1. Test } \\lim f. \\text{ If finite: H.A. Done.}\\\\\\text{2. Else test } \\lim f/x.\\\\\\;\\; \\text{0 } \\Rightarrow \\text{ PB along } Ox.\\\\\\;\\; \\pm\\infty \\Rightarrow \\text{ PB along } Oy.\\\\\\;\\; a \\neq 0 \\Rightarrow \\text{ candidate oblique. Test } \\lim[f-ax].\\\\\\;\\;\\;\\;\\text{ Finite} \\Rightarrow y = ax+b. \\text{ Else PB along } Oy.`, keyIdea: 'Strict order: H.A. → ratio test → maybe oblique → otherwise parabolic.' },
      { name: 'IVT', statement: `f \\text{ continuous on } [a,b], f(a) f(b) < 0 \\implies \\exists\\, c \\in (a,b),\\, f(c) = 0`, keyIdea: 'Intermediate Value Theorem. If sign changes, there must be a zero. If $f$ is also monotonic, the zero is UNIQUE.' },
      { name: 'Range of continuous bijection', statement: `f \\text{ continuous, strictly monotonic on } [a,b] \\implies f([a,b]) = [\\min, \\max]`, keyIdea: 'For a strictly increasing $f$, $f([a,b]) = [f(a), f(b)]$. For decreasing: $[f(b), f(a)]$.' },
    ],
    pitfalls: [
      `Don't stop after $\\lim f = +\\infty$: that ONLY rules out the H.A. You still need to compute $\\lim f/x$ to distinguish parabolic vs oblique.`,
      `An oblique asymptote candidate $\\lim f/x = a \\neq 0$ is NOT enough — you must also verify $\\lim[f-ax]$ is finite. If it's $\\pm\\infty$, no oblique asymptote (it's a parabolic branch).`,
      `For $\\ln$ functions, the boundary points are USUALLY where the argument tends to $0^{+}$ (V.A. going down) or $+\\infty$ (V.A. going up).`,
      `The domain of $\\sqrt{u(x)}$ requires $u(x) \\geq 0$ (with equality OK), but $\\ln(u(x))$ requires $u(x) > 0$ (STRICT). Don't mix them up.`,
    ],
  },
  {
    id: 'derivatives-variations-2023',
    title: 'Derivatives, Tangents & Tables of Variation',
    icon: '✏️',
    color: '#4CE87C',
    summary: `The derivative $f'$ controls everything: sign of $f'$ gives monotonicity, $f'(x_{0}) = 0$ flags candidates for extrema, the equation of the tangent at $x_{0}$ is $y = f'(x_{0})(x - x_{0}) + f(x_{0})$. The TABLE OF VARIATIONS combines: $x$ row, $f'(x)$ row with sign, $f(x)$ row with arrows ($\\nearrow$/$\\searrow$) and limit values.`,
    formulas: [
      { label: 'Derivative rules', latex: `(uv)' = u'v + uv' \\;,\\; \\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^{2}} \\;,\\; (u\\circ v)' = (u' \\circ v)\\cdot v'`, description: 'Product, quotient, chain rule. Master these three.' },
      { label: 'Standard derivatives', latex: `(\\ln x)' = \\dfrac{1}{x} \\;,\\; (e^{x})' = e^{x} \\;,\\; (x^{n})' = n x^{n-1} \\;,\\; (\\sqrt x)' = \\dfrac{1}{2\\sqrt x}`, description: 'Memorize. Combined with chain rule, handles 90% of concours derivatives.' },
      { label: 'Tangent line', latex: `T_{a}: y = f'(a)\\,(x - a) + f(a)`, description: 'Slope $= f\'(a)$, point $= (a, f(a))$. If $f\'(a) = 0$, horizontal tangent.' },
      { label: 'Sign of $f\'$', latex: `f' > 0 \\text{ on } I \\implies f \\nearrow \\text{ on } I \\;\\text{ ; }\\; f' < 0 \\implies f \\searrow`, description: 'Sign of derivative gives monotonicity. Build a SIGN TABLE for $f\'$ first.' },
      { label: 'Local extremum', latex: `f'(x_{0}) = 0 \\;\\text{ and }\\; f' \\text{ changes sign at } x_{0} \\implies \\text{local extremum at } x_{0}`, description: 'Sign change is essential. Without it, $f\'(x_{0}) = 0$ is just a stationary point (e.g., inflection).' },
      { label: 'Convexity', latex: `f''(x) > 0 \\implies f \\text{ convex (smile)} \\;,\\; f''(x) < 0 \\implies f \\text{ concave (frown)}`, description: '$f\'\'$ tells you about curvature, not monotonicity.' },
      { label: 'Inflection point', latex: `f'' \\text{ changes sign at } x_{0} \\implies x_{0} \\text{ is an inflection point}`, description: 'Sign CHANGE in $f\'\'$, not just $f\'\'(x_{0}) = 0$.' },
    ],
    theorems: [
      { name: 'Table of variations', statement: `\\begin{array}{|c|ccccc|}\\hline x & a & & x_0 & & b \\\\\\hline f'(x) & & + & 0 & - & \\\\\\hline & & & f(x_0) & & \\\\ f(x) & f(a) & \\nearrow & & \\searrow & f(b) \\\\\\hline\\end{array}`, keyIdea: 'Standard format. First row: critical $x$ values (boundaries + zeros of $f\'$). Second row: sign of $f\'$. Third row: arrows + key values of $f$.' },
      { name: 'Range from table', statement: `\\text{From the table, } f(I) \\text{ is the union of intervals between extrema and boundary limits.}`, keyIdea: 'The image of $f$ is read directly from the table — span between maximum and minimum (or limit) values.' },
      { name: 'Half-tangent classification', statement: `\\lim_{x\\to a^{+}}\\dfrac{f(x)-f(a)}{x-a} \\;\\text{determines the half-tangent}: \\\\ \\text{finite} \\Rightarrow \\text{slope}, \\;+\\infty \\Rightarrow \\text{vertical UP}, \\;-\\infty \\Rightarrow \\text{vertical DOWN}.`, keyIdea: 'When $f$ is extended by continuity at a boundary, check the difference quotient (not $f\'$).' },
    ],
    pitfalls: [
      `$f'(x_{0}) = 0$ alone is NOT enough for an extremum — you need a SIGN CHANGE. Otherwise it might be just an inflection with horizontal tangent.`,
      `Don't confuse $f'$ (monotonicity) with $f''$ (convexity). Both can be positive while $f$ is decreasing then increasing — that's just a convex U-shape.`,
      `For tangent-equation problems, plug into $y = f'(a)(x - a) + f(a)$ — never write $y = f'(x)\\cdot x + f(a)$.`,
      `When building a table of variations, INCLUDE the boundary limits (e.g., $\\lim_{x\\to+\\infty} f$). Otherwise the range is incomplete.`,
    ],
  },
  {
    id: 'integrals-2023',
    title: 'Integrals — Recognition Patterns',
    icon: '∫',
    color: '#9066EE',
    summary: `Most concours integrals fit one of four patterns: (i) basic table $\\int x^{n}\\,dx$, (ii) $u'/u$ form giving $\\ln|u|$, (iii) $u^{n}\\cdot u'$ form giving $u^{n+1}/(n+1)$, (iv) $u'\\cdot e^{u}$ form giving $e^{u}$. For more complex cases, use substitution or integration by parts. Always check continuity on $[a,b]$ FIRST — improper integrals need a limit.`,
    formulas: [
      { label: 'Basic table', latex: `\\int x^{n}\\,dx = \\dfrac{x^{n+1}}{n+1} + C \\;\\text{(} n \\neq -1\\text{)} \\;,\\; \\int \\dfrac{1}{x}\\,dx = \\ln|x| + C`, description: 'Power rule and the special case $n = -1$.' },
      { label: '$u\'/u$ form', latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C`, description: 'Whenever the numerator equals the derivative of the denominator. Most common pattern in concours.' },
      { label: '$u^{n}\\cdot u\'$ form', latex: `\\int u^{n}(x)\\,u'(x)\\,dx = \\dfrac{u^{n+1}(x)}{n+1} + C \\;\\text{(} n \\neq -1\\text{)}`, description: 'A power of $u$ multiplied by its own derivative. The "chain rule reversed".' },
      { label: '$u\' e^{u}$ form', latex: `\\int u'(x)\\,e^{u(x)}\\,dx = e^{u(x)} + C`, description: 'Exponential composed with $u$, multiplied by $u\'$. Direct application of the chain rule.' },
      { label: 'Integration by parts', latex: `\\int_{a}^{b} u'\\,v\\,dx = [u\\,v]_{a}^{b} - \\int_{a}^{b} u\\,v'\\,dx`, description: 'Trade one integral for an easier one. Pick $u\'$ as the part you can integrate and $v$ as the part that simplifies on differentiation.' },
      { label: 'Substitution', latex: `\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du \\;,\\; u = g(x)`, description: 'Change variable to simplify. Don\'t forget to change the bounds: $u(a)$ and $u(b)$.' },
      { label: 'Useful limit', latex: `\\lim_{x\\to 0^{+}} x\\,\\ln(x) = 0`, description: 'Indispensable for improper integrals near $0$. Apply when computing $\\int_{0}^{1} \\ln x\\,dx$ or similar.' },
    ],
    theorems: [
      { name: 'Linearity', statement: `\\int (\\alpha f + \\beta g) = \\alpha \\int f + \\beta \\int g`, keyIdea: 'Split sums and pull out constants. The fundamental tool for breaking complex integrands.' },
      { name: 'Continuity check', statement: `\\text{If } f \\text{ is continuous on } [a,b], \\text{ then } \\int_{a}^{b} f \\text{ exists.}`, keyIdea: 'BEFORE integrating, verify the integrand has no singularity in $[a,b]$. Otherwise the integral may be improper or undefined.' },
      { name: 'Antisymmetric integrand', statement: `f(-x) = -f(x) \\implies \\int_{-a}^{a} f(x)\\,dx = 0`, keyIdea: 'Odd functions integrate to zero on symmetric intervals. Saves enormous time when applicable.' },
      { name: 'Symmetric integrand', statement: `f(-x) = f(x) \\implies \\int_{-a}^{a} f(x)\\,dx = 2\\int_{0}^{a} f(x)\\,dx`, keyIdea: 'Even functions: integrate on $[0,a]$ and double.' },
    ],
    pitfalls: [
      `Forgetting the $\\frac{1}{n+1}$ factor in $\\int u^{n} u'$. Always normalize by the new exponent.`,
      `Confusing $\\int \\tan x$ (= $-\\ln|\\cos x|$) with the inverse tan. The minus sign in front matters.`,
      `For improper integrals, you MUST go through the limit $\\lim_{\\lambda \\to a^{+}} \\int_{\\lambda}^{b}$. Skipping this step is a guaranteed wrong answer.`,
      `Always check the integrand is CONTINUOUS on $[a,b]$. A hidden zero in the denominator inside $[a,b]$ means the integral is improper or undefined.`,
    ],
  },
]
