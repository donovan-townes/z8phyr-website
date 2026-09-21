'use client';

import Script from 'next/script';
import { inquiries } from './integrations';

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

export function InquiryForm() {
  return (
    <div className="zinquiry-embed">
      <p className="zsmall-note">
        Prefer a separate page? <a className="ztext-link" href={inquiries.url}>Open the inquiry form ↗</a>
      </p>
      <div className="zinquiry-paper">
        {/* A native src keeps the form usable if the resizing script is blocked.
            Tally also initializes direct-src embeds when loadEmbeds is called. */}
        <iframe
          src={inquiries.embedUrl}
          loading="lazy"
          width="100%"
          height="1676"
          title="Work with me — project inquiry"
          className="zinquiry-frame"
        />
      </div>
      <Script
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onReady={() => window.Tally?.loadEmbeds()}
      />
    </div>
  );
}
