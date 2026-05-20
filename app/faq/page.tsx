"use client";

import { useState } from "react";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const faqs = [
  {
    title: "About Wishe",
    content:
      "Wishe is a gifting platform designed to make gifting more personal, flexible, and meaningful. Instead of guessing what someone wants, friends can come together and contribute toward a single wish that a person actually chose. The experience is designed to feel like real gifting rather than simply sending money, because the focus stays on the wish itself instead of the price tag behind it. The goal is to make gifting feel easier, more intentional, and less wasteful.",
  },
  {
    title: "Why can’t I see how much my friends individually donated?",
    content:
      "Wishe is designed to preserve the feeling of gifting rather than turning the experience into tracking dollar amounts between friends. When someone gives you a thoughtful mug in real life, you usually do not turn it over looking for the price tag to see exactly how much they spent. The focus stays on the gesture and the wish itself instead of comparing contribution amounts. Thankfully, this way we also avoid ending up with random mugs sitting around just because someone felt pressured to buy a physical gift.",
  },
  {
    title: "How do gifts work?",
    content:
      "A user creates wishes inside the Wishe app. Friends can view those wishes and contribute toward them. A wish can be fully funded by one person or completed through multiple contributions. Once a wish is fulfilled, the receiver can follow the available withdrawal or fulfillment process inside the app.",
  },
  {
    title: "Can multiple people contribute to one wish?",
    content:
      "Yes. Wishe is built for shared gifting. Multiple people can contribute toward the same wish, making it easier to fund bigger gifts without one person having to cover the full amount alone.",
  },
  {
    title: "Do I need to connect Stripe to receive gifts?",
    content:
      "You can create wishes and use Wishe without connecting Stripe right away, but a connected Stripe account may be required before you can withdraw available funds. Stripe helps securely verify payout details and send eligible funds to your bank.",
  },
  {
    title: "Can I gift someone anonymously?",
    content:
      "Yes. Wishe is designed to support different visibility choices when gifting. Depending on the option selected, a contribution can be shown publicly, shown only to the receiver, or kept anonymous in the shared experience.",
  },
  {
    title: "What happens when a wish is fully funded?",
    content:
      "When a wish reaches its full amount, it becomes fulfilled. The receiver can then view the fulfilled wish and follow the available next steps in the app, such as reviewing the completed wish and withdrawing eligible funds when available.",
  },
  {
    title: "Why does Wishe feel different from sending money?",
    content:
      "Wishe is built around wishes, not transactions. Instead of focusing on exact dollar amounts between friends, the experience is designed to feel more like receiving an eGift toward something you genuinely wanted. You know someone contributed to making your wish come true, but the focus stays on the gesture, surprise, and meaning behind it rather than tracking who paid what. It is meant to feel like gifting, not like asking friends to send money.",
  },
  {
    title: "Can I change or remove a wish?",
    content:
      "Users can manage their wishes inside the app. If a wish has not been fulfilled yet, it may be possible to edit or remove it depending on its current status. Once money has already been contributed or a wish is fulfilled, some actions may be limited to protect contributors and keep payment records accurate.",
  },
  {
    title: "Who can see my wishes?",
    content:
      "Your wishes can be seen by people who search for your name or username, or by people who already have you in their contacts or connected friend list. Wishe is designed so people can find the right person and contribute to their wishes without needing the receiver to send every wish manually.",
  },
  {
    title: "Why can’t I see who added me to their friend list?",
    content:
      "Wishe is designed to keep social connections lightweight, comfortable, and focused on meaningful moments rather than notifications about every interaction. Features such as pinned friends are meant to help people keep important birthdays and wishes on their radar without creating pressure around who added whom. This helps keep the experience personal, avoids unnecessary social friction, and reduces notification clutter between people who may no longer be closely connected. However, if you would like to let someone know you have them pinned, you can always message them directly inside the app or surprise them with a coffee from the Wishe Store.",
  },
  {
    title: "What happens if someone contributes accidentally?",
    content:
      "Contributors are responsible for reviewing the wish, amount, and recipient before confirming a contribution. Similar to purchasing a gift in a store, users have time to review what they are contributing toward, decide the amount they would like to give, and confirm their payment details before completing the contribution. If there is a suspected billing error, duplicate charge, or fraudulent activity, support can review the situation.",
  },
  {
    title: "Can I use Wishe internationally?",
    content:
      "Wishe is being built with international use in mind, but payment and withdrawal availability may depend on the countries, banks, currencies, and payout options supported by Wishe and its payment providers at the time.",
  },
  {
    title: "Are payments secure?",
    content:
      "Payments are processed through trusted payment providers such as Stripe. Wishe does not store full card details. Payment processing, security checks, and payout infrastructure are handled through Stripe and related secure systems.",
  },
  {
    title: "How do withdrawals work?",
    content:
      "When funds are available for withdrawal, the receiver can choose a withdrawal option inside the app. Standard withdrawals usually take a few business days and prioritize receiving the full available payout amount without choosing instant payout speed. Instant withdrawals may arrive faster, but Stripe may apply an instant payout fee depending on eligibility, bank, and region.",
  },
  {
    title: "What is the difference between standard and instant withdrawal?",
    content:
      "Standard withdrawal is best when speed is not urgent and the user wants the full available payout amount sent through the normal bank payout flow. Instant withdrawal is best when the user wants faster access to funds, but it may include an additional instant payout fee from Stripe.",
  },
  {
    title: "Can I get a refund?",
    content:
      "Most completed transactions are generally final because funds may be transferred, allocated, or withdrawn. Refunds may be reviewed in cases such as accidental duplicate payments, billing errors, fraud, or other unusual issues. Refund requests can be submitted through support.",
  },
  {
    title: "Can I delete my account?",
    content:
      "Yes. In the Wishe app, users can go to Settings, open Information Change, and choose Delete My Account. Deleting an account removes the user's profile data and related account information according to the app's deletion process.",
  },
  {
    title: "How do I contact support?",
    content:
      "You can reach Wishe through the contact page on the website. Support can help with payment questions, refund reviews, account questions, and general app issues.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className={`${inter.className} min-h-screen bg-white text-[#1f2a44] px-6 py-12 flex justify-center`}>
      <div className="max-w-3xl w-full">
        <div className="mb-8 inline-flex rounded-full bg-[#f5f7ff] px-4 py-2 text-sm font-medium text-[#6b9cff]">
          Wishe Help
        </div>

        <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#6b9cff] mb-6">
          Frequently Asked Questions
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-10 rounded-3xl border border-[#dbe6ff] bg-[#f5f7ff] p-6">
          Find quick answers about how Wishe works, how gifting works, how withdrawals are handled, and where to get support.
        </p>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.title}
                className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#ffe0b8] bg-[#fff8ef]"
                    : "border-[#dbe6ff] bg-[#fbfcff]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-medium text-[#6b9cff]">
                    {faq.title}
                  </span>
                  <span className={`text-2xl leading-none transition-transform duration-300 ${isOpen ? "rotate-45 text-[#ff9f43]" : "text-[#6b9cff]"}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-8">
                    {faq.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

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
            href="/refund-policy"
            className="rounded-full border border-[#dbe6ff] bg-[#f5f7ff] px-6 py-3 text-center text-[#6b9cff] transition-all duration-300 hover:bg-[#edf3ff]"
          >
            Refund Policy
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