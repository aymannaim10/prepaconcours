// ============================================================
// Content Data – 2022 Exam Preparation
// Tips & Tricks + Course Recap — comprehensive but compact
// Aligned with the 2022 exam topics: derivatives, integrals,
// differential equations, limits, series, sequences, probability,
// complex numbers, geometry in space, inverse functions.
// ============================================================

import type { Tip, RecapTopic } from './content-2024'

// ─────────────────────────────────────────────────────────────
// TIPS & TRICKS
// ─────────────────────────────────────────────────────────────
export const TIPS_2022: Tip[] = [
  {
    id: 'quotient-derivative-2022',
    title: 'Quotient Rule — Evaluate at a Point Without Expanding',
    topic: 'Derivatives',
    icon: '✏️',
    color: '#4CADE8',
    summary: `For $f(x) = u(x)/v(x)$ the formula is $f' = (u'v - uv')/v^{2}$. To compute $f'(a)$, evaluate $u(a), u'(a), v(a), v'(a)$ FIRST and substitute — no need to simplify the general formula.`,
    why: `Exercise 1 of 2022 asks for $f'(1)$ where $f(x) = (x\\ln x)/(x+1)$. Many students try to derive the general formula $f'(x)$ and simplify — wasting 3+ minutes. The smart approach: compute $u(1), u'(1), v(1), v'(1)$ as numbers, then plug into the quotient rule once.`,
    formulas: [
      { label: 'Quotient rule', latex: `\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^{2}}`, description: 'Memorize the order: $u\'$ first, MINUS, then $uv\'$. The denominator is $v$ squared.' },
      { label: 'Evaluation shortcut', latex: `f'(a) = \\dfrac{u'(a)\\,v(a) - u(a)\\,v'(a)}{v(a)^{2}}`, description: 'Plug numbers, not expressions. Saves all the algebraic simplification.' },
      { label: 'Product inside', latex: `(x\\ln x)' = \\ln x + x \\cdot \\dfrac{1}{x} = \\ln x + 1`, description: 'When $u$ itself is a product, apply product rule first. At $x=1$: $\\ln 1 + 1 = 1$.' },
    ],
    example: {
      question: `f(x) = \\dfrac{x\\ln x}{x+1},\\ \\text{find } f'(1)`,
      solution: `u(1) = 0,\\ u'(1) = 1,\\ v(1) = 2,\\ v'(1) = 1 \\implies f'(1) = \\dfrac{1\\cdot 2 - 0\\cdot 1}{4} = \\dfrac{1}{2}`,
      explanation: `Step 1: $u = x\\ln x$, $u(1) = 0$, $u' = \\ln x + 1$, $u'(1) = 1$. Step 2: $v = x+1$, $v(1) = 2$, $v' = 1$. Step 3: plug in $f'(1) = (1\\cdot 2 - 0\\cdot 1)/4 = 2/4 = 1/2$.`,
    },
    proTip: `If the numerator $u(a) = 0$, the second term $uv'$ vanishes immediately — saves work. Always check if $u(a) = 0$ before computing $u(a)v'(a)$.`,
    examRefs: [
      { section: 'real-exam', question: 1, label: 'Real Exam Q1' },
    ],
  },
  {
    id: 'integral-uprime-u-2022',
    title: 'Spot u\'/u for Logarithmic Integrals',
    topic: 'Integrals',
    icon: '∫',
    color: '#4CE87C',
    summary: `$\\int \\frac{2x}{x^{2}+1}\\,dx = \\ln(x^{2}+1)$ — recognize the numerator as the derivative of the denominator.`,
    why: `Exercise 2 asks for $\\int_{0}^{1} \\frac{2x}{x^{2}+1}dx$. Naive substitution works but is slow. Faster: see that $(x^{2}+1)' = 2x$, so the integrand IS $u'/u$ with $u = x^{2}+1$. Antiderivative: $\\ln|u| = \\ln(x^{2}+1)$.`,
    formulas: [
      { label: 'Pattern', latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C`, description: 'Whenever you see "fraction where numerator is derivative of denominator", apply this directly.' },
      { label: 'Constant scaling', latex: `\\int \\dfrac{c\\,u'(x)}{u(x)}\\,dx = c\\,\\ln|u(x)| + C`, description: 'If numerator is a multiple of $u\'$, factor out the multiple.' },
    ],
    example: {
      question: `\\displaystyle\\int_{0}^{1} \\dfrac{2x}{x^{2}+1}\\,dx`,
      solution: `\\bigl[\\ln(x^{2}+1)\\bigr]_{0}^{1} = \\ln 2 - \\ln 1 = \\ln 2`,
      explanation: `$u = x^{2}+1$ has $u' = 2x$. The integrand is exactly $u'/u$, so antiderivative is $\\ln|x^{2}+1|$. Plug bounds.`,
    },
    proTip: `If the numerator is OFF by a constant from $u\'$, factor it out — never try complex substitution if a simple constant adjustment works.`,
    examRefs: [
      { section: 'real-exam', question: 2, label: 'Real Exam Q2' },
    ],
  },
  {
    id: 'diff-eq-2022',
    title: 'Solve y\'\' − y = 0 with Initial Conditions in 4 Lines',
    topic: 'Differential Equations',
    icon: '📐',
    color: '#9066EE',
    summary: `$y'' - y = 0$ has characteristic roots $\\pm 1$, so the general solution is $y = A e^{x} + B e^{-x}$. Use $y(0)$ and $y'(0)$ to find $A$ and $B$.`,
    why: `Exercise 3 asks for $g(x)$ given $g'' - g = 0$, $g(0) = 2$, $g'(0) = 2$. The characteristic equation $r^{2} - 1 = 0$ gives $r = \\pm 1$. Solving the 2x2 system on $A, B$ from the initial conditions takes 30 seconds.`,
    formulas: [
      { label: 'Characteristic equation', latex: `y'' + by' + cy = 0 \\implies r^{2} + br + c = 0`, description: `Replace $y'' \\to r^{2}$, $y' \\to r$, $y \\to 1$. Solve the quadratic for $r$.` },
      { label: 'Two real roots case', latex: `r_{1} \\neq r_{2} \\text{ real} \\implies y = A\\,e^{r_{1}x} + B\\,e^{r_{2}x}`, description: 'Each root gives an exponential basis solution. The general solution is their linear combination.' },
      { label: 'Apply initial conditions', latex: `\\begin{cases} y(0) = A + B \\\\ y'(0) = A r_{1} + B r_{2} \\end{cases}`, description: 'Two unknowns, two equations. Subtract or add to solve.' },
    ],
    example: {
      question: `y'' - y = 0,\\ y(0) = 2,\\ y'(0) = 2`,
      solution: `r^{2} - 1 = 0 \\implies r = \\pm 1.\\ y = Ae^{x} + Be^{-x}.\\ A+B=2,\\ A-B=2 \\implies A=2, B=0 \\implies y = 2e^{x}`,
      explanation: `Step 1: characteristic $r^{2} - 1 = 0$, roots $\\pm 1$. Step 2: $y = Ae^{x} + Be^{-x}$. Step 3: $y(0) = A+B = 2$, $y'(0) = A-B = 2$. Add: $2A = 4 \\Rightarrow A = 2, B = 0$. Step 4: $y = 2e^{x}$.`,
    },
    proTip: `Memorize the three cases for $r$: TWO REAL DISTINCT roots ($Ae^{r_{1}x} + Be^{r_{2}x}$), ONE DOUBLE root $r$ ($(A + Bx)e^{rx}$), TWO COMPLEX conjugate roots $\\alpha \\pm i\\beta$ ($e^{\\alpha x}(A\\cos\\beta x + B\\sin\\beta x)$).`,
    examRefs: [
      { section: 'real-exam', question: 3, label: 'Real Exam Q3' },
    ],
  },
  {
    id: 'squeeze-theorem-2022',
    title: 'cos(n)/n → 0 — Always the Squeeze Theorem',
    topic: 'Limits',
    icon: '🤏',
    color: '#F5A623',
    summary: `When you see "bounded function divided by something tending to infinity" or "bounded × tending to 0", apply $|cos(n)| \\leq 1$ then $|cos(n)/n| \\leq 1/n \\to 0$.`,
    why: `Exercise 4 asks for $\\lim \\cos(n)/n$. The function $\\cos(n)$ is BOUNDED but doesn't have a limit. The trick: bound the absolute value, then use the squeeze (or "gendarmes") theorem.`,
    formulas: [
      { label: 'Squeeze theorem', latex: `|f(x)| \\leq g(x) \\;\\text{ and }\\; g(x) \\to 0 \\implies f(x) \\to 0`, description: 'Bound $|f|$ from above by something going to zero. Conclude.' },
      { label: 'Bounded $\\cos$ / $\\sin$', latex: `-1 \\leq \\cos(n) \\leq 1 \\;,\\; -1 \\leq \\sin(n) \\leq 1`, description: 'These never blow up, even though they don\'t converge. Use as bounds.' },
    ],
    example: {
      question: `\\displaystyle\\lim_{n\\to+\\infty} \\dfrac{\\cos(n)}{n}`,
      solution: `\\left|\\dfrac{\\cos(n)}{n}\\right| \\leq \\dfrac{1}{n} \\to 0 \\implies \\dfrac{\\cos(n)}{n} \\to 0`,
      explanation: `Step 1: bound $|\\cos(n)/n| \\leq 1/n$. Step 2: $1/n \\to 0$. Step 3: by squeeze, $\\cos(n)/n \\to 0$.`,
    },
    proTip: `Whenever an oscillating function (cos, sin, $(-1)^{n}$) appears with a denominator going to infinity, the limit is ALWAYS 0 by squeeze. Don't overthink it.`,
    examRefs: [
      { section: 'real-exam', question: 4, label: 'Real Exam Q4' },
    ],
  },
  {
    id: 'geometric-sum-2022',
    title: 'Geometric Sum: $\\sum_{k=0}^{n} q^{k} = (1-q^{n+1})/(1-q)$',
    topic: 'Series',
    icon: '⚡',
    color: '#C9A84C',
    summary: `For $S = 1 + e + e^{2} + \\cdots + e^{100}$, use the closed form with $q = e$ and $n = 100$ (so $n+1 = 101$ terms).`,
    why: `Exercise 5 asks for $S = 1 + e + e^{2} + \\cdots + e^{100}$. Trying to compute term by term is impossible. The geometric sum formula gives $S = (1 - e^{101})/(1 - e)$ in one line.`,
    formulas: [
      { label: 'Finite geometric sum', latex: `\\sum_{k=0}^{n} q^{k} = \\dfrac{1 - q^{n+1}}{1 - q} \\;,\\; q \\neq 1`, description: 'NUMBER OF TERMS is $n+1$ (from $k=0$ to $k=n$). The exponent in $q^{n+1}$ matches the number of terms.' },
      { label: 'Equivalent form', latex: `\\dfrac{1 - q^{n+1}}{1 - q} = \\dfrac{q^{n+1} - 1}{q - 1}`, description: 'Both numerator and denominator change sign — same answer. Use whichever fits the MCQ option format.' },
    ],
    example: {
      question: `S = 1 + e + e^{2} + \\cdots + e^{100}`,
      solution: `\\text{101 terms},\\ q = e \\implies S = \\dfrac{1 - e^{101}}{1 - e}`,
      explanation: `Count terms: $k = 0, 1, ..., 100$ is 101 terms. Use $\\sum_{k=0}^{100} e^{k} = (1 - e^{101})/(1 - e)$.`,
    },
    proTip: `COUNT THE TERMS CAREFULLY. The exponent in $q^{n+1}$ equals the number of terms. Off-by-one errors here are very common.`,
    examRefs: [
      { section: 'real-exam', question: 5, label: 'Real Exam Q5' },
    ],
  },
  {
    id: 'binomial-2022',
    title: 'Binomial Probability: P(X=k) = C(n,k) p^k (1-p)^(n-k)',
    topic: 'Probability',
    icon: '🎲',
    color: '#9066EE',
    summary: `For $n$ independent trials with success probability $p$, the chance of exactly $k$ successes is $\\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}$.`,
    why: `Exercise 7 asks for "exactly two heads in 4 tosses". This is binomial with $n=4, k=2, p=1/2$. Apply the formula directly.`,
    formulas: [
      { label: 'Binomial pmf', latex: `P(X=k) = \\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}`, description: 'Three parts: count of arrangements, probability of $k$ successes, probability of $n-k$ failures.' },
      { label: 'Binomial coefficients', latex: `\\binom{n}{0} = 1,\\;\\binom{n}{1} = n,\\;\\binom{n}{2} = \\dfrac{n(n-1)}{2},\\;\\binom{n}{n} = 1`, description: 'Memorize for small $n$. $\\binom{4}{2} = 6$, $\\binom{5}{2} = 10$, $\\binom{6}{3} = 20$.' },
      { label: 'Symmetry', latex: `\\binom{n}{k} = \\binom{n}{n-k}`, description: 'Useful when $k > n/2$: compute the smaller one.' },
    ],
    example: {
      question: `n=4 \\text{ coin tosses, } P(X=2)`,
      solution: `P(X=2) = \\binom{4}{2}\\,(1/2)^{2}\\,(1/2)^{2} = 6 \\cdot 1/16 = 3/8`,
      explanation: `$\\binom{4}{2} = 6$. $p = 1/2$. $P = 6 \\cdot (1/2)^{4} = 6/16 = 3/8$.`,
    },
    proTip: `ALWAYS check independence and constant probability per trial. WITH replacement = independent. WITHOUT replacement = NOT binomial (use hypergeometric or direct count).`,
    examRefs: [
      { section: 'real-exam', question: 7, label: 'Real Exam Q7' },
      { section: 'real-exam', question: 8, label: 'Real Exam Q8' },
    ],
  },
  {
    id: 'parametric-line-2022',
    title: 'Parametric Equation of a Line — Direction × Point Test',
    topic: 'Geometry in Space',
    icon: '📏',
    color: '#4CADE8',
    summary: `A line through points $A$ and $B$ has direction vector $\\vec{AB}$. A parametric form $\\{x = at+x_{0}, y = bt+y_{0}, z = ct+z_{0}\\}$ is valid iff (1) $(a,b,c) \\parallel \\vec{AB}$ and (2) the line passes through both $A$ and $B$.`,
    why: `Exercise 13 asks for a parametric form of $(OA)$ where $A(-1, 1, 2)$. Multiple options have parallel direction vectors — but only ONE actually contains the line. Test by setting $t$ to find both $O$ and $A$.`,
    formulas: [
      { label: 'Direction vector', latex: `\\vec{AB} = B - A = (x_{B}-x_{A},\\ y_{B}-y_{A},\\ z_{B}-z_{A})`, description: 'Subtract coordinates. Any non-zero scalar multiple is also a valid direction.' },
      { label: 'Parametric form', latex: `\\begin{cases} x = x_{0} + at \\\\ y = y_{0} + bt \\\\ z = z_{0} + ct \\end{cases},\\ t \\in \\mathbb{R}`, description: 'Pick a point on the line $(x_{0},y_{0},z_{0})$ and a direction $(a,b,c)$. Set $t = 0$ recovers the point.' },
      { label: 'Test 1: parallel', latex: `(a, b, c) = \\lambda \\vec{AB} \\;\\text{for some} \\;\\lambda \\neq 0`, description: 'Direction must be a non-zero multiple of $\\vec{AB}$.' },
      { label: 'Test 2: contains', latex: `\\exists\\, t \\;\\text{such that}\\;(x_{0}+at,\\ldots) = A`, description: 'Plug in coordinates of $A$ to find $t$. If $t$ is consistent across all three components, $A$ is on the line.' },
    ],
    example: {
      question: `A(-1,1,2),\\ \\text{find parametric form of } (OA)`,
      solution: `\\vec{OA} = (-1,1,2),\\ \\text{or any multiple}.\\ \\text{Test: }(2t-1, -2t+1, -4t+2) \\text{ at } t=0: (-1,1,2) = A,\\ \\text{at } t=1/2: (0,0,0) = O.\\ \\checkmark`,
      explanation: `Direction $(2,-2,-4) = -2\\vec{OA}$ (parallel). At $t=0$: $A$. At $t=1/2$: $O$. Both points on line — valid parametric form.`,
    },
    proTip: `When multiple options have parallel directions, the trap option doesn\'t actually pass through both points. ALWAYS test by setting $t = 0$ and $t = $ small to verify both endpoints.`,
    examRefs: [
      { section: 'real-exam', question: 13, label: 'Real Exam Q13' },
    ],
  },
  {
    id: 'distance-point-plane-2022',
    title: 'Distance from Point to Plane — One Formula',
    topic: 'Geometry in Space',
    icon: '📐',
    color: '#4CE87C',
    summary: `$d(M, P) = \\dfrac{|ax_{0} + by_{0} + cz_{0} + d|}{\\sqrt{a^{2}+b^{2}+c^{2}}}$ where $P: ax+by+cz+d=0$ and $M(x_{0}, y_{0}, z_{0})$.`,
    why: `Exercise 14 asks for the distance from $A(-5, 1, -1)$ to plane $4x + 3z + 3 = 0$. Plug into the formula. The numerator is the SIGNED value at $A$ (taken in absolute value); the denominator is the norm of the normal vector.`,
    formulas: [
      { label: 'Distance formula', latex: `d(M, P) = \\dfrac{|a x_{0} + b y_{0} + c z_{0} + d|}{\\sqrt{a^{2}+b^{2}+c^{2}}}`, description: 'Absolute value in numerator (always positive). Norm of normal in denominator.' },
      { label: 'Normal vector', latex: `\\vec{n} = (a, b, c)`, description: 'Coefficients of $x, y, z$ in the plane equation. Always perpendicular to the plane.' },
    ],
    example: {
      question: `A(-5,1,-1),\\ P: 4x + 3z + 3 = 0`,
      solution: `d = \\dfrac{|4(-5) + 0 + 3(-1) + 3|}{\\sqrt{16 + 0 + 9}} = \\dfrac{|-20|}{\\sqrt{25}} = \\dfrac{20}{5} = 4`,
      explanation: `$y$ has coefficient 0 (not in equation). Numerator: $|-20-3+3| = 20$. Denominator: $\\sqrt{16+9} = 5$. Distance = 4.`,
    },
    proTip: `If a coordinate is missing from the plane equation (e.g., no $y$), its coefficient is 0 — DON\'T add anything for it. Common mistake: forgetting the absolute value (always non-negative).`,
    examRefs: [
      { section: 'real-exam', question: 14, label: 'Real Exam Q14' },
    ],
  },
  {
    id: 'tangent-plane-sphere-2022',
    title: 'Tangent Plane to Sphere — Use the Radius as Normal',
    topic: 'Geometry in Space',
    icon: '🌐',
    color: '#9066EE',
    summary: `For a sphere $(S)$ with center $C$ and a point $A$ on $(S)$, the tangent plane at $A$ has normal $\\vec{CA}$ and passes through $A$.`,
    why: `Exercise 15 gives sphere $x^{2}+y^{2}+z^{2}-2x+4y-2z+4 = 0$ and asks for the tangent plane at $A(2,-1,1)$. (1) Complete the square to find the center, (2) compute $\\vec{CA}$ as the normal, (3) write the plane equation through $A$.`,
    formulas: [
      { label: 'Sphere standard form', latex: `(x-x_{0})^{2} + (y-y_{0})^{2} + (z-z_{0})^{2} = R^{2}`, description: 'Center $(x_{0}, y_{0}, z_{0})$, radius $R$. Always complete the square to get this form.' },
      { label: 'Tangent plane equation', latex: `(x_{A} - x_{C})(x - x_{A}) + (y_{A} - y_{C})(y - y_{A}) + (z_{A} - z_{C})(z - z_{A}) = 0`, description: 'Direct application of point-normal form with $\\vec{n} = \\vec{CA}$ and point $A$.' },
      { label: 'Verify $A$ on sphere', latex: `(x_{A}-x_{C})^{2} + (y_{A}-y_{C})^{2} + (z_{A}-z_{C})^{2} = R^{2}`, description: 'Always check $A$ is actually on the sphere. Otherwise the "tangent" plane is meaningless.' },
    ],
    example: {
      question: `(S):\\ x^{2}+y^{2}+z^{2}-2x+4y-2z+4=0,\\ A(2,-1,1)`,
      solution: `(x-1)^{2}+(y+2)^{2}+(z-1)^{2} = 2,\\ C(1,-2,1).\\ \\vec{CA} = (1,1,0).\\ (P): x+y-1=0`,
      explanation: `Step 1: complete square → $C(1,-2,1)$, $R = \\sqrt 2$. Step 2: verify $A$: $1+1+0=2$ ✓. Step 3: $\\vec{CA} = (1,1,0)$. Step 4: $1(x-2)+1(y+1)+0(z-1)=0 \\Rightarrow x+y-1=0$.`,
    },
    proTip: `Completing the square for THREE variables can be slow — set up the work systematically: group $x$ terms, group $y$ terms, group $z$ terms, complete each square, then collect constants.`,
    examRefs: [
      { section: 'real-exam', question: 15, label: 'Real Exam Q15' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// COURSE RECAP
// ─────────────────────────────────────────────────────────────
export const RECAP_2022: RecapTopic[] = [
  {
    id: 'sequences-series-2022',
    title: 'Sequences & Series — Recognition & Closed Forms',
    icon: '🔢',
    color: '#C9A84C',
    summary: `A sequence is ARITHMETIC if $u_{n+1} - u_{n}$ is constant ($r$); GEOMETRIC if $u_{n+1}/u_{n}$ is constant ($q$). Closed forms: arithmetic $u_{n} = u_{0} + nr$, geometric $u_{n} = u_{0} q^{n}$. Series sums: arithmetic $\\sum = (\\text{number of terms})(\\text{average})$, geometric $\\sum_{k=0}^{n} q^{k} = (1 - q^{n+1})/(1 - q)$.`,
    formulas: [
      { label: 'Arithmetic identification', latex: `u_{n+1} - u_{n} = r \\;\\text{constant}`, description: 'Subtract consecutive terms. If constant, arithmetic.' },
      { label: 'Geometric identification', latex: `\\dfrac{u_{n+1}}{u_{n}} = q \\;\\text{constant}`, description: 'Divide consecutive terms. If constant, geometric.' },
      { label: 'Exponential trick', latex: `\\dfrac{e^{u_{n+1}}}{e^{u_{n}}} = c \\implies u_{n+1} - u_{n} = \\ln(c) \\implies (u_{n}) \\text{ arithmetic with } r = \\ln c`, description: 'When the ratio of exponentials is given, take log to recover an arithmetic recurrence.' },
      { label: 'Arithmetic closed form', latex: `u_{n} = u_{0} + n r \\;,\\quad u_{p} = u_{q} + (p-q) r`, description: 'Linear in $n$. Useful for fast term-shifts.' },
      { label: 'Geometric closed form', latex: `u_{n} = u_{0}\\,q^{n} \\;,\\quad u_{p} = u_{q}\\,q^{p-q}`, description: 'Exponential in $n$. Useful for ratio-shifts.' },
      { label: 'Geometric sum', latex: `\\sum_{k=0}^{n} q^{k} = \\dfrac{1 - q^{n+1}}{1 - q} \\;\\text{(} q \\neq 1 \\text{)}`, description: 'Number of terms is $n+1$. Don\'t forget to count carefully.' },
      { label: 'Arithmetic sum', latex: `\\sum_{k=0}^{n} (a + kr) = (n+1)\\,a + r\\,\\dfrac{n(n+1)}{2}`, description: 'Or use $S = (\\text{number of terms}) \\cdot (\\text{first} + \\text{last})/2$.' },
    ],
    theorems: [
      { name: 'Convergence of geometric', statement: `(u_{n}) \\text{ geometric with ratio } q.\\ |q| < 1 \\Rightarrow u_{n} \\to 0.\\ |q| > 1 \\Rightarrow |u_{n}| \\to +\\infty.`, keyIdea: 'The magnitude of the ratio determines convergence. $q = 1$ gives constant; $q = -1$ oscillates.' },
      { name: 'Composite ratio test for limits', statement: `u_{n} = \\dfrac{a^{n} + \\ldots}{b^{n} + \\ldots}.\\ \\text{If } a > b: u_{n} \\to +\\infty\\;,\\; a = b: \\text{ratio of leading coefs}\\;,\\; a < b: u_{n} \\to 0`, keyIdea: 'Compare exponential bases when both numerator and denominator are sums of geometric terms.' },
    ],
    pitfalls: [
      `Don't confuse arithmetic (constant DIFFERENCE) with geometric (constant RATIO). They're fundamentally different growth shapes.`,
      `For geometric sums, count terms carefully: $\\sum_{k=0}^{n}$ has $n+1$ terms. Off-by-one is the most common mistake.`,
      `If $q = 1$, the geometric sum formula breaks — instead $\\sum 1 = n+1$ trivially.`,
    ],
  },
  {
    id: 'limits-2022',
    title: 'Limits — Squeeze Theorem & Growth Comparison',
    icon: '📉',
    color: '#F5A623',
    summary: `Standard limit techniques: (1) plug in if continuous, (2) factor and simplify, (3) conjugate trick for $\\sqrt{} - \\sqrt{}$, (4) standard equivalents at $0$ ($\\sin x \\sim x, \\ln(1+x) \\sim x$, etc.), (5) growth hierarchy $\\ln \\ll x^{\\alpha} \\ll e^{x}$, (6) squeeze theorem for bounded oscillating factors.`,
    formulas: [
      { label: 'Squeeze theorem', latex: `|f(x)| \\leq g(x) \\to 0 \\implies f(x) \\to 0`, description: 'Bound $|f|$ above by something tending to zero. Most common with $\\cos$, $\\sin$.' },
      { label: 'Standard equivalents at 0', latex: `\\sin(x) \\sim x \\;,\\; \\tan(x) \\sim x \\;,\\; e^{x} - 1 \\sim x \\;,\\; \\ln(1+x) \\sim x \\;,\\; (1+x)^{\\alpha} - 1 \\sim \\alpha x`, description: 'These resolve indeterminate forms 0/0 in one step.' },
      { label: 'Growth hierarchy at $\\infty$', latex: `\\ln(x) \\;\\ll\\; x^{\\alpha} \\;\\ll\\; e^{x} \\;,\\; \\alpha > 0`, description: 'Logarithm grows slower than any power; any power grows slower than the exponential.' },
      { label: 'Conjugate for $\\sqrt{}$', latex: `\\sqrt{a} - \\sqrt{b} = \\dfrac{a - b}{\\sqrt{a} + \\sqrt{b}}`, description: 'Multiply by the conjugate to remove the square root difference.' },
    ],
    theorems: [
      { name: 'Comparison of sequences', statement: `0 \\leq u_{n} \\leq v_{n} \\;,\\; v_{n} \\to 0 \\implies u_{n} \\to 0`, keyIdea: 'A non-negative sequence bounded above by a sequence going to 0 also goes to 0.' },
      { name: 'Composition with continuous f', statement: `u_{n} \\to L \\;,\\; f \\text{ continuous at } L \\implies f(u_{n}) \\to f(L)`, keyIdea: 'Continuous functions preserve limits.' },
    ],
    pitfalls: [
      `$\\cos(n)$ and $\\sin(n)$ DO NOT have a limit. They oscillate. Use bounds, not "$\\cos(n) \\to ?$".`,
      `Equivalents are valid AT THE POINT specified — typically $0$. Don't apply $\\sin x \\sim x$ at $x = \\pi$ (where it gives $\\sin \\pi = 0$, not $\\pi$).`,
      `For $\\infty - \\infty$ with square roots, ALWAYS try the conjugate first.`,
    ],
  },
  {
    id: 'differential-equations-2022',
    title: 'Differential Equations — First & Second Order',
    icon: '📐',
    color: '#9066EE',
    summary: `First-order linear: $y' = ay + b$ has solutions $y = Ce^{ax} - b/a$. Second-order homogeneous $y'' + by' + cy = 0$: solve characteristic equation $r^{2} + br + c = 0$. Three cases based on discriminant: two real roots (sum of two exponentials), double root (multiplied by $x$), complex conjugate roots (oscillating exponentials).`,
    formulas: [
      { label: 'First-order linear', latex: `y' = ay + b \\implies y(x) = C e^{ax} - \\dfrac{b}{a} \\;\\text{(}a \\neq 0\\text{)}`, description: 'Find a particular constant solution $y_{p} = -b/a$, add the homogeneous $y_{h} = Ce^{ax}$.' },
      { label: 'Characteristic equation', latex: `y'' + b y' + c y = 0 \\implies r^{2} + b r + c = 0`, description: `Replace $y'' \\to r^{2}$, $y' \\to r$, $y \\to 1$.` },
      { label: 'Two real roots', latex: `r_{1} \\neq r_{2} \\;\\text{real} \\implies y = A\\,e^{r_{1}x} + B\\,e^{r_{2}x}`, description: 'Discriminant $> 0$. General solution is sum of two exponentials.' },
      { label: 'Double root', latex: `r_{1} = r_{2} = r \\implies y = (A + B x)\\,e^{r x}`, description: 'Discriminant $= 0$. Multiply one solution by $x$ to get a second linearly independent one.' },
      { label: 'Complex roots', latex: `r = \\alpha \\pm i\\beta \\implies y = e^{\\alpha x}\\bigl(A\\cos(\\beta x) + B\\sin(\\beta x)\\bigr)`, description: 'Discriminant $< 0$. Sinusoidal oscillation modulated by an exponential envelope.' },
      { label: 'Initial conditions', latex: `y(x_{0}) = y_{0} \\;,\\; y'(x_{0}) = y'_{0} \\implies \\text{solve for } A, B`, description: 'Two conditions for two unknowns $A, B$. Substitute and solve the linear system.' },
    ],
    theorems: [
      { name: 'Linearity of solutions', statement: `\\text{Sum of solutions of a linear homogeneous ODE is a solution.}`, keyIdea: 'Build the general solution as a linear combination of basis solutions.' },
      { name: 'Existence and uniqueness', statement: `\\text{Given } y(x_{0}) \\text{ and } y'(x_{0}), \\text{ the solution to a 2nd order linear ODE is UNIQUE.}`, keyIdea: 'Two initial conditions pin down a unique solution from the 2-parameter family.' },
    ],
    pitfalls: [
      `Don\'t forget the particular solution for inhomogeneous equations $y' = ay + b$. The particular constant is $-b/a$.`,
      `For double roots, the second solution involves $xe^{rx}$, NOT $e^{2rx}$ or similar. Common mistake.`,
      `Match the initial conditions to the general solution carefully — getting $A$ and $B$ confused will give wrong final form.`,
    ],
  },
  {
    id: 'function-analysis-2022',
    title: 'Function Analysis — Domain, Range, Inverse',
    icon: '📈',
    color: '#4CE87C',
    summary: `For any function $f$: (1) compute domain $D_{f}$ (rules: $\\sqrt{} \\geq 0$, $1/\\cdot \\neq 0$, $\\ln > 0$), (2) study monotonicity via $f'$, (3) compute boundary limits, (4) build the table of variations, (5) read the range $f(D_{f})$ off the table. If $f$ is continuous AND strictly monotonic, the inverse $f^{-1}$ exists on $f(D_{f})$.`,
    formulas: [
      { label: 'Domain rules', latex: `\\sqrt{u}: u \\geq 0 \\;,\\; \\dfrac{1}{u}: u \\neq 0 \\;,\\; \\ln(u): u > 0`, description: 'Combine via INTERSECTION when multiple conditions apply.' },
      { label: 'Image of an interval', latex: `f \\nearrow \\text{ continuous on } [a,b] \\implies f([a,b]) = [f(a), f(b)]`, description: 'Strictly increasing: image bounds match input bounds. Strictly decreasing: REVERSED.' },
      { label: 'Inverse function existence', latex: `f \\text{ continuous, strictly monotonic on } I \\implies f^{-1}: f(I) \\to I \\text{ exists}`, description: 'Strict monotonicity is essential. Then $f^{-1}$ is defined on the IMAGE $f(I)$.' },
      { label: 'Inverse function derivative', latex: `(f^{-1})'(y) = \\dfrac{1}{f'(f^{-1}(y))} \\;\\text{when } f'(f^{-1}(y)) \\neq 0`, description: 'Useful for computing slopes of inverse curves at specific points.' },
    ],
    theorems: [
      { name: 'Image computation', statement: `\\text{Use the table of variations: image is the union of intervals between extrema and boundary limits.}`, keyIdea: 'Read off arrows ($\\nearrow$, $\\searrow$) and boundary values from the table.' },
      { name: 'Inverse function theorem', statement: `f \\text{ continuous and strictly monotonic on } [a,b] \\implies f \\text{ is a bijection from } [a,b] \\text{ to } f([a,b]).`, keyIdea: 'Strict monotonicity guarantees injectivity (one-to-one). Continuity gives surjectivity onto the image.' },
    ],
    pitfalls: [
      `When the function is decreasing, $f([a,b]) = [f(b), f(a)]$ — reverse the order!`,
      `Open boundaries: $f$ may not attain its $\\lim$. So $f(]a,b[)$ might be $]f(a), f(b)[$ (open) rather than closed.`,
      `Inverse exists only with STRICT monotonicity. A function can be increasing without being strict (e.g., constant on a piece).`,
    ],
  },
  {
    id: 'derivatives-integrals-2022',
    title: 'Derivatives & Integrals — Toolkit',
    icon: '✏️',
    color: '#4CADE8',
    summary: `Derivative rules: product $(uv)' = u'v + uv'$, quotient $(u/v)' = (u'v-uv')/v^{2}$, chain $(f\\circ g)' = f'(g)\\cdot g'$. Integration patterns: $\\int x^{n} = x^{n+1}/(n+1)$, $\\int u'/u = \\ln|u|$, $\\int u^{n}\\,u' = u^{n+1}/(n+1)$, $\\int u'\\,e^{u} = e^{u}$. For more complex: substitution $u = g(x)$, integration by parts $\\int u'v = [uv] - \\int uv'$.`,
    formulas: [
      { label: 'Common derivatives', latex: `(\\ln u)' = \\dfrac{u'}{u} \\;,\\; (e^{u})' = u'\\,e^{u} \\;,\\; (u^{n})' = n u^{n-1} u' \\;,\\; (\\sqrt{u})' = \\dfrac{u'}{2\\sqrt u}`, description: 'Memorize. Combined with chain rule, handles 90% of concours derivatives.' },
      { label: 'Product / quotient', latex: `(uv)' = u'v + uv' \\;,\\; \\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^{2}}`, description: 'Quotient rule mnemonic: "low d-high minus high d-low, square the bottom".' },
      { label: 'Antiderivative table', latex: `\\int u'\\,u^{n} = \\dfrac{u^{n+1}}{n+1}\\;,\\; \\int \\dfrac{u'}{u} = \\ln|u|\\;,\\; \\int u'\\,e^{u} = e^{u}`, description: 'Three patterns covering most concours integrals.' },
      { label: 'Integration by parts', latex: `\\int_{a}^{b} u' v\\,dx = [u v]_{a}^{b} - \\int_{a}^{b} u v'\\,dx`, description: 'Pick $u\'$ as the part you can integrate; $v$ as the part that simplifies on differentiation.' },
      { label: 'Tangent equation', latex: `T_{a}: y = f'(a)(x - a) + f(a)`, description: 'Slope $f\'(a)$, point $(a, f(a))$. Plug in numbers — never simplify the general derivative first.' },
    ],
    theorems: [
      { name: 'Linearity', statement: `(\\alpha f + \\beta g)' = \\alpha f' + \\beta g' \\;,\\; \\int (\\alpha f + \\beta g) = \\alpha \\int f + \\beta \\int g`, keyIdea: 'Differentiation and integration are LINEAR. Split sums and pull out constants freely.' },
      { name: 'Mean value theorem', statement: `f \\text{ continuous on } [a,b], \\text{ differentiable on } (a,b) \\implies \\exists c \\in (a,b): f'(c) = \\dfrac{f(b)-f(a)}{b-a}`, keyIdea: 'There\'s always a point where the slope of the curve equals the slope of the secant.' },
    ],
    pitfalls: [
      `Don\'t forget the $\\frac{1}{n+1}$ factor in $\\int u^{n} u'$. Always normalize by the new exponent.`,
      `Quotient rule denominator is $v^{2}$, NOT just $v$. Common mistake.`,
      `For tangent at $x=a$, plug in $f(a)$ AND $f\'(a)$ as NUMBERS — don\'t leave them as expressions.`,
    ],
  },
  {
    id: 'complex-numbers-2022',
    title: 'Complex Numbers — Argument & Locus',
    icon: '🔮',
    color: '#9066EE',
    summary: `Three forms: algebraic ($z = x+iy$), trigonometric, exponential ($z = re^{i\\theta}$). For products: moduli multiply, arguments add. For loci: $|z - z_{0}| = R$ is a circle, $|z - z_{A}| = |z - z_{B}|$ is the perpendicular bisector of $[AB]$. Quadrant rules: positive real positive imaginary → Q1, etc.`,
    formulas: [
      { label: 'Modulus & argument', latex: `|z| = \\sqrt{x^{2}+y^{2}} \\;,\\; \\arg(z) = \\theta \\;\\text{ such that } z = |z|\\,e^{i\\theta}`, description: 'Modulus is non-negative; argument is defined mod $2\\pi$.' },
      { label: 'Operation rules', latex: `\\arg(z_{1} z_{2}) = \\arg z_{1} + \\arg z_{2} \\;,\\; \\arg(z_{1}/z_{2}) = \\arg z_{1} - \\arg z_{2} \\;,\\; \\arg(z^{n}) = n\\arg z`, description: 'Arguments are additive for products, subtractive for quotients, multiplicative for powers.' },
      { label: 'Standard arguments', latex: `\\arg(1+i) = \\tfrac{\\pi}{4} \\;,\\; \\arg(\\sqrt 3 + i) = \\tfrac{\\pi}{6} \\;,\\; \\arg(1+i\\sqrt 3) = \\tfrac{\\pi}{3} \\;,\\; \\arg(i) = \\tfrac{\\pi}{2}`, description: 'These four cover roughly 80% of concours questions.' },
      { label: 'Conjugate', latex: `\\overline{z} = x - iy = re^{-i\\theta} \\;,\\; \\overline{z_{1} z_{2}} = \\bar z_{1}\\,\\bar z_{2} \\;,\\; |z|^{2} = z \\bar z`, description: 'Conjugate flips the sign of $y$ (and of the argument). Distributes over operations.' },
      { label: 'Circle locus', latex: `|z - z_{0}| = R \\iff M \\text{ on circle of center } \\Omega(z_{0}),\\ \\text{radius } R`, description: 'Modulus of difference = distance. Distance equation = circle.' },
      { label: 'Perpendicular bisector', latex: `|z - z_{A}| = |z - z_{B}| \\iff M \\text{ on the perpendicular bisector of } [AB]`, description: 'Equidistance from two points = mediator line.' },
    ],
    theorems: [
      { name: 'De Moivre', statement: `(re^{i\\theta})^{n} = r^{n}\\,e^{in\\theta}`, keyIdea: 'Modulus to the power, argument multiplied by the exponent. Reduce mod $2\\pi$ at the end.' },
      { name: 'Locus catalogue', statement: `|z - z_{0}| = R \\Rightarrow \\text{circle}.\\\\ |z - z_{A}| = |z - z_{B}| \\Rightarrow \\text{perpendicular bisector}.\\\\ \\arg(z - z_{0}) = \\theta \\Rightarrow \\text{half-line from } z_{0}.`, keyIdea: 'Three standard locus equations. Memorize each shape.' },
    ],
    pitfalls: [
      `Argument quadrant: $-1-i$ is in Q3, argument $-3\\pi/4$ (NOT $\\pi/4$). Always check the quadrant.`,
      `For products: arguments ADD; moduli MULTIPLY. Never confuse.`,
      `$|1+i| = \\sqrt 2$, NOT $2$. Common arithmetic slip.`,
    ],
  },
  {
    id: 'probability-2022',
    title: 'Probability — Discrete Models',
    icon: '🎲',
    color: '#4CADE8',
    summary: `Three core models: (1) BINOMIAL — $n$ independent trials with success prob $p$, $P(X=k) = \\binom{n}{k}p^{k}(1-p)^{n-k}$; (2) WITH REPLACEMENT — draws independent, marginal probability constant; (3) WITHOUT REPLACEMENT — conditional probability changes. Inclusion-exclusion: $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.`,
    formulas: [
      { label: 'Binomial pmf', latex: `P(X = k) = \\binom{n}{k}\\,p^{k}\\,(1-p)^{n-k}`, description: 'Three ingredients: count of arrangements, success probabilities, failure probabilities.' },
      { label: 'Binomial coefficient', latex: `\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}`, description: 'For small $n$: memorize $\\binom{4}{2} = 6$, $\\binom{5}{2} = 10$, $\\binom{6}{2} = 15$.' },
      { label: 'Inclusion-exclusion', latex: `P(A \\cup B) = P(A) + P(B) - P(A \\cap B)`, description: 'Add the individual probabilities, subtract the intersection (counted twice).' },
      { label: 'Complement', latex: `P(\\bar A) = 1 - P(A) \\;,\\; P(\\text{at least one}) = 1 - P(\\text{none})`, description: 'When "at least" or "at most" appears, often easier to compute the complement.' },
      { label: 'Conditional probability', latex: `P(A | B) = \\dfrac{P(A \\cap B)}{P(B)} \\;,\\; P(A \\cap B) = P(B)\\,P(A | B)`, description: 'Given $B$ happened, what is the probability of $A$? Useful for "without replacement" sequential events.' },
      { label: 'Independence', latex: `A \\text{ and } B \\text{ independent} \\iff P(A \\cap B) = P(A)\\,P(B)`, description: 'Test of independence. Sequential draws WITH replacement → independent. WITHOUT replacement → NOT independent.' },
    ],
    theorems: [
      { name: 'Binomial recognition', statement: `n \\text{ identical, independent trials with success prob } p \\implies X = \\text{number of successes} \\sim \\mathcal{B}(n, p)`, keyIdea: 'WITH REPLACEMENT or sequential coin tosses are typical settings.' },
      { name: 'Total probability', statement: `\\Omega = A_{1} \\cup \\ldots \\cup A_{n}\\;\\text{(partition)} \\implies P(B) = \\sum_{i} P(A_{i})\\,P(B|A_{i})`, keyIdea: 'Decompose $B$ over a partition. Useful for complex tree-diagram problems.' },
    ],
    pitfalls: [
      `Distinguish WITH and WITHOUT replacement: with → independent → binomial; without → conditional probabilities, NOT binomial.`,
      `For "at least 1" or "at most 2" type questions, often the complement is easier ($1 - $ "exactly 0").`,
      `Don\'t confuse $P(A \\cap B)$ with $P(A) P(B)$ — equal only if $A, B$ are INDEPENDENT.`,
    ],
  },
  {
    id: 'geometry-3d-2022',
    title: 'Geometry in 3D Space',
    icon: '📐',
    color: '#F5A623',
    summary: `In an orthonormal frame: parametric line (point + direction × parameter), Cartesian plane $ax+by+cz+d=0$, sphere $(x-x_{0})^{2}+(y-y_{0})^{2}+(z-z_{0})^{2}=R^{2}$. Distances: point-to-plane $|ax_{0}+by_{0}+cz_{0}+d|/\\|\\vec n\\|$. Tangent plane to sphere at $A$: normal is $\\vec{CA}$ (radius vector).`,
    formulas: [
      { label: 'Line through 2 points', latex: `\\vec{AB} = B - A \\;,\\; M(t) = A + t\\,\\vec{AB} \\;,\\; t \\in \\mathbb{R}`, description: 'Direction is the difference. Parametric form: point + $t$ × direction.' },
      { label: 'Plane equation', latex: `ax + by + cz + d = 0 \\;,\\; \\vec n = (a, b, c)`, description: 'Normal vector $(a,b,c)$ encodes the plane\'s orientation. $d$ shifts it.' },
      { label: 'Plane through point with normal', latex: `\\vec n = (a,b,c) \\;,\\; A = (x_{A},y_{A},z_{A}) \\implies a(x-x_{A}) + b(y-y_{A}) + c(z-z_{A}) = 0`, description: 'Point-normal form. Always works.' },
      { label: 'Distance point-plane', latex: `d(M, P) = \\dfrac{|a x_{0} + b y_{0} + c z_{0} + d|}{\\sqrt{a^{2}+b^{2}+c^{2}}}`, description: 'Plug coordinates of $M$ into LHS of plane equation, take absolute value, divide by norm of normal.' },
      { label: 'Sphere standard form', latex: `(x-x_{0})^{2} + (y-y_{0})^{2} + (z-z_{0})^{2} = R^{2}`, description: 'Center $(x_{0}, y_{0}, z_{0})$, radius $R$. Always complete the square to recover this form.' },
      { label: 'Tangent plane to sphere', latex: `\\vec n = \\vec{CA} = A - C \\;\\text{(radius vector)}`, description: 'The radius is perpendicular to the tangent plane at $A$. Use it as the normal.' },
      { label: 'Perpendicular planes', latex: `(P) \\perp (Q) \\iff \\vec{n}_{P} \\cdot \\vec{n}_{Q} = 0`, description: 'Dot product of normals = 0.' },
      { label: 'Parallel planes', latex: `(P) \\parallel (Q) \\iff \\vec{n}_{P} \\parallel \\vec{n}_{Q}`, description: 'Normals are scalar multiples of each other.' },
    ],
    theorems: [
      { name: 'Equidistant locus', statement: `\\text{Set of } M \\text{ such that } AM = BM \\implies M \\text{ on the perpendicular bisector PLANE of } [AB]`, keyIdea: 'Square both distances, expand, simplify — yields a linear equation (the bisector plane).' },
      { name: 'Line parallel to plane', statement: `\\text{Direction vector of line} \\cdot \\text{normal of plane} = 0 \\;\\text{ AND a point of the line is NOT on the plane.}`, keyIdea: 'Both conditions matter — a parallel direction passing through a plane point means the line is IN the plane, not parallel.' },
    ],
    pitfalls: [
      `For parametric line problems, ALWAYS verify with two points (typically endpoints), not just the direction.`,
      `When completing the square for spheres, watch the signs and constants. $-2x \\to -1$ in $(x-1)^{2}$, but adds back $+1$ on the other side.`,
      `Distance formula uses ABSOLUTE value of the numerator. Don\'t leave it signed.`,
    ],
  },
]
