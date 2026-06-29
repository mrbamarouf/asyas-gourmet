import { useMemo } from "react";
import { Heart, Leaf, Sparkles } from "lucide-react";

import {
  CHEF_PICK_ITEMS,
  ITEMS,
  POPULAR_ITEMS,
  RESTAURANT,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import {
  AsyaShell,
  categoryById,
  getDishImage,
  isOfficialImage,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import bakeryImg from "@/assets/bakery.jpg";
import mezzeImg from "@/assets/dish-mezze.jpg";
import heroImg from "@/assets/hero-turkish-table.jpg";
import interiorImg from "@/assets/interior.jpg";
import teaImg from "@/assets/tea.jpg";

import { BakeryFeature2026 } from "./BakeryFeature2026";
import { BreakfastFeature2026 } from "./BreakfastFeature2026";
import { Hero2026 } from "./Hero2026";
import { HomeCTA2026 } from "./HomeCTA2026";
import { MomentsGallery2026 } from "./MomentsGallery2026";
import { SignatureDishes2026 } from "./SignatureDishes2026";
import { VisitSection2026 } from "./VisitSection2026";

export interface HomeDishEntry {
  item: MenuItem;
  category: MenuCategory;
}

interface HomeMedia {
  src: string;
  alt: string;
}

const HOME2026_COPY = {
  ar: {
    heroEyebrow: "مذاق من تركيا",
    heroTitle: "مذاق تركي يليق بلحظاتك",
    heroSubtitle: "أطباق تركية أصيلة، مخبوزات طازجة، وتجربة دافئة تبدأ من أول لقمة.",
    heroCta: "استعرض المنيو",
    heroDirections: "الاتجاهات",
    heroAlt: "مائدة تركية من أسيا جورميه",
    trustRecipes: "وصفات تركية أصيلة",
    trustFresh: "طازج يوميًا",
    trustMade: "صنع بحب",
    signatureTitle: "مختارات محبوبة",
    signatureEyebrow: "مختارات مميزة",
    dishCta: "عرض الطبق",
    breakfastTitle: "الفطور التركي",
    breakfastBody: "سفرة صباحية غنية تجمع الخبز الطازج، الأجبان، الزيتون، الشاي، وأطباق آسيا المميزة.",
    breakfastCta: "اكتشف الفطور",
    breakfastAlt: "فطور تركي ومقبلات من أسيا جورميه",
    bakeryTitle: "المخبز الطازج",
    bakeryBody: "مخبوزات يومية تُحضّر بعناية لتصل إلى الطاولة بدفئها ورائحتها.",
    bakeryCta: "استكشف المخبز",
    bakeryAlt: "مخبوزات تركية طازجة من أسيا جورميه",
    galleryTitle: "لحظات من آسيا",
    galleryEyebrow: "من الطاولة",
    galleryAlt: "لحظة من أسيا جورميه",
    visitTitle: "يسعدنا زيارتكم",
    visitBody: "تفضلوا إلى أسيا جورميه لتجربة فطور تركي، مخبوزات طازجة، وأطباق دافئة.",
    visitDirections: "الاتجاهات",
    visitCall: "اتصال",
    visitMap: "موقع أسيا جورميه",
    finalTitle: "المنيو الكامل",
    finalBody: "اختر طبقك من الفطور التركي، المخبوزات، المشويات، الحلويات والمشروبات.",
    finalCta: "اكتشف المنيو الكامل",
    finalAlt: "أجواء مطعم أسيا جورميه",
  },
  en: {
    heroEyebrow: "A Taste of Turkey",
    heroTitle: "A Turkish Taste for Every Moment",
    heroSubtitle: "Authentic Turkish dishes, fresh bakery, and a warm dining experience from the first bite.",
    heroCta: "View Menu",
    heroDirections: "Directions",
    heroAlt: "A Turkish table from Asya's Gourmet",
    trustRecipes: "Authentic Turkish Recipes",
    trustFresh: "Fresh Daily",
    trustMade: "Made with Love",
    signatureTitle: "Most Loved Dishes",
    signatureEyebrow: "Signature Dishes",
    dishCta: "View Dish",
    breakfastTitle: "Turkish Breakfast",
    breakfastBody: "A generous morning table with fresh bread, cheeses, olives, tea, and Asya’s signature dishes.",
    breakfastCta: "Discover Breakfast",
    breakfastAlt: "Turkish breakfast and appetizers from Asya's Gourmet",
    bakeryTitle: "Fresh Bakery",
    bakeryBody: "Daily baked favorites prepared with care, warmth, and a comforting aroma.",
    bakeryCta: "Explore Bakery",
    bakeryAlt: "Fresh Turkish bakery from Asya's Gourmet",
    galleryTitle: "Moments at Asya’s",
    galleryEyebrow: "At the Table",
    galleryAlt: "A moment at Asya's Gourmet",
    visitTitle: "We’d Love to See You",
    visitBody: "Visit Asya’s Gourmet for Turkish breakfast, fresh bakery, and warm dishes from the kitchen.",
    visitDirections: "Directions",
    visitCall: "Call",
    visitMap: "Asya’s Gourmet Location",
    finalTitle: "Full Menu",
    finalBody: "Choose from Turkish breakfast, bakery, grills, desserts, and drinks.",
    finalCta: "Explore the Full Menu",
    finalAlt: "Asya's Gourmet dining room",
  },
} as const;

export function Home2026() {
  return (
    <AsyaShell current="home">
      <Home2026Content />
    </AsyaShell>
  );
}

function Home2026Content() {
  const { locale, tx } = useI18n();
  const copy = HOME2026_COPY[locale];
  const content = useMemo(() => buildHome2026Content(locale, tx), [locale, tx]);

  return (
    <main className="home2026-shell">
      <Hero2026
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        cta={copy.heroCta}
        directions={copy.heroDirections}
        image={heroImg}
        imageAlt={copy.heroAlt}
        trust={[copy.trustRecipes, copy.trustFresh, copy.trustMade]}
      />
      <SignatureDishes2026
        eyebrow={copy.signatureEyebrow}
        title={copy.signatureTitle}
        dishCta={copy.dishCta}
        dishes={content.signatures}
      />
      <BreakfastFeature2026
        title={copy.breakfastTitle}
        body={copy.breakfastBody}
        cta={copy.breakfastCta}
        image={mezzeImg}
        imageAlt={copy.breakfastAlt}
      />
      <BakeryFeature2026
        title={copy.bakeryTitle}
        body={copy.bakeryBody}
        cta={copy.bakeryCta}
        image={bakeryImg}
        imageAlt={copy.bakeryAlt}
      />
      <MomentsGallery2026
        eyebrow={copy.galleryEyebrow}
        title={copy.galleryTitle}
        photos={content.gallery}
      />
      <div className="home2026-mobile-trust" aria-label={copy.heroEyebrow}>
        {[copy.trustRecipes, copy.trustFresh, copy.trustMade].map((label, index) => {
          const Icon = [Leaf, Sparkles, Heart][index] ?? Sparkles;
          return (
            <span key={label}>
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </span>
          );
        })}
      </div>
      <VisitSection2026
        title={copy.visitTitle}
        body={copy.visitBody}
        directions={copy.visitDirections}
        call={copy.visitCall}
        mapLabel={copy.visitMap}
        address={tx(RESTAURANT.address)}
      />
      <HomeCTA2026
        title={copy.finalTitle}
        body={copy.finalBody}
        cta={copy.finalCta}
        image={interiorImg}
        imageAlt={copy.finalAlt}
      />
    </main>
  );
}

function buildHome2026Content(
  locale: "ar" | "en",
  tx: (obj: Record<"ar" | "en", string>) => string,
) {
  const signatures = toDishEntries(uniqueItems([...CHEF_PICK_ITEMS, ...POPULAR_ITEMS])).slice(0, 4);
  const galleryItems = toDishEntries(ITEMS.filter(isOfficialImage)).slice(0, 2);
  const gallery: HomeMedia[] = [
    { src: interiorImg, alt: HOME2026_COPY[locale].galleryAlt },
    { src: teaImg, alt: locale === "ar" ? "قهوة تركية من أسيا جورميه" : "Turkish coffee at Asya's Gourmet" },
    { src: bakeryImg, alt: HOME2026_COPY[locale].bakeryAlt },
    ...galleryItems.map((entry) => ({ src: getDishImage(entry.item), alt: tx(entry.item.name) })),
  ].slice(0, 5);

  return { signatures, gallery };
}

function uniqueItems(items: MenuItem[]) {
  const seen = new Set<string>();
  return items.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

function toDishEntries(items: MenuItem[]): HomeDishEntry[] {
  return items
    .map((item) => ({ item, category: categoryById(item.category) }))
    .filter((entry): entry is HomeDishEntry => Boolean(entry.category));
}
