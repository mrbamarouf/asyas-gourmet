import { useMemo } from "react";
import { Heart, Leaf, Sparkles } from "lucide-react";

import {
  CHEF_PICK_ITEMS,
  POPULAR_ITEMS,
  RESTAURANT,
  type MenuCategory,
  type MenuItem,
} from "@/data/menu";
import {
  AsyaShell,
  categoryById,
} from "@/components/asya/primitives";
import { useI18n } from "@/lib/i18n";

import visitInteriorImg from "@/assets/visit-interior.jpg";

import { BakeryFeature2026 } from "./BakeryFeature2026";
import { BreakfastFeature2026 } from "./BreakfastFeature2026";
import type { CinematicVideoAsset2026 } from "./CinematicVideo2026";
import { Hero2026 } from "./Hero2026";
import { MomentsGallery2026 } from "./MomentsGallery2026";
import { SignatureDishes2026 } from "./SignatureDishes2026";
import { VisitSection2026 } from "./VisitSection2026";

export interface HomeDishEntry {
  item: MenuItem;
  category: MenuCategory;
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
    visitMap: "موقع آسيا جورميه",
    visitAlt: "صالة أسيا جورميه",
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
    visitAlt: "Asya's Gourmet dining room",
    finalTitle: "Full Menu",
    finalBody: "Choose from Turkish breakfast, bakery, grills, desserts, and drinks.",
    finalCta: "Explore the Full Menu",
    finalAlt: "Asya's Gourmet dining room",
  },
} as const;

const videoPath = (file: string) => `/media/home2026/videos/${file}`;
const posterPath = (file: string) => `/media/home2026/posters/${file}`;

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
  const content = useMemo(() => buildHome2026Content(), []);
  const videos = useMemo(() => buildHome2026Videos(locale), [locale]);

  return (
    <main className="home2026-shell">
      <Hero2026
        eyebrow={copy.heroEyebrow}
        title={copy.heroTitle}
        subtitle={copy.heroSubtitle}
        cta={copy.heroCta}
        directions={copy.heroDirections}
        video={videos.hero}
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
        video={videos.breakfast}
      />
      <BakeryFeature2026
        title={copy.bakeryTitle}
        body={copy.bakeryBody}
        cta={copy.bakeryCta}
        video={videos.bakery}
      />
      <MomentsGallery2026
        eyebrow={copy.galleryEyebrow}
        title={copy.galleryTitle}
        moments={videos.moments}
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
        image={visitInteriorImg}
        imageAlt={copy.visitAlt}
      />
    </main>
  );
}

function buildHome2026Content() {
  const signatures = toDishEntries(uniqueItems([...CHEF_PICK_ITEMS, ...POPULAR_ITEMS])).slice(0, 4);

  return { signatures };
}

function buildHome2026Videos(locale: "ar" | "en") {
  const labels = {
    ar: {
      hero: "مشهد الشواء في أسيا جورميه",
      breakfast: "تفاصيل الفطور التركي",
      bakery: "تحضير البيدا في مخبز أسيا",
      interiorLights: "أجواء المطعم",
      doner: "من المطبخ",
      craft: "حرفة التحضير",
      team: "فريق أسيا",
      lounge: "ركن اللاونج",
      diningRoom: "صالة الضيافة",
      chef: "لمسة الشيف",
    },
    en: {
      hero: "Asya's grill scene",
      breakfast: "Turkish breakfast details",
      bakery: "Pide preparation at Asya's bakery",
      interiorLights: "Restaurant atmosphere",
      doner: "From the kitchen",
      craft: "Craft in preparation",
      team: "Asya's team",
      lounge: "Lounge moment",
      diningRoom: "Dining room",
      chef: "Chef's touch",
    },
  }[locale];

  const makeAsset = (
    video: string,
    poster: string,
    label: string,
  ): CinematicVideoAsset2026 => ({
    src: videoPath(video),
    poster: posterPath(poster),
    alt: label,
    label,
  });

  return {
    hero: makeAsset("asya-hero-grill.mov", "asya-hero-grill.png", labels.hero),
    breakfast: makeAsset("asya-breakfast.mov", "asya-breakfast.png", labels.breakfast),
    bakery: makeAsset("asya-bakery-pide.mov", "asya-bakery-pide.png", labels.bakery),
    moments: [
      makeAsset("asya-moment-dining-room.mov", "asya-moment-dining-room.png", labels.diningRoom),
      makeAsset("asya-moment-interior-lights.mov", "asya-moment-interior-lights.png", labels.interiorLights),
      makeAsset("asya-moment-doner.mov", "asya-moment-doner.png", labels.doner),
      makeAsset("asya-moment-craft.mov", "asya-moment-craft.png", labels.craft),
      makeAsset("asya-moment-chef.mov", "asya-moment-chef.png", labels.chef),
      makeAsset("asya-moment-team.mov", "asya-moment-team.png", labels.team),
      makeAsset("asya-moment-lounge.mov", "asya-moment-lounge.png", labels.lounge),
    ],
  };
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
