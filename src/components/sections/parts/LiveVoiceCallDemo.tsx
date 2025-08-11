"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const callScenarios = {
  customerService: {
    title: "Customer Service",
    description: "AI handles support inquiries and troubleshooting",
    workflowId: "4ae56811-4307-464b-87a8-77826799ce67",
    features: [
      "Order status inquiries",
      "Product troubleshooting",
      "Account management",
      "Refund processing",
    ],
  },
  leadQualification: {
    title: "Lead Qualification",
    description: "AI qualifies prospects and books demos",
    workflowId: "e9c705ec-dc69-400d-bba0-a5e336960d4c",
    features: [
      "Budget qualification",
      "Needs assessment",
      "Timeline discovery",
      "Demo scheduling",
    ],
  },
  appointmentBooking: {
    title: "Appointment Booking",
    description: "AI schedules appointments seamlessly",
    workflowId: "d16d5f14-2edd-4cff-afd8-72193da970f3",
    features: [
      "Calendar availability",
      "Service selection",
      "Customer information",
      "Confirmation & reminders",
    ],
  },
} as const;

type ScenarioKey = keyof typeof callScenarios;

interface CallStatus {
  status: "idle" | "calling" | "success" | "error";
  message?: string;
  callId?: string;
}

export default function LiveVoiceCallDemo() {
  const [selectedScenario, setSelectedScenario] = React.useState<ScenarioKey>("appointmentBooking");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [callStatus, setCallStatus] = React.useState<CallStatus>({ status: "idle" });

  const currentScenario = callScenarios[selectedScenario];

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
    return `(${numbers.slice(0, 3)}) ${numbers.slice(3, 6)}-${numbers.slice(6, 10)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    if (formatted.replace(/\D/g, "").length <= 10) setPhoneNumber(formatted);
  };

  const formatForAPI = (phone: string) => {
    const numbers = phone.replace(/\D/g, "");
    return numbers.length === 10 ? `+1${numbers}` : "";
  };

  const initiateCall = async () => {
    const apiPhoneNumber = formatForAPI(phoneNumber);
    if (!apiPhoneNumber) {
      setCallStatus({ status: "error", message: "Please enter a valid 10-digit phone number" });
      return;
    }
    setCallStatus({ status: "calling", message: "Initiating call..." });
    try {
      const response = await fetch("/api/vapi-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ workflowId: currentScenario.workflowId, phoneNumber: apiPhoneNumber }),
      });
      const result = await response.json();
      if (response.ok) {
        setCallStatus({ status: "success", message: "Call initiated successfully! You should receive a call shortly.", callId: result.callId });
      } else {
        setCallStatus({ status: "error", message: result.error || "Failed to initiate call. Please try again." });
      }
    } catch {
      setCallStatus({ status: "error", message: "Network error. Please check your connection and try again." });
    }
  };

  const resetCall = () => {
    setCallStatus({ status: "idle" });
    setPhoneNumber("");
  };

  return (
    <motion.div
      className="glass rounded-2xl border border-white/10 p-6 shadow-2xl backdrop-blur-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="text-xl font-bold text-[rgba(0,0,0,0.95)]">Live AI Voice Call Demo</h3>
      <p className="mt-1 text-sm text-[rgba(0,0,0,0.85)]">Experience how the AI voice agent would handle real calls. Choose a scenario and enter your number.</p>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgba(0,0,0,0.85)]">1. Choose Call Type</p>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
              {(Object.keys(callScenarios) as ScenarioKey[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedScenario(key)}
                  disabled={callStatus.status === "calling"}
                  className={`rounded-lg border p-3 text-left text-sm transition cursor-pointer ${
                    selectedScenario === key ? "border-[var(--nl-blue)] bg-[var(--nl-blue)]/10" : "border-black/10 hover:border-black/20"
                  } disabled:cursor-not-allowed disabled:opacity-50`}
                >
                  <div className="font-bold text-[rgba(0,0,0,0.95)]">{callScenarios[key].title}</div>
                  <div className="mt-1 text-xs text-black/70">{callScenarios[key].description}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[rgba(0,0,0,0.85)]">2. Enter Your Phone Number</p>
            <div className="mt-2 flex gap-3">
              <Input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(555) 123-4567"
                inputMode="tel"
                aria-label="Phone number"
                className="bg-white/90 text-black placeholder-black/40 font-mono"
              />
              <Button onClick={initiateCall} disabled={!phoneNumber || callStatus.status === "calling"} variant="primary">
                Start
              </Button>
            </div>
            <p className="mt-2 text-xs text-[rgba(0,0,0,0.7)]">US numbers only. You’ll receive a call within ~10 seconds.</p>
          </div>

          <div className="rounded-lg border border-black/10 p-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[rgba(0,0,0,0.85)]">This Demo Includes</h4>
            <ul className="mt-2 space-y-1">
              {currentScenario.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-black/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--nl-blue)]" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-xl border border-black/10 p-4 sm:p-6">
          <h4 className="text-center text-sm font-semibold uppercase tracking-wider text-[rgba(0,0,0,0.85)]">Call Status</h4>
          <div className="flex min-h-[200px] flex-col items-center justify-center p-6 text-center">
            {callStatus.status === "idle" && (
              <div className="text-black/60">Select a call type and enter your number to begin</div>
            )}
            {callStatus.status === "calling" && (
              <div>
                <motion.div
                  className="mx-auto mb-4 h-12 w-12 rounded-full border-4 border-[var(--nl-blue)] border-t-transparent"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="text-black/80">{callStatus.message}</div>
                <div className="mt-1 text-xs text-black/60">Please wait while we connect you…</div>
              </div>
            )}
            {callStatus.status === "success" && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--nl-green)]/20 text-[var(--nl-green)]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div className="text-black/80">{callStatus.message}</div>
                {callStatus.callId && <div className="mt-1 text-xs text-black/60">Call ID: {callStatus.callId}</div>}
              </motion.div>
            )}
            {callStatus.status === "error" && (
              <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20 text-red-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-red-600">{callStatus.message}</div>
              </motion.div>
            )}
          </div>
          {(callStatus.status === "success" || callStatus.status === "error") && (
            <Button onClick={resetCall} variant="primary" className="w-full">Try Another Demo</Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}


