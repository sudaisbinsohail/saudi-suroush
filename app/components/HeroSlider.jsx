// "use client";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section
//       style={{
//         position: "relative",
//         width: "100%",
//         height: "100vh",
//         minHeight: 600,
//         overflow: "hidden",
//         paddingTop: 72,
//       }}
//     >
//       <style>{`
//         @keyframes shimmer {
//           0% { background-position: -200% center; }
//           100% { background-position: 200% center; }
//         }

//         /* Desktop image: visible by default */
//         .hero-img-desktop { display: block; }
//         .hero-img-mobile  { display: none;  }

//         @media (max-width: 767px) {
//           .hero-img-desktop { display: none;  }
//           .hero-img-mobile  { display: block; }
//         }
//       `}</style>

//       {/* ── DESKTOP BACKGROUND IMAGE ── */}
//       <div className="hero-img-desktop" style={{ position: "absolute", inset: 0 }}>
//         <Image
//           src="/heroimage12.png"
//           alt="غطاء مكيف فيبر جلاس"
//           fill
//           priority
//           style={{ objectFit: "cover", objectPosition: "center" }}
//         />
//       </div>

//       {/* ── MOBILE BACKGROUND IMAGE ── */}
//       <div className="hero-img-mobile" style={{ position: "absolute", inset: 0 }}>
//         <Image
//           src="/heroimage2.png"
//           alt="غطاء مكيف فيبر جلاس"
//           fill
//           priority
//           style={{ objectFit: "cover", objectPosition: "center" }}
//         />
//       </div>

//       {/* ── DARK OVERLAY ── */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background:
//             "linear-gradient(to top, rgba(10,8,4,0.88) 0%, rgba(10,8,4,0.5) 50%, rgba(10,8,4,0.2) 100%)",
//           zIndex: 1,
//         }}
//       />

//       {/* ── TEXT CONTENT ── */}
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           zIndex: 2,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           textAlign: "center",
//           padding: "0 24px",
//         }}
//       >
//         {/* Badge */}
//         <div
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             background: "rgba(201,140,50,0.2)",
//             border: "1px solid rgba(201,140,50,0.5)",
//             borderRadius: 50,
//             padding: "8px 18px",
//             marginBottom: 24,
//             fontSize: "clamp(12px,1vw,14px)",
//             color: "#f0c060",
//             fontWeight: 600,
//           }}
//         >
//           ✦ منتج فيبر جلاس عالي الجودة
//         </div>

//         {/* Headline */}
//         <h1
//           style={{
//             fontSize: "clamp(2rem,5vw,4.5rem)",
//             fontWeight: 900,
//             lineHeight: 1.2,
//             color: "#fff",
//             marginBottom: 16,
//             textShadow: "0 4px 30px rgba(0,0,0,0.7)",
//           }}
//         >
//           غطاء مكيف شباك <br />
//           <span
//             style={{
//               background: "linear-gradient(135deg, #c98c32, #f0c060, #c98c32)",
//               backgroundSize: "200% auto",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               animation: "shimmer 3s linear infinite",
//             }}
//           >
//             فيبر جلاس خارجي
//           </span>
//         </h1>

//         {/* Description */}
//         <p
//           style={{
//             fontSize: "clamp(15px,1.4vw,20px)",
//             color: "rgba(255,255,255,0.82)",
//             lineHeight: 1.8,
//             marginBottom: 40,
//             maxWidth: 580,
//           }}
//         >
//           احمِ مكيفك من الحرارة والغبار والعوامل الجوية بغطاء متين وأنيق
//         </p>

//         {/* CTA Buttons */}
//         <div
//           style={{
//             display: "flex",
//             gap: 14,
//             justifyContent: "center",
//             flexWrap: "wrap",
//           }}
//         >
//           <a
//             href="#products"
//             style={{
//               background: "linear-gradient(135deg,#c98c32,#f0c060)",
//               color: "#fff",
//               padding: "16px 38px",
//               borderRadius: 60,
//               fontSize: "clamp(15px,1.1vw,18px)",
//               fontWeight: 800,
//               textDecoration: "none",
//               boxShadow: "0 8px 24px rgba(201,140,50,0.5)",
//             }}
//           >
//             اطلب الآن ←
//           </a>
//           <a
//             href="https://wa.me/+966553105626"
//             style={{
//               background: "#25D366",
//               color: "#fff",
//               padding: "16px 32px",
//               borderRadius: 60,
//               fontSize: "clamp(15px,1.1vw,18px)",
//               fontWeight: 800,
//               textDecoration: "none",
//               display: "flex",
//               alignItems: "center",
//               gap: 8,
//             }}
//           >
//             💬 واتساب
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: 600,
        overflow: "hidden",
        paddingTop: 72,
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        /* Desktop image: visible by default */
        .hero-img-desktop { display: block; }
        .hero-img-mobile  { display: none;  }

        @media (max-width: 767px) {
          .hero-img-desktop { display: none;  }
          .hero-img-mobile  { display: block; }
        }
      `}</style>

      {/* ── DESKTOP BACKGROUND IMAGE ── */}
      <div className="hero-img-desktop" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <Image
          src="/heroimage12.png"
          alt="غطاء مكيف فيبر جلاس"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </div>

      {/* ── MOBILE BACKGROUND IMAGE ── */}
      <div className="hero-img-mobile" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <Image
          src="/heroimage2.png"
          alt="غطاء مكيف فيبر جلاس"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </div>

      {/* ── DARK OVERLAY ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(10,8,4,0.88) 0%, rgba(10,8,4,0.5) 50%, rgba(10,8,4,0.2) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── TEXT CONTENT ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(201,140,50,0.2)",
            border: "1px solid rgba(201,140,50,0.5)",
            borderRadius: 50,
            padding: "8px 18px",
            marginBottom: 24,
            fontSize: "clamp(12px,1vw,14px)",
            color: "#f0c060",
            fontWeight: 600,
          }}
        >
          ✦ منتج فيبر جلاس عالي الجودة
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2rem,5vw,4.5rem)",
            fontWeight: 900,
            lineHeight: 1.2,
            color: "#fff",
            marginBottom: 16,
            textShadow: "0 4px 30px rgba(0,0,0,0.7)",
          }}
        >
          غطاء مكيف شباك <br />
          <span
            style={{
              background: "linear-gradient(135deg, #c98c32, #f0c060, #c98c32)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}
          >
            فيبر جلاس خارجي
          </span>
        </h1>

        {/* Description */}
        <p
          style={{
            fontSize: "clamp(15px,1.4vw,20px)",
            color: "rgba(255,255,255,0.82)",
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 580,
          }}
        >
          احمِ مكيفك من الحرارة والغبار والعوامل الجوية بغطاء متين وأنيق
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#products"
            style={{
              background: "linear-gradient(135deg,#c98c32,#f0c060)",
              color: "#fff",
              padding: "16px 38px",
              borderRadius: 60,
              fontSize: "clamp(15px,1.1vw,18px)",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 8px 24px rgba(201,140,50,0.5)",
            }}
          >
            اطلب الآن ←
          </a>
          <a
            href="https://wa.me/+966553105626"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "16px 32px",
              borderRadius: 60,
              fontSize: "clamp(15px,1.1vw,18px)",
              fontWeight: 800,
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            💬 واتساب
          </a>
        </div>
      </div>
    </section>
  );
}