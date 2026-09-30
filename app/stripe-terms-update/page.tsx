import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stripe terms update | wishe",
  description:
    "Information for wishe users with a connected Stripe payout account about Stripe's updated legal terms and Privacy Policy.",
};

export default function StripeTermsUpdatePage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white px-6 py-12 text-[#1f2a44] flex justify-center`}>
      <div className="w-full max-w-3xl">
        <div className="mb-8 inline-flex rounded-full bg-[#f5f7ff] px-4 py-2 text-sm font-medium text-[#6b9cff]">
          Important payout account update
        </div>

        <h1 className="mb-6 text-4xl font-medium tracking-tight text-[#6b9cff] md:text-5xl">
          Stripe is updating its legal terms
        </h1>

        <p className="mb-10 rounded-3xl border border-[#dbe6ff] bg-[#f5f7ff] p-6 text-lg leading-8 text-gray-600">
          This notice is for wishe users who completed Stripe onboarding to receive payouts. Stripe is updating the agreement and privacy terms that apply to connected payout accounts.
        </p>

        <section className="mb-8 rounded-3xl border border-[#ffe0b8] bg-[#fff8ef] p-6">
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-[#6b9cff]">
            Stripe Services Agreement
          </h2>
          <p className="leading-8 text-gray-600">
            Stripe&apos;s updated Services Agreement takes effect on January 6, 2027. If you keep your connected Stripe account open after that date, Stripe states that you agree to the updated terms.
          </p>
          <a
            href="https://stripe.com/legal/ssa"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#6b9cff] px-5 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Review Stripe&apos;s Services Agreement
          </a>
        </section>

        <section className="mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-[#6b9cff]">
            Stripe Privacy Policy
          </h2>
          <p className="leading-8 text-gray-600">
            Stripe&apos;s updated Privacy Policy takes effect on November 20, 2026. Stripe says no action is required for this privacy update. The changes provide additional information about Stripe&apos;s data processing, data roles, communications, and regional terms.
          </p>
          <a
            href="https://stripe.com/privacy/preview"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full border border-[#dbe6ff] bg-white px-5 py-3 font-medium text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Review Stripe&apos;s Privacy Policy update
          </a>
        </section>

        <section className="mb-10 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          <h2 className="mb-3 text-2xl font-medium tracking-tight text-[#6b9cff]">
            What you need to do
          </h2>
          <p className="leading-8 text-gray-600">
            Please review Stripe&apos;s updated terms. You do not need to change anything in the wishe app to continue using your payout account. If you have questions about your wishe account, contact us at support@wishe.app.
          </p>
        </section>

        <div className="flex w-full max-w-sm flex-col gap-4 pb-6">
          <Link
            href="/"
            className="rounded-full bg-[#6b9cff] px-6 py-3 text-center text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Contact wishe
          </Link>
        </div>
      </div>
    </main>
  );
}
