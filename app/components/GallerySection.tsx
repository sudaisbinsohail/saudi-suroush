"use client";
import { useState, useEffect, useCallback } from "react";

// ─── Add your real image paths here ───────────────────────────────────────────
// Option A — public folder (simplest):
//   Put photos in /public/gallery/ and use paths like "/gallery/photo1.jpg"
//
// Option B — imported assets (Next.js optimized):
//   import photo1 from "@/public/gallery/photo1.jpg";
//   Then replace src values below with the imported variables.

const IMAGES = [
  { id: 1, src: "/heroimage3.png", alt: "تركيب غطاء مكيف فيبر جلاس" },
  { id: 2, src: "heroimage4.png", alt: "صندوق مكيف فيبر جلاس" },
  { id: 3, src: "heroimage5.png", alt: "واجهة فيلا بعد التركيب" },
  { id: 4, src: "heroimage2.png", alt: "تركيب احترافي على عمارة" },
  { id: 5, src: "heroimage1.png", alt: "تركيب احترافي على عمارة" },
  { id: 6, src: "heroimage6.png", alt: "تركيب احترافي على عمارة" },

];

export default function GallerySection() {
  const [open, setOpen] = useState<number | null>(null);

  const close = () => setOpen(null);

  const prev = useCallback(() =>
    setOpen((i) => (i === null ? 0 : (i - 1 + IMAGES.length) % IMAGES.length)),
  []);

  const next = useCallback(() =>
    setOpen((i) => (i === null ? 0 : (i + 1) % IMAGES.length)),
  []);

  // Keyboard navigation
  useEffect(() => {
    if (open === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowRight") prev();
      if (e.key === "ArrowLeft")  next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, prev, next]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = open !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{`
        /* ── Grid thumbnails ── */
        .g-thumb {
          overflow: hidden;
          border-radius: 14px;
          cursor: pointer;
          aspect-ratio: 4/3;
          background: #e8e0d0;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .g-thumb:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 45px rgba(0,0,0,0.18);
        }
        .g-thumb img {
          width: 100%; height: 100%;
          object-fit: cover; display: block;
          transition: transform 0.4s ease;
        }
        .g-thumb:hover img { transform: scale(1.06); }

        /* ── Lightbox animations ── */
        @keyframes lbFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lbSlideUp {
          from { transform: scale(0.92) translateY(16px); opacity: 0; }
          to   { transform: scale(1) translateY(0);       opacity: 1; }
        }

        /* ── Lightbox backdrop ── */
        .lb-backdrop {
          position: fixed; inset: 0; z-index: 9999;
          background: rgba(10, 8, 6, 0.93);
          display: flex; align-items: center; justify-content: center;
          animation: lbFadeIn 0.2s ease forwards;
        }

        /* ── Image wrapper ── */
        .lb-img-wrap {
          position: relative;
          max-width: min(90vw, 820px);
          width: 100%;
          animation: lbSlideUp 0.3s cubic-bezier(0.34,1.56,0.64,1) forwards;
        }
        .lb-img-wrap img {
          width: 100%;
          max-height: 82vh;
          object-fit: contain;
          border-radius: 12px;
          display: block;
        }

        /* ── Nav arrows ── */
        .lb-btn {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 44px; height: 44px; border-radius: 50%;
          background: rgba(201,140,50,0.9); border: none;
          color: #fff; font-size: 22px; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, transform 0.2s;
          z-index: 10;
        }
        .lb-btn:hover {
          background: #c98c32;
          transform: translateY(-50%) scale(1.1);
        }
        .lb-prev { right: -56px; }
        .lb-next { left:  -56px; }

        /* ── Close button ── */
        .lb-close {
          position: absolute; top: -46px; left: 0;
          background: rgba(255,255,255,0.1); border: none;
          color: #fff; font-size: 18px; cursor: pointer;
          width: 36px; height: 36px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .lb-close:hover { background: rgba(255,255,255,0.22); }

        /* ── Dot counter ── */
        .lb-counter {
          position: absolute; bottom: -36px;
          left: 50%; transform: translateX(-50%);
          display: flex; gap: 6px; align-items: center;
        }
        .lb-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: background 0.2s, width 0.25s;
        }
        .lb-dot.active {
          background: #f0c060;
          width: 18px; border-radius: 3px;
        }

        /* ── Mobile ── */
        @media (max-width: 700px) {
          .lb-prev { right: -38px; }
          .lb-next { left:  -38px; }
          .lb-btn  { width: 34px; height: 34px; font-size: 18px; }
        }
      `}</style>

      {/* ── SECTION ── */}
      <section id="gallery" dir="rtl" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{
              fontSize: 11, letterSpacing: "0.25em",
              color: "#c98c32", textTransform: "uppercase", marginBottom: 8,
            }}>
              معرض الأعمال
            </p>
            <h2 style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800, color: "#1a1a1a",
            }}>
              أعمالنا تتحدث عنا
            </h2>
          </div>

          {/* Image grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: 14,
          }}>
            {IMAGES.map((img, idx) => (
              <div key={img.id} className="g-thumb" onClick={() => setOpen(idx)}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {open !== null && (
        <div
          className="lb-backdrop"
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="lb-img-wrap">

            {/* Close */}
            <button className="lb-close" onClick={close} aria-label="إغلاق">
              ✕
            </button>

            {/* Full image — key forces re-animation on navigation */}
            <img
              key={open}
              src={IMAGES[open].src}
              alt={IMAGES[open].alt}
            />

            {/* Prev */}
            <button className="lb-btn lb-prev" onClick={prev} aria-label="السابق">
              ‹
            </button>

            {/* Next */}
            <button className="lb-btn lb-next" onClick={next} aria-label="التالي">
              ›
            </button>

            {/* Dot indicator */}
            <div className="lb-counter">
              {IMAGES.map((_, i) => (
                <div
                  key={i}
                  className={`lb-dot ${i === open ? "active" : ""}`}
                  onClick={() => setOpen(i)}
                />
              ))}
            </div>

          </div>
        </div>
      )}
    </>
  );
}