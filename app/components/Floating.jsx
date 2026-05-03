"use client";
import { useState } from "react";

// ─── Configure your numbers here ──────────────────────────────────────────────
const CONTACTS = {
  whatsapp: [
    { label: "واتساب 1", number: "++966502630853", display: "966502630853" },
    { label: "واتساب 2", number: "++966553105626", display: "++966553105626" },
  ],
  phone: [
    { label: "هاتف 1", number: "++966502630853", display: "966502630853" },
    { label: "هاتف 2", number: "++966553105626", display: "++966553105626" },
  ],
};

// WhatsApp SVG icon
const WaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// Phone SVG icon
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

// Pulse ring animation for the main toggle button
const PULSE_KEYFRAMES = `
  @keyframes wa-pulse {
    0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.5); }
    70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0); }
    100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
  }
  @keyframes fc-slide-in {
    from { opacity: 0; transform: translateX(16px) scale(0.92); }
    to   { opacity: 1; transform: translateX(0) scale(1); }
  }
  @keyframes fc-fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        ${PULSE_KEYFRAMES}

        .fc-toggle {
          animation: wa-pulse 2.2s infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .fc-toggle:hover {
          transform: scale(1.1);
          animation: none;
          box-shadow: 0 8px 28px rgba(37,211,102,0.55);
        }

        .fc-panel {
          animation: fc-slide-in 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }

        .fc-row {
          transition: transform 0.18s ease, background 0.18s ease;
        }
        .fc-row:hover {
          transform: translateX(-3px);
          background: rgba(255,255,255,0.12) !important;
        }

        .fc-wa-row:hover  { background: rgba(37,211,102,0.18) !important; }
        .fc-tel-row:hover { background: rgba(201,140,50,0.18) !important; }

        .fc-overlay {
          animation: fc-fade-in 0.2s ease forwards;
        }
      `}</style>

      {/* ── Invisible overlay to close on outside click ── */}
      {open && (
        <div
          className="fc-overlay"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 998,
          }}
        />
      )}

      {/* ── Fixed container — right side, vertically centered ── */}
      <div style={{
        position: "fixed",
        right: 18,
        bottom: 32,          // anchored to bottom-right, common UX pattern
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: 10,
      }}>

        {/* ── Expanded panel ── */}
        {open && (
          <div
            className="fc-panel"
            dir="rtl"
            style={{
              background: "linear-gradient(160deg, #1a1a1a 0%, #2d2417 100%)",
              borderRadius: 18,
              border: "1.5px solid rgba(201,140,50,0.3)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
              overflow: "hidden",
              minWidth: 230,
            }}
          >
            {/* Header */}
            <div style={{
              padding: "12px 16px 10px",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
            }}>
              <p style={{
                fontSize: 10, letterSpacing: "0.18em",
                color: "#c98c32", textTransform: "uppercase",
                margin: 0, fontWeight: 700,
              }}>
                تواصل معنا
              </p>
            </div>

            {/* ── WhatsApp numbers ── */}
            <div style={{ padding: "8px 0 4px" }}>
              <p style={{
                fontSize: 9, letterSpacing: "0.12em", color: "#666",
                textTransform: "uppercase", margin: "0 14px 6px",
              }}>واتساب</p>

              {CONTACTS.whatsapp.map((c, i) => (
                <a
                  key={i}
                  href={`https://wa.me/${c.number.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fc-row fc-wa-row"
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 14px",
                    textDecoration: "none",
                    background: "transparent",
                  }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "rgba(37,211,102,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#25D366", flexShrink: 0,
                  }}>
                    <WaIcon />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "#888", marginBottom: 1 }}>{c.label}</div>
                    <div style={{ fontSize: 13, color: "#fff", fontWeight: 600, direction: "ltr" }}>{c.display}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "2px 14px" }} />

            {/* ── Phone numbers ── */}
            <div style={{ padding: "4px 0 10px" }}>
              <p style={{
                fontSize: 9, letterSpacing: "0.12em", color: "#666",
                textTransform: "uppercase", margin: "6px 14px 6px",
              }}>اتصال مباشر</p>

              {CONTACTS.phone.map((c, i) => (
                <a
                  key={i}
                  href={`tel:${c.number}`}
                  className="fc-row fc-tel-row"
                  style={{
                    display: "flex", alignItems: "center", gap: 10,
                    padding: "9px 14px",
                    textDecoration: "none",
                    background: "transparent",
                  }}
                >
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "rgba(201,140,50,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#c98c32", flexShrink: 0,
                  }}>
                    <PhoneIcon />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, color: "#888", marginBottom: 1 }}>{c.label}</div>
                    <div style={{ fontSize: 13, color: "#fff", fontWeight: 600, direction: "ltr" }}>{c.display}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* ── Main toggle button ── */}
        <button
          className="fc-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="تواصل معنا"
          style={{
            width: 56, height: 56, borderRadius: "50%",
            background: open
              ? "linear-gradient(135deg,#c98c32,#f0c060)"
              : "#25D366",
            border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff",
            boxShadow: open
              ? "0 8px 24px rgba(201,140,50,0.45)"
              : "0 8px 24px rgba(37,211,102,0.4)",
            transition: "background 0.25s, box-shadow 0.25s",
          }}
        >
          {open ? (
            // X icon when open
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <WaIcon />
          )}
        </button>

      </div>
    </>
  );
}