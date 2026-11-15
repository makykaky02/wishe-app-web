"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/id6778999964";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.umor.wishe&hl=en_US";

type Device = "ios" | "android" | "other";

export default function DownloadPage() {
  const [device, setDevice] = useState<Device>("other");

  useEffect(() => {
    const userAgent = navigator.userAgent || "";
    const isIPadOS = /Macintosh/i.test(userAgent) && navigator.maxTouchPoints > 1;
    const detected: Device = /Android/i.test(userAgent)
      ? "android"
      : /iPhone|iPad|iPod/i.test(userAgent) || isIPadOS
        ? "ios"
        : "other";

    setDevice(detected);
    if (detected === "other") return;

    const destination = detected === "ios" ? APP_STORE_URL : PLAY_STORE_URL;
    const redirectTimer = window.setTimeout(() => window.location.replace(destination), 900);
    return () => window.clearTimeout(redirectTimer);
  }, []);

  const destinationLabel = device === "ios"
    ? "App Store"
    : device === "android"
      ? "Google Play"
      : null;

  return (
    <main className="min-h-screen overflow-hidden bg-[#6b9cff] px-5 py-8 text-white">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center">
        <section className="relative w-full overflow-hidden rounded-[2.5rem] border border-white/35 bg-white/16 px-6 py-10 text-center shadow-2xl backdrop-blur-2xl md:px-14 md:py-14">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#b9cfff]/50 blur-3xl" />

          <div className="relative mx-auto flex max-w-xl flex-col items-center">
            <Image
              src="/logofullwhite.png"
              alt="wishe"
              width={1094}
              height={309}
              priority
              className="h-auto w-56 object-contain md:w-72"
            />
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/75">Reinventing gifting culture</p>
            <h1 className="mt-7 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Download wishe</h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/78 md:text-base">
              wishe is reinventing gifting culture by bringing friends together to contribute toward meaningful wishes while keeping each person&apos;s exact contribution amount private.
            </p>

            {destinationLabel && (
              <p className="mt-7 rounded-full bg-white/15 px-4 py-2 text-sm text-white/85">
                Taking you to the {destinationLabel}…
              </p>
            )}

            <div className="mt-7 grid w-full gap-3 sm:grid-cols-2">
              <a href={APP_STORE_URL} className="rounded-2xl bg-white px-5 py-4 font-semibold text-[#4f78d8] transition hover:-translate-y-0.5 hover:bg-white/95">
                Download for iPhone
              </a>
              <a href={PLAY_STORE_URL} className="rounded-2xl border border-white/40 bg-white/12 px-5 py-4 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/20">
                Download for Android
              </a>
            </div>

            <a href="/" className="mt-7 text-sm text-white/65 transition hover:text-white">Visit wishe.app instead</a>
          </div>
        </section>
      </div>
    </main>
  );
}
