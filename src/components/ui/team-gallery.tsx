"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Member {
  src: string;
  name: string;
  title: string;
}

const members: Member[] = [
  {
    src: "/images/p1.webp",
    name: "Keylin Dayana León",
    title: "Auxiliar de farmacia",
  },
  {
    src: "/images/p2.webp",
    name: "Cristian David Beltrán",
    title: "Enfermero recuperador",
  },
  {
    src: "/images/p3.webp",
    name: "Jaime Ricardo Chunga",
    title: "Anestesiólogo",
  },
  {
    src: "/images/p4.webp",
    name: "Leydi Viviana Rojas",
    title: "Enfermera circulante",
  },
  {
    src: "/images/p5.webp",
    name: "Diana María Daza",
    title: "Recepcionista",
  },
  {
    src: "/images/p6.webp",
    name: "Lina María Caicedo",
    title: "Área de servicios generales",
  },
];

const bentoClass = [
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-5",
  "lg:col-span-3",
  "lg:col-span-4",
];

const bentoColStart = [
  "lg:col-start-1",
  "lg:col-start-6",
  "lg:col-start-10",
  "lg:col-start-1",
  "lg:col-start-6",
  "lg:col-start-9",
];

const revealVariants: Variants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.4 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function MemberCard({
  member,
  className,
  colStartClass,
  expanded,
  onExpand,
  onCollapse,
}: {
  member: Member;
  className?: string;
  colStartClass?: string;
  expanded: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const enterTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const canHover = useRef(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 160, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 160, damping: 18 });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    canHover.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  useEffect(
    () => () => {
      if (enterTimer.current) clearTimeout(enterTimer.current);
    },
    []
  );

  const onMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 14);
    rotateX.set(-py * 12);
  };

  const onMouseEnter = () => {
    if (!canHover.current || reducedMotion) return;
    if (enterTimer.current) clearTimeout(enterTimer.current);
    enterTimer.current = setTimeout(() => onExpand(), 260);
  };

  const onMouseLeave = () => {
    if (enterTimer.current) {
      clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
    rotateX.set(0);
    rotateY.set(0);
    onCollapse();
  };

  const parts = member.title.split(" · ");
  const badge = parts[0];
  const detail = parts[1];

  return (
    <motion.div
      layout
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        layout: { type: "spring", stiffness: 220, damping: 32, mass: 1 },
      }}
      className={cn(
        "relative",
        expanded ? cn(colStartClass, className, "lg:row-span-2") : className
      )}
      style={{ zIndex: expanded ? 30 : 1 }}
    >
      <motion.figure
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1100,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={cn(
          "group relative overflow-hidden rounded-3xl aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto h-full cursor-pointer",
          "ring-1 ring-white/10 shadow-2xl shadow-black/30",
          "transition-[box-shadow,ring-color] duration-500",
          expanded && "ring-primary/60 shadow-black/60"
        )}
      >
        <Image
          src={member.src}
          alt={`${member.name} - ${member.title}`}
          fill
          sizes="(max-width: 639px) 92vw, (max-width: 1023px) 48vw, 40vw"
          quality={80}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A26]/95 via-[#0A2A26]/45 to-transparent" />

        <div
          aria-hidden="true"
          className="absolute inset-0 -translate-x-[130%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-[1100ms] ease-out group-hover:translate-x-[130%]"
        />

        <figcaption className="absolute inset-x-0 bottom-0 p-4 md:p-5 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-body font-semibold uppercase tracking-widest text-white/90 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#2FA79C]" />
            {badge}
          </span>
          <p className="font-heading font-bold text-white text-lg md:text-xl leading-tight">
            {member.name}
          </p>
          {detail && (
            <span className="block mt-1 font-body text-sm text-white/85">
              {detail}
            </span>
          )}
          <span className="block h-0.5 mt-3 max-w-0 group-hover:max-w-full transition-all duration-700 bg-gradient-to-r from-primary to-transparent" />
        </figcaption>
      </motion.figure>
    </motion.div>
  );
}

export default function TeamGallery() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 lg:auto-rows-[280px]">
      {members.map((member, i) => (
        <MemberCard
          key={member.src}
          member={member}
          className={bentoClass[i]}
          colStartClass={bentoColStart[i]}
          expanded={expandedId === member.src}
          onExpand={() => setExpandedId(member.src)}
          onCollapse={() => setExpandedId(null)}
        />
      ))}
    </div>
  );
}