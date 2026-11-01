"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
    };

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.error || "We couldn't save your inquiry. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span>YOUR DETAILS</span>
        <span>01 — 03</span>
      </div>

      <label className="field">
        <span>Name</span>
        <input
          name="name"
          type="text"
          placeholder="Your full name"
          autoComplete="name"
          minLength={2}
          maxLength={100}
          required
        />
      </label>

      <label className="field">
        <span>Email</span>
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          maxLength={254}
          required
        />
      </label>

      <label className="field">
        <span>Phone Number</span>
        <input
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
          minLength={7}
          maxLength={25}
          pattern="[+()0-9 .-]{7,25}"
          title="Enter a valid phone number."
          required
        />
      </label>

      <button className="submit-button" type="submit" disabled={status === "submitting"}>
        <span>{status === "submitting" ? "Sending inquiry..." : "Submit inquiry"}</span>
        <span className="submit-icon">
          {status === "submitting" ? (
            <LoaderCircle className="spin" size={18} />
          ) : (
            <ArrowUpRight size={18} />
          )}
        </span>
      </button>

      {status === "success" && (
        <p className="form-message success-message" role="status">
          <CheckCircle2 size={17} /> Thanks — your inquiry has been submitted successfully.
        </p>
      )}
      {status === "error" && (
        <p className="form-message error-message" role="alert">
          {errorMessage}
        </p>
      )}
      <p className="privacy-note">Your details are used only to respond to your project inquiry.</p>
    </form>
  );
}
