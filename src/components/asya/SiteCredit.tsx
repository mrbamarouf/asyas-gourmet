import tarikBamaroufSignature from "@/assets/tarik-bamarouf-signature.png";
import { useI18n } from "@/lib/i18n";

const CREDIT_URL = "https://tarikbamarouf.com/";

export function SiteCredit() {
  const { locale } = useI18n();
  const isArabic = locale === "ar";
  const copy = isArabic ? "تصميم وتطوير الموقع بواسطة طارق بامعروف" : "Site by Tarik Bamarouf";
  const name = isArabic ? "طارق بامعروف" : "Tarik Bamarouf";

  return (
    <a
      className="site-credit"
      href={CREDIT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${copy}. ${isArabic ? "فتح موقع طارق بامعروف" : "Open Tarik Bamarouf website"}`}
      lang={locale}
    >
      <img
        src={tarikBamaroufSignature}
        alt={name}
        width={2172}
        height={724}
        loading="lazy"
        decoding="async"
      />
      <span>{copy}</span>
    </a>
  );
}
