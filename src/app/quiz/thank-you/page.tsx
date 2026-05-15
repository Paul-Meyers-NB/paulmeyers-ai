import { AiHeroBackground } from '@/components/ui/ai-hero-background';
import GradientText from '@/components/ui/gradient-text';
import { buildActionPlan, type QuizAnswers } from '@/lib/quiz-data';

const STRIPE_LINK = 'https://buy.stripe.com/8x27sM5BF3N6eO93CF0Fi08';

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function asString(v: string | string[] | undefined): string {
  if (Array.isArray(v)) return v[0] || '';
  return v || '';
}

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const firstName = asString(params.firstName).trim();
  const answers: QuizAnswers = {
    ai_usage: asString(params.ai_usage),
    business_size: asString(params.business_size),
    challenge: asString(params.challenge),
    outcome: asString(params.outcome),
    time_sink: asString(params.time_sink),
  };

  const hasAnswers = answers.challenge || answers.outcome || answers.time_sink;
  const plan = hasAnswers ? buildActionPlan(answers) : null;

  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      <AiHeroBackground />

      <section className="relative z-10 flex-1 py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/"
            className="inline-block mb-8 text-sm text-gray-500 hover:text-blue-400 transition-colors font-mono"
          >
            &larr; Back to paulmeyers.ai
          </a>

          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-green-400 font-mono text-sm tracking-wider uppercase">
              Action plan ready
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
            {firstName ? `Check your inbox, ${firstName}.` : 'Check your inbox.'}
          </h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
            Your personalized AI action plan is on its way. While you wait, here are your top
            three quick wins. Save this page or bookmark it.
          </p>

          {plan && (
            <>
              <div className="rounded-2xl bg-gray-900/60 border border-gray-800/60 backdrop-blur-md p-8 md:p-10 mb-8">
                <p className="text-blue-400 font-mono text-xs tracking-wider uppercase mb-3">
                  Your 3 Quick Wins
                </p>
                <p className="text-gray-300 leading-relaxed mb-2">{plan.hook}</p>
                <p className="text-gray-300 leading-relaxed mb-8">{plan.challengeResponse}</p>

                <div className="space-y-4">
                  {plan.recommendations.map((r, i) => (
                    <div
                      key={r.title}
                      className="rounded-xl bg-gray-900/60 border border-gray-800 p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono text-sm font-semibold">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">{r.title}</h3>
                          <p className="text-gray-400 leading-relaxed mb-4">{r.why}</p>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono text-gray-500">
                            <span>
                              <strong className="text-gray-400">Setup:</strong> {r.setup}
                            </span>
                            <span>
                              <strong className="text-gray-400">Cost:</strong> {r.cost}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* CTA block */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to go{' '}
              <GradientText className="text-2xl md:text-3xl font-bold">deeper</GradientText>?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
              The $997 AI Assessment is a 45-minute deep-dive call, a full Impact vs. Effort
              Matrix for your entire business, a 4-day implementation plan, and a 30-minute
              review call. Report in 48 hours. No upsell pressure.
            </p>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              Get Your $997 Assessment
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
