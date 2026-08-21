import { Eye, HandHeart } from "lucide-react";

import { useI18n } from "@/lib/i18n";

import "./about-asya-section.css";

const ABOUT_COPY = {
  ar: {
    label: "عن آسيا",
    headline: "نكهة أصيلة. تجربة راقية.",
    intro:
      "في آسيا، نجمع بين أصالة المطبخ التركي وكرم الضيافة السعودية، لنقدم تجربة عصرية مميزة للعائلات ومحبي الذوق الرفيع.",
    visionHeading: "رؤيتنا",
    vision:
      "أن نكون علامة مطاعم رائدة تجمع بين المطبخ التركي الأصيل وكرم الضيافة السعودية، لنقدم تجربة عصرية متميزة تصبح الوجهة المفضلة للعائلات ومحبي الذوق الرفيع.",
    missionHeading: "رسالتنا",
    mission:
      "تقديم المطبخ التركي الأصيل والأطباق المختارة بجودة عالية، مع احترام القيم الثقافية والذوق العام في المملكة العربية السعودية، من خلال منتجات عالية الجودة وتقديم عصري. وبفريقنا المحترف وثقافة الخدمة القوية لدينا، نقدم لضيوفنا من العائلات تجربة موثوقة وعالية المعايير، تعكس قيمنا وثقافتنا بكل فخر.",
  },
  en: {
    label: "About Asya",
    headline: "Authentic Flavor. Refined Experience.",
    intro:
      "At Asya's Gourmet, we bring together the authenticity of Turkish cuisine and the generosity of Saudi hospitality to offer a distinctive modern experience for families and discerning diners.",
    visionHeading: "Our Vision",
    vision:
      "To be a leading restaurant brand that brings together authentic Turkish cuisine and the generosity of Saudi hospitality, offering a distinguished modern experience that becomes the preferred destination for families and discerning diners.",
    missionHeading: "Our Mission",
    mission:
      "To present authentic Turkish cuisine and carefully selected dishes with high quality, while respecting the cultural values and tastes of Saudi Arabia through quality products and contemporary presentation. With our professional team and strong service culture, we provide families with a reliable, high-standard dining experience that proudly reflects our values and culture.",
  },
} as const;

export function AboutAsyaSection() {
  const { locale } = useI18n();
  const copy = ABOUT_COPY[locale];

  return (
    <section
      id="about-asya"
      className="about-asya-final"
      dir={locale === "ar" ? "rtl" : "ltr"}
      aria-labelledby="about-asya-title"
    >
      <div className="about-asya-final-inner">
        <header className="about-asya-final-intro">
          <p className="about-asya-final-label">{copy.label}</p>
          <h2 id="about-asya-title">{copy.headline}</h2>
          <p>{copy.intro}</p>
        </header>

        <div className="about-asya-final-cards">
          <article className="about-asya-final-card">
            <span className="about-asya-final-icon" aria-hidden="true">
              <Eye />
            </span>
            <h3>{copy.visionHeading}</h3>
            <span className="about-asya-final-card-rule" aria-hidden="true" />
            <p>{copy.vision}</p>
            <span className="about-asya-final-card-detail" aria-hidden="true" />
          </article>

          <article className="about-asya-final-card">
            <span className="about-asya-final-icon" aria-hidden="true">
              <HandHeart />
            </span>
            <h3>{copy.missionHeading}</h3>
            <span className="about-asya-final-card-rule" aria-hidden="true" />
            <p>{copy.mission}</p>
            <span className="about-asya-final-card-detail" aria-hidden="true" />
          </article>
        </div>
      </div>
    </section>
  );
}
