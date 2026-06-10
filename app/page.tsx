"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

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
      <section className="relative h-[100svh] md:h-screen w-full flex items-center justify-center text-center overflow-hidden">

        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          onLoadedData={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
        >
          <source src="/goldfish.mp4" type="video/mp4" />
        </video>

        <div
          className={`absolute top-[72%] md:top-[72%] left-1/2 z-10 -translate-x-1/2 text-[#ffb25c] text-base md:text-lg font-normal tracking-[0.16em] uppercase drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)] transition-all duration-700 ease-out ${videoReady && !showContent ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
        >
          Reinvented Gifting Culture
        </div>

        {/* Dark Overlay */}
        <div className={`absolute inset-0 bg-[#6b9cff] transition-opacity duration-[1600ms] ease-out ${showContent ? "opacity-100" : "opacity-0"}`} />

        {/* Content */}
        <div className={`relative z-10 flex flex-col items-center space-y-0 px-6 mb-24 md:mb-0 transition-all duration-[1200ms] ease-out ${showContent ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
          
          {/* Logo */}
          <Image
            src="/wln.png"
            alt="Wishe Logo"
            width={224}
            height={224}
            priority
            className={`w-44 h-44 md:w-72 md:h-72 object-contain -mb-7 md:-mb-12 -mt-2 md:-mt-10 transition-all duration-[1400ms] ease-out ${showContent ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 -translate-y-6 -rotate-3"}`}
          />
          <div
            className={`w-auto whitespace-nowrap text-center text-white/90 text-[9px] md:text-sm tracking-[0.24em] md:tracking-[0.28em] uppercase -mt-2 md:-mt-4 mb-2 md:mb-3 transition-all duration-[1400ms] ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: showContent ? "120ms" : "0ms" }}
          >
            Reinvented Gifting Culture
          </div>

          <div className="flex flex-col gap-2 md:gap-3 justify-center pt-2 md:pt-2">
            <a
              href="/withdraw"
              className={`bg-white text-[#6b9cff] font-medium px-6 md:px-7 py-2.5 md:py-3 rounded-full hover:scale-[1.02] transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ transitionDelay: showContent ? "150ms" : "0ms" }}
            >
              How To Withdraw Funds
            </a>

            <div className="relative">
              <button
                onClick={() => setShowMenu(!showMenu)}
                className={`bg-white/20 backdrop-blur text-white px-6 md:px-7 py-2.5 md:py-3 rounded-full hover:bg-white/30 transition-all duration-700 ease-out w-full ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                style={{ transitionDelay: showContent ? "220ms" : "0ms" }}
              >
                Policies & Support
              </button>

              {showMenu && (
                <div className="mt-2 flex flex-col gap-1.5 md:gap-2">
                  <a href="/refund-policy" className="text-white/80 text-xs md:text-sm hover:text-white transition-colors">
                    Refund Policy
                  </a>
                  <a href="/terms" className="text-white/80 text-xs md:text-sm hover:text-white transition-colors">
                    Terms of Service
                  </a>
                  <a href="/privacy" className="text-white/80 text-xs md:text-sm hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/faq" className="text-white/80 text-xs md:text-sm hover:text-white transition-colors">
                    FAQ
                  </a>
                  <a href="/contact" className="text-white/80 text-xs md:text-sm hover:text-white transition-colors">
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>

          <p
            className={`max-w-[270px] md:max-w-sm text-center text-white/65 text-[11px] md:text-sm leading-5 md:leading-6 pt-4 md:pt-8 transition-all duration-[1200ms] ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: showContent ? "560ms" : "0ms" }}
          >
            A social gifting app where friends come together to contribute toward wishes that actually matter.
          </p>

        </div>

        <div className="absolute bottom-3 md:bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center">
          <div
            className={`text-[10px] md:text-sm text-white/85 whitespace-nowrap transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            style={{ transitionDelay: showContent ? "650ms" : "0ms" }}
          >
            Payments powered by Stripe • Secure • Private
          </div>

          <div className={`text-[10px] md:text-xs text-white/60 pt-1.5 md:pt-2 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: showContent ? "750ms" : "0ms" }}>
            © 2026 Wishe. All rights reserved.
          </div>

          <div className={`text-[10px] md:text-xs text-white/50 pt-1 transition-all duration-700 ease-out ${showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ transitionDelay: showContent ? "800ms" : "0ms" }}>
            Operated by Umor LLC
          </div>
        </div>

      </section>

    </main>
  )
}