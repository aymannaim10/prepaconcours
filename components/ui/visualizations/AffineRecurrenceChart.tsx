'use client'

import { useMemo, useState } from 'react'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  Label,
} from 'recharts'
import { motion } from 'framer-motion'
import InlineMath from '../InlineMath'

type Props = {
  a: number
  b: number
  u0: number
  steps?: number
  title?: string
  description?: string
}

// Format a number for inline LaTeX (keeps minus sign visible, trims trailing zero)
function fmtLatex(v: number): string {
  const s = Number.isInteger(v) ? v.toFixed(0) : v.toFixed(2).replace(/\.?0+$/, '')
  return s.replace('-', '-')
}

export default function AffineRecurrenceChart({
  a: aInit,
  b: bInit,
  u0: u0Init,
  steps = 14,
  title = 'Affine recurrence sequence',
  description,
}: Props) {
  const [a, setA] = useState<number>(aInit)
  const [b, setB] = useState<number>(bInit)
  const [u0, setU0] = useState<number>(u0Init)

  // Fixed point L = b / (1 - a) when a ≠ 1
  const L = useMemo(() => (Math.abs(1 - a) < 1e-9 ? NaN : b / (1 - a)), [a, b])

  // Convergence status — text uses InlineMath ($...$) for math variables
  const status = useMemo(() => {
    if (!Number.isFinite(L)) return { text: `Diverges`, color: '#E84C4C' }
    const absA = Math.abs(a)
    if (absA < 1) {
      return a < 0
        ? { text: `Oscillates → $L$`, color: '#4CADE8' }
        : { text: `Converges → $L$`, color: '#4CE87C' }
    }
    if (absA === 1) return { text: `Stationary / cycles`, color: '#C9A84C' }
    return { text: `Diverges`, color: '#E84C4C' }
  }, [a, L])

  const data = useMemo(() => {
    const pts: { n: number; un: number }[] = []
    let u = u0
    for (let n = 0; n <= steps; n++) {
      pts.push({ n, un: Number.isFinite(u) ? Number(u.toFixed(4)) : 0 })
      u = a * u + b
    }
    return pts
  }, [a, b, u0, steps])

  const yDomain = useMemo<[number, number]>(() => {
    const vals = data.map((d) => d.un)
    if (Number.isFinite(L)) vals.push(L)
    const min = Math.min(...vals)
    const max = Math.max(...vals)
    const pad = Math.max(0.5, (max - min) * 0.15)
    return [Math.floor(min - pad), Math.ceil(max + pad)]
  }, [data, L])

  // Build the recurrence formula for the caption: u_{n+1} = a·u_n + b
  const formulaLatex = useMemo(() => {
    const aStr = fmtLatex(a)
    const bStr = fmtLatex(b)
    const aTerm =
      a === 0
        ? ''
        : a === 1
          ? 'u_n'
          : a === -1
            ? '-u_n'
            : `${aStr}\\,u_n`
    const bTerm =
      b === 0 ? '' : b > 0 && aTerm !== '' ? `+ ${bStr}` : bStr
    const rhs = aTerm || bTerm ? `${aTerm}${aTerm && b > 0 ? ' ' : ''}${bTerm}` : '0'
    return `u_{n+1} = ${rhs},\\; u_0 = ${fmtLatex(u0)}`
  }, [a, b, u0])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-[rgba(76,173,232,0.15)] bg-[#0B1120] p-5 md:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="min-w-0">
          <h4 className="text-[15px] md:text-base font-bold text-foreground tracking-tight">
            {title}
          </h4>
          {/* Current recurrence (live) */}
          <div className="mt-1.5 text-[13px] md:text-sm text-[color:var(--color-gold-light)]">
            <InlineMath text={`$${formulaLatex}$`} />
          </div>
          {description ? (
            <div className="text-xs text-[color:var(--color-muted)] mt-2 leading-relaxed max-w-2xl">
              <InlineMath text={description} />
            </div>
          ) : null}
        </div>
        <div className="flex gap-3 shrink-0 self-start">
          <div className="text-right">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[color:var(--color-muted)]">
              Status
            </div>
            <div
              className="text-xs md:text-sm font-bold tabular-nums"
              style={{ color: status.color }}
            >
              <InlineMath text={status.text} />
            </div>
          </div>
          <div className="w-px bg-[rgba(255,255,255,0.08)]" />
          <div className="text-right">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[color:var(--color-muted)]">
              <InlineMath text={`Fixed point ($L$)`} />
            </div>
            <div className="text-xs md:text-sm font-bold text-[color:var(--color-gold)] tabular-nums">
              {Number.isFinite(L) ? L.toFixed(2) : '—'}
            </div>
          </div>
        </div>
      </div>

      {/* Axis captions */}
      <div className="flex items-center justify-between px-1 mb-1">
        <span className="text-[11px] text-[color:var(--color-muted)]">
          <InlineMath text={`Value $u_n$`} />
        </span>
        <span className="text-[11px] text-[color:var(--color-muted)]">
          <InlineMath text={`Step $n$ →`} />
        </span>
      </div>

      {/* Chart */}
      <div className="h-[280px] md:h-[320px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 12, right: 28, bottom: 8, left: 8 }}>
            <CartesianGrid
              stroke="rgba(255,255,255,0.06)"
              strokeDasharray="3 3"
              vertical={true}
            />
            <XAxis
              dataKey="n"
              stroke="rgba(255,255,255,0.35)"
              tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
            />
            <YAxis
              domain={yDomain}
              stroke="rgba(255,255,255,0.35)"
              tick={{ fill: 'rgba(255,255,255,0.55)', fontSize: 11 }}
              tickLine={false}
              axisLine={{ stroke: 'rgba(255,255,255,0.15)' }}
              allowDecimals
              width={52}
            />
            {Number.isFinite(L) ? (
              <ReferenceLine
                y={L}
                stroke="#E8C96A"
                strokeDasharray="4 4"
                strokeWidth={1.25}
              >
                <Label
                  // Unicode italic 𝐿 keeps it visually italic inside SVG
                  value={`𝐿 ≈ ${L.toFixed(2)}`}
                  position="insideTopRight"
                  offset={6}
                  style={{ fill: '#E8C96A', fontSize: 11, fontWeight: 700 }}
                />
              </ReferenceLine>
            ) : null}
            <Tooltip
              cursor={{ stroke: 'rgba(76,173,232,0.35)', strokeWidth: 1 }}
              contentStyle={{
                background: '#0D1220',
                border: '1px solid rgba(76,173,232,0.35)',
                borderRadius: 8,
                fontSize: 12,
              }}
              labelStyle={{ color: '#E8C96A', fontWeight: 700 }}
              itemStyle={{ color: '#C8C4BE' }}
              formatter={(v) => [typeof v === 'number' ? v.toFixed(4) : String(v), '𝑢ₙ']}
              labelFormatter={(l) => `𝑛 = ${l}`}
            />
            <Line
              type="monotone"
              dataKey="un"
              stroke="#4CADE8"
              strokeWidth={2}
              dot={{ r: 4, fill: '#0D1220', stroke: '#4CADE8', strokeWidth: 2 }}
              activeDot={{ r: 6, fill: '#4CADE8' }}
              isAnimationActive
              animationDuration={450}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Sliders */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SliderRow
          latexLabel={`Coefficient $a$`}
          value={a}
          onChange={setA}
          min={-1.5}
          max={1.5}
          step={0.1}
          format={(v) => v.toFixed(1)}
        />
        <SliderRow
          latexLabel={`Constant $b$`}
          value={b}
          onChange={setB}
          min={-10}
          max={10}
          step={0.5}
          format={(v) => v.toFixed(1)}
        />
        <SliderRow
          latexLabel={`Initial value $u_0$`}
          value={u0}
          onChange={setU0}
          min={-10}
          max={10}
          step={0.5}
          format={(v) => v.toFixed(1)}
        />
      </div>

      {/* Reset */}
      <div className="flex justify-end mt-3">
        <button
          type="button"
          onClick={() => {
            setA(aInit)
            setB(bInit)
            setU0(u0Init)
          }}
          className="text-[11px] font-bold tracking-wider uppercase text-[color:var(--color-blue-accent)] hover:text-[color:var(--color-gold)] transition-colors"
        >
          Reset to question values
        </button>
      </div>
    </motion.div>
  )
}

function SliderRow({
  latexLabel,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  latexLabel: string
  value: number
  onChange: (v: number) => void
  min: number
  max: number
  step: number
  format: (v: number) => string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-[12px] text-[color:var(--color-muted)]">
          <InlineMath text={latexLabel} />
        </span>
        <span className="px-2 py-[2px] rounded-md bg-[#131929] border border-[rgba(255,255,255,0.08)] text-[11px] font-bold text-[color:var(--color-gold-light)] tabular-nums">
          {format(value)}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="affine-slider w-full"
      />
      <style jsx>{`
        .affine-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(
            to right,
            #4cade8 0%,
            #4cade8 ${pct}%,
            rgba(255, 255, 255, 0.08) ${pct}%,
            rgba(255, 255, 255, 0.08) 100%
          );
          outline: none;
        }
        .affine-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #4cade8;
          border: 2px solid #0b1120;
          cursor: pointer;
          box-shadow: 0 0 0 1px rgba(76, 173, 232, 0.4);
          transition: transform 0.15s ease;
        }
        .affine-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .affine-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #4cade8;
          border: 2px solid #0b1120;
          cursor: pointer;
          box-shadow: 0 0 0 1px rgba(76, 173, 232, 0.4);
        }
      `}</style>
    </div>
  )
}
