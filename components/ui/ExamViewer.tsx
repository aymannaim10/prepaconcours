'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Clock, ChevronLeft, ChevronRight, CheckCircle, XCircle, Eye, EyeOff, BookOpen, Target, Award, RotateCcw } from 'lucide-react'
import MathRenderer from './MathRenderer'
import type { ExamData, ExamQuestion } from '@/lib/exam-data'

// ── Timer ────────────────────────────────────────────────────
function Timer({ totalSeconds }: { totalSeconds: number }) {
  const [remaining, setRemaining] = useState(totalSeconds)

  useEffect(() => {
    if (remaining <= 0) return
    const id = setInterval(() => setRemaining((r) => r - 1), 1000)
    return () => clearInterval(id)
  }, [remaining])

  const mins = Math.floor(remaining / 60)
  const secs = remaining % 60
  const pct = (remaining / totalSeconds) * 100
  const urgent = remaining < 300

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '0.5rem 1rem',
      borderRadius: '10px',
      background: urgent ? 'rgba(232,76,76,0.12)' : 'rgba(201,168,76,0.1)',
      border: `1px solid ${urgent ? 'rgba(232,76,76,0.3)' : 'rgba(201,168,76,0.25)'}`,
      color: urgent ? '#E84C4C' : '#C9A84C',
      fontFamily: 'monospace',
      fontSize: '1.05rem',
      fontWeight: 700,
      transition: 'all 0.3s',
    }}>
      <Clock size={16} />
      {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
    </div>
  )
}

// ── Progress Bar ──────────────────────────────────────────────
function ProgressBar({ answered, total }: { answered: number; total: number }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.8rem', color: '#8B8FA8' }}>Progress</span>
        <span style={{ fontSize: '0.8rem', color: '#C9A84C', fontWeight: 700 }}>
          {answered}/{total} answered
        </span>
      </div>
      <div style={{ height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <motion.div
          animate={{ width: `${(answered / total) * 100}%` }}
          transition={{ duration: 0.4 }}
          style={{ height: '100%', borderRadius: '3px', background: 'linear-gradient(90deg, #C9A84C, #E8C96A)' }}
        />
      </div>
    </div>
  )
}

// ── Question Card ─────────────────────────────────────────────
interface QCardProps {
  q: ExamQuestion
  qIndex: number
  selected: string | null
  revealed: boolean
  onSelect: (id: string) => void
  onReveal: () => void
}

function QuestionCard({ q, qIndex, selected, revealed, onSelect, onReveal }: QCardProps) {
  const correctId = q.choices.find(c => c.isCorrect)?.id

  const choiceColors: Record<string, string> = {
    A: '#C9A84C', B: '#4CADE8', C: '#7C4CE8', D: '#4CE87C',
  }

  return (
    <motion.div
      key={q.number}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.35 }}
    >
      {/* Exercise badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        <div style={{
          padding: '4px 14px',
          borderRadius: '20px',
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.25)',
          color: '#C9A84C',
          fontSize: '0.72rem',
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>Exercice {q.exercise}</div>
        <div style={{
          padding: '4px 12px',
          borderRadius: '20px',
          background: 'rgba(76,173,232,0.1)',
          border: '1px solid rgba(76,173,232,0.2)',
          color: '#4CADE8',
          fontSize: '0.72rem',
          fontWeight: 600,
        }}>{q.topic}</div>
        <div style={{
          padding: '3px 10px',
          borderRadius: '20px',
          background: q.difficulty === 'hard' ? 'rgba(232,76,76,0.1)' : q.difficulty === 'medium' ? 'rgba(201,168,76,0.08)' : 'rgba(76,232,124,0.1)',
          color: q.difficulty === 'hard' ? '#E84C4C' : q.difficulty === 'medium' ? '#C9A84C' : '#4CE87C',
          fontSize: '0.68rem',
          fontWeight: 700,
          textTransform: 'capitalize',
        }}>{q.difficulty}</div>
      </div>

      {/* Statement */}
      {q.statement && (
        <div style={{
          padding: '1rem 1.25rem',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.05)',
          marginBottom: '1.25rem',
          color: '#C8C4BE',
          fontSize: '0.9rem',
          lineHeight: 1.7,
        }}>
          <MathRenderer latex={q.statement} block />
        </div>
      )}

      {/* Question */}
      <div style={{
        padding: '1.5rem',
        background: 'rgba(201,168,76,0.04)',
        borderRadius: '12px',
        border: '1px solid rgba(201,168,76,0.12)',
        marginBottom: '1.75rem',
      }}>
        <div style={{ color: '#F5F0E8', fontSize: '0.85rem', marginBottom: '0.75rem', fontWeight: 600, letterSpacing: '0.04em' }}>
          Q{q.number} —
        </div>
        <MathRenderer latex={q.question} block style={{ color: '#F5F0E8' }} />
      </div>

      {/* Choices */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
        {q.choices.map((choice) => {
          const isSelected = selected === choice.id
          const color = choiceColors[choice.id]
          const showResult = revealed && selected
          const isCorrectChoice = choice.isCorrect
          const isWrong = showResult && isSelected && !isCorrectChoice

          return (
            <motion.button
              key={choice.id}
              whileHover={!revealed ? { x: 4 } : {}}
              whileTap={!revealed ? { scale: 0.98 } : {}}
              onClick={() => !revealed && onSelect(choice.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '0.9rem 1.25rem',
                borderRadius: '10px',
                border: `1px solid ${
                  showResult && isCorrectChoice ? '#4CE87C40'
                  : showResult && isWrong ? '#E84C4C40'
                  : isSelected ? `${color}50`
                  : 'rgba(255,255,255,0.06)'
                }`,
                background: showResult && isCorrectChoice
                  ? 'rgba(76,232,124,0.08)'
                  : showResult && isWrong
                  ? 'rgba(232,76,76,0.08)'
                  : isSelected
                  ? `${color}12`
                  : 'rgba(13,18,32,0.4)',
                cursor: revealed ? 'default' : 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
                width: '100%',
                fontFamily: 'var(--font-body)',
              }}
            >
              {/* Letter */}
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: showResult && isCorrectChoice
                  ? 'rgba(76,232,124,0.2)'
                  : showResult && isWrong
                  ? 'rgba(232,76,76,0.2)'
                  : isSelected
                  ? `${color}25`
                  : 'rgba(255,255,255,0.05)',
                border: `1px solid ${
                  showResult && isCorrectChoice ? '#4CE87C50'
                  : showResult && isWrong ? '#E84C4C50'
                  : isSelected ? `${color}60`
                  : 'rgba(255,255,255,0.1)'
                }`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                color: showResult && isCorrectChoice ? '#4CE87C' : showResult && isWrong ? '#E84C4C' : isSelected ? color : '#8B8FA8',
                fontWeight: 800,
                fontSize: '0.85rem',
              }}>
                {showResult && isCorrectChoice ? '✓' : showResult && isWrong ? '✗' : choice.id}
              </div>

              {/* Math */}
              <div style={{ flex: 1, color: isSelected ? '#F5F0E8' : '#C8C4BE', fontSize: '0.95rem' }}>
                <MathRenderer latex={choice.latex} />
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Action buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          onClick={onReveal}
          disabled={!selected}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0.6rem 1.25rem',
            borderRadius: '8px',
            background: selected && !revealed ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.04)',
            border: `1px solid ${selected && !revealed ? 'rgba(201,168,76,0.35)' : 'rgba(255,255,255,0.06)'}`,
            color: selected && !revealed ? '#C9A84C' : '#4A4E62',
            fontSize: '0.8rem',
            fontWeight: 600,
            cursor: selected && !revealed ? 'pointer' : 'default',
            fontFamily: 'var(--font-body)',
            transition: 'all 0.2s',
          }}
        >
          {revealed ? <EyeOff size={14} /> : <Eye size={14} />}
          {revealed ? 'Answer revealed' : 'Check answer'}
        </button>
      </div>

      {/* Solution – Premium Step-by-Step Design */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              marginTop: '1.5rem',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(76,173,232,0.2)',
            }}>
              {/* Gradient Header */}
              <div style={{
                padding: '1rem 1.5rem',
                background: 'linear-gradient(135deg, rgba(76,173,232,0.15) 0%, rgba(124,76,232,0.1) 100%)',
                borderBottom: '1px solid rgba(76,173,232,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  color: '#4CADE8', fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                }}>
                  <BookOpen size={14} />
                  Correction détaillée
                </div>
                <div style={{
                  padding: '3px 10px', borderRadius: '6px',
                  background: selected === correctId ? 'rgba(76,232,124,0.15)' : 'rgba(232,76,76,0.15)',
                  border: `1px solid ${selected === correctId ? '#4CE87C40' : '#E84C4C40'}`,
                  color: selected === correctId ? '#4CE87C' : '#E84C4C',
                  fontSize: '0.7rem', fontWeight: 700,
                }}>
                  {selected === correctId ? '✓ Bonne réponse' : '✗ Mauvaise réponse — la bonne est ' + correctId}
                </div>
              </div>

              {/* Steps Body */}
              <div style={{
                padding: '1.5rem',
                background: 'rgba(13,18,32,0.5)',
              }}>
                {(() => {
                  const rawSteps: string[] = q.solution
                  return rawSteps.map((step: string, si: number) => (
                    <motion.div
                      key={si}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: si * 0.12, duration: 0.35 }}
                      style={{
                        display: 'flex', gap: '1rem', alignItems: 'flex-start',
                        marginBottom: si < rawSteps.length - 1 ? '1rem' : 0,
                        paddingBottom: si < rawSteps.length - 1 ? '1rem' : 0,
                        borderBottom: si < rawSteps.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none',
                      }}
                    >
                      {/* Step number */}
                      <div style={{
                        width: '26px', height: '26px', borderRadius: '50%',
                        background: si === rawSteps.length - 1 ? 'rgba(201,168,76,0.2)' : 'rgba(76,173,232,0.12)',
                        border: `1px solid ${si === rawSteps.length - 1 ? '#C9A84C50' : '#4CADE830'}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: '2px',
                        color: si === rawSteps.length - 1 ? '#C9A84C' : '#4CADE8',
                        fontSize: '0.7rem', fontWeight: 800,
                      }}>{si + 1}</div>
                      {/* Step content */}
                      <div style={{
                        flex: 1, overflow: 'auto',
                        padding: si === rawSteps.length - 1 ? '0.5rem 0.75rem' : undefined,
                        borderRadius: si === rawSteps.length - 1 ? '8px' : undefined,
                        background: si === rawSteps.length - 1 ? 'rgba(201,168,76,0.06)' : undefined,
                        borderLeft: si === rawSteps.length - 1 ? '3px solid rgba(201,168,76,0.3)' : undefined,
                      }}>
                        <MathRenderer latex={step} block style={{ color: '#C8C4BE', lineHeight: 1.8 }} />
                      </div>
                    </motion.div>
                  ))
                })()}
              </div>
            </div>
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ textAlign: 'center', padding: '2rem 0' }}
    >
      <div style={{
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: score >= 70
          ? 'rgba(76,232,124,0.15)'
          : score >= 50
          ? 'rgba(201,168,76,0.15)'
          : 'rgba(232,76,76,0.15)',
        border: `2px solid ${score >= 70 ? '#4CE87C' : score >= 50 ? '#C9A84C' : '#E84C4C'}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem',
      }}>
        <Award size={40} color={score >= 70 ? '#4CE87C' : score >= 50 ? '#C9A84C' : '#E84C4C'} />
      </div>
      <h2 style={{ color: '#F5F0E8', marginBottom: '0.5rem' }}>Exam Completed!</h2>
      <div style={{
        fontSize: '3rem',
        fontFamily: 'var(--font-playfair)',
        fontWeight: 900,
        color: score >= 70 ? '#4CE87C' : score >= 50 ? '#C9A84C' : '#E84C4C',
        marginBottom: '0.5rem',
      }}>{score}%</div>
      <p style={{ color: '#8B8FA8', marginBottom: '2rem' }}>
        {correct}/{total} correct answers
      </p>
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button onClick={onRestart} className="btn-gold" style={{ gap: '8px', display: 'flex', alignItems: 'center' }}>
          <RotateCcw size={16} /> Restart Exam
        </button>
        <Link href="/concours/2024" className="btn-outline">
          ← Back to 2024
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
  const [mode, setMode] = useState<'practice' | 'exam'>('practice')

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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '2rem',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            fontFamily: 'var(--font-playfair)',
            fontSize: '1.2rem',
            fontWeight: 700,
            color: '#F5F0E8',
          }}>
            Question <span style={{ color: '#C9A84C' }}>{current + 1}</span>
            <span style={{ color: '#8B8FA8', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 400 }}>
              {' '}/ {total}
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Timer totalSeconds={exam.duration * 60} />
          <button onClick={handleRestart} title="Restart" style={{
            padding: '0.5rem',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            cursor: 'pointer',
            color: '#8B8FA8',
          }}>
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar answered={answered} total={total} />

      {/* Question dots nav */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {exam.questions.map((question, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              border: `1px solid ${
                i === current
                  ? 'rgba(201,168,76,0.6)'
                  : answers[question.number]
                  ? 'rgba(76,232,124,0.3)'
                  : 'rgba(255,255,255,0.08)'
              }`,
              background: i === current
                ? 'rgba(201,168,76,0.15)'
                : answers[question.number]
                ? 'rgba(76,232,124,0.08)'
                : 'rgba(13,18,32,0.4)',
              color: i === current ? '#C9A84C' : answers[question.number] ? '#4CE87C' : '#8B8FA8',
              fontSize: '0.8rem',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              transition: 'all 0.2s',
            }}
          >
            Q{i + 1}
          </button>
        ))}
      </div>

      {/* Card */}
      <div className="glass-card" style={{ padding: '2rem' }}>
        <AnimatePresence mode="wait">
          <QuestionCard
            key={q.number}
            q={q}
            qIndex={current}
            selected={answers[q.number] ?? null}
            revealed={!!revealed[q.number]}
            onSelect={handleSelect}
            onReveal={handleReveal}
          />
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '1.5rem',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <button
          onClick={handlePrev}
          disabled={current === 0}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '0.7rem 1.25rem', borderRadius: '8px',
            background: 'rgba(13,18,32,0.4)',
            border: '1px solid rgba(255,255,255,0.06)',
            color: current === 0 ? '#4A4E62' : '#8B8FA8',
            cursor: current === 0 ? 'default' : 'pointer',
            fontFamily: 'var(--font-body)', fontSize: '0.875rem',
            transition: 'all 0.2s',
          }}
        >
          <ChevronLeft size={16} /> Previous
        </button>

        <span style={{ color: '#8B8FA8', fontSize: '0.8rem' }}>
          {answered} of {total} answered
        </span>

        {current < total - 1 ? (
          <button
            onClick={handleNext}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '0.7rem 1.25rem', borderRadius: '8px',
              background: 'rgba(201,168,76,0.12)',
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#C9A84C', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.875rem',
              fontWeight: 600, transition: 'all 0.2s',
            }}
          >
            Next <ChevronRight size={16} />
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="btn-gold"
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.875rem' }}
          >
            <Target size={16} /> Submit Exam
          </button>
        )}
      </div>
    </div>
  )
}
