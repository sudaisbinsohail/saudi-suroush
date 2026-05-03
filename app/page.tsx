"use client";
import { useState } from "react";
import HeroSlider from './components/HeroSlider'
import GallerySection from "./components/GallerySection";
import FloatingContact from './components/Floating'

const features = [
  { icon: "🌡️", text: "يتحمل درجات الحرارة العالية", en: "Heat resistant up to 80°C" },
  { icon: "🛡️", text: "مقاوم للعوامل الجوية والأمطار", en: "Weatherproof & UV stable" },
  { icon: "⚖️", text: "وزن خفيف ومتانة عالية", en: "Lightweight yet ultra-durable" },
  { icon: "🔇", text: "يقلل الضوضاء الخارجية", en: "Reduces external noise" },
  { icon: "🎨", text: "تصميم أنيق يناسب واجهة المنزل", en: "Elegant aesthetic design" },
  { icon: "🔧", text: "سهل التركيب والصيانة", en: "Easy to install & maintain" },
];

const faqs = [
  {
    q: "ما هي المقاسات المتوفرة؟",
    a: "نوفر مقاسات متعددة تناسب جميع أنواع مكيفات الشباك. تواصل معنا لتحديد المقاس المناسب لمكيفك.",
  },
  {
    q: "هل التركيب يشمل جميع أنواع المكيفات؟",
    a: "نعم، فريقنا المتخصص يقوم بتركيب الغطاء على جميع أنواع ومقاسات مكيفات الشباك.",
  },
  {
    q: "ما مدة الضمان على المنتج؟",
    a: "نوفر ضمان على جودة المنتج. تواصل معنا للاستفسار عن تفاصيل الضمان.",
  },
  {
    q: "كم تستغرق عملية التركيب؟",
    a: "التركيب يستغرق عادةً من 30 إلى 60 دقيقة فقط بواسطة فريقنا المدرب.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      dir="rtl"
      style={{
        fontFamily: "'Segoe UI', 'Tahoma', 'Arial', sans-serif",
        background: "#f5f0e8",
        minHeight: "100vh",
        color: "#1a1a1a",
        overflowX: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(201, 140, 50, 0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 20px rgba(201, 140, 50, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(201, 140, 50, 0); }
        }
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.15) !important;
        }
        .btn-primary {
          transition: all 0.25s ease;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(201, 140, 50, 0.45);
        }
        .btn-wa {
          transition: all 0.25s ease;
        }
        .btn-wa:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(37, 211, 102, 0.45);
        }
        .feature-item {
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .feature-item:hover {
          background: rgba(201,140,50,0.08) !important;
          transform: translateX(-4px);
        }
        .faq-item {
          transition: border-color 0.2s ease;
        }
        .geo-pattern {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z' fill='none' stroke='rgba(201,140,50,0.1)' stroke-width='1'/%3E%3C/svg%3E");
          background-size: 60px 60px;
        }
        .animate-in {
          animation: fadeUp 0.7s ease forwards;
        }
        /* Hero responsive: mobile shows cover, desktop shows split */
        .mobile-hero { display: block; }
        .desktop-hero { display: none; }
        @media (min-width: 768px) {
          .mobile-hero { display: none; }
          .desktop-hero { display: flex; }
        }
      `}</style>

      <FloatingContact/>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(245,240,232,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,140,50,0.15)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg, #c98c32, #f0c060)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16, fontWeight: 700, color: "#fff",
            boxShadow: "0 4px 12px rgba(201,140,50,0.35)",
          }}>ر</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, color: "#1a1a1a", lineHeight: 1.1 }}>شركه الزهراني فيبرجلاس</div>
            <div style={{ fontSize: 10, color: "#c98c32", letterSpacing: "0.05em" }}>أغطية مكيفات فيبر جلاس</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <a href="#products" style={{
            color: "#666", fontSize: 13, textDecoration: "none",
            padding: "8px 14px", borderRadius: 50,
          }}>خدماتنا</a>
          <a
            href="https://wa.me/+966553105626"
            className="btn-wa"
            style={{
              background: "#25D366", color: "#fff",
              padding: "8px 18px", borderRadius: 50,
              fontSize: 13, fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
            }}
          >
            <span>💬</span> واتساب
          </a>
        </div>
      </nav>

      <HeroSlider/>

      {/* ── HERO ── */}
      {/* MOBILE: full-screen cover image with text overlay */}
      {/* DESKTOP: two-column layout — text left, image right */}


      {/* ── PRODUCTS ── */}
      <section id="products" style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "#c98c32", textTransform: "uppercase", marginBottom: 8 }}>خدماتنا</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#1a1a1a" }}>اختر ما يناسبك</h2>
            {/* <p style={{ color: "#888", marginTop: 10 }}>خياران فقط — بسيط وواضح</p> */}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>

            {/* CARD 1 — Product Only */}
            <div className="card-hover" style={{
              background: "#f9f6f1", borderRadius: 24, padding: 32,
              border: "1.5px solid rgba(201,140,50,0.2)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: "rgba(201,140,50,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20,
              }}>📦</div>

              <div style={{
                display: "inline-block",
                background: "rgba(201,140,50,0.1)", color: "#a06b1a",
                fontSize: 11, fontWeight: 700, padding: "3px 10px",
                borderRadius: 50, marginBottom: 14,
                border: "1px solid rgba(201,140,50,0.25)", width: "fit-content",
              }}>المنتج فقط</div>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.4 }}>
                صندوق مكيف فيبر جلاس
              </h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, marginBottom: 24, flexGrow: 1 }}>
                غطاء خارجي مصنوع من الفيبر جلاس عالي الجودة. يتحمل الحرارة والغبار ويضفي مظهراً أنيقاً على واجهة منزلك.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 8 }}>
                {["فيبر جلاس أصلي عالي الجودة", "شبكة تهوية مدمجة", "متعدد المقاسات"].map(f => (
                  <li key={f} style={{ fontSize: 13, color: "#555", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#c98c32", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/+966553105626?text=أريد الاستفسار عن صندوق المكيف)"
                className="btn-primary"
                style={{
                  background: "linear-gradient(135deg, #c98c32, #f0c060)",
                  color: "#fff", padding: "13px 0", borderRadius: 50,
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  textAlign: "center", display: "block",
                  boxShadow: "0 6px 18px rgba(201,140,50,0.3)",
                }}
              >
                اطلب المنتج 📦
              </a>
            </div>

            {/* CARD 2 — Product + Installation */}
            <div className="card-hover" style={{
              background: "linear-gradient(160deg, #1a1a1a 0%, #2d2417 100%)",
              borderRadius: 24, padding: 32,
              border: "1.5px solid rgba(201,140,50,0.4)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.2)",
              display: "flex", flexDirection: "column",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 16, left: 16,
                background: "linear-gradient(135deg, #c98c32, #f0c060)",
                color: "#fff", fontSize: 11, fontWeight: 700,
                padding: "4px 12px", borderRadius: 50,
              }}>⭐ الأكثر طلباً</div>

              <div style={{
                position: "absolute", top: -60, right: -60,
                width: 200, height: 200, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,140,50,0.2) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />

              <div style={{
                width: 56, height: 56, borderRadius: 16,
                background: "rgba(201,140,50,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 28, marginBottom: 20, marginTop: 16,
              }}>🔧</div>

              <div style={{
                display: "inline-block",
                background: "rgba(201,140,50,0.15)", color: "#f0c060",
                fontSize: 11, fontWeight: 700, padding: "3px 10px",
                borderRadius: 50, marginBottom: 14,
                border: "1px solid rgba(201,140,50,0.35)", width: "fit-content",
              }}>المنتج + التركيب</div>

              <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 10, lineHeight: 1.4 }}>
                صندوق مكيف + تركيب احترافي
              </h3>
              <p style={{ fontSize: 14, color: "#aaa", lineHeight: 1.8, marginBottom: 24, flexGrow: 1 }}>
                نفس المنتج عالي الجودة مع خدمة تركيب احترافية على يد فريق متخصص. نضمن التركيب الصحيح والآمن.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: 8 }}>
                {["كل ما في المنتج الأساسي", "فريق تركيب متخصص ومدرب", "ضمان على التركيب", "توصيل وتركيب سريع"].map(f => (
                  <li key={f} style={{ fontSize: 13, color: "#ccc", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ color: "#f0c060", fontWeight: 700 }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/+966553105626?text=أريد الاستفسار عن صندوق المكيف مع التركيب"
                className="btn-wa"
                style={{
                  background: "#25D366", color: "#fff",
                  padding: "13px 0", borderRadius: 50,
                  fontSize: 14, fontWeight: 700, textDecoration: "none",
                  textAlign: "center", display: "block",
                  boxShadow: "0 6px 18px rgba(37,211,102,0.3)",
                }}
              >
                اطلب مع التركيب 🔧
              </a>
            </div>
          </div>

          <div style={{
            textAlign: "center", marginTop: 24,
            padding: "14px 20px", borderRadius: 14,
            background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.2)",
          }}>
            <p style={{ fontSize: 13, color: "#555" }}>
              💬 مش عارف أي خيار يناسبك؟&nbsp;
              <a href="https://wa.me/+966553105626" style={{ color: "#25D366", fontWeight: 700, textDecoration: "none" }}>
                تواصل معنا على واتساب
              </a>
              &nbsp;وسنساعدك
            </p>
          </div>
        </div>
      </section>

      <GallerySection/>

      {/* ── FEATURES ── */}
      <section id="features" style={{ padding: "80px 24px", background: "#f5f0e8" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "#c98c32", textTransform: "uppercase", marginBottom: 8 }}>لماذا الفيبر جلاس؟</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: "#1a1a1a" }}>مميزات المنتج</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {features.map((f, i) => (
              <div key={i} className="feature-item" style={{
                display: "flex", alignItems: "flex-start", gap: 14,
                padding: "16px 20px", borderRadius: 14,
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(201,140,50,0.15)",
              }}>
                <span style={{ fontSize: 26, flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#1a1a1a" }}>{f.text}</div>
                  <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{f.en}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "#c98c32", textTransform: "uppercase", marginBottom: 8 }}>كيف تطلب؟</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: "#1a1a1a", marginBottom: 52 }}>3 خطوات بسيطة</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {[
              { step: "01", title: "تواصل معنا", desc: "عبر واتساب أو الاتصال المباشر", icon: "💬", color: "#25D366" },
              { step: "02", title: "اختر خيارك", desc: "المنتج فقط أو مع خدمة التركيب", icon: "📋", color: "#c98c32" },
              { step: "03", title: "استلم وانبسط", desc: "توصيل سريع أو تركيب احترافي في موعدك", icon: "🎉", color: "#c98c32" },
            ].map((item, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 20,
                padding: "20px 24px", borderRadius: 18,
                background: "#f9f6f1", border: "1px solid rgba(201,140,50,0.15)",
                textAlign: "right",
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: "50%", flexShrink: 0,
                  background: `linear-gradient(135deg, ${item.color}cc, ${item.color})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 24,
                  animation: i === 0 ? "pulse-ring 2.5s infinite" : "none",
                }}>
                  {item.icon}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ fontWeight: 800, fontSize: 16, color: "#1a1a1a" }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#888", marginTop: 3 }}>{item.desc}</div>
                </div>
                <div style={{ fontSize: 28, fontWeight: 900, color: "rgba(201,140,50,0.15)" }}>{item.step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "80px 24px", background: "#f5f0e8" }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "#c98c32", textTransform: "uppercase", marginBottom: 8 }}>الأسئلة الشائعة</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, color: "#1a1a1a" }}>عندك سؤال؟</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                style={{
                  background: "#fff",
                  borderRadius: 14,
                  border: `1.5px solid ${openFaq === i ? "rgba(201,140,50,0.45)" : "rgba(201,140,50,0.15)"}`,
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div style={{ padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: 700 }}>{faq.q}</span>
                  <span
                    style={{
                      color: "#c98c32",
                      fontSize: 22,
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.2s",
                    }}
                  >
                    +
                  </span>
                </div>

                {/* Use maxHeight + transition for smooth expand */}
                <div
                  style={{
                    maxHeight: openFaq === i ? 500 : 0,
                    padding: openFaq === i ? "14px 20px 18px" : "0 20px",
                    fontSize: 14,
                    color: "#666",
                    lineHeight: 1.8,
                    borderTop: "1px solid rgba(201,140,50,0.12)",
                    overflow: "hidden",
                    // transition: "all 0.3s ease",
                  }}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(160deg, #1a1a1a 0%, #2d2417 100%)",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500, height: 300,
          background: "radial-gradient(ellipse, rgba(201,140,50,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 520, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 2.8rem)", fontWeight: 800, color: "#fff", marginBottom: 14 }}>
            جاهز تحمي مكيفك؟
          </h2>
          <p style={{ color: "#999", fontSize: 15, marginBottom: 36 }}>تواصل معنا الآن واطلب غطاءك بسهولة</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://wa.me/+966553105626" className="btn-wa" style={{
              background: "#25D366", color: "#fff",
              padding: "15px 36px", borderRadius: 50,
              fontSize: 15, fontWeight: 700, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 8,
              boxShadow: "0 6px 20px rgba(37,211,102,0.4)",
            }}>
              <span>💬</span> واتساب الآن
            </a>
            <a href="tel:+966 50 263 0853" className="btn-primary" style={{
              border: "1.5px solid rgba(255,255,255,0.25)",
              color: "#fff", padding: "15px 36px", borderRadius: 50,
              fontSize: 15, fontWeight: 600, textDecoration: "none",
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span>📞</span> اتصل بنا
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "24px 32px", background: "#111",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 12,
        borderTop: "1px solid rgba(201,140,50,0.15)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            width: 30, height: 30, borderRadius: "50%",
            background: "linear-gradient(135deg, #c98c32, #f0c060)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 13, fontWeight: 700, color: "#fff",
          }}>ر</div>
          <span style={{ color: "#777", fontSize: 13 }}>ركن الأوائل — أغطية مكيفات فيبر جلاس</span>
        </div>
        <p style={{ color: "#555", fontSize: 12 }}>© {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}
