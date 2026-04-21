import { AiHeroBackground } from '@/components/ui/ai-hero-background';
import GradientText from '@/components/ui/gradient-text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free BNI Member One-Pager Template | Paul Meyers',
  description:
    'Build a professional 3-page personal profile for your next BNI 1-to-1. Free download. Built by Paul Meyers, PM Consulting Inc.',
};

const PAUL_PDF = '/one-pager/paul-meyers-bni-one-pager.pdf';

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

function CheckDot() {
  return (
    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/30">
      <svg
        className="h-3 w-3 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function OnePagerPage() {
  return (
    <main className="relative min-h-screen overflow-hidden flex flex-col">
      <AiHeroBackground />

      <header className="relative z-10 py-10 px-6 text-center">
        <a
          href="/"
          className="inline-block mb-8 text-sm text-gray-500 hover:text-blue-400 transition-colors font-mono"
        >
          &larr; Back to paulmeyers.ai
        </a>
        <p className="text-blue-400 font-mono text-xs tracking-wider uppercase mb-4">
          Free Template, No Gate
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
          <GradientText
            colors={['#3b82f6', '#8b5cf6', '#06b6d4', '#3b82f6']}
            animationSpeed={6}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
          >
            The BNI One-Pager
          </GradientText>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          The 3-page profile every BNI member should hand out in 1-to-1s. Bio, GAINS, and TOPS on one clean PDF. Download mine, then build your own.
        </p>
      </header>

      <section className="relative z-10 flex-1 px-6 pb-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-gray-900/60 border border-gray-800/60 backdrop-blur-md p-8 md:p-10 flex flex-col">
            <p className="text-blue-400 font-mono text-xs tracking-wider uppercase mb-3">
              See the Format
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Download Paul&rsquo;s One-Pager
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 flex-1">
              See exactly how the 3-page format comes together. Personal Bio, GAINS, and TOPS, all in one professional handout. Steal the structure, swap in your story.
            </p>
            <a
              href={PAUL_PDF}
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
            >
              <DownloadIcon className="w-5 h-5" />
              Download Paul&rsquo;s PDF
            </a>
            <p className="text-gray-600 text-xs font-mono mt-4 text-center">
              3 pages. 1.3 MB. Instant download.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/20 p-8 md:p-10 flex flex-col">
            <p className="text-blue-300 font-mono text-xs tracking-wider uppercase mb-3">
              Build Your Own
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Generate a Custom One-Pager
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6 flex-1">
              Fill in a short form with your bio, GAINS, and TOPS. We generate a branded 3-page PDF you can download and hand out at your next BNI meeting.
            </p>
            <button
              type="button"
              disabled
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gray-800 text-gray-500 font-semibold cursor-not-allowed"
            >
              Launching Soon
            </button>
            <p className="text-gray-500 text-xs font-mono mt-4 text-center">
              Interactive builder ships next week.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            What&rsquo;s inside the one-pager
          </h2>
          <div className="space-y-6">
            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <CheckDot />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Page 1 &ndash; Personal Bio
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Name, business, years in business, previous jobs, family, burning desire, something no one knows about you, key to success. The human side of your profile. This is where trust gets built.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <CheckDot />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Page 2 &ndash; GAINS
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Goals, Accomplishments, Interests, Networks, Skills. The BNI framework. Chapter members use this to find common ground and spot referral opportunities in 1-to-1s.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-gray-900/60 border border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <CheckDot />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Page 3 &ndash; TOPS
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Top Product, Top Problem Solved, Ideal Referral, Ideal Partner, Favorite BNI Story. The referral engine. This is the page your chapter hands to prospects when passing you a lead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-16 rounded-2xl bg-gray-900/60 border border-gray-800/60 backdrop-blur-md p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Why I built this
          </h2>
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
            I am a member of BNI North Bay Nipissing Network. After years of watching members show up to 1-to-1s with half-finished profiles or nothing at all, I decided to build the template I wish every new member got on day one. Use mine, remix it, share it with your chapter. The stronger your profile, the better the referrals flow.
          </p>
          <p className="text-gray-500 font-mono text-xs mt-6">
            Paul Meyers &middot; PM Consulting Inc. &middot; North Bay, Ontario
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-10 rounded-2xl bg-gray-900/60 border border-gray-800/60 backdrop-blur-md p-8 md:p-10">
          <p className="text-blue-400 font-mono text-xs tracking-wider uppercase mb-5 text-center">
            Get In Touch
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <a
              href="mailto:paul@pmconsulting.ca"
              className="flex items-center gap-3 rounded-xl bg-gray-900/60 border border-gray-800 px-5 py-4 hover:border-blue-500/40 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex-shrink-0">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-gray-500 font-mono text-xs uppercase tracking-wider">Email</p>
                <p className="text-white font-medium text-sm truncate">paul@pmconsulting.ca</p>
              </div>
            </a>
            <a
              href="tel:+17054912627"
              className="flex items-center gap-3 rounded-xl bg-gray-900/60 border border-gray-800 px-5 py-4 hover:border-blue-500/40 transition-colors"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 flex-shrink-0">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-gray-500 font-mono text-xs uppercase tracking-wider">Phone</p>
                <p className="text-white font-medium text-sm">(705) 491-2627</p>
              </div>
            </a>
          </div>

          <p className="text-gray-500 font-mono text-xs uppercase tracking-wider mb-3 text-center">
            Around the Web
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'pmconsulting.ca',
              'paulmeyers.ai',
              'contractormarketingengine.ca',
              'ai-employee.ca',
            ].map((site) => (
              <a
                key={site}
                href={`https://${site}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full bg-gray-900/60 border border-gray-800 text-gray-300 text-xs font-mono hover:border-blue-500/40 hover:text-blue-300 transition-colors"
              >
                {site}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
