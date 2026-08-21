import {
  Beef,
  CakeSlice,
  Coffee,
  CookingPot,
  Croissant,
  CupSoda,
  Egg,
  GlassWater,
  HandPlatter,
  Leaf,
  Milk,
  Pizza,
  Salad,
  Smile,
  Soup,
  Sun,
  UtensilsCrossed,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type MenuIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

function ShishaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9 3h6" />
      <path d="M10 3c0 1.7.8 2.7 2 3 1.2-.3 2-1.3 2-3" />
      <path d="M12 6v8" />
      <path d="M8.5 20h7" />
      <path d="M9 20c0-3.5 1.2-6 3-6s3 2.5 3 6" />
      <path d="M12 10h3.5a4 4 0 0 1 4 4v2" />
      <path d="M18 16h3" />
    </svg>
  );
}

const ICONS: Record<string, MenuIcon | undefined> = {
  breakfast: Sun,
  "starters-sides": Salad,
  "soups-hot-dishes": Soup,
  "grills-mains": Beef,
  bakery: Croissant,
  desserts: CakeSlice,
  "hot-drinks": Coffee,
  "cold-drinks": CupSoda,
  "ayran-yogurt": Milk,
  "breakfast-selections": HandPlatter,
  eggs: Egg,
  "breakfast-essentials": UtensilsCrossed,
  potatoes: CookingPot,
  starters: Salad,
  soups: Soup,
  "pasta-pizza": Pizza,
  grills: Beef,
  kids: Smile,
  "gozleme-borek": Croissant,
  pide: Wheat,
  coffee: Coffee,
  tea: Coffee,
  "mr-silver": GlassWater,
  "cold-coffee": Coffee,
  "signature-drinks": GlassWater,
  "fresh-juices": Leaf,
  "iced-tea-lemonade": CupSoda,
  "soft-drinks": CupSoda,
  milkshakes: Milk,
  ayran: Milk,
  shisha: ShishaIcon,
};

export function PresentationMenuIcon({ id }: { id: string }) {
  const Icon = ICONS[id];
  return Icon ? <Icon aria-hidden="true" /> : null;
}
