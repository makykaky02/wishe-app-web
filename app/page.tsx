"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="absolute top-0 left-0 w-full z-50 py-4 px-6 flex items-center justify-between max-w-6xl mx-auto text-white">
      </nav>

      {/* HERO */}
      <section className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/goldfish.mp4" type="video/mp4" />
        </video>

        <div
          className={`absolute top-[72%] md:top-[72%] left-1/2 z-10 -translate-x-1/2 text-[#ffb25c] text-base md:text-lg font-normal tracking-[0.16em] uppercase drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] transition-all duration-700 ease-out ${showContent ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"}`}
        >
          Reinvented Gifting Culture
        </div>

        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-[#6b9cff] transition-opacity duration-[1600ms] ease-out ${showContent ? "opacity-100" : "opacity-0"}`} />

        {/* Content */}
        <div className={`relative z-10 flex flex-col items-center space-y-0 px-6 transition-all duration-[1200ms] ease-out ${showContent ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
          
          {/* Logo */}
          <Image
            src="/wln.png"
            alt="Wishe Logo"
            width={224}
            height={224}
            priority
            className={`w-44 h-44 md:w-56 md:h-56 object-contain -mb-7 md:-mb-9 -mt-6 md:-mt-8 transition-all duration-[1400ms] ease-out ${showContent ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 -translate-y-6 -rotate-3"}`}
          />
          <div
            className={`text-white/90 text-[11px] md:text-sm tracking-[0.38em] uppercase -mt-3 md:-mt-4 mb-2 md:mb-3 transition-all duration-[1400ms] ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: showContent ? "120ms" : "0ms" }}
          >
            Reinvented Gifting Culture
          </div>
          <p
            className={`max-w-xs md:max-w-sm text-center text-white/75 text-sm md:text-base leading-6 mb-4 transition-all duration-[1200ms] ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: showContent ? "135ms" : "0ms" }}
          >
            A social gifting app where friends come together to contribute toward wishes that actually matter.
          </p>

          <div className="flex flex-col gap-3 justify-center pt-0">
            <a
              href="/withdraw"
              className={`bg-white text-[#6b9cff] font-medium px-7 py-3 rounded-full hover:scale-[1.02] transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "150ms" : "0ms" }}
            >
              How To Withdraw Funds
            </a>

            <a
              href="/refund-policy"
              className={`bg-white/20 backdrop-blur text-white px-7 py-3 rounded-full hover:bg-white/30 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "200ms" : "0ms" }}
            >
              Refund Policy
            </a>

            <a
              href="/terms"
              className={`bg-white/20 backdrop-blur text-white px-7 py-3 rounded-full hover:bg-white/30 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "300ms" : "0ms" }}
            >
              Terms of Service
            </a>

            <a
              href="/privacy"
              className={`bg-white/20 backdrop-blur text-white px-7 py-3 rounded-full hover:bg-white/30 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "400ms" : "0ms" }}
            >
              Privacy Policy
            </a>

            <a
              href="/faq"
              className={`bg-white/20 backdrop-blur text-white px-7 py-3 rounded-full hover:bg-white/30 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "450ms" : "0ms" }}
            >
              FAQ
            </a>
            <a
              href="/contact"
              className={`bg-white/20 backdrop-blur text-white px-7 py-3 rounded-full hover:bg-white/30 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "500ms" : "0ms" }}
            >
              Contact
            </a>
          </div>

          <div className={`text-sm text-white/85 pt-4 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: showContent ? "600ms" : "0ms" }}>
            Payments powered by Stripe • Secure • Private
          </div>

          <div className={`text-xs text-white/60 pt-2 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: showContent ? "700ms" : "0ms" }}>
            © 2026 Wishe. All rights reserved.
          </div>

        </div>

      </section>

    </main>
  )
}