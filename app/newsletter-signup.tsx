'use client';

import { useEffect, useRef } from 'react';
import { newsletter } from './integrations';

export function NewsletterSignup() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Kit replaces this exact script with the form. Keep it inside an isolated
    // container instead of next/script, which can place the script in the body.
    // A fresh script on each mount also restores the form after client navigation.
    const script = document.createElement('script');
    script.async = true;
    script.dataset.uid = newsletter.formId;
    script.src = newsletter.scriptUrl;
    container.appendChild(script);

    return () => container.replaceChildren();
  }, []);

  return (
    <div className="znewsletter-form">
      <div className="zkit-embed" ref={containerRef} />
      <p className="zsmall-note">
        You can also <a className="ztext-link" href={newsletter.url}>join the Breeze on its signup page ↗</a>.
      </p>
    </div>
  );
}
