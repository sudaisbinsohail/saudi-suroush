
      <section
        className="hero-section"
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: 600,
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <Image
          src="/heroimage2.png" // use same or different for mobile via CSS later
          alt="صندوق مكيف فيبر جلاس"
          fill
          priority
          style={{
            objectFit: "fill",
            objectPosition: "center",
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,8,4,0.85) 0%, rgba(10,8,4,0.5) 40%, rgba(0,0,0,0.2) 100%)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <div
            style={{
              maxWidth: 1100,
              animation: "fadeUp 0.8s ease forwards",
              opacity: 0,
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
                marginBottom: 28,
                fontSize: "clamp(12px, 1vw, 14px)",
                color: "#f0c060",
                fontWeight: 600,
              }}
            >
              ✦ منتج فيبر جلاس عالي الجودة
            </div>

            {/* BIG HEADLINE */}
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 5rem)", // 🔥 BIG
                fontWeight: 900,
                lineHeight: 1.15,
                color: "#fff",
                marginBottom: 20,
                textShadow: "0 4px 30px rgba(0,0,0,0.7)",
              }}
            >
              غطاء مكيف شباك <br />
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #c98c32, #f0c060, #c98c32)",
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
                fontSize: "clamp(16px, 1.5vw, 22px)", // bigger
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.8,
                marginBottom: 40,
                maxWidth: 700,
                marginInline: "auto",
              }}
            >
              احمِ مكيفك من الحرارة والغبار والعوامل الجوية بغطاء متين وأنيق
            </p>

            {/* BIG BUTTONS */}
            <div
              style={{
                display: "flex",
                gap: 16,
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#products"
                style={{
                  background:
                    "linear-gradient(135deg, #c98c32, #f0c060)",
                  color: "#fff",
                  padding: "18px 42px", // 🔥 BIG BUTTON
                  borderRadius: 60,
                  fontSize: "clamp(16px, 1.2vw, 20px)",
                  fontWeight: 800,
                  textDecoration: "none",
                  boxShadow: "0 10px 30px rgba(201,140,50,0.6)",
                }}
              >
                اطلب الآن ←
              </a>

              <a
                href="https://wa.me/+966553105626"
                style={{
                  background: "#25D366",
                  color: "#fff",
                  padding: "18px 36px",
                  borderRadius: 60,
                  fontSize: "clamp(16px, 1.2vw, 20px)",
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
        </div>
      </section>