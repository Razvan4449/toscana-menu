export function TomatoDoodle({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden
    >
      <ellipse cx="32" cy="38" rx="18" ry="16" fill="#D63B2F" />
      <ellipse cx="26" cy="34" rx="5" ry="3" fill="#F0A090" opacity="0.45" />
      <path
        d="M28 22c2 4 6 5 10 4-1-5-4-8-10-8-1 2-1 3 0 4Z"
        fill="#3F5340"
      />
      <path d="M32 18c1 3 3 5 6 5" stroke="#6B7F4A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function OliveDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 64" fill="none" aria-hidden>
      <ellipse cx="24" cy="36" rx="12" ry="18" fill="#3F5340" transform="rotate(-18 24 36)" />
      <ellipse cx="20" cy="30" rx="3" ry="6" fill="#8FA86A" opacity="0.55" transform="rotate(-18 20 30)" />
      <path d="M30 14c4 6 2 12-2 16" stroke="#6B7F4A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function BasilDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
      <path
        d="M32 54c-2-14 4-24 14-34-12 2-20 10-24 22 2-12-2-22-12-30 14 6 20 18 22 42Z"
        fill="#6B7F4A"
      />
      <path d="M32 54V28" stroke="#3F5340" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PastaDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 40" fill="none" aria-hidden>
      <path
        d="M4 20c12-14 24 14 36 0s24 14 36 0 24 14 36 0"
        stroke="#C9A227"
        strokeWidth="3"
        strokeLinecap="round"
        className="pasta-stroke"
      />
      <path
        d="M4 28c12-10 24 10 36 0s24 10 36 0 24 10 36 0"
        stroke="#E8D4B8"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

export function StarDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2.5 14.2 9H21l-5.4 3.8L17.8 20 12 15.8 6.2 20l2.2-7.2L3 9h6.8L12 2.5Z"
        fill="#F0C14A"
      />
    </svg>
  );
}

export function SpoonDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 80" fill="none" aria-hidden>
      <ellipse cx="16" cy="16" rx="10" ry="14" fill="#C9A227" />
      <rect x="13" y="28" width="6" height="44" rx="3" fill="#8B6914" />
    </svg>
  );
}

export function RosemaryDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 80" fill="none" aria-hidden>
      <path d="M20 74V8" stroke="#3F5340" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: 10 }).map((_, i) => {
        const y = 14 + i * 5;
        const dir = i % 2 === 0 ? -1 : 1;
        return (
          <path
            key={y}
            d={`M20 ${y}c${dir * 8} -2 ${dir * 12} -1 ${dir * 14} 2`}
            stroke="#6B7F4A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

export function WineDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 80" fill="none" aria-hidden>
      <path
        d="M14 8h12l-2 22c4 4 6 10 6 16 0 10-5 18-10 18s-10-8-10-18c0-6 2-12 6-16L14 8Z"
        fill="#6B1F2A"
      />
      <rect x="18" y="64" width="4" height="10" fill="#2C2118" />
      <rect x="12" y="74" width="16" height="4" rx="1" fill="#2C2118" />
      <path d="M16 14h8" stroke="#C9A227" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

export function ScribbleLine({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 12" fill="none" aria-hidden>
      <path
        d="M2 8c30-8 50 4 80-2s50 6 80-2 30 4 36 2"
        stroke="#C45C3E"
        strokeWidth="2.5"
        strokeLinecap="round"
        className="scribble-stroke"
      />
    </svg>
  );
}
