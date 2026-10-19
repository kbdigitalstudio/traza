"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SESSION_KEY = "traza:intro:seen";

type Phase = "playing" | "closing" | "done";

const WORDMARK = ["T", "R", "A", "Z", "A"];

export function Intro() {
  const [phase, setPhase] = useState<Phase>("playing");
  const skipRef = useRef<HTMLButtonElement>(null);
  const timers = useRef<number[]>([]);
  const wheelBlocker = useRef<((event: Event) => void) | null>(null);
  const played = useRef(false);
  const closing = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  }, []);

  const releasePage = useCallback(() => {
    clearTimers();
    if (wheelBlocker.current) {
      window.removeEventListener("wheel", wheelBlocker.current);
      window.removeEventListener("touchmove", wheelBlocker.current);
      wheelBlocker.current = null;
    }
    const site = document.getElementById("site-content");
    if (site instanceof HTMLElement) site.inert = false;
  }, [clearTimers]);

  const close = useCallback(() => {
    if (closing.current) return;
    closing.current = true;
    clearTimers();
    setPhase("closing");
    timers.current.push(window.setTimeout(() => setPhase("done"), 420));
  }, [clearTimers]);

  useEffect(() => {
    let seen = false;
    let storageAvailable = true;
    try {
      seen = window.sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      storageAvailable = false;
    }

    let reduceMotion = false;
    let mediaAvailable = true;
    try {
      reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      mediaAvailable = false;
    }

    if (seen || reduceMotion || !storageAvailable || !mediaAvailable) {
      document.documentElement.setAttribute("data-intro", "skip");
      const finish = () => setPhase("done");
      const frame = window.requestAnimationFrame(finish);
      const timer = window.setTimeout(finish, 120);
      return () => {
        window.cancelAnimationFrame(frame);
        window.clearTimeout(timer);
      };
    }

    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* Almacenamiento no disponible: la intro se muestra una vez por carga. */
    }

    document.documentElement.removeAttribute("data-intro");
    played.current = true;

    const site = document.getElementById("site-content");
    if (site instanceof HTMLElement) site.inert = true;

    const blocker = (event: Event) => event.preventDefault();
    wheelBlocker.current = blocker;
    window.addEventListener("wheel", blocker, { passive: false });
    window.addEventListener("touchmove", blocker, { passive: false });

    const focusFrame = window.requestAnimationFrame(() => skipRef.current?.focus());

    timers.current.push(
      window.setTimeout(() => {
        closing.current = true;
        setPhase("closing");
      }, 3400)
    );
    timers.current.push(window.setTimeout(() => setPhase("done"), 3880));

    return () => {
      window.cancelAnimationFrame(focusFrame);
      releasePage();
    };
  }, [releasePage]);

  useEffect(() => {
    if (phase === "done") {
      releasePage();
      document.documentElement.setAttribute("data-intro", "done");
      if (played.current) {
        played.current = false;
        const main = document.getElementById("contenido-principal");
        if (main instanceof HTMLElement) {
          main.setAttribute("tabindex", "-1");
          main.focus({ preventScroll: true });
        }
      }
    }
  }, [phase, releasePage]);

  useEffect(() => {
    if (phase === "done") return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, close]);

  if (phase === "done") return null;

  return (
    <div
      id="traza-intro"
      className={phase === "closing" ? "is-closing" : undefined}
      aria-label="Introducción de marca TRAZA"
      role="dialog"
      aria-modal="true"
    >
      <div className="intro-grid" aria-hidden="true" />
      <div className="intro-vignette" aria-hidden="true" />

      <svg
        className="intro-drawing"
        viewBox="0 0 1200 720"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {/* Retícula y ejes */}
        <g stroke="rgba(243,241,235,0.16)" strokeWidth="1">
          <line className="d1" pathLength={1} x1="60" y1="110" x2="1140" y2="110" />
          <line className="d2" pathLength={1} x1="60" y1="430" x2="1140" y2="430" />
          <line className="d3" pathLength={1} x1="160" y1="60" x2="160" y2="660" />
          <line className="d4" pathLength={1} x1="1040" y1="60" x2="1040" y2="660" />
        </g>

        {/* Cota principal / eje de trazado */}
        <line
          className="d1"
          pathLength={1}
          x1="60"
          y1="540"
          x2="1140"
          y2="540"
          stroke="#F07835"
          strokeWidth="1.5"
        />
        <g stroke="rgba(240,120,53,0.7)" strokeWidth="1">
          <line className="d2" pathLength={1} x1="160" y1="534" x2="160" y2="546" />
          <line className="d3" pathLength={1} x1="420" y1="534" x2="420" y2="546" />
          <line className="d4" pathLength={1} x1="680" y1="534" x2="680" y2="546" />
          <line className="d5" pathLength={1} x1="1040" y1="534" x2="1040" y2="546" />
        </g>

        {/* Silueta estructural: puente atirantado */}
        <g stroke="rgba(243,241,235,0.6)" strokeWidth="1.4">
          <line className="d2" pathLength={1} x1="190" y1="430" x2="1010" y2="430" />
          <line className="d3" pathLength={1} x1="190" y1="446" x2="1010" y2="446" />
          <line className="d2" pathLength={1} x1="420" y1="430" x2="420" y2="250" />
          <line className="d3" pathLength={1} x1="780" y1="430" x2="780" y2="250" />
          <line className="d4" pathLength={1} x1="412" y1="250" x2="428" y2="250" />
          <line className="d4" pathLength={1} x1="772" y1="250" x2="788" y2="250" />
        </g>

        <g stroke="rgba(243,241,235,0.42)" strokeWidth="1">
          <path className="d3" pathLength={1} d="M420 250 Q600 352 780 250" />
          <path className="d4" pathLength={1} d="M420 250 Q500 388 600 430" />
          <path className="d4" pathLength={1} d="M780 250 Q700 388 600 430" />
          <path className="d5" pathLength={1} d="M190 446 L420 430 M780 430 L1010 446" />
        </g>

        {/* Terreno / curvas de nivel */}
        <g stroke="rgba(100,118,106,0.65)" strokeWidth="1">
          <path
            className="d3"
            pathLength={1}
            d="M60 610 C210 560 330 650 470 606 C610 562 700 660 850 606 C980 560 1080 620 1140 596"
          />
          <path
            className="d4"
            pathLength={1}
            d="M60 646 C200 596 340 690 500 638 C660 586 760 696 920 636 C1030 594 1100 650 1140 630"
          />
          <path
            className="d5"
            pathLength={1}
            d="M60 682 C240 626 390 720 560 664 C720 612 840 724 1000 662 C1080 632 1120 666 1140 656"
          />
        </g>

        {/* Nodos y marcas */}
        <g className="marker" fill="#F07835">
          <circle cx="420" cy="430" r="3.5" />
          <circle cx="780" cy="430" r="3.5" />
          <circle cx="600" cy="540" r="3" />
        </g>
        <g className="marker" stroke="rgba(243,241,235,0.45)" strokeWidth="1">
          <line x1="600" y1="430" x2="600" y2="540" strokeDasharray="4 5" />
        </g>
      </svg>

      <p className="intro-meta intro-meta--tl eyebrow">
        <span className="sm:hidden">TRAZA / Sistema</span>
        <span className="hidden sm:inline">TRAZA / Sistema de ingeniería</span>
      </p>
      <p className="intro-meta intro-meta--bl eyebrow">Eje 01 · Trazado</p>
      <p className="intro-meta intro-meta--br eyebrow">Esc. 1:500 · Colombia</p>

      <div className="intro-identity">
        <p className="intro-wordmark" role="img" aria-label="TRAZA">
          {WORDMARK.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              aria-hidden="true"
              style={{ animationDelay: `${1280 + index * 55}ms` }}
            >
              {letter}
            </span>
          ))}
          <i aria-hidden="true" />
        </p>
        <p className="intro-descriptor">Ingeniería &amp; Infraestructura</p>
      </div>

      <div className="intro-photo" aria-hidden="true">
        <Image
          src="/images/hero-infraestructura.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="intro-photo-img"
        />
        <div className="intro-photo-shade" />
      </div>

      <button ref={skipRef} type="button" className="intro-skip" onClick={close}>
        Saltar intro
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}
