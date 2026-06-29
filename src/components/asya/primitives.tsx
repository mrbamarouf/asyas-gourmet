import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  CakeSlice,
  ChefHat,
  Clock,
  Coffee,
  CupSoda,
  ExternalLink,
  Flame,
  Home,
  Instagram,
  Languages,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Soup,
  Utensils,
  Wheat,
  X,
} from "lucide-react";
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";

import {
  CATEGORIES,
  ITEMS,
  RESTAURANT,
  type Locale,
  type LocalizedText,
  type MenuCategory,
  type MenuItem,
  type MenuTag,
} from "@/data/menu";
import { formatVisibleText, I18nContext, UI, useI18n, type UIKey } from "@/lib/i18n";

import desktopIntroVideo from "@/assets/asya-desktop-intro.mp4";
import mobileIntroVideo from "@/assets/asya-mobile-intro.mp4";
import logoImg from "@/assets/asyas-logo-transparent.png";
import placeholderImg from "@/assets/dish-placeholder.jpg";

export const softEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
const LOCALE_STORAGE_KEY = "asyas-locale";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const softScale: Variants = {
  hidden: { opacity: 0, scale: 0.985 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.18, ease: softEase },
  },
};

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.03,
      staggerChildren: 0.03,
    },
  },
};

interface AsyaShellProps {
  children: ReactNode;
  current: "home" | "menu";
}

interface ItemDetailSelection {
  item: MenuItem;
  category: MenuCategory;
}

interface ItemDetailContextValue {
  openItemDetail: (selection: ItemDetailSelection) => void;
}

const ItemDetailContext = createContext<ItemDetailContextValue | null>(null);
const MENU_ITEM_BY_ID = new Map(ITEMS.map((item) => [item.id, item]));
const MENU_CATEGORY_BY_ID = new Map(CATEGORIES.map((category) => [category.id, category]));

const DESCRIPTION_DISPLAY_COPY: Record<string, LocalizedText> = {
  "e3c89499-bf61-4a1e-9191-3445228a9ee2": {
    ar: "مائدة فطور تركية تضم أجبانًا، فواكه موسمية، لبنة بالزعتر، جبنة سورك، زيتونًا، طحينة مع دبس، مربى، بيضًا مخفوقًا، خبزًا طازجًا وشايًا تركيًا.",
    en: "A Turkish breakfast spread with cheese, seasonal fruit, labneh with zaatar, surk cheese, olives, tahini with molasses, jams, scrambled eggs, fresh bread, and Turkish tea.",
  },
  "502b7bd2-2ad7-4a03-9d96-30fb92d74098": {
    ar: "مائدة فطور تجمع الأجبان، الطماطم، الخيار، الفواكه الموسمية، الزيتون، اللبنة، جبنة سورك، مينمين، بطاطس مقرمشة، محمرة، حمص، فول، مربى وشاي.",
    en: "A breakfast spread with cheese, tomatoes, cucumber, seasonal fruit, olives, labneh, surk cheese, menemen, crispy potatoes, muhammara, hummus, foul, jams, and tea.",
  },
  "33c12c3e-1de8-4d9a-833c-9770603f05aa": {
    ar: "فطور عائلي واسع مع أجبان، فواكه موسمية، خبز طازج، طماطم، زيتون، لبنة، جبنة سورك، مينمين، مقالي مشكلة، حمص، محمرة ومربيات.",
    en: "A generous family breakfast with cheeses, seasonal fruit, fresh bread, tomatoes, olives, labneh, surk cheese, menemen, mixed fried bites, hummus, muhammara, and jams.",
  },
  "1ae0277d-4110-4b2b-ad0f-ebf2c6bbeaeb": {
    ar: "مينمين إسطنبولي من البيض والطماطم والفلفل، يطهى ببطء ويقدّم مع لبنة كريمية وخبز محمّص وبقدونس.",
    en: "Istanbul-style menemen with eggs, tomatoes, and peppers, gently cooked and served with labneh, croutons, and parsley.",
  },
  "5e586ecb-4451-4e10-852d-96ec5a32f46e": {
    ar: "مينمين بالطماطم والفلفل والبيض، يغطّى بجبنة القشقوان الذائبة ويقدّم مع اللبنة والخبز المقرمش.",
    en: "Menemen with tomatoes, peppers, and eggs, topped with melted kashar cheese and served with labneh and crisp bread.",
  },
  "755a894d-bcec-4035-9aac-a5a4575a4670": {
    ar: "بيض طري فوق لبن بالثوم، يزيّن بزبدة ذائبة دافئة ويقدّم مع خبز محمّص.",
    en: "Soft eggs served over garlicky yogurt, finished with warm melted butter and crisp croutons.",
  },
  "1bdacdb7-3add-4dad-bc1e-1bcc8b60a715": {
    ar: "بطاطس ذهبية مطهوة بالزبدة مع البيض، تقدم مع لبنة وكمون ورقائق فلفل حار.",
    en: "Golden potatoes cooked in butter with eggs, served with labneh, cumin, and chili flakes.",
  },
  "54633c97-9b3d-44ce-a902-01f1430c260e": {
    ar: "ورق عنب ملفوف بحشوة أرز وأعشاب خفيفة، يقدم مع اللبن والليمون والتوابل العطرية.",
    en: "Rolled vine leaves filled with rice and herbs, served with yogurt, lemon, and aromatic spices.",
  },
  "04e64d7b-d691-48ee-9b7a-a2f978c3e09e": {
    ar: "مشروب شعير بارد بلون ذهبي ورغوة ناعمة، بنكهة مرارة خفيفة وقوام منعش.",
    en: "Chilled malt drink with a golden color, soft foam, light bitterness, and a crisp finish.",
  },
  "bef4cfaf-a1da-4d59-a2e0-f53a99d3cf2f": {
    ar: "قطعتان من سميت كاراكوي، إحداهما بصلصة الطماطم والأخرى بالبيض، تقدمان فوق صلصة طماطم دافئة مع جرجير طازج.",
    en: "Two pieces of Karakoy-style simit, one with tomato sauce and one with eggs, served over warm tomato sauce with fresh arugula.",
  },
  "c1983103-608f-418e-a037-d79387429663": {
    ar: "أومليت بجبنة الموزاريلا المطهوة بالزبدة، يقدم مع طماطم كرزية وجرجير وقطع خبز محمص.",
    en: "Mozzarella omelette cooked in butter, served with cherry tomatoes, arugula, and crisp croutons.",
  },
  "2e68a5de-d7cc-4572-a661-2d967173ca8a": {
    ar: "زيتون أخضر وأسود مع خضراوات طازجة، فلفل ملوّن، رمان، ليمون وزيت زيتون.",
    en: "Green and black olives with fresh greens, colored peppers, pomegranate, lemon, and olive oil.",
  },
  "67056900-8679-442d-8181-6e283fad3fa1": {
    ar: "مقلاة ساخنة تضم خضارًا مطهوة مع الصلصة، وتُقدّم برائحة شهية.",
    en: "A hot Mediterranean-style pan layered with vegetables and sauce, served aromatic and richly seasoned.",
  },
  "3a13ab9e-66b3-45db-9442-606f00cb5a54": {
    ar: "مربيات منزلية من المشمش، التين، الفراولة والتوت، تقدم مع الطحينة والدبس.",
    en: "Homemade apricot, fig, strawberry, and mulberry jams, served with tahini and molasses.",
  },
  "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c": {
    ar: "برتقال طازج يعصر يوميًا، بطعم حلو وحموضة خفيفة وقوام منعش.",
    en: "Fresh oranges squeezed daily, with natural sweetness, light acidity, and a refreshing finish.",
  },
  "94cec6c5-0caa-43c1-a8fb-653b82a88309": {
    ar: "مشروب غازي بارد بنكهة كولا ولمسة كراميل خفيفة، يقدّم مع فقاعات منعشة.",
    en: "Chilled cola with light caramel notes and refreshing fizz.",
  },
  "dddfd6aa-96f8-4067-b566-8509c8c74636": {
    ar: "فراولة طازجة مخفوقة مع الحليب لقوام كريمي وطعم حلو طبيعي.",
    en: "Fresh strawberries blended with milk for a creamy texture and natural sweetness.",
  },
  "728a1cd6-4c57-4509-ab09-aafc279d3947": {
    ar: "موز طازج مخفوق مع الحليب لقوام كريمي وحلاوة ناعمة.",
    en: "Fresh banana blended with milk for a creamy texture and soft natural sweetness.",
  },
  "8f0dd89f-a75a-4c8b-a000-c96060303d3e": {
    ar: "بيض مطهو مع سجق منزلي متبّل، يقدّم ساخنًا مع خبز تيرناك التركي.",
    en: "Eggs cooked with seasoned homemade sucuk, served hot with Turkish tirnak bread.",
  },
  "38ec170c-750b-4fe4-a167-4cd1778648bc": {
    ar: "بيض عيون بصفار طري، يطهى ببساطة ويقدّم مع اللبنة.",
    en: "Sunny-side eggs with soft yolks, cooked simply and served with labneh.",
  },
  "97c60f8a-309e-46fb-b100-da93a603410d": {
    ar: "بيض مخفوق بالزبدة بقوام كريمي، يقدّم مع اللبنة.",
    en: "Scrambled eggs cooked with butter for a creamy texture, served with labneh.",
  },
  "7f704c10-78c1-4697-90d0-162cd7ce1cdb": {
    ar: "بيض مسلوق مع زبدة وكمون ورقائق فلفل حار وزعتر، يقدّم مع لبنة وخبز محمّص.",
    en: "Boiled eggs with butter, cumin, chili flakes, and thyme, served with labneh and crisp croutons.",
  },
  "a71b8968-9fff-47e1-8c1d-f74f500aa3c1": {
    ar: "بيض مسلوق بصلصة من الشيدر والحليب والكريمة، مع كمون ورقائق فلفل حار وخبز محمّص.",
    en: "Boiled eggs in a cheddar, milk, and cream sauce with cumin, chili flakes, and crisp croutons.",
  },
  "d6451bec-6280-4ed1-b438-53d41f63b4f1": {
    ar: "أومليت بالبيض والزبدة، يقدّم مع طماطم كرزية وجرجير وخبز محمّص.",
    en: "Omelette with eggs and butter, served with cherry tomatoes, arugula, and crisp croutons.",
  },
  "774cacb7-7b1b-4fe8-9389-caa3444926f9": {
    ar: "أومليت بالخضار يضم الكوسا والجزر والفطر والفلفل الملوّن، ويقدّم مع طماطم كرزية وجرجير.",
    en: "Vegetable omelette with zucchini, carrots, mushrooms, and colored peppers, served with cherry tomatoes and arugula.",
  },
  "daf67786-46b5-445d-973f-cf8748d7e16f": {
    ar: "تشكيلة أجبان أناضولية تضم لور، جبنة بيضاء، شيدر وجبنًا مجدولًا، مع تين ومشمش وعنب وجوز.",
    en: "Anatolian cheese selection with lor, white cheese, cheddar, and braided cheese, served with figs, apricots, grapes, and walnuts.",
  },
  "59bc51ab-231e-44bc-8588-5bfc00ac5eb0": {
    ar: "حلوم ساخن في فخار فوق صلصة طماطم، مع بيستو ونعناع وخبز محمّص.",
    en: "Hot halloumi in a clay pot over tomato sauce, finished with pesto, mint, and crisp croutons.",
  },
  "0e31b410-7a4f-44cc-be7c-6da715660d4f": {
    ar: "جبنة بيضاء تقدم مع مربى الفراولة، زعتر وخبز محمّص.",
    en: "White cheese served with strawberry jam, zaatar, and crisp croutons.",
  },
  "7e0f5506-f996-4586-a42a-b1b522dfbc43": {
    ar: "فول مطهو ببطء مع الطماطم والبصل والثوم، يخلط بالطحينة وزيت الزيتون.",
    en: "Slow-cooked fava beans with tomatoes, onions, and garlic, enriched with tahini and olive oil.",
  },
  "c5a25fe4-fdc1-4848-be25-91d0141999b2": {
    ar: "عسل مختار يقدّم بقوام ناعم وحلاوة طبيعية بجانب الفطور.",
    en: "Selected honey with a smooth texture and natural sweetness, served with breakfast.",
  },
  "47dbca7a-682e-443c-99bc-01dd2bb4adfc": {
    ar: "كايمك تركي كريمي، يقدّم باردًا مع العسل أو الخبز الطازج.",
    en: "Creamy Turkish kaymak served chilled with honey or fresh bread.",
  },
  "004e2b9d-6aef-476a-bed8-e854eeaba257": {
    ar: "سجق تركي متبّل يقلى حتى يتحمّر ويقدّم ساخنًا.",
    en: "Seasoned Turkish sucuk, pan-fried until browned and served hot.",
  },
  "7ebbea3f-cc18-4eb1-ab8d-0e9c1dd6feef": {
    ar: "لبنة كريمية بطعم منعش، تقدم مع الفطور والمخبوزات.",
    en: "Creamy labneh with a tangy finish, served with breakfast and bakery dishes.",
  },
  "223a7d36-eb74-4e6b-a01c-b7ff0b0c696b": {
    ar: "بطاطس ذهبية مقرمشة متبّلة بالزعتر والنعناع، تحضّر في المطبخ وتقدّم ساخنة.",
    en: "Golden crispy potatoes seasoned with zaatar and mint, prepared in-house and served hot.",
  },
  "e406d9c9-0993-4a1c-875a-dfda98e2fadb": {
    ar: "بطاطس مقرمشة بالثوم والبقدونس وصلصة حارة خفيفة على طريقة مرسين.",
    en: "Crispy potatoes with garlic, parsley, and a light spicy sauce in the style of Mersin.",
  },
  "6377546c-aff4-488d-ac30-ad27245054db": {
    ar: "بطاطس مقلية مقرمشة تقدم مع الكاتشب والمايونيز ورشة بهارات كاجون.",
    en: "Crispy fries served with ketchup, mayonnaise, and a touch of Cajun spice.",
  },
  "3178ac05-fef6-43ce-a897-ea01df50a79f": {
    ar: "كروكيت بطاطس ذهبي، مقرمش من الخارج وطري من الداخل، يقدم مع الكاتشب والمايونيز.",
    en: "Golden potato croquettes, crisp outside and soft inside, served with ketchup and mayonnaise.",
  },
  "e8b45db5-b42f-4122-8dfc-59d19bc88045": {
    ar: "قشطة مع قرص عسل وعسل مصفّى، تقدم مع خبز البازلاما الطازج.",
    en: "Clotted cream with honeycomb and strained honey, served with fresh bazlama bread.",
  },
  "371e252f-2196-441e-b21c-f46c97ae2f6c": {
    ar: "ماتشا يابانية مخفوقة مع حليب بارد لقوام ناعم ونكهة عشبية متوازنة.",
    en: "Japanese matcha whisked with chilled milk for a smooth texture and balanced grassy flavor.",
  },
  "07de0c88-200d-4732-929e-e8c98a0faedd": {
    ar: "نعناع طازج مع ليمون وصودا باردة، بنكهة حمضية صافية.",
    en: "Fresh mint with lime and cold soda, finished with a clean citrus bite.",
  },
  "8dc252c0-789f-4024-9414-67faa20f33d8": {
    ar: "توت مشكّل مع نعناع وليمون وصودا باردة، بطعم فاكهي منعش.",
    en: "Mixed berries with mint, lime, and cold soda for a bright fruit finish.",
  },
  "dd30a93f-661c-4099-90c4-74dc9f31a3a3": {
    ar: "نعناع بارد مع ليمون وتفاح أخضر، بنكهة حامضية خفيفة.",
    en: "Cooling peppermint with lime and green apple for a crisp sour finish.",
  },
  "bde937b8-d111-42b3-89e6-7822ee0c18b7": {
    ar: "أناناس ناضج يعصر باردًا، بطعم استوائي حلو وحامض خفيف.",
    en: "Ripe pineapple pressed cold, with tropical sweetness and light acidity.",
  },
  "20fa5e31-1a88-4e58-b9d5-ed4f4d32e3ac": {
    ar: "مزيج عصير من البرتقال والتفاح الأخضر والجزر، بطعم حلو ومنعش.",
    en: "Orange, green apple, and carrot juice blended for a sweet, refreshing finish.",
  },
  "1cb9d1b5-6d8f-493f-be1b-e57d084f065d": {
    ar: "شاي مثلج بالكركديه مع التوت الأحمر والأزرق، بطعم حامضي خفيف.",
    en: "Iced hibiscus tea with raspberry and blueberry, finished with a light tart note.",
  },
  "b1268bb2-150f-4ca7-afb5-f2fa21507da5": {
    ar: "ليمونادة تركية منزلية ممزوجة بتوت مشكّل، بتوازن بين الحلاوة والحمضيات.",
    en: "House Turkish lemonade blended with mixed berries, balanced between sweetness and citrus.",
  },
  "7c20069b-3e20-4edb-b3bf-75bf82b44cdd": {
    ar: "مشروب تشرشل بارد وفوّار، يقدم بنكهة حادة ومنعشة.",
    en: "Chilled Churchill soda with a crisp, fizzy finish.",
  },
  "10669c1f-596c-4f5f-80a5-d05811ffd71a": {
    ar: "مشروب طاقة بارد بطعم حلو وفوّار ولمسة حادة.",
    en: "Cold energy drink with a sweet, fizzy taste and a sharp finish.",
  },
  "b830f64c-a3fb-4fb1-81ff-74f18f79ab0a": {
    ar: "مشروب غازي بارد بنكهة البرتقال وفقاعات منعشة.",
    en: "Chilled orange soda with bright citrus flavor and refreshing fizz.",
  },
  "21abfb80-c2e5-413d-9019-5cc3de9121ae": {
    ar: "حلوم مشوي مع طماطم كرزية وخيار وبصل أحمر وزيتون أخضر وأسود، يقدّم بلمسة ليمون.",
    en: "Grilled halloumi with cherry tomatoes, cucumber, red onion, green and black olives, and a touch of lemon.",
  },
  "bd920d50-f921-46e5-844f-84d6eb6dcf74": {
    ar: "خس وجرجير وبقدونس مع خيار وطماطم وفجل صغير وفلفل ملوّن، يقدّم بلمسة ليمون.",
    en: "Lettuce, arugula, parsley, cucumber, tomatoes, baby radish, and colored peppers finished with lemon.",
  },
  "a1cf8693-8514-4542-a2b9-e3fd13f86f95": {
    ar: "فلافل مقرمشة فوق طبقة حمص ناعمة، مع طماطم كرزية وخيار مخلل وجرجير وطحينة.",
    en: "Crisp falafel over smooth hummus, served with cherry tomatoes, pickled cucumber, arugula, and tahini.",
  },
  "fb3c796f-b84e-469b-96ec-01b9b6f01018": {
    ar: "لفائف سيغارا بوريك محشوة بالجبن، مقلية حتى تصبح ذهبية وتقدّم مع خس ورمان وليمون.",
    en: "Sigara borek rolls filled with cheese, fried until golden, and served with lettuce, pomegranate, and lemon.",
  },
  "1f431c8a-b272-4a9f-8377-758fd9a0781d": {
    ar: "بطاطس مقرمشة بالفلفل الحار والليمون والبقدونس، تقدّم مع صلصة طماطم خفيفة.",
    en: "Crispy potatoes with chili, lemon, and parsley, served with a light tomato sauce.",
  },
  "34cf0c11-521a-4390-b42a-48b070e22cc2": {
    ar: "جوزلمة بعجين رقيق محشوة بالبطاطس، تطهى على الصاج وتقدّم ساخنة.",
    en: "Thin gozleme filled with potato, cooked on the griddle and served hot.",
  },
  "93db7fe1-0187-437c-9b85-f9704ec58e20": {
    ar: "جوزلمة بعجين منزلي رقيق محشوة بجبن ذائب، تطهى على الصاج وتقدّم ساخنة.",
    en: "Handmade gozleme filled with melted cheese, cooked on the griddle and served hot.",
  },
  "a0e62f70-910c-4ebb-a6af-566d7b1a6cbb": {
    ar: "جوزلمة بعجين رقيق محشوة بالسبانخ الطازجة، تطهى على الصاج لقوام طري وخفيف.",
    en: "Thin gozleme filled with fresh spinach, cooked on the griddle for a soft, light texture.",
  },
  "7704310c-87e1-4d73-a503-a9f32854973c": {
    ar: "سو بوريك بطبقات عجين منزلي وحشوة غنية، يخبز ويقدّم دافئًا.",
    en: "Su boregi with layered handmade dough and a rich filling, baked and served warm.",
  },
  "cf8b74da-b6fe-40f1-9a00-639a4de60168": {
    ar: "بيدا مخبوزة بجبنة عكاوي وموزاريلا، تزيّن بالسمسم وحبة البركة.",
    en: "Oven-baked pide with Akawi cheese and mozzarella, finished with sesame and black cumin.",
  },
  "d44063ac-c32b-457a-b474-ced546d36818": {
    ar: "بيدا مخبوزة بجبنة الكشكفال الذائبة، تزيّن بالسمسم وحبة البركة.",
    en: "Oven-baked pide with melted Kashkaval cheese, sesame, and black cumin.",
  },
  "ead80465-de52-4268-ad38-30e2db704684": {
    ar: "بيدا طرية باللبنة والزعتر والموزاريلا، تكمّل بالسمسم.",
    en: "Soft pide layered with labneh, zaatar, mozzarella, and sesame.",
  },
  "6969f27d-684c-4725-9257-5e69733bc382": {
    ar: "بيدا مخبوزة بالزعتر العطري وزيت الزيتون، تقدّم ساخنة.",
    en: "Oven-baked pide topped with aromatic zaatar and olive oil, served hot.",
  },
  "1e6a71bd-c035-4e38-a510-413af41596e3": {
    ar: "بيدا مخبوزة باللبنة والموزاريلا، تزيّن بالسمسم وحبة البركة.",
    en: "Oven-baked pide with labneh, mozzarella, sesame, and black cumin.",
  },
  "7244ddca-2718-40e0-90bf-287718182154": {
    ar: "بيدا مخبوزة بلحم إسكندر والموزاريلا، مع سمسم وحبة البركة.",
    en: "Oven-baked pide with Iskender-style beef, mozzarella, sesame, and black cumin.",
  },
  "8507dfb1-80d8-4294-a8a6-0efa00e89e86": {
    ar: "لحم بعجين بعجينة رقيقة ومزيج لحم متبّل، يقدّم مع بقدونس وليمون.",
    en: "Thin lahmacun topped with seasoned minced meat, served with parsley and lemon.",
  },
  "345500b8-328d-4a72-9269-93c25bf75c1e": {
    ar: "لحم بعجين عنتابي بتتبيلة حارة، يقدّم مع بقدونس وليمون ودبس رمان وباذنجان مشوي.",
    en: "Antep-style lahmacun with spiced minced meat, parsley, lemon, pomegranate molasses, and grilled eggplant.",
  },
  "770b1ff2-0aef-4f23-8378-ebe37681a842": {
    ar: "شوربة عدس مطهية مع الخضار، تقدّم مع خبز محمّص وليمون.",
    en: "Lentil soup simmered with vegetables, served with croutons and lemon.",
  },
  "6e5d42ab-cdfc-45c8-968c-e0c660f048ae": {
    ar: "شوربة دجاج بالكريمة والزبدة، تكمّل بلمسة نعناع خفيفة.",
    en: "Creamy chicken soup with butter, finished with a light touch of mint.",
  },
  "b0a22f0e-f19c-4985-8311-0badb4f2a692": {
    ar: "شوربة خضار مطهية على مهل، تقدّم مع خبز محمّص وليمون.",
    en: "Vegetable soup slowly simmered and served with croutons and lemon.",
  },
  "ab194150-c362-49bc-8e2e-505915940ea4": {
    ar: "تبولة بالبقدونس والطماطم والبرغل، تخلط مع الرمان والليمون وزيت الزيتون.",
    en: "Tabbouleh with parsley, tomatoes, bulgur, pomegranate, lemon, and olive oil.",
  },
  "0991b4d5-5f1b-44e6-8e91-e91959db281b": {
    ar: "طماطم وخيار وفلفل مفروم مع جوز مجروش، دبس رمان وليمون وزيت زيتون وسماق.",
    en: "Chopped tomatoes, cucumber, and peppers with crushed walnuts, pomegranate molasses, lemon, olive oil, and sumac.",
  },
  "15420618-d1b3-4364-aff0-dd2102f944e3": {
    ar: "فتوش بالخس والطماطم والخيار والفجل، مع خبز محمّص ورمان ودبس رمان وليمون.",
    en: "Fattoush with lettuce, tomatoes, cucumber, radish, toasted bread, pomegranate, molasses, and lemon.",
  },
  "0ad35147-8d8d-49c5-a25c-f574b7e07145": {
    ar: "خيار وطماطم كرزية وبصل أحمر وجرجير صغير، مع جبنة بيضاء وزيت زيتون وبلسميك.",
    en: "Cucumber, cherry tomatoes, red onion, and baby arugula with white cheese, olive oil, and balsamic glaze.",
  },
  "7f21d1d1-00f8-4273-8fc0-beff636a2ddb": {
    ar: "تشكيلة مقبلات باردة لشخصين تضم المحمرة والحمص والمتبل وبابا غنوج والمخللات المنزلية.",
    en: "Cold meze for two with muhammara, hummus, mutabbal, baba ghanoush, and house pickles.",
  },
  "0d0da313-976b-4f5b-97ae-ac4c151f55df": {
    ar: "حمص كريمي ناعم يزيّن بزيت الزيتون والسماق والنعناع المجفف.",
    en: "Creamy hummus finished with olive oil, sumac, and dried mint.",
  },
  "f683bf36-cbc3-4c46-9c45-cfb6e32a13af": {
    ar: "محمّرة بالفلفل الأحمر والجوز، تكمّل بدبس الرمان وزيت الزيتون.",
    en: "Muhammara with red pepper and walnuts, finished with pomegranate molasses and olive oil.",
  },
  "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5": {
    ar: "باذنجان مشوي مدخّن مع زيت زيتون وأعشاب ودبس رمان.",
    en: "Smoky roasted eggplant with olive oil, herbs, and pomegranate molasses.",
  },
  "2b2ae56f-a3cf-4b9e-a197-5e29707e04c7": {
    ar: "متبل باذنجان مشوي مع رمان وسماق وزيت زيتون ونعناع.",
    en: "Roasted eggplant mutabbal with pomegranate, sumac, olive oil, and mint.",
  },
  "a1ada07c-b494-4161-88bb-014150f8aa3e": {
    ar: "مخللات منزلية مقرمشة بنكهة حامضة خفيفة، تقدّم بجانب المقبلات والمشويات.",
    en: "Crunchy house pickles with a light tang, served with meze and grills.",
  },
  "9bdb2b3e-9591-4fd4-8860-a67c47440f04": {
    ar: "كبة ببرغل ناعم وحشوة لحم مفروم، تقدّم مع اللبن ودبس الرمان.",
    en: "Kibbeh with a fine bulgur shell and minced meat filling, served with yogurt and pomegranate molasses.",
  },
  "d023c723-73dc-4074-9dc7-9e3fb3ff1b7a": {
    ar: "فيتوتشيني طازجة بصلصة كريمة وزبدة، مع فطر ودجاج وثوم وبيستو وبارميزان.",
    en: "Fresh fettuccine in a cream and butter sauce with mushrooms, chicken, garlic, pesto, and Parmesan.",
  },
  "cbefd6a5-095a-4a11-88fa-3a647822c28e": {
    ar: "سباغيتي طازجة بصلصة نابولي وبولونيز لحم مطهو ببطء، مع زبدة وثوم وبارميزان.",
    en: "Fresh spaghetti with Napoli tomato sauce, slow-cooked Bolognese, butter, garlic, and Parmesan.",
  },
  "be6b7932-2712-42e0-8f48-a6b4a7528b80": {
    ar: "بيتزا بالدجاج وصلصة الطماطم والجبنة الذائبة، تخبز وتقدّم ساخنة.",
    en: "Chicken pizza with tomato sauce and melted cheese, baked and served hot.",
  },
  "8654a6b2-3bcf-436f-8342-9f2cc02ce739": {
    ar: "مشاوي لشخصين تضم كباب أضنة وكباب دجاج وأوصال لحم ضأن وشيش طاووق، تشوى على الفحم.",
    en: "Mixed grill for two with Adana kebab, chicken kebab, lamb shish, and chicken shish, grilled over charcoal.",
  },
  "adcb8284-7343-44da-a287-e1582946148f": {
    ar: "مشاوي لشخص واحد من الكباب والشيش التركي، تشوى على الفحم وتقدّم مع الإضافات.",
    en: "Mixed grill for one with Turkish kebab and shish, grilled over charcoal and served with sides.",
  },
  "6e4faf94-cfa4-438e-986b-05fd8f06d265": {
    ar: "شرائح لحم بقري فوق خبز بيدا دافئ، مع صلصة طماطم وزبدة ذائبة ولبن وخضار مشوية.",
    en: "Sliced beef over warm pide bread with tomato sauce, melted butter, yogurt, and grilled vegetables.",
  },
  "7b7c1ef3-04bd-4968-b1eb-2aad83376751": {
    ar: "كباب أضنة من لحم مفروم متبّل، يشوى على الفحم ويقدّم مع البصل والفلفل والطماطم واللافاش والبرغل.",
    en: "Adana kebab made with seasoned minced meat, charcoal-grilled and served with onion, peppers, tomatoes, lavash, and bulgur.",
  },
  "7c604238-7a07-4168-b234-9bb1b536d202": {
    ar: "أوصال لحم بقري متبّلة تشوى على الفحم، وتقدّم مع البصل والفلفل والطماطم واللافاش والبرغل.",
    en: "Marinated beef cubes grilled over charcoal, served with onion, peppers, tomatoes, lavash, and bulgur.",
  },
  "11128019-e4f1-4d2d-9665-4a8731a68b77": {
    ar: "شيش طاووق من قطع دجاج متبّلة، يشوى على الفحم ويقدّم مع اللافاش والبرغل والخضار المشوية.",
    en: "Chicken shish with marinated chicken pieces, charcoal-grilled and served with lavash, bulgur, and grilled vegetables.",
  },
  "bdc9b239-c9dc-4a89-a739-895007f8133e": {
    ar: "كباب دجاج متبّل بتوابل خاصة، يشوى على الفحم ويقدّم مع اللافاش والبرغل والخضار.",
    en: "Chicken kebab seasoned with house spices, charcoal-grilled and served with lavash, bulgur, and vegetables.",
  },
  "4034fed6-3ad9-4bdf-9540-0bf6b1c9e9b2": {
    ar: "مكعبات لحم بقري فوق باذنجان مشوي باللبن، تزيّن بخضار سوتيه وتقدّم مع خبز طرناق.",
    en: "Beef cubes over roasted eggplant with yogurt, topped with sautéed vegetables and served with tirnak bread.",
  },
  "f3370cb5-676e-4238-b7c8-c56cdce9d257": {
    ar: "طاجن لحم بقري بصلصة الطماطم والفلفل، يطهى في قدر فخاري ويقدّم مع خبز عجين.",
    en: "Beef casserole cooked in a clay pot with tomato and pepper sauce, served with fresh dough bread.",
  },
  "1e52139d-46ca-4414-a1f6-88a288dfe687": {
    ar: "طاجن دجاج بصلصة الطماطم والفلفل، يطهى في قدر فخاري ويقدّم مع خبز عجين.",
    en: "Chicken casserole cooked in a clay pot with tomato and pepper sauce, served with fresh dough bread.",
  },
  "dccf7dca-ded8-4ddf-8169-dcfd2a22ec86": {
    ar: "تندرلوين مشوّح يقدّم مع بطاطس مهروسة وخضار سوتيه موسمية.",
    en: "Seared tenderloin served with mashed potatoes and seasonal sautéed vegetables.",
  },
  "896932b6-dc0c-4ab5-913e-6ba142bfc030": {
    ar: "ريب آي مشوي يقدّم مع بطاطس مهروسة وخضار سوتيه موسمية.",
    en: "Grilled ribeye served with mashed potatoes and seasonal sautéed vegetables.",
  },
  "49bcee08-afe0-4bb9-8220-b3d9088cd35b": {
    ar: "ريش غنم مشوية على الفحم، تقدم مع بطاطس صغيرة وذرة وزبدة وإكليل الجبل.",
    en: "Charcoal-grilled lamb chops served with baby potatoes, corn, butter, and rosemary.",
  },
  "863eb485-f580-4975-81ac-bf2467106519": {
    ar: "كفتة منزلية محشوة بالجبن، تشوى وتقدّم مع بطاطس مقلية وصلصة الشيف.",
    en: "Homemade kofte filled with cheese, grilled and served with fries and chef's sauce.",
  },
  "c19b4ad7-9dd2-495c-9fcf-9ca0a81fba63": {
    ar: "كفتة لحم بقري على طريقة الجزار، تقدّم مع بطاطس مقلية وصلصة الشيف.",
    en: "Butcher-style beef meatballs served with fries and chef's sauce.",
  },
  "c8c42df3-a6cf-4e2d-b900-0005fc67e07a": {
    ar: "تشكيلة فواكه موسمية مقطعة وتقدّم باردة.",
    en: "Seasonal fruit selection, sliced and served chilled.",
  },
  "6d6b0894-1f35-4df2-a180-d4b563db3102": {
    ar: "قهوة سعودية بتوابل عطرية خفيفة، تقدّم بالدلة مع التمر.",
    en: "Saudi coffee with light aromatic spices, served in a dallah with dates.",
  },
  "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc": {
    ar: "شاي تركي أسود يُخمّر ببطء ويقدّم ساخنًا في كوب.",
    en: "Turkish black tea slowly brewed and served hot by the glass.",
  },
  "66cb2cd2-cb25-4a93-a532-0cf338f7d9d5": {
    ar: "مزيج شاي شتوي بالأعشاب والنعناع والحمضيات، يقدّم ساخنًا.",
    en: "Winter herbal tea with mint and citrus notes, served hot.",
  },
  "8987cc38-505b-48e4-a821-c534ab5fbaac": {
    ar: "شاي أسود ممزوج بالحليب، يقدّم ساخنًا بقوام كريمي.",
    en: "Black tea blended with milk and served hot with a creamy body.",
  },
  "aac2d932-f051-472d-8951-d9f400dc4f07": {
    ar: "شاي أخضر مغربي بالنعناع الطازج، يقدّم في إبريق صغير.",
    en: "Moroccan green tea with fresh mint, served in a small pot.",
  },
  "c3d5aaa1-b279-47a7-b745-dbf27c322d41": {
    ar: "عيران تركي بارد مع نعناع طازج ولمسة ملوحة خفيفة.",
    en: "Cold Turkish ayran with fresh mint and a light salty finish.",
  },
  "ab4ff496-559f-4c8d-8052-a20b900ffeb0": {
    ar: "مياه غازية تركية باردة بفقاعات واضحة ومذاق نقي.",
    en: "Chilled Turkish sparkling water with lively bubbles and a clean finish.",
  },
  "dda18a8d-c5a7-4211-bbda-1992f6154416": {
    ar: "مياه باردة تقدّم مع الوجبة.",
    en: "Chilled water served with the meal.",
  },
  "528fb6cd-81b9-4b9d-b9da-30edcdb77afd": {
    ar: "مشروب ليمون ولايم بارد وفقاعات خفيفة.",
    en: "Chilled lemon-lime soda with light bubbles.",
  },
};

const ITEM_NAME_DISPLAY_COPY: Record<string, Partial<LocalizedText>> = {
  "38ec170c-750b-4fe4-a167-4cd1778648bc": { en: "Sunny Side Up" },
  "97c60f8a-309e-46fb-b100-da93a603410d": { en: "Farm-Style Scrambled Eggs" },
  "7f704c10-78c1-4697-90d0-162cd7ce1cdb": { en: "Boiled Eggs" },
  "a71b8968-9fff-47e1-8c1d-f74f500aa3c1": { en: "Boiled Eggs with Cheddar" },
  "aa0cfbca-91ae-4fb7-97ef-4fc420523a51": { en: "Hatay Katikli Bread" },
  "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6": { en: "Tandir Bread" },
  "44ee2cb1-0808-4e9e-982d-66f24c1d45e9": { en: "Caesar Chicken Salad" },
  "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5": { en: "Baba Ghanoush" },
  "9bdb2b3e-9591-4fd4-8860-a67c47440f04": { en: "Kibbeh" },
  "adcb8284-7343-44da-a287-e1582946148f": { en: "Mixed Grill for One" },
  "896932b6-dc0c-4ab5-913e-6ba142bfc030": { en: "Entrecote" },
  "bff7822d-ed45-48d6-bdee-524040ba5ee5": { en: "Beef Shashlik with Cheddar" },
  "744474c5-cf88-4c22-bf13-6e05e38ff5c6": { en: "Cold Baklava with Milk" },
  "c8c42df3-a6cf-4e2d-b900-0005fc67e07a": { en: "Fruit Plate" },
  "de24fecc-4ce3-484f-a34e-3a7d41b29137": { en: "Mastic Turkish Coffee" },
  "a55cdfa6-fee8-46c1-a474-c5ab8922066c": { en: "V60 Hot Drip Coffee" },
  "73af14bc-7343-4743-bcb1-776629f14d1b": { en: "Karak Tea for Two" },
  "c97ed7b7-c24c-4bf8-af71-6378bcbe56e3": { en: "Iced Spanish Latte" },
  "7df74560-803f-4170-9d26-8d254be2e1ac": { en: "Iced Latte" },
  "29ac4114-6af6-441f-b56b-d0ac4d34d758": { en: "Iced White Chocolate Mocha" },
  "fca2bd66-4d04-4631-8636-0186f5040191": { en: "Iced Americano" },
  "e3b8b4f5-d415-4ff7-bd2d-ee666c77193d": { en: "Iced Mocha" },
  "5303aeee-379d-423a-b655-7a2ce5a53340": { en: "Iced Drip Coffee" },
  "8dc252c0-789f-4024-9414-67faa20f33d8": { en: "Mixed Berry Mojito" },
  "a65088c9-ee60-43df-be57-1e77c7380923": { en: "Asya's Special" },
  "0e7f4325-c3a2-4f4d-bb92-0d2a98cc53fc": { en: "Passion Mango Frozen" },
  "b1268bb2-150f-4ca7-afb5-f2fa21507da5": { en: "Mixed Berry Lemonade" },
  "c3d5aaa1-b279-47a7-b745-dbf27c322d41": { en: "Ayran with Mint" },
  "dddaadc3-9bae-40fb-b7fd-54adcaa41017": { en: "Ayran with Basil" },
  "a1f1dab3-f336-4ab4-ad82-8122687ec772": { en: "Ayran with Soda" },
  "3139c3c3-4c00-4286-b4f1-01dab882d635": { en: "Ayran with Cucumber" },
  "10669c1f-596c-4f5f-80a5-d05811ffd71a": { en: "Red Bull" },
  "9f623f75-c40d-47fd-8c3f-eebdab56fa9a": { en: "Chocolate Milkshake" },
  "dddfd6aa-96f8-4067-b566-8509c8c74636": { en: "Strawberry Milkshake" },
  "728a1cd6-4c57-4509-ab09-aafc279d3947": { en: "Banana Milkshake" },
  "04e64d7b-d691-48ee-9b7a-a2f978c3e09e": { ar: "مشروب شعير", en: "Malt Drink" },
  "77a04025-581e-410b-b70b-bb2c4de5a648": { en: "Double Apple Fakher" },
  "66543356-1b79-497f-ab11-9fe41362d9c3": { en: "Double Apple Nakhla" },
  "4bc33733-c8cf-48a5-8ff7-f2ccdfd7cadf": { en: "Double Apple Mix" },
  "35a25c13-d0b9-46e7-a712-630cf9928e0d": { en: "Grape" },
  "e26bbf68-0d59-44de-b1b2-c447761acf20": { en: "Grape Berry" },
  "72cd40c5-5475-4d48-9e56-4d0ea5510c60": { en: "Grape Mint" },
  "2b92aa34-e5aa-4a63-971f-a18a610c746c": { en: "Mint" },
  "726653ff-c498-403e-bc48-8c4100ed7efd": { en: "Blueberry" },
  "7f1899d8-36b3-4250-9d32-7a1d0bd6f6d6": { en: "Lemon Mint" },
  "7375d7eb-72c4-40cc-99b5-b8ae81403424": { en: "Gum" },
  "975f95ee-5971-4e1b-9c0b-f0c4d484aa1a": { en: "Watermelon" },
  "3b1c0c76-0809-4459-92cf-adff4d03dff8": { en: "Love 66" },
  "86820d79-cb6d-4bca-8e52-c539bd47d7a9": { en: "Peach" },
  "7b6de15e-fa0e-4c9e-909d-f7432a09fdf4": { en: "Orange Mint" },
  "6565c206-6158-4af0-a778-591bafdef0b0": { en: "Gum Mint" },
  "00eeda4e-667c-45ac-8eea-dc5d2b5341a0": { en: "Mastic" },
  "ade9d7d4-01d5-4d52-9d1d-89e189d3fc70": { en: "Gum Cinnamon" },
  "25fedaab-c4ad-4005-9ce9-c5f5c6eb51a5": { en: "Ruby Crush" },
  "a103a19f-8c77-4c08-a9bf-e89a175412f3": { en: "By Charming Special" },
  "fea3edb5-2fb2-4898-973e-79dffee34090": { en: "Dubai" },
  "83979ed6-5b12-4aca-8a70-3f44ed9c61f5": { en: "Nol Gradus" },
  "aa2525eb-504a-4257-abbc-60a182e8e790": { en: "Marbella" },
  "3e08c664-b982-41e3-b325-ab68a12f01b5": { en: "Hattrick" },
  "defa0901-7a2a-467e-ba6a-af3e38979e22": { en: "Last Puff" },
  "db22797e-d091-466c-9684-128d3f23dec1": { en: "Kokaya" },
  "7920a33a-ab56-49af-8a0b-1528186ae540": { en: "Anima" },
};

export function useItemDetail(): ItemDetailContextValue {
  const context = useContext(ItemDetailContext);
  if (!context) {
    return { openItemDetail: () => undefined };
  }
  return context;
}

export function localizeMenuText(text: LocalizedText, locale: Locale) {
  return cleanLocalizedMenuText(text[locale], locale);
}

export function localizeMenuItemName(item: MenuItem, locale: Locale) {
  return localizeMenuText(item.name, locale);
}

export function localizeMenuDescription(item: MenuItem, category: MenuCategory, locale: Locale) {
  const rawDescription = cleanDescriptionCopy(
    cleanLocalizedMenuText(item.description[locale], locale),
    locale,
  );
  return polishMenuDescription(rawDescription, item, category, locale);
}

function cleanLocalizedMenuText(value: string | undefined, locale: Locale) {
  if (!value) return "";

  const cleaned = value
    .replace(/\r\n/g, "\n")
    .replace(/\s*\d+:T[0-9A-Za-z]+,[\s\S]*$/g, "")
    .replace(/\s*[$0-9A-Za-z]+:T[0-9A-Za-z]*\s*$/g, "")
    .trim();

  if (!cleaned || /^\$?[0-9A-Fa-f]{1,8}$/.test(cleaned)) return "";
  if (locale === "ar") {
    const arabicOnly = formatVisibleText(
      cleaned
        .replace(/\s*\([^)]*[\p{Script=Latin}][^)]*\)/gu, "")
        .replace(/[\p{Script=Latin}][\p{Script=Latin}\p{Number}\s.'’&+-]*/gu, "")
        .replace(/\s{2,}/g, " ")
        .replace(/\s+([،.])/g, "$1")
        .trim(),
      locale,
    );

    return /[\u0600-\u06FF]/.test(arabicOnly) ? arabicOnly : "";
  }
  return /[A-Za-z]/.test(cleaned) ? cleaned : "";
}

function cleanDescriptionCopy(value: string, locale: Locale) {
  if (!value) return "";

  if (locale === "ar") {
    return formatVisibleText(
      value
        .replace(/[A-Za-z]+/g, "")
        .replace(/\s{2,}/g, " ")
        .trim(),
      locale,
    );
  }

  return value
    .replace(/[—_|]/g, ",")
    .replace(/::/g, ":")
    .replace(/…/g, ".")
    .replace(/\.{2,}/g, ".")
    .replace(/\s+/g, " ")
    .replace(/[\u0600-\u06FF]+/g, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function polishMenuDescription(
  value: string,
  item: MenuItem,
  category: MenuCategory,
  locale: Locale,
) {
  void item;
  void category;

  if (!value) return "";
  const normalized = formatVisibleText(value, locale)
    .replace(/[—_|]/g, locale === "ar" ? " " : ",")
    .replace(/…|\.{2,}/g, ".")
    .replace(/\s+/g, " ")
    .trim();

  if (!normalized) return "";

  return locale === "ar"
    ? normalized
        .replace(/\s+([،.؟!:؛])/g, "$1")
        .replace(/،\s*[،.]+/g, ".")
        .trim()
    : normalized
        .replace(/\s+,/g, ",")
        .replace(/,\s*,+/g, ",")
        .replace(/\s+\./g, ".")
        .trim();
}

function stripMenuFiller(value: string, locale: Locale) {
  let text = formatVisibleText(value.replace(/\s+/g, " ").trim(), locale);
  if (!text) return "";

  if (locale === "ar") {
    return formatVisibleText(
      text
        .replace(/ابدأ يومك[^.]*\./g, "")
        .replace(/هذه المائدة[^.]*\./g, "")
        .replace(/مستوحاة من[^.]*\./g, "")
        .replace(/بعناية فائقة/g, "")
        .replace(/بعناية/g, "")
        .replace(/مثالي(?:ة|ًا|ا)?/g, "متوازن")
        .replace(/نابضة بالحياة/g, "طازجة")
        .replace(/نابض بالحياة/g, "طازج")
        .replace(/نابضة بالحيوية/g, "منعشة")
        .replace(/نابض بالحيوية/g, "منعش")
        .replace(/مليء بالحيوية/g, "منعش")
        .replace(/مليئة بالحيوية/g, "منعشة")
        .replace(/لمسة ممتعة/g, "لمسة منعشة")
        .replace(/مصدر واحد/g, "منشأ واحد")
        .replace(/أفضل طعم/g, "طعم طازج")
        .replace(/تجربة إفطار كلاسيكية/g, "فطورًا كلاسيكيًا")
        .replace(/تجربة تحلية/g, "تحلية")
        .replace(/تجربة إفطار/g, "فطورًا")
        .replace(/تجربة غنية/g, "نكهة غنية")
        .replace(/تجربة شهية/g, "مائدة شهية")
        .replace(/للتجربة/g, "للنكهة")
        .replace(/لتجربة/g, "لنكهة")
        .replace(/مفعم(?:ة)?[^.،]*/g, "")
        .replace(/لا تُقاوم|لا تقاوم/g, "غنية")
        .replace(/في كل لقمة/g, "")
        .replace(/في كل قضمة/g, "")
        .replace(/بشكل طبيعي/g, "")
        .replace(/لإضفاء الإشراق/g, "")
        .replace(/مليء بالراحة/g, "دافئ")
        .replace(/مليئة بالنكهات الأصيلة/g, "غنية بالنكهات")
        .replace(/مليئة بالنكهات/g, "غنية بالنكهات")
        .replace(/مليء بالنكهات/g, "غني بالنكهات")
        .replace(/مليئة/g, "غنية")
        .replace(/مليء/g, "غني")
        .replace(/ضمان توازن مثالي/g, "توازن")
        .replace(/توازن متوازن/g, "توازن")
        .replace(/توازناً متوازن بين/g, "توازنًا بين")
        .replace(/توازن متوازن بين/g, "توازن بين")
        .replace(/نابضة/g, "طازجة")
        .replace(/نابض/g, "طازج")
        .replace(/حيوية/g, "طازجة")
        .replace(/مليئًا بالحياة|مليئة بالحياة/g, "منعش")
        .replace(/مُرضية|مُرضٍ|مرضية|مرضٍ|مُرضيًا|مرضياً/g, "غنية")
        .replace(/مشبوعة/g, "مشبعة")
        .replace(/مشبوع/g, "مشبع")
        .replace(/رائعة/g, "طبيعية")
        .replace(/فاخرة|فاخر/g, "غنية")
        .replace(/بإتقان/g, "")
        .replace(/بعمق/g, "")
        .replace(/بكل تفاصيلها/g, "")
        .replace(/يمنحك|يمنحكم/g, "يقدم")
        .replace(/تمنحك|تمنحكم/g, "تقدم")
        .replace(/يقدمم/g, "يقدّم")
        .replace(/ليمنحك|ليمنحكم/g, "ليقدم")
        .replace(/يرضي تطلعاتكم/g, "بطعم واضح")
        .replace(/الرضا التام/g, "نكهة واضحة")
        .replace(/لمسة ممتعة/g, "لمسة منعشة")
        .replace(/إحساسًا نظيفًا ومروّيًا/g, "نكهة حمضية باردة")
        .replace(/جرجير الطازج/g, "الجرجير الطازج")
        .replace(/الاصيلة/g, "الأصيلة")
        .replace(/طازج، طازج/g, "طازج")
        .replace(/طازجة، طازجة/g, "طازجة")
        .replace(/دافئ، ودافئ/g, "دافئ")
        .replace(/غنية، وغنية/g, "غنية")
        .replace(/غنية وغنية/g, "غنية")
        .replace(/سميت السمسم/g, "السميت بالسمسم")
        .replace(/سميد السمسم/g, "السميت بالسمسم")
        .replace(/تجربة/g, "نكهة")
        .replace(/رحلة/g, "مائدة")
        .replace(/لحظة/g, "لقمة")
        .replace(/الألوان/g, "المكونات")
        .replace(/ممتعة/g, "شهية")
        .replace(/ممتع/g, "غني")
        .replace(/طازجة وطازجة/g, "طازجة")
        .replace(/متوازنً بين/g, "متوازن بين")
        .replace(/الشرق الاوسط/g, "الشرق الأوسط")
        .replace(/\s+([،.])/g, "$1")
        .replace(/\s{2,}/g, " ")
        .trim(),
      locale,
    );
  }

  return text
    .replace(/Start your day not just with breakfast, but with[^.]*\./gi, "")
    .replace(/This special table from Asya's kitchen is designed to give you[^.]*\./gi, "")
    .replace(/^Inspired by[^.]*\./gi, "")
    .replace(/\b(carefully|perfectly|delicately|expertly|truly)\s+/gi, "")
    .replace(/\bfresh and vibrant\b/gi, "fresh")
    .replace(/\bA vibrant\b/g, "A fresh")
    .replace(/\bvibrant\b/gi, "fresh")
    .replace(/\bplayful\b/gi, "hearty")
    .replace(/the perfect balance of/gi, "a balanced mix of")
    .replace(/blended to perfection/gi, "blended with milk")
    .replace(/delightfully sweet/gi, "naturally sweet")
    .replace(/\b(irresistibly|beautifully|perfectly|deeply|luxuriously|delightfully)\s+/gi, "")
    .replace(/\bpremium\s+/gi, "")
    .replace(/\bceremonial grade\b/gi, "Japanese")
    .replace(/\bultra-refreshing\b/gi, "cold")
    .replace(/\bultra refreshing\b/gi, "cold")
    .replace(/\bindulgent\b/gi, "rich")
    .replace(/\bsatisfying\b/gi, "hearty")
    .replace(/\bcomforting\b/gi, "warm")
    .replace(/\bcomfortable\b/gi, "warm")
    .replace(/\bplayful\b/gi, "bright")
    .replace(/\bfull of life\b/gi, "fresh")
    .replace(/\bbursting with\b/gi, "with")
    .replace(/\bvibrant\b/gi, "fresh")
    .replace(/\benergizing\b/gi, "fresh")
    .replace(/\bideal for\b/gi, "served for")
    .replace(/\bgreat for\b/gi, "served with")
    .replace(/\blemonadei\b/gi, "lemonade")
    .replace(/\bfruit and balanced\b/gi, "fruity and balanced")
    .replace(/\bfresh freshness\b/gi, "freshness")
    .replace(/\bA indulgent\b/g, "A rich")
    .replace(/\bAn hearty\b/g, "A hearty")
    .replace(/\bwarm and warm\b/gi, "warm")
    .replace(/\bhearty and hearty\b/gi, "hearty")
    .replace(/\bmore rich\b/gi, "richer")
    .replace(/\bfresh and naturally fresh\b/gi, "fresh")
    .replace(/\brefreshing, fresh and refreshing\b/gi, "refreshing")
    .replace(/\bcrisp, fresh and refreshing\b/gi, "crisp and refreshing")
    .replace(/\bJapanese Japanese\b/gi, "Japanese")
    .replace(/\ba familiar, hearty sip\b/gi, "a cold sip")
    .replace(/\bsweet, hearty flavor\b/gi, "sweet orange flavor")
    .replace(/\brefreshing and bubbly dish\b/gi, "refreshing fizz")
    .replace(/\bcold, crisp and cooling dish\b/gi, "cold, crisp drink")
    .replace(/\bsmooth and hearty taste\b/gi, "smooth, naturally sweet taste")
    .replace(/\bwith energy\b/gi, "with natural sweetness")
    .replace(/\bin every bite\b/gi, "")
    .replace(/\bfull of character\b/gi, "well seasoned")
    .replace(/\bfull of comfort\b/gi, "warm")
    .replace(/\bnaturally vibrant\b/gi, "fresh")
    .replace(/\brefreshingly vibrant\b/gi, "fresh")
    .replace(/\bintensely flavorful\b/gi, "richly seasoned")
    .replace(/\bgill\b/gi, "garlic")
    .replace(/\bA fresh omelette filled with fresh\b/gi, "A vegetable omelette filled with")
    .replace(/single source/gi, "single-origin")
    .replace(/best flavor/gi, "fresh flavor")
    .replace(/\bcrafted\b/gi, "made")
    .replace(/\bdesigned\b/gi, "prepared")
    .replace(/dessert experience/gi, "dessert")
    .replace(/breakfast experience/gi, "breakfast")
    .replace(/flavor experience/gi, "flavor")
    .replace(/taste experience/gi, "flavor")
    .replace(/\bexperience\b/gi, "dish")
    .replace(/\bjourney\b/gi, "dish")
    .replace(/\bmoment\b/gi, "bite")
    .replace(/\sin every bite\b/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function fallbackMenuDescription(
  item: MenuItem,
  category: MenuCategory,
  locale: Locale,
  itemName: string,
  categoryName: string,
) {
  const englishName = item.name.en.toLowerCase();
  const englishCategory = category.name.en.toLowerCase();

  if (locale === "ar") {
    if (/shisha/i.test(englishCategory)) {
      return shishaDescription(itemName, locale);
    }
    if (/rice/i.test(englishName)) return "أرز أبيض مطهو بالبخار، يُقدّم ساخنًا بجانب المشويات والطواجن.";
    if (/bulgur/i.test(englishName)) return "برغل مطهو بصلصة طماطم خفيفة، يُقدّم دافئًا بجانب المشويات.";
    if (/beyti/i.test(englishName)) return "لحم مفروم متبل يُشوى على الفحم، يلف بخبز رقيق ويُقدّم مع صلصة الطماطم واللبن.";
    if (/katikli/i.test(englishName)) return "خبز هاتاي رقيق يُخبز مع معجون الفلفل والأعشاب، ويُقدّم ساخنًا.";
    if (/tandir/i.test(englishName)) return "خبز تندور تركي بقوام طري وأطراف خفيفة القرمشة، يُقدّم مع الفطور والمقبلات.";
    if (/sparkling water/i.test(englishName)) return "مياه فوارة باردة بفقاعات ناعمة، تُقدّم لإنعاش المذاق بين الأطباق.";
    if (/water/i.test(englishName)) return "مياه باردة تُقدّم مع الوجبة.";
    if (/coffee|espresso|latte|mocha|cortado|americano|cappuccino/i.test(englishCategory + englishName)) {
      return `${itemName} تُحضّر من القهوة والحليب أو الماء حسب الصنف، وتُقدّم بنكهة متوازنة.`;
    }
    if (/tea/i.test(englishCategory + englishName)) {
      return `${itemName} يُحضّر من أوراق الشاي ويُقدّم ساخنًا أو باردًا حسب الصنف.`;
    }
    if (/drink|juice|mojito|lemonade|ayran|soft|signature|garden|milkshake|matcha/i.test(englishCategory + englishName)) {
      return `${itemName} مشروب بارد بنكهة متوازنة، يُقدّم منعشًا مع الوجبة.`;
    }
    return `${itemName} من قسم ${categoryName}، يُحضّر في مطبخ أسيا ويُقدّم على المائدة.`;
  }

  if (/shisha/i.test(englishCategory)) {
    return shishaDescription(itemName, locale);
  }
  if (/rice/i.test(englishName)) return "Steamed white rice served hot as a side for grills and casseroles.";
  if (/bulgur/i.test(englishName)) return "Bulgur cooked with light tomato sauce and served warm beside the grills.";
  if (/beyti/i.test(englishName)) return "Seasoned minced meat grilled over charcoal, wrapped in thin bread, and served with tomato sauce and yogurt.";
  if (/katikli/i.test(englishName)) return "Thin Hatay bread baked with pepper paste and herbs, served hot from the oven.";
  if (/tandir/i.test(englishName)) return "Turkish tandoor bread with a soft center and lightly crisp edges, served with breakfast and meze.";
  if (/sparkling water/i.test(englishName)) return "Chilled sparkling water with fine bubbles, served to refresh the palate between dishes.";
  if (/water/i.test(englishName)) return "Chilled water served with the meal.";
  if (/coffee|espresso|latte|mocha|cortado|americano|cappuccino/i.test(englishCategory + englishName)) {
    return `${itemName} prepared with coffee and milk or water, served with a balanced flavor.`;
  }
  if (/tea/i.test(englishCategory + englishName)) {
    return `${itemName} brewed with tea leaves and served hot or chilled according to the recipe.`;
  }
  if (/drink|juice|mojito|lemonade|ayran|soft|signature|garden|milkshake|matcha/i.test(englishCategory + englishName)) {
    return `${itemName} served chilled with a balanced, refreshing flavor.`;
  }
  return `${itemName} from the ${categoryName} selection, prepared in Asya's kitchen and served at the table.`;
}

function shishaDescription(itemName: string, locale: Locale) {
  const label = itemName.toLowerCase();

  if (locale === "ar") {
    if (/تفاحتين|التفاحتين/.test(itemName)) return `${itemName} بنكهة التفاح واليانسون، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/عنب/.test(itemName) && /نعناع/.test(itemName)) return `${itemName} يمزج حلاوة العنب مع برودة النعناع، ويُقدّم بدخان ناعم.`;
    if (/عنب/.test(itemName) && /توت/.test(itemName)) return `${itemName} بنكهة العنب والتوت، يُحضّر للطلب ويُقدّم على الطاولة.`;
    if (/عنب/.test(itemName)) return `${itemName} بنكهة عنب واضحة، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/ليمون/.test(itemName) && /نعناع/.test(itemName)) return `${itemName} بنكهة ليمون ونعناع باردة، يُحضّر للطلب ويُقدّم على الطاولة.`;
    if (/برتقال/.test(itemName) && /نعناع/.test(itemName)) return `${itemName} بنكهة برتقال ونعناع، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/علكة/.test(itemName) && /قرفة/.test(itemName)) return `${itemName} يجمع نكهة العلكة مع دفء القرفة، ويُحضّر للطلب.`;
    if (/علكة/.test(itemName) && /نعناع/.test(itemName)) return `${itemName} بنكهة العلكة والنعناع، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/علكة/.test(itemName)) return `${itemName} بنكهة العلكة الناعمة، يُحضّر للطلب ويُقدّم على الطاولة.`;
    if (/نعناع/.test(itemName)) return `${itemName} بنكهة نعناع باردة، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/توت|روبي|بلو|الأزرق/.test(itemName)) return `${itemName} بنكهة توت واضحة، يُحضّر للطلب ويُقدّم على الطاولة.`;
    if (/بطيخ/.test(itemName)) return `${itemName} بنكهة بطيخ خفيفة، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/خوخ/.test(itemName)) return `${itemName} بنكهة خوخ ناعمة، يُحضّر للطلب ويُقدّم على الطاولة.`;
    if (/مستكة/.test(itemName)) return `${itemName} بنكهة مستكة عطرية، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
    if (/دبي|ماربيا|هاتريك|لاست|كوكايا|أنيما|نول|باي/.test(itemName)) return `${itemName} خلطة خاصة من تشارمينج، تُحضّر للطلب وتُقدّم بدخان ناعم.`;
    return `${itemName} بنكهة مختارة، يُحضّر للطلب ويُقدّم بدخان ناعم.`;
  }

  if (/double apple/.test(label)) return `${itemName} shisha with apple and anise notes, prepared to order with a smooth draw.`;
  if (/grape mint/.test(label)) return `${itemName} shisha pairs sweet grape with cooling mint, prepared to order.`;
  if (/grape berry/.test(label)) return `${itemName} shisha blends grape and berry notes, prepared to order and served at the table.`;
  if (/grape/.test(label)) return `${itemName} shisha with a clear grape flavor, prepared to order with a smooth draw.`;
  if (/lemon mint/.test(label)) return `${itemName} shisha with lemon and mint notes, prepared to order and served at the table.`;
  if (/orange mint/.test(label)) return `${itemName} shisha pairs orange with mint, prepared to order with a smooth draw.`;
  if (/gum cinnamon/.test(label)) return `${itemName} shisha blends soft gum flavor with warm cinnamon, prepared to order.`;
  if (/gum mint/.test(label)) return `${itemName} shisha pairs gum flavor with mint, prepared to order with a smooth draw.`;
  if (/gum/.test(label)) return `${itemName} shisha with a soft gum flavor, prepared to order and served at the table.`;
  if (/mint/.test(label)) return `${itemName} shisha with a cooling mint flavor, prepared to order with a smooth draw.`;
  if (/blueberry|berry|ruby/.test(label)) return `${itemName} shisha with berry notes, prepared to order and served at the table.`;
  if (/watermelon/.test(label)) return `${itemName} shisha with a light watermelon flavor, prepared to order with a smooth draw.`;
  if (/peach/.test(label)) return `${itemName} shisha with a soft peach flavor, prepared to order and served at the table.`;
  if (/mastic/.test(label)) return `${itemName} shisha with aromatic mastic notes, prepared to order with a smooth draw.`;
  if (/dubai|marbella|hattrick|last puff|kokaya|anima|nol gradus|charming/.test(label)) {
    return `${itemName} is a Charming house blend, prepared to order and served with a smooth draw.`;
  }
  return `${itemName} shisha with a selected flavor, prepared to order with a smooth draw.`;
}

function finalizeMenuDescription(value: string, locale: Locale) {
  if (!value) return "";

  const normalized = formatVisibleText(value, locale)
    .replace(/[—_|]/g, locale === "ar" ? " " : ",")
    .replace(/…|\.{2,}/g, locale === "ar" ? "،" : ".")
    .replace(/\s+/g, " ")
    .trim();

  if (locale === "ar") {
    return normalized
      .replace(/يمنحك|يمنحكم/g, "يقدم")
      .replace(/ليمنحك|ليمنحكم/g, "ليقدم")
      .replace(/مُرضية|مُرضٍ|مرضية|مرضٍ|مُرضيًا|مرضياً/g, "غنية")
      .replace(/مشبوعة/g, "مشبعة")
      .replace(/مشبوع/g, "مشبع")
      .replace(/توازناً متوازن بين/g, "توازنًا بين")
      .replace(/توازن متوازن بين/g, "توازن بين")
      .replace(/غنية غنية/g, "غنية")
      .replace(/غنية، وغنية/g, "غنية")
      .replace(/طازج، طازج/g, "طازج")
      .replace(/طازجة، طازجة/g, "طازجة")
      .replace(/انتعاش غني بالخضار/g, "انتعاش طبيعي")
      .replace(/نكهة مُدلّلة/g, "نكهة كريمية")
      .replace(/تجربة مُدلّلة/g, "نكهة كريمية")
      .replace(/لا يُقاوَم|لا تُقاوَم|لا يقاوم|لا تُقاوم/g, "غني")
      .replace(/فاخرة|فاخر/g, "غنية")
      .replace(/رائعة/g, "طبيعية")
      .replace(/بإتقان|بعمق|بشكل طبيعي|بكل تفاصيلها/g, "")
      .replace(/حيوية/g, "طازجة")
      .replace(/مليئًا بالحياة|مليئة بالحياة/g, "منعش")
      .replace(/إحساسًا نظيفًا ومروّيًا/g, "نكهة حمضية باردة")
      .replace(/جرجير الطازج/g, "الجرجير الطازج")
      .replace(/الاصيلة/g, "الأصيلة")
      .replace(/نظيفة،/g, "")
      .replace(/\s+([،.؟!:؛])/g, "$1")
      .replace(/،\s*[،.]+/g, ".")
      .replace(/\s{2,}/g, " ")
      .trim();
  }

  return normalized
    .replace(/\b(best|perfect|unforgettable)\b/gi, "")
    .replace(/\b(irresistibly|beautifully|perfectly|deeply|luxuriously|delightfully)\s+/gi, "")
    .replace(/\bpremium\s+/gi, "")
    .replace(/\bindulgent\b/gi, "rich")
    .replace(/\bsatisfying\b/gi, "hearty")
    .replace(/\bcomforting|comfortable\b/gi, "warm")
    .replace(/\bplayful\b/gi, "bright")
    .replace(/\bvibrant\b/gi, "fresh")
    .replace(/\bbursting with\b/gi, "with")
    .replace(/\bultra-refreshing|ultra refreshing\b/gi, "cold")
    .replace(/\benergizing\b/gi, "fresh")
    .replace(/\blemonadei\b/gi, "lemonade")
    .replace(/\bfruit and balanced\b/gi, "fruity and balanced")
    .replace(/\bfresh freshness\b/gi, "freshness")
    .replace(/\bA indulgent\b/g, "A rich")
    .replace(/\bAn hearty\b/g, "A hearty")
    .replace(/\s+,/g, ",")
    .replace(/,\s*,+/g, ",")
    .replace(/\s+\./g, ".")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function ending(locale: Locale, value: string) {
  return /[.!؟]$/.test(value) ? "" : locale === "ar" ? "." : ".";
}

export function compactOfficialDescription(value: string, locale: Locale) {
  if (!value) return "";

  const limit = locale === "ar" ? 170 : 185;
  const normalized = formatVisibleText(value, locale)
    .replace(/[—_|]/g, locale === "ar" ? " " : ",")
    .replace(/…|\.{2,}/g, ".")
    .replace(/\s+/g, " ")
    .trim();

  return clipDescription(normalized, locale, limit);
}

function clipDescription(value: string, locale: Locale, limit: number) {
  const normalized = formatVisibleText(value, locale).replace(/\.{2,}/g, ".").replace(/\s+/g, " ").trim();
  if (!normalized) return "";
  if (normalized.length <= limit) return normalized.replace(/[،,;:]$/g, "") + ending(locale, normalized);

  const firstSentence = normalized.match(/^.*?[.!؟](?:\s|$)/u)?.[0]?.trim();
  if (firstSentence && firstSentence.length <= limit) {
    return firstSentence.replace(/[،,;:]$/g, "") + ending(locale, firstSentence);
  }

  const clauses = normalized.split(/(?<=[،,;])\s+/u);
  let excerpt = "";
  for (const clause of clauses) {
    const next = `${excerpt}${excerpt ? " " : ""}${clause}`.trim();
    if (next.length > limit) break;
    excerpt = next;
  }

  if (!excerpt || excerpt.length < (locale === "ar" ? 60 : 70)) {
    const clipped = normalized.slice(0, limit);
    const lastSpace = clipped.lastIndexOf(" ");
    excerpt = (lastSpace > 70 ? clipped.slice(0, lastSpace) : clipped).trim();
  }

  const tidy = tidyExcerptEnd(excerpt, locale).replace(/[،,;:.]$/g, "").trim();
  return tidy + ending(locale, tidy);
}

function tidyExcerptEnd(value: string, locale: Locale) {
  if (locale === "ar") {
    return value
      .replace(/\s*\([^)]*[\p{Script=Latin}][^)]*\)/gu, "")
      .replace(/\s+(بينما|حيث|مما|والتي|والذي|التي|الذي|مع|ثم|كما|لإضافة|لإضفاء|لتقديم|لنكهة|ليمنحك|ليمنحكم|على الجانب)$/u, "")
      .replace(/\s+و$/u, "")
      .trim();
  }

  return value
    .replace(/\s+(while|where|with|and|then|that|which|for|to|served|finished)$/iu, "")
    .trim();
}

function localizeOptionName(name: string, locale: Locale) {
  const labels: Record<string, LocalizedText> = {
    small: { ar: "صغير", en: "Small" },
    medium: { ar: "وسط", en: "Medium" },
    big: { ar: "كبير", en: "Big" },
  };

  return formatVisibleText(labels[name.trim().toLowerCase()]?.[locale] ?? name, locale);
}

export function AsyaShell({ children, current }: AsyaShellProps) {
  const [locale, setLocale] = useState<Locale>("ar");
  const [detailSelection, setDetailSelection] = useState<ItemDetailSelection | null>(null);
  useScrollChromeVisibility();

  useEffect(() => {
    const storedLocale = readStoredLocale();
    if (storedLocale) setLocale(storedLocale);
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (nextLocale: Locale) => {
        setLocale(nextLocale);
        writeStoredLocale(nextLocale);
      },
      t: (key: UIKey) => formatVisibleText(UI[key][locale], locale),
      tx: (obj: Record<Locale, string>) => formatVisibleText(obj[locale], locale),
      dir: "ltr" as const,
    }),
    [locale],
  );
  const openItemDetail = useCallback(
    (selection: ItemDetailSelection) => setDetailSelection(selection),
    [],
  );
  const detailValue = useMemo(() => ({ openItemDetail }), [openItemDetail]);
  const closeItemDetail = useCallback(() => setDetailSelection(null), []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = "ltr";
  }, [locale]);

  return (
    <I18nContext.Provider value={value}>
      <ItemDetailContext.Provider value={detailValue}>
        <div data-locale={locale} className="asya-site site-shell">
          <TopNav current={current} />
          {children}
          <Footer />
          <FloatingContact current={current} />
          <MobileBottomNav current={current} />
          <AnimatePresence>
            {detailSelection ? (
              <ItemDetailView
                key={detailSelection.item.id}
                selection={detailSelection}
                current={current}
                onClose={closeItemDetail}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </ItemDetailContext.Provider>
    </I18nContext.Provider>
  );
}

function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;

  const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
  return storedLocale === "ar" || storedLocale === "en" ? storedLocale : null;
}

function writeStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

function useScrollChromeVisibility() {
  useEffect(() => {
    const hiddenClass = "asya-scroll-chrome-hidden";
    const topClass = "asya-scroll-at-top";
    const minDelta = 0.5;
    const hideAfter = 120;
    const hideIntent = 14;
    const desktopShowIntent = -10;
    const mobileShowIntent = -18;
    const topThreshold = 12;
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    let isMobile = mobileQuery.matches;
    let previousY = Math.max(0, window.scrollY);
    let scrollIntent = 0;
    let frame = 0;
    let isHidden = document.body.classList.contains(hiddenClass);
    let isAtTopState = document.body.classList.contains(topClass);

    const setHidden = (hidden: boolean) => {
      if (isHidden === hidden) return;
      isHidden = hidden;
      document.body.classList.toggle(hiddenClass, hidden);
    };

    const setAtTop = (isAtTop: boolean) => {
      if (isAtTopState === isAtTop) return;
      isAtTopState = isAtTop;
      document.body.classList.toggle(topClass, isAtTop);
    };

    const update = () => {
      frame = 0;
      const currentY = Math.max(0, window.scrollY);
      const delta = currentY - previousY;
      const isAtTop = currentY <= topThreshold;

      setAtTop(isAtTop);

      if (isAtTop) {
        scrollIntent = 0;
        setHidden(false);
      } else if (delta > minDelta) {
        scrollIntent = scrollIntent < 0 ? delta : scrollIntent + delta;
        if (currentY > hideAfter && scrollIntent > hideIntent) {
          setHidden(true);
        }
      } else if (delta < -minDelta) {
        const showIntent = isMobile ? mobileShowIntent : desktopShowIntent;
        scrollIntent = scrollIntent > 0 ? delta : scrollIntent + delta;
        if (scrollIntent < showIntent) {
          setHidden(false);
        }
      }

      previousY = currentY;
    };

    const scheduleUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    const handleMediaChange = (event: MediaQueryListEvent) => {
      isMobile = event.matches;
    };

    update();
    mobileQuery.addEventListener("change", handleMediaChange);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("pageshow", scheduleUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      document.body.classList.remove(hiddenClass, topClass);
      mobileQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("pageshow", scheduleUpdate);
    };
  }, []);
}

export function AsyaIntroOverlay() {
  const [hasPlayedIntroInThisPageLoad, setHasPlayedIntroInThisPageLoad] = useState(false);

  const handleComplete = useCallback(() => {
    setHasPlayedIntroInThisPageLoad(true);
  }, []);

  if (hasPlayedIntroInThisPageLoad) return null;

  return (
    <>
      <MobileIntroOverlay onComplete={handleComplete} />
      <DesktopIntroOverlay onComplete={handleComplete} />
    </>
  );
}

function DesktopIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [lockPage, setLockPage] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    if (!media.matches) {
      setShouldRender(false);
      return;
    }

    setLockPage(true);
    const video = videoRef.current;
    video?.load();
    video?.play().catch(() => undefined);

    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!lockPage || !shouldRender) return;

    const preventDefault = (event: Event) => event.preventDefault();
    const preventScrollKeys = (event: KeyboardEvent) => {
      if ([" ", "ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(event.key)) {
        event.preventDefault();
      }
    };
    document.documentElement.classList.add("asya-desktop-intro-lock");
    document.body.classList.add("asya-desktop-intro-lock");
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("keydown", preventScrollKeys);

    return () => {
      document.documentElement.classList.remove("asya-desktop-intro-lock");
      document.body.classList.remove("asya-desktop-intro-lock");
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("keydown", preventScrollKeys);
    };
  }, [lockPage, shouldRender]);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
      onComplete();
    }, 500);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`desktop-intro-overlay ${isReady ? "is-ready" : ""} ${isFading ? "is-fading" : ""}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="desktop-intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => videoRef.current?.play().catch(() => undefined)}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src={desktopIntroVideo} type="video/mp4" media="(min-width: 768px)" />
      </video>
    </div>
  );
}

function MobileIntroOverlay({ onComplete }: { onComplete: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadeTimerRef = useRef<number | null>(null);
  const finishedRef = useRef(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [lockPage, setLockPage] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    if (!media.matches) {
      setShouldRender(false);
      return;
    }

    setLockPage(true);
    const video = videoRef.current;
    video?.load();
    video?.play().catch(() => undefined);

    return () => {
      if (fadeTimerRef.current) window.clearTimeout(fadeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (!lockPage || !shouldRender) return;

    const preventDefault = (event: Event) => event.preventDefault();
    document.documentElement.classList.add("asya-mobile-intro-lock");
    document.body.classList.add("asya-mobile-intro-lock");
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("wheel", preventDefault, { passive: false });

    return () => {
      document.documentElement.classList.remove("asya-mobile-intro-lock");
      document.body.classList.remove("asya-mobile-intro-lock");
      window.removeEventListener("touchmove", preventDefault);
      window.removeEventListener("wheel", preventDefault);
    };
  }, [lockPage, shouldRender]);

  const finishIntro = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setIsFading(true);
    fadeTimerRef.current = window.setTimeout(() => {
      setShouldRender(false);
      setLockPage(false);
      onComplete();
    }, 500);
  }, [onComplete]);

  if (!shouldRender) return null;

  return (
    <div
      className={`mobile-intro-overlay ${isReady ? "is-ready" : ""} ${isFading ? "is-fading" : ""}`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        className="mobile-intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => videoRef.current?.play().catch(() => undefined)}
        onEnded={finishIntro}
        onError={finishIntro}
      >
        <source src={mobileIntroVideo} type="video/mp4" media="(max-width: 767px)" />
      </video>
    </div>
  );
}

function TopNav({ current }: { current: "home" | "menu" }) {
  const { locale, setLocale, t, tx } = useI18n();

  return (
    <header className="site-nav site-nav-solid">
      <div className="site-nav-shell">
        <a
          href={current === "home" ? "#top" : "/"}
          className="nav-brand"
          aria-label="Asya's Gourmet"
        >
          <span className="nav-logo-frame">
            <img src={logoImg} alt="Asya's Gourmet" width={42} height={42} />
          </span>
          <span className="nav-brand-copy">
            <strong>{tx(RESTAURANT.name)}</strong>
            <small>{tx(RESTAURANT.kicker)}</small>
          </span>
        </a>

        <nav
          className="nav-links"
          aria-label="Primary navigation"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <a className={current === "home" ? "is-current" : ""} href="/">
            <Home className="nav-icon" />
            <span>{t("nav_home")}</span>
          </a>
          <a className={current === "menu" ? "is-current" : ""} href="/menu">
            <Utensils className="nav-icon" />
            <span>{t("nav_menu")}</span>
          </a>
          <a href="/#about">
            <span>{t("nav_about")}</span>
          </a>
          <a href="/#visit">
            <span>{t("nav_visit")}</span>
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="nav-icon" />
            <span>{t("nav_contact")}</span>
          </a>
        </nav>

        <div className="nav-actions">
          <a
            className={current === "menu" ? "mobile-menu-button is-current" : "mobile-menu-button"}
            href="/menu"
          >
            <Utensils className="h-4 w-4" />
            <span>{t("nav_menu")}</span>
          </a>
          <button
            type="button"
            onClick={() => setLocale(locale === "ar" ? "en" : "ar")}
            className="language-button"
            aria-label={locale === "ar" ? "تغيير اللغة" : "Change language"}
          >
            <Languages className="h-4 w-4" />
            <span>{locale === "ar" ? "اللغة" : "Language"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export const SectionIntro = memo(function SectionIntro({
  eyebrow,
  title,
  body,
  icon,
  tone = "dark",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  icon?: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <motion.div className={`section-intro section-intro-${tone}`} variants={fadeUp}>
      <p className="section-kicker">
        {icon}
        <span>{eyebrow}</span>
      </p>
      <h2>{title}</h2>
      {body ? <p className="section-copy">{body}</p> : null}
    </motion.div>
  );
});

export const DishImage = memo(function DishImage({
  item,
  alt,
  eager = false,
  className = "",
}: {
  item: MenuItem;
  alt: string;
  eager?: boolean;
  className?: string;
}) {
  const { locale } = useI18n();
  const shellRef = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const sourceSrc = getDishImage(item);
  const [src, setSrc] = useState(sourceSrc);
  const isPlaceholder = src === placeholderImg;
  const placeholderText = locale === "ar" ? "من مطبخ أسيا" : "From Asya's Kitchen";

  useEffect(() => {
    setSrc(sourceSrc);
  }, [sourceSrc]);

  useEffect(() => {
    const image = imageRef.current;
    const shell = shellRef.current;
    if (!shell) return;

    if (isPlaceholder || (image?.complete && image.naturalWidth > 0)) {
      shell.dataset.loaded = "true";
    } else {
      delete shell.dataset.loaded;
    }
  }, [src]);

  const markLoaded = useCallback(() => {
    if (shellRef.current) shellRef.current.dataset.loaded = "true";
  }, []);

  const handleImageError = useCallback(() => {
    setSrc(placeholderImg);
    markLoaded();
  }, [markLoaded]);

  return (
    <span
      ref={shellRef}
      className={`dish-image-shell ${isPlaceholder ? "is-placeholder" : ""} ${className}`}
      data-loaded={isPlaceholder ? "true" : undefined}
    >
      {!isPlaceholder ? <span className="image-skeleton" aria-hidden="true" /> : null}
      {isPlaceholder ? (
        <span className="placeholder-mark" aria-hidden="true">
          <img src={logoImg} alt="" width={78} height={78} />
          <small>{placeholderText}</small>
        </span>
      ) : null}
      <img
        ref={imageRef}
        src={src}
        alt={isPlaceholder ? "" : alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        width={640}
        height={640}
        sizes={
          eager
            ? "(max-width: 767px) 100vw, 42vw"
            : "(max-width: 767px) 7rem, (max-width: 1120px) 33vw, 24vw"
        }
        onLoad={markLoaded}
        onError={handleImageError}
      />
    </span>
  );
});

interface MenuCardProps {
  item: MenuItem;
  category: MenuCategory;
  variant?: "menu" | "feature" | "wide";
  motionEnabled?: boolean;
}

export const MenuCard = memo(function MenuCard({
  item,
  category,
  variant = "menu",
  motionEnabled = true,
}: MenuCardProps) {
  const { locale } = useI18n();
  const { openItemDetail } = useItemDetail();
  const itemName = localizeMenuItemName(item, locale);
  const categoryName = localizeMenuText(category.name, locale);
  const description = compactOfficialDescription(
    localizeMenuDescription(item, category, locale),
    locale,
  );
  const className = `menu-card menu-card-${variant}`;
  const handleOpen = useCallback(
    () => openItemDetail({ item, category }),
    [category, item, openItemDetail],
  );
  const handleKeyDown = useCallback(
    (event: ReactKeyboardEvent<HTMLElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        handleOpen();
      }
    },
    [handleOpen],
  );
  const content = (
    <>
      <DishImage item={item} alt={itemName} className="menu-card-image" />
      <div className="menu-card-copy">
        <div className="menu-card-meta">
          <span>{categoryName}</span>
          <PriceTag item={item} />
        </div>
        <h3>{itemName}</h3>
        {description ? <p>{description}</p> : null}
        {item.options?.length ? <MenuOptions item={item} /> : null}
        <span className="menu-card-more" aria-hidden="true">
          {locale === "ar" ? "عرض الطبق" : "View Dish"}
        </span>
      </div>
    </>
  );

  if (!motionEnabled) {
    return (
      <article
        role="button"
        tabIndex={0}
        className={className}
        aria-label={itemName}
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
      >
        {content}
      </article>
    );
  }

  return (
    <motion.article
      role="button"
      tabIndex={0}
      className={className}
      aria-label={itemName}
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      variants={fadeUp}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {content}
    </motion.article>
  );
});

function formatOfficialFact(value: string | undefined, kind: "prep" | "calories" | "weight", locale: Locale) {
  const trimmed = value?.trim();
  if (!trimmed) return "";

  if (kind === "prep") return locale === "ar" ? `${trimmed} دقيقة` : `${trimmed} min`;
  if (kind === "calories") return locale === "ar" ? `${trimmed} سعرة` : `${trimmed} kcal`;
  return locale === "ar" ? `${trimmed} جم` : `${trimmed} g`;
}

function localizeTagLabel(tag: MenuTag, locale: Locale) {
  return cleanLocalizedMenuText(tag.label[locale], locale);
}

function ItemDetailTagSection({
  title,
  tags,
  locale,
  tone,
}: {
  title: string;
  tags: MenuTag[];
  locale: Locale;
  tone: "allergen" | "dietary";
}) {
  const labels = tags.map((tag) => localizeTagLabel(tag, locale)).filter(Boolean);
  if (!labels.length) return null;

  return (
    <section className={`item-detail-tag-section item-detail-tag-section-${tone}`}>
      <h3>{title}</h3>
      <div className="item-detail-tag-list" dir={locale === "ar" ? "rtl" : "ltr"}>
        {labels.map((label) => (
          <span className="item-detail-tag" key={label}>
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}

function ItemDetailView({
  selection,
  current,
  onClose,
}: {
  selection: ItemDetailSelection | null;
  current: "home" | "menu";
  onClose: () => void;
}) {
  const { locale } = useI18n();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const previousScrollYRef = useRef(0);
  const isMobileSheet = useMediaQuery("(max-width: 767px)");
  const prefersReducedMotion = useReducedMotion();
  const { openItemDetail } = useItemDetail();
  const item = selection?.item;
  const category = selection?.category;
  const labels = {
    close: locale === "ar" ? "إغلاق" : "Close",
    back: locale === "ar" ? "العودة إلى المنيو" : "Back to Menu",
    category: locale === "ar" ? "القسم" : "Category",
    options: locale === "ar" ? "الاختيارات" : "Choices",
    description: locale === "ar" ? "المكونات والطريقة" : "Ingredients and Preparation",
    imageComing: locale === "ar" ? "من مطبخ أسيا" : "From Asya's Kitchen",
    quickFacts: locale === "ar" ? "معلومات سريعة" : "Quick Facts",
    prepTime: locale === "ar" ? "وقت التحضير" : "Prep Time",
    calories: locale === "ar" ? "السعرات" : "Calories",
    weight: locale === "ar" ? "الوزن" : "Weight",
    allergens: locale === "ar" ? "الحساسية" : "Allergens",
    dietary: locale === "ar" ? "تصنيفات غذائية" : "Dietary Labels",
    recommendedWith: locale === "ar" ? "يناسب مع" : "Recommended With",
  };

  useEffect(() => {
    if (!selection) return;

    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    previousScrollYRef.current = window.scrollY;
    document.documentElement.classList.add("asya-item-detail-lock");
    document.body.classList.add("asya-item-detail-lock");
    closeButtonRef.current?.focus({ preventScroll: true });
    window.setTimeout(() => closeButtonRef.current?.focus({ preventScroll: true }), 40);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;

      const focusable = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => !element.hasAttribute("disabled") && element.offsetParent !== null);

      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.classList.remove("asya-item-detail-lock");
      document.body.classList.remove("asya-item-detail-lock");
      window.removeEventListener("keydown", handleKeyDown);
      previousFocusRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: previousScrollYRef.current, behavior: "auto" });
    };
  }, [selection, onClose]);

  if (!item || !category) return null;

  const imageSrc = getDishImage(item);
  const isPlaceholder = imageSrc === placeholderImg;
  const itemName = localizeMenuItemName(item, locale);
  const categoryName = localizeMenuText(category.name, locale);
  const description = localizeMenuDescription(item, category, locale);
  const quickFacts = [
    { label: labels.prepTime, value: formatOfficialFact(item.prepTime, "prep", locale) },
    { label: labels.calories, value: formatOfficialFact(item.calories, "calories", locale) },
    { label: labels.weight, value: formatOfficialFact(item.weight, "weight", locale) },
  ].filter((fact) => fact.value);
  const recommendationEntries = (item.recommendations ?? [])
    .map((recommendation) => {
      const recommendedItem = MENU_ITEM_BY_ID.get(recommendation.itemId);
      const recommendedCategory = recommendedItem
        ? MENU_CATEGORY_BY_ID.get(recommendedItem.category)
        : undefined;
      const reason = recommendation.reason
        ? cleanLocalizedMenuText(recommendation.reason[locale], locale)
        : "";

      return recommendedItem && recommendedCategory && recommendedItem.id !== item.id
        ? { item: recommendedItem, category: recommendedCategory, reason }
        : null;
    })
    .filter(Boolean) as Array<{ item: MenuItem; category: MenuCategory; reason: string }>;
  const dialogMotion = prefersReducedMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.16, ease: "easeOut" },
      }
    : isMobileSheet
      ? {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 12 },
          transition: { duration: 0.18, ease: softEase },
        }
      : {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 8 },
          transition: { duration: 0.18, ease: softEase },
        };

  return (
    <motion.div
      className="item-detail-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      role="presentation"
      onPointerDown={(event) => {
        if (typeof window === "undefined") return;
        if (
          window.matchMedia("(min-width: 1024px)").matches &&
          event.target === event.currentTarget
        )
          onClose();
      }}
    >
      <motion.div
        ref={dialogRef}
        className="item-detail-dialog"
        role="dialog"
        aria-modal="true"
        aria-label={itemName}
        dir="ltr"
        {...dialogMotion}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="item-detail-close"
          onClick={onClose}
          aria-label={labels.close}
        >
          <X className="h-5 w-5" />
        </button>

        <div
          className={`item-detail-media mobile-item-detail-media ${isPlaceholder ? "is-placeholder" : ""}`}
        >
          {isPlaceholder ? (
            <span className="item-detail-placeholder" aria-hidden="true">
              <img src={logoImg} alt="" width={92} height={92} />
              <small>{labels.imageComing}</small>
            </span>
          ) : null}
          <img
            className="mobile-item-detail-image"
            src={imageSrc}
            alt={isPlaceholder ? "" : itemName}
            width={920}
            height={920}
            loading="lazy"
            decoding="async"
            onError={(event) => {
              event.currentTarget.src = placeholderImg;
            }}
          />
        </div>

        <div className="item-detail-copy mobile-item-detail-content">
          <div className="item-detail-meta">
            <span>
              {labels.category}: {categoryName}
            </span>
            <PriceTag item={item} />
          </div>
          <h2>{itemName}</h2>
          <span className="item-detail-divider" aria-hidden="true" />
          <div className="item-detail-scroll">
            {description ? (
              <div className="item-detail-description">
                <strong>{labels.description}</strong>
                <p>{description}</p>
              </div>
            ) : null}
            {item.options?.length ? (
              <div className="item-detail-options">
                <strong>{labels.options}</strong>
                <MenuOptions item={item} />
              </div>
            ) : null}
            {quickFacts.length ? (
              <section className="item-detail-facts" aria-label={labels.quickFacts}>
                <h3>{labels.quickFacts}</h3>
                <div className="item-detail-fact-grid">
                  {quickFacts.map((fact) => (
                    <span className="item-detail-fact" key={fact.label}>
                      <small>{fact.label}</small>
                      <strong>{fact.value}</strong>
                    </span>
                  ))}
                </div>
              </section>
            ) : null}
            {item.allergens?.length ? (
              <ItemDetailTagSection
                title={labels.allergens}
                tags={item.allergens}
                locale={locale}
                tone="allergen"
              />
            ) : null}
            {item.dietaryLabels?.length ? (
              <ItemDetailTagSection
                title={labels.dietary}
                tags={item.dietaryLabels}
                locale={locale}
                tone="dietary"
              />
            ) : null}
            {recommendationEntries.length ? (
              <section className="item-detail-recommendations">
                <h3>{labels.recommendedWith}</h3>
                <div className="item-recommendation-grid">
                  {recommendationEntries.map((recommendation) => {
                    const recommendedName = localizeMenuItemName(recommendation.item, locale);

                    return (
                      <button
                        className="item-recommendation-card"
                        key={recommendation.item.id}
                        type="button"
                        onClick={() =>
                          openItemDetail({
                            item: recommendation.item,
                            category: recommendation.category,
                          })
                        }
                      >
                        <DishImage
                          item={recommendation.item}
                          alt={recommendedName}
                          className="item-recommendation-image"
                        />
                        <span className="item-recommendation-copy">
                          <strong>{recommendedName}</strong>
                          <PriceTag item={recommendation.item} />
                          {recommendation.reason ? <small>{recommendation.reason}</small> : null}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ) : null}
          </div>
          {current === "menu" ? (
            <button type="button" className="item-detail-back" onClick={onClose}>
              {labels.back}
            </button>
          ) : (
            <a href="/menu" className="item-detail-back" onClick={onClose}>
              {labels.back}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export const PriceTag = memo(function PriceTag({ item }: { item: MenuItem }) {
  const { locale, tx } = useI18n();
  const price = formatPrice(item.price, locale);

  return (
    <span className="price-tag">
      <strong>{price}</strong>
      {!/[A-Za-z\u0600-\u06FF]/.test(price) ? <small>{tx(RESTAURANT.currency)}</small> : null}
    </span>
  );
});

const MenuOptions = memo(function MenuOptions({ item }: { item: MenuItem }) {
  const { locale } = useI18n();
  const itemName = localizeMenuItemName(item, locale);

  return (
    <div
      className="menu-options"
      aria-label={`${itemName} ${locale === "ar" ? "اختيارات" : "choices"}`}
    >
      {item.options?.map((option) => (
        <span key={`${item.id}-${option.name}-${option.price}`}>
          <strong>{localizeOptionName(option.name, locale)}</strong>
          <em>{formatPrice(option.price, locale)}</em>
        </span>
      ))}
    </div>
  );
});

export const CategoryGlyph = memo(function CategoryGlyph({ category }: { category: MenuCategory }) {
  const label = `${category.id} ${category.name.en}`.toLowerCase();
  const Icon = /coffee/.test(label)
    ? Coffee
    : /tea|drink|juice|beverage|lemonade|matcha/.test(label)
      ? CupSoda
      : /dessert|sweet|baklava|cake|kunafa|rice pudding/.test(label)
        ? CakeSlice
        : /soup/.test(label)
          ? Soup
          : /grill|casserole|kebab|meat|chicken|beef|lamb/.test(label)
            ? Flame
            : /salad|garden|greens|olive|friends/.test(label)
              ? Leaf
              : /bread|bakery|pastry|pide|borek|simit|lahmacun|pie|pizza|gozleme/.test(label)
                ? Wheat
                : /signature|chef/.test(label)
                  ? ChefHat
                  : Utensils;

  return <Icon className="h-4 w-4" aria-hidden="true" />;
});

export function categoryById(id: string) {
  return MENU_CATEGORY_BY_ID.get(id);
}

export function getDishImage(item: MenuItem) {
  return item.image ?? item.sourceImageUrl ?? placeholderImg;
}

export function isOfficialImage(item: MenuItem) {
  return Boolean(item.image || item.sourceImageUrl);
}

export function isUsableImageUrl(url?: string) {
  return Boolean(url && /\.(avif|webp|png|jpe?g)(\?|$)/i.test(url));
}

export function whatsappHref() {
  const digits = RESTAURANT.whatsapp.replace(/[^\d]/g, "");
  return `https://wa.me/${digits}`;
}

function formatPrice(price: string, locale: Locale) {
  if (locale === "ar" && /Small/i.test(price) && /Big/i.test(price)) {
    return price.replace(/Small/gi, "صغير").replace(/Big/gi, "كبير");
  }
  return price;
}

const ContactCard = memo(function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="contact-icon">{icon}</span>
      <span className="contact-label">{label}</span>
      <strong>{value}</strong>
      {href ? <ArrowUpRight className="h-4 w-4" /> : null}
    </>
  );

  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="contact-card"
    >
      {content}
    </a>
  ) : (
    <div className="contact-card">{content}</div>
  );
});

export function VisitContact() {
  const { locale, t, tx } = useI18n();

  return (
    <section id="visit" className="visit-section soft-botanical-bg">
      <div className="section-wrap">
        <SectionIntro
          eyebrow={t("sec_visit")}
          title={t("visit_title")}
          body={t("visit_body")}
          icon={<MapPin className="h-4 w-4" />}
        />

        <div id="contact" className="contact-grid">
          <ContactCard
            icon={<MessageCircle />}
            label={t("whatsapp")}
            value={RESTAURANT.whatsapp}
            href={whatsappHref()}
          />
          <ContactCard
            icon={<Instagram />}
            label={t("instagram")}
            value={locale === "ar" ? "حساب أسيا على إنستغرام" : "@asyas.gourmet"}
            href={RESTAURANT.instagramUrl}
          />
          <ContactCard
            icon={<MapPin />}
            label={t("address")}
            value={tx(RESTAURANT.address)}
            href={RESTAURANT.mapsUrl}
          />
          <ContactCard icon={<Clock />} label={t("hours")} value={tx(RESTAURANT.hours)} />
        </div>

        <div className="contact-actions">
          <a href={`tel:${RESTAURANT.phone}`}>
            <Phone className="h-4 w-4" />
            {t("call")}
          </a>
          <a href={RESTAURANT.menuSourceUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            {t("source")}
          </a>
        </div>
      </div>
    </section>
  );
}

function FloatingContact({ current }: { current: "home" | "menu" }) {
  const { t } = useI18n();

  return (
    <div className="floating-contact">
      <a
        href={current === "home" ? "/menu" : "#menu-top"}
        className="floating-link floating-link-menu"
      >
        <Utensils className="h-4 w-4" />
        <span>{current === "home" ? t("exploreFullMenu") : t("nav_menu")}</span>
      </a>
      <a
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-link floating-link-main"
      >
        <MessageCircle className="h-5 w-5" />
        <span>{t("order")}</span>
      </a>
      <a
        href={RESTAURANT.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-link floating-link-menu"
      >
        <Instagram className="h-4 w-4" />
        <span>{t("instagram")}</span>
      </a>
    </div>
  );
}

function MobileBottomNav({ current }: { current: "home" | "menu" }) {
  const { locale, t } = useI18n();

  return (
    <nav
      className="mobile-bottom-nav"
      aria-label="Mobile navigation"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <a href="/" className={current === "home" ? "is-active" : ""}>
        <Home className="h-5 w-5" />
        <span>{t("nav_home")}</span>
      </a>
      <a href="/menu" className={current === "menu" ? "is-active" : ""}>
        <Utensils className="h-5 w-5" />
        <span>{t("nav_menu")}</span>
      </a>
      <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
        <MapPin className="h-5 w-5" />
        <span>{t("directions")}</span>
      </a>
      <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
        <Instagram className="h-5 w-5" />
        <span>{t("instagram")}</span>
      </a>
    </nav>
  );
}

function Footer() {
  const { locale, t, tx } = useI18n();

  return (
    <footer className="footer-premium" dir={locale === "ar" ? "rtl" : "ltr"}>
      <div className="footer-grid">
        <div className="footer-brand">
          <img src={logoImg} alt="Asya's Gourmet" width={80} height={80} />
          <h2>{tx(RESTAURANT.name)}</h2>
          <p>{t("footer_tagline")}</p>
        </div>

        <div className="footer-links">
          <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener noreferrer">
            <Instagram className="h-4 w-4" />
            <span>{t("instagram")}</span>
          </a>
          <a href={whatsappHref()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            <span>{t("whatsapp")}</span>
          </a>
          <a href={RESTAURANT.mapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="h-4 w-4" />
            <span>{t("directions")}</span>
          </a>
        </div>

        <div className="footer-hours">
          <span>{t("hours")}</span>
          <strong>{tx(RESTAURANT.hours)}</strong>
          <small>
            © {new Date().getFullYear()} {tx(RESTAURANT.name)}. {t("footer_rights")}
          </small>
        </div>
      </div>
    </footer>
  );
}
