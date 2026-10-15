export function ConnectionGraph({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 240 150" className={className} fill="none">
      <g stroke="#a3c5f2" strokeWidth="1.5">
        <line x1="10" y1="95" x2="88" y2="35" />
        <line x1="10" y1="95" x2="120" y2="125" />
        <line x1="88" y1="35" x2="120" y2="125" />
        <line x1="88" y1="35" x2="170" y2="65" />
        <line x1="120" y1="125" x2="170" y2="65" />
        <line x1="170" y1="65" x2="225" y2="10" />
      </g>
      <circle cx="10" cy="95" r="5" fill="#8db4ea" />
      <circle cx="88" cy="35" r="11" fill="white" stroke="#2259b9" strokeWidth="2" />
      <circle cx="88" cy="35" r="4" fill="#2259b9" />
      <circle cx="120" cy="125" r="7" fill="white" stroke="#4d84cf" strokeWidth="2" />
      <circle cx="170" cy="65" r="9" fill="white" stroke="#4d84cf" strokeWidth="2" />
      <circle cx="225" cy="10" r="4" fill="#a3c5f2" />
    </svg>
  );
}
