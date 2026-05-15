import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Meyers | AI Solutions Architect",
  description:
    "I build Zero Lead Loss AI systems — voice assistants, chatbots, and automation that capture every lead 24/7 so nothing falls through the cracks. Based in North Bay, Ontario.",
  keywords: [
    "AI",
    "voice assistant",
    "chatbot",
    "automation",
    "Paul Meyers",
    "contractor marketing",
    "lead generation",
  ],
  openGraph: {
    title: "Paul Meyers | AI Solutions Architect",
    description:
      "I build AI systems that answer phones, chat with visitors, and book appointments — so you never miss a lead.",
    url: "https://paulmeyers.ai",
    siteName: "Paul Meyers AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Meyers | AI Solutions Architect",
    description:
      "I build AI systems that answer phones, chat with visitors, and book appointments — so you never miss a lead.",
  },
};

const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://paulmeyers.ai/#person",
      name: "Paul Meyers",
      givenName: "Paul",
      familyName: "Meyers",
      url: "https://paulmeyers.ai",
      image: "https://paulmeyers.ai/paul-meyers.jpg",
      jobTitle: "AI Solutions Architect",
      description:
        "AI solutions architect specializing in voice AI, chatbots, automation systems, and Zero Lead Loss systems for businesses. Over 15 years of experience helping companies capture every lead 24/7.",
      email: "paul@pmconsulting.ca",
      telephone: "+1-705-491-2627",
      sameAs: [
        "https://paulmeyers.ca",
        "https://paulmeyers.ai",
        "https://contractormarketingengine.ca",
        "https://ai-employee.ca",
        "https://pmconsulting.ca",
        "https://www.linkedin.com/in/paulmeyers/",
      ],
      worksFor: { "@id": "https://paulmeyers.ai/#organization" },
      founder: { "@id": "https://paulmeyers.ai/#organization" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "559 Galt Street",
        addressLocality: "North Bay",
        addressRegion: "Ontario",
        postalCode: "P1B 5M6",
        addressCountry: "CA",
      },
      knowsAbout: [
        "Artificial Intelligence",
        "Voice AI",
        "Conversational AI",
        "Chatbots",
        "Marketing Automation",
        "Lead Generation",
        "Large Language Models",
        "Claude AI",
        "GPT",
        "GoHighLevel",
        "Business Automation",
        "Contractor Marketing",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://paulmeyers.ai/#organization",
      name: "PM Consulting Inc.",
      legalName: "PM Consulting Inc.",
      url: "https://pmconsulting.ca",
      logo: "https://paulmeyers.ai/paul-meyers.jpg",
      founder: { "@id": "https://paulmeyers.ai/#person" },
      brand: [
        {
          "@type": "Brand",
          name: "Contractor Marketing Engine",
          url: "https://contractormarketingengine.ca",
        },
        {
          "@type": "Brand",
          name: "AI Employee",
          url: "https://ai-employee.ca",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "559 Galt Street",
        addressLocality: "North Bay",
        addressRegion: "Ontario",
        postalCode: "P1B 5M6",
        addressCountry: "CA",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-705-491-2627",
        email: "paul@pmconsulting.ca",
        contactType: "sales",
        availableLanguage: "English",
      },
      sameAs: [
        "https://pmconsulting.ca",
        "https://contractormarketingengine.ca",
        "https://ai-employee.ca",
        "https://paulmeyers.ca",
        "https://paulmeyers.ai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://paulmeyers.ai/#website",
      url: "https://paulmeyers.ai",
      name: "Paul Meyers AI",
      description:
        "AI authority hub — voice AI demos, chatbot showcases, automation systems, and AI productivity tools by Paul Meyers.",
      publisher: { "@id": "https://paulmeyers.ai/#person" },
    },
    {
      "@type": "WebPage",
      "@id": "https://paulmeyers.ai/#webpage",
      url: "https://paulmeyers.ai",
      name: "Paul Meyers | AI Solutions Architect",
      description:
        "I build Zero Lead Loss AI systems — voice assistants, chatbots, and automation that capture every lead 24/7 so nothing falls through the cracks.",
      isPartOf: { "@id": "https://paulmeyers.ai/#website" },
      about: { "@id": "https://paulmeyers.ai/#person" },
    },
    {
      "@type": "Service",
      "@id": "https://paulmeyers.ai/#voice-ai",
      name: "Voice AI",
      description:
        "AI receptionist that answers business phones, understands services, and books appointments 24/7.",
      provider: { "@id": "https://paulmeyers.ai/#organization" },
      serviceType: "AI Voice Assistant",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
    {
      "@type": "Service",
      "@id": "https://paulmeyers.ai/#conversational-ai",
      name: "Conversational AI",
      description:
        "Smart website chatbot that engages visitors, answers questions, captures leads, and books appointments instantly.",
      provider: { "@id": "https://paulmeyers.ai/#organization" },
      serviceType: "AI Chatbot",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
    {
      "@type": "Service",
      "@id": "https://paulmeyers.ai/#speed-to-lead",
      name: "Speed to Lead",
      description:
        "Automated lead response system that contacts new leads in under 60 seconds via text, email, or both.",
      provider: { "@id": "https://paulmeyers.ai/#organization" },
      serviceType: "Lead Response Automation",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
    {
      "@type": "Service",
      "@id": "https://paulmeyers.ai/#reviews-ai",
      name: "Reviews AI",
      description:
        "Automated review generation and intelligent response system that builds online reputation on autopilot.",
      provider: { "@id": "https://paulmeyers.ai/#organization" },
      serviceType: "Reputation Management",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
    {
      "@type": "Service",
      "@id": "https://paulmeyers.ai/#database-reactivation",
      name: "Database Reactivation",
      description:
        "AI campaigns that re-engage past customers and old leads to turn cold contacts into booked jobs.",
      provider: { "@id": "https://paulmeyers.ai/#organization" },
      serviceType: "Lead Reactivation",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
    {
      "@type": "Service",
      "@id": "https://paulmeyers.ai/#ai-productivity-systems",
      name: "AI Productivity Systems",
      description:
        "Custom AI-powered operational systems using Claude, GPT, Manus, and other LLMs — automations, workflows, and AI employees for business operations.",
      provider: { "@id": "https://paulmeyers.ai/#organization" },
      serviceType: "AI Business Automation",
      areaServed: {
        "@type": "Country",
        name: "Canada",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030712] text-white`}
      >
        {children}
        <script
          src="https://link.msgsndr.com/js/external-tracking.js"
          data-tracking-id="tk_fad97cd1838d4d15b93d7a86f3b089e5"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var s = document.createElement('script');
                s.src = 'https://beta.leadconnectorhq.com/loader.js';
                s.setAttribute('data-resources-url', 'https://beta.leadconnectorhq.com/chat-widget/loader.js');
                s.setAttribute('data-widget-id', '691e17cea35fb34e2be7b6ab');
                document.body.appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
