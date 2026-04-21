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
          <div className="flex flex-wrap justify-center gap-2 mb-8">
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

          <p className="text-gray-500 font-mono text-xs uppercase tracking-wider mb-3 text-center">
            Follow Along
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/meyerspaul',
                path: 'M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/originalpaulmeyers/',
                path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
              },
              {
                label: 'TikTok',
                href: 'https://www.tiktok.com/@digitalprofessional',
                path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@PAULMEYERSNorthBay',
                path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/paulmeyersnorthbay/',
                path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
              {
                label: 'X',
                href: 'https://x.com/paulmeyersnb',
                path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                title={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900/60 border border-gray-800 text-gray-300 hover:text-white hover:border-blue-500/40 hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
