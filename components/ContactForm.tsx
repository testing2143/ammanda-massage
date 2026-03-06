"use client";

import { FormEvent, useState } from "react";

type ContactState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
  mailtoUrl?: string;
};

const initialForm = {
  name: "",
  phone: "",
  email: "",
  message: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialForm);
  const [feedback, setFeedback] = useState<ContactState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFeedback({ status: "submitting" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = (await response.json()) as {
        message?: string;
        mode?: "sent" | "mailto";
        mailtoUrl?: string;
      };

      if (!response.ok) {
        throw new Error(result.message || "Er ging iets mis bij het verzenden.");
      }

      setFeedback({
        status: "success",
        message: result.message,
        mailtoUrl: result.mode === "mailto" ? result.mailtoUrl : undefined
      });

      if (result.mode === "sent") {
        setFormData(initialForm);
      }
    } catch (error) {
      setFeedback({
        status: "error",
        message: error instanceof Error ? error.message : "Het formulier kon niet worden verzonden."
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface p-8 sm:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Naam*
          <input
            required
            type="text"
            value={formData.name}
            onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))}
            className="mt-2 w-full rounded-2xl border border-bark/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
          />
        </label>

        <label className="block text-sm font-medium text-ink">
          Telefoon*
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(event) => setFormData((current) => ({ ...current, phone: event.target.value }))}
            className="mt-2 w-full rounded-2xl border border-bark/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-ink">
        E-mail*
        <input
          required
          type="email"
          value={formData.email}
          onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))}
          className="mt-2 w-full rounded-2xl border border-bark/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-ink">
        Bericht*
        <textarea
          required
          rows={6}
          value={formData.message}
          onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
          className="mt-2 w-full rounded-[1.5rem] border border-bark/10 bg-white px-4 py-3 text-base outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20"
        />
      </label>

      <p className="mt-4 text-sm leading-7 text-ink/65">
        De gegevens die u verstrekt worden alleen gebruikt om contact met u op te nemen.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={feedback.status === "submitting"}
          className="button-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {feedback.status === "submitting" ? "Verzenden..." : "Verstuur bericht"}
        </button>
        {feedback.mailtoUrl ? (
          <a href={feedback.mailtoUrl} className="button-secondary">
            Open e-mailapp
          </a>
        ) : null}
      </div>

      {feedback.status !== "idle" ? (
        <p
          aria-live="polite"
          className={`mt-5 rounded-2xl px-4 py-3 text-sm leading-7 ${
            feedback.status === "error"
              ? "bg-red-50 text-red-700"
              : "bg-sage/12 text-bark"
          }`}
        >
          {feedback.message}
        </p>
      ) : null}
    </form>
  );
}
