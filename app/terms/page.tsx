import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TermsOfServicePage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white text-[#1f2a44] px-6 py-12 flex justify-center`}>
      <div className="max-w-3xl w-full">

        <div className="mb-8 inline-flex rounded-full bg-[#f5f7ff] px-4 py-2 text-sm font-medium text-[#6b9cff]">
          Wishe Legal
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#6b9cff] mb-8">
          Terms of Service
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-10 rounded-3xl border border-[#dbe6ff] bg-[#f5f7ff] p-6">
          These terms describe how Wishe operates. By using the platform, you agree to these terms and understand how the platform handles gifting, contributions, payouts, and account usage.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Eligibility
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          You must use Wishe in accordance with applicable laws. You confirm that the information you provide is accurate and that you are allowed to use the service.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Use of the service
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          Wishe is designed for wishlists, gifting, and contributions. You agree not to misuse the platform, interfere with its operation, or use it for any harmful or deceptive activity.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Prohibited use
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          You may not use Wishe for fraud, chargeback abuse, automated manipulation, illegal activity, or any attempt to exploit the gifting or payment system.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Accounts and security
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          You are responsible for your account and all activity under it. You must keep your login credentials secure.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Payments, service fees, and taxes
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#ffe0b8] bg-[#fff8ef] p-6">
          Payments are processed through third party providers such as Stripe. Wishe does not store card details. The platform may apply small service related fees or taxes required to operate the service and process transactions securely.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Gifts and contributions
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          Contributions are voluntary. Once processed, they are generally final and may be transferred or allocated to the intended recipient.
          Wishe does not guarantee how recipients use gifted funds or items.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Refund policy
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#ffe0b8] bg-[#fff8ef] p-6">
          Refunds are only possible before a contribution is fully processed or at our discretion in cases of error, fraud, or accidental duplicate charges. Once funds are delivered or withdrawn, they are generally considered final.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          User content
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          You retain ownership of your content. By using Wishe, you grant permission for the platform to use your content to operate and improve the service.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Service changes
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We may update, change, or discontinue parts of the service at any time without prior notice.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Liability
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          Wishe is provided as is without guarantees. We are not responsible for financial losses, disputes between users, or indirect damages resulting from use of the platform.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Termination
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We may suspend or terminate access if we detect misuse, fraud, or violation of these terms.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Contact
        </h2>
        <p className="text-gray-600 leading-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6 mb-12">
          If you have questions about these terms, you can contact support through the Wishe website.
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
            href="/privacy"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Privacy Policy
          </Link>

          <Link
            href="/refund-policy"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Refund Policy
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