# Asya's Gourmet Menu Audit

Audit date: 2026-06-27  
Last updated after restaurant-friendly menu ordering pass: 2026-06-27

Truth source:
- https://thefoost.com/asyas/?qr_source=qr_code
- Instagram reference: https://www.instagram.com/asyas.gourmet
- Location: https://maps.app.goo.gl/QUcPv2DQpb89Wr4fA?g_st=ic

## Result

The local menu data now matches the Foost payload at 100% for:
- Category IDs, names, descriptions, and display order
- Product IDs, names, descriptions, prices, currencies, and category assignment
- Product order inside each category
- Official Foost item images when `item_image` media exists
- Foost custom options / variants

The restaurant-friendly ordering pass did not change menu product data. The home page shows selected real menu items only, and the full menu is available on `/menu`.

## Counts

- Sections: 29
- Menu items: 215
- Product-category associations: 215
- Official Foost item images used: 214
- Items without official Foost item image: 1
- Items with Foost custom options: 2
- Match rate with Foost: 100%

## Route Verification

- `/`: Restaurant landing experience with selected real menu items only.
- `/menu`: Full menu page with all 29 original Foost sections and all 215 original items.
- `/menu` search, sticky quick-jump navigation, and mobile group pills verified.
- Mobile and desktop checks found no horizontal overflow.
- Desktop `/menu` grid renders 4 columns; tablet renders 2 columns; mobile renders single-column cards.
- Floating contact bar is mobile/tablet only and does not cover desktop menu controls.
- Official location link is wired to the supplied Google Maps URL.

## Restaurant-Friendly Display Order

The local display order is now a UX layer over the Foost data. Original Foost section names, item names, item descriptions, prices, options, category assignments, and images were not edited.

1. العروض والبكجات / Offers & Packages
   - Happy Spreads / تشكيلة السعادة
2. الأكثر طلبًا / Best Sellers
   - Featured-only block using items already marked `popular` in the local Foost-matched data. These items are also still shown in their original Foost sections.
3. الفطور التركي / Turkish Breakfast
   - Eggs / بيض
   - Flavours of Asya's / نكهات آسيا
4. المقبلات والسلطات / Appetizers & Salads
   - Greens & Friends / الخضار واصدقائها
   - Flavours of the Table / نكهات المائدة
   - Warm & Delicious Starts / لنبدأ بدفء
5. الشوربات / Soups
   - Delicious Soups / شوربات لذيذة
6. المخبوزات والفطائر / Bakery & Pastries
   - Asya's Premium Pide's / بيدا آسيا البريميوم
   - Pizza / بيتزا
   - Abla's Handmade Gözleme & Börek / جوزلمة وبوريك ابلا محضرة يدوياً
7. الأطباق الرئيسية / Main Dishes
   - Pasta / الباستا
   - MR.TORO STEAKHOUSE / مستر تورو ستيك هاوس
8. المشويات / Grills
   - Grill & Casserole / مشويات وطاجن
9. الجانبيات / Sides
   - Mr. Potatoes / مستر بطاطس
10. الحلويات / Desserts
   - TURKISH DESSERT / حلويات تركية
   - A Sweet Memory / ذكريات حلوة
11. الشيشة / Shisha
   - Shisha By Charming / شيشة باي تشارمينج
   - SIGNATURE SHISHA / سيجنتشر شيشة
   - VIP SHISHA / شيشة في آي بي
12. المشروبات / Drinks
   - Tea / الشاي
   - World's Coffees / عالم القهوة
   - Cold Coffees / القهوة الباردة
   - Turkish Traditional Drinks / مشروبات تركية تقليدية
   - From Our Garden / من حديقتنا
   - Homemade Ice Teas & Lemonades / شاي مثلج وعصائر ليمون طازجة محضّرة يوميًا
   - Our Signatures / مشروباتنا المميزة
   - Special Iced Matchas / ماتشا باردة خاصة
   - Milkshake / ميلك شيك
   - Soft Drinks / مشروبات غازية

Quick Jump pills on `/menu`:
- العروض / Offers
- الفطور / Breakfast
- المقبلات / Appetizers
- الرئيسية / Mains
- المشويات / Grills
- الحلويات / Desserts
- المشروبات / Drinks

Ordering audit:
- Was any item deleted? No.
- Did any price change? No.
- Did any description change? No.
- Are drinks at the end of the menu? Yes.
- Are offers and packages first in the menu? Yes.
- Canonical Foost item cards inside original sections: 215.
- Additional Best Sellers cards are duplicated highlights only, not new menu records.

## Official Images

Official product images are used only when Foost provides `productMediaType: "item_image"`.

Items without an official Foost item image use the site placeholder with an Image Coming Soon label:

| Item | Arabic Name | Section | Price |
| --- | --- | --- | --- |
| ANIMA | أنيما | VIP SHISHA | 129 SAR |

No matching dedicated local project asset was found for ANIMA, so no substitute food/shisha photo was used.

## Foost Custom Options

The following Foost options are stored and displayed:

| Item | Base Price | Options |
| --- | --- | --- |
| Turkish Tea (Glass) | 12 SAR | Small 45, Medium 52, Big 64 |
| Moroccan Tea (Small Pot) | 35 SAR | Medium 45, Big 52 |

## Missing Data In Foost

Foost has no item description for these items, so the local menu intentionally keeps their descriptions empty:

- Asya's Beyti
- Rice
- Bulgur
- Sparkling Water
- DOUBLE APPLE Fakher
- DOUBLE APPLE NAKHLA
- DOUBLE APPLE MİX
- GRAPE
- GRAPE BERRY
- GRAPE MİNT
- MINT
- BLUE BERRY
- LEMON MİNT
- GUM
- WATERMELON
- LOVE 66
- PEACH
- ORANGE MINT
- GUM MINT
- MASTICA
- GUM CINNAMON
- RUBY CRUSH
- BY CHARMING SPECIAL
- DUBAİ
- NOL GRADUS
- MARBELLA
- HATTRICK
- LAST PUFF
- KOKAYA
- ANIMA
- HATAY KATIKLI BREAD
- TANDIR EKMEĞİ

Foost has no category description for these sections, so the local menu intentionally keeps their blurbs empty:

- Shisha By Charming
- SIGNATURE SHISHA
- VIP SHISHA

## Verification

- Live Foost payload extracted from the page's embedded Next/React data.
- Next/React text records were resolved before comparison.
- Local `src/data/menu.ts` was compared against the current Foost payload.
- Automated comparison found 0 differences.
- Browser verification confirmed `/menu` renders 12 display groups, 29 original Foost sections, 215 canonical item cards, 7 quick-jump pills, and 1 placeholder.
- Browser verification confirmed the first display group is `offers` and the last display group is `drinks`.
- Browser verification covered desktop, tablet, and mobile with 0 horizontal overflow and 0 console errors.
- `npm run build` completed successfully after the restructure.
