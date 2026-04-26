'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Clock, ChevronLeft, ChevronRight, CheckCircle, XCircle, Eye, BookOpen, Target, Award, RotateCcw, Lightbulb, Lock, Sparkles } from 'lucide-react'
import MathRenderer from './MathRenderer'
import InlineMath from './InlineMath'
import QuestionVisualization from './visualizations/QuestionVisualization'
import type { ExamData, ExamQuestion } from '@/lib/exam-data'
import { TIPS_2024, getTipsData } from '@/lib/content-2024'

// ── Timer ────────────────────────────────────────────────────
function Timer({ totalSeconds }: { totalSeconds: number }) {
  const [remaining, setRemaining] = useState(totalSeconds)

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 0) return 0
        return r - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60
  const urgent = remaining < 300

  return (
    <div
      role="timer"
      aria-live="polite"
      className={`flex items-center gap-2.5 px-4 py-2 rounded-lg font-mono text-base font-bold transition-all duration-300 ${
        urgent ? 'timer-urgent' : 'timer-normal'
      }`}
    >
      <Clock size={16} />
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  )
}

// ── Progress Bar ──────────────────────────────────────────────
function ProgressBar({ answered, total }: { answered: number; total: number }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-xs text-muted">Progress</span>
        <span className="text-xs text-gold font-bold">{answered}/{total} answered</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          animate={{ width: `${(answered / total) * 100}%` }}
          transition={{ duration: 0.4 }}
          className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
        />
      </div>
    </div>
  )
}

// ── Related Tips ──────────────────────────────────────────────
function RelatedTips({ tipIds, year }: { tipIds: string[]; year: number }) {
  const allTips = getTipsData(year) ?? TIPS_2024
  const tips = tipIds.map(id => allTips.find(t => t.id === id)).filter(Boolean)
  if (tips.length === 0) return null
  return (
    <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-2 flex-wrap">
      <Lightbulb size={13} className="text-blue-accent shrink-0" />
      <span className="text-[0.65rem] font-bold tracking-widest uppercase text-blue-accent">
        Shortcut:
      </span>
      {tips.map(tip => (
        <Link
          key={tip!.id}
          href={`/concours/${year}/tips-tricks`}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[0.65rem] font-semibold no-underline transition-colors bg-blue-accent/10 border border-blue-accent/25 text-blue-accent hover:bg-blue-accent/15"
        >
          {tip!.title}
        </Link>
      ))}
    </div>
  )
}

// ── Locked Correction Placeholder ─────────────────────────────
function LockedCorrection({ correctId }: { correctId: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mt-6 rounded-2xl overflow-hidden border border-gold/25 relative"
    >
      {/* ambient gold gradient backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-70"
        style={{
          background:
            'linear-gradient(135deg, rgba(201,168,76,0.10), transparent 45%, rgba(229,199,107,0.06) 90%)',
        }}
      />
      <div className="relative bg-gradient-to-br from-[#0d0b08] via-[#100e0a] to-[#0a0807] px-7 py-8">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
            style={{
              background: 'linear-gradient(135deg, rgba(201,168,76,0.22), rgba(201,168,76,0.04))',
              borderColor: 'rgba(201,168,76,0.45)',
              boxShadow: '0 0 22px rgba(201,168,76,0.18)',
            }}
          >
            <Lock size={20} className="text-gold" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <Sparkles size={12} className="text-gold" />
              <span className="text-[0.66rem] font-extrabold tracking-[0.18em] uppercase text-gold">
                Premium Correction
              </span>
            </div>
            <h4 className="text-foreground font-display font-bold text-base leading-tight mb-1.5">
              The detailed correction is locked
            </h4>
            <p className="text-[0.82rem] leading-relaxed text-text-secondary mb-4">
              The correct answer is{' '}
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-green-accent/15 border border-green-accent/35 text-green-accent font-extrabold text-xs align-middle">
                {correctId}
              </span>
              . The full step-by-step walkthrough — including the table of variations, geometric reasoning,
              and shortcut tips — is reserved for premium access.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wide bg-gold/15 border border-gold/40 text-gold hover:bg-gold/22 transition-colors"
            >
              <Lock size={12} />
              Unlock the full correction
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ── Question Card ─────────────────────────────────────────────
interface QCardProps {
  q: ExamQuestion
  year: number
  selected: string | null
  revealed: boolean
  examLocked: boolean
  onSelect: (id: string) => void
  onReveal: () => void
}

// Matches @theme tokens: gold, blue-accent, purple-accent, green-accent
const CHOICE_COLORS: Record<string, string> = {
  A: '#C9A84C', B: '#4CADE8', C: '#9066EE', D: '#4CE87C', E: '#E89A4C',
}

function QuestionCard({ q, year, selected, revealed, examLocked, onSelect, onReveal }: QCardProps) {
  const correctId = q.choices.find(c => c.isCorrect)?.id
  const isCorrect = revealed && selected === correctId
  const lockedSetting = q.correctionLocked ?? examLocked
  // Bypass the lock when running on localhost — corrections stay visible during local development
  const [isLocalDev, setIsLocalDev] = useState(false)
  useEffect(() => {
    const h = window.location.hostname
    setIsLocalDev(
      h === 'localhost' ||
      h === '127.0.0.1' ||
      h === '::1' ||
      h.startsWith('192.168.') ||
      h.startsWith('10.') ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(h)
    )
  }, [])
  const isLocked = lockedSetting && !isLocalDev
  // On deployed site, hide the "Check answer" button for exam years 2018-2023
  // (forces visitors to use 2024/2025 free content); locally everything stays interactive.
  const hideCheckAnswer = !isLocalDev && year >= 2018 && year <= 2023

  return (
    <motion.div
      key={q.number}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      {/* Exercise badge */}
      <div className="flex items-center gap-2.5 mb-6 flex-wrap">
        <div className="badge-tag bg-gold-dim border border-gold/25 text-gold uppercase tracking-wide">
          Exercise {q.exercise}
        </div>
        <div className="badge-tag bg-blue-accent/10 border border-blue-accent/20 text-blue-accent">
          {q.topic}
        </div>
        <div className={`badge-dot ${
          q.difficulty === 'hard'
            ? 'text-danger'
            : q.difficulty === 'medium'
            ? 'text-gold'
            : 'text-green-accent'
        }`}>
          {q.difficulty}
        </div>
      </div>

      {/* Statement */}
      {q.statement && (
        <div className="px-5 py-4 bg-white/[0.03] rounded-lg border border-white/5 mb-5 text-text-secondary leading-relaxed">
          <MathRenderer latex={q.statement} block />
        </div>
      )}

      {/* Question */}
      <div className="p-6 bg-gold/4 rounded-xl border border-gold/12 mb-7">
        <div className="text-foreground text-sm mb-3 font-semibold tracking-wide">
          Q{q.number} —
        </div>
        <MathRenderer latex={q.question} block className="text-foreground" />
      </div>

      {/* Choices */}
      <div className="flex flex-col gap-2.5 mb-7">
        {q.choices.map((choice) => {
          const isSelected = selected === choice.id
          const color = CHOICE_COLORS[choice.id]
          const showResult = revealed && selected
          const isCorrectChoice = choice.isCorrect
          const isThisChoiceWrong = showResult && isSelected && !isCorrectChoice

          return (
            <motion.button
              key={choice.id}
              whileHover={!revealed ? { x: 4 } : {}}
              whileTap={!revealed ? { scale: 0.98 } : {}}
              onClick={() => !revealed && onSelect(choice.id)}
              className="flex items-center gap-4 px-5 py-3.5 rounded-lg text-left transition-all duration-200 w-full font-body cursor-pointer disabled:cursor-default focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
              disabled={revealed}
              style={{
                border: `1px solid ${
                  showResult && isCorrectChoice ? '#4CE87C40'
                  : showResult && isThisChoiceWrong ? '#E84C4C40'
                  : isSelected ? `${color}50`
                  : 'rgba(255,255,255,0.06)'
                }`,
                background: showResult && isCorrectChoice
                  ? 'rgba(76,232,124,0.08)'
                  : showResult && isThisChoiceWrong
                  ? 'rgba(232,76,76,0.08)'
                  : isSelected
                  ? `${color}12`
                  : 'rgba(13,18,32,0.4)',
              }}
            >
              {/* Letter */}
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-extrabold text-sm"
                style={{
                  background: showResult && isCorrectChoice
                    ? 'rgba(76,232,124,0.2)'
                    : showResult && isThisChoiceWrong
                    ? 'rgba(232,76,76,0.2)'
                    : isSelected
                    ? `${color}25`
                    : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${
                    showResult && isCorrectChoice ? '#4CE87C50'
                    : showResult && isThisChoiceWrong ? '#E84C4C50'
                    : isSelected ? `${color}60`
                    : 'rgba(255,255,255,0.1)'
                  }`,
                  color: showResult && isCorrectChoice ? '#4CE87C' : showResult && isThisChoiceWrong ? '#E84C4C' : isSelected ? color : '#8B8FA8',
                }}
              >
                {showResult && isCorrectChoice ? '✓' : showResult && isThisChoiceWrong ? '✗' : choice.id}
              </div>

              {/* Math */}
              <div
                className="flex-1 text-sm"
                style={{ color: isSelected ? '#F5F0E8' : (showResult && isCorrectChoice ? '#4CE87C' : '#C8C4BE') }}
              >
                <MathRenderer latex={choice.latex} />
                {showResult && isCorrectChoice && !isSelected && (
                  <motion.span
                    initial={{ opacity: 0, x: 6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.22 }}
                    className="inline-flex items-center gap-1 ml-2.5 px-2 py-0.5 rounded bg-green-accent/15 border border-green-accent/30 text-green-accent text-[0.65rem] font-bold tracking-wide uppercase align-middle whitespace-nowrap"
                  >
                    ← Correct answer
                  </motion.span>
                )}
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 flex-wrap items-center">
        <AnimatePresence>
          {!revealed && !hideCheckAnswer && (
            <motion.button
              key="verify-btn"
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.18 } }}
              onClick={onReveal}
              disabled={!selected}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-bold font-body tracking-wide transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none ${
                selected
                  ? 'bg-gold/15 border border-gold/35 text-gold'
                  : 'bg-white/[0.04] border border-white/[0.06] text-[#4A4E62] cursor-default'
              }`}
            >
              <Eye size={14} />
              Check answer
            </motion.button>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {revealed && (
            <motion.div
              key="result-pill"
              initial={{ opacity: 0, scale: 0.8, x: -8 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wide ${
                isCorrect ? 'state-correct' : 'state-wrong'
              }`}
            >
              {isCorrect
                ? <><CheckCircle size={13} /> Correct</>
                : <><XCircle size={13} /> Wrong</>
              }
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Result Announcement Banner */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            key="result-banner"
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-5 px-6 py-4 rounded-xl flex items-center gap-4 ${
              isCorrect
                ? 'bg-gradient-to-br from-green-accent/10 to-green-accent/4 border border-green-accent/25'
                : 'bg-gradient-to-br from-danger/10 to-danger/4 border border-danger/25'
            }`}
          >
            <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 ${
              isCorrect
                ? 'bg-green-accent/15 border-[1.5px] border-green-accent/40'
                : 'bg-danger/15 border-[1.5px] border-danger/40'
            }`}>
              {isCorrect
                ? <CheckCircle size={22} className="text-green-accent" />
                : <XCircle size={22} className="text-danger" />
              }
            </div>
            <div>
              <div className={`text-base font-extrabold font-body tracking-tight mb-0.5 ${
                isCorrect ? 'text-green-accent' : 'text-danger'
              }`}>
                {isCorrect ? 'Correct answer!' : 'Wrong answer'}
              </div>
              <div className="text-xs text-muted font-body">
                {isCorrect
                  ? 'Check the detailed correction below.'
                  : `The correct answer is ${correctId} — see the correction below.`
                }
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Solution – Timeline Stepper Design */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            {isLocked ? (
              <LockedCorrection correctId={correctId ?? '?'} />
            ) : (
            <div className="mt-6 rounded-2xl overflow-hidden panel-blue">
              {/* Panel Header */}
              <div className="px-6 py-4 panel-blue-header flex items-center gap-2">
                <BookOpen size={15} className="text-blue-accent" />
                <span className="text-blue-accent text-xs font-bold tracking-widest uppercase">
                  Detailed Correction
                </span>
              </div>

              {/* Steps Body — Timeline Layout */}
              <div className="p-6 pl-5 bg-surface/50">
                {q.solution.map((step, si) => {
                  const isFinal = si === q.solution.length - 1
                  return (
                    <div
                      key={si}
                      className="flex items-stretch"
                    >
                      {/* Left column: bubble + connector line */}
                      <div className="flex flex-col items-center w-11 shrink-0 mr-4">
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-xs font-extrabold ${
                            isFinal
                              ? 'bg-gold/18 border-[1.5px] border-gold/50 text-gold'
                              : 'bg-blue-accent/12 border-[1.5px] border-blue-accent/35 text-blue-accent'
                          }`}
                        >
                          {si + 1}
                        </div>
                        {!isFinal && (
                          <div className="flex-1 w-px bg-gradient-to-b from-blue-accent/25 to-blue-accent/6 mt-1 mb-1 min-h-[20px]" />
                        )}
                      </div>

                      {/* Right column: label + math */}
                      <div
                        className={`flex-1 overflow-auto ${!isFinal ? 'pb-6' : ''} ${
                          isFinal ? 'px-4 py-3.5 rounded-lg bg-gold/6 border border-gold/30' : ''
                        }`}
                      >
                        <div className={`text-xs font-bold tracking-tight mb-2 leading-relaxed ${
                          isFinal ? 'text-gold' : 'text-[#5B9EC4]'
                        }`}>
                          <InlineMath text={step.label} />
                        </div>
                        <MathRenderer
                          latex={step.latex}
                          block
                          style={{ color: isFinal ? 'var(--color-gold-light)' : 'var(--color-text-secondary)' }}
                        />
                      </div>
                    </div>
                  )
                })}

                {/* Interactive Visualization */}
                {q.visualization ? (
                  <div className="mt-6">
                    <QuestionVisualization viz={q.visualization} />
                  </div>
                ) : null}

                {/* Related Tips */}
                {q.relatedTips && q.relatedTips.length > 0 ? (
                  <RelatedTips tipIds={q.relatedTips} year={year} />
                ) : null}
              </div>
            </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ── Results Screen ────────────────────────────────────────────
function Results({ exam, answers, onRestart }: {
  exam: ExamData
  answers: Record<number, string>
  onRestart: () => void
}) {
  const total = exam.questions.length
  const correct = exam.questions.filter((q) => answers[q.number] === q.choices.find(c => c.isCorrect)?.id).length
  const score = Math.round((correct / total) * 100)
  const scoreColor = score >= 70 ? '#4CE87C' : score >= 50 ? '#C9A84C' : '#E84C4C'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center py-8"
    >
      <div
        className="w-[100px] h-[100px] rounded-full flex items-center justify-center mx-auto mb-6"
        style={{
          background: score >= 70 ? 'rgba(76,232,124,0.15)' : score >= 50 ? 'rgba(201,168,76,0.15)' : 'rgba(232,76,76,0.15)',
          border: `2px solid ${scoreColor}`,
        }}
      >
        <Award size={40} color={scoreColor} aria-hidden="true" />
      </div>
      <h2 className="text-foreground mb-2">Exam Completed!</h2>
      <div className="text-5xl font-display font-black mb-2" style={{ color: scoreColor }}>
        {score}%
      </div>
      <p className="text-muted mb-8">{correct}/{total} correct answers</p>
      <div className="flex gap-4 justify-center flex-wrap">
        <button onClick={onRestart} className="btn-gold flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none">
          <RotateCcw size={16} /> Restart Exam
        </button>
        <Link href={`/concours/${exam.year}`} className="btn-outline focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none">
          ← Back to {exam.year}
        </Link>
      </div>
    </motion.div>
  )
}

// ── Main ExamViewer ───────────────────────────────────────────
interface Props {
  exam: ExamData
}

export default function ExamViewer({ exam }: Props) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [revealed, setRevealed] = useState<Record<number, boolean>>({})
  const [submitted, setSubmitted] = useState(false)

  const q = exam.questions[current]
  const total = exam.questions.length
  const answered = Object.keys(answers).length

  const handleSelect = (id: string) => {
    setAnswers((prev) => ({ ...prev, [q.number]: id }))
  }
  const handleReveal = () => {
    setRevealed((prev) => ({ ...prev, [q.number]: true }))
  }
  const handleNext = () => {
    if (current < total - 1) setCurrent(c => c + 1)
    else setSubmitted(true)
  }
  const handlePrev = () => {
    if (current > 0) setCurrent(c => c - 1)
  }
  const handleRestart = () => {
    setAnswers({})
    setRevealed({})
    setSubmitted(false)
    setCurrent(0)
  }

  if (submitted) {
    return <Results exam={exam} answers={answers} onRestart={handleRestart} />
  }

  return (
    <div>
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="font-display text-xl font-bold text-foreground">
            Question <span className="text-gold">{current + 1}</span>
            <span className="text-muted text-sm font-body font-normal"> / {total}</span>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <Timer totalSeconds={exam.duration * 60} />
          <button
            onClick={handleRestart}
            title="Restart"
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] cursor-pointer text-muted hover:text-foreground hover:border-white/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar answered={answered} total={total} />

      {/* Question dots nav */}
      <div className="flex gap-1.5 mb-8 flex-wrap" role="tablist">
        {exam.questions.map((question, i) => {
          const isCurrent = i === current
          const isAnswered = !!answers[question.number]
          return (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={isCurrent}
              aria-label={`Q${i + 1}`}
              className={`w-9 h-9 rounded-lg text-xs font-bold font-body cursor-pointer transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none ${
                isCurrent
                  ? 'bg-gold/15 border border-gold/60 text-gold'
                  : isAnswered
                  ? 'bg-green-accent/8 border border-green-accent/30 text-green-accent'
                  : 'bg-surface/40 border border-white/[0.08] text-muted'
              }`}
            >
              Q{i + 1}
            </button>
          )
        })}
      </div>

      {/* Card */}
      <div className="glass-card p-8" role="tabpanel">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={q.number}
            q={q}
            year={exam.year}
            selected={answers[q.number] ?? null}
            revealed={!!revealed[q.number]}
            examLocked={!!exam.correctionLocked}
            onSelect={handleSelect}
            onReveal={handleReveal}
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6 flex-wrap gap-4">
        <button
          onClick={handlePrev}
          disabled={current === 0}
          aria-label="Previous question"
          className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg nav-btn-subtle font-body text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:outline-none ${
            current === 0 ? 'text-[#4A4E62] cursor-default' : 'text-muted cursor-pointer hover:text-foreground hover:border-white/10'
          }`}
        >
          <ChevronLeft size={16} /> Previous
        </button>

        <span className="text-muted text-xs">{answered} of {total} answered</span>

        {current < total - 1 ? (
          <button
            onClick={handleNext}
            aria-label="Next question"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg nav-btn-gold cursor-pointer font-body text-sm font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
          >
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            aria-label="Submit exam"
            className="btn-gold flex items-center gap-2 px-6 py-2.5 text-sm focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:outline-none"
          >
            <Target size={16} /> Submit Exam
          </button>
        )}
      </div>
    </div>
  )
}
