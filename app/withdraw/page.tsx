import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function WithdrawFundsPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white text-[#1f2a44] px-6 py-10`}>
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <Link
          href="/"
          className="mb-10 rounded-full bg-[#f5f7ff] px-5 py-2 text-sm font-medium text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
        >
          Back To Home
        </Link>

        <div className="mb-8 inline-flex rounded-full bg-[#f5f7ff] px-4 py-2 text-sm font-medium text-[#6b9cff]">
          wishe Withdrawals
        </div>

        <h1 className="mb-5 text-4xl font-medium tracking-tight text-[#6b9cff] md:text-5xl">
          How To Withdraw Funds
        </h1>

        <p className="mb-10 max-w-2xl text-lg leading-8 text-gray-600">
          When someone contributes to one of your wishes, those funds become available for withdrawal once the gift is eligible to be paid out. Before withdrawing, you may need to complete Stripe onboarding so payouts can be sent securely to your bank account.
        </p>

        <section className="mb-10 grid w-full gap-5 md:grid-cols-2">
          <div className="relative rounded-3xl border border-[#dbe6ff] bg-white p-6 text-left shadow-sm">
            <div className="absolute right-4 top-4 rounded-full bg-[#fff1df] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ff9f43]">
              No Instant Fee
            </div>

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f7ff] text-lg text-[#6b9cff]">
              🏦
            </div>

            <h2 className="mb-3 text-2xl font-medium text-[#6b9cff]">
              Standard Withdrawal
            </h2>

            <p className="mb-5 leading-7 text-gray-600">
              Choose this option if you do not need the money immediately. Standard withdrawals usually take a few business days to reach your bank.
            </p>

            <div className="mb-4 rounded-2xl border border-[#ffe0b8] bg-[#fff8ef] p-4">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#ff9f43]">
                Full Amount
              </div>

              <p className="text-sm leading-6 text-gray-700">
                This option is designed for users who want the complete available withdrawal amount transferred without selecting Stripe instant payout speed.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f7ff] p-4 text-sm leading-6 text-gray-600">
              Best for: normal withdrawals, avoiding instant payout costs, and receiving the full available amount.
            </div>
          </div>

          <div className="relative rounded-3xl border border-[#dbe6ff] bg-[#f5f7ff] p-6 text-left shadow-sm">
            <div className="absolute right-4 top-4 rounded-full bg-[#6b9cff] px-3 py-1 text-xs font-medium uppercase tracking-wide text-white">
              Fastest Option
            </div>

            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#6b9cff] text-lg text-white">
              ⚡
            </div>

            <h2 className="mb-3 text-2xl font-medium text-[#6b9cff]">
              Instant Withdrawal
            </h2>

            <p className="mb-5 leading-7 text-gray-600">
              Choose this option when you want your money sent as quickly as possible. Instant withdrawals can arrive much faster than standard bank payouts.
            </p>

            <div className="mb-4 rounded-2xl border border-[#cfe0ff] bg-white p-4">
              <div className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#6b9cff]">
                Important
              </div>

              <p className="text-sm leading-6 text-gray-700">
                Stripe may apply an instant payout fee depending on your bank and region. The exact fee amount should appear before you confirm the withdrawal.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 text-sm leading-6 text-gray-600">
              Best for: urgent access to funds, last minute purchases, or when speed matters more than avoiding fees.
            </div>
          </div>
        </section>

        <section className="mb-10 w-full rounded-3xl border border-[#dbe6ff] bg-[#fbfcff] p-6 text-left">
          <h2 className="mb-4 text-2xl font-medium text-[#6b9cff]">
            Stripe Setup Steps
          </h2>

          <p className="mb-6 leading-7 text-gray-600">
            We are actively working with Stripe to make this setup process simpler. Because wishe uses a newer gifting and payout model, some onboarding steps may currently be more detailed than we would like. Thank you for your patience while we continue improving the experience.
          </p>

          <p className="mb-6 leading-7 text-gray-600">
            Stripe may ask for basic details so your identity can be verified and payouts can be sent safely. Some fields may already be prefilled by wishe.
          </p>

          <div className="space-y-8 text-gray-600">
            <div>
              <p className="mb-3">
                <span className="font-medium text-[#6b9cff]">1.</span> Put in your email and phone number if they are not already prefilled.
              </p>
            </div>

            <div className="rounded-2xl border border-[#dbe6ff] bg-white p-4 text-sm leading-6 text-gray-600">
              <strong className="text-[#6b9cff]">About the &quot;Business Type&quot; question:</strong> Stripe uses financial industry terminology that can be confusing. Choosing <strong>Individual</strong> does not mean you are operating a business. For wishe users, this simply tells Stripe that you are an individual receiving funds and payouts rather than a company or organization.
            </div>

            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <a
                href="/2ndpage.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="mb-3 text-sm leading-5 md:text-base md:leading-6">
                  <span className="font-medium text-[#6b9cff]">2.</span> Confirm that your business type is set to Individual. This is the correct option for most wishe users.
                </p>
                <img
                  src="/2ndpage.jpg"
                  alt="Stripe business type screen showing Individual selected"
                  className="w-full rounded-xl border border-[#dbe6ff] shadow-sm transition-all duration-300 hover:scale-[1.02] md:rounded-2xl"
                />
              </a>

              <a
                href="/3rdpage.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="mb-3 text-sm leading-5 md:text-base md:leading-6">
                  <span className="font-medium text-[#6b9cff]">3.</span> Add your legal name. wishe may prefill the website as wishe.app.
                </p>
                <img
                  src="/3rdpage.jpg"
                  alt="Stripe personal details screen showing legal name and website fields"
                  className="w-full rounded-xl border border-[#dbe6ff] shadow-sm transition-all duration-300 hover:scale-[1.02] md:rounded-2xl"
                />
              </a>

              <a
                href="/4thpage.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <p className="mb-3 text-sm leading-5 md:text-base md:leading-6">
                  <span className="font-medium text-[#6b9cff]">4.</span> Select your bank or enter your bank details manually so Stripe can send payouts to your account.
                </p>
                <img
                  src="/4thpage.jpg"
                  alt="Stripe bank details screen showing bank selection options"
                  className="w-full rounded-xl border border-[#dbe6ff] shadow-sm transition-all duration-300 hover:scale-[1.02] md:rounded-2xl"
                />
              </a>
            </div>
          </div>
        </section>

        <section className="mb-10 w-full rounded-3xl border border-[#dbe6ff] bg-white p-6 text-left">
          <h2 className="mb-4 text-2xl font-medium text-[#6b9cff]">
            Withdrawal Steps After Setup
          </h2>

          <div className="space-y-4 text-gray-600">
            <p>
              <span className="font-medium text-[#6b9cff]">1.</span> From the wishe home screen, press on your profile photo and open your settings.
            </p>
            <p>
              <span className="font-medium text-[#6b9cff]">2.</span> Make sure your Stripe payout account is connected.
            </p>
            <p>
              <span className="font-medium text-[#6b9cff]">3.</span> Choose the fulfilled wish or available balance you want to withdraw from.
            </p>
            <p>
              <span className="font-medium text-[#6b9cff]">4.</span> Select either Instant Withdrawal or Standard Withdrawal.
            </p>
            <p>
              <span className="font-medium text-[#6b9cff]">5.</span> Confirm your withdrawal and wait for Stripe to process the payout to your bank.
            </p>
          </div>
        </section>

        <section className="mb-12 w-full rounded-3xl bg-[#6b9cff] p-6 text-left text-white">
          <h2 className="mb-3 text-2xl font-medium">
            Important Note
          </h2>
          <p className="leading-7 text-white/90">
            wishe uses Stripe to process payouts securely. Exact payout timing and instant payout fees may depend on Stripe, your connected bank, your account status, and your location. Before confirming, the app should show which withdrawal option you selected.
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
            Contact
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
        </div>
      </div>
    </main>
  );
}
