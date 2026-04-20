// ============================================================
// Content Data – 2025 Exam Preparation
// Tips & Tricks + Course Recap — ALL IN ENGLISH
// Aligned with the actual July 13, 2025 exam content
// ============================================================

import type { Tip, RecapTopic } from './content-2024'

// ─────────────────────────────────────────────────────────────
// TIPS & TRICKS
// ─────────────────────────────────────────────────────────────
export const TIPS_2025: Tip[] = [
  {
    id: 'complex-equation-2025',
    title: 'Solve i(z+1) = −z − i in 3 Lines',
    topic: 'Complex Numbers',
    icon: '🎯',
    color: '#4CADE8',
    summary: `Solve a linear complex equation and convert to exponential form — the key to Exercise 1.`,
    why: `Exercise 1 gives $i(z+1) = -z - i$ and asks for $z$ in exponential form. The algebra is straightforward (collect $z$ terms, divide), but the conversion to exponential form is where students lose marks. You must rationalize the denominator with the conjugate, then find modulus and argument. The quadrant is critical: $-1-i$ is in Q3.`,
    formulas: [
      { label: 'Collect & isolate', latex: `z(i+1) = -2i \\implies z = \\dfrac{-2i}{1+i}`, description: 'Expand, group all $z$ terms on one side, factor out $z$, divide. Standard first step for any linear complex equation.' },
      { label: 'Rationalize', latex: `\\dfrac{a}{c+di} = \\dfrac{a(c-di)}{c^2+d^2}`, description: 'Multiply numerator and denominator by the conjugate of the denominator. This eliminates $i$ from the denominator and gives $z$ in algebraic form $a+bi$.' },
      { label: 'Exponential form', latex: `z = r\\,e^{i\\theta},\\quad r = |z| = \\sqrt{a^2+b^2},\\quad \\theta = \\arg(z)`, description: 'Modulus is the distance from origin. Argument depends on the QUADRANT: for Q3 ($a<0,b<0$), $\\arg = \\pi + \\arctan(b/a)$.' },
      { label: 'Q3 argument', latex: `z = -1-i \\implies \\arg(z) = \\pi + \\arctan\\!\\left(\\frac{-1}{-1}\\right) = \\pi + \\frac{\\pi}{4} = \\frac{5\\pi}{4}`, description: 'In the third quadrant, add $\\pi$ to the reference angle. Don\'t use $3\\pi/4$ (that\'s Q2) or $-3\\pi/4$ (equivalent but check the MCQ format).' },
    ],
    example: {
      question: `i(z+1) = -z - i`,
      solution: `z(1+i) = -2i \\implies z = \\frac{-2i(1-i)}{2} = -1-i = \\sqrt{2}\\,e^{i\\frac{5\\pi}{4}}`,
      explanation: `Step 1: $iz + i = -z - i \\implies z(i+1) = -2i$. Step 2: $z = \\tfrac{-2i}{1+i} = \\tfrac{-2i(1-i)}{2} = \\tfrac{-2i+2i^2}{2} = \\tfrac{-2-2i}{2} = -1-i$. Step 3: $|z| = \\sqrt{2}$. Step 4: $z$ is in Q3 ($-1-i$), so $\\arg = \\pi + \\pi/4 = 5\\pi/4$. Answer: C.`,
    },
    proTip: `Trap: $-1-i$ is in Q3, so the argument is $5\\pi/4$ (NOT $3\\pi/4$, which would be Q2 for $-1+i$). Always plot the point mentally: negative real AND negative imaginary = Q3.`,
    examRefs: [
      { section: 'real-exam', question: 1, label: 'Real Exam Q1' },
    ],
  },
  {
    id: 'rotation-2025',
    title: 'Rotation at Origin + Powers of −i',
    topic: 'Complex Numbers',
    icon: '🔄',
    color: '#4CADE8',
    summary: `Compute $(z_B)^3$ after a rotation of $2\\pi/3$ — the key trick is $(e^{i\\theta})^3 = e^{3i\\theta}$.`,
    why: `Exercise 2 rotates $z_A = -i$ by angle $2\\pi/3$ around $O$, then asks for $(z_B)^3$. The naive approach (compute $z_B$ first, then cube) involves messy complex arithmetic. The smart approach uses $(z_B)^3 = (e^{i2\\pi/3})^3 \\cdot (-i)^3 = e^{i2\\pi} \\cdot (-i)^3 = 1 \\cdot i = i$. Three lines, no errors.`,
    formulas: [
      { label: 'Rotation at O', latex: `z_B = e^{i\\theta} \\cdot z_A`, description: 'When the center is the origin, the rotation formula reduces to a single multiplication. No need to subtract/add the center.' },
      { label: 'Power shortcut', latex: `(z_B)^n = (e^{i\\theta})^n \\cdot z_A^n = e^{in\\theta} \\cdot z_A^n`, description: 'Instead of computing $z_B$ first and then raising to the $n$-th power, raise each factor separately. This avoids complex multiplication entirely.' },
      { label: 'Powers of −i', latex: `(-i)^1 = -i,\\quad (-i)^2 = -1,\\quad (-i)^3 = i,\\quad (-i)^4 = 1`, description: 'The powers of $-i$ cycle with period 4. Memorize: $(-i)^3 = i$. Derivation: $(-i)^3 = (-1)^3 \\cdot i^3 = (-1)(-i) = i$.' },
      { label: 'Full period', latex: `e^{i \\cdot 2\\pi} = 1`, description: 'A full rotation ($2\\pi$) brings you back to 1. So $(e^{i2\\pi/3})^3 = e^{i2\\pi} = 1$.' },
    ],
    example: {
      question: `r: \\text{center } O,\\; \\theta = 2\\pi/3,\\; z_A = -i.\\; \\text{Find } (z_B)^3.`,
      solution: `(z_B)^3 = (e^{i2\\pi/3})^3 \\cdot (-i)^3 = e^{i2\\pi} \\cdot i = 1 \\cdot i = i`,
      explanation: `Step 1: $z_B = e^{i2\\pi/3} \\cdot (-i)$. Step 2: $(z_B)^3 = (e^{i2\\pi/3})^3 \\cdot (-i)^3$. Step 3: $(e^{i2\\pi/3})^3 = e^{i \\cdot 2\\pi} = 1$. Step 4: $(-i)^3 = (-i)^2 \\cdot (-i) = (-1)(-i) = i$. Step 5: $1 \\cdot i = i$. Answer: A.`,
    },
    proTip: `When the problem asks for $(z_B)^n$, always try the power-split trick $(ab)^n = a^n b^n$ BEFORE computing $z_B$ explicitly. It often eliminates all the hard arithmetic.`,
    examRefs: [
      { section: 'real-exam', question: 2, label: 'Real Exam Q2' },
    ],
  },
  {
    id: 'auxiliary-sequence-2025',
    title: 'Auxiliary Sequence with Negative Ratio',
    topic: 'Sequences',
    icon: '🔍',
    color: '#C9A84C',
    summary: `When $u_{n+1} = au_n + b$ with $a < 0$, the auxiliary sequence $(v_n)$ is geometric with NEGATIVE ratio — Exercise 3.`,
    why: `Exercise 3 defines $u_{n+1} = -\\tfrac{1}{4}u_n + \\tfrac{3}{4}$ with $v_n = u_n - \\tfrac{3}{5}$. The negative coefficient $a = -1/4$ means $v_{n+1} = -\\tfrac{1}{4}v_n$ — the ratio is NEGATIVE. This causes $u_n$ to oscillate around the limit $3/5$ (alternately above and below). Students who expect monotone convergence choose the wrong answer.`,
    formulas: [
      { label: 'Fixed point', latex: `u_{n+1} = au_n + b \\implies L = \\dfrac{b}{1-a}`, description: 'The fixed point $L$ satisfies $L = aL + b$. Here $a = -1/4$, $b = 3/4$: $L = \\tfrac{3/4}{1+1/4} = \\tfrac{3/4}{5/4} = 3/5$.' },
      { label: 'Auxiliary sequence', latex: `v_n = u_n - L \\implies v_{n+1} = a \\cdot v_n`, description: 'Subtract $L$ from the recurrence: $v_{n+1} = a(u_n - L) = av_n$. So $(v_n)$ is geometric with ratio $a = -1/4$.' },
      { label: 'Negative ratio → oscillation', latex: `a < 0 \\implies v_n \\text{ alternates sign} \\implies u_n \\text{ oscillates around } L`, description: 'When the ratio is negative, consecutive terms alternate in sign. So $u_n$ is NOT monotone — it zigzags above and below the limit.' },
      { label: 'Convergence', latex: `|a| < 1 \\implies v_n \\to 0 \\implies u_n \\to L`, description: 'Despite the oscillation, if $|a| < 1$ the amplitude shrinks to zero. The limit is still $L = 3/5$.' },
    ],
    example: {
      question: `u_0 = \\tfrac{4}{5},\\; u_{n+1} = -\\tfrac{1}{4}u_n + \\tfrac{3}{4},\\; v_n = u_n - \\tfrac{3}{5}`,
      solution: `v_{n+1} = -\\tfrac{1}{4}(u_n - \\tfrac{3}{5}) = -\\tfrac{1}{4}v_n.\\quad q = -0.25.\\quad |q| < 1 \\implies \\lim u_n = \\tfrac{3}{5}.`,
      explanation: `Step 1: $v_{n+1} = u_{n+1} - 3/5 = -u_n/4 + 3/4 - 3/5 = -u_n/4 + 3/20$. With $u_n = v_n + 3/5$: $v_{n+1} = -(v_n+3/5)/4 + 3/20 = -v_n/4$. Step 2: Ratio $= -1/4 = -0.25$ (Q3.1 → A). Step 3: $|-1/4| < 1$ → $v_n \\to 0$ → $u_n \\to 3/5$ (Q3.2 → D). Step 4: $u_n$ oscillates (0.8, 0.55, 0.6125...) so not monotone.`,
    },
    proTip: `Exam trap: option C says "$u_n$ is neither increasing nor decreasing" — this is TRUE but it's NOT the answer the exam expects. Option D ("$\\lim u_n = 3/5$") is the unique correct answer because it's a stronger, more precise statement. When two options seem true, choose the more informative one.`,
    examRefs: [
      { section: 'real-exam', question: 3, label: 'Real Exam Q3.1' },
      { section: 'real-exam', question: 4, label: 'Real Exam Q3.2' },
    ],
  },
  {
    id: 'sequence-monotonicity-2025',
    title: 'Monotonicity via u(n+1) − u(n)',
    topic: 'Sequences',
    icon: '📈',
    color: '#C9A84C',
    summary: `The fastest method to show $u_n = 1 - (4/5)^n$ is increasing — Exercise 4.`,
    why: `Exercise 4 gives $u_n = 1 - (4/5)^n$ with 4 options mixing geometric, monotonicity, and limit properties. The difference $u_{n+1} - u_n = \\tfrac{1}{5}(4/5)^n > 0$ proves it's increasing in one line. The limit is $1$ (not $0$), and the ratio $u_{n+1}/u_n$ is not constant (not geometric).`,
    formulas: [
      { label: 'Difference test', latex: `u_{n+1} - u_n > 0 \\;\\forall n \\implies \\text{strictly increasing}`, description: 'Compute the difference. If always positive → increasing. If always negative → decreasing. This is the simplest and most reliable test.' },
      { label: 'Factoring trick', latex: `\\left(\\frac{4}{5}\\right)^{\\!n} - \\left(\\frac{4}{5}\\right)^{\\!n+1} = \\left(\\frac{4}{5}\\right)^{\\!n}\\!\\left(1 - \\frac{4}{5}\\right) = \\frac{1}{5}\\left(\\frac{4}{5}\\right)^{\\!n}`, description: 'Factor out the smaller power. The remaining factor $(1 - q)$ is positive when $0 < q < 1$, confirming the difference is positive.' },
      { label: 'Limit', latex: `0 < \\frac{4}{5} < 1 \\implies \\left(\\frac{4}{5}\\right)^{\\!n} \\to 0 \\implies \\lim u_n = 1`, description: 'The base is between 0 and 1, so the power tends to 0. The limit is $1 - 0 = 1$, NOT $0$.' },
    ],
    example: {
      question: `u_n = 1 - \\left(\\dfrac{4}{5}\\right)^{\\!n}`,
      solution: `u_{n+1} - u_n = \\frac{1}{5}\\left(\\frac{4}{5}\\right)^{\\!n} > 0 \\implies \\text{increasing.}\\quad \\lim u_n = 1 \\neq 0.`,
      explanation: `Step 1: $u_{n+1} - u_n = (4/5)^n - (4/5)^{n+1} = (4/5)^n \\cdot (1/5) > 0$. Step 2: Always positive → increasing. Step 3: $\\lim u_n = 1$ (not 0 — C is false). Step 4: $u_{n+1}/u_n$ depends on $n$ (not geometric — A is false). Answer: B.`,
    },
    proTip: `Structure recognition: $u_n = L - c \\cdot q^n$ with $0 < q < 1$ and $c > 0$ is ALWAYS increasing toward $L$. The subtracted part shrinks, so $u_n$ grows. No computation needed — just read the formula.`,
    examRefs: [
      { section: 'real-exam', question: 5, label: 'Real Exam Q5' },
    ],
  },
  {
    id: 'product-derivative-2025',
    title: 'Product Rule with e^{−αx}',
    topic: 'Function Analysis',
    icon: '✏️',
    color: '#4CE87C',
    summary: `Differentiate $(x-1)e^{-0.5x}$ without the chain-rule trap — Exercise 5.`,
    why: `Exercise 5 asks for the tangent slope of $f(x) = (x-1)e^{-0.5x}$ at $x = 0$. The trap: the exponent is $-0.5x$ (NEGATIVE), so the chain rule gives $(-0.5)e^{-0.5x}$. Many students write $+0.5$ instead of $-0.5$, getting $a = 0.5$ instead of $a = 1.5$. The sign of $\\alpha$ in $e^{\\alpha x}$ is the #1 source of errors.`,
    formulas: [
      { label: 'Product rule', latex: `[u \\cdot v]' = u'v + uv'`, description: 'Apply with $u = x-1$, $v = e^{-0.5x}$. Don\'t forget: $v\' = -0.5\\,e^{-0.5x}$ (the chain rule coefficient is $-0.5$, not $+0.5$).' },
      { label: 'Chain rule', latex: `(e^{\\alpha x})' = \\alpha\\,e^{\\alpha x}`, description: 'The coefficient $\\alpha$ comes out. Here $\\alpha = -0.5$, so the derivative is $-0.5\\,e^{-0.5x}$. SIGN MATTERS.' },
      { label: 'General formula', latex: `f'(x) = e^{\\alpha x}[P'(x) + \\alpha P(x)]`, description: 'For $f = P(x)e^{\\alpha x}$ with polynomial $P$: $f\' = [P\' + \\alpha P]e^{\\alpha x}$. Here: $[1 + (-0.5)(x-1)]e^{-0.5x} = (1.5 - 0.5x)e^{-0.5x}$.' },
    ],
    example: {
      question: `f(x) = (x-1)\\,e^{-0.5x}.\\; \\text{Find the slope } a = f'(0).`,
      solution: `f'(x) = e^{-0.5x}(1.5 - 0.5x) \\implies f'(0) = 1 \\cdot 1.5 = 1.5`,
      explanation: `Step 1: $u = x-1$, $u' = 1$, $v = e^{-0.5x}$, $v' = -0.5\\,e^{-0.5x}$. Step 2: $f'(x) = e^{-0.5x} + (x-1)(-0.5)e^{-0.5x} = e^{-0.5x}[1 - 0.5(x-1)] = e^{-0.5x}(1.5 - 0.5x)$. Step 3: $f'(0) = e^0 \\cdot 1.5 = 1.5$. Answer: C.`,
    },
    proTip: `Quick check: $f(0) = (0-1)e^0 = -1$ and $f(1) = 0$. The function goes from $-1$ to $0$ between $x=0$ and $x=1$, so the slope at $x=0$ must be POSITIVE. This eliminates options B ($-0.5$) and D ($-1.5$) immediately.`,
    examRefs: [
      { section: 'real-exam', question: 6, label: 'Real Exam Q6' },
    ],
  },
  {
    id: 'derivative-verification-2025',
    title: 'Prove [u·v]\' = f(x) with the Product Rule',
    topic: 'Integrals',
    icon: '✅',
    color: '#9066EE',
    summary: `Show that $(x-1)e^{2x}$ is a primitive of $(2x-1)e^{2x}$ — Exercise 6, Q6.1.`,
    why: `Exercise 6 defines $u(x) = x-1$, $v(x) = e^{2x}$, $f(x) = (2x-1)e^{2x}$ and asks: what is $[u \\cdot v]'$? This is a cleverly disguised primitive question. Once you show $[(x-1)e^{2x}]' = f(x)$, Q6.2 becomes trivial: $\\int_0^1 f(x)\\,dx = [(x-1)e^{2x}]_0^1$.`,
    formulas: [
      { label: 'Product rule', latex: `[(x-1)e^{2x}]' = 1 \\cdot e^{2x} + (x-1) \\cdot 2e^{2x} = (2x-1)e^{2x}`, description: 'Apply the product rule: $u\' = 1$, $v\' = 2e^{2x}$. Factor $e^{2x}$: $e^{2x}[1 + 2(x-1)] = (2x-1)e^{2x} = f(x)$.' },
      { label: 'Chain rule on $e^{2x}$', latex: `(e^{2x})' = 2e^{2x}`, description: 'The coefficient $2$ in the exponent comes out. This is the chain rule with $g(x) = 2x$, $g\' = 2$.' },
      { label: 'Coefficient pattern', latex: `[(ax+b)e^{cx}]' = (acx + a + bc)e^{cx}`, description: 'For $a = 1$, $b = -1$, $c = 2$: $[1 + 2(-1)]$ and $[2 \\cdot 1 \\cdot x]$ give $(2x - 1)e^{2x}$.' },
    ],
    example: {
      question: `u(x) = x-1,\\; v(x) = e^{2x}.\\; [u \\cdot v]' = \\;?`,
      solution: `[u \\cdot v]' = e^{2x} + 2(x-1)e^{2x} = (2x-1)e^{2x} = f(x)`,
      explanation: `Step 1: $u' = 1$, $v' = 2e^{2x}$. Step 2: $[uv]' = u'v + uv' = e^{2x} + 2(x-1)e^{2x}$. Step 3: Factor: $e^{2x}[1 + 2x - 2] = (2x-1)e^{2x} = f(x)$. Answer: D.`,
    },
    proTip: `This question is the SETUP for Q6.2. The exam is telling you: "Here is the primitive of $f$." Once you know $[(x-1)e^{2x}]' = f(x)$, the definite integral $\\int_0^1 f = [(x-1)e^{2x}]_0^1$ is a 10-second computation.`,
    examRefs: [
      { section: 'real-exam', question: 7, label: 'Real Exam Q6.1' },
      { section: 'real-exam', question: 8, label: 'Real Exam Q6.2' },
    ],
  },
  {
    id: 'definite-integral-2025',
    title: 'Definite Integral via Known Primitive',
    topic: 'Integrals',
    icon: '∫',
    color: '#9066EE',
    summary: `Once you have the primitive from Q6.1, compute $\\int_0^1 f(x)\\,dx$ in 10 seconds — Exercise 6, Q6.2.`,
    why: `Q6.2 asks for $\\int_0^1 (2x-1)e^{2x}\\,dx$. From Q6.1, you know $(x-1)e^{2x}$ is a primitive. So it's just $F(1) - F(0) = 0 - (-1) = 1$. The trap: computing $F(0) = (0-1)e^0 = -1$ requires knowing that $e^0 = 1$, not $0$. Students who write $e^0 = 0$ get $F(0) = 0$ and answer $0$.`,
    formulas: [
      { label: 'Fundamental theorem', latex: `\\int_a^b f(x)\\,dx = F(b) - F(a)`, description: 'The definite integral equals the primitive evaluated at the upper bound minus the lower bound.' },
      { label: 'Key value', latex: `e^0 = 1 \\quad (\\text{NOT } 0!)`, description: 'The exponential of zero is ONE. This is the most common evaluation error in definite integral problems.' },
      { label: 'Double negative', latex: `F(1) - F(0) = 0 - (-1) = 0 + 1 = 1`, description: 'Watch the sign: subtracting a negative gives a positive. $0 - (-1) = 1$, not $-1$.' },
    ],
    example: {
      question: `\\int_0^1 (2x-1)\\,e^{2x}\\,dx`,
      solution: `\\bigl[(x-1)e^{2x}\\bigr]_0^1 = (1-1)e^2 - (0-1)e^0 = 0 - (-1) = 1`,
      explanation: `Step 1: Primitive $F(x) = (x-1)e^{2x}$ from Q6.1. Step 2: $F(1) = (1-1)e^2 = 0$. Step 3: $F(0) = (0-1)e^0 = -1 \\cdot 1 = -1$. Step 4: $F(1) - F(0) = 0 - (-1) = 1$. Answer: C.`,
    },
    proTip: `Always evaluate $F(a)$ and $F(b)$ on SEPARATE lines. Writing "$0 \\cdot e^2 - (-1) \\cdot e^0$" in one line invites sign confusion. Two clean lines: "$F(1) = 0$" and "$F(0) = -1$", then subtract.`,
    examRefs: [
      { section: 'real-exam', question: 8, label: 'Real Exam Q6.2' },
    ],
  },
  {
    id: 'function-evaluation-2025',
    title: 'Evaluate f(ln 2) Step by Step',
    topic: 'Function Analysis',
    icon: '🧮',
    color: '#4CE87C',
    summary: `Compute $e^{-\\ln 2} \\cdot \\ln(1+e^{\\ln 2})$ using the identity $e^{\\ln a} = a$ — Exercise 7, Q7.1.`,
    why: `Exercise 7 asks for $f(\\ln 2)$ where $f(x) = e^{-x}\\ln(1+e^x)$. This is a pure substitution problem, but it combines $e^{\\ln 2} = 2$ and $e^{-\\ln 2} = 1/2$ with logarithm rules. Students who rush make errors like $\\ln(1+2) = \\ln 2 + \\ln 1$ (WRONG — that's $\\ln(2 \\cdot 1)$, not $\\ln(2+1)$).`,
    formulas: [
      { label: 'Key identity', latex: `e^{\\ln a} = a \\qquad e^{-\\ln a} = \\dfrac{1}{a}`, description: '$e$ and $\\ln$ are inverse functions. $e^{\\ln 2} = 2$ and $e^{-\\ln 2} = 1/e^{\\ln 2} = 1/2$. These identities are used in EVERY problem involving $f(\\ln k)$.' },
      { label: 'Log power rule', latex: `\\dfrac{1}{2}\\ln a = \\ln(a^{1/2}) = \\ln\\sqrt{a}`, description: 'A coefficient in front of $\\ln$ can move to the exponent. So $\\tfrac{1}{2}\\ln 3 = \\ln(\\sqrt{3})$.' },
      { label: 'WARNING', latex: `\\ln(a+b) \\neq \\ln a + \\ln b`, description: 'The logarithm of a SUM is NOT the sum of logarithms. $\\ln(1+2) = \\ln 3$, NOT $\\ln 1 + \\ln 2 = \\ln 2$.' },
    ],
    example: {
      question: `f(x) = e^{-x}\\ln(1+e^x).\\; f(\\ln 2) = \\;?`,
      solution: `f(\\ln 2) = e^{-\\ln 2} \\cdot \\ln(1+e^{\\ln 2}) = \\frac{1}{2} \\cdot \\ln 3 = \\ln\\sqrt{3}`,
      explanation: `Step 1: $e^{-\\ln 2} = 1/2$. Step 2: $e^{\\ln 2} = 2$, so $1 + e^{\\ln 2} = 3$. Step 3: $f(\\ln 2) = (1/2) \\cdot \\ln 3$. Step 4: $\\tfrac{1}{2}\\ln 3 = \\ln(3^{1/2}) = \\ln\\sqrt{3}$. Answer: B.`,
    },
    proTip: `For ANY $f(\\ln k)$: first replace $e^{\\ln k}$ by $k$ and $e^{-\\ln k}$ by $1/k$. This turns the expression into pure arithmetic with logarithms. Then simplify using $c \\cdot \\ln a = \\ln(a^c)$.`,
    examRefs: [
      { section: 'real-exam', question: 9, label: 'Real Exam Q7.1' },
    ],
  },
  {
    id: 'inflection-point-2025',
    title: "Inflection Points via g″ Sign Change",
    topic: 'Function Analysis',
    icon: '📐',
    color: '#4CE87C',
    summary: `Find inflection points of $g(x) = 2x\\ln x - 1/x$ by factoring $g''$ — Exercise 7, Q7.2.`,
    why: `Exercise 7, Q7.2 tests whether students can find inflection points AND interpret convexity correctly. The traps: option C claims "convex on $]0,1]$" but $g$ is actually CONCAVE there. Option D claims "concave on $[2,+\\infty[$" but $g$ is CONVEX there. Only option A (one inflection point) is correct.`,
    formulas: [
      { label: 'g′(x)', latex: `g'(x) = 2\\ln x + 2 + \\dfrac{1}{x^2}`, description: 'Differentiate $2x\\ln x$ (product rule: $2\\ln x + 2$) and $-1/x$ (gives $+1/x^2$).' },
      { label: 'g″(x)', latex: `g''(x) = \\dfrac{2}{x} - \\dfrac{2}{x^3} = \\dfrac{2(x^2-1)}{x^3}`, description: 'The factored form $2(x^2-1)/x^3$ makes the sign analysis immediate: the sign depends on $x^2 - 1$ (since $x^3 > 0$ for $x > 0$).' },
      { label: 'Sign analysis', latex: `x < 1: x^2-1 < 0 \\implies g'' < 0 \\text{ (concave)}\\\\x > 1: x^2-1 > 0 \\implies g'' > 0 \\text{ (convex)}`, description: '$g\'\'$ changes sign from $-$ to $+$ at $x = 1$: exactly one inflection point. C (convex on $]0,1]$) and D (concave on $[2,+\\infty[$) are both false — the signs are SWAPPED.' },
    ],
    example: {
      question: `g(x) = 2x\\ln(x) - \\dfrac{1}{x}.\\; \\text{Inflection points?}`,
      solution: `g''(x) = \\frac{2(x^2-1)}{x^3}.\\quad g'' = 0 \\iff x = 1.\\quad g'' < 0 \\text{ on } ]0,1[,\\; g'' > 0 \\text{ on } ]1,+\\infty[.`,
      explanation: `Step 1: $g''(x) = 2/x - 2/x^3 = 2(x^2-1)/x^3$. Step 2: $g''(x) = 0 \\iff x^2 = 1 \\iff x = 1$ (only positive root). Step 3: For $x < 1$: $x^2 - 1 < 0$, $x^3 > 0$ → $g'' < 0$ (concave, NOT convex). For $x > 1$: $x^2 - 1 > 0$ → $g'' > 0$ (convex, NOT concave). Step 4: Sign change at $x = 1$ → exactly ONE inflection point. Answer: A.`,
    },
    proTip: `Trap detector: options C and D swap the words "convex" and "concave." The rule: $g'' > 0$ → convex (smile), $g'' < 0$ → concave (frown). On $]0,1[$, $g'' < 0$ → CONCAVE (option C says "convex" → FALSE). On $[2,+\\infty[$, $g'' > 0$ → CONVEX (option D says "concave" → FALSE).`,
    examRefs: [
      { section: 'real-exam', question: 10, label: 'Real Exam Q7.2' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// COURSE RECAP
// ─────────────────────────────────────────────────────────────
export const RECAP_2025: RecapTopic[] = [
  {
    id: 'complexes',
    title: 'Complex Numbers',
    icon: '🌀',
    color: '#4CADE8',
    summary: 'The 2025 exam tests two core complex number skills: (1) solving linear equations in C and converting to exponential form, and (2) rotations centered at the origin with power computations. Master rationalization, quadrant-based argument determination, and the powers-of-i cycle.',
    formulas: [
      { label: 'Exponential form', latex: `z = |z| \\cdot e^{i\\arg(z)}`, description: 'Every nonzero complex number decomposes into modulus (distance) × direction (angle).' },
      { label: 'Modulus', latex: `|a+bi| = \\sqrt{a^2+b^2}`, description: 'Distance from origin. For $z = -1-i$: $|z| = \\sqrt{2}$.' },
      { label: 'Q3 argument', latex: `a < 0,\\; b < 0 \\implies \\arg(z) = \\pi + \\arctan\\!\\left(\\frac{b}{a}\\right)`, description: 'Third quadrant: add $\\pi$ to the reference angle. $\\arg(-1-i) = \\pi + \\pi/4 = 5\\pi/4$.' },
      { label: 'Rationalize', latex: `\\dfrac{z}{w} = \\dfrac{z\\bar{w}}{|w|^2}`, description: 'Multiply top and bottom by $\\bar{w}$ to clear the denominator.' },
      { label: 'Rotation (center O)', latex: `z_B = e^{i\\theta} \\cdot z_A`, description: 'At the origin, rotation is just multiplication by $e^{i\\theta}$.' },
      { label: 'Powers of $-i$', latex: `(-i)^1=-i,\\; (-i)^2=-1,\\; (-i)^3=i,\\; (-i)^4=1`, description: 'Cycle of period 4. Useful for Exercise 2: $(-i)^3 = i$.' },
      { label: 'Power shortcut', latex: `(z_B)^n = (e^{i\\theta})^n \\cdot z_A^n = e^{in\\theta} \\cdot z_A^n`, description: 'Raise each factor separately — avoids computing $z_B$ explicitly.' },
    ],
    theorems: [
      { name: 'Full rotation', statement: `e^{i \\cdot 2\\pi} = 1`, keyIdea: 'A $2\\pi$ rotation returns to the starting point. So $(e^{i2\\pi/3})^3 = e^{i2\\pi} = 1$.' },
      { name: 'Conjugate rationalization', statement: `(1+i)(1-i) = 1^2 + 1^2 = 2`, keyIdea: 'Product of a number and its conjugate gives the squared modulus — always real and positive.' },
    ],
    pitfalls: [
      `$\\arg(-1-i) = 5\\pi/4$ (Q3), NOT $3\\pi/4$ (Q2). Mental check: both components are negative → Q3.`,
      `$(-i)^3 = i$ (not $-i$). Compute step by step: $(-i)^2 = -1$, then $(-1)(-i) = i$.`,
      `When rationalizing $\\tfrac{-2i}{1+i}$: the conjugate is $1-i$. Don't use $-1+i$ or $-1-i$.`,
    ],
  },
  {
    id: 'suites',
    title: 'Sequences',
    icon: '📊',
    color: '#C9A84C',
    summary: 'The 2025 exam focuses on three sequence skills: (1) auxiliary sequences with NEGATIVE ratio (causing oscillation), (2) the difference test for monotonicity, and (3) limits of sequences of the form $L + \\varepsilon_n$. Be prepared for the trap where a sequence oscillates but still converges.',
    formulas: [
      { label: 'Monotonicity test', latex: `u_{n+1} - u_n > 0 \\;\\forall n \\implies \\text{increasing}`, description: 'Compute the difference. Positive → increasing. Negative → decreasing.' },
      { label: 'Fixed point', latex: `u_{n+1} = au_n + b \\implies L = \\dfrac{b}{1-a}`, description: 'The fixed point $L$ is the limit (if $|a| < 1$). Here: $L = 3/4 \\div (1+1/4) = 3/5$.' },
      { label: 'Auxiliary sequence', latex: `v_n = u_n - L \\implies v_{n+1} = a \\cdot v_n`, description: 'Subtracting the fixed point always produces a geometric sequence with ratio $a$.' },
      { label: 'Negative ratio', latex: `a < 0 \\implies v_n \\text{ alternates sign} \\implies u_n \\text{ oscillates}`, description: 'When $a < 0$, consecutive $v_n$ have opposite signs. So $u_n$ bounces above and below $L$.' },
      { label: 'Convergence', latex: `|a| < 1 \\implies u_n \\to L`, description: 'Despite oscillation, the amplitude shrinks. The sequence converges to the fixed point.' },
      { label: 'Structure of $u_n = 1 - q^n$', latex: `0 < q < 1 \\implies q^n \\to 0 \\implies u_n \\nearrow 1`, description: 'When $q \\in (0,1)$, $q^n$ decreases to $0$, so $1 - q^n$ increases to $1$.' },
    ],
    theorems: [
      { name: 'Geometric seq. limit', statement: `|q| < 1 \\implies q^n \\to 0 \\quad ; \\quad |q| > 1 \\implies |q^n| \\to +\\infty`, keyIdea: 'Small ratios → convergence to 0. Large ratios → divergence.' },
      { name: 'Oscillating convergence', statement: `q < 0 \\text{ and } |q| < 1 \\implies q^n \\to 0 \\text{ while alternating sign}`, keyIdea: 'A negative ratio causes zigzag convergence. The sequence is NOT monotone but still converges.' },
    ],
    pitfalls: [
      `$u_n$ oscillating does NOT mean it diverges. If $|a| < 1$, it still converges — just not monotonically.`,
      `$\\lim(1 - (4/5)^n) = 1$, NOT $0$. The limit of the SUBTRACTED part is $0$, so the limit of the WHOLE expression is $1 - 0 = 1$.`,
      `In Exercise 3, the ratio is $-1/4$ (NEGATIVE), not $+1/4$. Watch the sign in the recurrence.`,
    ],
  },
  {
    id: 'integrales',
    title: 'Integrals & Primitives',
    icon: '∫',
    color: '#9066EE',
    summary: 'The 2025 exam tests a clever two-part structure: Q6.1 asks you to PROVE that a given function is the primitive (via the product rule), then Q6.2 uses that primitive for a definite integral. The key technique: recognize that the exam is GIVING you the primitive — just verify it with the product rule, then apply the fundamental theorem.',
    formulas: [
      { label: 'Product rule', latex: `[(x-1)e^{2x}]' = e^{2x} + 2(x-1)e^{2x} = (2x-1)e^{2x}`, description: 'The derivative of the proposed primitive equals $f(x)$. This proves $(x-1)e^{2x}$ is a primitive.' },
      { label: 'Chain rule on $e^{2x}$', latex: `(e^{2x})' = 2e^{2x}`, description: 'The coefficient $2$ from the exponent comes out. Don\'t forget it!' },
      { label: 'Fundamental theorem', latex: `\\int_a^b f(x)\\,dx = F(b) - F(a)`, description: 'Once you have the primitive $F$, the definite integral is just $F$ evaluated at the bounds.' },
      { label: 'Key evaluation', latex: `e^0 = 1 \\implies F(0) = (0-1) \\cdot 1 = -1`, description: '$e^0 = 1$, NOT $0$. This gives $F(0) = -1$, so $\\int_0^1 = 0 - (-1) = 1$.' },
    ],
    theorems: [
      { name: 'Fundamental theorem of calculus', statement: `\\text{If } F' = f \\text{ on } [a,b], \\text{ then } \\int_a^b f = F(b) - F(a)`, keyIdea: 'The primitive evaluated at the bounds gives the definite integral. No other computation needed.' },
      { name: 'Verification principle', statement: `\\text{To check } F \\text{ is a primitive of } f: \\text{ differentiate } F \\text{ and verify } F' = f`, keyIdea: 'Differentiation is easy, integration is hard. Always verify by going backwards.' },
    ],
    pitfalls: [
      `$e^0 = 1$, NOT $0$. Writing $F(0) = (-1) \\cdot 0 = 0$ is WRONG and gives the wrong integral value.`,
      `$F(1) - F(0) = 0 - (-1) = 1$, NOT $0 - 1 = -1$. Watch the double negative.`,
      `$(e^{2x})' = 2e^{2x}$, not $e^{2x}$. The chain rule coefficient $2$ is essential.`,
    ],
  },
  {
    id: 'fonctions',
    title: 'Function Analysis',
    icon: '📈',
    color: '#4CE87C',
    summary: 'The 2025 exam tests tangent slopes (derivative at a point), function evaluation with log/exp identities, and inflection point analysis. Key skills: the product rule with $e^{\\alpha x}$ (don\'t forget the chain rule coefficient $\\alpha$), the identity $e^{\\ln a} = a$, and the factored form of $g\'\'$ for sign analysis.',
    formulas: [
      { label: 'Tangent slope', latex: `\\text{Slope at } x = a \\text{ is } f'(a)`, description: 'The derivative evaluated at the point gives the tangent slope. Differentiate, then substitute.' },
      { label: 'Product + chain rule', latex: `[(x-1)e^{-0.5x}]' = e^{-0.5x}(1.5 - 0.5x)`, description: 'Product rule with $v\' = -0.5e^{-0.5x}$ (chain rule). Simplify: $1 - 0.5(x-1) = 1.5 - 0.5x$.' },
      { label: '$e$/$\\ln$ identities', latex: `e^{\\ln a} = a \\qquad e^{-\\ln a} = \\frac{1}{a} \\qquad c\\ln a = \\ln(a^c)`, description: 'The toolkit for evaluating $f(\\ln k)$. Replace, simplify, convert coefficient to exponent.' },
      { label: 'Inflection test', latex: `g''(x) = 0 \\text{ AND sign change} \\implies \\text{inflection}`, description: 'Both conditions required. $g\'\'(x_0) = 0$ alone is not sufficient.' },
      { label: 'Convexity', latex: `g'' > 0 \\implies \\text{convex (smile)} \\quad g'' < 0 \\implies \\text{concave (frown)}`, description: 'Positive second derivative = convex. Negative = concave. Don\'t swap them!' },
    ],
    theorems: [
      { name: 'Sign of factored g″', statement: `g''(x) = \\frac{2(x^2-1)}{x^3}: \\text{ sign determined by } (x^2-1) \\text{ for } x > 0`, keyIdea: 'Since $x^3 > 0$ for $x > 0$, the sign of $g\'\'$ depends only on $x^2 - 1$: negative for $x < 1$, positive for $x > 1$.' },
      { name: 'Chain rule general form', statement: `[P(x)\\,e^{\\alpha x}]' = [P'(x) + \\alpha P(x)]\\,e^{\\alpha x}`, keyIdea: 'For any polynomial $P$ times $e^{\\alpha x}$: derivative = $[P\' + \\alpha P] \\cdot e^{\\alpha x}$.' },
    ],
    pitfalls: [
      `$(e^{-0.5x})' = -0.5\\,e^{-0.5x}$. The NEGATIVE sign is crucial. Missing it gives slope $= 0.5$ instead of $1.5$.`,
      `$\\ln(1 + 2) = \\ln 3 \\neq \\ln 1 + \\ln 2$. The log of a SUM is not the sum of logs.`,
      `On $]0,1[$: $g'' < 0$ → CONCAVE. Option C says "convex" → FALSE. On $[2,+\\infty[$: $g'' > 0$ → CONVEX. Option D says "concave" → FALSE.`,
    ],
  },
]
