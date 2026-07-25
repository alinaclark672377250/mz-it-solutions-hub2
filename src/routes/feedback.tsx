import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Feedback & Reviews — MZ IT Services" },
      { name: "description", content: "Share your experience with MZ IT Services and read reviews from other clients across Lahore, Pakistan." },
      { property: "og:title", content: "Feedback & Reviews — MZ IT Services" },
      { property: "og:description", content: "Share your experience and read what other clients say about MZ IT Services." },
    ],
    links: [{ rel: "canonical", href: "/feedback" }],
  }),
  component: Feedback,
});

type Review = {
  id: string;
  name: string;
  rating: number;
  message: string;
  createdAt: number;
};

const KEY = "mz-reviews-v1";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(60),
  rating: z.number().int().min(1).max(5),
  message: z.string().trim().min(5, "Please write at least a few words").max(600),
});

const seed: Review[] = [
  { id: "s1", name: "Ahmed R.", rating: 5, message: "Cleanest rack build I've seen in Lahore. Cables labelled, documentation handed over the same day.", createdAt: Date.now() - 86400000 * 12 },
  { id: "s2", name: "Hina K.", rating: 5, message: "Our school computer lab was up and running in under a week. Very professional team.", createdAt: Date.now() - 86400000 * 30 },
  { id: "s3", name: "Bilal S.", rating: 4, message: "CCTV setup across our warehouse went smoothly. Remote viewing works flawlessly.", createdAt: Date.now() - 86400000 * 60 },
];

function Feedback() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setReviews(JSON.parse(raw));
      else setReviews(seed);
    } catch {
      setReviews(seed);
    }
  }, []);

  const save = (list: Review[]) => {
    setReviews(list);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* ignore */ }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse({ name, rating, message });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    const r: Review = {
      id: crypto.randomUUID(),
      name: parsed.data.name,
      rating: parsed.data.rating,
      message: parsed.data.message,
      createdAt: Date.now(),
    };
    save([r, ...reviews]);
    setName(""); setMessage(""); setRating(5); setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const avg = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
      <div className="max-w-2xl">
        <div className="text-xs uppercase tracking-widest text-primary">Feedback</div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">What clients say.</h1>
        <p className="mt-5 text-lg text-muted-foreground">Share your experience working with MZ IT Services — your review helps others choose with confidence.</p>
        {reviews.length > 0 && (
          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} className={`h-5 w-5 ${i <= Math.round(avg) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/40"}`} />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{avg.toFixed(1)} / 5 · {reviews.length} review{reviews.length === 1 ? "" : "s"}</span>
          </div>
        )}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={submit} className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8 h-fit">
          <h2 className="font-display text-xl font-semibold">Leave a review</h2>
          <div className="mt-5 space-y-4">
            <div>
              <label className="text-sm font-medium">Your name</label>
              <Input value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="Muhammad A." className="mt-1.5" />
            </div>
            <div>
              <label className="text-sm font-medium">Rating</label>
              <div className="mt-1.5 flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <button key={i} type="button" onClick={() => setRating(i)} aria-label={`${i} stars`} className="p-1">
                    <Star className={`h-7 w-7 transition ${i <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/40 hover:text-yellow-400/60"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Your message</label>
              <Textarea value={message} onChange={(e) => setMessage(e.target.value)} maxLength={600} rows={5} placeholder="Tell us about your experience…" className="mt-1.5" />
              <div className="mt-1 text-xs text-muted-foreground text-right">{message.length}/600</div>
            </div>
            {error && <p className="text-sm text-destructive">{error}</p>}
            {sent && <p className="text-sm text-primary">Thanks — your review has been posted.</p>}
            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Post review</Button>
          </div>
        </form>

        <div className="space-y-4">
          {reviews.length === 0 && (
            <p className="text-muted-foreground">No reviews yet — be the first to share.</p>
          )}
          {reviews.map((r) => (
            <article key={r.id} className="rounded-2xl border border-border bg-surface/40 p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{new Date(r.createdAt).toLocaleDateString()}</div>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className={`h-4 w-4 ${i <= r.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground/30"}`} />
                  ))}
                </div>
              </div>
              <div className="mt-3 flex gap-2 text-muted-foreground">
                <Quote className="h-4 w-4 shrink-0 mt-0.5 text-primary/60" />
                <p className="text-sm leading-relaxed">{r.message}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
