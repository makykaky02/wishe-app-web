import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RefundPolicyPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white text-[#1f2a44] px-6 py-12 flex justify-center`}>
      <div className="max-w-3xl w-full">

        <div className="mb-8 inline-flex rounded-full bg-[#f5f7ff] px-4 py-2 text-sm font-medium text-[#6b9cff]">
          Wishe Legal
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#6b9cff] mb-8">
          Refund Policy
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-8 rounded-3xl border border-[#ffe0b8] bg-[#fff8ef] p-6">
          All payments made through Wishe are processed securely via Stripe. Due to the digital nature of the platform and the transfer of funds between users, most completed transactions are generally non refundable once processed.
        </p>

        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          If you believe there has been an accidental duplicate payment, billing issue, fraudulent transaction, or incorrect charge, you may contact support and your request will be reviewed individually.
        </p>

        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          Refunds, when approved, are generally returned to the original payment method used during checkout. Processing times may vary depending on Stripe and the user&apos;s bank.
        </p>

        <p className="text-gray-600 leading-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6 mb-12">
          For questions related to refunds, payments, or disputes, please contact support through the Wishe website.
        </p>

        <div className="flex w-full max-w-sm flex-col gap-4 pb-6">
          <Link
            href="/"
            className="rounded-full bg-[#6b9cff] px-6 py-3 text-center text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Home
          </Link>

          <Link
            href="/withdraw"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            How To Withdraw Funds
          </Link>

          <Link
            href="/terms"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Terms Of Service
          </Link>

          <Link
            href="/privacy"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Privacy Policy
          </Link>
          <Link
            href="/faq"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            FAQ
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Contact
          </Link>
        </div>

      </div>
    </main>
  );
}