"use client";

import { useState } from "react";
import { testimonialsData, type Review } from "@/data/testimonials";

const GRAVITY_AVATAR = "https://ui-avatars.com/api/?name=";

function avatarSrc(name: string) {
  return `${GRAVITY_AVATAR}${encodeURIComponent(name)}&background=random&color=fff&size=80`;
}

function RatingBar({ value, size = "sm" }: { value: number; size?: "sm" | "md" }) {
  const stars = Array.from({ length: 5 });
  const starSize = size === "md" ? "w-5 h-5" : "w-3.5 h-3.5";

  return (
    <div className="flex items-center gap-0.5" aria-hidden="true">
      {stars.map((_, i) => {
        const fill = Math.min(1, Math.max(0, value - i));
        return (
          <div key={i} className={`relative ${starSize}`}>
            <svg
              className={`${starSize} text-gray-200 absolute inset-0`}
              viewBox="0 0 14 14"
              fill="currentColor"
            >
              <path d="M6.826 11.442l-3.28 1.724a.35.35 0 01-.506-.369l.627-3.65-2.654-2.587a.35.35 0 01.194-.597l3.666-.533 1.64-3.321a.35.35 0 01.628 0l1.641 3.321 3.666.533a.35.35 0 01.194.597l-2.654 2.586.627 3.651a.35.35 0 01-.506.369L7.29 11.442a.35.35 0 00-.464 0z" />
            </svg>
            {fill > 0 && (
              <svg
                className={`${starSize} text-[#FFC107] absolute inset-0`}
                viewBox="0 0 14 14"
                fill="currentColor"
                style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
              >
                <path d="M6.826 11.442l-3.28 1.724a.35.35 0 01-.506-.369l.627-3.65-2.654-2.587a.35.35 0 01.194-.597l3.666-.533 1.64-3.321a.35.35 0 01.628 0l1.641 3.321 3.666.533a.35.35 0 01.194.597l-2.654 2.586.627 3.651a.35.35 0 01-.506.369L7.29 11.442a.35.35 0 00-.464 0z" />
              </svg>
            )}
          </div>
        );
      })}
    </div>
  );
}

function AIOrbIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-10 h-10 shrink-0">
      <defs>
        <linearGradient id="blot1" gradientTransform="rotate(82)">
          <stop stopColor="rgba(141, 56, 255, 1)" stopOpacity="0.9" offset="68%" />
          <stop offset="160%" stopColor="rgba(25, 123, 255, 1)" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="blot2" gradientTransform="rotate(-18)">
          <stop stopColor="rgba(141, 56, 255, 1)" stopOpacity="0.3" offset="38%" />
          <stop offset="160%" stopColor="rgba(25, 123, 255, 1)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="starsGrad" gradientTransform="rotate(90)">
          <stop offset="25%" stopColor="white" />
          <stop offset="75%" stopColor="white" />
        </linearGradient>
        <clipPath id="starsClip">
          <path d="M64.9144 22.938C64.7001 22.3589 63.8809 22.3589 63.6666 22.938L61.1294 29.7931C61.062 29.9751 60.9184 30.1187 60.7363 30.1861L53.8805 32.723C53.3013 32.9373 53.3013 33.7564 53.8805 33.9707L60.7363 36.5076C60.9184 36.575 61.062 36.7185 61.1294 36.9006L63.6666 43.7557C63.8809 44.3348 64.7001 44.3348 64.9144 43.7557L67.4516 36.9006C67.519 36.7185 67.6626 36.575 67.8446 36.5076L74.7005 33.9707C75.2797 33.7564 75.2797 32.9373 74.7005 32.723L67.8446 30.1861C67.6626 30.1187 67.519 29.9751 67.4516 29.7931L64.9144 22.938Z" />
          <path d="M33.0547 29.0105C32.9016 28.5968 32.3165 28.5968 32.1634 29.0105L30.3511 33.907C30.303 34.037 30.2004 34.1395 30.0704 34.1877L25.1733 35.9998C24.7596 36.1528 24.7596 36.7379 25.1733 36.891L30.0704 38.7031C30.2004 38.7512 30.303 38.8537 30.3511 38.9838L32.1634 43.8803C32.3165 44.2939 32.9016 44.2939 33.0547 43.8803L34.867 38.9838C34.9151 38.8537 35.0177 38.7512 35.1477 38.7031L40.0448 36.891C40.4585 36.7379 40.4585 36.1528 40.0448 35.9998L35.1477 34.1877C35.0177 34.1395 34.9151 34.037 34.867 33.907L33.0547 29.0105Z" />
          <path d="M47.4349 36.4773C47.833 35.4018 49.3543 35.4018 49.7524 36.4773L54.4643 49.2082C54.5895 49.5463 54.8561 49.8129 55.1942 49.938L67.9265 54.6494C69.0022 55.0474 69.0022 56.5686 67.9266 56.9666L55.1942 61.678C54.8561 61.8031 54.5895 62.0697 54.4643 62.4078L49.7524 75.1387C49.3543 76.2142 47.833 76.2142 47.4349 75.1387L42.723 62.4078C42.5978 62.0697 42.3312 61.8031 41.9931 61.678L29.2607 56.9666C28.1851 56.5686 28.1851 55.0474 29.2607 54.6494L41.9931 49.938C42.3312 49.8129 42.5978 49.5463 42.723 49.2082L47.4349 36.4773Z" />
        </clipPath>
      </defs>
      <path fill="url(#blot1)" d="M89.41 56.86Q90 90 49.8 90Q10 90 10.96 41.26Q10 10 39.74 11.33Q90 10 89.41 56.86" />
      <path fill="url(#blot2)" d="M99.92 52.88Q100 100 52.57 99.93Q0 100 0.47 43.15Q0 0 37.08 1.7Q100 0 99.92 52.88" />
      <circle cx="50%" cy="50%" r="50%" clipPath="url(#starsClip)" fill="url(#starsGrad)" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 85 36" className="h-[18px]">
      <g clipPath="url(#g-logo)">
        <path fill="#4285F4" d="M20.778 13.43h-9.862v2.927h6.994c-.345 4.104-3.76 5.854-6.982 5.854-4.123 0-7.72-3.244-7.72-7.791 0-4.43 3.429-7.841 7.73-7.841 3.317 0 5.272 2.115 5.272 2.115l2.049-2.122s-2.63-2.928-7.427-2.928C4.725 3.644 0 8.8 0 14.367c0 5.457 4.445 10.777 10.988 10.777 5.756 0 9.969-3.942 9.969-9.772 0-1.23-.179-1.941-.179-1.941Z" />
        <path fill="#EA4335" d="M28.857 11.312c-4.047 0-6.947 3.163-6.947 6.853 0 3.744 2.813 6.966 6.994 6.966 3.786 0 6.887-2.893 6.887-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.878 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.954-4.181Z" />
        <path fill="#FBBC05" d="M43.965 11.312c-4.046 0-6.946 3.163-6.946 6.853 0 3.744 2.813 6.966 6.994 6.966 3.785 0 6.886-2.893 6.886-6.886 0-4.576-3.607-6.933-6.934-6.933Zm.04 2.714c1.99 0 3.876 1.609 3.876 4.201 0 2.538-1.877 4.192-3.885 4.192-2.205 0-3.945-1.766-3.945-4.212 0-2.394 1.718-4.181 3.955-4.181Z" />
        <path fill="#4285F4" d="M58.783 11.319c-3.714 0-6.634 3.253-6.634 6.904 0 4.16 3.385 6.918 6.57 6.918 1.97 0 3.017-.782 3.79-1.68v1.363c0 2.384-1.448 3.812-3.633 3.812-2.11 0-3.169-1.57-3.537-2.46l-2.656 1.11c.943 1.992 2.839 4.07 6.215 4.07 3.693 0 6.508-2.327 6.508-7.205V11.734h-2.897v1.17c-.89-.96-2.109-1.585-3.726-1.585Zm.269 2.709c1.821 0 3.69 1.554 3.69 4.21 0 2.699-1.865 4.187-3.73 4.187-1.98 0-3.823-1.608-3.823-4.161 0-2.653 1.914-4.236 3.863-4.236Z" />
        <path fill="#EA4335" d="M78.288 11.302c-3.504 0-6.446 2.788-6.446 6.901 0 4.353 3.28 6.934 6.782 6.934 2.924 0 4.718-1.6 5.789-3.032l-2.389-1.59c-.62.962-1.656 1.902-3.385 1.902-1.943 0-2.836-1.063-3.39-2.094l9.266-3.845-.48-1.126c-.896-2.207-2.984-4.05-5.747-4.05Zm.12 2.658c1.263 0 2.171.671 2.557 1.476l-6.187 2.586c-.267-2.002 1.63-4.062 3.63-4.062Z" />
        <path fill="#34A853" d="M67.425 24.727h3.044V4.359h-3.044v20.368Z" />
      </g>
      <defs>
        <clipPath id="g-logo"><path fill="#fff" d="M0 0h84.515v36H0z" /></clipPath>
      </defs>
    </svg>
  );
}

function VerifiedBadge() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" className="w-3.5 h-3.5 shrink-0">
      <path
        fill="#197BFF"
        d="M6.757.236a.35.35 0 0 1 .486 0l1.106 1.07a.35.35 0 0 0 .329.089l1.493-.375a.35.35 0 0 1 .422.244l.422 1.48a.35.35 0 0 0 .24.24l1.481.423a.35.35 0 0 1 .244.422l-.375 1.493a.35.35 0 0 0 .088.329l1.071 1.106a.35.35 0 0 1 0 .486l-1.07 1.106a.35.35 0 0 0-.089.329l.375 1.493a.35.35 0 0 1-.244.422l-1.48.422a.35.35 0 0 0-.24.24l-.423 1.481a.35.35 0 0 1-.422.244l-1.493-.375a.35.35 0 0 0-.329.088l-1.106 1.071a.35.35 0 0 1-.486 0l-1.106-1.07a.35.35 0 0 0-.329-.089l-1.493.375a.35.35 0 0 1-.422-.244l-.422-1.48a.35.35 0 0 0-.24-.24l-1.481-.423a.35.35 0 0 1-.244-.422l.375-1.493a.35.35 0 0 0-.088-.329L.236 7.243a.35.35 0 0 1 0-.486l1.07-1.106a.35.35 0 0 0 .089-.329L1.02 3.829a.35.35 0 0 1 .244-.422l1.48-.422a.35.35 0 0 0 .24-.24l.423-1.481a.35.35 0 0 1 .422-.244l1.493.375a.35.35 0 0 0 .329-.088L6.757.236Z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M9.065 4.85a.644.644 0 0 1 .899 0 .615.615 0 0 1 .053.823l-.053.059L6.48 9.15a.645.645 0 0 1-.84.052l-.06-.052-1.66-1.527a.616.616 0 0 1 0-.882.645.645 0 0 1 .84-.052l.06.052 1.21 1.086 3.034-2.978Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const MAX_CHARS = 120;

function ReviewText({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false);
  const needsTruncation = text.length > MAX_CHARS;
  const display = needsTruncation && !expanded ? text.slice(0, MAX_CHARS) + "…" : text;

  return (
    <div className="text-[#223231]/75 font-body text-sm leading-relaxed break-words">
      <p>{display}</p>
      {needsTruncation && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-[#2FA79C] hover:text-[#1B6E66] text-sm font-body mt-1 transition-colors"
        >
          {expanded ? "Mostrar menos" : "Leer más"}
        </button>
      )}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col items-start gap-3 p-5 bg-white rounded-2xl border border-[#2FA79C]/10 shadow-sm w-[48vw] sm:w-[380px] flex-shrink-0 overflow-hidden">
      <div className="flex items-center gap-3 w-full min-w-0">
        <img
          src={avatarSrc(review.name)}
          alt={review.name}
          className="w-11 h-11 rounded-full object-cover shrink-0 bg-[#2FA79C]/10"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-body font-bold text-[#223231] truncate">
              {review.name}
            </span>
            <VerifiedBadge />
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#223231]/50 font-body mt-0.5">
            <span>{review.date}</span>
            <span>en</span>
            <span className="inline-flex items-center">
              <GoogleLogo />
            </span>
          </div>
        </div>
      </div>

      <RatingBar value={review.rating} size="sm" />

      <ReviewText text={review.text} />

      <a
        href={review.googleUrl}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-1 text-xs text-[#223231]/40 hover:text-[#2FA79C] font-body transition-colors mt-auto"
      >
        Ver en Google
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </div>
  );
}

function AICard() {
  const { aiSummary } = testimonialsData;

  return (
    <div className="flex flex-col gap-3 p-5 bg-white rounded-2xl border border-[#2FA79C]/10 shadow-sm w-[48vw] sm:w-[380px] flex-shrink-0 overflow-hidden">
      <div className="flex items-center gap-3 min-w-0">
        <AIOrbIcon />
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-body font-bold text-[#223231]">
              Resumen generado por IA
            </span>
          </div>
          <span className="text-xs text-[#223231]/50 font-body">
            Basado en {aiSummary.totalReviews} reseñas en Google
          </span>
        </div>
      </div>

      <RatingBar value={aiSummary.rating} size="md" />

      <ul className="space-y-2">
        {aiSummary.bullets.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#223231]/75 font-body">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 12 10"
              className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[#2FA79C]"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.043.554a1 1 0 0 1 1.497 1.32l-.083.095-6.272 6.899a1 1 0 0 1-1.32.083l-.095-.083-3.227-3.5a1 1 0 0 1 1.32-1.498l.094.083 2.52 2.793L10.043.554Z"
                clipRule="evenodd"
              />
            </svg>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HorizontalScroller({
  children,
  speed = "40s",
  direction = "left",
}: {
  children: React.ReactNode;
  speed?: string;
  direction?: "left" | "right";
}) {
  const animationClass =
    direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal";

  return (
    <div className="w-full overflow-hidden group relative mask-fade">
      <div
        className={`flex ${animationClass}`}
        style={{ "--scroll-duration": speed } as React.CSSProperties}
      >
        <div className="flex items-stretch justify-center gap-6 px-4">
          {children}
        </div>
        <div
          className="flex items-stretch justify-center gap-6 px-4"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { reviews } = testimonialsData;

  return (
    <section
      id="testimonios"
      className="relative flex flex-col items-center gap-12 py-20 md:py-28 px-4 w-full overflow-hidden"
    >
      <div className="flex flex-col items-center gap-4 text-center z-10 max-w-2xl">
        <span className="text-[#2FA79C] font-body font-semibold text-sm tracking-widest uppercase">
          Testimonios
        </span>
        <h2
          className="font-heading text-4xl md:text-5xl font-bold text-[#223231] leading-tight"
          style={{
            opacity: 0,
            animation: "fadeInUp 1.4s ease-out 0.2s forwards",
          }}
        >
          Lo que dicen nuestros pacientes
        </h2>
        <p
          className="text-sm md:text-base text-[#223231]/60 font-body max-w-xl"
          style={{
            opacity: 0,
            animation: "fadeInUp 1.4s ease-out 0.4s forwards",
          }}
        >
          En Tiffany Esthetic Group, la satisfacción de nuestros pacientes es
          nuestra mayor recompensa. Conoce sus experiencias y resultados.
        </p>
      </div>

      <div className="flex flex-col gap-8 z-10 w-full max-w-6xl">
        <HorizontalScroller speed="100s" direction="left">
          <AICard />
          {reviews.slice(0, 5).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </HorizontalScroller>
        <HorizontalScroller speed="80s" direction="right">
          {reviews.slice(5).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </HorizontalScroller>
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 85% 67% at 50% 100%, rgba(47,167,156,0.12) 0%, transparent 60%)",
          }}
        />
      </div>
    </section>
  );
}
