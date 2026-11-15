"use client";

import { FormEvent, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

const API = process.env.NEXT_PUBLIC_API_URL || "https://wishe-backend-808849531898.us-central1.run.app";

type Wish = { id: string; title: string; imageUri?: string; price: number; amountReceived: number };
type Event = { id: string; eventName: string; hostName: string; wishes: Wish[]; expiresAt?: string | null };
type ConfirmationState = "none" | "verifying" | "confirmed" | "failed";

export default function BabyShowerPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [confirmation, setConfirmation] = useState<ConfirmationState>("none");
  const [selected, setSelected] = useState<Wish | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const returnedFromCheckout = query.get("status") === "success";
    const sessionId = query.get("session_id");
    if (returnedFromCheckout) {
      if (!sessionId) {
        setConfirmation("failed");
      } else {
        setConfirmation("verifying");
        fetch(`${API}/public-baby-showers/${id}/checkout-status?sessionId=${encodeURIComponent(sessionId)}`, {
          cache: "no-store",
        })
          .then(async (response) => {
            const data = await response.json().catch(() => ({}));
            if (!response.ok || data.paid !== true) throw new Error("Payment is not confirmed.");
            setConfirmation("confirmed");
          })
          .catch(() => setConfirmation("failed"));
      }
    }

    fetch(`${API}/public-baby-showers/${id}`)
      .then(async (response) => {
        if (!response.ok) throw new Error("This baby shower wishlist is not available.");
        return response.json();
      })
      .then((data) => setEvent(data))
      .catch((reason) => setError(reason.message))
      .finally(() => setLoading(false));
  }, [id]);

  async function contribute(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selected) return;
    const form = new FormData(e.currentTarget);
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch(`${API}/create-baby-shower-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          babyShowerId: id,
          wishId: selected.id,
          guestName: form.get("name"),
          guestEmail: form.get("email"),
          amount: Number(form.get("amount")),
          requestId: crypto.randomUUID(),
        }),
      });
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error(data.error || "Checkout could not be started.");
      window.location.assign(data.url);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Checkout could not be started.");
      setSubmitting(false);
    }
  }

  if (loading) return <main className={styles.center}>Loading the wishlist…</main>;
  if (!event) return <main className={styles.center}>{error || "Wishlist not found."}</main>;

  return (
    <main className={styles.page}>
      <header className={styles.header}><a href="/">wishe.app</a><span>Baby shower wishlist</span></header>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>A WISHLIST FOR A NEW ARRIVAL</p>
        <h1>{event.eventName}</h1>
        <p>Choose a wish for {event.hostName}, then contribute securely without creating an account.</p>
        {event.expiresAt && <p>This public wishlist is available through {new Date(event.expiresAt).toLocaleDateString(undefined, { month: "long", day: "numeric", year: "numeric" })}.</p>}
        {confirmation === "verifying" && <div className={styles.success}>Confirming your contribution…</div>}
        {confirmation === "confirmed" && <div className={styles.success}>Thank you. Your contribution was received.</div>}
        {confirmation === "failed" && <div className={styles.error}>We could not confirm a completed payment. If you were charged, your contribution will still be applied automatically.</div>}
      </section>
      <section className={styles.grid} aria-label="Baby shower wishes">
        {event.wishes.map((wish) => {
          const remaining = Math.max(0, wish.price - wish.amountReceived);
          return <button className={`${styles.card} ${selected?.id === wish.id ? styles.selected : ""}`} key={wish.id} onClick={() => setSelected(wish)}>
            {wish.imageUri && <img src={wish.imageUri} alt="" />}
            <span><strong>{wish.title}</strong><small>${remaining.toFixed(2)} remaining</small></span>
          </button>;
        })}
      </section>
      {selected && <section className={styles.checkout}>
        <div><p className={styles.eyebrow}>CONTRIBUTE TO</p><h2>{selected.title}</h2><p>Your email is used for the receipt and lets you connect this contribution if you later join Wishe.</p></div>
        <form onSubmit={contribute}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Amount<input name="amount" type="number" min="1" max={Math.max(1, selected.price - selected.amountReceived)} step="0.01" required /></label>
          <button disabled={submitting}>{submitting ? "Opening secure checkout…" : "Continue to checkout"}</button>
        </form>
      </section>}
      {error && <p className={styles.error}>{error}</p>}
      <footer>Payments are processed securely. A Wishe account is not required.</footer>
    </main>
  );
}
