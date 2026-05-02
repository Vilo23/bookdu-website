"use client";

import Script from "next/script";

declare global {
  interface Window {
    posthog?: {
      init: (key: string, options: Record<string, unknown>) => void;
    };
  }
}

export function PostHogScript() {
  return (
    <Script
      src="https://us-assets.i.posthog.com/static/array.js"
      strategy="lazyOnload"
      onLoad={() => {
        window.posthog?.init("phc_unUx8ksXFdDvyun9FL8fSNkt7EcvBQSXDo3puGi4xRFh", {
          api_host: "https://us.i.posthog.com",
          person_profiles: "identified_only",
          capture_pageview: true,
          capture_pageleave: true,
        });
      }}
    />
  );
}
