"use client";

import { useState, useRef, useEffect } from "react";

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  { q: "ما هي المقاسات المتوفرة؟", a: "نوفر مقاسات متعددة تناسب جميع أنواع مكيفات الشباك. تواصل معنا لتحديد المقاس المناسب لمكيفك." },
  { q: "هل التركيب يشمل جميع أنواع المكيفات؟", a: "نعم، فريقنا المتخصص يقوم بتركيب الغطاء على جميع أنواع ومقاسات مكيفات الشباك." },
  { q: "ما مدة الضمان على المنتج؟", a: "نوفر ضمان على جودة المنتج. تواصل معنا للاستفسار عن تفاصيل الضمان." },
  { q: "كم تستغرق عملية التركيب؟", a: "التركيب يستغرق عادةً من 30 إلى 60 دقيقة فقط بواسطة فريقنا المدرب." },
];

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [heights, setHeights] = useState<number[]>([]);
  const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Measure heights after first render
  useEffect(() => {
    const newHeights = contentRefs.current.map((el) => (el ? el.scrollHeight : 0));
    setHeights(newHeights);
  }, []);

  return (
    <section className="py-20 px-6 bg-[#f5f0e8]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[11px] tracking-widest uppercase text-[#c98c32] mb-2">
            الأسئلة الشائعة
          </p>
          <h2 className="text-[clamp(1.6rem,4vw,2.2rem)] font-extrabold text-[#1a1a1a]">
            عندك سؤال؟
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openFaq === i;
            const height = heights[i] || 0;

            return (
              <div
                key={i}
                className={`bg-white rounded-xl border overflow-hidden transition-colors cursor-pointer ${
                  isOpen ? "border-[#c98c32]/45" : "border-[#c98c32]/15"
                }`}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
                {/* Question */}
                <div className="flex justify-between items-center px-5 py-4">
                  <span className="font-bold">{faq.q}</span>
                  <span
                    className={`text-[#c98c32] text-2xl transition-transform ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </div>

                {/* Answer */}
                <div
                  ref={(el) => { contentRefs.current[i] = el; }} // ✅ TypeScript safe
                  style={{
                    maxHeight: isOpen ? `${height}px` : "0px",
                    transition: "max-height 0.3s ease",
                  }}
                  className="px-5 overflow-hidden text-sm text-gray-600 leading-relaxed"
                >
                  {faq.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}