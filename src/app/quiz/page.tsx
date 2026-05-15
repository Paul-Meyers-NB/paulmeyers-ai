'use client';

import { useEffect, useState, useRef } from 'react';
import { AiHeroBackground } from '@/components/ui/ai-hero-background';
import GradientText from '@/components/ui/gradient-text';
import { QUIZ_QUESTIONS, type QuizAnswers } from '@/lib/quiz-data';

const STRIPE_LINK = 'https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08';
const EXIT_INTENT_STORAGE_KEY = 'paulmeyers_quiz_exit_shown_v1';

type Step =
  | { kind: 'question'; index: number }
  | { kind: 'disqualified' }
  | { kind: 'email' };

export default function QuizPage() {
  const [step, setStep] = useState<Step>({ kind: 'question', index: 0 });
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [showExitPopup, setShowExitPopup] = useState(false);
  const exitShownRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (sessionStorage.getItem(EXIT_INTENT_STORAGE_KEY)) {
      exitShownRef.current = true;
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (exitShownRef.current) return;
      if (e.clientY > 0) return;
      if (step.kind === 'question' && step.index === 0 && !answers[QUIZ_QUESTIONS[0].id]) return;

      exitShownRef.current = true;
      sessionStorage.setItem(EXIT_INTENT_STORAGE_KEY, '1');
      setShowExitPopup(true);
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [step, answers]);

  function selectOption(questionId: string, optionId: string, disqualify?: boolean) {
    const nextAnswers = { ...answers, [questionId]: optionId };
    setAnswers(nextAnswers);

    if (disqualify) {
      setStep({ kind: 'disqualified' });
      return;
    }

    if (step.kind === 'question') {
      const nextIndex = step.index + 1;
      if (nextIndex >= QUIZ_QUESTIONS.length) {
        setStep({ kind: 'email' });
      } else {
        setStep({ kind: 'question', index: nextIndex });
      }
    }
  }

  function goBack() {
    if (step.kind === 'email') {
      setStep({ kind: 'question', index: QUIZ_QUESTIONS.length - 1 });
    } else if (step.kind === 'question' && step.index > 0) {
      setStep({ kind: 'question', index: step.index - 1 });
    } else if (step.kind === 'disqualified') {
      setStep({ kind: 'question', index: 1 });
    }
  }

  const totalSteps = QUIZ_QUESTIONS.length;
  const progressPct =
    step.kind === 'question'
      ? ((step.index + 1) / (totalSteps + 1)) * 100
      : step.kind === 'email'
      ? 100
      : 0;

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      <AiHeroBackground />

      <header className="relative z-10 py-10 px-6 text-center">
        <a href="/" className="inline-block mb-8 text-sm text-gray-500 hover:text-blue-400 transition-colors font-mono">
          &larr; Back to paulmeyers.ai
        </a>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          <GradientText
            colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#3b82f6"]}
            animationSpeed={6}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            Get Your Free AI Action Plan
          </GradientText>
        </h1>
        <p className="text-gray-400 text-lg">
          2 minutes. 5 questions. Custom recommendations for your contracting business.
        </p>
      </header>

      <section className="relative z-10 flex-1 flex items-start justify-center px-6 pb-24">
        <div className="w-full max-w-3xl">
          {(step.kind === 'question' || step.kind === 'email') && (
            <div className="mb-2">
              <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          )}

          <div className="relative bg-gray-900/60 border border-gray-800/60 backdrop-blur-md rounded-2xl p-8 md:p-12 min-h-[480px]">
            {step.kind === 'question' && (
              <QuestionView
                index={step.index}
                total={totalSteps}
                answers={answers}
                onSelect={selectOption}
                onBack={step.index > 0 ? goBack : undefined}
              />
            )}

            {step.kind === 'email' && (
              <EmailView
                firstName={firstName}
                lastName={lastName}
                email={email}
                answers={answers}
                onFirstName={setFirstName}
                onLastName={setLastName}
                onEmail={setEmail}
                onBack={goBack}
              />
            )}

            {step.kind === 'disqualified' && <DisqualifiedView onBack={goBack} />}
          </div>

          <p className="text-center text-gray-600 text-xs mt-6 font-mono">
            We will never share your email. One action plan, one follow-up. That is it.
          </p>
        </div>
      </section>

      {showExitPopup && <ExitIntentPopup onClose={() => setShowExitPopup(false)} />}
    </main>
  );
}

function QuestionView({
  index,
  total,
  answers,
  onSelect,
  onBack,
}: {
  index: number;
  total: number;
  answers: QuizAnswers;
  onSelect: (qId: string, oId: string, disqualify?: boolean) => void;
  onBack?: () => void;
}) {
  const q = QUIZ_QUESTIONS[index];
  const selected = answers[q.id];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <span />
        )}
        <span className="text-blue-400 font-mono text-sm">
          {index + 1} / {total}
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-10 leading-tight">
        {q.question}
      </h2>

      <div className="space-y-3">
        {q.options.map((opt) => {
          const isSelected = selected === opt.id;
          return (
            <button
              key={opt.id}
              type="button"
              onClick={() => onSelect(q.id, opt.id, opt.disqualify)}
              className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                isSelected
                  ? 'bg-blue-500/10 border-blue-500/50 text-white'
                  : 'bg-gray-900/40 border-gray-800 text-gray-300 hover:border-blue-500/30 hover:bg-gray-800/60'
              }`}
            >
              <span
                className={`flex-shrink-0 w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                  isSelected ? 'border-blue-400 bg-blue-500' : 'border-gray-600'
                }`}
              >
                {isSelected && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span className="leading-snug">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function EmailView({
  firstName,
  lastName,
  email,
  answers,
  onFirstName,
  onLastName,
  onEmail,
  onBack,
}: {
  firstName: string;
  lastName: string;
  email: string;
  answers: QuizAnswers;
  onFirstName: (v: string) => void;
  onLastName: (v: string) => void;
  onEmail: (v: string) => void;
  onBack: () => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 text-sm transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
        <span className="text-blue-400 font-mono text-sm">Final step</span>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Your personalized AI action plan is ready.
        </h2>
        <p className="text-gray-400 text-lg">
          Where should we send it? You will have it in your inbox in under 60 seconds.
        </p>
      </div>

      <form
        method="POST"
        action="/api/quiz-submit"
        className="max-w-xl mx-auto space-y-4"
      >
        {/* Hidden inputs carry the 5 quiz answers so GHL captures them as custom fields */}
        {QUIZ_QUESTIONS.map((q) => (
          <input key={q.id} type="hidden" name={q.id} value={answers[q.id] || ''} />
        ))}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-400 text-sm mb-2 font-mono">First name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={firstName}
              onChange={(e) => onFirstName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Paul"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-400 text-sm mb-2 font-mono">Last name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={lastName}
              onChange={(e) => onLastName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
              placeholder="Meyers"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-400 text-sm mb-2 font-mono">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => onEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-gray-900/60 border border-gray-800 text-white placeholder-gray-600 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            placeholder="you@yourcompany.com"
          />
        </div>

        <input
          type="submit"
          value="Get My Action Plan"
          className="w-full px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg transition-colors mt-4 cursor-pointer"
        />
      </form>
    </div>
  );
}

function DisqualifiedView({ onBack }: { onBack: () => void }) {
  return (
    <div className="text-center py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Appreciate you checking us out.
      </h2>
      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
        This audit is built specifically for contractors and home service businesses. If you know
        one who would benefit, we would love a referral. In the meantime, feel free to browse the
        rest of the site.
      </p>
      <div className="flex gap-4 justify-center">
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 rounded-xl bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 font-semibold transition-colors"
        >
          Change my answer
        </button>
        <a
          href="/"
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
        >
          Back to homepage
        </a>
      </div>
    </div>
  );
}

function ExitIntentPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="relative max-w-lg w-full bg-gray-900 border border-gray-800 rounded-2xl p-8 md:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <p className="text-blue-400 font-mono text-xs tracking-wider uppercase mb-3">
          Before you go
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Want a custom AI action plan?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Finish the 2-minute quiz to get your personalized recommendations, or skip ahead and
          book your $997 AI Assessment for hands-on guidance.
        </p>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
          >
            Keep taking the quiz
          </button>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 font-semibold transition-colors text-center"
          >
            Get Your $997 Assessment
          </a>
        </div>
      </div>
    </div>
  );
}
