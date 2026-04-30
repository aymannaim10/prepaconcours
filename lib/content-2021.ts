// ============================================================
// Content Data – 2021 Exam Preparation
// Tips & Tricks + Course Recap — aligned with the 2021 paper
// (20 MCQ Q61–Q80, 5 options A–E, 60 min, no calculator).
// Topics covered by the 2021 exam: logarithm domain & equations,
// derivatives, limits & growth, complex numbers (argument, locus,
// roots of unity, rotation), sequences (arithmetic / geometric /
// transformed recurrence), integrals & antiderivatives, function
// analysis (image, IVT, extrema), oblique-asymptote trap.
// ============================================================

import type { Tip, RecapTopic } from './content-2024'

// ─────────────────────────────────────────────────────────────
// TIPS & TRICKS
// Tip ids must match the `relatedTips` strings used in exam-2021.ts
// so cross-references resolve correctly inside ExamViewer.
// ─────────────────────────────────────────────────────────────
export const TIPS_2021: Tip[] = [
  {
    id: 'log-domain',
    title: 'Logarithm Domain — Always Intersect the Conditions',
    topic: 'Logarithm',
    icon: '🪵',
    color: '#4CADE8',
    summary: `Each occurrence of $\\ln(u)$ forces $u > 0$ and each $\\sqrt{v}$ forces $v \\geq 0$. The domain is the INTERSECTION of all these conditions — never just one of them.`,
    why: `Three 2021 questions hinge on careful domain work: Q1 ($\\sqrt{-x+1}+\\ln x$), Q2 ($2x\\ln(-x) \\geq 0$) and Q16 ($\\ln(x-1)+\\ln(x-3) = \\ln 3$). Each MCQ has a "trap" answer obtained by forgetting one piece of the domain (e.g.\\ accepting $x=0$ in Q16). Mastering the domain reflex eliminates 3 trap options instantly.`,
    formulas: [
      { label: 'Building blocks', latex: `\\ln(u): u>0 \\;,\\quad \\sqrt{v}: v\\geq 0 \\;,\\quad \\dfrac{1}{w}: w\\neq 0`, description: 'Three rules — apply them to every sub-expression independently. The function\'s domain is what they ALL allow simultaneously.' },
      { label: 'Combine via intersection', latex: `D_f = \\{x \\in \\mathbb{R} : \\text{condition}_1 \\;\\text{AND}\\; \\text{condition}_2 \\;\\text{AND}\\; \\ldots\\}`, description: 'For $f(x)=\\sqrt{-x+1}+\\ln x$: condition$_1$: $-x+1\\geq 0\\Leftrightarrow x\\leq 1$. condition$_2$: $x>0$. Intersection: $\\,]0,1]$.' },
      { label: 'Sign rule for product with $\\ln$', latex: `2x\\ln(-x)\\geq 0 \\text{ on } x<0 \\;\\Longleftrightarrow\\; \\ln(-x)\\leq 0 \\;\\Longleftrightarrow\\; -x\\leq 1`, description: 'On the domain $x<0$, the factor $2x$ is NEGATIVE, so multiplying flips the inequality. Always re-check signs after restricting to the domain.' },
      { label: 'Combine logs, then check domain', latex: `\\ln(x-1)+\\ln(x-3) = \\ln\\bigl((x-1)(x-3)\\bigr) \\;\\text{(only if both } x-1>0 \\text{ AND } x-3>0\\text{)}`, description: 'You can fuse two logs into one ONLY when both arguments are individually positive. If you skip this and just solve the product equation, you accept extraneous roots like $x=0$.' },
    ],
    example: {
      question: `\\text{Solve } \\ln(x-1)+\\ln(x-3)=\\ln 3`,
      solution: `D = \\,]3,+\\infty[ \\;\\Rightarrow\\; (x-1)(x-3)=3 \\Leftrightarrow x^{2}-4x=0 \\Leftrightarrow x\\in\\{0,4\\} \\;\\xrightarrow{x>3}\\; S=\\{4\\}`,
      explanation: `Step 1: domain — both $x-1>0$ AND $x-3>0$ give $x>3$. Step 2: combine logs and equate arguments: $(x-1)(x-3)=3 \\Rightarrow x^{2}-4x=0 \\Rightarrow x=0$ or $x=4$. Step 3: filter by the domain $x>3$ — only $x=4$ survives. The "trap" answer including $x=0$ comes from ignoring the domain.`,
    },
    proTip: `Write the domain BEFORE you solve. It looks slow but it actually saves time: every option that violates the domain is eliminated instantly, often leaving only one MCQ choice without any further work.`,
    examRefs: [
      { section: 'real-exam', question: 1, label: 'Real Exam Q1' },
      { section: 'real-exam', question: 2, label: 'Real Exam Q2' },
      { section: 'real-exam', question: 16, label: 'Real Exam Q16' },
    ],
  },

  {
    id: 'asymptotes',
    title: 'Limits & Asymptotes — Growth Hierarchy and the Oblique Trap',
    topic: 'Limits',
    icon: '📈',
    color: '#F5A623',
    summary: `At $+\\infty$: $\\ln \\ll x^{\\alpha} \\ll e^{x}$. For an asymptote $y=ax+b$ test BOTH $\\lim f(x)/x = a$ AND $\\lim [f(x)-ax] = b$. Never read a candidate "$ax+b$" off the literal expression — always verify.`,
    why: `Q3 ($x^{2}+\\ln x$ over $\\ln x$) is solved instantly by the growth hierarchy. Q8 is the classic 2021 trap: $f(x)=2x+1-\\dfrac{x^{4}}{x^{4}+1}$ visually suggests the asymptote $y=2x+1$, but the rational fraction tends to 1 (not 0!) so the true asymptote is $y=2x$. Always test the candidate.`,
    formulas: [
      { label: 'Growth hierarchy at $+\\infty$', latex: `\\ln(x) \\;\\ll\\; x^{\\alpha} \\;\\ll\\; e^{x} \\;,\\;\\alpha > 0`, description: 'Logs grow slower than any power; any power grows slower than the exponential. So $x^{2}/\\ln x \\to +\\infty$ in Q3 immediately.' },
      { label: 'Asymptote test (2 steps)', latex: `\\lim_{x\\to+\\infty}\\dfrac{f(x)}{x}=a \\;\\text{ AND }\\; \\lim_{x\\to+\\infty}\\bigl[f(x)-ax\\bigr]=b \\;\\Longrightarrow\\; y = ax+b`, description: 'BOTH limits must be finite (and $b$ exists only if the first one is finite). Skipping step 2 is the most common error.' },
      { label: 'Bounded-fraction trap', latex: `\\dfrac{x^{n}}{x^{n}+c} \\xrightarrow[x\\to\\pm\\infty]{} 1 \\;\\;(\\text{NOT } 0)`, description: 'A rational where numerator and denominator have the SAME degree converges to the ratio of leading coefficients — not to zero. Q8 hinges on this.' },
      { label: 'Parabolic branches', latex: `\\lim\\dfrac{f(x)}{x}=\\pm\\infty \\Rightarrow \\text{branch along } Oy \\;,\\; \\lim\\dfrac{f(x)}{x}=0 \\Rightarrow \\text{branch along } Ox`, description: 'When the slope test gives an infinite or zero limit, no oblique asymptote exists — you only have a parabolic branch.' },
    ],
    example: {
      question: `f(x) = 2x + 1 - \\dfrac{x^{4}}{x^{4}+1} \\;,\\; \\text{find the oblique asymptote at } +\\infty`,
      solution: `\\lim f(x)/x = 2 \\;,\\; f(x)-2x = 1 - \\dfrac{x^{4}}{x^{4}+1} = \\dfrac{1}{x^{4}+1} \\to 0 \\;\\Rightarrow\\; y = 2x \\;(\\text{NOT } y=2x+1)`,
      explanation: `Step 1: $f(x)/x = 2 + 1/x - x^{3}/(x^{4}+1) \\to 2$, so $a=2$. Step 2: $f(x)-2x = 1 - x^{4}/(x^{4}+1)$. The fraction tends to 1, so the bracket tends to $0$, hence $b=0$. The "+1" you see in the formula gets cancelled by the $-1$ from the fraction's limit.`,
    },
    proTip: `Spot the trap with one number: at $x=10$, $f(10)-2(10) \\approx 0.0001$ (asymptote!) but $f(10)-(2(10)+1) \\approx -1$ (constant gap, not an asymptote). Plugging a single large number kills option A.`,
    examRefs: [
      { section: 'real-exam', question: 3, label: 'Real Exam Q3' },
      { section: 'real-exam', question: 8, label: 'Real Exam Q8' },
    ],
  },

  {
    id: 'product-derivative',
    title: 'Derivative Rules — Chain, Product, Quotient on $\\ln$ and $e^{x}$',
    topic: 'Derivatives',
    icon: '✏️',
    color: '#4CADE8',
    summary: `$(uv)'=u'v+uv'$, $(u/v)'=(u'v-uv')/v^{2}$, $(\\ln u)'=u'/u$, $(e^{u})'=u'e^{u}$. For tangent lines plug NUMBERS into $T_a:\\ y=f'(a)(x-a)+f(a)$ — never simplify the general derivative first.`,
    why: `Q4 asks for the derivative of $(1-\\ln x)(1+\\ln x)$ — recognize the difference of squares first, then chain rule on $(\\ln x)^{2}$. Q12 asks for the tangent to $\\ln(x^{2}+x+4)$ at $P(0,2\\ln 2)$ — pure chain rule on $\\ln u$. Both go from "long" to "30 seconds" once these patterns are automatic.`,
    formulas: [
      { label: 'Chain rule on $\\ln u$', latex: `(\\ln u)' = \\dfrac{u'}{u}`, description: 'For Q12 with $u(x)=x^{2}+x+4$: $u\'(x)=2x+1$, so $f\'(x)=(2x+1)/(x^{2}+x+4)$ and $f\'(0)=1/4$.' },
      { label: 'Difference of squares first', latex: `(1-\\ln x)(1+\\ln x) = 1 - (\\ln x)^{2}`, description: 'Recognize $(a-b)(a+b)=a^{2}-b^{2}$ BEFORE differentiating — turns a product rule into a single chain rule. Saves one error opportunity.' },
      { label: 'Chain on $u^{2}$', latex: `\\bigl((\\ln x)^{2}\\bigr)' = 2\\ln(x)\\cdot\\dfrac{1}{x} = \\dfrac{2\\ln x}{x}`, description: 'Outer derivative $2u$, inner derivative $1/x$. So Q4 derivative is $-2\\ln(x)/x$.' },
      { label: 'Tangent line', latex: `T_{a}: y = f'(a)(x-a) + f(a)`, description: 'Two numbers — slope $f\'(a)$ and value $f(a)$. Compute them as numbers, plug in, done. No need to simplify $f\'(x)$ symbolically.' },
    ],
    example: {
      question: `f(x) = \\ln(x^{2}+x+4) \\;,\\; \\text{tangent at } P(0,\\,2\\ln 2)`,
      solution: `f'(x) = \\dfrac{2x+1}{x^{2}+x+4} \\;,\\; f'(0) = \\dfrac{1}{4} \\;,\\; f(0) = \\ln 4 = 2\\ln 2 \\;\\Rightarrow\\; T_{0}:\\ y = \\dfrac{1}{4}x + 2\\ln 2`,
      explanation: `Step 1: chain rule gives $f'(x) = (2x+1)/(x^{2}+x+4)$. Step 2: at $a=0$ the slope is $1/4$ and the value is $\\ln 4 = 2\\ln 2$ — verifies $P$ is on the curve. Step 3: plug into $T_{0}: y = (1/4)(x-0)+2\\ln 2 = x/4 + 2\\ln 2$.`,
    },
    proTip: `When the function is a product, ALWAYS check first if it simplifies (difference of squares, factoring, $\\ln(ab)=\\ln a+\\ln b$). A single algebraic simplification often eliminates the need for the product/quotient rule entirely.`,
    examRefs: [
      { section: 'real-exam', question: 4, label: 'Real Exam Q4' },
      { section: 'real-exam', question: 12, label: 'Real Exam Q12' },
    ],
  },

  {
    id: 'complex-arg',
    title: 'Argument of $z$ — Polar Form, Powers, Rotations',
    topic: 'Complex Numbers',
    icon: '🎯',
    color: '#9066EE',
    summary: `Convert $a+ib$ to polar $|z|e^{i\\theta}$, then arguments add for products, subtract for quotients, multiply for powers. $-1=e^{i\\pi}$, $i=e^{i\\pi/2}$. Reduce mod $2\\pi$ at the end.`,
    why: `2021 has FOUR argument-flavoured questions: Q5 (an 18th power), Q10 (cube roots of unity from $z^{2}+z+1=0$), Q14 (rotation $z'=(\\frac{1}{2}+i\\frac{\\sqrt{3}}{2})z$), Q17 (sum $1+j+\\cdots+j^{11}$). All collapse to "convert to $e^{i\\theta}$ and apply the rules" — no $a+ib$ arithmetic needed.`,
    formulas: [
      { label: 'Standard arguments', latex: `\\arg(\\sqrt 3+i)=\\tfrac{\\pi}{6} \\;,\\; \\arg(1+i)=\\tfrac{\\pi}{4} \\;,\\; \\arg(1+i\\sqrt 3)=\\tfrac{\\pi}{3} \\;,\\; \\arg(i)=\\tfrac{\\pi}{2}`, description: 'These four cover roughly 90% of concours questions. Modulus is $2$, $\\sqrt 2$, $2$, $1$ respectively — memorize together.' },
      { label: 'Operation rules', latex: `\\arg(z_{1}z_{2}) = \\arg z_{1}+\\arg z_{2} \\;,\\; \\arg(z^{n}) = n\\arg z \\;,\\; \\arg(\\bar z) = -\\arg z`, description: 'Multiply $\\to$ add, power $\\to$ multiply, conjugate $\\to$ negate. All work modulo $2\\pi$.' },
      { label: 'Sign factor', latex: `\\arg(-z) = \\arg(z) + \\pi \\pmod{2\\pi}`, description: 'A "$-$" sign rotates by half a turn. So $\\arg(-e^{i\\pi/6}) = \\pi+\\pi/6 = 7\\pi/6 \\equiv -5\\pi/6$. Crucial for Q5.' },
      { label: 'Rotation around origin', latex: `z' = e^{i\\theta}\\,z \\;\\Longleftrightarrow\\; r(O\\,;\\theta) \\;\\text{(rotation by } \\theta \\text{ centered at } O\\text{)}`, description: 'If the multiplier is on the unit circle ($|c|=1$), it\'s a rotation. Argument of the multiplier $=$ rotation angle. No center to subtract because $z\'$ is taken from the origin.' },
      { label: 'Cube roots of unity', latex: `j = e^{i\\,2\\pi/3} \\;,\\; j^{3} = 1 \\;,\\; 1+j+j^{2} = 0`, description: 'The three primitive cube roots ($1,j,j^{2}$) sum to zero. Powers cycle modulo 3. Q17 reduces 12 terms to 4 copies of this triple sum.' },
    ],
    example: {
      question: `Z = \\left(\\dfrac{-1}{\\sqrt 3+i}\\right)^{18},\\;\\text{find } \\arg(Z)`,
      solution: `\\sqrt 3+i = 2e^{i\\pi/6} \\;\\Rightarrow\\; \\dfrac{-1}{\\sqrt 3+i} = \\dfrac{1}{2}\\,e^{i(\\pi-\\pi/6)} = \\dfrac{1}{2}e^{i\\,5\\pi/6} \\;\\Rightarrow\\; \\arg(Z) = 18\\cdot\\tfrac{5\\pi}{6} = 15\\pi \\equiv \\pi \\pmod{2\\pi}`,
      explanation: `Step 1: convert $\\sqrt 3+i$ to $2e^{i\\pi/6}$. Step 2: invert ($\\to e^{-i\\pi/6}$, modulus halves), then multiply by $-1$ (adds $\\pi$): $e^{i(\\pi-\\pi/6)} = e^{i\\,5\\pi/6}$. Step 3: power 18 multiplies the argument: $15\\pi$. Step 4: reduce mod $2\\pi$: $15\\pi = 14\\pi + \\pi \\equiv \\pi$.`,
    },
    proTip: `For powers raised to a high integer $n$, only the argument modulo $2\\pi$ matters — and the modulus becomes $|z|^{n}$. So you can ignore modulus entirely if the question only asks for the argument. Saves time on Q5.`,
    examRefs: [
      { section: 'real-exam', question: 5, label: 'Real Exam Q5' },
      { section: 'real-exam', question: 10, label: 'Real Exam Q10' },
      { section: 'real-exam', question: 14, label: 'Real Exam Q14' },
      { section: 'real-exam', question: 17, label: 'Real Exam Q17' },
    ],
  },

  {
    id: 'geometric-sum',
    title: 'Geometric Sums & Dominant-Base Limits',
    topic: 'Sequences',
    icon: '⚡',
    color: '#C9A84C',
    summary: `Closed form $\\sum_{k=0}^{n} q^{k} = (q^{n+1}-1)/(q-1)$. For $\\lim u_{n}$ when numerator and denominator are sums of geometric terms, factor out the LARGEST base in each — every other term vanishes.`,
    why: `Q6 ($\\lim (4^{n}+5^{n})/(3^{n}+2^{n}+1)$) is a textbook dominant-base problem: $5^{n}$ wins on top, $3^{n}$ wins on bottom, ratio $(5/3)^{n}\\to+\\infty$. Q17 needs the geometric sum on $j$ with $j^{3}=1$, reducing 12 terms to "0" via the closed form. One formula handles both.`,
    formulas: [
      { label: 'Finite geometric sum', latex: `\\sum_{k=0}^{n} q^{k} = \\dfrac{q^{n+1}-1}{q-1} \\;,\\; q\\neq 1`, description: '$n+1$ terms (from $k=0$ to $k=n$). Off-by-one in the exponent is the most common mistake — the power matches the count of terms.' },
      { label: 'Dominant-base reflex', latex: `a^{n}+b^{n} \\sim \\max(a,b)^{n} \\;\\text{when } n\\to+\\infty`, description: 'Among any finite list of $a^{n}, b^{n}, c^{n}, \\ldots$, the largest base $A=\\max$ dominates: factor it out and all other terms become $(b/A)^{n}\\to 0$.' },
      { label: 'Q6 algebra', latex: `\\dfrac{4^{n}+5^{n}}{3^{n}+2^{n}+1} = \\left(\\dfrac{5}{3}\\right)^{n}\\cdot\\dfrac{(4/5)^{n}+1}{1+(2/3)^{n}+(1/3)^{n}} \\xrightarrow[n\\to+\\infty]{} +\\infty\\cdot 1`, description: 'Factor $5^{n}$ on top, $3^{n}$ on bottom. Right factor tends to $1$, left factor tends to $+\\infty$ since $5/3>1$.' },
      { label: 'Q17 trick — period 3', latex: `j^{3}=1 \\Rightarrow \\sum_{k=0}^{11} j^{k} = \\dfrac{j^{12}-1}{j-1} = \\dfrac{1-1}{j-1} = 0`, description: 'Whenever $q^{n+1}=1$ (i.e., the sum length is a multiple of the order of $q$), the closed form gives $0/(q-1) = 0$.' },
    ],
    example: {
      question: `\\lim_{n\\to+\\infty} u_{n} = \\dfrac{4^{n}+5^{n}}{3^{n}+2^{n}+1}`,
      solution: `u_{n} = \\bigl(\\tfrac{5}{3}\\bigr)^{n}\\cdot\\dfrac{(4/5)^{n}+1}{1+(2/3)^{n}+(1/3)^{n}} \\to +\\infty \\cdot 1 = +\\infty`,
      explanation: `Step 1: spot dominant bases — $5$ on top, $3$ on bottom. Step 2: factor: numerator $=5^{n}((4/5)^{n}+1)$, denominator $=3^{n}(1+(2/3)^{n}+(1/3)^{n})$. Step 3: split into $(5/3)^{n}\\cdot R$. Right factor $R\\to (0+1)/(1+0+0)=1$. Step 4: $(5/3)^{n}\\to+\\infty$ since $5/3>1$.`,
    },
    proTip: `For Q17-style sums where $q$ is a root of unity ($q^{m}=1$ for some $m$), check whether the number of terms is a multiple of $m$. If yes, the sum is $0$ instantly — no algebra needed. Equivalent visualization: $4$ groups of $3$, each summing to $1+j+j^{2}=0$.`,
    examRefs: [
      { section: 'real-exam', question: 6, label: 'Real Exam Q6' },
      { section: 'real-exam', question: 17, label: 'Real Exam Q17' },
    ],
  },

  {
    id: 'integration-tan',
    title: 'Integrals — Three Patterns That Cover Almost Everything',
    topic: 'Integrals',
    icon: '∫',
    color: '#4CE87C',
    summary: `Three antiderivative patterns: $\\int u'/u = \\ln|u|$, $\\int u'\\,u^{n} = u^{n+1}/(n+1)$, $\\int u'\\,e^{u} = e^{u}$. Algebraic split (long division) before applying any of them often saves a substitution.`,
    why: `Q7 hides $\\int(x-3)/(x-2)\\,dx$ — split $(x-3)/(x-2) = 1 - 1/(x-2)$ and antiderivative pops out. Q19 is exactly the $u'u^{-4}$ pattern with $u=e^{x}+e^{-x}$, $u'=e^{x}-e^{-x}$. Both questions take 30 seconds with the right pattern, several minutes without.`,
    formulas: [
      { label: 'Pattern 1 — log', latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C`, description: '"Numerator is the derivative of the denominator" — antiderivative is $\\ln$ of the denominator (no further work needed).' },
      { label: 'Pattern 2 — power', latex: `\\int u'(x)\\,u(x)^{n}\\,dx = \\dfrac{u(x)^{n+1}}{n+1} + C \\;,\\; n\\neq -1`, description: 'Exponent $n$ can be any real $\\neq -1$ — including negative ones like $-4$ for Q19.' },
      { label: 'Pattern 3 — exponential', latex: `\\int u'(x)\\,e^{u(x)}\\,dx = e^{u(x)} + C`, description: 'When you see $u\'\\cdot e^{u}$ together, just write $e^{u}$.' },
      { label: 'Algebraic split', latex: `\\dfrac{x-3}{x-2} = \\dfrac{(x-2)-1}{x-2} = 1 - \\dfrac{1}{x-2}`, description: 'When numerator degree $\\geq$ denominator degree, do long division (or rewrite the numerator) BEFORE integrating. Each piece is now elementary.' },
      { label: 'Constant adjustment', latex: `\\int \\dfrac{c\\,u'(x)}{u(x)^{n}}\\,dx = c \\cdot \\dfrac{u(x)^{1-n}}{1-n} + C`, description: `For Q19: $\\int 3\\cdot u'/u^{4}\\,dx = 3\\cdot u^{-3}/(-3) = -1/u^{3}$. The "$3$" cancels with the "$-3$" — clean answer.` },
    ],
    example: {
      question: `F(x) = \\displaystyle\\int \\dfrac{3(e^{x}-e^{-x})}{(e^{x}+e^{-x})^{4}}\\,dx`,
      solution: `u = e^{x}+e^{-x},\\;u' = e^{x}-e^{-x} \\;\\Rightarrow\\; F = 3\\cdot\\dfrac{u^{-3}}{-3} = -\\dfrac{1}{(e^{x}+e^{-x})^{3}}`,
      explanation: `Step 1: identify $u(x)=e^{x}+e^{-x}$ and verify $u'(x)=e^{x}-e^{-x}$ — exact match with the numerator. Step 2: integrand has the form $3\\cdot u'\\cdot u^{-4}$. Step 3: apply the power pattern with $n=-4$: antiderivative $u^{-3}/(-3)$. Step 4: the $3$ outside multiplies $-1/3$ to give $-1/u^{3}$.`,
    },
    proTip: `Before reaching for substitution, try ALGEBRAIC SPLITTING: $(x-3)/(x-2) = 1 - 1/(x-2)$, $(2x+3)/(x^{2}+1) = 2x/(x^{2}+1) + 3/(x^{2}+1)$. One rewrite often turns the integral into a sum of standard antiderivatives.`,
    examRefs: [
      { section: 'real-exam', question: 7, label: 'Real Exam Q7' },
      { section: 'real-exam', question: 19, label: 'Real Exam Q19' },
    ],
  },

  {
    id: 'locus-complex',
    title: 'Complex Locus — Substitute $z=x+iy$ and Square',
    topic: 'Complex Numbers',
    icon: '🧭',
    color: '#9066EE',
    summary: `For any equation $|z-z_A|=|z-z_B|$ or similar, write $z=x+iy$, square both sides, and the radicals disappear. The result is the equation of a line, circle, or other conic — never guess from the form.`,
    why: `Q9 asks for the locus of $|z-1|=|\\bar z+1|$. The bar inside makes it tempting to guess "$y=x$" or "$y=-x$" — both wrong. Substituting $z=x+iy$ gives a clean linear equation $x=0$ (the imaginary axis). One algebraic move beats four guesses.`,
    formulas: [
      { label: 'Modulus expansion', latex: `|z - z_{0}|^{2} = (x-x_{0})^{2} + (y-y_{0})^{2}`, description: 'Square the modulus to remove the radical — what you have left is a sum of squared real differences.' },
      { label: 'Conjugate reminder', latex: `\\bar z = x - iy \\;\\Rightarrow\\; |\\bar z + 1| = |(x+1) - iy| = \\sqrt{(x+1)^{2}+y^{2}}`, description: 'Conjugating flips the sign of $y$ but not of $x$. Modulus is unchanged, but the position of $z_{0}$ inside changes.' },
      { label: 'Equidistance is a line', latex: `|z-z_{A}| = |z-z_{B}| \\;\\Longleftrightarrow\\; M \\text{ on the perpendicular bisector of } [AB]`, description: 'Distances to two fixed points are equal: the locus is the line equidistant from $A$ and $B$ — perpendicular to $[AB]$ through its midpoint.' },
      { label: 'Standard locus catalogue', latex: `|z-z_{0}|=R \\Rightarrow \\text{circle} \\;,\\; \\arg(z-z_{0})=\\theta \\Rightarrow \\text{half-line from } z_{0}`, description: 'Memorize the catalogue: each form gives a specific shape. Combined with the substitution method, you can solve any 2021-style locus question.' },
    ],
    example: {
      question: `\\text{Find the locus: } |z - 1| = |\\bar z + 1|`,
      solution: `(x-1)^{2}+y^{2} = (x+1)^{2}+y^{2} \\;\\Rightarrow\\; -2x = 2x \\;\\Rightarrow\\; x = 0 \\;(\\text{imaginary axis})`,
      explanation: `Step 1: $|z-1|^{2} = (x-1)^{2}+y^{2}$. Step 2: $|\\bar z + 1| = |(x+1)-iy|$ has modulus squared $(x+1)^{2}+y^{2}$. Step 3: equate, $y^{2}$ cancels, $(x-1)^{2}=(x+1)^{2}\\Rightarrow x=0$. Step 4: the locus is the line $x=0$.`,
    },
    proTip: `Geometric shortcut: $|\\bar z + 1| = |\\overline{z+1}| = |z+1|$, so the equation is $|z-1| = |z-(-1)|$ — the perpendicular bisector of $[1, -1]$, i.e.\\ the imaginary axis. Same answer, no algebra. Use whichever method clicks faster.`,
    examRefs: [
      { section: 'real-exam', question: 9, label: 'Real Exam Q9' },
    ],
  },

  {
    id: 'function-range',
    title: 'Image of an Interval — Table of Variations + IVT',
    topic: 'Function Analysis',
    icon: '🎯',
    color: '#4CE87C',
    summary: `Compute $f'$, study its sign, build a table of variations with extrema and boundary limits, THEN read the image off the table. Open boundaries map to open ends; attained extrema give closed ends.`,
    why: `Three 2021 questions are pure "image of an interval" or "find the unique root" problems: Q11 (unique root of $x^{3}+\\ln x$ in $]1/e, 1[$), Q13 ($f(]0,1])$ for $f(x)=x\\ln x$), Q20 (minimum of $1-xe^{-x}$). Each follows the same pipeline: $f'$ → table → read.`,
    formulas: [
      { label: 'Standard limits to memorize', latex: `\\lim_{x\\to 0^{+}} x\\ln x = 0 \\;,\\; \\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x}=0 \\;,\\; \\lim_{x\\to+\\infty} x\\,e^{-x} = 0`, description: 'These three appear in Q13 and Q20. They\'re NOT obvious from "$0\\cdot\\infty$" — they come from the growth hierarchy and must be memorized.' },
      { label: 'IVT for unique root', latex: `f \\nearrow \\text{ continuous on } [a,b],\\; f(a)\\cdot f(b) < 0 \\;\\Longrightarrow\\; \\exists!\\,\\alpha\\in(a,b),\\;f(\\alpha)=0`, description: 'Strict monotonicity + sign change = exactly one root. Q11 uses $a=1/e$ (gives $g(1/e)<0$) and $b=1$ (gives $g(1)>0$).' },
      { label: 'Image bounds', latex: `f \\nearrow \\text{ on } [a,b] \\Rightarrow f([a,b])=[f(a),f(b)] \\;,\\; f \\searrow \\Rightarrow [f(b),f(a)]`, description: 'Strictly increasing keeps the order; strictly decreasing REVERSES it. Always pay attention to whether the function rises or falls.' },
      { label: 'Open vs. closed boundary', latex: `f(]a, b]) \\text{ : the } a\\text{-end is open if } a \\text{ excluded; the } b\\text{-end is closed if } b \\text{ attained}`, description: 'Q13: $f(]0,1])$ has minimum $-1/e$ ATTAINED at $x=1/e$ (closed) and approaches $0$ at $x=1$ (closed). Both ends closed: $[-1/e, 0]$.' },
      { label: 'Critical-point extrema', latex: `f'(x_{0})=0,\\;f''(x_{0})>0 \\Rightarrow x_{0} \\text{ local min} \\;,\\; f''(x_{0})<0 \\Rightarrow x_{0} \\text{ local max}`, description: 'Or use the sign change of $f\'$: $-\\to+$ is a min, $+\\to-$ is a max. Both criteria agree.' },
    ],
    example: {
      question: `f(x) = x\\ln x \\;,\\; \\text{compute } f(\\,]0,1])`,
      solution: `f'(x) = \\ln(x)+1 \\;,\\; f'=0 \\Leftrightarrow x=1/e \\;\\Rightarrow\\; \\min f = f(1/e) = -1/e \\;,\\; f(1)=0 \\;,\\; \\lim_{0^{+}} = 0 \\Rightarrow f(\\,]0,1]) = [-1/e,\\,0]`,
      explanation: `Step 1: $f'(x)=\\ln x + 1$, zero at $x=1/e\\in\\,]0,1]$. Step 2: sign of $f'$: negative on $]0,1/e]$, positive on $[1/e,1]$ — so $f$ decreases then increases. Step 3: minimum value $f(1/e) = (1/e)\\cdot(-1) = -1/e$. Boundary values: $f(1)=0$ (closed) and $\\lim_{x\\to 0^{+}} x\\ln x = 0$ (open but the value 0 is also attained at $x=1$, so still in the image). Step 4: image $= [-1/e, 0]$.`,
    },
    proTip: `Open boundaries don\'t automatically open the image — the boundary value can still be ATTAINED somewhere else inside the interval. In Q13, "$0$" is approached at $x\\to 0^{+}$ but also attained at $x=1$, so the image is closed at $0$. Always check whether the limit value is attained elsewhere.`,
    examRefs: [
      { section: 'real-exam', question: 11, label: 'Real Exam Q11' },
      { section: 'real-exam', question: 13, label: 'Real Exam Q13' },
      { section: 'real-exam', question: 20, label: 'Real Exam Q20' },
    ],
  },

  {
    id: 'suite-type',
    title: 'Sequence Type — Arithmetic, Geometric, or Transformed',
    topic: 'Sequences',
    icon: '🔍',
    color: '#C9A84C',
    summary: `Test arithmetic by $u_{n+1}-u_{n}=r$ constant; geometric by $u_{n+1}/u_{n}=q$ constant. For homographic recurrences $u_{n+1}=(au_{n}+b)/(cu_{n}+d)$, build $w_{n}=(u_{n}-\\alpha)/(u_{n}-\\beta)$ where $\\alpha,\\beta$ are the fixed points — $(w_{n})$ becomes geometric.`,
    why: `Q15 is direct arithmetic ($u_{0}=-2$, $u_{3}+u_{4}+u_{5}=30$, find $r$). Q18 is the homographic transformation: $u_{n+1}=(2u_{n}+9)/(u_{n}+2)$, the auxiliary $w_{n}=(u_{n}-3)/(u_{n}+3)$ is GEOMETRIC with ratio $-1/5$. Knowing this transformation in advance turns a 4-step computation into a one-line answer.`,
    formulas: [
      { label: 'Arithmetic identification', latex: `u_{n+1} - u_{n} = r \\;\\text{constant} \\;\\Longleftrightarrow\\; (u_{n}) \\text{ arithmetic}`, description: 'Sum/difference test — apply directly. Closed form: $u_{n}=u_{0}+nr$.' },
      { label: 'Geometric identification', latex: `\\dfrac{u_{n+1}}{u_{n}} = q \\;\\text{constant} \\;\\Longleftrightarrow\\; (u_{n}) \\text{ geometric}`, description: 'Ratio test. Closed form: $u_{n}=u_{0}q^{n}$.' },
      { label: 'Sum of consecutive arithmetic terms', latex: `u_{p} + u_{p+1} + \\cdots + u_{p+k-1} = k\\cdot u_{p+\\frac{k-1}{2}}`, description: 'Number of terms $\\times$ middle term. Q15: $u_{3}+u_{4}+u_{5} = 3\\cdot u_{4}$.' },
      { label: 'Homographic to geometric', latex: `u_{n+1} = \\dfrac{a u_{n}+b}{c u_{n}+d} \\Rightarrow w_{n} = \\dfrac{u_{n}-\\alpha}{u_{n}-\\beta} \\text{ is geometric (with } \\alpha,\\beta \\text{ the two fixed points)}`, description: 'Find fixed points by solving $u=(au+b)/(cu+d)$, i.e.\\ a quadratic. The auxiliary $w_{n}$ converts a non-linear recurrence into an elementary geometric one.' },
      { label: 'Computing the ratio', latex: `w_{n+1} = \\dfrac{u_{n+1}-\\alpha}{u_{n+1}-\\beta} = q \\cdot \\dfrac{u_{n}-\\alpha}{u_{n}-\\beta} = q\\,w_{n}`, description: 'Substitute the recurrence into $w_{n+1}$ and simplify. The ratio $q$ falls out as a constant — equal to $(a-c\\alpha)/(a-c\\beta)$ for the homographic case.' },
    ],
    example: {
      question: `u_{n+1} = \\dfrac{2u_{n}+9}{u_{n}+2},\\;u_{0}=5,\\;w_{n}=\\dfrac{u_{n}-3}{u_{n}+3}.\\;\\text{Find the ratio of } (w_{n}).`,
      solution: `u_{n+1}-3 = \\dfrac{-(u_{n}-3)}{u_{n}+2} \\;,\\; u_{n+1}+3 = \\dfrac{5(u_{n}+3)}{u_{n}+2} \\;\\Rightarrow\\; w_{n+1} = -\\dfrac{1}{5}\\,w_{n}`,
      explanation: `Step 1: compute $u_{n+1}-3 = (2u_{n}+9-3(u_{n}+2))/(u_{n}+2) = (-u_{n}+3)/(u_{n}+2)$. Step 2: compute $u_{n+1}+3 = (5u_{n}+15)/(u_{n}+2) = 5(u_{n}+3)/(u_{n}+2)$. Step 3: ratio $w_{n+1}/w_{n} = -1/5$. So $(w_{n})$ is geometric with ratio $-1/5$.`,
    },
    proTip: `For homographic recurrences, the fixed points are the two solutions of $u=(au+b)/(cu+d)$. In Q18 they are $\\pm 3$ — exactly the $\\pm 3$ that appear in $w_{n}=(u_{n}-3)/(u_{n}+3)$. Recognizing this means you can DERIVE the auxiliary $w_{n}$ when the question doesn\'t hand it to you.`,
    examRefs: [
      { section: 'real-exam', question: 15, label: 'Real Exam Q15' },
      { section: 'real-exam', question: 18, label: 'Real Exam Q18' },
    ],
  },
]

// ─────────────────────────────────────────────────────────────
// COURSE RECAP
// Six chapters tracking the 2021 paper's content blocks.
// ─────────────────────────────────────────────────────────────
export const RECAP_2021: RecapTopic[] = [
  {
    id: 'logarithm-2021',
    title: 'Logarithm — Domain, Algebra, Limits',
    icon: '🪵',
    color: '#4CADE8',
    summary: `Logarithm $\\ln$ is defined on $\\,]0,+\\infty[$, strictly increasing, with $\\ln 1 = 0$ and $\\ln(ab)=\\ln a+\\ln b$. Domain ALWAYS comes first when manipulating $\\ln$. Standard limits: $\\ln x\\to-\\infty$ at $0^{+}$, $\\ln x\\to+\\infty$ at $+\\infty$, $x\\ln x\\to 0$ at $0^{+}$.`,
    formulas: [
      { label: 'Domain rule', latex: `\\ln(u(x)) \\text{ defined} \\iff u(x) > 0`, description: 'Strict inequality — $u=0$ is NOT allowed. Always intersect with the rest of the function\'s domain.' },
      { label: 'Algebra', latex: `\\ln(ab)=\\ln a+\\ln b \\;,\\; \\ln(a/b)=\\ln a-\\ln b \\;,\\; \\ln(a^{n})=n\\ln a`, description: 'Valid when $a,b>0$. Combining two logs into one ALWAYS narrows the domain — re-check after fusing.' },
      { label: 'Special values', latex: `\\ln 1 = 0 \\;,\\; \\ln e = 1 \\;,\\; \\ln(e^{x}) = x \\;,\\; e^{\\ln x} = x \\;\\text{(for } x>0\\text{)}`, description: '$\\ln$ and $\\exp$ are inverse on their respective domains. Use to switch back and forth.' },
      { label: 'Standard limits', latex: `\\lim_{x\\to 0^{+}}\\ln x = -\\infty \\;,\\; \\lim_{x\\to+\\infty}\\ln x = +\\infty \\;,\\; \\lim_{x\\to 0^{+}} x\\ln x = 0 \\;,\\; \\lim_{x\\to+\\infty}\\dfrac{\\ln x}{x} = 0`, description: 'The last two are growth-comparison limits — they say $x$ "wins" against $\\ln x$ both at $0^{+}$ and at $+\\infty$.' },
      { label: 'Derivative', latex: `(\\ln u)' = \\dfrac{u'}{u}`, description: 'Chain rule on $\\ln$. Combined with the domain rule, this is enough to differentiate any composition involving $\\ln$.' },
    ],
    theorems: [
      { name: 'Strict monotonicity', statement: `\\ln \\text{ is strictly increasing on } ]0,+\\infty[.\\;\\text{So } \\ln a < \\ln b \\iff 0 < a < b.`, keyIdea: 'Logs preserve order on the positive reals. Useful for solving $\\ln$-inequalities by reducing to inequalities on the arguments.' },
      { name: 'Bijectivity', statement: `\\ln: \\,]0,+\\infty[ \\,\\to\\, \\mathbb{R} \\text{ is a bijection. Inverse is } \\exp.`, keyIdea: 'Every real value is hit exactly once. So $\\ln(u)=k$ has a unique solution $u = e^{k}$.' },
    ],
    pitfalls: [
      `Combining $\\ln(a)+\\ln(b)$ into $\\ln(ab)$ is valid ONLY if $a>0$ AND $b>0$. After equating the arguments, re-filter against the original domain (Q16).`,
      `On a sign-change argument like $2x\\ln(-x)\\geq 0$, REMEMBER the sign of $2x$ on the domain (here $x<0$ so $2x<0$). The product\'s sign comes from BOTH factors.`,
      `$\\ln(x)$ is NOT defined at $x=0$ — you can\'t evaluate $\\ln 0$. Use limits ($\\to -\\infty$) instead.`,
    ],
  },

  {
    id: 'function-analysis-2021',
    title: 'Function Analysis — Derivatives, Tangents, Image',
    icon: '📈',
    color: '#4CE87C',
    summary: `Three-step pipeline: (1) compute $f'$, (2) study its sign and find critical points, (3) build the table of variations with boundary limits. From the table you read off monotonicity, extrema, image $f(D_{f})$, and inverse-existence questions. Tangent at $a$: $T_{a}: y = f'(a)(x-a)+f(a)$.`,
    formulas: [
      { label: 'Differentiation rules', latex: `(uv)'=u'v+uv' \\;,\\; \\bigl(\\tfrac{u}{v}\\bigr)'=\\tfrac{u'v-uv'}{v^{2}} \\;,\\; (f\\circ g)'=f'(g)\\cdot g'`, description: 'Three rules cover essentially every concours derivative. Memorize the order in the quotient: numerator first, MINUS, then $uv\'$, denominator squared.' },
      { label: 'Standard derivatives', latex: `(\\ln u)'=\\dfrac{u'}{u} \\;,\\; (e^{u})'=u'\\,e^{u} \\;,\\; (u^{n})'=n u^{n-1}\\,u' \\;,\\; (\\sqrt u)'=\\dfrac{u'}{2\\sqrt u}`, description: 'Chain-rule versions. Plug the inner $u$ and its derivative directly.' },
      { label: 'Tangent equation', latex: `T_{a}: y = f'(a)(x-a) + f(a)`, description: 'Two numbers — $f\'(a)$ and $f(a)$. Compute them as numbers, then plug in. Don\'t simplify $f\'(x)$ symbolically first.' },
      { label: 'Half-tangent at boundary', latex: `\\lim_{x\\to a^{+}} \\dfrac{f(x)-f(a)}{x-a} = m \\;\\Rightarrow\\; \\text{slope} = m \\;,\\; \\pm\\infty \\Rightarrow \\text{vertical half-tangent}`, description: 'Compute the right (or left) difference quotient. Finite $\\to$ regular tangent slope; $\\pm\\infty\\to$ vertical (sign tells direction).' },
      { label: 'Image of a monotone interval', latex: `f \\nearrow \\text{ continuous on } [a,b] \\Rightarrow f([a,b])=[f(a),f(b)]`, description: 'Strict increase preserves the order; strict decrease REVERSES it. Open boundaries map to open ends UNLESS the value is attained elsewhere.' },
      { label: 'Convexity test', latex: `f''(x) > 0 \\;\\forall x \\Rightarrow f \\text{ strictly convex} \\;,\\; f'' \\text{ changes sign} \\Rightarrow \\text{inflection point}`, description: '$f\'\'>0$ on the whole interval means there is NO inflection point — the curve always turns the same way.' },
    ],
    theorems: [
      { name: 'Intermediate value theorem (IVT)', statement: `f \\text{ continuous on } [a,b],\\; f(a)\\cdot f(b) < 0 \\Rightarrow \\exists c\\in(a,b),\\; f(c)=0.\\;\\text{If additionally } f \\text{ is strictly monotonic, } c \\text{ is unique.}`, keyIdea: 'Sign change + continuity = a root. Monotonicity makes it unique. Q11 and Q20 both rely on this.' },
      { name: 'Bijection theorem', statement: `f \\text{ continuous and strictly monotonic on } I \\Rightarrow f \\text{ is a bijection from } I \\text{ to } f(I).`, keyIdea: 'Strict monotonicity + continuity = bijection. Then $f^{-1}$ exists on $f(I)$.' },
      { name: 'Extremum criterion', statement: `f' \\text{ changes sign } - \\to + \\text{ at } x_{0} \\Rightarrow \\text{local minimum at } x_{0}.\\;\\text{If } f \\text{ is also strictly convex, the minimum is global.}`, keyIdea: 'Q20: $f\'(x)=(x-1)e^{-x}$ goes $-\\to+$ at $x=1$, so global minimum $f(1)=1-1/e$.' },
    ],
    pitfalls: [
      `Don\'t simplify $f'(x)$ symbolically before plugging $x=a$. Plug numerical values for $u(a), u'(a), v(a), v'(a)$ and compute once.`,
      `An open boundary doesn\'t automatically give an open end on the image — the boundary value can be ATTAINED elsewhere (Q13).`,
      `When $f''>0$ everywhere, there is NO inflection point. Don\'t accept "inflection at $x=1$" just because $f'(1)=0$ — that\'s a critical point, not an inflection.`,
    ],
  },

  {
    id: 'limits-asymptotes-2021',
    title: 'Limits & Asymptotes',
    icon: '📉',
    color: '#F5A623',
    diagram: 'asymptotic-tree',
    summary: `Limit techniques in order of preference: (1) plug in if continuous, (2) factor and simplify, (3) growth hierarchy ($\\ln \\ll x^{\\alpha} \\ll e^{x}$), (4) squeeze for bounded oscillating factors, (5) for asymptotes test BOTH $\\lim f(x)/x = a$ AND $\\lim [f(x)-ax] = b$.`,
    formulas: [
      { label: 'Growth hierarchy', latex: `\\ln(x) \\ll x^{\\alpha} \\ll e^{x} \\;,\\;\\alpha > 0 \\;\\text{(at } +\\infty\\text{)}`, description: 'Logs are slower than any power; powers are slower than the exponential. So $x^{2}/\\ln x \\to +\\infty$, $\\ln x / x \\to 0$, $x^{n} e^{-x}\\to 0$.' },
      { label: 'Dominant base in geometric sums', latex: `a^{n} + b^{n} \\sim \\max(a,b)^{n} \\;\\text{at } +\\infty`, description: 'For ratios like Q6, factor the largest base on top and on bottom independently. The remaining factors tend to constants.' },
      { label: 'Standard equivalents at 0', latex: `\\sin x \\sim x \\;,\\; \\tan x \\sim x \\;,\\; e^{x}-1 \\sim x \\;,\\; \\ln(1+x) \\sim x \\;,\\; (1+x)^{\\alpha}-1 \\sim \\alpha x`, description: 'Resolve $0/0$ indeterminate forms in one substitution. Valid only AT THE POINT $x=0$.' },
      { label: 'Squeeze theorem', latex: `|f(x)| \\leq g(x) \\to 0 \\Rightarrow f(x) \\to 0`, description: 'For oscillating but bounded factors ($\\cos n, \\sin n, (-1)^{n}$) divided by something going to infinity.' },
      { label: 'Oblique asymptote test', latex: `a = \\lim_{x\\to\\pm\\infty}\\dfrac{f(x)}{x} \\;,\\; b = \\lim_{x\\to\\pm\\infty}\\bigl[f(x)-ax\\bigr] \\;\\Longrightarrow\\; y = ax + b`, description: 'BOTH limits must be finite. The slope is $a$, the intercept is $b$.' },
      { label: 'Branch classification', latex: `\\lim f(x)/x = 0 \\Rightarrow \\text{branch along } Ox \\;,\\; \\lim f(x)/x = \\pm\\infty \\Rightarrow \\text{branch along } Oy`, description: 'When the slope test fails, you have a parabolic branch — not an asymptote.' },
    ],
    theorems: [
      { name: 'Comparison of sequences', statement: `0 \\leq u_{n} \\leq v_{n}\\;\\text{ and }\\; v_{n}\\to 0 \\Rightarrow u_{n}\\to 0.`, keyIdea: 'Non-negative sequence bounded above by a vanishing sequence also vanishes.' },
      { name: 'L\'Hôpital-style equivalents', statement: `\\text{If } f, g \\text{ both } \\to 0 \\text{ at } a \\text{ and } f \\sim g, \\text{ then } f/g \\to 1.`, keyIdea: 'Replace numerator or denominator by an equivalent to compute a $0/0$ limit.' },
    ],
    pitfalls: [
      `$\\cos(n)$ and $\\sin(n)$ have NO limit at $\\infty$. They oscillate. Use bounds, never write "$\\cos(n)\\to ?$".`,
      `For oblique asymptotes, $\\lim f(x)/x$ being finite is NOT enough — you also need $\\lim[f(x)-ax]$ to be finite. If it diverges, only a parabolic branch exists.`,
      `Don\'t read off the asymptote from the literal expression. Q8\'s $f(x)=2x+1-x^{4}/(x^{4}+1)$ does NOT have asymptote $y=2x+1$ — the rational fraction tends to 1, cancelling the "+1".`,
    ],
  },

  {
    id: 'sequences-2021',
    title: 'Sequences — Arithmetic, Geometric, Transformed',
    icon: '🔢',
    color: '#C9A84C',
    summary: `Identification: arithmetic if $u_{n+1}-u_{n}$ is constant; geometric if $u_{n+1}/u_{n}$ is constant. Closed forms: $u_{n}=u_{0}+nr$ (arithmetic), $u_{n}=u_{0}q^{n}$ (geometric). Sums: arithmetic $=$ #terms $\\times$ average; geometric $=(q^{n+1}-1)/(q-1)$. Homographic recurrences become geometric via $w_{n}=(u_{n}-\\alpha)/(u_{n}-\\beta)$.`,
    formulas: [
      { label: 'Arithmetic closed form', latex: `u_{n} = u_{0} + n r \\;,\\; u_{p} = u_{q} + (p-q) r`, description: 'Linear in $n$. Useful for term-shifts: knowing $u_{q}$ gives any other $u_{p}$ via the difference $(p-q)r$.' },
      { label: 'Geometric closed form', latex: `u_{n} = u_{0}\\,q^{n} \\;,\\; u_{p} = u_{q}\\,q^{p-q}`, description: 'Exponential in $n$. The sign of $q$ determines oscillation; $|q|$ determines convergence.' },
      { label: 'Arithmetic sum', latex: `\\sum_{k=0}^{n} u_{k} = (n+1)\\,\\dfrac{u_{0}+u_{n}}{2}`, description: 'Number of terms ($n+1$) times the average of first and last term. For three consecutive: $u_{p}+u_{p+1}+u_{p+2} = 3 u_{p+1}$.' },
      { label: 'Geometric sum', latex: `\\sum_{k=0}^{n} q^{k} = \\dfrac{q^{n+1}-1}{q-1} \\;,\\; q\\neq 1`, description: 'Number of terms is $n+1$. Off-by-one is the most common error — the exponent in $q^{n+1}$ matches the count of terms.' },
      { label: 'Homographic transformation', latex: `u_{n+1} = \\dfrac{a u_{n}+b}{c u_{n}+d} \\;,\\; w_{n} = \\dfrac{u_{n}-\\alpha}{u_{n}-\\beta} \\;\\text{geometric, with } \\alpha,\\beta \\text{ fixed points}`, description: 'Fixed points solve $u=(au+b)/(cu+d)$. The auxiliary $w_{n}$ has constant ratio computed by substituting the recurrence.' },
      { label: 'Convergence of geometric', latex: `|q|<1 \\Rightarrow u_{n}\\to 0 \\;,\\; |q|>1 \\Rightarrow |u_{n}|\\to+\\infty \\;,\\; q=1 \\text{ constant} \\;,\\; q=-1 \\text{ oscillates}`, description: 'Magnitude of the ratio determines convergence. Sign determines whether the sequence oscillates.' },
    ],
    theorems: [
      { name: 'Sum of consecutive terms', statement: `\\text{Arithmetic: } u_{p}+\\cdots+u_{p+k-1} = k\\cdot u_{p+(k-1)/2}.\\;\\text{Geometric: same trick after factoring } u_{p}.`, keyIdea: 'Q15 uses this with $k=3$: $u_{3}+u_{4}+u_{5}=3u_{4}=30 \\Rightarrow u_{4}=10$, then $r = (u_{4}-u_{0})/4 = 12/4 = 3$.' },
      { name: 'Geometric image of arithmetic', statement: `(u_{n}) \\text{ arithmetic with ratio } r \\Rightarrow (e^{u_{n}}) \\text{ geometric with ratio } e^{r}.\\;\\text{Conversely, take } \\ln \\text{ of a geometric sequence.}`, keyIdea: 'Useful when the recurrence involves $\\ln$ or $\\exp$ wrapping the sequence.' },
    ],
    pitfalls: [
      `Don\'t confuse arithmetic (constant DIFFERENCE) with geometric (constant RATIO). Different growth shapes — linear vs.\\ exponential.`,
      `For homographic recurrences, the auxiliary $w_{n}$ usually involves the FIXED POINTS of the recurrence, not arbitrary constants. In Q18 the choice $(u-3)/(u+3)$ matches the two fixed points $\\pm 3$.`,
      `Geometric sum formula breaks at $q=1$ (denominator $0$). Then the sum is trivially $n+1$ copies of $1$.`,
    ],
  },

  {
    id: 'complex-numbers-2021',
    title: 'Complex Numbers — Arguments, Loci, Roots of Unity',
    icon: '🔮',
    color: '#9066EE',
    summary: `Three forms: algebraic $a+ib$, trigonometric $r(\\cos\\theta+i\\sin\\theta)$, exponential $re^{i\\theta}$. Arguments add for products, multiply for powers, negate for conjugate. Loci: $|z-z_{0}|=R$ is a circle, $|z-z_{A}|=|z-z_{B}|$ is a perpendicular bisector. Roots of $z^{n}=1$ are $e^{i 2k\\pi/n}$, and they sum to zero for $n\\geq 2$.`,
    formulas: [
      { label: 'Three forms', latex: `z = a + ib = r(\\cos\\theta + i\\sin\\theta) = r\\,e^{i\\theta} \\;,\\; r=|z|, \\theta=\\arg z`, description: 'Algebraic for real/imaginary parts; exponential for products, quotients, powers.' },
      { label: 'Standard arguments', latex: `\\arg(\\sqrt 3+i)=\\tfrac{\\pi}{6} \\;,\\; \\arg(1+i)=\\tfrac{\\pi}{4} \\;,\\; \\arg(1+i\\sqrt 3)=\\tfrac{\\pi}{3} \\;,\\; \\arg(i)=\\tfrac{\\pi}{2} \\;,\\; \\arg(-1)=\\pi`, description: 'Memorize. Combined with the operation rules, you compute any argument in 30 seconds.' },
      { label: 'Operation rules', latex: `\\arg(z_{1}z_{2}) = \\arg z_{1}+\\arg z_{2} \\;,\\; \\arg(z^{n}) = n\\arg z \\;,\\; \\arg(\\bar z) = -\\arg z`, description: 'All taken modulo $2\\pi$. Reduce at the end.' },
      { label: 'Conjugate', latex: `\\bar z = a - ib = r\\,e^{-i\\theta} \\;,\\; \\overline{z_{1}z_{2}} = \\bar z_{1}\\bar z_{2} \\;,\\; |z|^{2} = z\\bar z`, description: 'Conjugate flips sign of imaginary part and of argument. Modulus unchanged.' },
      { label: 'Locus catalogue', latex: `|z-z_{0}|=R \\Rightarrow \\text{circle} \\;,\\; |z-z_{A}|=|z-z_{B}| \\Rightarrow \\text{perpendicular bisector of }[AB] \\;,\\; \\arg(z-z_{0})=\\theta \\Rightarrow \\text{half-line from } z_{0}`, description: 'Three standard equations; each gives a specific shape.' },
      { label: '$n$-th roots of unity', latex: `z^{n}=1 \\iff z = e^{i\\,2k\\pi/n} \\;,\\; k=0,\\ldots,n-1 \\;,\\; \\sum_{k=0}^{n-1} e^{i\\,2k\\pi/n} = 0 \\;(n\\geq 2)`, description: 'Vertices of a regular $n$-gon on the unit circle. Their sum is the centroid: zero (origin).' },
      { label: 'Quadratic with negative discriminant', latex: `\\Delta < 0 \\Rightarrow z = \\dfrac{-b \\pm i\\sqrt{-\\Delta}}{2a} \\;\\text{(two complex conjugate roots)}`, description: 'Q10: $z^{2}+z+1=0$, $\\Delta=-3$, roots are $j$ and $\\bar j = j^{2}$ on the unit circle.' },
      { label: 'Rotation around origin', latex: `z' = e^{i\\theta} z \\;\\Longleftrightarrow\\; r(O\\,;\\theta)`, description: 'Multiplier on the unit circle ($|c|=1$) acts as a rotation. For Q14, $|1/2+i\\sqrt 3/2|=1$ and argument $\\pi/3$, so it\'s the rotation $r(O, \\pi/3)$.' },
      { label: 'General rotation', latex: `z' - z_{\\Omega} = e^{i\\theta}(z - z_{\\Omega}) \\;\\Longleftrightarrow\\; r(\\Omega\\,;\\theta)`, description: 'Subtract center, multiply by $e^{i\\theta}$, add center back. Q14 has $\\Omega = O$ since the formula is $z\'=cz$ without an additive constant.' },
    ],
    theorems: [
      { name: 'De Moivre', statement: `(re^{i\\theta})^{n} = r^{n}\\,e^{in\\theta}`, keyIdea: 'Modulus to the power, argument multiplied by $n$. Reduce mod $2\\pi$ at the end.' },
      { name: 'Cube roots of unity', statement: `j = e^{i\\,2\\pi/3}.\\;\\text{Then } j^{3}=1,\\;\\bar j = j^{2},\\;1+j+j^{2}=0.`, keyIdea: 'Q10 and Q17 both rely on this. The 3 powers $1, j, j^{2}$ are vertices of an equilateral triangle on the unit circle.' },
      { name: 'Modulus from quadratic', statement: `\\text{If } z\\bar z = 1 \\text{ then } \\bar z = 1/z.\\;\\text{Combined with } z_{2} = \\bar z_{1} \\text{ for complex-conjugate roots, gives } z_{2} = 1/z_{1}.`, keyIdea: 'Q10 conclusion. Vieta also confirms: $z_{1}z_{2} = c/a = 1$.' },
    ],
    pitfalls: [
      `Argument quadrant: $-1-i$ is in Q3 with argument $-3\\pi/4$, NOT $\\pi/4$. Always verify which quadrant the complex number lives in.`,
      `For powers, take the argument modulo $2\\pi$ at the END, not in the middle. Reducing too early can introduce phase errors.`,
      `$|1+i| = \\sqrt 2$, NOT $2$. The modulus is the square root of $a^{2}+b^{2}$, not $a^{2}+b^{2}$ itself.`,
    ],
  },

  {
    id: 'integrals-2021',
    title: 'Integrals & Antiderivatives',
    icon: '∫',
    color: '#4CE87C',
    summary: `Three antiderivative patterns cover most concours integrals: $\\int u'/u = \\ln|u|$, $\\int u'\\,u^{n} = u^{n+1}/(n+1)$, $\\int u'\\,e^{u} = e^{u}$. Algebraic splitting (long division) BEFORE integrating often turns a hard integral into a sum of standard ones.`,
    formulas: [
      { label: 'Pattern 1 — log', latex: `\\int \\dfrac{u'(x)}{u(x)}\\,dx = \\ln|u(x)| + C`, description: 'Numerator is exactly the derivative of the denominator. Antiderivative is $\\ln$ of the absolute value of the denominator.' },
      { label: 'Pattern 2 — power', latex: `\\int u'(x)\\,u(x)^{n}\\,dx = \\dfrac{u(x)^{n+1}}{n+1} + C \\;,\\; n\\neq -1`, description: 'Exponent $n$ can be any real $\\neq -1$ (positive, fractional, negative). For Q19, $n=-4$.' },
      { label: 'Pattern 3 — exponential', latex: `\\int u'(x)\\,e^{u(x)}\\,dx = e^{u(x)} + C`, description: 'Match $u\'\\cdot e^{u}$ in the integrand. Adjust by a constant if necessary.' },
      { label: 'Algebraic split before integrating', latex: `\\dfrac{x-3}{x-2} = 1 - \\dfrac{1}{x-2} \\;\\Rightarrow\\; \\int = x - \\ln|x-2|`, description: 'When the rational integrand has numerator degree $\\geq$ denominator degree, divide first. The pieces are then standard antiderivatives.' },
      { label: 'Integration by parts', latex: `\\int_{a}^{b} u'\\,v\\,dx = \\bigl[u v\\bigr]_{a}^{b} - \\int_{a}^{b} u\\,v'\\,dx`, description: 'Choose $u\'$ as the part you can integrate; $v$ as the part that simplifies on differentiation (typically $\\ln$ or polynomial).' },
      { label: 'Antiderivative of $\\ln$', latex: `\\int \\ln(x)\\,dx = x\\ln(x) - x + C`, description: 'By parts with $u\'=1$, $v=\\ln x$. Useful for improper $\\int_{0}^{a}\\ln$ integrals.' },
    ],
    theorems: [
      { name: 'Linearity', statement: `\\int (\\alpha f + \\beta g)\\,dx = \\alpha \\int f\\,dx + \\beta \\int g\\,dx`, keyIdea: 'Pull constants out and split sums. Always.' },
      { name: 'FTC (fundamental theorem)', statement: `F'(x) = f(x) \\Rightarrow \\int_{a}^{b} f(x)\\,dx = F(b) - F(a)`, keyIdea: 'Find an antiderivative, evaluate at the bounds, subtract.' },
    ],
    pitfalls: [
      `For pattern 2, the new exponent is $n+1$ — don\'t forget to divide by it. Q19 uses $n=-4$ giving denominator $-3$ (which luckily cancels the $\\times 3$ outside).`,
      `For improper integrals like $\\int_{0}^{a} \\ln(x)\\,dx$, use $\\lim_{\\lambda \\to 0^{+}} \\int_{\\lambda}^{a}$ and apply $\\lim x\\ln x = 0$.`,
      `Algebraic splitting can introduce sign errors. Always verify by re-multiplying: $1 - 1/(x-2)$ must give back $(x-3)/(x-2)$ when combined.`,
    ],
  },
]
