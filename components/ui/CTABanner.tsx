"use client";

import { useState } from "react";

export function CTABanner({
  title = "Get Your Free Datong Checklist",
  description = "Packing list, key Chinese phrases, must-see attractions ranked — everything you need, in one PDF.",
  buttonText = "Send Me the Guide",
  variant = "teal",
}: {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "teal" | "stone" | "red";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const variantStyles: Record<string, string> = {
    teal: "bg-teal-50 border border-teal-600",
    stone: "bg-stone-100 border border-stone-200",
    red: "bg-red-50 border border-red-800",
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
    <div className={`my-8 p-6 sm:p-8 rounded-xl ${variantStyles[variant]}`}>
      <div className="max-w-lg mx-auto text-center">
        <h3 className="text-xl font-display font-bold text-stone-900 mb-2">
          {title}
        </h3>
        <p className="text-sm text-stone-700 mb-4">{description}</p>

        {status === "success" ? (
          <div className="text-teal-600 font-semibold text-sm">{message}</div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2.5 rounded-md border border-stone-200 bg-white text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-red-800/30 focus:border-red-800 transition-shadow"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-5 py-2.5 rounded-md bg-red-800 text-white text-sm font-semibold hover:bg-red-900 disabled:opacity-50 transition-colors flex-shrink-0"
            >
              {status === "loading" ? "Sending..." : buttonText}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-800 text-xs mt-2">{message}</p>
        )}

        <p className="text-xs text-stone-400 mt-3">
          No spam, unsubscribe anytime. We&apos;ll send the checklist and occasional travel tips.
        </p>
      </div>
    </div>
  );
}
