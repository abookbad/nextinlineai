type Payload = Record<string, unknown>;

export function track(eventName: string, payload?: Payload): void {
  // No-op stub for analytics
  if (process.env.NODE_ENV === "development") {
    /* debug: [analytics] ${eventName} */
  }
}


