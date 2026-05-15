export type QuizOption = {
  id: string;
  label: string;
  disqualify?: boolean;
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'ai_usage',
    question: 'Are you regularly using AI in your contracting business?',
    options: [
      { id: 'yes', label: "Yes. I'm using AI tools like ChatGPT or Claude at least a few times a week." },
      { id: 'no', label: "No. I've played around with AI but it hasn't become part of my routine yet." },
    ],
  },
  {
    id: 'business_size',
    question: "What's your current business situation?",
    options: [
      { id: 'solo', label: "I'm a solo contractor (just me)" },
      { id: 'small_crew', label: 'I run a small crew (1 to 10 on the team)' },
      { id: 'growing', label: 'I run a growing company (10+ on the team)' },
      { id: 'not_trades', label: "I'm not in the trades or home services", disqualify: true },
    ],
  },
  {
    id: 'challenge',
    question: "What's your #1 AI challenge right now?",
    options: [
      { id: 'overwhelmed', label: "I'm excited about AI but overwhelmed by where to start" },
      { id: 'missed_leads', label: "I'm losing leads to missed calls and slow follow-up" },
      { id: 'no_time', label: "I don't have time to figure out where AI fits in my business" },
    ],
  },
  {
    id: 'outcome',
    question: "What's the #1 outcome you want AI to deliver?",
    options: [
      { id: 'more_revenue', label: 'More leads and more revenue' },
      { id: 'fewer_missed', label: 'Fewer missed calls and faster lead response' },
      { id: 'save_time', label: 'Save 10 hours a week on admin and follow-up' },
    ],
  },
  {
    id: 'time_sink',
    question: 'Which area of your business eats up the most of your time?',
    options: [
      { id: 'phone_followup', label: 'Phone calls and lead follow-up' },
      { id: 'quoting', label: 'Quoting, estimates, and proposals' },
      { id: 'marketing', label: 'Marketing, content, and reviews' },
      { id: 'admin', label: 'Admin work (scheduling, invoicing, data entry)' },
    ],
  },
];

export type QuizAnswers = Record<string, string>;

type Recommendation = {
  title: string;
  why: string;
  setup: string;
  cost: string;
};

const TIME_SINK_PLAYS: Record<string, Recommendation[]> = {
  phone_followup: [
    {
      title: 'Voice AI Receptionist',
      why: 'Answers every call in under 2 rings, books appointments, captures callback info. No more missed calls going to voicemail.',
      setup: '2 to 4 hours',
      cost: '$97 to $297 per month',
    },
    {
      title: 'Speed-to-Lead SMS Agent',
      why: 'Texts every new website lead within 60 seconds. The fastest response wins the job 8 out of 10 times.',
      setup: '1 hour',
      cost: '$49 per month',
    },
    {
      title: 'Fathom (meeting notes)',
      why: 'Auto-records discovery calls and sends a transcript plus action items to your inbox. Never take notes again.',
      setup: '10 minutes',
      cost: 'Free tier available',
    },
  ],
  quoting: [
    {
      title: 'AI Estimate Generator (custom GPT)',
      why: 'Trained on your pricing and scope language. Turn a site visit note into a clean written quote in 5 minutes.',
      setup: '3 to 4 hours (one-time build)',
      cost: '$20 per month (ChatGPT Plus)',
    },
    {
      title: 'Fathom for site walks',
      why: 'Record the walkthrough on your phone. Fathom transcribes and pulls out scope items automatically.',
      setup: '10 minutes',
      cost: 'Free tier available',
    },
    {
      title: 'DocuSign + Stripe integration',
      why: 'Send the quote, collect the signature, take the deposit, all in one link. Cuts 2 days off the close.',
      setup: '2 hours',
      cost: '$10 to $25 per month',
    },
  ],
  marketing: [
    {
      title: 'Reviews AI (auto review requests)',
      why: 'Texts every customer after the job is done, asks for a review, responds intelligently. Your Google rank climbs on autopilot.',
      setup: '2 hours',
      cost: '$49 to $97 per month',
    },
    {
      title: 'Canva Magic Design + Brand Kit',
      why: 'Your logo, colors, and fonts locked in. Generate on-brand social posts and flyers in seconds.',
      setup: '1 hour',
      cost: '$15 per month',
    },
    {
      title: 'Content Repurposing GPT',
      why: 'Turn one 10-minute video into a week of social posts, a blog, and 3 email subjects. You film once, post everywhere.',
      setup: '2 hours',
      cost: '$20 per month',
    },
  ],
  admin: [
    {
      title: 'SaneBox (email triage)',
      why: 'Sorts your inbox automatically. Urgent stays up top, newsletters go to a folder, everything else waits for you.',
      setup: '15 minutes',
      cost: '$7 per month',
    },
    {
      title: 'Calendly + Auto-Reschedule',
      why: 'Clients self-book based on your real availability. Reschedules handled automatically. Kills 90% of the email ping-pong.',
      setup: '30 minutes',
      cost: 'Free tier available',
    },
    {
      title: 'Zapier Invoice Automation',
      why: 'Job completed in your CRM triggers an invoice in QuickBooks. Zero manual data entry between systems.',
      setup: '2 hours',
      cost: '$30 per month',
    },
  ],
};

const OUTCOME_HOOK: Record<string, string> = {
  more_revenue: "You said you want more leads and more revenue. That means every missed call and slow follow-up is costing you money right now.",
  fewer_missed: "You said fewer missed calls and faster lead response is the goal. The average contractor misses 20% of calls during working hours, and 100% after 5pm.",
  save_time: "You said you want to reclaim 10 hours a week. That's a whole workday. Every week.",
};

const CHALLENGE_HOOK: Record<string, string> = {
  overwhelmed: "The overwhelm is real. There are 5,000+ AI tools out there. 95% of them are noise. The 3 below are the ones that move the needle for contractors.",
  missed_leads: "Missed calls and slow follow-up are the #1 hidden revenue leak in this industry. These 3 tools plug that leak this week.",
  no_time: "You're right. You don't have time to learn AI. So these 3 tools are the ones that pay back the learning curve in under a week.",
};

export type ActionPlan = {
  hook: string;
  challengeResponse: string;
  recommendations: Recommendation[];
};

export function buildActionPlan(answers: QuizAnswers): ActionPlan {
  const outcome = answers.outcome || 'save_time';
  const challenge = answers.challenge || 'overwhelmed';
  const timeSink = answers.time_sink || 'admin';

  return {
    hook: OUTCOME_HOOK[outcome] || OUTCOME_HOOK.save_time,
    challengeResponse: CHALLENGE_HOOK[challenge] || CHALLENGE_HOOK.overwhelmed,
    recommendations: TIME_SINK_PLAYS[timeSink] || TIME_SINK_PLAYS.admin,
  };
}

export function isDisqualified(answers: QuizAnswers): boolean {
  return QUIZ_QUESTIONS.some((q) => {
    const chosen = answers[q.id];
    return q.options.some((o) => o.id === chosen && o.disqualify);
  });
}

export function labelFor(questionId: string, optionId: string): string {
  const q = QUIZ_QUESTIONS.find((q) => q.id === questionId);
  return q?.options.find((o) => o.id === optionId)?.label || optionId;
}
