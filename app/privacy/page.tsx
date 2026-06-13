

import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function PrivacyPolicyPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white text-[#1f2a44] px-6 py-12 flex justify-center`}>
      <div className="max-w-3xl w-full">

        <div className="mb-8 inline-flex rounded-full bg-[#f5f7ff] px-4 py-2 text-sm font-medium text-[#6b9cff]">
          Wishe Legal
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#6b9cff] mb-8">
          Privacy Policy
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-10 rounded-3xl border border-[#dbe6ff] bg-[#f5f7ff] p-6">
          This Privacy Policy explains how Wishe collects, uses, stores, and protects your information when you use the platform and related services. Wishe is operated by Umor LLC, a Florida limited liability company.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Information we collect
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We may collect basic account information such as your name, email address, username, and any information you provide when using the service such as wishlist items or contributions.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          How we use information
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We use your information to operate the service, process payments, enable gifting features, improve performance, and provide customer support.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Analytics and service improvement
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          Wishe may collect aggregated and anonymized information about how users interact with the platform, including wishlist activity, gifting activity, feature usage, and general platform trends. This information is used to improve the service, develop new features, understand user behavior, and enhance the overall user experience. Where reasonably possible, analytics information is processed in a manner that does not directly identify individual users.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Payments
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#ffe0b8] bg-[#fff8ef] p-6">
          Payments are processed through trusted third party providers such as Stripe. Wishe does not store or have direct access to your complete payment card details.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Data sharing
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We do not sell personal data. We do not use personal information for cross app tracking, targeted advertising, or sharing with data brokers. We may share limited information with service providers strictly for operating the platform (such as payment processors, cloud infrastructure providers, and authentication services).
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Data security
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We take reasonable measures to protect your data, but no system can be completely secure.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Data retention
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We retain data only as long as necessary to provide the service and comply with legal obligations.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Your rights
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          You may request access, correction, or deletion of your personal data by contacting support.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Changes to this policy
        </h2>
        <p className="text-gray-600 leading-8 mb-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6">
          We may update this Privacy Policy from time to time. Continued use of the service means you accept the updated policy.
        </p>

        <h2 className="text-2xl font-medium tracking-tight text-[#6b9cff] mt-12 mb-4">
          Contact
        </h2>
        <p className="text-gray-600 leading-8 rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6 mb-12">
          Wishe is operated by Umor LLC. If you have questions about this Privacy Policy or your data, you can contact support through the Wishe website or at support@wishe.app.
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