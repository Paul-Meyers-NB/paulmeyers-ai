export type OnePagerData = {
  name: string;
  businessName: string;
  website?: string;
  websites?: string[];
  email?: string;
  phone?: string;
  yearsOfBusiness: number;
  cityOfResidence: string;
  yearsInCity?: number;
  previousJobs: string;
  spouse?: string;
  children?: string;
  totalChildren?: number;
  pets?: string;
  burningDesire: string;
  somethingNoOneKnows: string;
  keyToSuccess: string;
  gains: {
    goals: string[];
    accomplishments: string[];
    interests: string[];
    networks: string[];
    skills: string[];
  };
  tops: {
    topProduct: string;
    topProblemSolved: string;
    idealReferral: string;
    idealPartner: string;
    favoriteBniStory: string;
  };
};

export const PAUL_ONE_PAGER: OnePagerData = {
  name: 'Paul Meyers',
  businessName: 'PM Consulting Inc.',
  website: 'pmconsulting.ca',
  email: 'paul@pmconsulting.ca',
  phone: '(705) 491-2627',
  websites: [
    'pmconsulting.ca',
    'paulmeyers.ai',
    'contractormarketingengine.ca',
    'ai-employee.ca',
  ],
  yearsOfBusiness: 40,
  cityOfResidence: 'North Bay, Ontario, Canada',
  yearsInCity: 52,
  previousJobs:
    '19 years as General Manager of North Bay Toyota, running sales, service, parts, and finance for one of the largest employers in the city. Today Founder and CEO of PM Consulting Inc., helping contractors and home service businesses run systemized, accountable operations with AI doing the heavy lifting.',
  spouse: 'Wife of 38 years',
  totalChildren: 3,
  burningDesire:
    'Help 100 contractors cross seven figures in annual revenue before I retire, and prove that you can build a world-class business from North Bay without ever leaving North Bay. When a local contractor wins, their family wins, their crew wins, and this town wins. That is the compounding I am chasing.',
  somethingNoOneKnows:
    'I am a card-carrying introvert. Every networking room, every stage, every handshake is a deliberate choice, not an instinct. But a long time ago I learned that what I wanted on the other side of the room was always worth the discomfort of crossing it.',
  keyToSuccess:
    'Do what you said you were going to do, when you said you were going to do it, every single time. Follow-up is a skill most business owners underestimate. Consistency is the shortcut everyone has access to and almost nobody takes. I have never met a business problem that could not be solved by doing the boring thing one more time than the other guy was willing to.',
  gains: {
    goals: [
      'Hit $1M in annual revenue at PM Consulting Inc. by December 31, 2026',
      'Help 100 contractors in Ontario cross their own $1M mark using the Contractor Marketing Engine',
      'Speak on 12 stages in 2026 teaching contractors how AI changes home service businesses',
      'Be present for every chapter of my 3 kids building lives they are proud of',
      'Give back to North Bay by mentoring 5 local business owners a year at no charge',
    ],
    accomplishments: [
      'Married to my wife for 38 years, raised 3 children into adults I actually like spending time with',
      'Founded PM Consulting Inc. and scaled it to seven-figure trajectory serving contractors across Canada',
      'Averaged $37,000 per month in revenue over the first 8 months of 2026',
      'Co-host business growth seminars with Rick Harris of Work Boot Consulting',
      'Built paulmeyers.ai AI Action Plan Quiz, a productized intake tool driving qualified leads',
      '19 years as General Manager of North Bay Toyota, leading teams through multiple recessions',
    ],
    interests: [
      'Fishing Lake Nipissing',
      'Time with my wife and 3 kids',
      'Coffee on the dock before the world wakes up',
      'Reading books on marketing, psychology, and how decisions get made',
      'Testing every new AI tool the minute it ships',
      'Helping fellow North Bay business owners grow',
    ],
    networks: [
      'BNI North Bay Nipissing Network, active member',
      'Co-host with Rick Harris of Work Boot Consulting, ongoing business growth seminars',
      'Private online communities for agency owners and contractor marketers',
      'Contractor-focused marketing masterminds across North America',
    ],
    skills: [
      'Marketing systems for contractors and home service businesses',
      'AI implementation for small business, without the hype',
      'Google and AI search visibility (SEO, AEO, AIO)',
      'CRM and workflow automation',
      'Website conversion optimization',
      'Public speaking and workshop facilitation',
      'Coaching and mentoring business owners',
    ],
  },
  tops: {
    topProduct:
      'The Contractor Marketing Engine. One system. Five pillars: AI Call Answer and Booking, Local SEO plus AI search visibility, automated Review Engine, conversion-focused Website, and CRM with Automated Follow-Up.',
    topProblemSolved:
      'Contractors are the best in town at what they do. Nobody taught them marketing, automation, or how to run a business that does not collapse the day they take a vacation. We give them their evenings back, their weekends back, and a pipeline that fills itself.',
    idealReferral:
      'Plumbers, electricians, HVAC, roofers, painters, landscapers, general contractors, and home service businesses doing $500K to $5M in annual revenue, who are missing calls, quoting at night, or frustrated with agency contracts that never delivered. Listen for these phrases: "I keep missing calls," "I am drowning in quotes," "my phone used to ring more."',
    idealPartner:
      'BNI members whose clients are contractors and home service owners: accountants, bookkeepers, commercial lenders, business insurance brokers, equipment suppliers, commercial real estate agents, sign and wrap companies, payroll providers. When you meet a contractor complaining about marketing, phone, or pipeline, introduce them to me.',
    favoriteBniStory:
      'This chapter introduced me to Rick Harris of Work Boot Consulting. That single handshake has turned into co-hosted seminars, shared stages, and more referrals than I can count in both directions. Beyond the revenue that partnership has driven, BNI has given me a real peer, someone who gets it, someone who actually wants me to win. You cannot find that at a conference, a mastermind, or a LinkedIn message. The trust in this room is the shortcut my business needed, and Rick Harris is living proof.',
  },
};
