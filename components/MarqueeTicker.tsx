"use client";

const TICKER_TEXT =
  "PRATIK JADHAV · FULL-STACK DEVELOPER · AI TOOLS & AGENTIC WORKFLOWS · AUTOMATION · PUNE, INDIA ·";

export default function MarqueeTicker() {
  // Triple for seamless loop
  const repeated = [TICKER_TEXT, TICKER_TEXT, TICKER_TEXT];

  return (
    <div className="slim-ticker" aria-hidden="true">
      <div className="slim-ticker-track">
        {repeated.map((text, i) => (
          <span key={i} className="slim-ticker-text mono">
            {text}&nbsp;&nbsp;&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}
