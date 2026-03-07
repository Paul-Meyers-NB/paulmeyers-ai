import { ReactNode } from "react";
import { cn } from "@/lib/utils";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  Icon,
  description,
  cta,
  href,
}: {
  name: string;
  className?: string;
  Icon: React.ComponentType<{ className?: string }>;
  description: string;
  cta?: string;
  href?: string;
}) => (
  <div
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-6",
      "bg-gray-900/50 border border-gray-800/50 backdrop-blur-sm",
      "hover:border-blue-500/30 transition-all duration-500",
      className
    )}
  >
    <div>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
        <Icon className="h-6 w-6 text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
    {cta && href && (
      <div className="mt-4">
        <a
          href={href}
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-1"
        >
          {cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    )}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </div>
);

export { BentoCard, BentoGrid };
