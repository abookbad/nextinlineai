"use client";

import * as React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function CallDemo() {
  const [phone, setPhone] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = React.useState<string>("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/call-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }
      setStatus("success");
      setMessage("We’ll ring you shortly with a sample call (simulated).");
    } catch (err: unknown) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Request failed");
    }
  }

  return (
    <div className="glass glass-ring sheen rounded-2xl p-6">
      <h3 className="text-base font-semibold">Try a demo call</h3>
      <p className="mt-1 text-sm text-black/70">Enter your phone number and we’ll place a quick sample call to show how the AI receptionist responds.</p>
      <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <Input
          type="tel"
          inputMode="tel"
          placeholder="e.g. +1 555 123 4567"
          aria-label="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="flex-1"
        />
        <Button disabled={status === "loading"} type="submit" variant="primary">
          {status === "loading" ? "Calling…" : "Call Me"}
        </Button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${status === "error" ? "text-red-600" : "text-black/70"}`}>{message}</p>
      )}
      <p className="mt-2 text-xs text-black/60">No charges, no data stored. This is a safe, simulated demo.</p>
    </div>
  );
}


