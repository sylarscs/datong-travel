"use client";

import { useState } from "react";
import Link from "next/link";

export function CTABanner({
  title = "Get Your Free Datong Checklist",
  description = "Packing list, key Chinese phrases, must-see attractions ranked — everything you need, in one PDF.",
  buttonText = "Send Me the Guide",
  variant = "jade",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "jade" | "sand" | "cinnabar";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const variantStyles = {
    jade: "bg-jade-50 border-jade/30",
    sand: "bg-sand-100 border-sand-200",
    cinnabar: "bg-red-50 border-cinnabar/20",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "cta_banner" }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Check your inbox! The checklist is on its way.");
        setEmail("");
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className={`my-8 p-6 sm:p-8 rounded-xl border ${variantStyles[variant]}`}>
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-xl font-display font-bold text-stone-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-stone-700 mb-4">{description}</p>

        {status === "success" ? (
          <div className="text-jade font-semibold text-sm">{message}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2.5 rounded-md border border-sand-200 bg-white text-sm text-stone-900 placeholder:text-sand-500 focus:outline-none focus:ring-2 focus:ring-cinnabar/30 focus:border-cinnabar transition-shadow"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2.5 rounded-md bg-cinnabar text-white text-sm font-semibold hover:bg-cinnabar-hover disabled:opacity-50 transition-colors flex-shrink-0"
            >
              {status === "loading" ? "Sending..." : buttonText}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-cinnabar text-xs mt-2">{message}</p>
        )}

        <p className="text-xs text-sand-500 mt-3">
          No spam, unsubscribe anytime. We&apos;ll send the checklist and occasional travel tips.
        </p>
      </div>
    </div>
  );
}
