import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <main className={`${inter.className} min-h-screen bg-white text-black px-6 py-20 flex justify-center`}>
      <div className="max-w-3xl w-full">

        <h1 className="text-4xl font-light tracking-tight mb-10">
          Contact
        </h1>

        <p className="text-gray-600 leading-loose mb-6">
          You can reach us through Instagram.
        </p>

        <p className="text-gray-600 text-lg mb-12">
          @wishe.app
        </p>

        <div className="flex flex-col gap-4 max-w-sm">
          <Link
            href="/"
            className="bg-[#6b9cff] text-white px-6 py-3 rounded-full text-center hover:scale-[1.02] transition-all duration-300"
          >
            Home
          </Link>

          <Link
            href="/faq"
            className="bg-[#f5f7ff] text-[#6b9cff] px-6 py-3 rounded-full text-center border border-[#dbe6ff] hover:bg-[#edf3ff] transition-all duration-300"
          >
            FAQ
          </Link>
          <Link
            href="/privacy"
            className="bg-[#f5f7ff] text-[#6b9cff] px-6 py-3 rounded-full text-center border border-[#dbe6ff] hover:bg-[#edf3ff] transition-all duration-300"
          >
            Privacy Policy
          </Link>

          <Link
            href="/refund-policy"
            className="bg-[#f5f7ff] text-[#6b9cff] px-6 py-3 rounded-full text-center border border-[#dbe6ff] hover:bg-[#edf3ff] transition-all duration-300"
          >
            Refund Policy
          </Link>

          <Link
            href="/terms"
            className="bg-[#f5f7ff] text-[#6b9cff] px-6 py-3 rounded-full text-center border border-[#dbe6ff] hover:bg-[#edf3ff] transition-all duration-300"
          >
            Terms Of Service
          </Link>
        </div>

      </div>
    </main>
  );
}