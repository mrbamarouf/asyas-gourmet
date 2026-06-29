// Official Foost item data imported from https://qr.thefoost.com/asyas/ on 2026-06-29.
// Do not edit by hand unless the official Foost data changes.

import type { LocalizedText, MenuOption, MenuRecommendation, MenuTag } from "./menu";

export interface OfficialFoostItemDetail {
  category: string;
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  priceValue?: number;
  currency?: string;
  image?: string;
  sourceImageUrl?: string;
  options?: MenuOption[];
  prepTime?: string;
  calories?: string;
  weight?: string;
  allergens?: MenuTag[];
  dietaryLabels?: MenuTag[];
  recommendations?: MenuRecommendation[];
  order?: number;
}

export const OFFICIAL_ITEM_DETAILS = {
  "44ee2cb1-0808-4e9e-982d-66f24c1d45e9": {
    "category": "81d3c1d4-b82c-4ea3-8a9d-881977f47761",
    "name": {
      "ar": "سلطة سيزر بالدجاج",
      "en": "Caesar Chicken Salad"
    },
    "description": {
      "ar": "خس طازج يعلوه دجاج طري وجبنة بارميزان مع صلصة السيزر الغنية بالقوام الكريمي لمذاق طازج ومُشبع.",
      "en": "Crisp lettuce topped with tender chicken, parmesan, and creamy Caesar dressing for a fresh and satisfying flavor"
    },
    "price": "57",
    "priceValue": 57,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLk7HYrrvg4KL2oM.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLk7HYrrvg4KL2oM.webp",
    "recommendations": [
      {
        "itemId": "37eceeb2-a6ef-475e-b5a2-1024ae622a41",
        "reason": {
          "ar": "",
          "en": "The citrusy brightness of the lemonade cuts through the rich, creamy Caesar dressing."
        }
      },
      {
        "itemId": "770b1ff2-0aef-4f23-8378-ebe37681a842",
        "reason": {
          "ar": "",
          "en": "A warm, earthy lentil soup provides a comforting contrast to the crisp, cool greens of the salad."
        }
      }
    ],
    "order": 5
  },
  "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي تركي (إبريق صغير)",
      "en": "Turkish Tea (Small Pot)"
    },
    "description": {
      "ar": "قدر متوسط (٥٢) - حجم مثالي للمشاركة، يقدم لكم نكهاتنا الأصيلة في وعاء متوسط الحجم يكفي لجميع أفراد العائلة.",
      "en": "A generous serving of our signature dish, perfectly portioned for sharing or for those with a hearty appetite. This medium-sized pot is crafted to deliver a satisfying and flavorful dining experience."
    },
    "price": "45",
    "priceValue": 45,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH5iQrY0vAugj0iiH.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH5iQrY0vAugj0iiH.webp",
    "order": 6
  },
  "47dbca7a-682e-443c-99bc-01dd2bb4adfc": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "قشطة تركية (كايمك)",
      "en": "Turkish Kaymak"
    },
    "description": {
      "ar": "قشطة القيمر التركية الغنية والقوام الكريمي، تُقدم بعناية لتمنحكم مذاقاً تقليدياً ناعماً وأصيلاً يرضي تطلعاتكم.",
      "en": "Rich and creamy Turkish kaymak, delicately served for a smooth, authentic, and satisfying traditional taste."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLjEm3ZdmKnrPMY0.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLjEm3ZdmKnrPMY0.webp",
    "recommendations": [
      {
        "itemId": "c5a25fe4-fdc1-4848-be25-91d0141999b2",
        "reason": {
          "ar": "",
          "en": "The natural sweetness of honey perfectly complements the rich, velvety texture of the kaymak."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "A warm, sesame-crusted simit offers an ideal crunchy vessel for spreading the creamy kaymak."
        }
      }
    ],
    "order": 15
  },
  "69d587e8-6014-44f4-9fa2-2de58deff91b": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "سميت",
      "en": "Simit"
    },
    "description": {
      "ar": "مخبوز طازجاً ومغطى بالسمسم الذهبي، يقدم هذا السميت التقليدي مذاقاً دافئاً ومقرمشاً وشهياً في كل قضمة.",
      "en": "Freshly baked and coated with golden sesame, this traditional simit delivers a warm, crisp, and satisfying taste in every bite."
    },
    "price": "7",
    "priceValue": 7,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLiGIecxYTMHP4Wr.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLiGIecxYTMHP4Wr.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The robust, slightly astringent notes of traditional black tea balance the toasted sesame flavors of the simit."
        }
      },
      {
        "itemId": "0e31b410-7a4f-44cc-be7c-6da715660d4f",
        "reason": {
          "ar": "",
          "en": "The salty, creamy white cheese pairs effortlessly with the crisp, warm dough of the simit."
        }
      }
    ],
    "order": 12
  },
  "975f95ee-5971-4e1b-9c0b-f0c4d484aa1a": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "بطيخ",
      "en": "WATERMELON"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JwQVBEHwf5HoNe.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JwQVBEHwf5HoNe.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm, soothing tea cleanses the palate between the sweet, fruity draws of watermelon shisha."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "A fresh fruit plate enhances the crisp, sweet melon notes of the shisha smoke."
        }
      }
    ],
    "order": 11
  },
  "66543356-1b79-497f-ab11-9fe41362d9c3": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "تفاحتين نخلة",
      "en": "DOUBLE APPLE NAKHLA"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4Hz95PbtbaAh3Q0.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4Hz95PbtbaAh3Q0.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The astringent bite of black tea beautifully offsets the deep, licorice-like sweetness of double apple."
        }
      },
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "",
          "en": "The intense, roasted profile of traditional Turkish coffee stands up to the rich, robust apple flavors."
        }
      }
    ],
    "order": 2
  },
  "77a04025-581e-410b-b70b-bb2c4de5a648": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "تفاحتين فاخر",
      "en": "DOUBLE APPLE Fakher"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4HIrDpCjlmrC0eo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4HIrDpCjlmrC0eo.webp",
    "recommendations": [
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "",
          "en": "The bold, earthy coffee grounds complement the classic, sweet anise notes of the double apple."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "Warm tea refreshes the mouth, making each puff of the sweet, traditional apple smoke feel fresh."
        }
      }
    ],
    "order": 1
  },
  "4bc33733-c8cf-48a5-8ff7-f2ccdfd7cadf": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "مزيج التفاحتين المضاعف",
      "en": "DOUBLE APPLE MIX"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4IMEKD47aHj4yhP.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4IMEKD47aHj4yhP.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The clean finish of Turkish tea creates a perfect harmony with the layered apple and anise flavors."
        }
      },
      {
        "itemId": "de24fecc-4ce3-484f-a34e-3a7d41b29137",
        "reason": {
          "ar": "",
          "en": "The piney, aromatic mastic resin in the coffee highlights the complex, sweet spices of the shisha."
        }
      }
    ],
    "order": 3
  },
  "e26bbf68-0d59-44de-b1b2-c447761acf20": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "توت العنب",
      "en": "GRAPE BERRY"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4IgdWB3o5RrK0vm.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4IgdWB3o5RrK0vm.webp",
    "recommendations": [
      {
        "itemId": "8dc252c0-789f-4024-9414-67faa20f33d8",
        "reason": {
          "ar": "",
          "en": "The vibrant, juicy berry notes of the mojito mirror and amplify the sweet grape and berry smoke."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A simple black tea acts as a grounding, warm contrast to the intensely fruity and sweet shisha."
        }
      }
    ],
    "order": 5
  },
  "726653ff-c498-403e-bc48-8c4100ed7efd": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "التوت الأزرق",
      "en": "BLUE BERRY"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JMqZRB3Txemvg7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JMqZRB3Txemvg7.webp",
    "recommendations": [
      {
        "itemId": "1cb9d1b5-6d8f-493f-be1b-e57d084f065d",
        "reason": {
          "ar": "",
          "en": "The tangy hibiscus and raspberry effortlessly elevate the sweet, floral blueberry smoke."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A classic warm tea provides a soothing backdrop that keeps the palate fresh against the sweet blueberry."
        }
      }
    ],
    "order": 8
  },
  "72cd40c5-5475-4d48-9e56-4d0ea5510c60": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "عنب نعناع",
      "en": "GRAPE MINT"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4Iwowqzri1FQBhg.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4Iwowqzri1FQBhg.webp",
    "recommendations": [
      {
        "itemId": "07de0c88-200d-4732-929e-e8c98a0faedd",
        "reason": {
          "ar": "",
          "en": "The zesty lime and fresh mint of the mojito enhance the cooling, sweet grape profile of the shisha."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The robust tea naturally cuts through the lingering sweetness of the grape, while the mint leaves a cool finish."
        }
      }
    ],
    "order": 6
  },
  "2b92aa34-e5aa-4a63-971f-a18a610c746c": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "نعناع",
      "en": "MINT"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JBSNoLolMPRDOQ.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JBSNoLolMPRDOQ.webp",
    "recommendations": [
      {
        "itemId": "37eceeb2-a6ef-475e-b5a2-1024ae622a41",
        "reason": {
          "ar": "",
          "en": "The tart, citrusy lemonade pairs brilliantly with the icy, refreshing blast of pure mint smoke."
        }
      },
      {
        "itemId": "8d7b9a9c-9f0f-44d2-bd06-3b5a69272490",
        "reason": {
          "ar": "",
          "en": "The delicate, herbal notes of green tea harmonize seamlessly with the cool, crisp mint flavors."
        }
      }
    ],
    "order": 7
  },
  "bc3a5e92-6036-4c1f-9e7b-2bc06d5d2143": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "مياه فوارة",
      "en": "Sparkling Water"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "Small (8)/ Big (16)",
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLpg53WIxMButtqQ.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLpg53WIxMButtqQ.webp",
    "order": 5
  },
  "7f1899d8-36b3-4250-9d32-7a1d0bd6f6d6": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "ليمون بالنعناع",
      "en": "LEMON MINT"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JXOOhC7XVEd7sF.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4JXOOhC7XVEd7sF.webp",
    "recommendations": [
      {
        "itemId": "8d7b9a9c-9f0f-44d2-bd06-3b5a69272490",
        "reason": {
          "ar": "",
          "en": "The light, clean profile of green tea supports the zesty, refreshing citrus and mint smoke."
        }
      },
      {
        "itemId": "07de0c88-200d-4732-929e-e8c98a0faedd",
        "reason": {
          "ar": "",
          "en": "The muddled mint and lime echo the shisha's flavor profile, creating a double-refreshing experience."
        }
      }
    ],
    "order": 9
  },
  "25fedaab-c4ad-4005-9ce9-c5f5c6eb51a5": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "روبي كراش",
      "en": "RUBY CRUSH"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4M7uc2H12g28wo7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4M7uc2H12g28wo7.webp",
    "recommendations": [
      {
        "itemId": "8dc252c0-789f-4024-9414-67faa20f33d8",
        "reason": {
          "ar": "",
          "en": "The tart and sweet berry mix in the mojito perfectly complements the vibrant, fruity crush flavor."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm cup of Turkish tea balances the intense, sweet and icy fruit notes of the smoke."
        }
      }
    ],
    "order": 19
  },
  "3b1c0c76-0809-4459-92cf-adff4d03dff8": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "حب 66",
      "en": "LOVE 66"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4KSkuZTV3rF2lts.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4KSkuZTV3rF2lts.webp",
    "recommendations": [
      {
        "itemId": "0e7f4325-c3a2-4f4d-bb92-0d2a98cc53fc",
        "reason": {
          "ar": "",
          "en": "The tropical passion fruit and mango drink mirrors the exotic, sweet melon and berry notes of Love 66."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The slight bitterness of the black tea elegantly cuts through the intense, candy-like sweetness of the shisha."
        }
      }
    ],
    "order": 13
  },
  "7b6de15e-fa0e-4c9e-909d-f7432a09fdf4": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "برتقال بالنعناع",
      "en": "ORANGE MINT"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4L2J2xxWxZY4Jfw.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4L2J2xxWxZY4Jfw.webp",
    "recommendations": [
      {
        "itemId": "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c",
        "reason": {
          "ar": "",
          "en": "Freshly squeezed orange juice enhances the bright, citrusy smoke and cools the palate."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The robust black tea provides a grounding, earthy contrast to the zesty orange and cool mint."
        }
      }
    ],
    "order": 15
  },
  "6565c206-6158-4af0-a778-591bafdef0b0": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "علكة بالنعناع",
      "en": "GUM MINT"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4LEb7Qs1aGsCDww.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4LEb7Qs1aGsCDww.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The warm tea washes away the lingering sweetness of the gum, preparing the palate for the next cool puff."
        }
      },
      {
        "itemId": "de24fecc-4ce3-484f-a34e-3a7d41b29137",
        "reason": {
          "ar": "",
          "en": "The piney, botanical notes of mastic in the coffee perfectly align with the sweet, resinous gum flavor."
        }
      }
    ],
    "order": 16
  },
  "00eeda4e-667c-45ac-8eea-dc5d2b5341a0": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "مستكة",
      "en": "MASTICA"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4LS4cc3dcfK6X39.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4LS4cc3dcfK6X39.webp",
    "recommendations": [
      {
        "itemId": "de24fecc-4ce3-484f-a34e-3a7d41b29137",
        "reason": {
          "ar": "",
          "en": "Pairing mastic coffee with mastic shisha creates a beautifully layered, aromatic, and deeply traditional experience."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The clean, astringent finish of black tea balances the rich, earthy, and slightly sweet resin smoke."
        }
      }
    ],
    "order": 17
  },
  "ade9d7d4-01d5-4d52-9d1d-89e189d3fc70": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "علكة بالقرفة",
      "en": "CINNAMON GUM"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4LsxmRhsulXbOOX.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4LsxmRhsulXbOOX.webp",
    "recommendations": [
      {
        "itemId": "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37",
        "reason": {
          "ar": "",
          "en": "The warm, robust flavor of traditional Turkish tea perfectly balances the spicy, aromatic notes of the cinnamon shisha."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "A fresh fruit plate provides a juicy, refreshing palate cleanser between flavorful puffs of smoke."
        }
      }
    ],
    "order": 18
  },
  "aa0cfbca-91ae-4fb7-97ef-4fc420523a51": {
    "category": "59ee4ca2-bb09-4a86-981b-fd40460331ea",
    "name": {
      "ar": "خبز كاتيكلي هاتاي بالفلفل",
      "en": "HATAY KATIKLI BREAD"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH55N40NFQfqsvXCN.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH55N40NFQfqsvXCN.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A classic glass of warm Turkish tea cuts through the rich, savory flavors of the baked dough, cleansing the palate effortlessly."
        }
      },
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The zesty, vibrant herbs in the tabbouleh salad offer a bright contrast to the hearty, warm bread."
        }
      }
    ],
    "order": 5
  },
  "b9f7a814-3f1c-4396-955d-26175d652889": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "تيكي تاكا تروبيكال",
      "en": "Tiki Taka Tropical"
    },
    "description": {
      "ar": "مزيج استوائي كريمي من الفراولة، والموز، والتفاح الأحمر، والمانجو، والجوافة، والحليب، يمنحك طعماً ناعماً ومنعشاً.",
      "en": "A creamy tropical blend of strawberry, banana, red apple, mango, guava, and milk, delivering a smooth and refreshing flavor."
    },
    "price": "45",
    "priceValue": 45,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBQu3tliLqkBPaoV.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBQu3tliLqkBPaoV.webp",
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "A sweet, crunchy cake complements the creamy, fruity milkshake by adding an exciting textural contrast."
        }
      },
      {
        "itemId": "a1cf8693-8514-4542-a2b9-e3fd13f86f95",
        "reason": {
          "ar": "",
          "en": "Savory, crispy falafel bites provide a delightful salty contrast to the sweet, tropical creaminess of the drink."
        }
      }
    ],
    "order": 12
  },
  "9f623f75-c40d-47fd-8c3f-eebdab56fa9a": {
    "category": "634c84dd-5cf6-4e20-8270-3e2fbd61e850",
    "name": {
      "ar": "ميلك شيك شوكولاتة",
      "en": "Chocolate Milkshake"
    },
    "description": {
      "ar": "مخفوق حليب بالشوكولاتة غني وناعم الملمس، يمنحك توازناً مثالياً بين القوام الكريمي ونكهة الشوكولاتة الداكنة والعميقة.",
      "en": "Velvety smooth and richly blended, this chocolate milkshake delivers the perfect balance of creamy texture and deep chocolate flavor."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBJvncU3jVQQbf9d.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBJvncU3jVQQbf9d.webp",
    "order": 1
  },
  "dddfd6aa-96f8-4067-b566-8509c8c74636": {
    "category": "634c84dd-5cf6-4e20-8270-3e2fbd61e850",
    "name": {
      "ar": "ميلك شيك فراولة",
      "en": "Strawberry Milkshake"
    },
    "description": {
      "ar": "فراولة طازجة ممزوجة في ميلك شيك كريمي ومنعش، تمنحك طعماً ناعماً وحلاوة رائعة في كل رشفة.",
      "en": "Fresh strawberries blended into a creamy, refreshing milkshake, offering a smooth and delightfully sweet flavor in every sip."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBK5rWQHimKw8P4n.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBK5rWQHimKw8P4n.webp",
    "order": 2
  },
  "728a1cd6-4c57-4509-ab09-aafc279d3947": {
    "category": "634c84dd-5cf6-4e20-8270-3e2fbd61e850",
    "name": {
      "ar": "ميلك شيك موز",
      "en": "Banana Milkshake"
    },
    "description": {
      "ar": "ميلك شيك الموز الكريمي المخفوق بعناية، يمنحكم مذاقاً ناعماً وحلواً بشكل طبيعي ومنعشاً في كل رشفة.",
      "en": "Creamy banana milkshake blended to perfection, delivering a smooth, naturally sweet, and refreshing taste in every sip."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBKElxeJmPJjahMn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBKElxeJmPJjahMn.webp",
    "order": 3
  },
  "ccab3e35-9daa-4895-bfb8-083b852d37da": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "مزيج الأبطال",
      "en": "Champions Blend"
    },
    "description": {
      "ar": "مزيج غني ومغذي من الأفوكادو، والموز، والحليب، واللوز، والتمور، صُنع بعناية لتقديم طعم سلس وممتع.",
      "en": "A rich and nourishing blend of avocado, banana, milk, almonds, and dates, crafted for a smooth and satisfying taste."
    },
    "price": "45",
    "priceValue": 45,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBR16aLwwkBr7DOn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBR16aLwwkBr7DOn.webp",
    "recommendations": [
      {
        "itemId": "9e2677e4-b7fa-476a-8a1b-8996bce6c734",
        "reason": {
          "ar": "",
          "en": "A light, savory vegetarian pizza balances the rich, sweet, and nutty profile of this nourishing avocado blend."
        }
      },
      {
        "itemId": "55fa02cc-4394-4240-b983-d5b58ebecf12",
        "reason": {
          "ar": "",
          "en": "Fresh greens and tomatoes from the chef salad provide a crisp counterpoint to the heavy, creamy shake."
        }
      }
    ],
    "order": 13
  },
  "fe2a23e7-beae-402a-a6b7-93a5c2c8983d": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "سميت بالجبنة",
      "en": "Simit With Cheese"
    },
    "description": {
      "ar": "مخبوز طازجاً ومحشو بالجبنة الغنية، يقدم سميد السمسم الذهبي هذا قرمشة دافئة ومذاقاً مشبعاً في كل قضمة.",
      "en": "Freshly baked and filled with rich cheese, this golden sesame simit delivers a warm, crisp, and satisfying bite."
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLiZ1QGpPOkxC4jy.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLiZ1QGpPOkxC4jy.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The robust astringency of the tea perfectly cleanses the palate after enjoying the rich melted cheese."
        }
      },
      {
        "itemId": "9feba6b0-1a71-49f8-a312-7740b923b8f1",
        "reason": {
          "ar": "",
          "en": "Briny olives add a punch of Mediterranean saltiness that elevates the mild, warm cheese inside the simit."
        }
      }
    ],
    "order": 13
  },
  "c5a25fe4-fdc1-4848-be25-91d0141999b2": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "عسل",
      "en": "Honey"
    },
    "description": {
      "ar": "طبق عسل مختار بعناية يُقدم مع نكهات طبيعية غنية، يمنحكم تجربة سلسة وحلوة المذاق تمنح الشعور بالرضا.",
      "en": "A carefully selected honey platter served with rich natural flavors, offering a smooth, sweet, and satisfying experience."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLivKWrVeWEOawqV.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLivKWrVeWEOawqV.webp",
    "recommendations": [
      {
        "itemId": "47dbca7a-682e-443c-99bc-01dd2bb4adfc",
        "reason": {
          "ar": "",
          "en": "The ultimate classic pairing; rich, thick clotted cream beautifully balances the intense, natural sweetness of the honey."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The toasted sesame notes and crunch of the simit provide an ideal savory base for the sweet honey."
        }
      }
    ],
    "order": 14
  },
  "c8c42df3-a6cf-4e2d-b900-0005fc67e07a": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "طبق فواكه",
      "en": "FRUIT PLATE"
    },
    "description": {
      "ar": "تشكيلة ملونة من الفواكه الموسمية الطازجة، تُقدم بعناية لتجربة منعشة وحلوة المذاق بطبيعتها.",
      "en": "A colorful selection of fresh seasonal fruits, carefully served for a refreshing and naturally sweet experience."
    },
    "price": "78",
    "priceValue": 78,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH56aNHvA01xR4OIo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH56aNHvA01xR4OIo.webp",
    "order": 7
  },
  "7ebbea3f-cc18-4eb1-ab8d-0e9c1dd6feef": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "لبنة",
      "en": "Labneh"
    },
    "description": {
      "ar": "لبنة كريمية تقدم بعناية مع نكهات طازجة، تمنحكم طعماً تقليدياً ناعماً ومنعشاً.",
      "en": "Creamy labneh delicately served with fresh flavors, offering a smooth and refreshing traditional taste."
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGjwzgFRiuTLxWEI.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGjwzgFRiuTLxWEI.webp",
    "recommendations": [
      {
        "itemId": "6969f27d-684c-4725-9257-5e69733bc382",
        "reason": {
          "ar": "",
          "en": "Aromatic baked zahtar pide is the perfect warm vessel for scooping up the cool, tangy labneh."
        }
      },
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "",
          "en": "Warm, freshly baked tandir bread enhances the smooth and rich texture of the cheese, making every bite satisfying."
        }
      }
    ],
    "order": 17
  },
  "e1f43ab0-a152-4e61-af64-53a67f92eae7": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "أوفسايد ميلون",
      "en": "Offside Melon"
    },
    "description": {
      "ar": "مزيج منعش من الكنتالوب، والعنب الأسود، والمانجو، والفراولة، والخوخ، والرمان، ينبض بنكهات حيوية وحلوة طبيعياً.",
      "en": "A refreshing mix of cantaloupe, black grapes, mango, strawberry, peach, and pomegranate, bursting with vibrant and naturally sweet flavors."
    },
    "price": "45",
    "priceValue": 45,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBQkn9NfQBIs2UWF.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKBQkn9NfQBIs2UWF.webp",
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, caramelized cheesecake contrasts beautifully with the bright, vibrant fruit flavors of the melon mix."
        }
      },
      {
        "itemId": "fb3c796f-b84e-469b-96ec-01b9b6f01018",
        "reason": {
          "ar": "",
          "en": "A warm, savory, and crispy bite that flawlessly balances the naturally sweet and refreshing melon beverage."
        }
      }
    ],
    "order": 14
  },
  "004e2b9d-6aef-476a-bed8-e854eeaba257": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "سجق",
      "en": "Sucuk"
    },
    "description": {
      "ar": "سجق تقليدي مقلي بإتقان ومتبل بنكهات غنية، يقدم طعماً قوياً وشهياً يمنحك الرضا التام في كل قضمة.",
      "en": "Perfectly fried and richly seasoned, this traditional sucuk offers a bold, savory, and satisfying flavor in every bite."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGqkEHb8ebXXBXGX.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGqkEHb8ebXXBXGX.webp",
    "recommendations": [
      {
        "itemId": "38ec170c-750b-4fe4-a167-4cd1778648bc",
        "reason": {
          "ar": "",
          "en": "The creamy yolk of a sunny-side-up egg creates a rich sauce that mellows the spicy, bold flavors of the sucuk."
        }
      },
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "",
          "en": "Tear off a piece of warm bread to soak up the intensely savory and spiced oils of the fried meat."
        }
      }
    ],
    "order": 16
  },
  "744474c5-cf88-4c22-bf13-6e05e38ff5c6": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "بقلاوة بالحليب",
      "en": "Cold Baklava with Milk"
    },
    "description": {
      "ar": "بقلاوة باردة مكونة من طبقات رقيقة غنية بالحليب، تتميز بمذاق حلو خفيف وناعم ومتوازن تماماً.",
      "en": "Delicately layered cold baklava infused with milk, offering a light, smooth, and perfectly balanced sweet flavor."
    },
    "price": "54",
    "priceValue": 54,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGk63W6Tv33Xyltv.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGk63W6Tv33Xyltv.webp",
    "recommendations": [
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "تتناغم نكهات القهوة المركزة والمرة والمحضرة ببطء مع حلاوة البقلاوة الغنية بالحليب لتمنحكم توازناً مثالياً.",
          "en": "The strong, bitter notes of the slow-brewed coffee cut cleanly through the milky sweetness of the baklava."
        }
      },
      {
        "itemId": "8d7b9a9c-9f0f-44d2-bd06-3b5a69272490",
        "reason": {
          "ar": "شاي أخضر خفيف وعطري يلطف المذاق، ويمنحكم توازناً مثالياً يكسر حدة غنى الحلى الكريمي.",
          "en": "A light, aromatic green tea cleanses the palate, preventing the rich, milky dessert from feeling too heavy."
        }
      }
    ],
    "order": 2
  },
  "fea3edb5-2fb2-4898-973e-79dffee34090": {
    "category": "7d087dc8-d4fa-4eb3-a017-f8a203431d2c",
    "name": {
      "ar": "دبي",
      "en": "DUBAI"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TQvgiawUw6q3FJ.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TQvgiawUw6q3FJ.webp",
    "recommendations": [
      {
        "itemId": "aac2d932-f051-472d-8951-d9f400dc4f07",
        "reason": {
          "ar": "",
          "en": "The fresh mint and aromatic notes of the tea soothe the throat while enjoying this premium shisha."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Juicy, fresh fruits provide a refreshing and sweet contrast to the dense, flavorful smoke."
        }
      }
    ],
    "order": 2
  },
  "aa2525eb-504a-4257-abbc-60a182e8e790": {
    "category": "7d087dc8-d4fa-4eb3-a017-f8a203431d2c",
    "name": {
      "ar": "ماربيا",
      "en": "MARBELLA"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TpF9KPnRd9Qgzs.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TpF9KPnRd9Qgzs.webp",
    "recommendations": [
      {
        "itemId": "f5811822-3742-48c0-98f6-fb27bdcf2c49",
        "reason": {
          "ar": "",
          "en": "The vibrant, icy tartness of the mojito invigorates the palate alongside the rich shisha flavor."
        }
      },
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "A light, zesty bite of tabbouleh keeps the palate feeling fresh and clean during a long smoking session."
        }
      }
    ],
    "order": 4
  },
  "defa0901-7a2a-467e-ba6a-af3e38979e22": {
    "category": "7d087dc8-d4fa-4eb3-a017-f8a203431d2c",
    "name": {
      "ar": "لاست بوف",
      "en": "LAST PUFF"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4UBL5rS9Og4DKfz.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4UBL5rS9Og4DKfz.webp",
    "recommendations": [
      {
        "itemId": "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37",
        "reason": {
          "ar": "",
          "en": "A warm, classic brew of Turkish tea enhances the relaxing and communal experience of a premium shisha session."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The velvety texture of this burnt cheesecake provides a luxurious and creamy pairing for the rich smoke."
        }
      }
    ],
    "order": 6
  },
  "c97ed7b7-c24c-4bf8-af71-6378bcbe56e3": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "سبانيش لاتيه بارد",
      "en": "Ice Spanish Latte"
    },
    "description": {
      "ar": "إسبريسو بارد ممزوج بحليب ناعم وحليب مُحلى بلمسة كراميل، قوام كريمي غني وتجربة مُدلّلة بكل تفاصيلها.",
      "en": "Chilled espresso with silky milk and caramelized sweetened milk, smooth, creamy and perfectly indulgent."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QWB9Z1lyYTIFkG.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QWB9Z1lyYTIFkG.webp",
    "prepTime": "18",
    "calories": "220",
    "weight": "350",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The caramelized sweetness of the cheesecake mirrors the rich, sweetened milk of the iced latte."
        }
      },
      {
        "itemId": "fb3c796f-b84e-469b-96ec-01b9b6f01018",
        "reason": {
          "ar": "",
          "en": "A savory, salty cheese roll cuts right through the creamy, sugary profile of the cold coffee."
        }
      }
    ],
    "order": 1
  },
  "fca2bd66-4d04-4631-8636-0186f5040191": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "أمريكانو بارد",
      "en": "Ice Americano"
    },
    "description": {
      "ar": "إسبريسو بارد مع الماء، نقي، منعش وبنكهة قوية متوازنة.",
      "en": "Chilled espresso with water, clean, crisp and refreshingly bold."
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QxBWQSWjTPZ9yV.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QxBWQSWjTPZ9yV.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "320",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.shellfishFree",
        "label": {
          "ar": "خالٍ من المحار",
          "en": "Shellfish-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "The crisp, bold bitterness of the Americano perfectly offsets the rich, milky sweetness of the cold baklava."
        }
      },
      {
        "itemId": "7704310c-87e1-4d73-a503-a9f32854973c",
        "reason": {
          "ar": "",
          "en": "A warm, savory pastry balances the cold, clean refreshment of the iced espresso."
        }
      }
    ],
    "order": 5
  },
  "e3b8b4f5-d415-4ff7-bd2d-ee666c77193d": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "موكا باردة",
      "en": "Ice Mocha"
    },
    "description": {
      "ar": "شوكولاتة داكنة غنية ممزوجة بالإسبريسو والحليب البارد، ناعمة وعميقة بنكهة مُدلّلة.",
      "en": "Rich dark chocolate blended with espresso and cold milk, smooth, deep and indulgent."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3R2B1ZtFGqPRRjv.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3R2B1ZtFGqPRRjv.webp",
    "prepTime": "18",
    "calories": "260",
    "weight": "350",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The crunchy texture provides an excellent contrast to the smooth, deep chocolate notes of the mocha."
        }
      },
      {
        "itemId": "3178ac05-fef6-43ce-a897-ea01df50a79f",
        "reason": {
          "ar": "",
          "en": "A hot, salty, and crispy snack that brilliantly contrasts the cold, sweet chocolate beverage."
        }
      }
    ],
    "order": 6
  },
  "e2e1b3c0-e51f-4cba-a60f-91f017976eb5": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "أفوغاتو",
      "en": "Affogato"
    },
    "description": {
      "ar": "إسبريسو ساخن يُسكب فوق آيس كريم كريمي، تجربة غنية ومخملية بنهاية ساحرة.",
      "en": "Hot espresso poured over creamy ice cream, rich, velvety and beautifully indulgent."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QhjQ1fnXhHwhys.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QhjQ1fnXhHwhys.webp",
    "prepTime": "16",
    "calories": "280",
    "weight": "220",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "The flaky, syrupy layers of the baklava harmonize beautifully with the rich, velvety espresso and ice cream."
        }
      },
      {
        "itemId": "0e31b410-7a4f-44cc-be7c-6da715660d4f",
        "reason": {
          "ar": "",
          "en": "The salty, creamy cheese provides a sophisticated, savory contrast to this indulgent dessert."
        }
      }
    ],
    "order": 2
  },
  "3c53bbb9-94b4-4d72-9fde-9e912d73ecfa": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "كورتادو",
      "en": "Cortado"
    },
    "description": {
      "ar": "توازن مثالي بين الإسبريسو والحليب… ناعم، غني وحريري القوام.",
      "en": "Perfect balance of espresso and milk, smooth, rich and velvety."
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzWX1lJNnlOSqpQK.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzWX1lJNnlOSqpQK.webp",
    "prepTime": "17",
    "calories": "170",
    "weight": "180",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, caramelized notes of the San Sebastian cheesecake beautifully contrast the strong, velvety finish of the cortado."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The toasted sesame and crisp texture of the simit offer a wonderful savory crunch against the rich, smooth espresso and milk."
        }
      }
    ],
    "order": 8
  },
  "9e35bb29-5813-4308-888b-ac84fe4eadc4": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "كابتشينو",
      "en": "Cappuccino"
    },
    "description": {
      "ar": "إسبريسو مع حليب مبخّر ورغوة ناعمة… كريمي، متوازن ويمنح إحساسًا دافئًا.",
      "en": "Espresso with steamed milk and silky foam, creamy, smooth and comforting."
    },
    "price": "24",
    "priceValue": 24,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NQK2OqSWcWiSK9.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NQK2OqSWcWiSK9.webp",
    "prepTime": "18",
    "calories": "190",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "The syrupy sweetness and nutty crunch of baklava are perfectly balanced by the airy, creamy foam of a classic cappuccino."
        }
      },
      {
        "itemId": "fe2a23e7-beae-402a-a6b7-93a5c2c8983d",
        "reason": {
          "ar": "",
          "en": "Melted cheese inside a warm simit provides a savory, comforting bite that pairs flawlessly with the milky richness of the cappuccino."
        }
      }
    ],
    "order": 9
  },
  "7df74560-803f-4170-9d26-8d254be2e1ac": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "لاتيه بارد",
      "en": "Ice Latte"
    },
    "description": {
      "ar": "إسبريسو بارد مع حليب ناعم، خفيف وكريمي بتوازن منعش.",
      "en": "Chilled espresso with smooth milk, light, creamy and refreshingly balanced."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QlonMPQGldqh2Y.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3QlonMPQGldqh2Y.webp",
    "prepTime": "17",
    "calories": "170",
    "weight": "340",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The cake's textural crunch and sweet layers complement the chilled, refreshing creaminess of the iced latte."
        }
      },
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "The milky, icy sweetness of the cold baklava mirrors the chilled, smooth profile of the latte for a refreshing treat."
        }
      }
    ],
    "order": 3
  },
  "29ac4114-6af6-441f-b56b-d0ac4d34d758": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "موكا الشوكولاتة البيضاء الباردة",
      "en": "Ice White Chocolate Mocha"
    },
    "description": {
      "ar": "شوكولاتة بيضاء فاخرة ممزوجة بالإسبريسو والحليب البارد، قوام كريمي ونكهة حلوة راقية.",
      "en": "Premium white chocolate blended with espresso and cold milk, creamy, smooth and luxuriously sweet."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Qsh7Q7xSh4Ua1l.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Qsh7Q7xSh4Ua1l.webp",
    "prepTime": "18",
    "calories": "300",
    "weight": "360",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1",
        "reason": {
          "ar": "",
          "en": "The airy sponge and caramel notes of the traliçe enhance the luxurious white chocolate sweetness of the iced mocha."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Fresh, vibrant fruits help cut through the rich, creamy sweetness of the white chocolate for a balanced palate."
        }
      }
    ],
    "order": 4
  },
  "0ca1bcce-95a9-49bc-aa58-d862993d421e": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "أمريكانو",
      "en": "Americano"
    },
    "description": {
      "ar": "إسبريسو مُخفف بالماء الساخن… خفيف، نقي وسهل الشرب.",
      "en": "Smooth espresso diluted with hot water, light, clean and easy to drink."
    },
    "price": "22",
    "priceValue": 22,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NE1iiVjqtP2AQC.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NE1iiVjqtP2AQC.webp",
    "prepTime": "16",
    "calories": "150",
    "weight": "240",
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The bold, clean bitterness of the Americano slices through the rich, creamy texture of the burnt cheesecake."
        }
      },
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "An intense, black Americano provides the perfect bitter contrast to the rich syrup and pistachios of traditional baklava."
        }
      }
    ],
    "order": 6
  },
  "82ffd6fb-2f07-4e5e-896c-e9d915c85c46": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "ماكياتو",
      "en": "Macchiato"
    },
    "description": {
      "ar": "إسبريسو مع لمسة من الحليب… جريء بنعومة، بختام كريمي متوازن.",
      "en": "Espresso topped with a touch of milk, bold yet smooth with a creamy finish."
    },
    "price": "23",
    "priceValue": 23,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NJD3UbMNSmEhBi.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NJD3UbMNSmEhBi.webp",
    "prepTime": "17",
    "calories": "160",
    "weight": "180",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "A simple, crispy sesame simit allows the bold espresso notes of the macchiato to shine without overpowering it."
        }
      },
      {
        "itemId": "a8328686-ad57-4c46-87d2-8ff5da769a72",
        "reason": {
          "ar": "",
          "en": "The warm, sweet cheese of the künefe is beautifully offset by the strong, intense espresso hit of a macchiato."
        }
      }
    ],
    "order": 7
  },
  "a96110ce-a0a7-4bac-8db4-4047e2184a61": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "لاتيه",
      "en": "Latte"
    },
    "description": {
      "ar": "حليب مبخّر بقوام مخملي ممزوج بإسبريسو غني… ناعم، كريمي ومتوازن بأناقة.",
      "en": "Velvety steamed milk layered over rich, full-bodied espresso, smooth, creamy and delicately balanced."
    },
    "price": "24",
    "priceValue": 24,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NVE9ngQ4tJq6vn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NVE9ngQ4tJq6vn.webp",
    "prepTime": "18",
    "calories": "210",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The latte's velvety steamed milk mutes the sweetness of the crunch cake, creating a harmonious and comforting pairing."
        }
      },
      {
        "itemId": "fe2a23e7-beae-402a-a6b7-93a5c2c8983d",
        "reason": {
          "ar": "",
          "en": "The savory, salty notes of the cheese-stuffed simit contrast delightfully with the delicate sweetness of the latte."
        }
      }
    ],
    "order": 10
  },
  "3de8bda3-66f6-47d8-805f-22eaa5f5564d": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "فلات وايت",
      "en": "Flat White"
    },
    "description": {
      "ar": "جرعتان من الإسبريسو مع ميكروفوم حريري… مكثّف، ناعم ومتوازن القوام بإتقان.",
      "en": "Double shot espresso with silky microfoam, intense, velvety and perfectly textured."
    },
    "price": "27",
    "priceValue": 27,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NZ9Ks9VtxivlcL.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NZ9Ks9VtxivlcL.webp",
    "prepTime": "18",
    "calories": "190",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The intense double shot of espresso in the flat white cuts through the creamy, caramelized body of the cheesecake."
        }
      },
      {
        "itemId": "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1",
        "reason": {
          "ar": "",
          "en": "The milky caramel sponge of the traliçe forms a beautiful harmony with the silky microfoam of the flat white."
        }
      }
    ],
    "order": 11
  },
  "06a05c4f-d8a5-4aab-9a36-e6d66fba8a11": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "موكا الشوكولاتة البيضاء",
      "en": "White Chocolate Mocha"
    },
    "description": {
      "ar": "شوكولاتة بيضاء فاخرة ممزوجة بالإسبريسو وحليب ناعم… كريمي، فاخر وناعم بانسيابية.",
      "en": "Premium white chocolate blended with espresso and silky milk, creamy, indulgent and luxuriously smooth."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Ne8jffYdLNRGpE.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Ne8jffYdLNRGpE.webp",
    "prepTime": "19",
    "calories": "320",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "The milky richness of the cold baklava amplifies the creamy, indulgent white chocolate notes of the mocha."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "The natural acidity and freshness of the fruit plate provide a bright contrast to the luxurious sweetness of the mocha."
        }
      }
    ],
    "order": 12
  },
  "97c60f8a-309e-46fb-b100-da93a603410d": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض مخفوق على طريقة المزرعة",
      "en": "Farm Style Scramble"
    },
    "description": {
      "ar": "بيض مخفوق طري وكريمي محضّر بالزبدة، يمنحك بداية خفيفة ومُشبعة ليومك. يُقدّم مع اللبنة لإضفاء لمسة ناعمة ومتوازنة. طبق مريح، ناعم القوام وسهل الاستمتاع به.",
      "en": "Soft and creamy scrambled eggs prepared with butter, offering a light yet satisfying start to the day. Served with labneh to bring a smooth and balanced finish. Comforting, smooth and easy to enjoy."
    },
    "price": "36",
    "priceValue": 36,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzjauiAzzo4AieVr.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzjauiAzzo4AieVr.webp",
    "prepTime": "22",
    "calories": "520",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The robust, slightly astringent flavor of traditional Turkish tea perfectly balances the buttery richness of the scrambled eggs."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The crunchy, sesame-crusted simit is the ideal vessel for scooping up the soft, creamy scrambled eggs and labneh."
        }
      }
    ],
    "order": 8
  },
  "8f0dd89f-a75a-4c8b-a000-c96060303d3e": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض مع سجق منزلي",
      "en": "Eggs With Homemade Sucuk"
    },
    "description": {
      "ar": "طبق فطور كلاسيكي جريء يجمع بين البيض والسجق المحضّر منزلياً، يُطهى على نار هادئة ليطلق نكهته العميقة ورائحته الغنية. يُقدَّم مع خبز تيرناك التقليدي، ليمنحك تجربة شهية ومُشبعة. نكهة قوية، أصالة تقليدية، وطعم عميق لا يُقاوم.",
      "en": "A bold breakfast classic where eggs meet homemade sucuk, slowly cooked to release its deep, rich aroma. Served with traditional tırnak bread, creating a hearty and satisfying experience. Strong, traditional and deeply flavorful."
    },
    "price": "46",
    "priceValue": 46,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzhYUrNMTf8xtwdo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzhYUrNMTf8xtwdo.webp",
    "prepTime": "26",
    "calories": "640",
    "weight": "340",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A strong glass of Turkish tea cleanses the palate after the bold, spicy richness of the homemade sucuk."
        }
      },
      {
        "itemId": "9feba6b0-1a71-49f8-a312-7740b923b8f1",
        "reason": {
          "ar": "",
          "en": "The briny, herbaceous olives cut through the heavy, savory flavors of the sucuk and eggs, adding a refreshing contrast."
        }
      }
    ],
    "order": 6
  },
  "38ec170c-750b-4fe4-a167-4cd1778648bc": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض عيون",
      "en": "Sunny Side Up"
    },
    "description": {
      "ar": "بيض طازج مطهو بعناية فائقة وبدرجة حرارة متوازنة للحفاظ على صفار ذهبي غني وقوام ناعم. يُقدم ببساطة لإبراز نقاء وجودة المكونات، مما يمنحكم تجربة إفطار كلاسيكية بلمسة أنيقة.",
      "en": "Soft and creamy scrambled eggs prepared with butter, offering a light yet satisfying start to the day. Served with labneh to bring a smooth and balanced finish. Comforting, smooth and easy to enjoy."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ASrtJaioENXbX2.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ASrtJaioENXbX2.webp",
    "prepTime": "22",
    "calories": "520",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c",
        "reason": {
          "ar": "",
          "en": "The bright, citrusy acidity of freshly squeezed orange juice cuts through the rich, buttery egg yolks."
        }
      },
      {
        "itemId": "fe2a23e7-beae-402a-a6b7-93a5c2c8983d",
        "reason": {
          "ar": "",
          "en": "A warm, cheesy simit provides a wonderful savory base to dip into the creamy, runny yolks of the sunny side up eggs."
        }
      }
    ],
    "order": 7
  },
  "e8b45db5-b42f-4122-8dfc-59d19bc88045": {
    "category": "9ab5f294-68cb-470c-a860-d520f5d09f22",
    "name": {
      "ar": "عسل وقشطة",
      "en": "Honey & Cream Ritual"
    },
    "description": {
      "ar": "مزيج تقليدي فاخر يمنحك تجربة غنية لا تُقاوم…\nتُقدَّم القشطة الغنية إلى جانب قرص العسل والعسل المصفّى، لتمنحك طبقات من الحلاوة الطبيعية وقوامًا متنوعًا في كل لقمة.\nويُرافقها خبز البازلاما الطازج ليمنحك تجربة دافئة ومشبعة.\nكريمي، غني، وأصيل لا يُقاوم.",
      "en": "A truly indulgent traditional pairing… Rich clotted cream is served alongside both honeycomb and strained honey, offering layers of natural sweetness and texture in every bite. Accompanied by freshly baked bazlama bread for a warm and satisfying experience. Creamy, rich and irresistibly authentic."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLjlnoSPeiIpzq1Y.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLjlnoSPeiIpzq1Y.webp",
    "prepTime": "22",
    "calories": "620",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The bold, unsweetened profile of Turkish tea balances the intense, rich sweetness of the honeycomb and clotted cream."
        }
      },
      {
        "itemId": "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c",
        "reason": {
          "ar": "",
          "en": "Fresh orange juice adds a vibrant, zesty contrast that brightens up the heavy, creamy sweetness of the honey and kaymak."
        }
      }
    ],
    "order": 1
  },
  "d44063ac-c32b-457a-b474-ced546d36818": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "بيدا بجبنة الكشكفال",
      "en": "Kashkaval Pide"
    },
    "description": {
      "ar": "عجينة بيده تقليدية تُخبز بعناية، مغطاة بجبنة القشقوان الذائبة، ومزيّنة بالسمسم وحبة البركة لتعزيز النكهة.\nبسيطة، غنية بالجبن، ومشبعة.",
      "en": "Traditional pide dough topped with melted Kashkaval cheese, sprinkled with sesame and black cumin seeds for extra aroma. Simple, cheesy and satisfying."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGze4PtUbK3PGYLvc.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGze4PtUbK3PGYLvc.webp",
    "prepTime": "25",
    "calories": "740",
    "weight": "340",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The crisp, warm notes of black tea help cleanse the palate between bites of the rich, melted Kashkaval cheese."
        }
      },
      {
        "itemId": "9feba6b0-1a71-49f8-a312-7740b923b8f1",
        "reason": {
          "ar": "",
          "en": "The salty, tangy bite of marinated olives perfectly complements the mild, gooey richness of the cheese pide."
        }
      }
    ],
    "order": 2
  },
  "5e586ecb-4451-4e10-852d-96ec5a32f46e": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "شكشوكة إسطنبول بجبنة القشقوان",
      "en": "Istanbul Menemen With Kashar Cheese"
    },
    "description": {
      "ar": "إصدار أغنى من طبق المينمين الإسطنبولي الكلاسيكي، معزز بجبنة القشقوان الذائبة. يتناغم مزيج الطماطم والفلفل والبيض مع ملمس الجبن الناعم والمطاطي، مما يمنحكم تجربة غنية بالمذاق. يُقدم مع اللبنة الجانبية، والخبز المقرمش، والأعشاب الطازجة. طبق دافئ ومثالي للمشاركة.",
      "en": "A richer version of the classic Istanbul menemen, enhanced with melted kashar cheese. The harmony of tomatoes, peppers and eggs meets the smooth, stretchy texture of cheese, creating a more indulgent experience. Served with labneh on the side, crispy bread and fresh herbs. A comforting dish made for sharing."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzeBFfNzau1O8Ie2.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzeBFfNzau1O8Ie2.webp",
    "prepTime": "26",
    "calories": "610",
    "weight": "390",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A classic pairing, the robust black tea cuts through the rich, savory tomato and melted cheese flavors of the menemen."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The crunchy, sesame-coated simit is perfect for dipping into the warm, cheesy, and tomato-rich menemen."
        }
      }
    ],
    "order": 2
  },
  "755a894d-bcec-4035-9aac-a5a4575a4670": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض هنكار (تشيلبير)",
      "en": "Hunkar Yumurtasi (Cilbir)"
    },
    "description": {
      "ar": "طبق مميز بلمسة عصرية على وصفة تقليدية محبوبة، يتضمن بيضاً طرياً يُقدَّم فوق لبن بنكهة الثوم، ويُزيَّن بالزبدة الدافئة الذائبة. متوازن النكهات، رقيق وغني بالطعم، يُقدَّم مع خبز الكروتون المقرمش لإضافة قوام مميز. أنيق، متوازن وأصيل.",
      "en": "A refined take on a traditional favorite, featuring soft eggs served over garlicky yogurt, finished with warm melted butter. Balanced, delicate and rich in flavor, this dish is complemented with crispy crouton bread for added texture. Elegant, balanced and timeless."
    },
    "price": "46",
    "priceValue": 46,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzWRAN0mTKf89Vpm.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzWRAN0mTKf89Vpm.webp",
    "prepTime": "23",
    "calories": "560",
    "weight": "340",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The strong, malty flavors of the tea provide a refreshing contrast to the garlicky yogurt and rich melted butter."
        }
      },
      {
        "itemId": "9feba6b0-1a71-49f8-a312-7740b923b8f1",
        "reason": {
          "ar": "",
          "en": "The briny olives offer a sharp, tangy bite that balances the creamy, delicate flavors of the poached eggs and yogurt."
        }
      }
    ],
    "order": 3
  },
  "3a13ab9e-66b3-45db-9442-606f00cb5a54": {
    "category": "9ab5f294-68cb-470c-a860-d520f5d09f22",
    "name": {
      "ar": "طبق مربى الستات",
      "en": "Grandma Jam Plate"
    },
    "description": {
      "ar": "تشكيلة لذيذة بلمسات منزلية…\nمجموعة من مربى المشمش، التين، الفراولة والتوت المُحضّرة منزليًا، تتناغم مع الطحينة والدبس لتمنح عمقًا غنيًا في النكهة.\nتُقدَّم مع الزبدة وعناصر خبز مقرمشة، إلى جانب سلة خبز متنوعة ولمسة من النوتيلا لإضافة عصرية.\nمتنوع، غني، ومثالي للمشاركة.",
      "en": "A delightful spread crafted with homemade touches… A selection of homemade apricot, fig, strawberry and mulberry jams, perfectly paired with tahini and molasses for added depth. Served with butter and crispy bread elements, alongside a mixed bread basket and a touch of Nutella for a modern twist. Generous, indulgent and perfect for sharing."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3EdJPRrJW3zF6PS.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3EdJPRrJW3zF6PS.webp",
    "prepTime": "24",
    "calories": "680",
    "weight": "360",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The bitter depth of the black tea perfectly tempers the concentrated, fruity sweetness of the homemade jams."
        }
      },
      {
        "itemId": "47dbca7a-682e-443c-99bc-01dd2bb4adfc",
        "reason": {
          "ar": "",
          "en": "Adding extra rich, traditional kaymak creates a luxurious, creamy base that enhances the vibrant flavors of the fruit jams."
        }
      }
    ],
    "order": 2
  },
  "1bdacdb7-3add-4dad-bc1e-1bcc8b60a715": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بطاطس وبيض",
      "en": "Potato & Eggs"
    },
    "description": {
      "ar": "بطاطا ذهبية مقلية بخفة في الزبدة، ممزوجة مع البيض لتقديم طبق شهي ومشبع. تُقدّم مع اللبنة على الجانب، ومُعزّزة بالكمون ورقائق الفلفل الحار لنكهة دافئة ومميزة. مصحوبة بخبز مقرمش. بداية مريحة ومُرضية ليومك.",
      "en": "Golden potatoes lightly sautéed in butter, combined with eggs to create a hearty and satisfying dish. Served with labneh on the side, and enhanced with cumin and chili flakes for a warm, flavorful finish. Accompanied by crispy bread. A comforting and fulfilling start to the day."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzh7xZ5PCXe5wdjM.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzh7xZ5PCXe5wdjM.webp",
    "prepTime": "24",
    "calories": "560",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The warmth and astringency of the tea cut through the hearty, comforting starchiness of the buttery potatoes and eggs."
        }
      },
      {
        "itemId": "61fc7728-4ccf-4745-a8af-9bc19f408038",
        "reason": {
          "ar": "",
          "en": "The tart, vibrant acidity of fresh pomegranate juice brightens up the rich, spiced flavors of the potato and egg dish."
        }
      }
    ],
    "order": 4
  },
  "cf8b74da-b6fe-40f1-9a00-639a4de60168": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "بيدا عكاوي",
      "en": "Akawi Pide"
    },
    "description": {
      "ar": "عجينة بيده طازجة تُخبز يوميًا، مغطاة بمزيج من جبنة الموزاريلا الذائبة وجبنة العكاوي الأصيلة، ومزيّنة بالسمسم وحبة البركة.\nغنية، متوازنة، ومشبعة بالنكهة.",
      "en": "Freshly baked pide dough topped with a blend of melted mozzarella and authentic Akawi cheese, finished with sesame and black cumin seeds. Rich, salty and perfectly balanced."
    },
    "price": "46",
    "priceValue": 46,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTT9tP5oAPQO92h.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTT9tP5oAPQO92h.webp",
    "prepTime": "25",
    "calories": "780",
    "weight": "360",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The clean, robust flavor of the tea washes away the salty richness of the Akawi cheese, refreshing the palate."
        }
      },
      {
        "itemId": "9feba6b0-1a71-49f8-a312-7740b923b8f1",
        "reason": {
          "ar": "",
          "en": "The herbal and briny notes of the olives pair seamlessly with the salty, melted mozzarella and Akawi cheese."
        }
      }
    ],
    "order": 1
  },
  "5eaee17f-39b8-4b04-8b1e-35a30a4f3ce9": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "موكا",
      "en": "Mocha"
    },
    "description": {
      "ar": "شوكولاتة داكنة غنية تمتزج مع إسبريسو جريء وحليب مبخّر… عميق، ناعم ومُرضٍ بكل تفاصيله.",
      "en": "Rich dark chocolate fused with bold espresso and steamed milk, deep, smooth and intensely satisfying."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NiKXSdGRQwuTmC.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NiKXSdGRQwuTmC.webp",
    "prepTime": "19",
    "calories": "300",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The deep, dark chocolate notes of the mocha contrast beautifully with the caramelized, creamy profile of the burnt cheesecake."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The savory, toasted sesame crust of the simit provides a delightful textural crunch against the rich, velvety chocolate and espresso."
        }
      }
    ],
    "order": 13
  },
  "5303aeee-379d-423a-b655-7a2ce5a53340": {
    "category": "05d02beb-e1f6-4908-9b12-e2b69b1fafc1",
    "name": {
      "ar": "قهوة درِيب الباردة",
      "en": "Ice Drip Coffee"
    },
    "description": {
      "ar": "قهوة مختصة من مصدر واحد تُحضَّر بالاستخلاص البارد، ناعمة، عطرية ومنعشة بطبيعتها.",
      "en": "Cold brewed single origin coffee, smooth, aromatic and naturally refreshing."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3R6tTn3pB9bMmlk.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3R6tTn3pB9bMmlk.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "330",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.shellfishFree",
        "label": {
          "ar": "خالٍ من المحار",
          "en": "Shellfish-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, rich texture of San Sebastian cheesecake provides a beautiful contrast to the clean, aromatic notes of the cold drip coffee."
        }
      },
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The chocolatey crunch of this cake pairs perfectly with the smooth, refreshing acidity of the single-origin brew."
        }
      }
    ],
    "order": 7
  },
  "bef4cfaf-a1da-4d59-a2e0-f53a99d3cf2f": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض مع سميت نيشانتاشي",
      "en": "Eggs With Nişantaşı Simit"
    },
    "description": {
      "ar": "طبق ممتع ومشبع يتكون من قطعتين من سميت كاراكوي الشهير؛ إحداهما محشوة بصلصة الطماطم الغنية، والأخرى بالبيض. يتوسط المقلاة قاعدة من صلصة الطماطم الدافئة يعلوها بيض مطهو بعناية مع لمسة من جرجير الطازج. طبق غني بالطبقات، مفعم بالحيوية والنكهات المميزة في كل قضمة.",
      "en": "A playful and satisfying dish featuring two pieces of Karaköy-style simit — one filled with tomato sauce, the other with eggs. At the center of the pan, a base of warm tomato sauce is topped with gently cooked eggs and finished with fresh arugula. Layered, vibrant and full of character in every bite."
    },
    "price": "44",
    "priceValue": 44,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3C0WmZbDKx48Pz7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3C0WmZbDKx48Pz7.webp",
    "prepTime": "23",
    "calories": "520",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A classic glass of warm Turkish tea cleanses the palate, cutting through the rich tomato sauce and buttery eggs."
        }
      },
      {
        "itemId": "47dbca7a-682e-443c-99bc-01dd2bb4adfc",
        "reason": {
          "ar": "",
          "en": "Creamy Turkish kaymak adds a luxurious, cooling contrast to the vibrant and savory flavors of the simit pan."
        }
      }
    ],
    "order": 5
  },
  "1ae0277d-4110-4b2b-ad0f-ebf2c6bbeaeb": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "شكشوكة إسطنبول",
      "en": "Istanbul Menemen"
    },
    "description": {
      "ar": "طبق مينمين تقليدي على طراز إسطنبول، يُحضر بالنكهات الطبيعية للطماطم والفلفل، ويُطهى ببطء مع البيض الطازج ليقدم طبقاً دافئاً ومريحاً. يُقدم مع اللبنة الكريمية إلى جانبه، بالإضافة إلى خبز الكروتون المقرمش والبقدونس الطازج لضمان توازن مثالي. مذاق مألوف، دافئ، ومليء بالراحة في كل لقمة...",
      "en": "A traditional Istanbul-style menemen prepared with the natural flavors of tomatoes and peppers, gently cooked with fresh eggs to create a warm and comforting dish. Served with creamy labneh on the side, along with crispy crouton bread and fresh parsley for a balanced finish. Familiar, warm and full of comfort in every bite..."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzapIYpULfuK01MM.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzapIYpULfuK01MM.webp",
    "prepTime": "24",
    "calories": "520",
    "weight": "360",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "004e2b9d-6aef-476a-bed8-e854eeaba257",
        "reason": {
          "ar": "",
          "en": "Bold, spiced sucuk adds a satisfying, meaty depth that elevates the comforting flavors of the traditional menemen."
        }
      },
      {
        "itemId": "20fa5e31-1a88-4e58-b9d5-ed4f4d32e3ac",
        "reason": {
          "ar": "",
          "en": "The bright acidity of fresh orange and green apple juice provides a refreshing lift to the rich, buttery eggs."
        }
      }
    ],
    "order": 1
  },
  "c6e8da58-5274-42e3-9cfd-b2dda9ec1b57": {
    "category": "ab88f484-c88f-49fb-905f-d13cbb35dc76",
    "name": {
      "ar": "مارغريتا",
      "en": "Margarita"
    },
    "description": {
      "ar": "صلصة طماطم طازجة، جبنة موزاريلا ذائبة، وريحان عطري يجتمعون معاً لتقديم بيتزا مارغريتا كلاسيكية ومتوازنة المذاق بشكل مثالي.",
      "en": "Fresh tomato sauce, melted mozzarella, and aromatic basil come together for a classic and perfectly balanced Margherita pizza."
    },
    "price": "52",
    "priceValue": 52,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH41A8eBPb0MdWoF5.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH41A8eBPb0MdWoF5.webp",
    "recommendations": [
      {
        "itemId": "0ad35147-8d8d-49c5-a25c-f574b7e07145",
        "reason": {
          "ar": "تضفي جرجير السلطة الفلفلي ولمسة بلسميك \"إيجه بريز\" الرقيقة انتعاشاً مميزاً على البيتزا الغنية بالجبن.",
          "en": "The peppery arugula and delicate balsamic glaze of the Ege Breeze Salad provide a fresh lift to the cheesy pizza."
        }
      },
      {
        "itemId": "f5811822-3742-48c0-98f6-fb27bdcf2c49",
        "reason": {
          "ar": "تخترق نكهات الباشن فروت الحيوية والفوارة غنى جبنة الموزاريلا والعجينة المخبوزة بكل سلاسة.",
          "en": "Vibrant, sparkling passion fruit notes easily cut through the rich mozzarella and baked dough."
        }
      }
    ],
    "order": 1
  },
  "1b35ff21-f2fc-4e93-acf1-bc1827a452af": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "بقلاوة تركية",
      "en": "Turkish Baklava"
    },
    "description": {
      "ar": "طبقات من البقلاوة التركية المقرمشة تُقدم مع آيس كريم المستكة التقليدي، لتمنحكم تجربة تحلية تركية غنية وأصيلة.",
      "en": "Layers of crispy Turkish baklava served with traditional mastic ice cream, creating a rich and authentic Turkish dessert experience."
    },
    "price": "52",
    "priceValue": 52,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLmLFpbhE5m4uly5.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLmLFpbhE5m4uly5.webp",
    "recommendations": [
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "تتوازن نكهات القهوة التركية المطحونة بعناية بمرارتها الغنية مع حلاوة البقلاوة الكثيفة والمقرمشة لتمنحكم تجربة مثالية.",
          "en": "The intense, bitter notes of finely ground Turkish coffee perfectly balance the dense, syrupy sweetness of the baklava."
        }
      },
      {
        "itemId": "47dbca7a-682e-443c-99bc-01dd2bb4adfc",
        "reason": {
          "ar": "إضافة جانب من القيمر الغني يلطف حلاوة الحلويات القوية ويعزز طبقاتها الهشة والزبدية.",
          "en": "Adding a side of rich kaymak mellows the sharp sweetness of the dessert and enhances its flaky, buttery layers."
        }
      }
    ],
    "order": 1
  },
  "bd920d50-f921-46e5-844f-84d6eb6dcf74": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "طبق المزرعة",
      "en": "Farm's Plate"
    },
    "description": {
      "ar": "مزيج منعش من الخضروات الطازجة من الحديقة... خس مقرمش وجرجير وبقدونس متوازنة مع الخيار والطماطم والفجل الصغير والفلفل الملون. مع لمسة من الليمون لإضفاء الإشراق. خفيفة وطازجة ونابضة بالحيوية بشكل طبيعي.",
      "en": "A refreshing combination of garden-fresh vegetables... Crisp lettuce, arugula and parsley are balanced with cucumber, tomatoes, baby radish and colorful peppers. Finished with a touch of lemon for brightness. Light, fresh and naturally vibrant."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3CybMhbnGLXCxwP.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3CybMhbnGLXCxwP.webp",
    "prepTime": "20",
    "calories": "190",
    "weight": "200",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "770b1ff2-0aef-4f23-8378-ebe37681a842",
        "reason": {
          "ar": "",
          "en": "A warm, earthy bowl of lentil soup creates a comforting and satisfying contrast to the crisp, cold garden vegetables."
        }
      },
      {
        "itemId": "8fb5c495-bced-405e-8abe-40938f6a2be0",
        "reason": {
          "ar": "",
          "en": "Chilled lemon ice tea enhances the bright, citrusy dressing of the salad, offering a thoroughly refreshing pairing."
        }
      }
    ],
    "order": 6
  },
  "774cacb7-7b1b-4fe8-9389-caa3444926f9": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "أومليت الخضار",
      "en": "Vegetable Omelette"
    },
    "description": {
      "ar": "أومليت نابض بالحيوية محشو بالخضروات الطازجة بما في ذلك الكوسا والجزر والفطر والفلفل الملون. متوازن مع طماطم الكرز والجرجير لنهاية منعشة. خفيف وملون ومليء بالنضارة.",
      "en": "A vibrant omelette filled with fresh vegetables including zucchini, carrots, mushrooms and colorful peppers. Balanced with cherry tomatoes and arugula for a refreshing finish. Light, colorful and full of freshness."
    },
    "price": "34",
    "priceValue": 34,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbcocv07dogzvB5.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbcocv07dogzvB5.webp",
    "prepTime": "23",
    "calories": "390",
    "weight": "260",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The warm, astringent notes of traditional black tea cleanse the palate after each bite of the rich, buttery omelette."
        }
      },
      {
        "itemId": "223a7d36-eb74-4e6b-a01c-b7ff0b0c696b",
        "reason": {
          "ar": "",
          "en": "Crispy, herbaceous Abla potatoes add a hearty crunch that complements the soft, vibrant vegetables in the eggs."
        }
      }
    ],
    "order": 12
  },
  "d6451bec-6280-4ed1-b438-53d41f63b4f1": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "أومليت سادة",
      "en": "Plain Omelette"
    },
    "description": {
      "ar": "أومليت خفيف ورقيق محضّر من البيض والزبدة، مقدّم مع حبات طماطم كرزية طازجة ولمسة من الجرجير. يُقدّم مع قطع الخبز المحمّص المقرمشة لتجربة متوازنة ونقية. بسيط، طازج وممتع بكل سهولة.",
      "en": "A light and delicate omelette prepared with eggs and butter, paired with fresh cherry tomatoes and a touch of arugula. Served with crispy croutons for a clean and balanced experience. Minimal, fresh and effortlessly enjoyable."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzdLcjUt8mQBiVF7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzdLcjUt8mQBiVF7.webp",
    "prepTime": "22",
    "calories": "410",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "004e2b9d-6aef-476a-bed8-e854eeaba257",
        "reason": {
          "ar": "",
          "en": "The savory, spiced profile of fried sucuk perfectly elevates the delicate and minimal flavors of the plain omelette."
        }
      },
      {
        "itemId": "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c",
        "reason": {
          "ar": "",
          "en": "Sweet and zesty orange juice provides a vibrant, acidic lift to start the morning alongside this light egg dish."
        }
      }
    ],
    "order": 11
  },
  "93db7fe1-0187-437c-9b85-f9704ec58e20": {
    "category": "59ee4ca2-bb09-4a86-981b-fd40460331ea",
    "name": {
      "ar": "جوزلمة الجبن المنزلية",
      "en": "Handmade Cheese Gozleme"
    },
    "description": {
      "ar": "تُحضَّر طازجة بعجين منزلي رقيق، ومحشوة بجبن ذائب غني، ثم تُطهى على صاج ساخن وتُقدَّم مباشرة لتمنحك أفضل طعم طازج.\nطرية، غنية بالجبن، وطازجة يوميًا.",
      "en": "Freshly prepared with thin handmade dough and filled with melting cheese, this gozleme is cooked on a hot griddle and served straight from the pan. Soft, cheesy and freshly made."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3EwK19tQZyF3p9I.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3EwK19tQZyF3p9I.webp",
    "prepTime": "24",
    "calories": "520",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37",
        "reason": {
          "ar": "",
          "en": "A small pot of Turkish tea is the traditional companion, cutting through the rich, melting cheese with its smooth tannins."
        }
      },
      {
        "itemId": "2e68a5de-d7cc-4572-a661-2d967173ca8a",
        "reason": {
          "ar": "",
          "en": "The briny olives and vibrant greens of this salad cut through the heavy, warm dough for a perfectly balanced meal."
        }
      }
    ],
    "order": 2
  },
  "c1983103-608f-418e-a037-d79387429663": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "أومليت بالجبن",
      "en": "Cheese Omelette"
    },
    "description": {
      "ar": "طبق كلاسيكي دافئ حيث تمتزج جبنة الموزاريلا الذائبة بنعومة مع البيض المطهو بالزبدة. متوازن مع طماطم الكرز والجرجير، ويُقدّم مع قطع الخبز المحمّص المقرمشة على الجانب. كريمي، مُشبع وبنكهة لا تُقاوم.",
      "en": "A comforting classic where melted mozzarella blends smoothly with eggs cooked in butter. Balanced with cherry tomatoes and arugula, and served with crispy croutons on the side. Creamy, satisfying and timeless."
    },
    "price": "34",
    "priceValue": 34,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3AcZnddkOjQFuy8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3AcZnddkOjQFuy8.webp",
    "prepTime": "24",
    "calories": "470",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "A crisp, sesame-coated simit is the ideal vessel for scooping up the soft, melted mozzarella and buttery eggs."
        }
      },
      {
        "itemId": "20fa5e31-1a88-4e58-b9d5-ed4f4d32e3ac",
        "reason": {
          "ar": "",
          "en": "The bright, naturally sweet fruit flavors of the Fresh Mix cleanse the palate from the rich, creamy cheese."
        }
      }
    ],
    "order": 13
  },
  "34cf0c11-521a-4390-b42a-48b070e22cc2": {
    "category": "59ee4ca2-bb09-4a86-981b-fd40460331ea",
    "name": {
      "ar": "جوزلمة البطاطس المنزلية",
      "en": "Handmade Potato Gozleme"
    },
    "description": {
      "ar": "تُحضَّر يوميًا بأيادٍ ماهرة، حيث تأتي هذه الجوزلمة التقليدية بحشوة بطاطس بسيطة ومريحة في نكهتها.\nيُفرد العجين برقة ويُطهى على صاج ساخن، ثم يُقدَّم دافئًا ليمنحك تجربة أصيلة ومشبعة.\nمنزلي، دافئ، ومريح.",
      "en": "Prepared daily by skilled hands, this traditional gozleme is filled with a simple yet comforting potato mixture. Thinly rolled dough is cooked on a hot griddle and served warm. Homemade, warm and comforting."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzX9j3yiKa36AnLB.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzX9j3yiKa36AnLB.webp",
    "prepTime": "24",
    "calories": "430",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "c3d5aaa1-b279-47a7-b745-dbf27c322d41",
        "reason": {
          "ar": "",
          "en": "The cooling, herbaceous notes of mint ayran beautifully balance the hearty, starchy warmth of the potato filling."
        }
      },
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "A tangy, walnut-rich Gavurdagi salad adds a refreshing crunch and acidity that contrasts the soft, savory dough."
        }
      }
    ],
    "order": 1
  },
  "7e0f5506-f996-4586-a42a-b1b522dfbc43": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "95 فول",
      "en": "95 Fava Beans"
    },
    "description": {
      "ar": "طبق كلاسيكي محبوب من الشرق الاوسط... فول مطهو ببطء ممزوج مع الطماطم والبصل والثوم, غني بالطحينة وزيت الزيتون لنكهة دسمة ومرضية. \nوجبة مشبعة, غنية, ومليئة بالنكهات الاصيلة.",
      "en": "A beloved Middle Eastern classic... Slow-cooked fava beans are combined with tomatoes, onions and gill, enriched with tahini and olive oil for a rich and satisfying flavor. Hearty, rich and full of character."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfTquQGsuPcygn8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfTquQGsuPcygn8.webp",
    "prepTime": "28",
    "calories": "420",
    "weight": "320",
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The zesty lemon and fresh parsley of the tabbouleh brighten the deep, earthy richness of the slow-cooked fava beans."
        }
      },
      {
        "itemId": "aac2d932-f051-472d-8951-d9f400dc4f07",
        "reason": {
          "ar": "",
          "en": "Sweet Moroccan mint tea offers a refreshing, aromatic herbal contrast to the hearty, savory flavors of the foul."
        }
      }
    ],
    "order": 7
  },
  "daf67786-46b5-445d-973f-cf8748d7e16f": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "تشكيلة أجبان أناضولية",
      "en": "Anatolia Cheese Selection"
    },
    "description": {
      "ar": "مستوحاة من ثقافة الإفطار العريقة في إسطنبول، تجمع هذه المقبّلات المنسّقة بعناية بين مجموعة متنوعة من القوامات والنكهات في تناغم مثالي. من جبن اللور الطازج والرقيق إلى الجبن الأبيض الكريمي، وأصناف الشيدر الغنية والجبن المجدول التقليدي، يقدّم كل صنف طابعه الفريد. يضيف جبن اللور بحبة البركة وجبن المسكت عمقاً ولمسة عطرية رقيقة. يُكمّل هذا التشكيل الغني بالتين المجفف بالشمس والمشمش المجفف والعنب الطازج، متوازناً مع الجوز المقرمش وقطع الخبز المحمّص. تضيف البسكويت المالح طبقة إضافية من القوام، مما يعزز التجربة الشاملة دون أن يطغى على النكهات الطبيعية. مع لمسة من التين على الجانب، تتحوّل هذه المقبّلات إلى تجربة تذوّق متوازنة وراقية ومُرضية. غنية وأنيقة ومثالية للمشاركة.",
      "en": "Inspired by Istanbul's rich breakfast culture, this carefully curated platter brings together a variety of textures and flavors in perfect harmony. From fresh and delicate lor cheese to creamy white cheese, bold cheddar varieties and traditional braided cheese, each selection offers its own unique character. Black cumin-infused lor and musket cheese add depth and a subtle aromatic touch. This rich selection is complemented with sun-dried figs, dried apricots and fresh grapes, balanced with crunchy walnuts and crispy croutons. Savory biscuits add an extra layer of texture, enhancing the overall experience without overpowering the natural flavors. Finished with a touch of fig on the side, this platter turns into a well-balanced, refined and satisfying tasting experience. Rich, elegant and perfect for sharing."
    },
    "price": "78",
    "priceValue": 78,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3CK7ZZk3jSiT8IG.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3CK7ZZk3jSiT8IG.webp",
    "prepTime": "22",
    "calories": "650",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "e8b45db5-b42f-4122-8dfc-59d19bc88045",
        "reason": {
          "ar": "",
          "en": "Sweet honeycomb and rich clotted cream beautifully complement the salty, bold varieties of Anatolian cheeses."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm glass of black tea acts as a gentle palate cleanser between tasting the different complex cheese profiles."
        }
      }
    ],
    "order": 1
  },
  "db22797e-d091-466c-9684-128d3f23dec1": {
    "category": "73e6943f-6fc2-4cf1-9dbc-e84c1aabd41b",
    "name": {
      "ar": "كوكايا",
      "en": "KOKAYA"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "129",
    "priceValue": 129,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4VTuHlClbFtcDXp.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4VTuHlClbFtcDXp.webp",
    "recommendations": [
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "",
          "en": "The bold, intense roasted notes of Turkish coffee ground the sweet, aromatic experience of this premium flavor."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Fresh, juicy fruits provide a hydrating and sweet contrast, enhancing the overall sensory enjoyment."
        }
      }
    ],
    "order": 1
  },
  "59bc51ab-231e-44bc-8588-5bfc00ac5eb0": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "طبق الحلوم بالفخار",
      "en": "Clay Pot Halloumi Delight"
    },
    "description": {
      "ar": "يُقدَّم ساخناً، حيث يُرتَّب جبن الحلوم فوق صلصة الطماطم المميزة من الشيف، ليُشكّل قاعدة غنية ومُشبعة. تُضفي لمسة من البيستو والنعناع الطازج توازناً ونكهة عطرية، بينما تُكمل قطع الخبز المحمّص المقرمشة الطبق بقوامها المتميز. دافئ، عطري ومُرضٍ بعمق.",
      "en": "Served hot, halloumi cheese is layered over the chef's special tomato sauce, creating a rich and satisfying base. A touch of pesto and fresh mint adds balance and aroma, while crispy croutons complete the dish with texture. Warm, aromatic and deeply satisfying."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzg3J0bMb7UaO2vQ.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzg3J0bMb7UaO2vQ.webp",
    "prepTime": "24",
    "calories": "520",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "",
          "en": "Warm, freshly baked tandoori bread is essential for dipping into the rich, herbaceous tomato sauce and melted cheese."
        }
      },
      {
        "itemId": "c3d5aaa1-b279-47a7-b745-dbf27c322d41",
        "reason": {
          "ar": "",
          "en": "The cooling mint yogurt drink soothes the palate from the hot, savory intensity of the clay pot halloumi."
        }
      }
    ],
    "order": 2
  },
  "7244ddca-2718-40e0-90bf-287718182154": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "بيدا إسكندر",
      "en": "Iskender Pide"
    },
    "description": {
      "ar": "عجينة بيدا طازجة تُخبز يوميًا، مغطاة بلحم بقري طري على طريقة إسكندر مع جبنة موزاريلا ذائبة، ومزيّنة بالسمسم وحبة البركة.\nغنية، عصارية، ومشبعة بعمق.",
      "en": "Freshly baked pide dough topped with tender Iskender-style beef and melted mozzarella, finished with sesame and black cumin seeds. Rich, juicy and deeply satisfying."
    },
    "price": "55",
    "priceValue": 55,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3IWjh9Rq86rXNH4.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3IWjh9Rq86rXNH4.webp",
    "prepTime": "30",
    "calories": "780",
    "weight": "350",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "",
          "en": "A classic pairing; the creamy, slightly salty ayran perfectly cuts through the rich, meaty profile of the pide."
        }
      },
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The tangy pomegranate molasses and crunchy walnuts offer a refreshing, acidic contrast to the heavy beef and dough."
        }
      }
    ],
    "order": 6
  },
  "8507dfb1-80d8-4294-a8a6-0efa00e89e86": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "لحم بعجين",
      "en": "Lahmacun"
    },
    "description": {
      "ar": "عجينة رقيقة ومقرمشة تُغطّى بخليط لحم مفروم غني بالنكهة، وتُقدَّم مع بقدونس طازج وشرائح ليمون.\nخفيفة، منعشة، ومليئة بالنكهة.",
      "en": "Thin, crispy dough topped with a flavorful minced meat mixture, served with fresh parsley and lemon on the side. Light, fresh and full of flavor."
    },
    "price": "55",
    "priceValue": 55,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzctJIU4Ldd0ym3y.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzctJIU4Ldd0ym3y.webp",
    "prepTime": "24",
    "calories": "520",
    "weight": "230",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "c3d5aaa1-b279-47a7-b745-dbf27c322d41",
        "reason": {
          "ar": "",
          "en": "Cooling mint ayran is the traditional and perfect antidote to the spiced, savory minced meat of the lahmacun."
        }
      },
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The zesty, parsley-heavy tabbouleh can be eaten alongside or rolled inside the crispy dough for an extra burst of freshness."
        }
      }
    ],
    "order": 7
  },
  "21abfb80-c2e5-413d-9019-5cc3de9121ae": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "حلومي يوناني",
      "en": "Greek Halloumi"
    },
    "description": {
      "ar": "جبن الحلوم المشوي يلتقي بتشكيلة طازجة ونابضة بالحياة من المكونات. طماطم كرزية وخيار وبصل أحمر ومزيج من الزيتون الأخضر والأسود، تجتمع معاً بلمسة من الليمون لإضفاء نكهة منعشة. طبق خفيف ومنعش ومتوازن بشكل مثالي.",
      "en": "Grilled halloumi meets a fresh and vibrant selection of ingredients. Cherry tomatoes, cucumber, red onion, and a mix of green and black olives are brought together with a hint of lemon for brightness. Light, refreshing and perfectly balanced."
    },
    "price": "46",
    "priceValue": 46,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfebpApSvfecFGp.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfebpApSvfecFGp.webp",
    "prepTime": "22",
    "calories": "430",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "770b1ff2-0aef-4f23-8378-ebe37681a842",
        "reason": {
          "ar": "",
          "en": "A hearty, warm lentil soup complements the light, briny freshness of the grilled halloumi salad."
        }
      },
      {
        "itemId": "8fb5c495-bced-405e-8abe-40938f6a2be0",
        "reason": {
          "ar": "",
          "en": "Chilled lemon ice tea enhances the citrus dressing and brightens the salty, savory notes of the Mediterranean cheese."
        }
      }
    ],
    "order": 3
  },
  "0e31b410-7a4f-44cc-be7c-6da715660d4f": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "طبق جبنة بيضاء",
      "en": "White Cheese Plate"
    },
    "description": {
      "ar": "مزيج بسيط وأنيق يُبرز غنى الجبنة البيضاء، يُقدَّم مع مربى الفراولة لتباين لطيف في النكهات، إلى جانب الزعتر العطري وقطع الخبز المحمّص المقرمشة لإضافة ملمس مميز. طبق كلاسيكي متوازن ومترف بهدوء.",
      "en": "A simple yet elegant combination highlighting the richness of white cheese. Paired with strawberry jam for a gentle contrast, and served with aromatic za'atar and crispy croutons for added texture. Classic, balanced and quietly indulgent."
    },
    "price": "36",
    "priceValue": 36,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzVtOQHcjai9W74S.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzVtOQHcjai9W74S.webp",
    "prepTime": "21",
    "calories": "480",
    "weight": "280",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The toasted sesame crust of a fresh simit is ideal for spreading the creamy white cheese and sweet strawberry jam."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm glass of tea washes down the rich dairy, elegantly balancing the sweet jam and savory za'atar notes."
        }
      }
    ],
    "order": 4
  },
  "345500b8-328d-4a72-9269-93c25bf75c1e": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "لحم بعجين على طريقة عنتاب",
      "en": "Antep Lahmacun"
    },
    "description": {
      "ar": "نسخة جريئة وحارة من الكلاسيكي، تُغطّى بخليط لحم مفروم غني، وتُقدَّم مع البقدونس، الليمون، دبس الرمان، الباذنجان المشوي والفلفل الحار.\nحار، غني بالحيوية، وبنكهة عنتاب الأصيلة.",
      "en": "A bold and spiced version of the classic, topped with rich minced meat mixture and served with parsley, lemon, pomegranate molasses, grilled eggplant and chili peppers on the side. Spicy, vibrant and authentically Antep."
    },
    "price": "62",
    "priceValue": 62,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3FuVu493PGIw1bf.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3FuVu493PGIw1bf.webp",
    "prepTime": "26",
    "calories": "590",
    "weight": "260",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.spicy",
        "label": {
          "ar": "حار",
          "en": "Spicy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "dddaadc3-9bae-40fb-b7fd-54adcaa41017",
        "reason": {
          "ar": "",
          "en": "The herbal, cooling basil ayran wonderfully soothes the bold, spicy kick of the Antep-style meat mixture."
        }
      },
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "Crispy bread and tangy sumac dressing in the fattoush salad amplify the vibrant, bold flavors of the spiced flatbread."
        }
      }
    ],
    "order": 8
  },
  "a0e62f70-910c-4ebb-a6af-566d7b1a6cbb": {
    "category": "59ee4ca2-bb09-4a86-981b-fd40460331ea",
    "name": {
      "ar": "جوزلمة السبانخ المنزلية",
      "en": "Handmade Spinach Gozleme"
    },
    "description": {
      "ar": "خيار أخف وأكثر انتعاشًا، محشو بالسبانخ الطازجة ومحضّر بعجين منزلي.\nيُطهى على صاج ساخن ليمنح توازنًا مثاليًا في القوام.\nخفيف، طازج، ومتوازن.",
      "en": "A lighter and more refreshing option, filled with fresh spinach and prepared with handmade dough. Cooked on a hot griddle for a perfectly balanced texture. Light, fresh and authentic."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgIKzkwEwsidIIg.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgIKzkwEwsidIIg.webp",
    "prepTime": "23",
    "calories": "390",
    "weight": "235",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm, slightly bitter glass of traditional tea perfectly cuts through the savory richness of the handmade dough."
        }
      },
      {
        "itemId": "2e68a5de-d7cc-4572-a661-2d967173ca8a",
        "reason": {
          "ar": "",
          "en": "The briny olives and bright lemon dressing provide a vibrant, acidic contrast to the earthy spinach filling."
        }
      }
    ],
    "order": 3
  },
  "a1cf8693-8514-4542-a2b9-e3fd13f86f95": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "قطع الفلافل",
      "en": "Falafel Bites"
    },
    "description": {
      "ar": "طبقة ناعمة من الحمص تعلوها أقراص الفلافل المقرمشة من الخارج والطرية من الداخل. متوازنة مع الطماطم الكرزية والخيار المخلل وأوراق الجرجير الصغيرة، معززة بصلصة الطحينة ولمسة خفيفة من المايونيز. مزيّنة بحبات الرمان ورذاذ من زيت الزيتون. مقرمشة، متوازنة ومليئة بالنكهة في كل قضمة.",
      "en": "A smooth layer of hummus topped with crispy-on-the-outside, soft-on-the-inside falafel. Balanced with cherry tomatoes, pickled cucumber and baby arugula, enhanced with tahini sauce and a light touch of mayonnaise. Finished with pomegranate seeds and a drizzle of olive oil. Crispy, balanced and full of flavor in every bite."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzchAMXG9BGwGkrC.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzchAMXG9BGwGkrC.webp",
    "prepTime": "22",
    "calories": "520",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The fresh parsley and zesty lemon in the tabbouleh beautifully brighten the crispy, earthy profile of the falafel."
        }
      },
      {
        "itemId": "f445e501-a9f9-411f-a223-371b0daeb695",
        "reason": {
          "ar": "",
          "en": "Citrus and mint offer a cooling, refreshing palate cleanser against the rich tahini and fried exterior."
        }
      }
    ],
    "order": 8
  },
  "7704310c-87e1-4d73-a503-a9f32854973c": {
    "category": "59ee4ca2-bb09-4a86-981b-fd40460331ea",
    "name": {
      "ar": "سو بوريك (Su Böreği)",
      "en": "Su Böreği"
    },
    "description": {
      "ar": "طبق تقليدي مفضل يُحضَّر بطبقات من العجين المنزلي، ليمنح قوامًا طريًا وحشوة غنية.\nيُخبز بعناية ويُقدَّم دافئًا ليمنح تجربة مريحة ومشبعة.\nطري، غني، وتقليدي أصيل.",
      "en": "A traditional favorite prepared with layers of handmade dough, offering a soft texture and rich filling. Carefully baked and served warm for a comforting experience."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3FBBhRlOG4KBM2H.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3FBBhRlOG4KBM2H.webp",
    "prepTime": "28",
    "calories": "560",
    "weight": "260",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37",
        "reason": {
          "ar": "",
          "en": "A classic pairing where the astringency of black tea balances the warm, buttery layers of the pastry."
        }
      },
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The tangy pomegranate molasses and crunchy walnuts cut through the comforting, soft richness of the dough."
        }
      }
    ],
    "order": 4
  },
  "1e6a71bd-c035-4e38-a510-413af41596e3": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "بيدا لبنة",
      "en": "Labne Pide"
    },
    "description": {
      "ar": "عجينة بيدا طازجة تُخبز يوميًا، مغطاة بلبنة كريمية وجبنة موزاريلا ذائبة، ومزيّنة بالسمسم وحبة البركة.\nناعمة، كريمية، ومريحة.",
      "en": "Freshly baked pide topped with creamy labneh and melted mozzarella, finished with sesame and black cumin seeds. Soft, creamy and comforting."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Fra9bUKTXwzJK9.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Fra9bUKTXwzJK9.webp",
    "prepTime": "26",
    "calories": "650",
    "weight": "280",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0ad35147-8d8d-49c5-a25c-f574b7e07145",
        "reason": {
          "ar": "",
          "en": "Crisp cucumber and a delicate balsamic glaze provide a refreshing lift to the warm, creamy labneh base."
        }
      },
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "",
          "en": "The bold, roasted notes of authentic Turkish coffee contrast beautifully with the mild, dairy-rich pide."
        }
      }
    ],
    "order": 5
  },
  "67056900-8679-442d-8181-6e283fad3fa1": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "طبق الشيف المميز",
      "en": "Chef's Signature Pan"
    },
    "description": {
      "ar": "طبق مقلاة مميز من المنزل، مُعدّ بطابع متوسطي جريء ونكهات متناسقة بعناية طبقة فوق طبقة. يُقدَّم ساخناً وبرائحة شهية، ليمنحك تجربة غنية ومُرضية تعكس أسلوب الشيف المميز.",
      "en": "A house-special pan dish crafted with bold Mediterranean character and carefully layered flavors. Served hot and aromatic, it delivers a rich, satisfying finish that showcases the chef's signature style."
    },
    "price": "52",
    "priceValue": 52,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VImmn7NjoLusBnLs7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VImmn7NjoLusBnLs7.webp",
    "prepTime": "28",
    "calories": "640",
    "weight": "380",
    "dietaryLabels": [
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "",
          "en": "Warm, freshly baked bread is essential for soaking up the deeply layered, aromatic sauces of the pan dish."
        }
      },
      {
        "itemId": "c3d5aaa1-b279-47a7-b745-dbf27c322d41",
        "reason": {
          "ar": "",
          "en": "A cooling, mint-infused yogurt drink soothes the palate after the bold, hot Mediterranean spices."
        }
      }
    ],
    "order": 11
  },
  "6377546c-aff4-488d-ac30-ad27245054db": {
    "category": "1290e96c-f491-4a64-8e9e-61f0df6a85c7",
    "name": {
      "ar": "مستر فرنش فرايز",
      "en": "Mr. French Fries"
    },
    "description": {
      "ar": "بطاطس مقلية مقرمشة كلاسيكية تُقدَّم مع الكاتشب والمايونيز، وتُختتم بلمسة من بهارات الكاجون لإضافة طابع جريء.\nكلاسيكية، مقرمشة، بلمسة عصرية مميزة.",
      "en": "Classic crispy fries served with ketchup and mayonnaise, finished with a touch of Cajun spices for a bold twist. Classic, crispy with a modern kick."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2ISqLC7597Hx3vl.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2ISqLC7597Hx3vl.webp",
    "prepTime": "20",
    "calories": "390",
    "weight": "220",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "c19b4ad7-9dd2-495c-9fcf-9ca0a81fba63",
        "reason": {
          "ar": "",
          "en": "Juicy, savory meatballs make a classic, hearty companion to golden, crispy fries."
        }
      },
      {
        "itemId": "b1268bb2-150f-4ca7-afb5-f2fa21507da5",
        "reason": {
          "ar": "",
          "en": "A tart and fruity mixed berry lemonade washes away the salty, starchy richness of the potatoes."
        }
      }
    ],
    "order": 4
  },
  "9feba6b0-1a71-49f8-a312-7740b923b8f1": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "طبق الزيتون",
      "en": "Olive Plate"
    },
    "description": {
      "ar": "تشكيلة مستوحاة من المطبخ المتوسطي حيث يجتمع الزيتون الأخضر والأسود مع الأعشاب الطازجة ولمسات موسمية. تُمزج حبات الطماطم الكرزية مع الخضراوات المتوسطية ورشة من زيت الزيتون، معززة بالزعتر ورقائق الفلفل الحار ولمسة من الفلفل الحريف. تُقدّم مع قطع الخبز المحمّص المقرمشة. طبق طازج وعطري ومفعم بطابع البحر الأبيض المتوسط.",
      "en": "A Mediterranean-inspired selection where green and black olives are paired with fresh herbs and seasonal touches. Cherry tomatoes and Mediterranean greens are brought together with a drizzle of olive oil, enhanced with thyme, chili flakes and a hint of chili pepper. Served with crispy croutons. Fresh, aromatic and full of Mediterranean character."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGza8DMX2yCOwfxKT.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGza8DMX2yCOwfxKT.webp",
    "prepTime": "20",
    "calories": "360",
    "weight": "260",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "aa0cfbca-91ae-4fb7-97ef-4fc420523a51",
        "reason": {
          "ar": "",
          "en": "Spiced flatbread acts as the perfect aromatic vessel for the briny, herby Mediterranean olives."
        }
      },
      {
        "itemId": "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5",
        "reason": {
          "ar": "",
          "en": "Smoky, smooth roasted eggplant dip creates a rich textural contrast to the firm, salty bite of the olives."
        }
      }
    ],
    "order": 5
  },
  "1f431c8a-b272-4a9f-8377-758fd9a0781d": {
    "category": "1290e96c-f491-4a64-8e9e-61f0df6a85c7",
    "name": {
      "ar": "بطاطس حارة",
      "en": "Volcano Potatoes"
    },
    "description": {
      "ar": "بطاطس مقرمشة متبلة بالفلفل الحار، متوازنة مع الليمون والبقدونس الطازج. تُقدم مع صلصة طماطم خفيفة تعزز النكهة الغنية. طبق حار ومنعش.",
      "en": "Crispy potatoes infused with chili, balanced with lemon and fresh parsley. Served with a light tomato sauce that enhances the overall flavor. Spicy and refreshing."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Dv5EpJm919rkff.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Dv5EpJm919rkff.webp",
    "prepTime": "24",
    "calories": "430",
    "weight": "240",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "spicinessLevels.verySpicy",
        "label": {
          "ar": "حار جدًا",
          "en": "Very Spicy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "11128019-e4f1-4d2d-9665-4a8731a68b77",
        "reason": {
          "ar": "",
          "en": "Tender grilled chicken provides a savory, smoky anchor to balance the sharp chili heat of the potatoes."
        }
      },
      {
        "itemId": "3139c3c3-4c00-4286-b4f1-01dab882d635",
        "reason": {
          "ar": "",
          "en": "Crisp cucumber and chilled yogurt offer immediate cooling relief from the spicy, zesty potato dish."
        }
      }
    ],
    "order": 3
  },
  "223a7d36-eb74-4e6b-a01c-b7ff0b0c696b": {
    "category": "1290e96c-f491-4a64-8e9e-61f0df6a85c7",
    "name": {
      "ar": "بطاطس أبلا",
      "en": "Abla Potatoes"
    },
    "description": {
      "ar": "محضّرة بعناية في مطبخنا، هذه البطاطا الذهبية المقرمشة متبّلة بأعشاب عطرية تشمل الزعتر والنعناع والزعتر البري. طبق بسيط غني بالنكهة يعكس دفء الطبخ المنزلي. طازجة التحضير، مقرمشة ومليئة بالنكهة المريحة.",
      "en": "Prepared in-house with care, these golden, crispy potatoes are seasoned with aromatic herbs including za'atar, mint and thyme. A simple yet flavorful dish that highlights the warmth of homemade cooking. Freshly made, crispy and full of comforting flavor."
    },
    "price": "36",
    "priceValue": 36,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTvZzGXqrIloxsj.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTvZzGXqrIloxsj.webp",
    "prepTime": "24",
    "calories": "420",
    "weight": "250",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "",
          "en": "A crisp, creamy salad lightens the meal, balancing the dry, aromatic herb seasoning of the golden potatoes."
        }
      },
      {
        "itemId": "20fa5e31-1a88-4e58-b9d5-ed4f4d32e3ac",
        "reason": {
          "ar": "",
          "en": "A vibrant blend of fresh apple, orange, and carrot juices refreshes the palate after the starchy, comforting side."
        }
      }
    ],
    "order": 1
  },
  "2e68a5de-d7cc-4572-a661-2d967173ca8a": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "سلطة الزيتون المتوسطية",
      "en": "Mediterranean Olive Salad"
    },
    "description": {
      "ar": "طبق نابض بالحياة مستوحى من المطبخ المتوسطي، حيث يلتقي الزيتون الأخضر والأسود مع الخضراوات الطازجة والفلفل الملوّن. تضيف حبّات الرمان لمسة من الحلاوة الرقيقة، بينما يمنح الليمون وزيت الزيتون إشراقة ونضارة مميزة للطبق. طازج، نابض بالحياة وغني بطابع البحر الأبيض المتوسط.",
      "en": "A vibrant Mediterranean-inspired dish where green and black olives meet fresh greens and colorful peppers. Pomegranate seeds add a subtle sweetness while lemon and olive oil bring brightness and freshness to the plate. Fresh, vibrant and full of Mediterranean character."
    },
    "price": "36",
    "priceValue": 36,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3DZWggBpOtGmcAk.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3DZWggBpOtGmcAk.webp",
    "prepTime": "20",
    "calories": "260",
    "weight": "180",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "21abfb80-c2e5-413d-9019-5cc3de9121ae",
        "reason": {
          "ar": "",
          "en": "Warm, salty grilled halloumi elevates the fresh greens and bright lemon dressing of the salad."
        }
      },
      {
        "itemId": "61fc7728-4ccf-4745-a8af-9bc19f408038",
        "reason": {
          "ar": "",
          "en": "Tart, vibrant fruit juice echoes and enhances the subtle sweetness of the pomegranate seeds in the dish."
        }
      }
    ],
    "order": 9
  },
  "6fde2138-e768-45e9-a3f0-86db68dc66bb": {
    "category": "1290e96c-f491-4a64-8e9e-61f0df6a85c7",
    "name": {
      "ar": "سلطة البطاطس",
      "en": "Potato Salad"
    },
    "description": {
      "ar": "تشكيلة طازجة ومتوازنة من البطاطس المسلوقة والبيض، ممزوجة مع الطماطم والبصل والأعشاب الطازجة.\nتُعزَّز بالنعناع ورقائق الفلفل الحار والكمون، وتُختتم بدبس الرمان وزيت الزيتون لنكهة غنية ولمسة حامضية خفيفة.",
      "en": "A fresh and well-balanced combination of boiled potatoes and eggs, mixed with tomatoes, onions and fresh herbs. Enhanced with mint, chili flakes and cumin, then finished with pomegranate molasses and olive oil for a rich and slightly tangy flavor. Refreshing, aromatic and full of character."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3E5Fa1Q2fns06Mf.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3E5Fa1Q2fns06Mf.webp",
    "prepTime": "22",
    "calories": "350",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "7b7c1ef3-04bd-4968-b1eb-2aad83376751",
        "reason": {
          "ar": "",
          "en": "The tangy, cumin-spiced potato salad perfectly complements the smoky, rich flavors of the grilled meat."
        }
      },
      {
        "itemId": "37eceeb2-a6ef-475e-b5a2-1024ae622a41",
        "reason": {
          "ar": "",
          "en": "A crisp, citrusy lemonade lifts the heavy, starchy, and egg-rich texture of the salad."
        }
      }
    ],
    "order": 6
  },
  "3178ac05-fef6-43ce-a897-ea01df50a79f": {
    "category": "1290e96c-f491-4a64-8e9e-61f0df6a85c7",
    "name": {
      "ar": "كروكيت البطاطس",
      "en": "Potato Croquettes"
    },
    "description": {
      "ar": "مقرمشة من الخارج وهشة من الداخل، تمنحك مذاقاً رائعاً في كل قضمة. تُقدم كروكيت البطاطس الذهبية مع الكاتشب والمايونيز لتجربة كلاسيكية متكاملة. وجبة مقرمشة، دافئة، ومثالية في أي وقت.",
      "en": "Crispy on the outside and soft on the inside, a satisfying bite in every piece. These golden croquettes are served with ketchup and mayonnaise for a classic pairing. Crispy, comforting, and perfect anytime"
    },
    "price": "37",
    "priceValue": 37,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgSidsLiVI3nNEV.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgSidsLiVI3nNEV.webp",
    "prepTime": "26",
    "calories": "480",
    "weight": "230",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "863eb485-f580-4975-81ac-bf2467106519",
        "reason": {
          "ar": "",
          "en": "Cheesy meatballs paired with these golden croquettes create an ultimate comforting, savory experience."
        }
      },
      {
        "itemId": "f5811822-3742-48c0-98f6-fb27bdcf2c49",
        "reason": {
          "ar": "",
          "en": "Tangy passion fruit and mint cut cleanly through the deep-fried, starchy crust of the croquettes."
        }
      }
    ],
    "order": 5
  },
  "fb3c796f-b84e-469b-96ec-01b9b6f01018": {
    "category": "cf0cfebf-b9de-4221-85e6-9513ddd57809",
    "name": {
      "ar": "لفائف الجبن المقرمشة",
      "en": "Crispy Cheese Rolls"
    },
    "description": {
      "ar": "مقلية حتى تكتسب لونًا ذهبيًا، مقرمشة من الخارج وناعمة من الداخل، هذه الرولات التقليدية (لفائف الجبن المقرمشة) تمنح لقمة دافئة ومريحة في كل قطعة.\nتُقدَّم مع الخس، حبّات الرمان وشرائح الليمون.\nمقرمشة، خفيفة، وكلاسيكية لا تفقد رونقها.",
      "en": "Golden-fried, crispy on the outside and soft on the inside, these traditional sigara börek rolls offer a comforting bite in every piece. Served with lettuce, pomegranate and lemon. Crispy, light and a timeless classic."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzjEYVBPvpZDUHc7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzjEYVBPvpZDUHc7.webp",
    "prepTime": "24",
    "calories": "540",
    "weight": "260",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "770b1ff2-0aef-4f23-8378-ebe37681a842",
        "reason": {
          "ar": "",
          "en": "Dipping these crunchy, cheesy rolls into a warm, earthy lentil soup provides wonderful textural contrast."
        }
      },
      {
        "itemId": "6bc0f672-b25d-41cb-9bc3-a64e65307cda",
        "reason": {
          "ar": "",
          "en": "A sweet, cold iced tea refreshes the palate beautifully after enjoying the rich, warm cheese filling."
        }
      }
    ],
    "order": 10
  },
  "e406d9c9-0993-4a1c-875a-dfda98e2fadb": {
    "category": "1290e96c-f491-4a64-8e9e-61f0df6a85c7",
    "name": {
      "ar": "بطاطس على طريقة مرسين",
      "en": "Mersin Style Potatoes"
    },
    "description": {
      "ar": "لمسة جريئة وغنية بالنكهات مستوحاة من مطبخ مرسين... بطاطس مقرمشة مغطاة بالثوم والبقدونس الطازج والصلصات الغنية، مع لمسة حارة تمنحها عمقاً إضافياً. طبق جريء، لذيذ، ومفعم بالنكهات.",
      "en": "A bold and flavorful twist inspired by Mersin cuisine… Crispy potatoes tossed with garlic, fresh parsley, and rich sauces, finished with a spicy touch for added depth. Bold, savory, and full of flavor."
    },
    "price": "34",
    "priceValue": 34,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzdDsUFfBdcACmv8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzdDsUFfBdcACmv8.webp",
    "prepTime": "25",
    "calories": "460",
    "weight": "260",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "spicinessLevels.spicy",
        "label": {
          "ar": "حار",
          "en": "Spicy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "4034fed6-3ad9-4bdf-9540-0bf6b1c9e9b2",
        "reason": {
          "ar": "",
          "en": "The smoky eggplant and creamy yogurt base of Ali Nazik mellows the bold, garlicky spice of the potatoes."
        }
      },
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "",
          "en": "A traditional, salty yogurt drink acts as the perfect cooling antidote to the spicy depth of Mersin cuisine."
        }
      }
    ],
    "order": 2
  },
  "3262e454-3663-494e-8101-84075fd63442": {
    "category": "f3eb9103-7c6f-42d9-8305-bf75c336de6c",
    "name": {
      "ar": "مانتي أبلا اليدوي",
      "en": "Abla's Handmade Manti"
    },
    "description": {
      "ar": "فطائر تركية تقليدية تُحضّره ابلا بعجينة تُفرد يدويًا وحشوة غنية من اللحم المفروم، حيث تُطوى كل قطعة بعناية فائقة واحدة تلو الأخرى.\nيُقدَّم مع الزبادي، اللبنة، صلصة الطماطم الدافئة والزبدة المذابة، ويُختتم برقائق الفلفل والنعناع المجفف.\nصُنع بحرفية… وغني بالتفاصيل في كل لقمة.",
      "en": "Traditional Turkish dumplings prepared by Gülseren with hand-rolled dough and a rich minced meat filling, each piece carefully folded one by one. Served with yogurt, labneh, warm tomato sauce and melted butter, finished with chili flakes and dried mint."
    },
    "price": "58",
    "priceValue": 58,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzahj6eFBQJTzMLx.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzahj6eFBQJTzMLx.webp",
    "prepTime": "30",
    "calories": "650",
    "weight": "350",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The sharp acidity and walnut crunch of the salad slice through the rich garlic yogurt and butter sauce."
        }
      },
      {
        "itemId": "1cb9d1b5-6d8f-493f-be1b-e57d084f065d",
        "reason": {
          "ar": "",
          "en": "Floral and tart notes from the iced tea cleanse the palate between bites of the heavy, meat-filled dumplings."
        }
      }
    ],
    "order": 1
  },
  "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "تريليتشا",
      "en": "Trilece"
    },
    "description": {
      "ar": "كيكة الحليب الطرية بنكهة الفانيليا، مغطاة بصوص الكراميل الغني لتجربة تحلية ناعمة وفاخرة.",
      "en": "Soft milk cake infused with vanilla and finished with rich caramel sauce for a smooth and indulgent dessert experience."
    },
    "price": "49",
    "priceValue": 49,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH46LawRkqmA3xWrf.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH46LawRkqmA3xWrf.webp",
    "recommendations": [
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "توازن مرارة القهوة التركية الأصيلة المحمصة بعمق غنى حلاوة التريليتشا الغنية بالحليب بشكل مثالي.",
          "en": "The deep, roasted bitterness of authentic Turkish coffee perfectly offsets the sweet, milky richness of the Traliçe."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "كوب دافئ من الشاي التركي بنكهته الغنية يطهر الحنك بشكل رائع بعد هذه الحلوى الكريمية الفاخرة.",
          "en": "A warm, slightly astringent glass of Turkish tea cleanses the palate wonderfully after this decadent, creamy dessert."
        }
      }
    ],
    "order": 3
  },
  "9bdb2b3e-9591-4fd4-8860-a67c47440f04": {
    "category": "f3eb9103-7c6f-42d9-8305-bf75c336de6c",
    "name": {
      "ar": "كبة",
      "en": "Kubba"
    },
    "description": {
      "ar": "غلاف من البرغل مُشكّل بعناية، محشو بخليط غني من اللحم المفروم ومُعزّز بطبقة لحم من الخارج، يُحضّر يدويًا وفق الأساليب التقليدية.\nيُقدَّم مع الزبادي ودبس الرمان لتوازن مثالي في النكهة.\nغنية بعمق… مصنوعة بحرفية وأصالة حقيقية.",
      "en": "Finely shaped bulgur shell, filled with a rich minced meat mixture and enriched with meat on the outside, carefully handcrafted using traditional techniques. Served with yogurt and pomegranate molasses for a perfectly balanced finish. Deeply rich, handcrafted and truly traditional."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgXHMY56Tflqaac.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgXHMY56Tflqaac.webp",
    "prepTime": "32",
    "calories": "620",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The high acidity and fresh herbs of the salad perfectly balance the deep-fried, meaty bulgur shell."
        }
      },
      {
        "itemId": "c3d5aaa1-b279-47a7-b745-dbf27c322d41",
        "reason": {
          "ar": "",
          "en": "Cooling yogurt and mint provide a refreshing contrast to the rich, spiced minced meat filling."
        }
      }
    ],
    "order": 2
  },
  "ab194150-c362-49bc-8e2e-505915940ea4": {
    "category": "81d3c1d4-b82c-4ea3-8a9d-881977f47761",
    "name": {
      "ar": "سلطة التبولة",
      "en": "Tabbouleh Salad"
    },
    "description": {
      "ar": "بقدونس طازج مفروم ناعم يُمزج مع طماطم عصيّة وبرغل ناعم، ويُتوازن مع حبّات الرمان، عصير الليمون الطازج وزيت الزيتون البكر الممتاز، لختام منعش ومشرق.\nطازجة، منعشة، وخفيفة لا تُقاوم.",
      "en": "Finely chopped fresh parsley blended with juicy tomatoes and fine bulgur... Balanced with pomegranate seeds, fresh lemon juice and extra virgin olive oil for a vibrant finish- Fresh, zesty and irresistibly light."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2KFwQiInrbakRhL.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2KFwQiInrbakRhL.webp",
    "prepTime": "22",
    "calories": "240",
    "weight": "220",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.shellfishFree",
        "label": {
          "ar": "خالٍ من المحار",
          "en": "Shellfish-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "8654a6b2-3bcf-436f-8342-9f2cc02ce739",
        "reason": {
          "ar": "",
          "en": "This zesty, light parsley salad acts as the ultimate palate cleanser alongside heavy, smoky grilled meats."
        }
      },
      {
        "itemId": "0d0da313-976b-4f5b-97ae-ac4c151f55df",
        "reason": {
          "ar": "",
          "en": "Creamy hummus provides a smooth, earthy base that complements the sharp, citrus-heavy notes of the salad."
        }
      }
    ],
    "order": 1
  },
  "15420618-d1b3-4364-aff0-dd2102f944e3": {
    "category": "81d3c1d4-b82c-4ea3-8a9d-881977f47761",
    "name": {
      "ar": "سلطة الفتوش",
      "en": "Fattoush Salad"
    },
    "description": {
      "ar": "مزيج منعش من الخس المقرمش، الطماطم، الخيار والفجل، يُختتم بحبّات الرمان، دبس الرمان، عصير الليمون وقطع الخبز المحمّص المقرمشة.\nمقرمشة، منعشة، ومليئة بالحيوية.",
      "en": "A refreshing mix of crisp lettuce, tomatoes, cucumber and radish... Finished with pomegranate seeds, pomegranate molasses, lemon and crunchy toasted bread pieces. Crispy, tangy and refreshingly vibrant."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzaHOHUZ6ke0o0Bn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzaHOHUZ6ke0o0Bn.webp",
    "prepTime": "23",
    "calories": "280",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.shellfishFree",
        "label": {
          "ar": "خالٍ من المحار",
          "en": "Shellfish-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "1e52139d-46ca-4414-a1f6-88a288dfe687",
        "reason": {
          "ar": "",
          "en": "The tangy crunch of the salad offsets the warm, slow-cooked richness of the chicken stew."
        }
      },
      {
        "itemId": "2b2ae56f-a3cf-4b9e-a197-5e29707e04c7",
        "reason": {
          "ar": "",
          "en": "Smoky, creamy eggplant pairs beautifully with the crisp lettuce and toasted bread pieces."
        }
      }
    ],
    "order": 3
  },
  "9e2677e4-b7fa-476a-8a1b-8996bce6c734": {
    "category": "ab88f484-c88f-49fb-905f-d13cbb35dc76",
    "name": {
      "ar": "بيتزا خضروات",
      "en": "Vegetarian Pizza"
    },
    "description": {
      "ar": "هذه البيتزا النباتية غنية بالخضروات الطازجة، وصلصة الطماطم الغنية، والجبنة الذائبة، مما يمنحكم نكهة حيوية ومشبعة.",
      "en": "Loaded with fresh vegetables, rich tomato sauce, and melted cheese, this vegetarian pizza delivers a vibrant and satisfying flavor."
    },
    "price": "55",
    "priceValue": 55,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH41KIF0SkmkjOSOY.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH41KIF0SkmkjOSOY.webp",
    "recommendations": [
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "تضفي حبات الجوز المجروش ودبس الرمان الحامض في سلطة \"غافورداغي\" تبايناً قوياً ومقرمشاً يكمل روعة البيتزا الهشة والغنية بالجبن.",
          "en": "The crushed walnuts and tart pomegranate molasses of the Gavurdagi salad provide a bold, crunchy contrast to the soft, cheesy pizza."
        }
      },
      {
        "itemId": "07de0c88-200d-4732-929e-e8c98a0faedd",
        "reason": {
          "ar": "موهيتو كلاسيكي بارد ومنعش يكسر حدة غنى العجينة والجبنة الذائبة في بيتزا الخضروات.",
          "en": "A crisp, cooling classic mojito cuts right through the rich dough and melted cheese of the vegetarian pizza."
        }
      }
    ],
    "order": 2
  },
  "8712070b-6f24-4f60-bbc4-50d45db96a8f": {
    "category": "f3eb9103-7c6f-42d9-8305-bf75c336de6c",
    "name": {
      "ar": "حمص كلاسيكي باللحمة",
      "en": "Classic Hummus With Meat"
    },
    "description": {
      "ar": "حمص كريمي مغطى بقطع لحم بقر تندرلوين طرية، بقدونس طازج، ولمسة من السماق لنكهة غنية ومشبعة.",
      "en": "Creamy hummus topped with tender beef tenderloin, fresh parsley, and a touch of sumac for a rich and satisfying flavor."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3I5sj0OrFN80rXh.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3I5sj0OrFN80rXh.webp",
    "prepTime": "24",
    "calories": "540",
    "weight": "280",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "إن الخبز الدافئ والطازج ضروري للاستمتاع بكل ذرة من الحمص الناعم واللحم البقري الطري.",
          "en": "Warm, freshly baked bread is essential to scoop up every bit of the silky hummus and tender beef."
        }
      },
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "تضفي قطع الخبز المقرمشة وتتبيلة الرمان الحامضة لمسة من الحيوية تعزز نكهة الحمص الغنية باللحم.",
          "en": "The crispy bread pieces and tangy pomegranate dressing brighten the rich, meaty profile of the hummus."
        }
      }
    ],
    "order": 3
  },
  "6969f27d-684c-4725-9257-5e69733bc382": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "بيدا زعتر",
      "en": "Zahtar Pide"
    },
    "description": {
      "ar": "طبق تقليدي محبوب، يُحضَّر بعجينة بيدا طازجة ويُغطّى بزعتر عطري غني.\nخفيف، بنكهة مميزة، وأصيل.",
      "en": "A traditional favorite topped with aromatic za'atar over freshly baked pide dough. Light, fragrant and authentic."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzcRmf2XS2uCxAmx.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzcRmf2XS2uCxAmx.webp",
    "prepTime": "22",
    "calories": "520",
    "weight": "280",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "7ebbea3f-cc18-4eb1-ab8d-0e9c1dd6feef",
        "reason": {
          "ar": "",
          "en": "Creamy, cooling labneh is the classic, perfect spread to balance the aromatic, herbal za'atar bread."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm, slightly bitter glass of tea perfectly washes down the earthy, savory flavors of the pide."
        }
      }
    ],
    "order": 4
  },
  "770b1ff2-0aef-4f23-8378-ebe37681a842": {
    "category": "c0a5b81c-a849-43c6-994d-e4a41c842182",
    "name": {
      "ar": "شوربة العدس",
      "en": "Lentil Soup"
    },
    "description": {
      "ar": "طبق كلاسيكي  يُحضَّر ببطء بعناية باستخدام خضروات طازجة وأساليب تقليدية. يُقدَّم بدفء المنزل مع خبز محمّص وشرائح ليمون.",
      "en": "A timeless classic, slowly cooked with care using fresh vegetables and traditional methods. Prepared with the warmth of home and served with croutons and lemon. Comforting, hearty and made with a mother's touch."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzaxEIaiyCUkDyRI.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzaxEIaiyCUkDyRI.webp",
    "prepTime": "18",
    "calories": "220",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "8507dfb1-80d8-4294-a8a6-0efa00e89e86",
        "reason": {
          "ar": "",
          "en": "The crisp and savory crust of the Lahmacun provides a wonderful textural contrast to the smooth, hearty warmth of the lentil soup."
        }
      },
      {
        "itemId": "b1268bb2-150f-4ca7-afb5-f2fa21507da5",
        "reason": {
          "ar": "",
          "en": "The bright acidity and vibrant fruitiness of this mixberry lemonade effortlessly cut through the earthy richness of the lentils."
        }
      }
    ],
    "order": 1
  },
  "6e5d42ab-cdfc-45c8-968c-e0c660f048ae": {
    "category": "c0a5b81c-a849-43c6-994d-e4a41c842182",
    "name": {
      "ar": "شوربة الدجاج بالكريمة",
      "en": "Creamy Chicken Soup"
    },
    "description": {
      "ar": "صدر دجاج طري يُطهى بلطف مع الكريمة والزبدة، ويُختتم بلمسة خفيفة من النعناع. تُحضَّر بعناية ودفء يشبه الوصفات المنزلية.\nغنية، ناعمة، وتبعث على الدفء.",
      "en": "Tender chicken breast gently cooked with cream and butter, finished with a hint of mint. Prepared with the same care and warmth as a homemade recipe. Rich, smooth and soul-warming."
    },
    "price": "36",
    "priceValue": 36,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzY1E24MtjZe5ryd.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzY1E24MtjZe5ryd.webp",
    "prepTime": "20",
    "calories": "320",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "The crunchy toasted bread and zesty pomegranate molasses in the Fattoush salad perfectly balance the rich, buttery smoothness of the chicken soup."
        }
      },
      {
        "itemId": "37eceeb2-a6ef-475e-b5a2-1024ae622a41",
        "reason": {
          "ar": "",
          "en": "A handcrafted Turkish lemonade offers a clean, citrusy lift that refreshes the palate after enjoying a creamy, soul-warming bowl."
        }
      }
    ],
    "order": 2
  },
  "b0a22f0e-f19c-4985-8311-0badb4f2a692": {
    "category": "c0a5b81c-a849-43c6-994d-e4a41c842182",
    "name": {
      "ar": "شوربة الخضار",
      "en": "Vegetable Soup"
    },
    "description": {
      "ar": "مزيج غني من الخضروات الطازجة يُطهى على مهل لإبراز نكهاتها الطبيعية، ويُقدَّم مع خبز محمّص وشرائح ليمون لتوازن مثالي.\nخفيفة، صحية، ومحضّرة بعناية.",
      "en": "A nourishing blend of fresh vegetables, slowly simmered to bring out natural flavors. Served with croutons and lemon for a balanced touch. Light, wholesome and made with care."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbVCOBlLNuM45pC.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbVCOBlLNuM45pC.webp",
    "prepTime": "18",
    "calories": "180",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "c19b4ad7-9dd2-495c-9fcf-9ca0a81fba63",
        "reason": {
          "ar": "",
          "en": "Juicy, traditional butcher meatballs add a satisfying, savory protein layer to complement the light and wholesome vegetable soup."
        }
      },
      {
        "itemId": "8d7b9a9c-9f0f-44d2-bd06-3b5a69272490",
        "reason": {
          "ar": "",
          "en": "The delicate mint and lemon notes of the green tea maintain the clean, nourishing profile of the vegetable soup."
        }
      }
    ],
    "order": 3
  },
  "0ad35147-8d8d-49c5-a25c-f574b7e07145": {
    "category": "81d3c1d4-b82c-4ea3-8a9d-881977f47761",
    "name": {
      "ar": "سلطة نسيم إيجه",
      "en": "Ege Breeze Salad"
    },
    "description": {
      "ar": "خيار طازج، طماطم كرزية، بصل أحمر وجرجير صغير، تُزيَّن بجبنة بيضاء طرية، وزيت زيتون بكر ممتاز ولمسة خفيفة من صلصة البلسميك.\nخفيفة، أنيقة، ومنعشة بشكل لا يُقاوم.",
      "en": "Fresh cucumber, cherry tomatoes, red onion and baby arugula... Topped with soft white cheese, extra virgin olive oil and a delicate balsamic glaze. Light, elegant and irresistibly fresh."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3G6RjhjwcnNRAbd.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3G6RjhjwcnNRAbd.webp",
    "prepTime": "22",
    "calories": "300",
    "weight": "230",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.shellfishFree",
        "label": {
          "ar": "خالٍ من المحار",
          "en": "Shellfish-Free"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "c19b4ad7-9dd2-495c-9fcf-9ca0a81fba63",
        "reason": {
          "ar": "",
          "en": "The rich, savory bite of the meatballs creates a perfect harmony when paired with the elegant, fresh crunch of the Ege greens."
        }
      },
      {
        "itemId": "37eceeb2-a6ef-475e-b5a2-1024ae622a41",
        "reason": {
          "ar": "",
          "en": "The zesty lemon and mint notes beautifully enhance the delicate balsamic glaze and fresh cucumbers in the salad."
        }
      }
    ],
    "order": 4
  },
  "ead80465-de52-4268-ad38-30e2db704684": {
    "category": "641057a2-0237-4c4b-ab55-bf923ae06cc8",
    "name": {
      "ar": "بيدا لبنة وزعتر",
      "en": "Labne Zahter Pide"
    },
    "description": {
      "ar": "عجينة بيدا طرية تُغطّى بطبقة من اللبنة الكريمية، مع الزعتر العطري وجبنة الموزاريلا، وتُختتم بلمسة من السمسم.\nكريمية، عشبية، وغنية بالنكهة.",
      "en": "Soft pide dough layered with creamy labneh, aromatic za'atar, mozzarella cheese and finished with sesame seeds. Creamy, herbal and full of flavor."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzcpImaufFgEJVPz.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzcpImaufFgEJVPz.webp",
    "prepTime": "24",
    "calories": "690",
    "weight": "330",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The bright lemon and fresh parsley in the Tabbouleh salad elevate the herbal, earthy notes of the za'atar on the pide."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A classic glass of Turkish tea is the ultimate companion to warm, freshly baked dough and creamy labneh."
        }
      }
    ],
    "order": 3
  },
  "83979ed6-5b12-4aca-8a70-3f44ed9c61f5": {
    "category": "7d087dc8-d4fa-4eb3-a017-f8a203431d2c",
    "name": {
      "ar": "نول جرادوس",
      "en": "NOL GRADUS"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TZOJ5EIUHonNxk.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TZOJ5EIUHonNxk.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm, comforting glass of Turkish tea is perfect to sip slowly alongside your premium experience."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "A fresh fruit plate adds a juicy, naturally sweet contrast to relax and cleanse the palate."
        }
      }
    ],
    "order": 3
  },
  "7920a33a-ab56-49af-8a0b-1528186ae540": {
    "category": "73e6943f-6fc2-4cf1-9dbc-e84c1aabd41b",
    "name": {
      "ar": "أنيما",
      "en": "ANIMA"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "129",
    "priceValue": 129,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/category-0VH4V9NOSR44DyE7KF.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/category-0VH4V9NOSR44DyE7KF.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "Enhance your relaxing moment with the smooth, classic warmth of freshly brewed Turkish tea."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Crisp, seasonal fruits provide a refreshing and light bite to accompany this item."
        }
      }
    ],
    "order": 2
  },
  "6a4e2138-f0c4-4256-9cea-15d934a870d4": {
    "category": "ab88f484-c88f-49fb-905f-d13cbb35dc76",
    "name": {
      "ar": "بيتزا بيبيروني",
      "en": "Pepperoni Pizza"
    },
    "description": {
      "ar": "تُغطى هذه البيتزا بقطع الببروني الحارة، وصلصة الطماطم الغنية، والجبنة الذائبة، لتقدم لك نكهة قوية ومشبعة في كل قطعة.",
      "en": "Topped with spicy pepperoni, rich tomato sauce, and melted cheese, this pizza delivers a bold and satisfying flavor in every slice."
    },
    "price": "65",
    "priceValue": 65,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH41T3uEvUkcqezgT.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH41T3uEvUkcqezgT.webp",
    "recommendations": [
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "يضفي الخس المقرمش مع التتبيلة الغنية لسلطة السيزر تبايناً منعشاً يوازن نكهة الببروني القوية والدهنية.",
          "en": "The crisp lettuce and creamy dressing of a Caesar salad offer a refreshing contrast to the spicy, oily richness of pepperoni."
        }
      },
      {
        "itemId": "04e64d7b-d691-48ee-9b7a-a2f978c3e09e",
        "reason": {
          "ar": "إن فوران البيرة الباردة المنعش يطهر الحنك ببراعة بين لقمات الجبن الشهي واللحوم المقددة.",
          "en": "The lively carbonation of a cold beer cleanses the palate perfectly between bites of savory cheese and cured meat."
        }
      }
    ],
    "order": 3
  },
  "a8328686-ad57-4c46-87d2-8ff5da769a72": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "كنافة تركية",
      "en": "Turkish Künefe"
    },
    "description": {
      "ar": "كنافة تركية ذهبية مقرمشة محشوة بالجبنة الذائبة، تقدم مع الآيس كريم التقليدي والفستق الحلبي المطحون لتجربة تحلية تركية غنية.",
      "en": "Crispy golden Turkish künefe filled with melted cheese, served with traditional ice cream and crushed pistachios for a rich Turkish dessert experience."
    },
    "price": "54",
    "priceValue": 54,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH46lMTCnDoK3KVN0.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH46lMTCnDoK3KVN0.webp",
    "recommendations": [
      {
        "itemId": "b2c06ac0-7dca-4369-9e91-db4e960db825",
        "reason": {
          "ar": "تعمل مرارة القهوة التركية المحمصة والقوية كعنصر توازن مثالي مع القطر الحلو وجبن الكنافة الغني.",
          "en": "The bold, roasted bitterness of Turkish coffee acts as the perfect counterpoint to the sweet syrup and rich cheese of the künefe."
        }
      },
      {
        "itemId": "47dbca7a-682e-443c-99bc-01dd2bb4adfc",
        "reason": {
          "ar": "إن إضافة جانب من القشطة التركية الأصلية يمنحك طبقة كريمية فاخرة تضفي روعة فورية على هذا الحلى الدافئ والمقرمش.",
          "en": "Adding a side of authentic Turkish Kaymak brings a creamy, luxurious layer that instantly elevates the warm, crispy dessert."
        }
      }
    ],
    "order": 4
  },
  "8654a6b2-3bcf-436f-8342-9f2cc02ce739": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "مشاوي مشكلة لشخصين",
      "en": "Mixed Grill For Two"
    },
    "description": {
      "ar": "مجموعة مختارة من أشهر نكهات المطبخ التركي، تجتمع معاً بلمسة رفيعة من خبرائنا... مشوية بعناية على اللهب وتقدم ساخنة لتجربة غنية ومرضية. تتكون من: ٢٠٠ جم كباب أضنة، ٢٠٠ جم كباب دجاج، ٢٠٠ جم أوصال لحم ضأن، ٢٠٠ جم شيش طاووق. تقدم مع الطماطم المشوية، الفلفل الحار، البصل الأحمر، خبز اللواش، برغل بلاف، ليمون، مايونيز ومايونيز حار. طبق أصيل، سخي، ومعد ببراعة للمشاركة.",
      "en": "A selection of the most iconic flavors of Turkish cuisine, brought together with the refined touch of our masters... Carefully grilled over fire and served hot for a rich and satisfying experience. Includes: 200 g Adana kebab, 200 g chicken kebab, 200 g lamb cubes, 200 g chicken shish Served with grilled tomatoes, chili peppers, red onion, lavash bread, bulgur pilaf, lemon, mayonnaise and spicy mayonnaise. Authentic, generous and crafted to share."
    },
    "price": "222",
    "priceValue": 222,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbIVnJgBEng4vEl.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbIVnJgBEng4vEl.webp",
    "prepTime": "35",
    "calories": "1922",
    "weight": "800",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.spicy",
        "label": {
          "ar": "حار",
          "en": "Spicy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "f683bf36-cbc3-4c46-9c45-cfb6e32a13af",
        "reason": {
          "ar": "إن هذا الغموس المكون من الجوز والفلفل، بمذاقه المدخن والحلو قليلاً، يشكل مزيجاً رائعاً مع الكباب المشوي على لهب النار.",
          "en": "This slightly sweet and smoky walnut-pepper dip is an incredible match for charred, fire-grilled kebabs."
        }
      },
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "يبرد عيراننا التقليدي المملح خفيفاً براعم التذوق، ويوازن نكهات التوابل المدخنة والقوية في المشاوي المشكلة.",
          "en": "A traditional, lightly salted Ayran cools the palate and balances the intense, smoky spices of the mixed meats."
        }
      }
    ],
    "order": 1
  },
  "a968deb8-026a-48b3-adba-240b92980d01": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "دالاس ستيك",
      "en": "Dallas Steak"
    },
    "description": {
      "ar": "ستيك دالاس (ريب آي) معتق جافاً بوزن ٤٠٠ جم، تم تعتيقه بعناية من خلال عملية التعتيق الجاف لتعزيز عمق النكهة والرائحة الغنية، ويُشوى بمهارة حتى الكمال. يُقدم مع هريس البطاطس الناعم والخضروات الموسمية لتجربة متوازنة وراقية. يُرش بملح البحر لإبراز طابعه الطبيعي والقوي. طبق غني بالعصارة، جريء، ومكثف النكهة.",
      "en": "400g Dry Aged Dallas Steak (Ribeye), carefully matured through a dry aging process to enhance its depth of flavor and rich aroma, is expertly grilled to perfection. Served with silky mashed potatoes and seasonal vegetables for a balanced and refined experience. Finished with sea salt to highlight its natural and robust character. Juicy, bold, and intensely flavorful."
    },
    "price": "275",
    "priceValue": 275,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOFmnZQuI4Dp02Pi.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOFmnZQuI4Dp02Pi.webp",
    "recommendations": [
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The acidic tang of pomegranate molasses and the crunch of walnuts cut brilliantly through the rich, dry-aged fat of the steak."
        }
      },
      {
        "itemId": "04e64d7b-d691-48ee-9b7a-a2f978c3e09e",
        "reason": {
          "ar": "",
          "en": "A crisp, cold beer with a smooth body is the ideal beverage to wash down the robust, savory notes of a premium ribeye."
        }
      }
    ],
    "order": 4
  },
  "7375d7eb-72c4-40cc-99b5-b8ae81403424": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "علكة",
      "en": "CHEWING GUM"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4Jhh3x3lRCnpNan.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4Jhh3x3lRCnpNan.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "Warm, aromatic Turkish tea beautifully complements the relaxing and flavorful experience."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Fresh, sweet fruits provide a hydrating and vibrant contrast to enjoy on the side."
        }
      }
    ],
    "order": 10
  },
  "0991b4d5-5f1b-44e6-8e91-e91959db281b": {
    "category": "81d3c1d4-b82c-4ea3-8a9d-881977f47761",
    "name": {
      "ar": "سلطة جافورداغي",
      "en": "Gavurdagi Salad"
    },
    "description": {
      "ar": "طماطم وخيار وفلفل ملوّن مفرومة ناعم تُخلط مع الجوز المجروش، وتُتبّل بدبس الرمان، عصير الليمون الطازج، زيت الزيتون ولمسة من السماق لتعزيز العمق.\nجريئة، غنية",
      "en": "Finely chopped tomatoes, cucumbers and colorful peppers mixed with crushed walnuts. Layered with pomegranate molasses, fresh lemon juice, olive oil and a touch of sumac for depth. Bold, rich and full of character."
    },
    "price": "46",
    "priceValue": 46,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Gax2ZZVh4Rqmt6.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Gax2ZZVh4Rqmt6.webp",
    "prepTime": "23",
    "calories": "300",
    "weight": "260",
    "allergens": [
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "8507dfb1-80d8-4294-a8a6-0efa00e89e86",
        "reason": {
          "ar": "",
          "en": "The salad's sharp pomegranate tang and crunchy walnuts beautifully elevate the savory, spiced meat on the crispy Lahmacun."
        }
      },
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "",
          "en": "A cold, creamy Ayran provides a soothing, slightly salty contrast to the rich walnuts and tart sumac flavors."
        }
      }
    ],
    "order": 2
  },
  "0d0da313-976b-4f5b-97ae-ac4c151f55df": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "حمص الشيف الذهبي",
      "en": "Golden Hummus"
    },
    "description": {
      "ar": "حمص كريمي يُحضّر من حمص مطهو بإتقان، يُمزج ليمنح قوامًا ناعمًا حريريًا، ويُزيّن بزيت الزيتون، السماق والنعناع المجفف.\nناعم، غني… وحريري لا يُقاوَم.",
      "en": "Creamy hummus made from perfectly cooked chickpeas, blended into a silky texture and finished with olive oil, sumac and dried mint. Smooth, rich and irresistibly velvety."
    },
    "price": "34",
    "priceValue": 34,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzc3ZnSOfoOwEXil.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzc3ZnSOfoOwEXil.webp",
    "prepTime": "18",
    "calories": "320",
    "weight": "220",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "",
          "en": "Warm, freshly baked Tandır bread is the ultimate vessel to scoop up every bit of this silky, velvety hummus."
        }
      },
      {
        "itemId": "896932b6-dc0c-4ab5-913e-6ba142bfc030",
        "reason": {
          "ar": "",
          "en": "The rich, juicy flavors of a grilled Enterecote steak are wonderfully complemented by a side of smooth, earthy hummus."
        }
      }
    ],
    "order": 2
  },
  "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6": {
    "category": "59ee4ca2-bb09-4a86-981b-fd40460331ea",
    "name": {
      "ar": "خبز التندر",
      "en": "TANDOOR BREAD"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "15",
    "priceValue": 15,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH55qOYROeHlaUqZw.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH55qOYROeHlaUqZw.webp",
    "order": 6
  },
  "7f21d1d1-00f8-4273-8fc0-beff636a2ddb": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "تشكيلة مقبلات مشكلة لشخصين",
      "en": "Mix Meze For 2"
    },
    "description": {
      "ar": "مجموعة مختارة بعناية من مقبلاتنا الباردة المميزة، مُحضّرة بإتقان ومصممة للمشاركة.\nتجتمع المحمرة، الحمص، المتبل، بابا غنوج والمخللات المنزلية في تجربة غنية ومليئة بالنكهات.\nمثالية للمشاركة… ولا تُقاوَم.",
      "en": "A curated selection of our signature cold mezes, crafted with care and designed for sharing. Muhammara, hummus, mutabel, baba ghanoush and homemade pickles come together in a rich and vibrant experience. Perfect for sharing, impossible to resist."
    },
    "price": "78",
    "priceValue": 78,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIMFQv7Y4pXRW0Rzy.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIMFQv7Y4pXRW0Rzy.webp",
    "prepTime": "22",
    "calories": "980",
    "weight": "650",
    "allergens": [
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0a20ce3f-736d-4b27-bdcc-5aa86dcafad6",
        "reason": {
          "ar": "",
          "en": "Freshly baked Tandır bread is absolutely essential for dipping and savoring the diverse, vibrant flavors of the meze platter."
        }
      },
      {
        "itemId": "8654a6b2-3bcf-436f-8342-9f2cc02ce739",
        "reason": {
          "ar": "",
          "en": "Following a shared meze platter, the Mixed Grill for Two provides a hearty, smoky main course that continues the authentic feast."
        }
      }
    ],
    "order": 1
  },
  "c19b4ad7-9dd2-495c-9fcf-9ca0a81fba63": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "كفتة اللحم على طريقة الجزار",
      "en": "Butcher Meatball"
    },
    "description": {
      "ar": "٢٥٠ غرام من كرات اللحم التقليدية على طريقة القصاب، مُحضرة من لحم البقر المختار بعناية وتُقدم في ٤ قطع. تُقدم مع البطاطس المقلية المقرمشة وصلصة الشيف الخاصة لتجربة غنية ومشبوعة. تتميز بكونها طرية، غنية بالنكهات، ومصنوعة بلمسة تقليدية أصيلة.",
      "en": "250 g of traditional butcher-style meatballs, prepared from carefully selected beef and served as 4 pieces. Served with crispy French fries and the chef’s special sauce for a rich and satisfying experience. Juicy, flavorful and crafted with a traditional touch."
    },
    "price": "62",
    "priceValue": 62,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3KjfttLcQ6WdVWa.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3KjfttLcQ6WdVWa.webp",
    "prepTime": "30",
    "calories": "950",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "21abfb80-c2e5-413d-9019-5cc3de9121ae",
        "reason": {
          "ar": "",
          "en": "The vibrant freshness and salty bite of the Greek Halloumi salad cut beautifully through the rich, savory juices of the meatballs."
        }
      },
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "",
          "en": "A cold, creamy Ayran is the traditional pairing, refreshing the palate and balancing the spiced, meaty flavors."
        }
      }
    ],
    "order": 8
  },
  "12cefb17-9ba3-44b6-b531-a8d296246b86": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "شوكولاتة ساخنة",
      "en": "Hot Chocolate"
    },
    "description": {
      "ar": "شوكولاتة فاخرة مذابة مع حليب كريمي ومارشميلو ناعم… كثيفة، غنية ودافئة بشكل لا يُقاوَم.",
      "en": "Melted premium chocolate with creamy milk and soft marshmallow, thick, rich and irresistibly comforting."
    },
    "price": "27",
    "priceValue": 27,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NrCVcWbmznDLpv.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NrCVcWbmznDLpv.webp",
    "prepTime": "16",
    "calories": "340",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The satisfying texture of the Crunch Cake provides a delightful contrast to the thick, velvety smoothness of the hot chocolate."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, slightly caramelized notes of the San Sebastian cheesecake pair decadently with the rich cocoa flavors."
        }
      }
    ],
    "order": 14
  },
  "7b7c1ef3-04bd-4968-b1eb-2aad83376751": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "كباب أضنة",
      "en": "Adana Kebab"
    },
    "description": {
      "ar": "أحد أشهر رموز المطبخ التركي، يُحضَّر من 200 جم من اللحم المفروم المتبّل بإتقان، ويُشوى على الفحم المكشوف ليُبرز نكهاته الأصيلة…\nيُقدَّم مع سلطة البصل، فلفل حار مشوي، طماطم، ليمون، خبز لافاش، أرز برغل وتشكيلة من الصلصات.\nمدخّن، طري… ومليء بنكهات الأناضول الجريئة.",
      "en": "A true icon of Turkish cuisine, made from 200 g of perfectly seasoned minced meat and grilled over open charcoal fire. Served with onion salad, grilled chili pepper, tomatoes, lemon, lavash bread, bulgur pilaf and a selection of sauces. Smoky, juicy and full of bold Anatolian flavors."
    },
    "price": "66",
    "priceValue": 66,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTIjya8nJWElpUB.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTIjya8nJWElpUB.webp",
    "prepTime": "30",
    "calories": "860",
    "weight": "500",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The tangy pomegranate molasses and fresh tomatoes in the Gavurdagi salad perfectly slice through the smoky richness of the kebab."
        }
      },
      {
        "itemId": "a8328686-ad57-4c46-87d2-8ff5da769a72",
        "reason": {
          "ar": "",
          "en": "Finish your bold Anatolian meal with this warm, cheesy, and syrup-soaked traditional dessert for a satisfying contrast."
        }
      }
    ],
    "order": 5
  },
  "896932b6-dc0c-4ab5-913e-6ba142bfc030": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "أنتركوت",
      "en": "Entrecôte"
    },
    "description": {
      "ar": "300 جم من ريب آي فاخر، يُشوى بإتقان لإبراز تداخل الدهون الغني ونكهته الطبيعية العميقة.\nيُقدَّم مع بطاطس مهروسة ناعمة وخضار سوتيه موسمية، لطبق متوازن بكل تفاصيله.\nيُتَبَّل ويُختَم بملح البحر ليُبرز غناه الطبيعي.\nعصاري، جريء… ومكثّف النكهة.",
      "en": "300g of premium ribeye, expertly grilled to enhance its rich marbling and deep, natural flavor. Served with silky mashed potatoes and seasonal sautéed vegetables for a perfectly balanced plate. Seasoned and finished with sea salt to highlight its rich and natural flavor. Juicy, bold, and intensely flavorful."
    },
    "price": "225",
    "priceValue": 225,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOFUL1Z8maXD6CZs.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOFUL1Z8maXD6CZs.webp",
    "prepTime": "35",
    "calories": "780",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0ad35147-8d8d-49c5-a25c-f574b7e07145",
        "reason": {
          "ar": "",
          "en": "The light balsamic glaze and fresh greens offer a crisp, acidic contrast to the rich marbling of the ribeye."
        }
      },
      {
        "itemId": "b1268bb2-150f-4ca7-afb5-f2fa21507da5",
        "reason": {
          "ar": "",
          "en": "A vibrant and fruity lemonade that cleanses the palate between rich, savory bites of steak."
        }
      }
    ],
    "order": 2
  },
  "6d6b0894-1f35-4df2-a180-d4b563db3102": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "قهوة سعودية (دلة صغيرة)",
      "en": "Saudi Coffee (Small Pot/Medium Pot)"
    },
    "description": {
      "ar": "قهوة سعودية أصيلة تُحضَّر بعناية، بنكهة عطرية متوازنة ولمسة ضيافة تقليدية دافئة.\nالأحجام:\nدلة متوسطة (52) \nتُقدَّم مع التمر لإكمال تجربة الضيافة السعودية الأصيلة.",
      "en": "Authentic Saudi coffee infused with aromatic spices, light-bodied, fragrant and traditionally served with dates. Aromatic Saudi coffee with delicate spice notes, smooth, elegant and perfect for sharing."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3P5ZHH67mysETiz.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3P5ZHH67mysETiz.webp",
    "prepTime": "20",
    "calories": "160",
    "weight": "450",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, caramelized notes of the cheesecake beautifully complement the aromatic spices of the coffee."
        }
      },
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "The flaky layers and nutty sweetness of the baklava perfectly balance the gentle spice and light body of the coffee."
        }
      }
    ],
    "order": 17
  },
  "adcb8284-7343-44da-a287-e1582946148f": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "مشاوي مشكلة لشخص واحد",
      "en": "Mix Grill For 1"
    },
    "description": {
      "ar": "تشكيلة مختارة من كلاسيكيات المطبخ التركي، تُقدَّم بلمسة احترافية تعكس خبرة أمهر الطهاة.\nمشوية على الفحم ومُحضَّرة كتجربة خاصة لك، لتمنحك طبقًا متوازنًا ومُرضيًا بكل تفاصيله.\nتتضمن:\n100 جم كباب أضنة\n100 جم كباب دجاج\n100 جم مكعبات لحم غنم\n100 جم شيش دجاج\nتُقدَّم مع طماطم مشوية، فلفل حار، بصل أحمر، خبز لافاش، أرز برغل، ليمون، مايونيز ومايونيز حار.\nمصممة خصيصًا لك… غنية ومشبعة بكل تفاصيلها.",
      "en": "A curated selection of Turkish classics, brought together with the refined touch of our masters... Charcoal-grilled and prepared as a personalized experience, offering a perfectly balanced and satisfying plate. Includes: 100 g Adana kebab, 100 g chicken kebab, 100 g lamb cubes, 100 g chicken shish. Served with grilled tomatoes, chili peppers, red onion, lavash bread, bulgur pilaf, lemon, mayonnaise and spicy mayonnaise. Crafted just for you, rich and perfectly satisfying."
    },
    "price": "114",
    "priceValue": 114,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzb4M3yGkZXcFvJy.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzb4M3yGkZXcFvJy.webp",
    "prepTime": "30",
    "calories": "1220",
    "weight": "560",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.spicy",
        "label": {
          "ar": "حار",
          "en": "Spicy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The zesty lemon and fresh parsley in the tabbouleh provide a refreshing palate cleanser for this hearty meat platter."
        }
      },
      {
        "itemId": "0d0da313-976b-4f5b-97ae-ac4c151f55df",
        "reason": {
          "ar": "",
          "en": "A velvety, rich hummus that pairs flawlessly as a creamy dip for the grilled meats and lavash."
        }
      }
    ],
    "order": 2
  },
  "8801bdf8-aa38-4221-830b-e7f004ebd117": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "نيويورك ستيك",
      "en": "New York Steak"
    },
    "description": {
      "ar": "300 جم من ستيك نيويورك الفاخر، يُشوى بإتقان لإبراز نكهته اللحمية الجريئة وقوامه المتماسك والعصاري…\nيُقدَّم مع بطاطس مهروسة ناعمة وخضار سوتيه موسمية، ويُختَم بلمسة خفيفة من ملح البحر لتعزيز نكهاته الطبيعية.\nقوي، عصاري… ومليء بالطابع التقليدي",
      "en": "300g of premium New York steak, expertly grilled to bring out its bold, beefy flavor and firm, juicy texture. Served with silky mashed potatoes and seasonal sautéed vegetables, finished with a delicate touch of sea salt to enhance its natural flavors."
    },
    "price": "209",
    "priceValue": 209,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOHUuq5XQoxBCO9q.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOHUuq5XQoxBCO9q.webp",
    "prepTime": "34",
    "calories": "740",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "",
          "en": "Crisp lettuce and creamy parmesan dressing provide a refreshing textural contrast to the firm, juicy steak."
        }
      },
      {
        "itemId": "f445e501-a9f9-411f-a223-371b0daeb695",
        "reason": {
          "ar": "",
          "en": "The zesty citrus and cool mint cut right through the bold, beefy flavor of the steak."
        }
      }
    ],
    "order": 3
  },
  "6e4faf94-cfa4-438e-986b-05fd8f06d265": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "إسكندر",
      "en": "Iskender"
    },
    "description": {
      "ar": "طبق أصيل من مدينة بورصة، يُحضَّر بـ 180 جم من شرائح اللحم الطرية، ويُقدَّم فوق خبز البيده الدافئ…\nيُزيَّن بصلصة الطماطم الغنية، ويُختَم بلمسة من الزبدة الطبيعية الذائبة، ويُقدَّم مع الزبادي وخضار مشوية.\nأصيل، غني بالزبدة… ومشبِع بكل تفاصيله.",
      "en": "A true Bursa classic prepared with 180 g of tender sliced beef, served over warm pide bread. Topped with rich tomato sauce and finished with natural melted butter, accompanied by yogurt and grilled vegetables. Authentic, buttery and deeply satisfying."
    },
    "price": "72",
    "priceValue": 72,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3IgBaDO8HSJZHvb.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3IgBaDO8HSJZHvb.webp",
    "prepTime": "28",
    "calories": "920",
    "weight": "480",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "54633c97-9b3d-44ce-a902-01f1430c260e",
        "reason": {
          "ar": "",
          "en": "The tanginess of the vine leaves and lemon perfectly balances the rich, buttery tomato sauce of the Iskender."
        }
      },
      {
        "itemId": "a8328686-ad57-4c46-87d2-8ff5da769a72",
        "reason": {
          "ar": "",
          "en": "A warm, sweet finish to contrast the savory, yogurt-heavy profile of this Bursa classic."
        }
      }
    ],
    "order": 4
  },
  "49bcee08-afe0-4bb9-8220-b3d9088cd35b": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "ريش لحم الغنم",
      "en": "Lamb Chops"
    },
    "description": {
      "ar": "400 جم من ريش الغنم الطرية المختارة بعناية، تُشوى على الفحم لتعزيز نكهتها الطبيعية الغنية.\nتُقدَّم مع بطاطس صغيرة، ذرة طازجة، زبدة، إكليل الجبل والبقدونس، لتمنح تجربة عطرية غنية ومتكاملة.\nطرية، مدخّنة… ومليئة بالنكهة في كل لقمة.",
      "en": "Perfectly selected 400 g of tender lamb chops, grilled over charcoal to enhance their natural flavor. Served with baby potatoes, fresh corn, butter, rosemary and parsley, creating a rich and aromatic experience. Juicy, smoky and intensely flavorful."
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VISMBx7PTXZUYNEaY.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VISMBx7PTXZUYNEaY.webp",
    "prepTime": "32",
    "calories": "980",
    "weight": "560",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "The crispy toasted bread and tangy pomegranate molasses cut through the intense, smoky richness of the lamb."
        }
      },
      {
        "itemId": "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5",
        "reason": {
          "ar": "",
          "en": "The smoky roasted eggplant mirrors the charcoal-grilled flavor of the chops while adding a creamy contrast."
        }
      }
    ],
    "order": 6
  },
  "863eb485-f580-4975-81ac-bf2467106519": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "كفتة اللحم بالجبن",
      "en": "Meatball With Cheese"
    },
    "description": {
      "ar": "300 جم من الكفتة المحضّرة منزليًا، محشوة بجبن مذاب، ومشكّلة بعناية إلى 3 قطع…\nتُشوى بإتقان وتُقدَّم مع بطاطس مقلية مقرمشة وصلصة الشيف الخاصة.\nعصارية، غنية بالجبن… ولا تُقاوَم في كل لقمة.",
      "en": "300 g of homemade kofte, filled with melted cheese and carefully shaped into 3 pieces… Grilled to perfection and served with crispy French fries and the chef's special sauce. Juicy, cheesy and irresistibly satisfying."
    },
    "price": "68",
    "priceValue": 68,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3KnHf4ctXqjXkYI.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3KnHf4ctXqjXkYI.webp",
    "prepTime": "31",
    "calories": "1080",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "Fresh parsley and lemon juice provide a bright, acidic lift to balance the melted cheese and juicy meat."
        }
      },
      {
        "itemId": "b1268bb2-150f-4ca7-afb5-f2fa21507da5",
        "reason": {
          "ar": "",
          "en": "Sweet and tangy berries offer a refreshing wash after the rich, cheesy flavors of the kofte."
        }
      }
    ],
    "order": 7
  },
  "68021e6f-dc73-4bfa-a8d2-0b95381c3ec8": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "سبانيش لاتيه",
      "en": "Spanish Latte"
    },
    "description": {
      "ar": "إسبريسو ناعم مع حليب كريمي وحليب مُحلى بنكهة الكراميل… غني، حريري وفاخر.",
      "en": "Smooth espresso with creamy milk and caramelized sweetened milk, rich, silky and perfectly indulgent."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NvcQvppwpto8ve.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NvcQvppwpto8ve.webp",
    "prepTime": "17",
    "calories": "300",
    "weight": "280",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The burnt caramel crust of the cheesecake beautifully echoes the caramelized milk notes in the latte."
        }
      },
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "Adds a delightful crispy texture and deep chocolate flavor to pair with the silky, sweet espresso."
        }
      }
    ],
    "order": 15
  },
  "a55cdfa6-fee8-46c1-a474-c5ab8922066c": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "قهوة مقطرة ساخنة V60",
      "en": "Hot Drip Coffee V60"
    },
    "description": {
      "ar": "قهوة من مصدر واحد تُحضَّر بعناية لإبراز عطرها الطبيعي… نقية، مشرقة ومتوازنة بأناقة.",
      "en": "Single origin coffee, carefully brewed to highlight its natural aroma, clean, bright and refined."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3O0EjidOUrXHz0L.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3O0EjidOUrXHz0L.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "250",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "The milky sweetness of the cold baklava softens the bright, clean acidity of the single-origin drip coffee."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "A creamy, rich dessert that balances the refined, aromatic notes of a pour-over brew."
        }
      }
    ],
    "order": 16
  },
  "bff7822d-ed45-48d6-bdee-524040ba5ee5": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "شاشليك لحم بالجبن الشيدر",
      "en": "Beef Shashlik W Cheddar"
    },
    "description": {
      "ar": "300 جم من تندرلوين اللحم البقري المتبّل، يُحضَّر بعناية على أسياخ ويُشوى على الفحم ليحافظ على عصارته ونكهته العميقة…\nيُغطّى بطبقة غنية من جبن الشيدر المذاب بانسيابية، ليضيف قوامًا كريميًا ونكهة أكثر عمقًا ودفئًا.\nيُقدَّم مع بطاطس مهروسة ناعمة وخضار سوتيه موسمية، ويُختَم بلمسة رقيقة من ملح البحر لتعزيز غناه.\nعصاري، مدخّن… يتكامل مع شيدر ذائب يرفع التجربة إلى مستوى آخر.",
      "en": "300 g of premium marinated tenderloin beef, carefully skewered and grilled over open-charcoal fire to lock in its natural juices and deep flavor. Served with silky mashed potatoes and seasonal sautéed vegetables, finished with a delicate touch of sea salt to enhance its richness. Juicy, smoky and full of bold character."
    },
    "price": "190",
    "priceValue": 190,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIP3KFPzYY5wUiWun.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIP3KFPzYY5wUiWun.webp",
    "prepTime": "32",
    "calories": "780",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0ad35147-8d8d-49c5-a25c-f574b7e07145",
        "reason": {
          "ar": "",
          "en": "A fresh, balsamic-dressed salad to cut through the heavy, savory layers of beef and cheddar."
        }
      },
      {
        "itemId": "f445e501-a9f9-411f-a223-371b0daeb695",
        "reason": {
          "ar": "",
          "en": "The zesty acidity acts as a perfect palate cleanser for this intensely rich and smoky dish."
        }
      }
    ],
    "order": 5
  },
  "dccf7dca-ded8-4ddf-8169-dcfd2a22ec86": {
    "category": "4f5c2778-d74e-424a-bedb-81f78f3c68a3",
    "name": {
      "ar": "لوكوم تندرلوين",
      "en": "Lokum Tenderloin"
    },
    "description": {
      "ar": "250 جم من التندرلوين الفاخر، معروف بقوامه الطري الذي يذوب في الفم، يُشوَّح بإتقان لإبراز نكهته الطبيعية الغنية.\nيُقدَّم مع بطاطس مهروسة ناعمة وخضار سوتيه موسمية، لتوازن راقٍ في الطعم والقوام.\nيُتَبَّل ويُختَم بلمسة من ملح البحر لإبراز عمق نكهته الطبيعية.\nطريّ للغاية… وغنيّ بكل تفاصيله.",
      "en": "250 gr of premium tenderloin, known for its melt-in-your-mouth tenderness, expertly seared to enhance its natural flavor. Served with silky mashed potatoes and seasonal sautéed vegetables for a refined balance. Seasoned and finished with sea salt to highlight its rich, natural flavor."
    },
    "price": "179",
    "priceValue": 179,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOF8dBxWzXrX1Uh3.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIOF8dBxWzXrX1Uh3.webp",
    "prepTime": "32",
    "calories": "620",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The crunch of walnuts and tang of pomegranate molasses contrast beautifully with the melt-in-your-mouth tenderloin."
        }
      },
      {
        "itemId": "b1268bb2-150f-4ca7-afb5-f2fa21507da5",
        "reason": {
          "ar": "",
          "en": "The sweet and tart berry notes provide a vibrant, refreshing lift to the savory meat."
        }
      }
    ],
    "order": 1
  },
  "4034fed6-3ad9-4bdf-9540-0bf6b1c9e9b2": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "علي نازك",
      "en": "Ali Nazik"
    },
    "description": {
      "ar": "200 جم من مكعبات اللحم الطرية، تُقدَّم فوق طبقة حريرية من الباذنجان المشوي، ممزوجة بالزبادي لتمنح قوامًا كريميًا ونكهة مدخّنة عميقة.\nتُزيَّن بخضار سوتيه، وتُقدَّم مع خبز طرناق التقليدي.\nطبق أناضولي أصيل بلمسة راقية… غني، دافئ ومليء بالنكهة.",
      "en": "200 g of tender beef cubes served over a silky roasted eggplant base, blended with yogurt for a creamy, smoky depth… Topped with sautéed vegetables and served with tırnak bread. A refined Anatolian classic, rich, comforting and full of flavor."
    },
    "price": "64",
    "priceValue": 64,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTZdCGNki1RIEj5.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzTZdCGNki1RIEj5.webp",
    "prepTime": "32",
    "calories": "690",
    "weight": "350",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "The crisp vegetables and tangy dressing cut through the creamy, smoky yogurt and eggplant base."
        }
      },
      {
        "itemId": "a8328686-ad57-4c46-87d2-8ff5da769a72",
        "reason": {
          "ar": "",
          "en": "A warm, syrup-soaked dessert to perfectly round off the comforting, savory flavors of this classic."
        }
      }
    ],
    "order": 11
  },
  "f3370cb5-676e-4238-b7c8-c56cdce9d257": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "طاجن لحم بقري",
      "en": "Beef Casserole"
    },
    "description": {
      "ar": "200 جم من اللحم البقري الفاخر، يُطهى ببطء حتى الكمال في قدر فخاري تقليدي (غوفيتش)، مُشبّع بصلصات الطماطم والفلفل الغنية.\nيُستكمل طهيه في الفرن ليُطوّر نكهات عميقة ومتدرجة، ويُقدَّم مع خبز عجين طازج مخبوز حديثًا.\nغني، دافئ… ومليء بعمق النكهة في كل لقمة.",
      "en": "200 g of premium beef, slow-cooked to perfection in a traditional clay pot (güveç), infused with rich tomato and pepper sauces… Finished in the oven to develop deep, layered flavors and served with freshly baked dough bread. Deep, velvety and intensely aromatic."
    },
    "price": "67",
    "priceValue": 67,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3J9ug96WFAsqZ2s.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3J9ug96WFAsqZ2s.webp",
    "prepTime": "35",
    "calories": "720",
    "weight": "360",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The bright, herbaceous notes of the tabbouleh lighten the deeply rich and aromatic tomato sauce."
        }
      },
      {
        "itemId": "0d0da313-976b-4f5b-97ae-ac4c151f55df",
        "reason": {
          "ar": "",
          "en": "A cool, velvety contrast to the hot, slow-cooked beef and rich clay pot flavors."
        }
      }
    ],
    "order": 12
  },
  "bdc9b239-c9dc-4a89-a739-895007f8133e": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "كباب دجاج",
      "en": "Chicken Kebab"
    },
    "description": {
      "ar": "200 جم من الدجاج المتبّل بعناية، يُحضَّر بتوليفة توابل خاصة ويُشوى على الفحم ليمنح نكهة أصيلة وغنية…\nيُقدَّم مع سلطة البصل، فلفل حار مشوي، طماطم، ليمون، مايونيز، خبز لافاش وأرز برغل.\nخفيف، غني بالنكهة… ومصمّم ليرضي كل الأذواق.",
      "en": "200 g of finely seasoned chicken, prepared with a signature spice mix and cooked over charcoal for a rich, authentic taste. Served with onion salad, grilled chili pepper, tomatoes, lemon, mayonnaise, lavash bread and bulgur pilaf. Juicy, flavorful and a crowd favorite."
    },
    "price": "62",
    "priceValue": 62,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzYCmkzWoFSbf6Ag.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzYCmkzWoFSbf6Ag.webp",
    "prepTime": "28",
    "calories": "740",
    "weight": "470",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0d0da313-976b-4f5b-97ae-ac4c151f55df",
        "reason": {
          "ar": "",
          "en": "The smooth, rich texture of hummus pairs wonderfully with the smoky, spiced chicken."
        }
      },
      {
        "itemId": "f445e501-a9f9-411f-a223-371b0daeb695",
        "reason": {
          "ar": "",
          "en": "A zesty and cooling drink that enhances the signature spice mix of the charcoal-grilled chicken."
        }
      }
    ],
    "order": 9
  },
  "1e52139d-46ca-4414-a1f6-88a288dfe687": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "طاجن الدجاج",
      "en": "Chicken Casserole"
    },
    "description": {
      "ar": "200 جم من الدجاج الطري، يُطهى ببطء بعناية في قدر فخاري تقليدي، مع مزيج متوازن من صلصات الطماطم والفلفل.\nيُستكمل في الفرن ويُقدَّم مع خبز عجين طازج، ليمنح تجربة دافئة ومريحة.\nأنيق، متوازن… ومفعم بالراحة في كل لقمة.",
      "en": "200 g of tender chicken, delicately slow-cooked in a traditional clay pot with a refined blend of tomato and pepper sauces. Oven-finished and served with freshly baked dough bread for a warm, comforting experience. Elegant, balanced and irresistibly comforting."
    },
    "price": "65",
    "priceValue": 65,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3JHCKqAuDxcSsFj.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3JHCKqAuDxcSsFj.webp",
    "prepTime": "33",
    "calories": "610",
    "weight": "340",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "The crunch of toasted bread and tangy dressing perfectly balance the soft, slow-cooked chicken and rich sauce."
        }
      },
      {
        "itemId": "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5",
        "reason": {
          "ar": "",
          "en": "Adds a complementary smoky depth that pairs seamlessly with the tomato and pepper casserole base."
        }
      }
    ],
    "order": 13
  },
  "cbefd6a5-095a-4a11-88fa-3a647822c28e": {
    "category": "884b790b-3b65-46a2-9be5-2ef78ce53146",
    "name": {
      "ar": "سباغيتي بولونيز",
      "en": "Spaghetti Bolognese"
    },
    "description": {
      "ar": "سباغيتي طازجة تُحضَّر يوميًا داخل مطبخنا، بقوام مثالي ولمسة منزلية أصيلة…\nتُقدَّم مع صلصة نابولي الغنية، وصوص بولونيز باللحم المطهو ببطء، مع الزبدة، الثوم، البيستو، وتُختَم بجبن البارميزان.\nكلاسيكية إيطالية بعمق نكهة دافئ… وتجربة مريحة لا تُقاوَم.",
      "en": "Freshly handmade spaghetti, prepared daily in-house. Served with rich Napoli tomato sauce, slow-cooked Bolognese meat sauce, butter, garlic, pesto and finished with Parmesan cheese. A classic Italian favorite with deep, comforting flavors."
    },
    "price": "65",
    "priceValue": 65,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzaUba6mQWPqgaAi.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzaUba6mQWPqgaAi.webp",
    "prepTime": "30",
    "calories": "860",
    "weight": "400",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "",
          "en": "A crisp, creamy Caesar salad is the classic, refreshing companion to a rich, meaty Italian pasta."
        }
      },
      {
        "itemId": "f5811822-3742-48c0-98f6-fb27bdcf2c49",
        "reason": {
          "ar": "",
          "en": "The sparkling, exotic tartness cuts through the heavy, slow-cooked Bolognese sauce perfectly."
        }
      }
    ],
    "order": 3
  },
  "7c604238-7a07-4168-b234-9bb1b536d202": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "اوصال لحم",
      "en": "Beef Shish"
    },
    "description": {
      "ar": "200 جم من مكعبات اللحم البقري الطرية والمتبّلة، تُشوى على الفحم لتحافظ على عصارتها الطبيعية…\nتُقدَّم مع سلطة البصل، فلفل حار مشوي، طماطم، ليمون، خبز لافاش، أرز برغل وتشكيلة من الصلصات.\nغني، طري… ولا يُقاوَم في كل لقمة.",
      "en": "200 g of tender, marinated beef cubes grilled over charcoal to lock in their natural juices. Served with onion salad, grilled chili pepper, tomatoes, lemon, lavash bread, bulgur pilaf and sauces. Rich, succulent and irresistibly satisfying."
    },
    "price": "68",
    "priceValue": 68,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3IrNyf5iy3ttNw6.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3IrNyf5iy3ttNw6.webp",
    "prepTime": "31",
    "calories": "810",
    "weight": "490",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The tangy sumac and crunchy walnuts elevate the succulent, marinated beef cubes."
        }
      },
      {
        "itemId": "0d0da313-976b-4f5b-97ae-ac4c151f55df",
        "reason": {
          "ar": "",
          "en": "A creamy, earthy dip that naturally complements the smoky, charred edges of the beef."
        }
      }
    ],
    "order": 7
  },
  "11128019-e4f1-4d2d-9665-4a8731a68b77": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "شيش طاوق",
      "en": "Chicken Shish"
    },
    "description": {
      "ar": "300 جم من قطع الدجاج الطرية، متبّلة بتوليفة الشيف الخاصة من التوابل، ومشوية على الفحم المكشوف لتعزيز نكهتها الأصيلة…\nتُقدَّم مع سلطة البصل، فلفل حار مشوي، طماطم، ليمون، مايونيز، خبز لافاش وأرز برغل.\nطري، مدخّن… ومتوازن النكهة بإتقان.",
      "en": "300 g of tender chicken pieces, marinated with the chef's special blend of spices and grilled over open charcoal fire. Served with onion salad, grilled chili pepper, tomatoes, lemon, mayonnaise, lavash bread and bulgur pilaf. Juicy, smoky and perfectly balanced in flavor."
    },
    "price": "64",
    "priceValue": 64,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbqi6PwQLFlLx5j.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzbqi6PwQLFlLx5j.webp",
    "prepTime": "29",
    "calories": "780",
    "weight": "520",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "Fresh parsley and zesty lemon juice bring a bright, refreshing contrast to the smoky chicken pieces."
        }
      },
      {
        "itemId": "f445e501-a9f9-411f-a223-371b0daeb695",
        "reason": {
          "ar": "",
          "en": "The cool, citrusy mint profile perfectly washes down the savory spices of the chicken marinade."
        }
      }
    ],
    "order": 8
  },
  "ca861007-b4dc-49d1-8dc8-15d28a283f4e": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "كباب الكرز",
      "en": "Cherry Kebab"
    },
    "description": {
      "ar": "تناغم جريء بين النكهات… 200 جم من كباب أضنة المشوي على الفحم، يُقدَّم مع صلصة كرز غنية بلمسة حلاوة خفيفة.\nيُزيَّن بالفستق الحلبي المجروش، ويُقدَّم على طبقة مقرمشة من العجين، ليمنح قوامًا مميزًا وتقديمًا فريدًا.\nتوازن مثالي بين المدخّن، المالح… ولمسة حلاوة أنيقة.",
      "en": "A bold fusion of flavors… 200 g of Adana kebab, grilled over open charcoal fire and paired with a rich, slightly sweet cherry sauce. Finished with crushed Antep pistachios and served on crispy puff pastry for a unique texture and presentation. A perfect balance of smoky, savory and subtly sweet notes."
    },
    "price": "65",
    "priceValue": 65,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgNJ8JzkobfGPlJ.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzgNJ8JzkobfGPlJ.webp",
    "prepTime": "30",
    "calories": "760",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "2b2ae56f-a3cf-4b9e-a197-5e29707e04c7",
        "reason": {
          "ar": "",
          "en": "The creamy, smoky roasted eggplant balances the sweet and savory intensity of the cherry sauce."
        }
      },
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "A crisp, tangy salad that resets the palate after the rich, fruity, and nutty flavors of the kebab."
        }
      }
    ],
    "order": 10
  },
  "de24fecc-4ce3-484f-a34e-3a7d41b29137": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "قهوة تركية بالمستكة",
      "en": "Mastica Turkish Coffee"
    },
    "description": {
      "ar": "قهوة تركية مُعطّرة بالمستكة، بنكهة فريدة وعطرية ولمسة ناعمة أنيقة.",
      "en": "Turkish coffee infused with mastic, aromatic, unique and elegantly smooth."
    },
    "price": "24",
    "priceValue": 24,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Mnx4WM5Y1PzXjX.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Mnx4WM5Y1PzXjX.webp",
    "prepTime": "18",
    "calories": "150",
    "weight": "180",
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "The sweet, flaky layers of baklava perfectly balance the aromatic, bold notes of the mastica coffee."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "A creamy and caramelized cheesecake that complements the unique, piney essence of the coffee."
        }
      }
    ],
    "order": 4
  },
  "b2c06ac0-7dca-4369-9e91-db4e960db825": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "قهوة تركية",
      "en": "Turkish Coffee"
    },
    "description": {
      "ar": "قهوة تركية مطحونة ناعمًا، تُحضَّر على مهل لتمنح نكهة غنية، جريئة وأصيلة.",
      "en": "Finely ground Turkish coffee, slow brewed for a rich, bold and authentic taste."
    },
    "price": "22",
    "priceValue": 22,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3MbwEvWF7m0fYVO.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3MbwEvWF7m0fYVO.webp",
    "prepTime": "18",
    "calories": "150",
    "weight": "180",
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "a8328686-ad57-4c46-87d2-8ff5da769a72",
        "reason": {
          "ar": "",
          "en": "The warm, syrupy cheese pastry contrasts beautifully with the intense, bitter notes of authentic Turkish coffee."
        }
      },
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "A chilled, milky twist on baklava that softens the bold brew of the coffee."
        }
      }
    ],
    "order": 1
  },
  "3a44684c-967f-47b5-a501-92d7ada96863": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "قهوة تركية بالحليب",
      "en": "Turkish Coffee With Milk"
    },
    "description": {
      "ar": "مزيج ناعم من القهوة التركية والحليب، كريمي، غني ومتوازن بانسيابية.",
      "en": "A smooth blend of Turkish coffee and milk, creamy, rich and delicately balanced."
    },
    "price": "26",
    "priceValue": 26,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3MgV6XEbDDTW73R.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3MgV6XEbDDTW73R.webp",
    "prepTime": "18",
    "calories": "180",
    "weight": "220",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The caramelized top of the cheesecake enhances the roasted notes of the milky coffee."
        }
      },
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The crispy texture of the cake adds a delightful contrast to the creamy, smooth beverage."
        }
      }
    ],
    "order": 2
  },
  "7f479cdd-149f-4726-a80b-c2da5ee42b84": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "دبل إسبريسو",
      "en": "Double Espresso"
    },
    "description": {
      "ar": "جرعتان من الإسبريسو… قوية، مركّزة ومليئة بالشخصية.",
      "en": "Double shot espresso, bold, intense and full of character."
    },
    "price": "20",
    "priceValue": 20,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NBALV0hNe6P5SD.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3NBALV0hNe6P5SD.webp",
    "prepTime": "16",
    "calories": "150",
    "weight": "150",
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1",
        "reason": {
          "ar": "",
          "en": "The light, milky sponge cake provides a sweet relief to the sharp intensity of a double espresso."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "A rich and creamy dessert that smooths out the bold, intense coffee flavors."
        }
      }
    ],
    "order": 5
  },
  "e59d9cc5-d30d-4254-b4d5-8b499eec2af8": {
    "category": "884b790b-3b65-46a2-9be5-2ef78ce53146",
    "name": {
      "ar": "بيني أرابياتا",
      "en": "Penne Arrabiata"
    },
    "description": {
      "ar": "باستا بيني طازجة، تُحضر يومياً في مطبخنا لتقدم تجربة غنية بالنكهة الأصيلة... تُقلب مع قطع الدجاج الطرية، طماطم كرزية طازجة، زيتون أسود، صلصة طماطم غنية، لمسة من الزبدة، الثوم العطري، وصلصة البيستو الخاصة بنا، ثم تُزين بجبنة البارميزان المبشورة. طبق غني بالنكهات وألوان مفعمة بالحيوية... يجسد الروح الحقيقية لمطبخ البحر الأبيض المتوسط في كل قضمة.",
      "en": "Fresh penne pasta, prepared daily in our kitchen to deliver a rich and authentic flavor experience… Tossed with tender chicken pieces, fresh cherry tomatoes, black olives, rich tomato sauce, a touch of butter, aromatic garlic, and signature pesto, then finished with grated Parmesan cheese. Bold in flavor, vibrant in color… a dish that captures the true spirit of Mediterranean cuisine in every bite."
    },
    "price": "64",
    "priceValue": 64,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzUJ7xuW3cSyVMTe.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzUJ7xuW3cSyVMTe.webp",
    "prepTime": "24",
    "calories": "780",
    "weight": "350",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "spicinessLevels.spicy",
        "label": {
          "ar": "حار",
          "en": "Spicy"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "",
          "en": "The crisp, creamy Caesar salad provides a cooling contrast to the spicy tomato sauce of the arrabiata."
        }
      },
      {
        "itemId": "2e68a5de-d7cc-4572-a661-2d967173ca8a",
        "reason": {
          "ar": "",
          "en": "The vibrant, zesty olives cut through the richness of the pasta, adding a refreshing bite."
        }
      }
    ],
    "order": 2
  },
  "d023c723-73dc-4074-9dc7-9e3fb3ff1b7a": {
    "category": "884b790b-3b65-46a2-9be5-2ef78ce53146",
    "name": {
      "ar": "فيتوتشيني ألفريدو",
      "en": "Fettuccine Alfredo"
    },
    "description": {
      "ar": "مكرونة فيتوتشيني طازجة تُحضَّر يدويًا داخل مطبخنا، بقوام ناعم وحريري.\nتُعدّ بالزبدة، الكريمة، الحليب كامل الدسم، فطر طازج، صدر دجاج طري، ثوم، بيستو، وتُختَم بجبن البارميزان.\nكريمية، غنية… وفاخرة في كل لقمة.",
      "en": "Freshly handmade fettuccine, crafted in-house for a silky texture. Prepared with butter, cream, full-fat milk, fresh mushrooms, tender chicken breast, garlic, pesto and finished with Parmesan cheese. Creamy, rich and perfectly indulgent."
    },
    "price": "69",
    "priceValue": 69,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfOeOv9TIQxv6Oq.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfOeOv9TIQxv6Oq.webp",
    "prepTime": "28",
    "calories": "920",
    "weight": "380",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The fresh, acidic notes of parsley and lemon cleanse the palate after a rich, creamy Alfredo sauce."
        }
      },
      {
        "itemId": "0ad35147-8d8d-49c5-a25c-f574b7e07145",
        "reason": {
          "ar": "",
          "en": "A light, balsamic-glazed salad that perfectly breaks up the heavy creaminess of the pasta."
        }
      }
    ],
    "order": 1
  },
  "c1747927-94a7-4ed1-8fcb-6017955a0acf": {
    "category": "8fc09a90-b4db-4681-8506-f430b7c1360d",
    "name": {
      "ar": "قهوة تركية دبل",
      "en": "Double Turkish Coffee"
    },
    "description": {
      "ar": "تحضير مزدوج لقهوة تركية أكثر كثافة… جريئة، مركّزة وممتلئة القوام.",
      "en": "Double brewed Turkish coffee, extra bold, intense and full-bodied."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3MjjNW1nnWdDqq9.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3MjjNW1nnWdDqq9.webp",
    "prepTime": "19",
    "calories": "150",
    "weight": "200",
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "The intense sweetness of the baklava pairs flawlessly with the extra-bold, full-bodied double brew."
        }
      },
      {
        "itemId": "a8328686-ad57-4c46-87d2-8ff5da769a72",
        "reason": {
          "ar": "",
          "en": "The rich cheese and syrup provide a comforting contrast to the strong, bitter coffee profile."
        }
      }
    ],
    "order": 3
  },
  "07de0c88-200d-4732-929e-e8c98a0faedd": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "موهيتو كلاسيك",
      "en": "Mojito Classic"
    },
    "description": {
      "ar": "نعناع طازج مع ليمون منعش ولمسة فوار، تجربة باردة ونقية بانتعاش لا يُقاوم.",
      "en": "Fresh mint and zesty lime, blended with sparkling notes for an ultra-refreshing, crisp and cooling experience."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3T2GpuMjDLj87Bm.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3T2GpuMjDLj87Bm.webp",
    "prepTime": "15",
    "calories": "190",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "fb3c796f-b84e-469b-96ec-01b9b6f01018",
        "reason": {
          "ar": "",
          "en": "The crisp, cooling mint of the mojito effortlessly washes down these warm, golden-fried cheese rolls."
        }
      },
      {
        "itemId": "a1cf8693-8514-4542-a2b9-e3fd13f86f95",
        "reason": {
          "ar": "",
          "en": "The zesty lime and mint of the drink enhance the earthy, spiced flavors of the falafel."
        }
      }
    ],
    "order": 3
  },
  "371e252f-2196-441e-b21c-f46c97ae2f6c": {
    "category": "f5fe6ad8-b5ee-44cc-914e-e2f79927f2b8",
    "name": {
      "ar": "ماتشا كلاسيك",
      "en": "Classic Matcha"
    },
    "description": {
      "ar": "ماتشا يابانية فاخرة بدرجة احتفالية، مطحونة على الحجر ومخلوطة بعناية، تُقدَّم مع حليب بارد لتجربة ناعمة ومتوازنة.",
      "en": "Ceremonial grade Japanese matcha, stone-ground and carefully whisked, blended with chilled milk for a smooth, refined and naturally energizing experience."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzmw18Sjw5pG3WeR.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzmw18Sjw5pG3WeR.webp",
    "prepTime": "16",
    "calories": "190",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The sweet crunch of the cake balances the earthy, grassy notes of the matcha."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy cheesecake texture complements the smooth, refined stone-ground matcha."
        }
      }
    ],
    "order": 1
  },
  "a103a19f-8c77-4c08-a9bf-e89a175412f3": {
    "category": "7d087dc8-d4fa-4eb3-a017-f8a203431d2c",
    "name": {
      "ar": "باي جارمنج سبيشيال",
      "en": "BY CHARMING SPECIAL"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TFQ2lFPsD5BbG7.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TFQ2lFPsD5BbG7.webp",
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A warm, comforting glass of tea perfectly complements the relaxed experience of this special item."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Fresh, juicy fruits provide a refreshing and light pairing to enjoy alongside this special."
        }
      }
    ],
    "order": 1
  },
  "f5811822-3742-48c0-98f6-fb27bdcf2c49": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "موهيتو باشن فروت",
      "en": "Passion Fruit Mojito"
    },
    "description": {
      "ar": "فاكهة الباشن الاستوائية مع النعناع والليمون، حيوية، منعشة ولمسة فوار نابضة.",
      "en": "Exotic passion fruit with mint and fresh lime, tangy, vibrant and sparkling fresh."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3SwPMCpm670FKhT.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3SwPMCpm670FKhT.webp",
    "prepTime": "15",
    "calories": "220",
    "weight": "320",
    "recommendations": [
      {
        "itemId": "a1cf8693-8514-4542-a2b9-e3fd13f86f95",
        "reason": {
          "ar": "",
          "en": "The exotic, tangy passion fruit cuts through the rich tahini and earthy falafel flavors."
        }
      },
      {
        "itemId": "3178ac05-fef6-43ce-a897-ea01df50a79f",
        "reason": {
          "ar": "",
          "en": "The vibrant, sparkling acidity of the mojito balances the comforting, crispy fried potato."
        }
      }
    ],
    "order": 2
  },
  "73af14bc-7343-4743-bcb1-776629f14d1b": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي كرك (يُقدَّم لشخصين)",
      "en": "Karak Tea (Serve For 2)"
    },
    "description": {
      "ar": "شاي كرك غني يُحضَّر مع التوابل والحليب… جريء، كريمي وعطري بعمق.",
      "en": "Rich karak tea brewed with spices and milk, bold, creamy and deeply aromatic."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PMeD7bjVo7gQFn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PMeD7bjVo7gQFn.webp",
    "prepTime": "18",
    "calories": "260",
    "weight": "300",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 4
  },
  "dd30a93f-661c-4099-90c4-74dc9f31a3a3": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "بيبّرمينت ساور",
      "en": "Peppermint Sour"
    },
    "description": {
      "ar": "انتعاش النعناع مع الليمون والتفاح الأخضر، نكهة منعشة ونابضة بالحيوية.",
      "en": "Cooling peppermint blended with zesty lime and green apple, crisp, vibrant and irresistibly refreshing."
    },
    "price": "37",
    "priceValue": 37,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3UXm0ykYjJP1NV9.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3UXm0ykYjJP1NV9.webp",
    "prepTime": "15",
    "calories": "215",
    "weight": "320",
    "recommendations": [
      {
        "itemId": "fb3c796f-b84e-469b-96ec-01b9b6f01018",
        "reason": {
          "ar": "",
          "en": "The sharp, cooling peppermint and apple notes slice through the rich, melty cheese filling perfectly."
        }
      },
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The zesty drink echoes the fresh, lemony parsley notes of the salad, creating a vibrant pairing."
        }
      }
    ],
    "order": 11
  },
  "8dc252c0-789f-4024-9414-67faa20f33d8": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "موهيتو مشكل التوت",
      "en": "Mixberry Mojito"
    },
    "description": {
      "ar": "مزيج غني من التوت مع النعناع والليمون، منعش، متوازن ونابض بالحيوية.",
      "en": "A burst of juicy berries with fresh mint and zesty lime, blended into a crisp, refreshing and irresistibly vibrant mix."
    },
    "price": "37",
    "priceValue": 37,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3T6q6I32GFBkdPS.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3T6q6I32GFBkdPS.webp",
    "prepTime": "15",
    "calories": "230",
    "weight": "320",
    "recommendations": [
      {
        "itemId": "21abfb80-c2e5-413d-9019-5cc3de9121ae",
        "reason": {
          "ar": "",
          "en": "The sweet berry notes contrast beautifully with the salty, grilled halloumi cheese."
        }
      },
      {
        "itemId": "6377546c-aff4-488d-ac30-ad27245054db",
        "reason": {
          "ar": "",
          "en": "The crisp, fruity fizz of the mojito acts as a refreshing palate cleanser for the savory, cajun-spiced fries."
        }
      }
    ],
    "order": 4
  },
  "b9b94ca2-d99d-4891-baeb-85b708e7ce08": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "ستروبيري دريم",
      "en": "Strawberry Dream"
    },
    "description": {
      "ar": "مزيج الفراولة الحلوة مع لمسات الحمضيات، خفيف ومنعش بنعومة حالمة.",
      "en": "Sweet strawberry blended with orange and citrus notes, light, refreshing and delightfully smooth."
    },
    "price": "37",
    "priceValue": 37,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3TEdDbqSkrTDOob.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3TEdDbqSkrTDOob.webp",
    "prepTime": "16",
    "calories": "240",
    "weight": "330",
    "recommendations": [
      {
        "itemId": "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1",
        "reason": {
          "ar": "",
          "en": "The light, refreshing strawberry drink pairs elegantly with the airy, milk-soaked sponge cake."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The sweet citrus and berry notes of the drink cut through the dense richness of the cheesecake."
        }
      }
    ],
    "order": 6
  },
  "4e6ad732-3641-436b-803f-2a957c2416a8": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "موهيتو الفراولة",
      "en": "Strawberry Mojito"
    },
    "description": {
      "ar": "انتعاش الفراولة الحلوة مع النعناع الطازج والليمون، نكهة مشرقة ومنعشة بنعومة متوازنة.",
      "en": "Sweet strawberries with fresh mint and lime, bright, juicy and refreshingly smooth."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3SrzxjFWUdIDEjr.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3SrzxjFWUdIDEjr.webp",
    "prepTime": "15",
    "calories": "210",
    "weight": "320",
    "recommendations": [
      {
        "itemId": "a1cf8693-8514-4542-a2b9-e3fd13f86f95",
        "reason": {
          "ar": "",
          "en": "The juicy, bright strawberry flavors offer a sweet contrast to the savory, spiced falafel."
        }
      },
      {
        "itemId": "3178ac05-fef6-43ce-a897-ea01df50a79f",
        "reason": {
          "ar": "",
          "en": "A refreshing, minty berry sip perfectly balances the golden, crispy exterior of the croquettes."
        }
      }
    ],
    "order": 1
  },
  "5a793827-e29d-4e79-9ed9-1db35563c95a": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "موهيتو الخوخ",
      "en": "Mojito Peach"
    },
    "description": {
      "ar": "خوخ عصيري مع النعناع والليمون، خفيف ومنعش بحلاوة ناعمة.",
      "en": "Juicy peach with fresh mint and lime, light, refreshing and delicately sweet."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3TAvkG6N7eyGidi.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3TAvkG6N7eyGidi.webp",
    "prepTime": "15",
    "calories": "225",
    "weight": "320",
    "recommendations": [
      {
        "itemId": "fb3c796f-b84e-469b-96ec-01b9b6f01018",
        "reason": {
          "ar": "",
          "en": "The delicate sweetness of the peach mojito perfectly complements the savory, fried cheese rolls."
        }
      },
      {
        "itemId": "21abfb80-c2e5-413d-9019-5cc3de9121ae",
        "reason": {
          "ar": "",
          "en": "The light, fruity drink provides a refreshing contrast to the salty, grilled halloumi and olives."
        }
      }
    ],
    "order": 5
  },
  "a65088c9-ee60-43df-be57-1e77c7380923": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "اسياس سبيشل",
      "en": "Asya's Special"
    },
    "description": {
      "ar": "خليط جريء من التوت والحمضيات مع دفعة طاقة، حيوي، منعش ومليء بالحياة.",
      "en": "A bold mix of berries with citrus and energy boost, vibrant, juicy and full of life."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Tbg9vBqCrlYPRO.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Tbg9vBqCrlYPRO.webp",
    "prepTime": "16",
    "calories": "260",
    "weight": "340",
    "dietaryLabels": [
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "The vibrant berry and citrus mix of the drink pairs naturally with a fresh assortment of sweet fruits."
        }
      },
      {
        "itemId": "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1",
        "reason": {
          "ar": "",
          "en": "The energetic, fruity notes of the special drink add a lively contrast to the soft, milky dessert."
        }
      }
    ],
    "order": 7
  },
  "68863cd6-578d-4aeb-ad70-21c0c7933f59": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "بينا كولادا",
      "en": "Pina Colada"
    },
    "description": {
      "ar": "جوز الهند الناعم مع الأناناس الناضج، كريمي ومنعش بلمسة استوائية فاخرة.",
      "en": "Silky coconut and ripe pineapple, smooth, creamy and beautifully tropical."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3UEocXmt5TXX93T.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3UEocXmt5TXX93T.webp",
    "prepTime": "17",
    "calories": "320",
    "weight": "340",
    "recommendations": [
      {
        "itemId": "a1cf8693-8514-4542-a2b9-e3fd13f86f95",
        "reason": {
          "ar": "",
          "en": "The creamy coconut and tropical pineapple offer a sweet, cooling contrast to the spiced falafel."
        }
      },
      {
        "itemId": "6377546c-aff4-488d-ac30-ad27245054db",
        "reason": {
          "ar": "",
          "en": "The rich, silky tropical drink pairs wonderfully with the salty, cajun-spiced crunch of the fries."
        }
      }
    ],
    "order": 9
  },
  "0e418830-7764-4a44-8ba1-06b596506892": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "سان سيباستيان",
      "en": "San Sebastian"
    },
    "description": {
      "ar": "تشيز كيك سان سيباستيان غنية بالقوام الكريمي مع طبقة علوية مكرملة ومخبوزة بإتقان، تُقدم مع صوص الشوكولاتة الفاخر لتجربة تحلية استثنائية.",
      "en": "Creamy San Sebastian cheesecake with a perfectly caramelized top, served with rich chocolate sauce for an indulgent dessert experience."
    },
    "price": "57",
    "priceValue": 57,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH479AXIrq4DSG51y.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH479AXIrq4DSG51y.webp",
    "recommendations": [
      {
        "itemId": "a55cdfa6-fee8-46c1-a474-c5ab8922066c",
        "reason": {
          "ar": "تتغلغل حموضة القهوة المقطرة الساخنة بنقائها وإشراقها في قوام التشيز كيك الغني والكريمي المكرمل لتمنحكم توازناً مثالياً.",
          "en": "The clean, bright acidity of the hot drip coffee cuts right through the rich, caramelized creaminess of the cheesecake."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "تتوازن النكهات القوية والمرّة قليلاً للشاي الأسود بشكل مثالي مع المذاق الغني والحلو لمكونات الحليب في هذه الحلوى الفاخرة.",
          "en": "The robust, slightly astringent notes of black tea perfectly balance the heavy, sweet dairy profile of this indulgent dessert."
        }
      }
    ],
    "order": 5
  },
  "8987cc38-505b-48e4-a821-c534ab5fbaac": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي تركي بالحليب",
      "en": "Turkish Tea With Milk"
    },
    "description": {
      "ar": "شاي أسود ممزوج بالحليب… ناعم، كريمي ومريح.",
      "en": "Black tea blended with milk, smooth, creamy and comforting."
    },
    "price": "14",
    "priceValue": 14,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PW78zb5ZdbLLbi.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PW78zb5ZdbLLbi.webp",
    "prepTime": "16",
    "calories": "220",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 5
  },
  "aac2d932-f051-472d-8951-d9f400dc4f07": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي مغربي (إبريق صغير)",
      "en": "Moroccan Tea (Small Pot)"
    },
    "description": {
      "ar": "شاي مغربي منعش بالنعناع… تجربة عطرية متوازنة.",
      "en": "Moroccan green tea with fresh mint, aromatic, light and refreshingly sweet. Aromatic Moroccan tea with mint, smooth, vibrant and perfectly balanced. Traditional Moroccan mint tea, rich in aroma, smooth and ideal for sharing."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PaLXSpjQ3hHWZT.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PaLXSpjQ3hHWZT.webp",
    "options": [
      {
        "name": "Medium",
        "price": "45",
        "pricingType": "variation",
        "order": 0
      },
      {
        "name": "Big",
        "price": "52",
        "pricingType": "variation",
        "order": 1
      }
    ],
    "prepTime": "20",
    "calories": "170",
    "weight": "500",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      }
    ],
    "order": 7
  },
  "8d7b9a9c-9f0f-44d2-bd06-3b5a69272490": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي أخضر",
      "en": "Green Tea"
    },
    "description": {
      "ar": "شاي أخضر ناعم مُنقوع مع النعناع الطازج والليمون… خفيف، نقي ومنعش بطبيعته.",
      "en": "Delicate green tea infused with fresh mint and lemon, light, clean and naturally refreshing."
    },
    "price": "20",
    "priceValue": 20,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PE6NZSZ1HvFCiY.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PE6NZSZ1HvFCiY.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "250",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "nutritionalInfo.lowCalorie",
        "label": {
          "ar": "منخفض السعرات",
          "en": "Low Calorie"
        }
      }
    ],
    "order": 2
  },
  "8e16cdbe-12a4-466c-bd64-74cad966ea0f": {
    "category": "f5fe6ad8-b5ee-44cc-914e-e2f79927f2b8",
    "name": {
      "ar": "ماتشا بالفراولة",
      "en": "Strawberry Matcha"
    },
    "description": {
      "ar": "ماتشا يابانية بطبقات مع بوريه الفراولة الحلوة والحليب، نكهة حيوية وناعمة بتوازن مثالي.",
      "en": "Ceremonial Japanese matcha layered with sweet strawberry puree and milk, vibrant, smooth and perfectly balanced."
    },
    "price": "34",
    "priceValue": 34,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Se8bTTYIZBsf5I.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Se8bTTYIZBsf5I.webp",
    "prepTime": "17",
    "calories": "240",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, caramelized notes of the cheesecake beautifully complement the earthy matcha and sweet strawberry flavors without overpowering them."
        }
      },
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "The milky sweetness and flaky layers of the cold baklava enhance the velvety, fruity notes of the strawberry matcha."
        }
      }
    ],
    "order": 2
  },
  "0e7f4325-c3a2-4f4d-bb92-0d2a98cc53fc": {
    "category": "927fc8d2-117e-44b9-8ab5-08522f536d0f",
    "name": {
      "ar": "باشن فروت-مانجو فروزن",
      "en": "Passion-Mango Frozen"
    },
    "description": {
      "ar": "مزيج استوائي منعش من الباشن فروت والمانجو، متوازن بطبيعته وحلاوته.",
      "en": "A refreshing tropical blend of passion fruit & mango, naturally sweetened and perfectly balanced."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XVlFchpIivCYDT.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XVlFchpIivCYDT.webp",
    "prepTime": "18",
    "calories": "250",
    "weight": "360",
    "dietaryLabels": [
      {
        "key": "nutritionalInfo.noAddedSugar",
        "label": {
          "ar": "بدون سكر مضاف",
          "en": "No Added Sugar"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "",
          "en": "The bright, tropical acidity of the frozen drink acts as a perfect palate cleanser to cut through the rich, creamy parmesan dressing of the salad."
        }
      },
      {
        "itemId": "c6e8da58-5274-42e3-9cfd-b2dda9ec1b57",
        "reason": {
          "ar": "",
          "en": "The sweet and tangy mango-passion flavor provides a refreshing contrast to the warm, savory cheese and tomato base of the pizza."
        }
      }
    ],
    "order": 8
  },
  "66cb2cd2-cb25-4a93-a532-0cf338f7d9d5": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي الشتاء",
      "en": "Winter Tea"
    },
    "description": {
      "ar": "مزيج عشبي دافئ بلمسات من النعناع والحمضيات… مهدّئ، عطري ويمنح إحساسًا بالراحة.",
      "en": "A warming herbal blend with mint and citrus notes, soothing, aromatic and comforting."
    },
    "price": "20",
    "priceValue": 20,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PISqOy5FttGzve.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PISqOy5FttGzve.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "250",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "nutritionalInfo.lowCalorie",
        "label": {
          "ar": "منخفض السعرات",
          "en": "Low Calorie"
        }
      }
    ],
    "order": 3
  },
  "e6cde5c2-a54d-444d-9bad-996ec74bcbc1": {
    "category": "f5fe6ad8-b5ee-44cc-914e-e2f79927f2b8",
    "name": {
      "ar": "ماتشا بالمانجو",
      "en": "Mango Matcha"
    },
    "description": {
      "ar": "ماتشا يابانية فاخرة ممزوجة ببوريه المانجو الاستوائي والحليب، كريمية ومنعشة بلمسة طبيعية مشرقة.",
      "en": "Premium Japanese matcha with tropical mango puree and milk, creamy, refreshing and naturally uplifting."
    },
    "price": "34",
    "priceValue": 34,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ShxaRKEL6k1is9.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ShxaRKEL6k1is9.webp",
    "prepTime": "17",
    "calories": "230",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "92180575-7126-4df5-b347-0e2a2adab25f",
        "reason": {
          "ar": "",
          "en": "The textural crunch and sweetness of the cake contrast beautifully with the smooth, earthy, and fruity notes of the mango matcha."
        }
      },
      {
        "itemId": "d318e053-27c9-4e44-bf49-e8ad6cd7e4b1",
        "reason": {
          "ar": "",
          "en": "The milky, caramel-soaked sponge of the Traliçe mirrors the creamy layers of the matcha drink while adding a deep caramel sweetness."
        }
      }
    ],
    "order": 3
  },
  "b436140c-47e7-4ec4-9695-c1e821d4723f": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير الجزر",
      "en": "Carrot Juice"
    },
    "description": {
      "ar": "جزر طازج يُعصر بعناية ليمنحك طعمًا غنيًا ومتوازنًا…\nصحي، ناعم ومليء بالحيوية.",
      "en": "Naturally sweet carrots, freshly pressed for a smooth, rich and revitalizing taste."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLoEGeAVKUqkWURH.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLoEGeAVKUqkWURH.webp",
    "prepTime": "15",
    "calories": "110",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "774cacb7-7b1b-4fe8-9389-caa3444926f9",
        "reason": {
          "ar": "",
          "en": "The earthy sweetness of the carrot juice highlights the savory, fresh vegetables in the omelette for a wholesome and balanced breakfast."
        }
      },
      {
        "itemId": "93db7fe1-0187-437c-9b85-f9704ec58e20",
        "reason": {
          "ar": "",
          "en": "The natural sweetness and vibrant freshness of the juice offer a refreshing lift against the warm, deeply savory melted cheese of the gozleme."
        }
      }
    ],
    "order": 8
  },
  "92180575-7126-4df5-b347-0e2a2adab25f": {
    "category": "8c4ad6c8-a1ea-446d-9f0e-3900fd39609d",
    "name": {
      "ar": "كيكة كرانش",
      "en": "Crunch Cake"
    },
    "description": {
      "ar": "كيكة الشوكولاتة الغنية والمقرمشة، مكونة من طبقات ناعمة الملمس ونكهة الكاكاو العميقة، لتمنحكم تجربة تحلية فاخرة ومثالية.",
      "en": "Rich chocolate crunch cake layered with smooth texture and deep cocoa flavor for a perfectly indulgent dessert experience."
    },
    "price": "50",
    "priceValue": 50,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLmafLWU70SDE5G8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLmafLWU70SDE5G8.webp",
    "recommendations": [
      {
        "itemId": "0ca1bcce-95a9-49bc-aa58-d862993d421e",
        "reason": {
          "ar": "تطهر مرارة الأمريكانو القوية والمحمصة حاسة التذوق بعد حلاوة الكيك الغنية والمقرمشة.",
          "en": "The bold, roasted bitterness of the Americano cleanses the palate after the sweet, rich crunch of the cake."
        }
      },
      {
        "itemId": "c97ed7b7-c24c-4bf8-af71-6378bcbe56e3",
        "reason": {
          "ar": "يتناغم الحليب المحلى والمبرد بلمسته الحريرية في السبانش لاتيه مع قرمشة الكيك اللذيذة، ليمنحكم مزيجاً رائعاً من المذاق الغني.",
          "en": "The chilled, silky sweetened milk of the Spanish latte harmonizes with the sweet crunch of the cake for a highly indulgent pairing."
        }
      }
    ],
    "order": 6
  },
  "ab4ff496-559f-4c8d-8052-a20b900ffeb0": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "مياه غازية تركية",
      "en": "Turkish Sparkling Water"
    },
    "description": {
      "ar": "مياه غازية منعشة بفقاعات حيوية ومذاق نقي صافٍ. .",
      "en": "Crisp sparkling water with lively bubbles and a clean finish. A refreshing fizzy alternative to sweet soft drinks."
    },
    "price": "10",
    "priceValue": 10,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YlebZuKknTXYU8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YlebZuKknTXYU8.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "500",
    "order": 3
  },
  "04e64d7b-d691-48ee-9b7a-a2f978c3e09e": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "بيرة",
      "en": "Beer"
    },
    "description": {
      "ar": "مشروب بارد بلون ذهبي ورغوة ناعمة…\nنكهة متوازنة بلمسة مرارة خفيفة، مع قوام غني ومنعش",
      "en": "A cold beer with a smooth body and a crisp, refreshing finish. Great for pairing with grilled food and savory bites."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGMS6T66GTmcNd59.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VKGMS6T66GTmcNd59.webp",
    "prepTime": "15",
    "calories": "220",
    "weight": "330",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "order": 8
  },
  "be6b7932-2712-42e0-8f48-a6b4a7528b80": {
    "category": "ab88f484-c88f-49fb-905f-d13cbb35dc76",
    "name": {
      "ar": "بيتزا الدجاج",
      "en": "Chicken Pizza"
    },
    "description": {
      "ar": "قطع دجاج طرية مغطاة بصلصة طماطم غنية وجبنة ذائبة، تمنحكم تجربة بيتزا دافئة وشهية.",
      "en": "Tender chicken layered with rich tomato sauce and melted cheese, creating a warm and satisfying pizza experience."
    },
    "price": "58",
    "priceValue": 58,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJbXcLVXl0WBFrKlm.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJbXcLVXl0WBFrKlm.webp",
    "recommendations": [
      {
        "itemId": "0ad35147-8d8d-49c5-a25c-f574b7e07145",
        "reason": {
          "ar": "يضفي خل البلسميك الحاد وجرجير السلطة الطازج تباينًا حمضيًا مقرمشًا يوازن غنى الجبن المخبوز والدجاج على البيتزا.",
          "en": "The sharp balsamic glaze and fresh arugula in the salad provide a crisp, acidic contrast to the rich, baked cheese and chicken on the pizza."
        }
      },
      {
        "itemId": "b1268bb2-150f-4ca7-afb5-f2fa21507da5",
        "reason": {
          "ar": "إن المذاق الحامض والمنعش لليمونادة ينظف الحنك ببراعة بين اللقيمات الغنية والشهية لبيتزا الدجاج.",
          "en": "The tart, fruity burst of the lemonade cleanses the palate perfectly between rich, savory bites of the chicken pizza."
        }
      }
    ],
    "order": 5
  },
  "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير البرتقال",
      "en": "Orange Juice"
    },
    "description": {
      "ar": "برتقال طازج معصور يوميًا…\nحلاوة طبيعية وانتعاش نابض بالحيوية.",
      "en": "Freshly squeezed sun-ripened oranges, bursting with juicy sweetness and vibrant freshness."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3WD4JFMAMFeb4yp.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3WD4JFMAMFeb4yp.webp",
    "prepTime": "15",
    "calories": "125",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "97c60f8a-309e-46fb-b100-da93a603410d",
        "reason": {
          "ar": "",
          "en": "The bright, citrusy acidity of the fresh orange juice cuts perfectly through the rich, buttery creaminess of the scrambled eggs."
        }
      },
      {
        "itemId": "fe2a23e7-beae-402a-a6b7-93a5c2c8983d",
        "reason": {
          "ar": "",
          "en": "The zesty sweetness of the juice complements the salty, savory cheese and the nutty sesame crunch of the simit."
        }
      }
    ],
    "order": 7
  },
  "bf59e9ab-86f6-4478-8732-79acec15bcbc": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير المانجو",
      "en": "Mango Juice"
    },
    "description": {
      "ar": "مانجو ناضجة تحت أشعة الشمس، تُحضَّر بقوام ناعم وغني…\nنكهة استوائية طبيعية بلمسة فاخرة.",
      "en": "Sun-ripened mango blended to a smooth, rich and naturally sweet tropical finish."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3VxpXef2QoeHndo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3VxpXef2QoeHndo.webp",
    "prepTime": "15",
    "calories": "160",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "The rich, tropical sweetness of the mango juice beautifully counters the tangy pomegranate molasses and crisp vegetables in the salad."
        }
      },
      {
        "itemId": "8712070b-6f24-4f60-bbc4-50d45db96a8f",
        "reason": {
          "ar": "",
          "en": "The sweet, velvety mango juice provides a refreshing contrast to the savory, spiced meat and rich tahini notes of the hummus."
        }
      }
    ],
    "order": 1
  },
  "6bc0f672-b25d-41cb-9bc3-a64e65307cda": {
    "category": "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
    "name": {
      "ar": "شاي الخوخ المثلج",
      "en": "Peach Ice Tea"
    },
    "description": {
      "ar": "خوخ ناضج تحت الشمس يُمزج مع شاي بارد بالنعناع…\nناعم، منعش، ومتوازن برقة.",
      "en": "Sun-ripened peach with cold brewed tea and mint, delicate, refreshing and naturally smooth."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Xd5Ub2UUE8qkuE.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Xd5Ub2UUE8qkuE.webp",
    "prepTime": "16",
    "calories": "120",
    "weight": "300",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 1
  },
  "8fb5c495-bced-405e-8abe-40938f6a2be0": {
    "category": "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
    "name": {
      "ar": "شاي الليمون المثلج",
      "en": "Lemon Ice Tea"
    },
    "description": {
      "ar": "شاي طازج مُحضّر بعناية، مع لمسة ليمون طبيعية…\nيُقدَّم بارداً ليمنحك انتعاشاً صافياً.",
      "en": "Freshly brewed tea infused with natural lemon flavor, served chilled over ice."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XlKM6jHNQKIuTq.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XlKM6jHNQKIuTq.webp",
    "prepTime": "16",
    "calories": "110",
    "weight": "300",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 3
  },
  "408eba99-a9c8-4630-9c76-c17c552941a7": {
    "category": "11a2b45c-14b6-4e1c-a9ed-1b9093cf37aa",
    "name": {
      "ar": "عيران",
      "en": "Ayran"
    },
    "description": {
      "ar": "مشروب تركي تقليدي من الزبادي…\nمتوازن، كريمي، منعش بلمسة ملوحة خفيفة.",
      "en": "Traditional Turkish yogurt drink, perfectly balanced, creamy, refreshing and lightly salted."
    },
    "price": "20",
    "priceValue": 20,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YBDbaOONYskzGn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YBDbaOONYskzGn.webp",
    "prepTime": "15",
    "calories": "130",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 1
  },
  "61fc7728-4ccf-4745-a8af-9bc19f408038": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير الرمان",
      "en": "Pomegranate Juice"
    },
    "description": {
      "ar": "رمان طازج بنكهة غنية ولمسة حامضية خفيفة…\nمنعش، عميق، ومميز في كل رشفة.",
      "en": "Freshly pressed pomegranate, rich, vibrant and naturally tangy with a refreshing finish."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3WG4jxqfiB6yxUg.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3WG4jxqfiB6yxUg.webp",
    "prepTime": "15",
    "calories": "135",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "a968deb8-026a-48b3-adba-240b92980d01",
        "reason": {
          "ar": "",
          "en": "The deep, tangy acidity of the pomegranate juice cuts right through the rich, fatty marbling of the dry-aged steak, enhancing its savory depth."
        }
      },
      {
        "itemId": "0991b4d5-5f1b-44e6-8e91-e91959db281b",
        "reason": {
          "ar": "",
          "en": "The tartness of the juice echoes the pomegranate molasses in the salad, while contrasting the rich, crunchy toasted walnuts."
        }
      }
    ],
    "order": 9
  },
  "dddaadc3-9bae-40fb-b7fd-54adcaa41017": {
    "category": "11a2b45c-14b6-4e1c-a9ed-1b9093cf37aa",
    "name": {
      "ar": "عيران بالريحان",
      "en": "Ayran W Basil"
    },
    "description": {
      "ar": "لمسة مختلفة من العيران مع ريحان طازج…\nخفيف، عشبي، وانسيابي بنعومة فريدة.",
      "en": "A refreshing twist of ayran with fresh basil, light, herbal and uniquely smooth."
    },
    "price": "23",
    "priceValue": 23,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YJNZXK1Dpooas6.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YJNZXK1Dpooas6.webp",
    "prepTime": "15",
    "calories": "125",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 3
  },
  "a1f1dab3-f336-4ab4-ad82-8122687ec772": {
    "category": "11a2b45c-14b6-4e1c-a9ed-1b9093cf37aa",
    "name": {
      "ar": "عيران بالصودا",
      "en": "Ayran W Soda"
    },
    "description": {
      "ar": "عيران بنكهة متجددة مع مياه فوّارة…\nخفيف، هوائي، وانتعاش يدوم.",
      "en": "Ayran lifted with sparkling mineral water, light, airy and ultra refreshing."
    },
    "price": "24",
    "priceValue": 24,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YN6xeevuohKYcP.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YN6xeevuohKYcP.webp",
    "prepTime": "15",
    "calories": "115",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 4
  },
  "3139c3c3-4c00-4286-b4f1-01dab882d635": {
    "category": "11a2b45c-14b6-4e1c-a9ed-1b9093cf37aa",
    "name": {
      "ar": "عيران بالخيار",
      "en": "Ayran With Cucumber"
    },
    "description": {
      "ar": "عيران مع خيار طازج…\nمنعش، بارد، ومثالي لأيام الصيف.",
      "en": "Ayran with fresh cucumber, crisp, cooling and perfectly refreshing."
    },
    "price": "24",
    "priceValue": 24,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YQckSqRvD2mFT1.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YQckSqRvD2mFT1.webp",
    "prepTime": "15",
    "calories": "120",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 5
  },
  "7c20069b-3e20-4edb-b3bf-75bf82b44cdd": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "مشروب تشرشل",
      "en": "Churchill"
    },
    "description": {
      "ar": "مشروب بارد جريء ومنعش يُقدَّم مثلّجًا…\nفقاعاته الحيوية ونكهته المنعشة تجعله رفيقًا مثاليًا لكل وجبة.",
      "en": "A chilled, refreshing soft drink with a crisp finish. Perfect for cooling down and pairing with any meal."
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YUxVEZB0VbNBCG.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YUxVEZB0VbNBCG.webp",
    "prepTime": "15",
    "calories": "170",
    "weight": "250",
    "order": 1
  },
  "10669c1f-596c-4f5f-80a5-d05811ffd71a": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "ريدبول",
      "en": "Redbull"
    },
    "description": {
      "ar": "مشروب طاقة بارد بنكهة قوية ومنعشة…\nيمنحك دفعة سريعة وانتعاشًا مليئًا بالحيوية",
      "en": "A cold energy drink with a bold, fizzy kick. Ideal for a quick boost with a sharp, sweet taste."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YYBm9n9SaitzNV.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YYBm9n9SaitzNV.webp",
    "prepTime": "15",
    "calories": "190",
    "weight": "250",
    "order": 2
  },
  "138f5af0-856f-440b-87d8-e1408d9e39c1": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير التفاح الأخضر",
      "en": "Apple Juice"
    },
    "description": {
      "ar": "تفاح أخضر فاخر من مزارع مختارة…\nمقرمش، منعش وخفيف بنقاء طبيعي.",
      "en": "Premium green apple from select orchards, crisp, juicy and refreshingly light finish."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3W3xqBK78dBwdb1.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3W3xqBK78dBwdb1.webp",
    "prepTime": "15",
    "calories": "130",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "c1983103-608f-418e-a037-d79387429663",
        "reason": {
          "ar": "",
          "en": "The crisp, tart notes of green apple juice beautifully cut through the rich, creamy melted mozzarella of the omelette."
        }
      },
      {
        "itemId": "44ee2cb1-0808-4e9e-982d-66f24c1d45e9",
        "reason": {
          "ar": "",
          "en": "The refreshing sweetness of the apple juice provides a bright contrast to the savory, umami-rich parmesan and creamy Caesar dressing."
        }
      }
    ],
    "order": 4
  },
  "bde937b8-d111-42b3-89e6-7822ee0c18b7": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير الأناناس",
      "en": "Pineapple Juice"
    },
    "description": {
      "ar": "أناناس طازج بطعم حلو ومنعش…\nنكهة استوائية نابضة بالحياة في كل رشفة.",
      "en": "Ripe, juicy pineapple, sweet, vibrant and bursting with tropical freshness."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzU8wDaKf6twI0Mp.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzU8wDaKf6twI0Mp.webp",
    "prepTime": "15",
    "calories": "140",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "a1cf8693-8514-4542-a2b9-e3fd13f86f95",
        "reason": {
          "ar": "",
          "en": "The vibrant tropical sweetness of pineapple perfectly balances the earthy, savory crunch of the falafel and creamy hummus."
        }
      },
      {
        "itemId": "11128019-e4f1-4d2d-9665-4a8731a68b77",
        "reason": {
          "ar": "",
          "en": "The juicy, sweet acidity of the pineapple acts as a refreshing palate cleanser against the smoky, charcoal-grilled spices of the chicken."
        }
      }
    ],
    "order": 3
  },
  "38f4ff6d-c5df-4fb3-be4a-59aa8bf74d58": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير الفراولة",
      "en": "Strawberry Juice"
    },
    "description": {
      "ar": "فراولة مختارة بعناية، غنية بالعصارة والحلاوة…\nانتعاش متوازن بنهاية ناعمة ولطيفة.",
      "en": "Handpicked strawberries, rich, juicy and naturally sweet with a refreshing finish."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfEJtJl9Q3qKz20.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfEJtJl9Q3qKz20.webp",
    "prepTime": "15",
    "calories": "120",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The natural, vibrant sweetness of fresh strawberries enhances the deeply rich and caramelized creaminess of the cheesecake."
        }
      },
      {
        "itemId": "7704310c-87e1-4d73-a503-a9f32854973c",
        "reason": {
          "ar": "",
          "en": "The fruity, refreshing finish of the strawberry juice provides a light, sweet contrast to the savory, comforting layers of the pastry."
        }
      }
    ],
    "order": 2
  },
  "20fa5e31-1a88-4e58-b9d5-ed4f4d32e3ac": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "عصير ميكس طازج",
      "en": "Fresh Mix"
    },
    "description": {
      "ar": "برتقال طازج مع تفاح أخضر وجزر…\nمزيج حيوي غني بالانتعاش والطاقة.",
      "en": "Sun-kissed orange, crisp green apple and fresh carrot, juicy, vibrant and naturally energizing."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3WA0PzNn4XUIPmD.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3WA0PzNn4XUIPmD.webp",
    "prepTime": "15",
    "calories": "170",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "97c60f8a-309e-46fb-b100-da93a603410d",
        "reason": {
          "ar": "",
          "en": "The earthy sweetness of carrot and zesty orange complement the soft, buttery richness of the scrambled eggs for a revitalizing morning meal."
        }
      },
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The vibrant, energizing citrus notes of the juice beautifully echo the fresh lemon and parsley in the tabbouleh."
        }
      }
    ],
    "order": 6
  },
  "4898647d-c2c9-4dd0-866a-6b44a619e786": {
    "category": "5c90c4d7-8c7b-4c07-86c0-531eea82ef0a",
    "name": {
      "ar": "إنرجايزر",
      "en": "Energizer"
    },
    "description": {
      "ar": "مزيج غني من الموز الكريمي، الفراولة وعصير البرتقال الطازج…\nطاقة طبيعية بطعم ناعم ومنعش.",
      "en": "Creamy banana, ripe strawberries and fresh orange juice, smooth, vibrant and bursting with energy."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3W76LyiHTCe0fHr.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3W76LyiHTCe0fHr.webp",
    "prepTime": "15",
    "calories": "210",
    "weight": "300",
    "recommendations": [
      {
        "itemId": "daf67786-46b5-445d-973f-cf8748d7e16f",
        "reason": {
          "ar": "",
          "en": "The creamy banana and sweet strawberry blend harmonizes with the salty, rich variety of Anatolian cheeses and crunchy walnuts."
        }
      },
      {
        "itemId": "3a13ab9e-66b3-45db-9442-606f00cb5a54",
        "reason": {
          "ar": "",
          "en": "The smoothie's rich fruit profile pairs seamlessly with the homemade jams and tahini, creating an indulgent, sweet breakfast ensemble."
        }
      }
    ],
    "order": 5
  },
  "94cec6c5-0caa-43c1-a8fb-653b82a88309": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "كوكا كولا",
      "en": "Coca-Cola"
    },
    "description": {
      "ar": "فقاعات منعشة ولمسة كراميل متوازنة، مثالية مع الأطباق المالحة.",
      "en": "Classic cola served cold with bold caramel notes and lively fizz. A familiar, satisfying sip that complements savory food."
    },
    "price": "10",
    "priceValue": 10,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Z5hQ4932kli9Os.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Z5hQ4932kli9Os.webp",
    "prepTime": "15",
    "calories": "180",
    "weight": "330",
    "order": 6
  },
  "b830f64c-a3fb-4fb1-81ff-74f18f79ab0a": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "فانتا",
      "en": "Fanta"
    },
    "description": {
      "ar": "مشروب غازي بنكهة برتقال…\nمنعش، مليء بالحيوية، ويضيف لمسة ممتعة لكل لحظة.",
      "en": "A bright and fruity carbonated drink with a sweet, playful flavor. Served chilled for a refreshing and bubbly experience."
    },
    "price": "10",
    "priceValue": 10,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ZBGgYfHWiN4B7t.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ZBGgYfHWiN4B7t.webp",
    "prepTime": "15",
    "calories": "190",
    "weight": "330",
    "order": 7
  },
  "528fb6cd-81b9-4b9d-b9da-30edcdb77afd": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "سبرايت",
      "en": "Sprite"
    },
    "description": {
      "ar": "مشروب ليمون ولايم منعش…\nخفيف، فوّار، ويمنحك إحساسًا نظيفًا ومروّيًا",
      "en": "A lemon-lime soda with a crisp sparkle and clean citrus lift. Served cold for a light and refreshing taste."
    },
    "price": "10",
    "priceValue": 10,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ZFkM2MMGYmlvwr.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3ZFkM2MMGYmlvwr.webp",
    "prepTime": "15",
    "calories": "170",
    "weight": "330",
    "order": 9
  },
  "c3d5aaa1-b279-47a7-b745-dbf27c322d41": {
    "category": "11a2b45c-14b6-4e1c-a9ed-1b9093cf37aa",
    "name": {
      "ar": "عيران بالنعناع",
      "en": "Ayran With Mint"
    },
    "description": {
      "ar": "العيران الكلاسيكي مع نعناع طازج…\nبارد، عطري، وانتعاش مضاعف.",
      "en": "Classic ayran with fresh mint, cooling, aromatic and extra refreshing."
    },
    "price": "22",
    "priceValue": 22,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YGFD9gwe1xLo93.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3YGFD9gwe1xLo93.webp",
    "prepTime": "15",
    "calories": "125",
    "weight": "250",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 2
  },
  "1cb9d1b5-6d8f-493f-be1b-e57d084f065d": {
    "category": "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
    "name": {
      "ar": "شاي الكركديه بالتوت المثلج",
      "en": "Hibiscus Raspberry Ice Tea"
    },
    "description": {
      "ar": "مزيج غني من التوت مع نفحات الكركديه العطرية…\nحامضي خفيف، نابض بالحيوية ومنعش بكل رشفة.",
      "en": "Lush raspberry and blueberry with aromatic hibiscus, tangy, vibrant and irresistibly refreshing."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XhREICymmtydxt.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XhREICymmtydxt.webp",
    "prepTime": "16",
    "calories": "140",
    "weight": "300",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 2
  },
  "3e08c664-b982-41e3-b325-ab68a12f01b5": {
    "category": "7d087dc8-d4fa-4eb3-a017-f8a203431d2c",
    "name": {
      "ar": "هاتريك",
      "en": "HATTRICK"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "109",
    "priceValue": 109,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TzLgLKbb9Iavnh.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4TzLgLKbb9Iavnh.webp",
    "recommendations": [
      {
        "itemId": "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37",
        "reason": {
          "ar": "",
          "en": "The warm, slightly astringent notes of freshly brewed Turkish tea cleanse the palate between flavorful puffs of shisha."
        }
      },
      {
        "itemId": "c8c42df3-a6cf-4e2d-b900-0005fc67e07a",
        "reason": {
          "ar": "",
          "en": "Crisp, fresh seasonal fruits provide a hydrating and naturally sweet contrast to the thick, aromatic smoke."
        }
      }
    ],
    "order": 5
  },
  "f445e501-a9f9-411f-a223-371b0daeb695": {
    "category": "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
    "name": {
      "ar": "عصير الليمون بالنعناع",
      "en": "Lemon Mint Juice"
    },
    "description": {
      "ar": "ليمون طازج بنكهته المنعشة مع نعناع أخضر…\nحيوي، منعش، ومثالي لأيام الصيف.",
      "en": "Zesty sun-ripened lemon with crisp garden mint, refreshing, vibrant and perfectly balanced."
    },
    "price": "35",
    "priceValue": 35,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XuexYAMuMa7zbi.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XuexYAMuMa7zbi.webp",
    "prepTime": "18",
    "calories": "125",
    "weight": "300",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 5
  },
  "b1268bb2-150f-4ca7-afb5-f2fa21507da5": {
    "category": "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
    "name": {
      "ar": "ليمونادة التوت المشكّل",
      "en": "Mixberry Lemonade"
    },
    "description": {
      "ar": "ليمونادة تركية بوصفة منزلية، ممزوجة بتوت طازج…\nلمسة فاكهية غنية، منعشة ومليئة بالحياة.",
      "en": "Our signature Turkish lemonade, crafted with a house-made recipe, blended with fresh mixed berries for a vibrant twist. Refreshing, fruity, and perfectly balanced between sweet and citrus notes."
    },
    "price": "37",
    "priceValue": 37,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Y63SF65aysApbo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3Y63SF65aysApbo.webp",
    "prepTime": "18",
    "calories": "160",
    "weight": "300",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "order": 6
  },
  "35a25c13-d0b9-46e7-a712-630cf9928e0d": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "عنب",
      "en": "GRAPE"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4IXOhzgHVdG2yOM.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4IXOhzgHVdG2yOM.webp",
    "recommendations": [
      {
        "itemId": "aac2d932-f051-472d-8951-d9f400dc4f07",
        "reason": {
          "ar": "",
          "en": "The aromatic fresh mint in the Moroccan tea brilliantly enhances the sweet, fruity undertones of the grape shisha."
        }
      },
      {
        "itemId": "744474c5-cf88-4c22-bf13-6e05e38ff5c6",
        "reason": {
          "ar": "",
          "en": "The milky, nutty sweetness of the cold baklava rounds out the bold, fruity smoke for a luxurious lounging experience."
        }
      }
    ],
    "order": 4
  },
  "86820d79-cb6d-4bca-8e52-c539bd47d7a9": {
    "category": "2fa8427f-a3a4-4c67-a566-4a97f3764092",
    "name": {
      "ar": "خوخ",
      "en": "PEACH"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "99",
    "priceValue": 99,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4KgXABHythhCSeo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH4KgXABHythhCSeo.webp",
    "recommendations": [
      {
        "itemId": "c97ed7b7-c24c-4bf8-af71-6378bcbe56e3",
        "reason": {
          "ar": "",
          "en": "The chilled, creamy and caramelized espresso notes perfectly complement the delicate and sweet peach aroma."
        }
      },
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The burnt, caramelized crust and creamy center of the cheesecake pair effortlessly with the floral, fruity notes of peach smoke."
        }
      }
    ],
    "order": 14
  },
  "2b2ae56f-a3cf-4b9e-a197-5e29707e04c7": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "متبل",
      "en": "Mutabbal"
    },
    "description": {
      "ar": "مزيج ناعم من الباذنجان المشوي، يُعزَّز بحبوب الرمان، السماق، زيت الزيتون والنعناع.\nخفيف، متوازن… وغني بالنكهة.",
      "en": "A delicate mix of roasted eggplant enhanced with pomegranate seeds, sumac, olive oil and mint. Light, aromatic and refined."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2IDs7PhOYLOruFo.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2IDs7PhOYLOruFo.webp",
    "prepTime": "18",
    "calories": "280",
    "weight": "200",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "7b7c1ef3-04bd-4968-b1eb-2aad83376751",
        "reason": {
          "ar": "",
          "en": "The smoky, rich profile of the charcoal-grilled Adana Kebab perfectly complements the light, aromatic, and refreshing nature of the roasted eggplant."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The warm, crisp sesame crust of the freshly baked simit provides an ideal textural contrast for scooping up this delicate, creamy mezze."
        }
      }
    ],
    "order": 5
  },
  "37eceeb2-a6ef-475e-b5a2-1024ae622a41": {
    "category": "99cd0bc2-d9cc-4ae5-be3a-ff6316b646b9",
    "name": {
      "ar": "ليمونادة تركية",
      "en": "Turkish Lemonade"
    },
    "description": {
      "ar": "وصفة محضّرة بحرفية من الليمون الطازج والنعناع…\nنظيفة، منعشة، ومتوازنة بإتقان.",
      "en": "Handcrafted with fresh lemon and mint, clean, refreshing and perfectly balanced."
    },
    "price": "30",
    "priceValue": 30,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XpzCqS7OvTDuGF.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3XpzCqS7OvTDuGF.webp",
    "prepTime": "18",
    "calories": "130",
    "weight": "300",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "order": 4
  },
  "54633c97-9b3d-44ce-a902-01f1430c260e": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "ورق عنب محشي",
      "en": "Stuffed Grape Leaves"
    },
    "description": {
      "ar": "ورق عنب ملفوف بعناية بحشوة خفيفة ومتوازنة، يُقدم مع الزبادي والليمون والتوابل العطرية. ملمس أنيق وطعم متوازن... في كل قضمة.",
      "en": "Carefully rolled vine leaves with a light, balanced filling, served with yogurt, lemon, and aromatic spices. Elegant, balanced… in every bite."
    },
    "price": "38",
    "priceValue": 38,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzdpl287rxVlpqW8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzdpl287rxVlpqW8.webp",
    "prepTime": "22",
    "calories": "360",
    "weight": "240",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "ab194150-c362-49bc-8e2e-505915940ea4",
        "reason": {
          "ar": "",
          "en": "The fresh parsley and zesty lemon in the tabbouleh brighten the earthy, savory notes of the stuffed grape leaves."
        }
      },
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "",
          "en": "A creamy, slightly salty ayran provides a cooling, refreshing contrast to the aromatic spices of the vine leaves."
        }
      }
    ],
    "order": 6
  },
  "33c12c3e-1de8-4d9a-833c-9770603f05aa": {
    "category": "61e69fe8-3255-49c0-ad94-517a04184cd5",
    "name": {
      "ar": "فطور إلفان أبلا",
      "en": "Elvan Abla Breakfast"
    },
    "description": {
      "ar": "ابدأ يومك ليس فقط بوجبة فطور، بل بمائدة تشعرك بدفء البيت... فطور إلفان أبلا مستوحى من صباحيات العائلة التقليدية، حيث تجتمع الوفرة والدفء والمشاركة لتخلق تجربة لا تُنسى. تبدأ مائدتك بتشكيلة غنية ولذيذة... طبق أجبان مُعدّ بعناية يُقدَّم مع فواكه موسمية وخبز طازج ساخن يضبط إيقاع المائدة، يرافقه طماطم طازجة ومجموعة متنوعة من أساسيات الفطور الكلاسيكية. الزيتون الأخضر والأسود، واللبنة بالزعتر، والنكهة الجريئة لجبنة سورك تضيف عمقاً وأصالة على كل لقمة. تستمر التجربة مع أطباق دافئة ومريحة... شكشوكة تركية التقليدية المطهو بإتقان يضيف لمسة منزلية، بينما يُشكّل طبق المقالي المشكّلة — الذي يضم الفلافل، ولفائف الجبن المقرمشة، والسجق، والبطاطا المقرمشة، والخضروات — قطعة ايقونية نابضة بالحياة ومُشبعة. تنوّع من النكهات الأصيلة يُثري المائدة... الحمص والمحمّرة يحملان جوهر المطبخ الشرقي، يُكمّلهما زيت الزيتون بالزعتر ودبس الرمان لنهاية راقية ومنعشة. لحظات حلوة تُكمل الرحلة... تناغم الطحينة والدبس يتآلف بجمال مع الزبدة والعسل، بينما تُقدّم مربيات التين والتمر والمشمش حلاوة طبيعية في كل لقمة. النوتيلا تضيف لمسة عصرية، والحلاوة التقليدية تمنحك نهاية دافئة . تجربة الفطور السخية هذه مصمّمة للمشاركة، تجمع الناس حول مائدة واحدة... احتفاء بالنكهة والتقاليد والعمل المنزلي.",
      "en": "Start your day not just with breakfast, but with a table that feels like home... The Elvan Abla Breakfast is inspired by traditional family mornings, where abundance, warmth, and sharing come together to create an unforgettable experience. Your table begins with a rich and generous selection... A carefully prepared cheese platter served with seasonal fruits and warm fresh bread sets the tone, accompanied by fresh tomatoes and a variety of classic breakfast essentials. Green and black olives, labneh with zaatar, and the bold flavor of surk cheese bring depth and authenticity to every bite. The experience continues with warm and comforting dishes... Traditional menemen, cooked to perfection, adds a homemade touch, while the mixed frying platter—featuring falafel, sigara rolls, sausages, crispy potatoes, and vegetables—creates a vibrant and satisfying centerpiece. A variety of authentic flavors enrich the table... Hummus and muhammara bring the essence of Middle Eastern cuisine, complemented by olive oil with zaatar and pomegranate molasses for a refined, tangy finish. Sweet moments complete the journey... The harmony of tahini and molasses pairs beautifully with butter and honey, while fig, date, and apricot jams offer natural sweetness in every bite. Nutella adds a modern twist, and traditional helva delivers a timeless, comforting finish. This generous breakfast experience is designed for sharing, bringing people together around one table... A celebration of flavor, tradition, and togetherness."
    },
    "price": "369",
    "priceValue": 369,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3AJwtQkZah04EjT.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3AJwtQkZah04EjT.webp",
    "prepTime": "30",
    "calories": "1450",
    "weight": "700",
    "allergens": [
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c",
        "reason": {
          "ar": "",
          "en": "Freshly squeezed citrus cuts through the rich cheeses and savory fried elements of a traditional Turkish breakfast."
        }
      },
      {
        "itemId": "6fe7bb5f-5342-49cb-9bbb-6d4a746ccd37",
        "reason": {
          "ar": "",
          "en": "A warm, robust pot of black tea is the quintessential companion to cleanse the palate between sweet jams and savory bites."
        }
      }
    ],
    "order": 3
  },
  "a1ada07c-b494-4161-88bb-014150f8aa3e": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "مخللات معدة منزليا",
      "en": "Homemade Pickles"
    },
    "description": {
      "ar": "مُحضّرة بالطريقة التقليدية وبمكونات طبيعية، لتقدّم قوامًا مقرمشًا ونكهة منعشة وحامضة تُثري مائدتك.\nمقرمشة، منعشة… ومليئة بالحيوية.",
      "en": "Traditionally prepared using natural methods, delivering a crisp texture and a vibrant, tangy kick to your table. Crunchy, zesty and refreshing."
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3I0hMI2xLdIHm2G.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3I0hMI2xLdIHm2G.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "150",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "nutritionalInfo.lowCalorie",
        "label": {
          "ar": "منخفض السعرات",
          "en": "Low Calorie"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "7b7c1ef3-04bd-4968-b1eb-2aad83376751",
        "reason": {
          "ar": "",
          "en": "The sharp, tangy crunch of the pickles perfectly balances the rich, smoky fat of the charcoal-grilled kebab."
        }
      },
      {
        "itemId": "8507dfb1-80d8-4294-a8a6-0efa00e89e86",
        "reason": {
          "ar": "",
          "en": "Zesty pickles add a vibrant acidity that cuts right through the savory, spiced minced meat of the lahmacun."
        }
      }
    ],
    "order": 7
  },
  "e3c89499-bf61-4a1e-9191-3445228a9ee2": {
    "category": "61e69fe8-3255-49c0-ad94-517a04184cd5",
    "name": {
      "ar": "أهلاً وسهلاً جدة",
      "en": "Hosgeldin Jeddah"
    },
    "description": {
      "ar": "ابدأ يومك ليس فقط بوجبة إفطار، بل بتجربة مُعدّة بعناية فائقة… هذه المائدة المميزة من مطبخ آسيا صُمّمت لتمنحك صباحاً مفعماً بالطاقة والبهجة ولا يُنسى. تبدأ مائدتك بتشكيلة غنية وطازجة… طبق أجبان متنوعة مقترن بفواكه الموسم يجمع بين النكهات الأصيلة للمطبخ التركي، بينما تضيف اللبنة بالزعتر والمذاق المميز لجبنة سورك عمقاً فريداً للتجربة. إلى جانب ذلك، تشكيلة من الزيتون الأخضر والأسود تُكمل هذه البداية الطبيعية والمتوازنة. تستمر الرحلة مع النكهات التقليدية… التناغم المثالي بين الطحينة والدبس يمتزج بجمال مع الزبدة والعسل، فيما تترك الحلاوة التقليدية بصمة حلوة على مائدتك. لمسات دافئة تضيف الراحة على إفطارك… بيض مخفوق طري محضّر طازجاً يضيف الدفء والرضا إلى التجربة. وعندما يحين وقت استراحة حلوة… تضيف مربيات التين والمشمش والفراولة الألوان والحلاوة الطبيعية، لتقدم لحظة ممتعة في كل قضمة. هذه التجربة الغنية يرافقها… سلة خبز طازج ودافئ، وتكتمل بشكل مثالي مع اللمسة الأنيقة للشاي التركي التقليدي",
      "en": "Start your day not just with breakfast, but with a carefully crafted experience… This special table from Asya's kitchen is designed to give you an energetic, joyful, and unforgettable morning. Your table begins with a rich and fresh selection… A mixed cheese plate paired with seasonal fruits brings together the authentic flavors of Turkish cuisine, while labneh with zaatar and the distinctive taste of surk cheese add a unique depth to the experience. Alongside, a selection of green and black olives completes this natural and balanced start. The journey continues with traditional flavors… The perfect harmony of tahini and molasses blends beautifully with butter and honey, while traditional helva leaves a sweet signature on your table. Warm touches bring comfort to your breakfast… Freshly prepared soft scrambled eggs add warmth and satisfaction to the experience. When it's time for a sweet pause… Fig, apricot, and strawberry jams add color and natural sweetness, offering a delightful moment in every bite. This rich experience is accompanied by… A fresh and warm bread basket, and perfectly completed with the elegant touch of traditional Turkish tea."
    },
    "price": "216",
    "priceValue": 216,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3BHgDi00M7OSBm1.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3BHgDi00M7OSBm1.webp",
    "prepTime": "28",
    "calories": "950",
    "weight": "550",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "b436140c-47e7-4ec4-9695-c1e821d4723f",
        "reason": {
          "ar": "",
          "en": "The natural, earthy sweetness of fresh carrot juice complements the savory cheeses and soft scrambled eggs."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "A warm, golden sesame-crusted simit provides the perfect crispy texture for dipping into the table's jams and labneh."
        }
      }
    ],
    "order": 1
  },
  "502b7bd2-2ad7-4a03-9d96-30fb92d74098": {
    "category": "61e69fe8-3255-49c0-ad94-517a04184cd5",
    "name": {
      "ar": "موضة نيشانتاشي",
      "en": "Moda Nişantaşı"
    },
    "description": {
      "ar": "ابدأ يومك ليس فقط بوجبة فطور، بل بتجربة فريدة تلتقي فيها النكهات الغنية والثقافات المتنوعة... يمزج إفطار موضة نيشانتاشي بين اللمسات التركية التقليدية والتقديم العصري، ليمنحك بداية يوم مفعمة بالطاقة والبهجة. تبدأ مائدتك بالطزاجة والتنوع… يُقدَّم طبق أجبان مختار بعناية إلى جانب الطماطم والخيار الطازج، متوازنًا مع طبق من الفواكه الموسمية. تشكيلة من الزيتون واللبنة بالزعتر والنكهة المميزة لجبنة سورك تضيف عمقًا وطابعًا متوسطيًا على التجربة. تستمر الرحلة مع نكهات دافئة وتقليدية… شكشوكة تركية المُحضَّرة بإتقان يحتل مكانتها كطبق أساسي من اطباق الفطور، بينما تضيف البطاطا المقرمشة لمسة من القرمشة الشهية. إلى جانب ذلك، تُثري المحمرة والحمص والفول مائدتك بغنى المطبخ الشرقي. لمسات حلوة ومتوازنة تُكمل التجربة… يتناغم الطحينة مع الدبس بشكل رائع مع الزبدة والعسل، فيما يمنحك مربى الفراولة والمشمش حلاوة طبيعية في كل قضمة. تضيف النوتيلا لمسة عصرية، بينما تختتم الحلاوة التقليدية المائدة بطابع كلاسيكي أصيل. تُرافق هذه التجربة الشهية… سلة خبز طازجة ودافئة، وتكتمل بإبريق شاي تقليدي يحوّل إفطارك إلى طقس طويل وممتع. موضة نيشانتاشي ليست مجرد وجبة فطور — بل هي مائدة تجتمع فيها النكهات الطبيعية والعناية وتراث إسطنبول الغني والمتنوع في كل لقمة.",
      "en": "Start your day not just with breakfast, but with a unique experience where rich flavors and cultures come together... The Moda Nişantaşı breakfast blends traditional Turkish touches with modern presentations, offering you an energetic and joyful start to your day. Your table begins with freshness and variety… A carefully selected cheese plate is served alongside fresh tomatoes and cucumbers, balanced with a seasonal fruit platter. A selection of olives, labneh with zaatar, and the distinctive flavor of surk cheese add a Mediterranean depth and character to the experience. The journey continues with warm and traditional flavors… Perfectly prepared menemen takes its place as a breakfast essential, while crispy potatoes add a satisfying crunch. Alongside, muhammara, hummus, and foul bring the richness of Middle Eastern cuisine to your table. Sweet and balanced touches complete the experience… The harmony of tahini and molasses pairs beautifully with butter and honey, while strawberry and apricot jams offer natural sweetness in every bite. Nutella adds a modern twist, and traditional helva finishes the table with a classic touch. This delightful experience is accompanied by… A warm and fresh bread basket, and completed with a traditional teapot, turning your breakfast into a long and enjoyable ritual. MODA NİŞANTAŞI is not just a breakfast — it is a table where natural flavors, care, and Istanbul's diverse culinary heritage come together in every bite."
    },
    "price": "282",
    "priceValue": 282,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3jJrppnmzT7LdZZ.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3jJrppnmzT7LdZZ.webp",
    "prepTime": "30",
    "calories": "1200",
    "weight": "650",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      },
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.signatureDish",
        "label": {
          "ar": "طبق مميز",
          "en": "Signature Dish"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "A steaming glass of black tea acts as a traditional palate cleanser against the robust flavors of menemen and muhammara."
        }
      },
      {
        "itemId": "61fc7728-4ccf-4745-a8af-9bc19f408038",
        "reason": {
          "ar": "",
          "en": "The tart, vibrant acidity of pomegranate juice balances the rich, savory hummus and creamy cheeses."
        }
      }
    ],
    "order": 2
  },
  "1bd4f7c9-64d0-4de3-99b3-beeac63155c7": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "أرز",
      "en": "Rice"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLkrFFRfcj8nPY8t.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLkrFFRfcj8nPY8t.webp",
    "order": 14
  },
  "7bef4760-3f1f-45d1-bae6-a2a2b844c61f": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "برغل",
      "en": "Bulgur"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "25",
    "priceValue": 25,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLl0W8HwrcNXAIrn.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLl0W8HwrcNXAIrn.webp",
    "order": 15
  },
  "f683bf36-cbc3-4c46-9c45-cfb6e32a13af": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "المحمّرة",
      "en": "Muhammara"
    },
    "description": {
      "ar": "مزيج جريء غني بزيت الزيتون، الجوز ودبس الرمان، بنكهة عميقة وعطرية متوازنة.\nمكثفة، غنية بالجوز…",
      "en": "A vibrant red pepper and walnut mezze, finished with a glossy drizzle of pomegranate molasses and olive oil. Rich, smoky, and slightly sweet-spicy, it is perfect for scooping with warm flatbread."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2UpRVJQGyANBWne.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH2UpRVJQGyANBWne.webp",
    "prepTime": "20",
    "calories": "320",
    "weight": "180",
    "allergens": [
      {
        "key": "ingredients.containsNuts",
        "label": {
          "ar": "يحتوي على مكسرات",
          "en": "Contains Nuts"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "49bcee08-afe0-4bb9-8220-b3d9088cd35b",
        "reason": {
          "ar": "",
          "en": "The slightly sweet and spicy walnut notes of the muhammara beautifully enhance the natural, smoky richness of the grilled lamb chops."
        }
      },
      {
        "itemId": "15420618-d1b3-4364-aff0-dd2102f944e3",
        "reason": {
          "ar": "",
          "en": "The bright, tangy acidity and crisp vegetables in the Fattoush salad perfectly cut through the rich, nutty density of this vibrant red pepper dip."
        }
      }
    ],
    "order": 3
  },
  "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc": {
    "category": "503260fe-058c-4b7a-9dac-6035eb79d781",
    "name": {
      "ar": "شاي تركي (كوب)",
      "en": "Turkish Tea (Glass)"
    },
    "description": {
      "ar": "شاي تركي أسود طازج التحضير، قوي وصافٍ ومتوازن بشكل مثالي. شاي تركي تقليدي، يُحضّر ببطء للحصول على رائحة غنية ومذاق ناعم. شاي تركي كلاسيكي، عميق النكهة وناعم ومثالي للمشاركة. شاي تركي أصيل، غني القوام، ثري المذاق ومثالي للسهرات الطويلة.",
      "en": "Freshly brewed Turkish black tea, strong, clear and perfectly balanced. Traditional Turkish tea, slowly brewed for a rich aroma and smooth taste. Classic Turkish tea, deep in flavor, smooth and ideal for sharing. Authentic Turkish tea, full-bodied, rich and perfect for long conversations."
    },
    "price": "12",
    "priceValue": 12,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PRX2nJFWVjg5yg.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3PRX2nJFWVjg5yg.webp",
    "options": [
      {
        "name": "Small",
        "price": "45",
        "pricingType": "variation",
        "order": 0
      },
      {
        "name": "Medium",
        "price": "52",
        "pricingType": "variation",
        "order": 1
      },
      {
        "name": "Big",
        "price": "64",
        "pricingType": "variation",
        "order": 2
      }
    ],
    "prepTime": "20",
    "calories": "150",
    "weight": "500",
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "nutritionalInfo.lowCalorie",
        "label": {
          "ar": "منخفض السعرات",
          "en": "Low Calorie"
        }
      }
    ],
    "order": 1
  },
  "c57fd7db-3ee3-4061-a470-dc6c19f9e2f5": {
    "category": "02eb0962-be35-4701-8641-872802ee6fc7",
    "name": {
      "ar": "باباغنوج",
      "en": "Babaghannoush"
    },
    "description": {
      "ar": "باذنجان مشوي بنكهة مدخنة، يُمزج مع زيت الزيتون، الأعشاب الطازجة ودبس الرمان ليمنح قوامًا ناعمًا ونكهة غنية.\nمدخن، ناعم… ومُرضٍ بعمق.",
      "en": "Smoky roasted eggplant combined with olive oil, fresh herbs and pomegranate molasses, creating a smooth and flavorful dip. Smoky, soft and deeply satisfying."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzUaUPxmKv1cNvR1.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzUaUPxmKv1cNvR1.webp",
    "prepTime": "18",
    "calories": "260",
    "weight": "200",
    "dietaryLabels": [
      {
        "key": "ingredients.glutenFree",
        "label": {
          "ar": "خالٍ من الغلوتين",
          "en": "Gluten-Free"
        }
      },
      {
        "key": "ingredients.dairyFree",
        "label": {
          "ar": "خالٍ من الألبان",
          "en": "Dairy-Free"
        }
      },
      {
        "key": "ingredients.nutFree",
        "label": {
          "ar": "خالٍ من المكسرات",
          "en": "Nut-Free"
        }
      },
      {
        "key": "ingredients.vegan",
        "label": {
          "ar": "نباتي بالكامل",
          "en": "Vegan"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "11128019-e4f1-4d2d-9665-4a8731a68b77",
        "reason": {
          "ar": "",
          "en": "The smoky, creamy eggplant dip perfectly complements the charred, juicy tenderness of grilled chicken skewers."
        }
      },
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The crunchy, toasted sesame exterior of a fresh simit provides a delightful textural contrast to the silky eggplant dip."
        }
      }
    ],
    "order": 4
  },
  "e4270077-07cf-457f-af05-0a84fd75a929": {
    "category": "f5fe6ad8-b5ee-44cc-914e-e2f79927f2b8",
    "name": {
      "ar": "ماتشا سبانيش",
      "en": "Spanish Matchia"
    },
    "description": {
      "ar": "ماتشا يابانية ممزوجة بالحليب وحليب مُحلى بلمسة كراميل، ناعمة وكريمية بتجربة فاخرة.",
      "en": "Japanese matcha blended with milk and caramelized sweetened milk, smooth, creamy and delicately indulgent."
    },
    "price": "32",
    "priceValue": 32,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3SmMuGzM9NktMof.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VH3SmMuGzM9NktMof.webp",
    "prepTime": "18",
    "calories": "260",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "0e418830-7764-4a44-8ba1-06b596506892",
        "reason": {
          "ar": "",
          "en": "The creamy, caramelized notes of the cheesecake beautifully echo the sweet milk and earthy matcha flavors."
        }
      },
      {
        "itemId": "1b35ff21-f2fc-4e93-acf1-bc1827a452af",
        "reason": {
          "ar": "",
          "en": "The rich, flaky sweetness of the baklava contrasts gracefully with the delicate, slightly bitter undertones of Japanese matcha."
        }
      }
    ],
    "order": 4
  },
  "dda18a8d-c5a7-4211-bbda-1992f6154416": {
    "category": "cafb1cd7-1c37-430f-80a6-48cd5f213c4a",
    "name": {
      "ar": "مياه",
      "en": "Water"
    },
    "description": {
      "ar": "مياه نقية تُقدَّم باردة…\nانتعاش بسيط وصافٍ يوازن النكهات برقة.",
      "en": "Pure, chilled water served to refresh and cleanse the palate. A clean and light choice for any time of day."
    },
    "price": "Small (8)/ Big (16)",
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLpQ7aieT7PcnRg8.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VJLpQ7aieT7PcnRg8.webp",
    "prepTime": "15",
    "calories": "150",
    "weight": "500",
    "order": 4
  },
  "833c826b-ce1d-40aa-b7c5-e93e52f5b21f": {
    "category": "a6c1ce59-bed8-4049-b4c5-c1713025ce88",
    "name": {
      "ar": "بيتي آسيا",
      "en": "Asya's Beyti"
    },
    "description": {
      "ar": "",
      "en": ""
    },
    "price": "72",
    "priceValue": 72,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIwH3sgD8tYWnvWQu.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VIwH3sgD8tYWnvWQu.webp",
    "recommendations": [
      {
        "itemId": "0d0da313-976b-4f5b-97ae-ac4c151f55df",
        "reason": {
          "ar": "",
          "en": "The smooth, velvety texture of the hummus balances the robust, meaty flavors of the beyti kebab."
        }
      },
      {
        "itemId": "408eba99-a9c8-4630-9c76-c17c552941a7",
        "reason": {
          "ar": "",
          "en": "A chilled, creamy ayran cools the palate and cuts through the rich, savory sauces of the main dish."
        }
      }
    ],
    "order": 6
  },
  "7f704c10-78c1-4697-90d0-162cd7ce1cdb": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض مسلوق",
      "en": "Boiled Eggs"
    },
    "description": {
      "ar": "خيار بسيط وصحي، حيث يُقدَّم البيض المسلوق مع الزبدة ومزيج من التوابل العطرية بما فيها الكمون ورقائق الفلفل الحار والزعتر. يُقدَّم مع قطع الخبز المحمّص المقرمشة واللبنة لتجربة متوازنة. خفيف، نقي وغني بنكهة لطيفة.",
      "en": "A simple and wholesome option, where boiled eggs are complemented with butter and a blend of aromatic spices including cumin, chili flakes and thyme. Served with crispy croutons and labneh for a balanced experience. Light, clean and gently flavorful."
    },
    "price": "40",
    "priceValue": 40,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfx4WOqPU8qTxnH.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzfx4WOqPU8qTxnH.webp",
    "prepTime": "20",
    "calories": "470",
    "weight": "280",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "69d587e8-6014-44f4-9fa2-2de58deff91b",
        "reason": {
          "ar": "",
          "en": "The crisp, golden sesame crust of a fresh simit adds a satisfying crunch to the soft, delicate texture of the boiled eggs."
        }
      },
      {
        "itemId": "32fe0693-6fa1-4b2e-b5bf-4d86d4286ebc",
        "reason": {
          "ar": "",
          "en": "The bright, astringent notes of hot black tea perfectly cleanse the palate after the buttery, spiced eggs."
        }
      }
    ],
    "order": 9
  },
  "a71b8968-9fff-47e1-8c1d-f74f500aa3c1": {
    "category": "e74e388c-048d-47e4-afec-acf25fac4650",
    "name": {
      "ar": "بيض مسلوق مع شيدر",
      "en": "Boiled Eggs With Cheddar"
    },
    "description": {
      "ar": "طبق مريح ومتعدد الطبقات يُحضَّر من البيض المسلوق مع الزبدة ويُنكَّه برفق بالكمون ورقائق الفلفل الحار والزعتر. يُثرى بجبنة الشيدر الذائبة والحليب ولمسة من الكريمة، مما يمنحه قواماً ناعماً ومُشبعاً. يُقدَّم مع قطع الخبز المحمّص المقرمشة على الجانب. بسيط في مظهره، لكنه غني ومُرضٍ في كل قضمة.",
      "en": "A comforting and layered dish where boiled eggs are brought together with butter and gently infused with cumin, chili flakes and thyme. Enriched with melted cheddar, milk and a touch of cream, creating a smooth and satisfying texture. Served with crispy croutons on the side. Simple at first, yet deeply rich and fulfilling."
    },
    "price": "42",
    "priceValue": 42,
    "currency": "SAR",
    "sourceImageUrl": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzWDovV85ZRfB50X.webp",
    "image": "https://cdn.thefoost.com/tenants/asyas/images/product-0VGzWDovV85ZRfB50X.webp",
    "prepTime": "23",
    "calories": "640",
    "weight": "320",
    "allergens": [
      {
        "key": "ingredients.containsEggs",
        "label": {
          "ar": "يحتوي على بيض",
          "en": "Contains Eggs"
        }
      },
      {
        "key": "ingredients.containsDairy",
        "label": {
          "ar": "يحتوي على ألبان",
          "en": "Contains Dairy"
        }
      },
      {
        "key": "ingredients.containsGluten",
        "label": {
          "ar": "يحتوي على غلوتين",
          "en": "Contains Gluten"
        }
      }
    ],
    "dietaryLabels": [
      {
        "key": "ingredients.halal",
        "label": {
          "ar": "حلال",
          "en": "Halal"
        }
      },
      {
        "key": "ingredients.vegetarian",
        "label": {
          "ar": "نباتي",
          "en": "Vegetarian"
        }
      },
      {
        "key": "ingredients.highProtein",
        "label": {
          "ar": "عالي البروتين",
          "en": "High Protein"
        }
      },
      {
        "key": "spicinessLevels.mild",
        "label": {
          "ar": "خفيف الحرارة",
          "en": "Mild"
        }
      }
    ],
    "recommendations": [
      {
        "itemId": "f20f8e47-3b86-45cd-bacb-5dc560bb9e6c",
        "reason": {
          "ar": "",
          "en": "A glass of vibrant, acidic orange juice cuts right through the rich, heavy creaminess of the melted cheddar."
        }
      },
      {
        "itemId": "6969f27d-684c-4725-9257-5e69733bc382",
        "reason": {
          "ar": "",
          "en": "The aromatic, herbal notes of the freshly baked za'atar pide provide a fragrant counterpoint to the rich, cheesy eggs."
        }
      }
    ],
    "order": 10
  }
} satisfies Record<string, OfficialFoostItemDetail>;
