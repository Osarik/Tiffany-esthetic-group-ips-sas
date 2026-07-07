interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: number;
}

export default function Logo({ className = "", iconOnly, size = 30 }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <rect x="22.5" y="2" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <rect x="43" y="2" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <rect x="2" y="22.5" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <circle cx="30" cy="30" r="8.5" fill="#2FA79C" />
        <rect x="43" y="22.5" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <rect x="2" y="43" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <rect x="22.5" y="43" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
        <rect x="43" y="43" width="15" height="15" rx="3" stroke="#2FA79C" strokeWidth="4" />
      </svg>
      {!iconOnly && (
        <span className="font-heading text-[1.05rem] tracking-[0.06em]">
          TIFFANY <b className="font-bold">E.G</b>{" "}
          <span className="font-script text-primary text-[1.2rem]">ips</span>
        </span>
      )}
    </span>
  );
}
