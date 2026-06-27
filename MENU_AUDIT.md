# Asya's Gourmet Menu Audit

Audit date: 2026-06-27  
Last updated after final creative direction pass: 2026-06-27

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

The final creative direction pass did not change menu product data. The home page shows selected real menu items only, and the full menu is available on `/menu`.

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
- `/menu`: Full menu page with all 29 sections and all 215 items.
- `/menu` search, sticky category navigation, and mobile category pills verified.
- Mobile and desktop checks found no horizontal overflow.
- Desktop `/menu` grid renders 4 columns; tablet renders 2 columns; mobile renders single-column cards.
- Floating contact bar is mobile/tablet only and does not cover desktop menu controls.
- Official location link is wired to the supplied Google Maps URL.

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
- Browser verification confirmed `/menu` renders 29 sections, 215 cards, 29 category pills, and 1 placeholder.
- Browser verification covered desktop, tablet, and mobile with 0 horizontal overflow and 0 console errors.
- `npm run build` completed successfully after the restructure.
