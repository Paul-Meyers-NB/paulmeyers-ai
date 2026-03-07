'use client';

import Image from 'next/image';
import { AiHeroBackground } from '@/components/ui/ai-hero-background';
import GradientText from '@/components/ui/gradient-text';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function ChatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>
  );
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function CpuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <AiHeroBackground />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Status badge */}
          <div className="opacity-0 animate-fade-in-up mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-mono">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <GradientText
              colors={["#3b82f6", "#8b5cf6", "#06b6d4", "#3b82f6"]}
              animationSpeed={6}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              Paul Meyers
            </GradientText>
          </h1>

          {/* Subtitle */}
          <p className="opacity-0 animate-fade-in-up animation-delay-400 text-xl md:text-2xl text-gray-400 mb-4 font-light">
            AI Solutions Architect
          </p>

          <p className="opacity-0 animate-fade-in-up animation-delay-600 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12">
            I build AI systems that answer your phones, chat with your website visitors,
            and book appointments — so you never miss a lead.
          </p>

          {/* CTA Buttons */}
          <div className="opacity-0 animate-fade-in-up animation-delay-800 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#demo"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300 animate-pulse-glow"
            >
              Try a Live Demo
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 border border-gray-700 hover:border-gray-600 font-semibold transition-all duration-300"
            >
              See What I Build
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services / What I Build */}
      <section id="services" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider uppercase">
              What I Build
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI That Works{" "}
              <GradientText className="text-4xl md:text-5xl font-bold">
                While You Sleep
              </GradientText>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Every missed call is a missed customer. I build AI systems that ensure you never
              lose another lead — 24 hours a day, 7 days a week.
            </p>
          </div>

          <BentoGrid className="lg:grid-cols-3">
            <BentoCard
              name="Voice AI"
              Icon={PhoneIcon}
              description="An AI receptionist that answers your business phone, understands your services, and books appointments — in your voice, with your knowledge. Callers can't tell the difference."
              cta="Try it live"
              href="#demo"
              className="md:col-span-1"
            />
            <BentoCard
              name="Conversational AI"
              Icon={ChatIcon}
              description="A smart chatbot on your website that engages visitors, answers questions about your services, captures their info, and books them in — instantly. No forms. No waiting."
              cta="Try it live"
              href="#demo"
              className="md:col-span-1"
            />
            <BentoCard
              name="Speed to Lead"
              Icon={BoltIcon}
              description="When a new lead comes in, my system responds in under 60 seconds — via text, email, or both. The fastest response wins the job. Every time."
              className="md:col-span-1"
            />
            <BentoCard
              name="Reviews AI"
              Icon={StarIcon}
              description="Automatically request reviews after every job, respond to them intelligently, and build your reputation on autopilot. More 5-star reviews = more trust = more leads."
              className="md:col-span-1"
            />
            <BentoCard
              name="Database Reactivation"
              Icon={DatabaseIcon}
              description="Your past customers and old leads are sitting in a database doing nothing. I build AI campaigns that re-engage them and turn cold contacts into booked jobs."
              className="md:col-span-1"
            />
            <BentoCard
              name="AI Productivity Systems"
              Icon={CpuIcon}
              description="Beyond marketing — I build AI-powered operational systems using Claude, GPT, Manus, and other LLMs. Automations, workflows, and AI employees that run your back office."
              className="md:col-span-1"
            />
          </BentoGrid>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider uppercase">
            Try It Yourself
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience{" "}
            <GradientText className="text-4xl md:text-5xl font-bold">
              AI in Action
            </GradientText>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12">
            Call the number below and talk to an AI assistant I built. It sounds human,
            it knows the business, and it can book you an appointment. Takes 30 seconds.
          </p>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 font-mono text-sm">AI Assistant Online</span>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">
                (705) 996-6548
              </p>
              <p className="text-gray-500 mb-8">
                Call now — the AI will answer. See for yourself.
              </p>
              <a
                href="tel:+17059966548"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Paul Meyers - About Section */}
      <section id="about" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo side */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/50">
                <Image
                  src="/paul-meyers.jpg"
                  alt="Paul Meyers — AI Solutions Architect"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Content side */}
            <div>
              <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider uppercase">
                About
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                Meet Paul Meyers
              </h2>
              <p className="text-xl text-blue-400 mb-8">
                Your AI Solutions Architect
              </p>

              <div className="space-y-5 text-gray-400 leading-relaxed">
                <p>
                  I&apos;ve spent over 15 years helping businesses stop chasing leads and
                  start attracting them. After building and scaling multiple businesses,
                  I discovered what actually works: <strong className="text-white">systems that
                  convert strangers into paying customers.</strong>
                </p>
                <p>
                  Today, I build AI-powered systems that do what used to take a whole team —
                  answer every call, respond to every inquiry, and book every appointment.
                  From voice AI and chatbots to full automation workflows, I use the latest
                  tools including Claude, GPT, Manus, and custom LLM integrations to create
                  AI employees that work 24/7.
                </p>
                <p>
                  <strong className="text-white">I don&apos;t just set up software.</strong> I architect
                  complete AI systems — from lead capture to conversion to operations — that
                  make your business run smarter, faster, and without dropping the ball.
                </p>
              </div>

              {/* Credential badges */}
              <div className="grid grid-cols-2 gap-4 mt-10">
                {[
                  "15+ Years Experience",
                  "North Bay, ON Based",
                  "AI & LLM Expert",
                  "No Long-Term Contracts",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                      <CheckIcon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-16 px-6 border-y border-gray-800/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "24/7", label: "AI Availability" },
            { number: "<60s", label: "Lead Response Time" },
            { number: "100%", label: "Calls Answered" },
            { number: "0", label: "Leads Lost" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-blue-400 font-mono mb-1">
                {stat.number}
              </p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Put{" "}
            <GradientText className="text-4xl md:text-5xl font-bold">
              AI to Work
            </GradientText>
            ?
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto">
            I&apos;ll build a free, personalized AI demo for your business.
            Your company name, your services, your voice. Book a quick call and let&apos;s talk.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/z6ZfrQILqiGHcMfwmUCO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-lg font-semibold transition-all duration-300 animate-pulse-glow"
          >
            Book a Free Discovery Call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-bold text-lg">Paul Meyers</p>
            <p className="text-gray-500 text-sm">AI Solutions Architect</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-1 text-sm text-gray-500">
            <div className="flex gap-4">
              <a href="tel:+17054912627" className="hover:text-blue-400 transition-colors">(705) 491-2627</a>
              <span className="text-gray-700">|</span>
              <a href="mailto:paul@pmconsulting.ca" className="hover:text-blue-400 transition-colors">paul@pmconsulting.ca</a>
            </div>
            <div className="flex gap-4 text-blue-400">
              <a href="https://contractormarketingengine.ca" className="hover:text-blue-300 transition-colors">contractormarketingengine.ca</a>
              <span className="text-gray-700">|</span>
              <a href="https://ai-employee.ca" className="hover:text-blue-300 transition-colors">ai-employee.ca</a>
              <span className="text-gray-700">|</span>
              <a href="https://pmconsulting.ca" className="hover:text-blue-300 transition-colors">PM Consulting Inc.</a>
            </div>
            <p className="text-gray-600 mt-2">&copy; {new Date().getFullYear()} PM Consulting Inc.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
