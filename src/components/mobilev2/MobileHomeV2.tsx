import {
  ArrowUpRight,
  Clock3,
  Compass,
  Instagram,
  MapPin,
  MessageCircle,
  Music2,
  Phone,
  Plus,
  Star,
  Utensils,
} from "lucide-react";
import { useMemo, useState } from "react";

import logoImg from "@/assets/asyas-logo-transparent.png";
import visitInteriorImg from "@/assets/visit-interior.jpg";
import {
  DishImage,
  PriceTag,
  categoryById,
  getDishImage,
  isUsableImageUrl,
  localizeMenuItemName,
  localizeMenuText,
  useItemDetail,
} from "@/components/asya/primitives";
import { Phase3Media, type Phase3MediaAsset } from "@/components/phase3/Phase3Media";
import { ITEMS, POPULAR_ITEMS, RESTAURANT, type MenuCategory, type MenuItem } from "@/data/menu";
import { REFERENCE_MENU_GROUPS } from "@/data/reference-menu-groups";
import { useI18n } from "@/lib/i18n";

import { useTrayActionsV2 } from "./TrayContextV2";

const videoPath = (file: string) => `/media/home2026/videos/${file}`;
const posterPath = (file: string) => `/media/home2026/posters/${file}`;

const FEATURE_GROUP_IDS = [
  "61e69fe8-3255-49c0-ad94-517a04184cd5",
  "59ee4ca2-bb09-4a86-981b-fd40460331ea",
  "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
  "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
] as const;

const COPY = {
  ar: {
    heroKicker: "مطعم ومخبز تركي",
    heroTitle: "مائدة تركية تبدأ من هنا",
    heroBody: "فطور غني، مخبوزات طازجة وأطباق تركية تُحضّر للمشاركة.",
    exploreMenu: "استعرض المنيو",
    directions: "الاتجاهات",
    quickLabel: "وصول سريع",
    menu: "المنيو",
    whatsapp: "واتساب",
    reviews: "التقييمات",
    signatureTitle: "مختارات آسيا",
    signatureBody: "أطباق محبوبة من المنيو الرسمي.",
    viewDish: "عرض الطبق",
    quickAdd: "أضف إلى السلة",
    added: "تمت الإضافة",
    aboutTitle: "عن آسيا",
    aboutHeading: "ضيافة تركية على مائدة جدة",
    aboutBody:
      "يجمع آسيا جورميه بين الفطور التركي، المخبوزات، الأطباق الساخنة وأجواء المطعم في تجربة واحدة.",
    aboutAction: "اكتشف أطباق آسيا",
    experienceTitle: "تجربة آسيا",
    experienceBody: "من أول فنجان شاي إلى آخر قطعة بقلاوة.",
    breakfast: "الفطور التركي",
    breakfastBody: "أجبان، زيتون، خبز طازج وشاي تركي على مائدة واحدة.",
    bakery: "المخبز",
    bakeryBody: "بيدا وجوزلمة ومخبوزات تُقدّم دافئة.",
    grills: "المشويات",
    grillsBody: "لحوم متبلة ومشويات تُحضّر على النار.",
    exploreTitle: "اختر طريقك إلى المنيو",
    exploreBody: "ابدأ بأحد الأقسام، أو افتح المنيو كاملًا.",
    fullMenu: "المنيو الكامل",
    momentsTitle: "لحظات من آسيا",
    momentsBody: "مشاهد حقيقية من المطبخ والصالة والمائدة.",
    momentDining: "أجواء الصالة",
    momentChef: "من المطبخ",
    momentCraft: "من المطبخ التركي",
    momentTeam: "فريق آسيا",
    momentLounge: "لاونج آسيا",
    visitTitle: "زيارتكم تبدأ من هنا",
    visitBody: "افتح الاتجاهات أو اتصل بنا قبل الوصول.",
    call: "اتصال",
    location: "موقع آسيا جورميه",
    connectTitle: "ابقَ قريبًا من آسيا",
    connectBody: "تابع جديدنا، راسلنا، أو شاركنا رأيك.",
    instagram: "إنستغرام",
    tiktok: "تيك توك",
    googleReview: "تقييم جوجل",
    finalTitle: "ماذا ستختار لمائدتك؟",
    finalBody: "اكتشف جميع الأصناف والأسعار في المنيو الرسمي.",
    finalAction: "استعرض المنيو الكامل",
    heroAlt: "مشهد شواء من مطبخ آسيا جورميه",
    aboutAlt: "صالة آسيا جورميه",
    breakfastAlt: "تفاصيل الفطور التركي في آسيا جورميه",
    bakeryAlt: "تحضير المخبوزات في آسيا جورميه",
  },
  en: {
    heroKicker: "Turkish Restaurant & Bakery",
    heroTitle: "Your Turkish Table Starts Here",
    heroBody: "Generous breakfast, fresh bakery, and Turkish dishes made for sharing.",
    exploreMenu: "Explore the Menu",
    directions: "Directions",
    quickLabel: "Quick Access",
    menu: "Menu",
    whatsapp: "WhatsApp",
    reviews: "Reviews",
    signatureTitle: "Asya Signatures",
    signatureBody: "Guest favorites from the official menu.",
    viewDish: "View Dish",
    quickAdd: "Add to Tray",
    added: "Added",
    aboutTitle: "About Asya",
    aboutHeading: "Turkish Hospitality at a Jeddah Table",
    aboutBody:
      "Asya’s Gourmet brings Turkish breakfast, bakery, warm dishes, and the restaurant atmosphere together in one dining experience.",
    aboutAction: "Discover Asya’s Dishes",
    experienceTitle: "The Asya Experience",
    experienceBody: "From the first glass of tea to the final piece of baklava.",
    breakfast: "Turkish Breakfast",
    breakfastBody: "Cheeses, olives, fresh bread, and Turkish tea at one generous table.",
    bakery: "Fresh Bakery",
    bakeryBody: "Pide, gözleme, and baked favorites served warm.",
    grills: "Turkish Grills",
    grillsBody: "Seasoned meats and Turkish grills prepared over the flame.",
    exploreTitle: "Choose Your Way into the Menu",
    exploreBody: "Start with a category, or open the complete menu.",
    fullMenu: "Full Menu",
    momentsTitle: "Moments at Asya’s",
    momentsBody: "Real scenes from the kitchen, dining room, and table.",
    momentDining: "The Dining Room",
    momentChef: "From the Kitchen",
    momentCraft: "From the Turkish Kitchen",
    momentTeam: "The Asya Team",
    momentLounge: "Asya Lounge",
    visitTitle: "Your Visit Starts Here",
    visitBody: "Open directions or call us before you arrive.",
    call: "Call",
    location: "Asya’s Gourmet Location",
    connectTitle: "Stay Close to Asya’s",
    connectBody: "Follow our latest moments, message us, or share your visit.",
    instagram: "Instagram",
    tiktok: "TikTok",
    googleReview: "Google Review",
    finalTitle: "What Will You Choose for Your Table?",
    finalBody: "Explore every dish and official price in the complete menu.",
    finalAction: "Explore the Full Menu",
    heroAlt: "A grill scene from Asya's Gourmet kitchen",
    aboutAlt: "Asya's Gourmet dining room",
    breakfastAlt: "Turkish breakfast details at Asya's Gourmet",
    bakeryAlt: "Fresh bakery preparation at Asya's Gourmet",
  },
} as const;

function mediaAsset(file: string, poster: string, label: string): Phase3MediaAsset {
  return { src: videoPath(file), poster: posterPath(poster), alt: label, label };
}

export function MobileHomeV2() {
  const { locale } = useI18n();
  const copy = COPY[locale];
  const hero = mediaAsset("asya-hero-grill.mp4", "asya-hero-grill.png", copy.heroAlt);
  const breakfast = mediaAsset("asya-breakfast.mp4", "asya-breakfast.png", copy.breakfastAlt);
  const bakery = mediaAsset("asya-bakery-pide.mp4", "asya-bakery-pide.png", copy.bakeryAlt);
  const grills = mediaAsset("asya-hero-grill.mp4", "asya-hero-grill.png", copy.grills);
  const moments = [
    mediaAsset("asya-moment-dining-room.mp4", "asya-moment-dining-room.png", copy.momentDining),
    mediaAsset("asya-moment-chef.mp4", "asya-moment-chef.png", copy.momentChef),
    mediaAsset("asya-moment-craft.mp4", "asya-moment-craft.png", copy.momentCraft),
    mediaAsset("asya-moment-team.mp4", "asya-moment-team.png", copy.momentTeam),
    mediaAsset("asya-moment-lounge.mp4", "asya-moment-lounge.png", copy.momentLounge),
  ];
  const signatures = useMemo(
    () =>
      POPULAR_ITEMS.filter((item) => isUsableImageUrl(getDishImage(item)))
        .slice(0, 5)
        .map((item) => ({ item, category: categoryById(item.category) }))
        .filter((entry): entry is { item: MenuItem; category: MenuCategory } =>
          Boolean(entry.category),
        ),
    [],
  );
  const menuEntrances = useMemo(
    () =>
      FEATURE_GROUP_IDS.map((groupId) => {
        const group = REFERENCE_MENU_GROUPS.find((entry) => entry.id === groupId);
        const item = ITEMS.find(
          (entry) =>
            isUsableImageUrl(getDishImage(entry)) &&
            entry.categoryAssignments.some((assignment) =>
              group?.categoryIds.includes(assignment.categoryId),
            ),
        );
        return group && item ? { group, item } : null;
      }).filter(Boolean) as Array<{
        group: (typeof REFERENCE_MENU_GROUPS)[number];
        item: MenuItem;
      }>,
    [],
  );

  return (
    <main id="top" className="mobilev2-home" dir={locale === "ar" ? "rtl" : "ltr"}>
      <section className="mobilev2-hero" aria-labelledby="mobilev2-hero-title">
        <Phase3Media asset={hero} className="mobilev2-hero-media" eager />
        <span className="mobilev2-hero-shade" aria-hidden="true" />
        <div className="mobilev2-hero-copy">
          <img src={logoImg} alt="Asya's Gourmet" width={72} height={72} />
          <small>{copy.heroKicker}</small>
          <h1 id="mobilev2-hero-title">{copy.heroTitle}</h1>
          <p>{copy.heroBody}</p>
          <div>
            <a href="/menu" className="mobilev2-button mobilev2-button-primary">
              <Utensils aria-hidden="true" />
              {copy.exploreMenu}
            </a>
            <a
              href={RESTAURANT.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mobilev2-button mobilev2-button-ghost"
            >
              <Compass aria-hidden="true" />
              {copy.directions}
            </a>
          </div>
        </div>
      </section>

      <QuickActions copy={copy} />

      <section
        className="mobilev2-section mobilev2-signatures"
        aria-labelledby="mobilev2-signature-title"
      >
        <SectionHeading
          title={copy.signatureTitle}
          body={copy.signatureBody}
          id="mobilev2-signature-title"
        />
        <div className="mobilev2-signature-rail">
          {signatures.map(({ item, category }) => (
            <SignatureCard key={item.id} item={item} category={category} copy={copy} />
          ))}
        </div>
      </section>

      <section id="about-asya" className="mobilev2-about" aria-labelledby="mobilev2-about-title">
        <figure>
          <img
            src={visitInteriorImg}
            alt={copy.aboutAlt}
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div>
          <small>{copy.aboutTitle}</small>
          <h2 id="mobilev2-about-title">{copy.aboutHeading}</h2>
          <p>{copy.aboutBody}</p>
          <a href="/menu" className="mobilev2-text-link">
            {copy.aboutAction}
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        className="mobilev2-section mobilev2-experience"
        aria-labelledby="mobilev2-experience-title"
      >
        <SectionHeading
          title={copy.experienceTitle}
          body={copy.experienceBody}
          id="mobilev2-experience-title"
        />
        <article className="mobilev2-experience-anchor">
          <Phase3Media asset={breakfast} className="mobilev2-experience-media" playback="leader" />
          <span aria-hidden="true" />
          <div>
            <h3>{copy.breakfast}</h3>
            <p>{copy.breakfastBody}</p>
          </div>
        </article>
        <div className="mobilev2-experience-pair">
          <article>
            <Phase3Media
              asset={bakery}
              className="mobilev2-experience-small-media"
              playback="visible"
            />
            <div>
              <h3>{copy.bakery}</h3>
              <p>{copy.bakeryBody}</p>
            </div>
          </article>
          <article>
            <Phase3Media
              asset={grills}
              className="mobilev2-experience-small-media mobilev2-experience-grills-media"
              playback="visible"
            />
            <div>
              <h3>{copy.grills}</h3>
              <p>{copy.grillsBody}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="mobilev2-menu-transition" aria-labelledby="mobilev2-explore-title">
        <SectionHeading
          title={copy.exploreTitle}
          body={copy.exploreBody}
          id="mobilev2-explore-title"
        />
        <div className="mobilev2-menu-entrances">
          {menuEntrances.map(({ group, item }) => (
            <a href={`/menu#group-${group.id}`} key={group.id}>
              <DishImage item={item} alt={localizeMenuText(group.name, locale)} />
              <span>{localizeMenuText(group.shortName, locale)}</span>
            </a>
          ))}
        </div>
        <a href="/menu" className="mobilev2-button mobilev2-button-primary">
          <Utensils aria-hidden="true" />
          {copy.fullMenu}
        </a>
      </section>

      <section
        className="mobilev2-section mobilev2-moments"
        aria-labelledby="mobilev2-moments-title"
      >
        <SectionHeading
          title={copy.momentsTitle}
          body={copy.momentsBody}
          id="mobilev2-moments-title"
        />
        <div className="mobilev2-moments-rail">
          {moments.map((moment) => (
            <article key={moment.src}>
              <Phase3Media asset={moment} className="mobilev2-moment-media" playback="leader" />
              <strong>{moment.label}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="mobilev2-visit" aria-labelledby="mobilev2-visit-title">
        <img
          src={visitInteriorImg}
          alt={copy.aboutAlt}
          width={1200}
          height={800}
          loading="lazy"
          decoding="async"
        />
        <div>
          <h2 id="mobilev2-visit-title">{copy.visitTitle}</h2>
          <p>{copy.visitBody}</p>
          <small className="mobilev2-visit-hours">
            <Clock3 aria-hidden="true" />
            {RESTAURANT.hours[locale]}
          </small>
          <span>
            <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
              <MapPin aria-hidden="true" />
              {copy.directions}
            </a>
            <a href={`tel:${RESTAURANT.phone}`}>
              <Phone aria-hidden="true" />
              {copy.call}
            </a>
          </span>
        </div>
        <a
          className="mobilev2-map-link"
          href={RESTAURANT.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin aria-hidden="true" />
          <span>
            <strong>{copy.location}</strong>
            <small>{copy.directions}</small>
          </span>
          <ArrowUpRight aria-hidden="true" />
        </a>
      </section>

      <section className="mobilev2-connect" aria-labelledby="mobilev2-connect-title">
        <SectionHeading
          title={copy.connectTitle}
          body={copy.connectBody}
          id="mobilev2-connect-title"
        />
        <div>
          <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram aria-hidden="true" />
            <span>{copy.instagram}</span>
          </a>
          <a href={RESTAURANT.tiktokUrl} target="_blank" rel="noopener noreferrer">
            <Music2 aria-hidden="true" />
            <span>{copy.tiktok}</span>
          </a>
          <a href={RESTAURANT.whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            <span>{copy.whatsapp}</span>
          </a>
          <a href={RESTAURANT.googleReviewUrl} target="_blank" rel="noopener noreferrer">
            <Star aria-hidden="true" />
            <span>{copy.googleReview}</span>
          </a>
        </div>
      </section>

      <section className="mobilev2-final-cta" aria-labelledby="mobilev2-final-title">
        <h2 id="mobilev2-final-title">{copy.finalTitle}</h2>
        <p>{copy.finalBody}</p>
        <a href="/menu" className="mobilev2-button mobilev2-button-light">
          <Utensils aria-hidden="true" />
          {copy.finalAction}
        </a>
      </section>
    </main>
  );
}

function QuickActions({ copy }: { copy: (typeof COPY)["ar"] | (typeof COPY)["en"] }) {
  const actions = [
    { label: copy.menu, href: "/menu", Icon: Utensils },
    { label: copy.directions, href: RESTAURANT.mapsUrl, Icon: Compass },
    { label: copy.whatsapp, href: RESTAURANT.whatsappUrl, Icon: MessageCircle },
    { label: copy.reviews, href: RESTAURANT.googleReviewUrl, Icon: Star },
  ];

  return (
    <section className="mobilev2-quick-actions" aria-label={copy.quickLabel}>
      {actions.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
    </section>
  );
}

function SectionHeading({ title, body, id }: { title: string; body: string; id: string }) {
  return (
    <header className="mobilev2-section-heading">
      <h2 id={id}>{title}</h2>
      <p>{body}</p>
    </header>
  );
}

function SignatureCard({
  item,
  category,
  copy,
}: {
  item: MenuItem;
  category: MenuCategory;
  copy: (typeof COPY)["ar"] | (typeof COPY)["en"];
}) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const { addItem } = useTrayActionsV2();
  const [added, setAdded] = useState(false);
  const itemName = localizeMenuItemName(item, locale);

  const handleAdd = () => {
    addItem(item.id);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  };

  return (
    <article className="mobilev2-signature-card">
      <button
        type="button"
        className="mobilev2-signature-open"
        onClick={() => openItemDetail({ item, category })}
        aria-label={`${copy.viewDish}: ${itemName}`}
      >
        <DishImage item={item} alt={itemName} />
        <span>
          <strong>{itemName}</strong>
          <PriceTag item={item} />
        </span>
      </button>
      <button
        type="button"
        className="mobilev2-quick-add"
        onClick={handleAdd}
        aria-label={`${copy.quickAdd}: ${itemName}`}
      >
        <Plus aria-hidden="true" />
      </button>
      <small className="mobilev2-add-feedback" aria-live="polite">
        {added ? copy.added : ""}
      </small>
    </article>
  );
}
