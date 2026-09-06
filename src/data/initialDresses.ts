import { Dress, Booking } from '../types';

// Authentic Rent-To-Slay products directly retrieved from Cloud Firestore
// Containing official Supabase and Enstack CDN images from Corset Bloomfield & Love Humbly Shop (Adara Long removed per request)
export const INITIAL_DRESSES: Dress[] = [
  {
    "rentalPrice4Days": 1238,
    "rentalPrice5Days": 1424,
    "name": "ARELI IVORY WHITE",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "slug": "areli-ivory-white",
    "id": "Corset_Bloomfield_ARELI_IVORY_WHITE",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 1052,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_2_ARELI_IVORY_WHITE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/8014becc-743f-4033-b849-12b1cc23c525.webp"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/areliivor-868365",
    "retailPrice": 495000,
    "colors": [
      "WHITE"
    ],
    "fittingAvailable": true,
    "securityDeposit": 990,
    "featured": true,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "shop": "Corset Bloomfield",
    "extraDayRate": 223
  },
  {
    "colors": [
      "PINK"
    ],
    "category": "Modern Filipiniana",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/aurorabei-860386",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_3_AURORA_BEIGE_PINK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/1bd3a88f-a7c1-4c07-bad8-db5619fd4e27.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "extraDayRate": 223,
    "rentalPrice5Days": 1424,
    "shop": "Corset Bloomfield",
    "rentalPrice4Days": 1238,
    "retailPrice": 495000,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": true,
    "fittingAvailable": true,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "name": "AURORA BEIGE PINK",
    "securityDeposit": 990,
    "id": "Corset_Bloomfield_AURORA_BEIGE_PINK",
    "blockedDates": [],
    "slug": "aurora-beige-pink",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice3Days": 1052
  },
  {
    "blockedDates": [],
    "id": "Corset_Bloomfield_AURORA_BURGUNDY",
    "slug": "aurora-burgundy",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 1424,
    "category": "Modern Filipiniana",
    "rentalPrice4Days": 1238,
    "name": "AURORA BURGUNDY",
    "shop": "Corset Bloomfield",
    "extraDayRate": 223,
    "fittingAvailable": true,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/aurorabur-860399",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "colors": [
      "BURGUNDY"
    ],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "rentalPrice3Days": 1052,
    "featured": true,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_5_AURORA_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/42885c60-54f9-4bb5-8fe9-693ae83b1f11.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "securityDeposit": 990,
    "retailPrice": 495000
  },
  {
    "rentalPrice5Days": 1424,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_4_AURORA_OLIVE_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/b7995dc7-9fe9-4d0d-a4b7-f741b98a908c.png"
    ],
    "rentalPrice4Days": 1238,
    "name": "AURORA OLIVE GREEN",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "retailPrice": 495000,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "colors": [
      "GREEN"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/auroraoli-860388",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "slug": "aurora-olive-green",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "featured": true,
    "extraDayRate": 223,
    "rentalPrice3Days": 1052,
    "id": "Corset_Bloomfield_AURORA_OLIVE_GREEN",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fittingAvailable": true,
    "shop": "Corset Bloomfield",
    "securityDeposit": 990,
    "blockedDates": [],
    "category": "Modern Filipiniana"
  },
  {
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_6_BEATRICE_CHAMPAGNE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/bf8064bc-b919-414f-b477-1a9181795c27.webp"
    ],
    "id": "Corset_Bloomfield_BEATRICE_CHAMPAGNE",
    "shop": "Corset Bloomfield",
    "colors": [
      "CHAMPAGNE"
    ],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 1711,
    "rentalPrice4Days": 1488,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": true,
    "blockedDates": [],
    "fittingAvailable": true,
    "retailPrice": 595000,
    "name": "BEATRICE CHAMPAGNE",
    "securityDeposit": 1190,
    "rentalPrice3Days": 1265,
    "slug": "beatrice-champagne",
    "extraDayRate": 268,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/beatricec-868048",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "category": "Modern Filipiniana"
  },
  {
    "id": "Corset_Bloomfield_BELLE_BEIGE",
    "retailPrice": 495000,
    "name": "BELLE BEIGE",
    "fittingAvailable": true,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_7_BELLE_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/e596b026-44ba-49f3-b5e2-6fac68b0811d.png"
    ],
    "category": "Modern Filipiniana",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "blockedDates": [],
    "colors": [
      "BEIGE"
    ],
    "slug": "belle-beige",
    "rentalPrice3Days": 1052,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/bellebeig-865424",
    "featured": true,
    "securityDeposit": 990,
    "shop": "Corset Bloomfield",
    "extraDayRate": 223,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "rentalPrice5Days": 1424,
    "rentalPrice4Days": 1238,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ]
  },
  {
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/bellecrea-867374",
    "id": "Corset_Bloomfield_BELLE_CREAM",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana",
    "name": "BELLE CREAM",
    "rentalPrice5Days": 1424,
    "rentalPrice4Days": 1238,
    "extraDayRate": 223,
    "slug": "belle-cream",
    "retailPrice": 495000,
    "securityDeposit": 990,
    "featured": true,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "rentalPrice3Days": 1052,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_8_BELLE_CREAM.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/1316aa81-3747-414a-9fac-9508885b9c21.webp"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Corset Bloomfield",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "colors": [
      "CREAM"
    ],
    "fittingAvailable": true,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "featured": true,
    "fittingAvailable": true,
    "id": "Corset_Bloomfield_CECILIA_CREAM",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "blockedDates": [],
    "slug": "cecilia-cream",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice3Days": 1052,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "name": "CECILIA CREAM",
    "shop": "Corset Bloomfield",
    "retailPrice": 495000,
    "category": "Modern Filipiniana",
    "extraDayRate": 223,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_10_CECILIA_CREAM.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/893a8bb7-a358-45a4-9cc3-5d4ec338e2b7.webp"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "securityDeposit": 990,
    "rentalPrice5Days": 1424,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "rentalPrice4Days": 1238,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/ceciliacr-868839",
    "colors": [
      "CREAM"
    ]
  },
  {
    "extraDayRate": 178,
    "featured": false,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "rentalPrice5Days": 1136,
    "shop": "Corset Bloomfield",
    "rentalPrice4Days": 988,
    "colors": [
      "WHITE"
    ],
    "blockedDates": [],
    "fittingAvailable": true,
    "name": "CLAUDETTE IVORY WHITE",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/claudette-868399",
    "category": "Modern Filipiniana",
    "retailPrice": 395000,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "id": "Corset_Bloomfield_CLAUDETTE_IVORY_WHITE",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_11_CLAUDETTE_IVORY_WHITE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/55c5818a-40fb-4ac0-8f58-4a7f48a289f8.webp"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "slug": "claudette-ivory-white",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "rentalPrice3Days": 840,
    "securityDeposit": 790,
    "silhouette": "A-Line Modern Filipiniana Gown"
  },
  {
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/cressidab-860369",
    "rentalPrice5Days": 1136,
    "category": "Modern Filipiniana",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "rentalPrice4Days": 988,
    "securityDeposit": 790,
    "slug": "cressida-burgundy",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "name": "CRESSIDA BURGUNDY",
    "extraDayRate": 178,
    "retailPrice": 395000,
    "rentalPrice3Days": 840,
    "featured": false,
    "shop": "Corset Bloomfield",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_12_CRESSIDA_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/5668e90a-a98f-4c88-8d10-9f97e2de7a85.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "fittingAvailable": true,
    "id": "Corset_Bloomfield_CRESSIDA_BURGUNDY",
    "blockedDates": [],
    "colors": [
      "BURGUNDY"
    ]
  },
  {
    "shop": "Corset Bloomfield",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/cressidas-860372",
    "category": "Modern Filipiniana",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice5Days": 1136,
    "rentalPrice4Days": 988,
    "blockedDates": [],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "retailPrice": 395000,
    "fittingAvailable": true,
    "id": "Corset_Bloomfield_CRESSIDA_SAGE_GREEN",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_13_CRESSIDA_SAGE_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/96f2a4e4-788f-41ff-b11c-92946c51e5d4.png"
    ],
    "featured": false,
    "slug": "cressida-sage-green",
    "securityDeposit": 790,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice3Days": 840,
    "colors": [
      "GREEN"
    ],
    "name": "CRESSIDA SAGE GREEN",
    "extraDayRate": 178
  },
  {
    "rentalPrice5Days": 1424,
    "rentalPrice4Days": 1238,
    "extraDayRate": 223,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "securityDeposit": 990,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "shop": "Corset Bloomfield",
    "rentalPrice3Days": 1052,
    "name": "ELODIA CHAMPAGNE",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/elodiacha-866994",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_14_ELODIA_CHAMPAGNE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/d684f519-b5ce-41f8-9128-9101b377eb8e.webp"
    ],
    "blockedDates": [],
    "retailPrice": 495000,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fittingAvailable": true,
    "slug": "elodia-champagne",
    "featured": false,
    "id": "Corset_Bloomfield_ELODIA_CHAMPAGNE",
    "colors": [
      "CHAMPAGNE"
    ]
  },
  {
    "slug": "elodia-midnight-blue",
    "id": "Corset_Bloomfield_ELODIA_MIDNIGHT_BLUE",
    "rentalPrice5Days": 1424,
    "securityDeposit": 990,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_15_ELODIA_MIDNIGHT_BLUE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/d319bed4-1979-42b0-a3ce-1ea743734934.webp"
    ],
    "rentalPrice4Days": 1238,
    "featured": false,
    "extraDayRate": 223,
    "name": "ELODIA MIDNIGHT BLUE",
    "colors": [
      "BLUE"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/elodiamid-869066",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "shop": "Corset Bloomfield",
    "rentalPrice3Days": 1052,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana",
    "blockedDates": [],
    "retailPrice": 495000,
    "fittingAvailable": true
  },
  {
    "slug": "eula-beige",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "colors": [
      "BEIGE"
    ],
    "featured": false,
    "id": "Corset_Bloomfield_EULA_BEIGE",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_16_EULA_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/fd937c23-38de-4b72-bb33-434238391a22.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice4Days": 1238,
    "rentalPrice5Days": 1424,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "name": "EULA BEIGE",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana",
    "retailPrice": 495000,
    "shop": "Corset Bloomfield",
    "extraDayRate": 223,
    "securityDeposit": 990,
    "fittingAvailable": true,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/eulabeige-860365",
    "rentalPrice3Days": 1052
  },
  {
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_17_EULA_LIGHT_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/4da1daed-2e0e-42ab-b638-89c4b28e60e6.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "name": "EULA LIGHT BEIGE",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "extraDayRate": 223,
    "colors": [
      "BEIGE"
    ],
    "slug": "eula-light-beige",
    "securityDeposit": 990,
    "category": "Modern Filipiniana",
    "rentalPrice4Days": 1238,
    "id": "Corset_Bloomfield_EULA_LIGHT_BEIGE",
    "rentalPrice5Days": 1424,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/eulalight-860367",
    "fittingAvailable": true,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "blockedDates": [],
    "featured": false,
    "retailPrice": 495000,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "shop": "Corset Bloomfield",
    "rentalPrice3Days": 1052
  },
  {
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-864582",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "BEIGE"
    ],
    "securityDeposit": 690,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "fittingAvailable": true,
    "category": "Modern Filipiniana",
    "extraDayRate": 155,
    "retailPrice": 345000,
    "rentalPrice3Days": 734,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_20_FIDELA_LONG_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/e7555fe1-72f3-4805-85c1-5de54b044f92.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "shop": "Corset Bloomfield",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "name": "FIDELA LONG BEIGE",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "slug": "fidela-long-beige",
    "featured": false,
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice4Days": 863,
    "id": "Corset_Bloomfield_FIDELA_LONG_BEIGE",
    "rentalPrice5Days": 992
  },
  {
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_19_FIDELA_LONG_BEIGE_PINK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/73249409-6645-4cea-b595-e4100c23efe1.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice5Days": 992,
    "blockedDates": [],
    "rentalPrice4Days": 863,
    "retailPrice": 345000,
    "slug": "fidela-long-beige-pink",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-864568",
    "name": "FIDELA LONG BEIGE PINK",
    "colors": [
      "PINK"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "securityDeposit": 690,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "id": "Corset_Bloomfield_FIDELA_LONG_BEIGE_PINK",
    "rentalPrice3Days": 734,
    "extraDayRate": 155,
    "shop": "Corset Bloomfield",
    "fittingAvailable": true,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "category": "Modern Filipiniana"
  },
  {
    "rentalPrice4Days": 860,
    "securityDeposit": 688,
    "slug": "fidela-long-burgundy",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-866125",
    "rentalPrice5Days": 989,
    "category": "Modern Filipiniana",
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "retailPrice": 344000,
    "name": "FIDELA LONG BURGUNDY",
    "shop": "Corset Bloomfield",
    "id": "Corset_Bloomfield_FIDELA_LONG_BURGUNDY",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "BURGUNDY"
    ],
    "rentalPrice3Days": 731,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "extraDayRate": 155,
    "featured": false,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_24_FIDELA_LONG_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/615c2b96-6721-4008-8ec3-c3862bd79c50.png"
    ],
    "fittingAvailable": true
  },
  {
    "colors": [
      "CHAMPAGNE"
    ],
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 734,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-864567",
    "id": "Corset_Bloomfield_FIDELA_LONG_CHAMPAGNE",
    "name": "FIDELA LONG CHAMPAGNE",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 155,
    "slug": "fidela-long-champagne",
    "retailPrice": 345000,
    "fittingAvailable": true,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_18_FIDELA_LONG_CHAMPAGNE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/5d132a7f-2178-4234-a3de-000d352ffee8.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "securityDeposit": 690,
    "rentalPrice4Days": 863,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 992,
    "featured": false,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "blockedDates": [],
    "shop": "Corset Bloomfield"
  },
  {
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "slug": "fidela-long-coffee-brown",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "fittingAvailable": true,
    "colors": [
      "BROWN"
    ],
    "id": "Corset_Bloomfield_FIDELA_LONG_COFFEE_BROWN",
    "name": "FIDELA LONG COFFEE BROWN",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_23_FIDELA_LONG_COFFEE_BROWN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/bbfe0061-a36d-4759-b4ee-7228fe694c35.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice3Days": 734,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "featured": false,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-865310",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "shop": "Corset Bloomfield",
    "securityDeposit": 690,
    "extraDayRate": 155,
    "rentalPrice4Days": 863,
    "rentalPrice5Days": 992,
    "retailPrice": 345000
  },
  {
    "silhouette": "A-Line Modern Filipiniana Gown",
    "colors": [
      "CREAM"
    ],
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-864593",
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 734,
    "securityDeposit": 690,
    "shop": "Corset Bloomfield",
    "retailPrice": 345000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_21_FIDELA_LONG_CREAM.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/c72b0a9f-4f1f-4fea-80ce-f875bf4d3f96.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "fittingAvailable": true,
    "extraDayRate": 155,
    "id": "Corset_Bloomfield_FIDELA_LONG_CREAM",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "name": "FIDELA LONG CREAM",
    "rentalPrice4Days": 863,
    "rentalPrice5Days": 992,
    "featured": false,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "slug": "fidela-long-cream"
  },
  {
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_22_FIDELA_LONG_ECRU.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/f1e839e6-cbf8-4e93-b715-c28d3e54eda6.png"
    ],
    "securityDeposit": 690,
    "shop": "Corset Bloomfield",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "extraDayRate": 155,
    "colors": [
      "ECRU"
    ],
    "rentalPrice4Days": 863,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice5Days": 992,
    "fittingAvailable": true,
    "slug": "fidela-long-ecru",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-864810",
    "category": "Modern Filipiniana",
    "id": "Corset_Bloomfield_FIDELA_LONG_ECRU",
    "name": "FIDELA LONG ECRU",
    "blockedDates": [],
    "retailPrice": 345000,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice3Days": 734
  },
  {
    "extraDayRate": 155,
    "featured": false,
    "name": "FIDELA LONG IVORY WHITE",
    "rentalPrice3Days": 734,
    "id": "Corset_Bloomfield_FIDELA_LONG_IVORY_WHITE",
    "securityDeposit": 690,
    "slug": "fidela-long-ivory-white",
    "fittingAvailable": true,
    "blockedDates": [],
    "rentalPrice4Days": 863,
    "retailPrice": 345000,
    "category": "Modern Filipiniana",
    "rentalPrice5Days": 992,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_25_FIDELA_LONG_IVORY_WHITE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/6e8812f7-001a-4ab7-a718-ff4e7161ca2f.png"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/fidelalon-866321",
    "colors": [
      "WHITE"
    ],
    "shop": "Corset Bloomfield",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/leonorare-864361",
    "shop": "Corset Bloomfield",
    "fittingAvailable": true,
    "colors": [
      "PRINTS"
    ],
    "blockedDates": [],
    "securityDeposit": 590,
    "category": "Modern Filipiniana",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_26_LEONORA_RED_PINK_PRINTS.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/0201917a-b974-4983-82f3-5ae83cabee8b.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "id": "Corset_Bloomfield_LEONORA_RED_PINK_PRINTS",
    "rentalPrice3Days": 627,
    "retailPrice": 295000,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "extraDayRate": 150,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "featured": false,
    "slug": "leonora-red-pink-prints",
    "rentalPrice4Days": 738,
    "name": "LEONORA RED PINK PRINTS",
    "rentalPrice5Days": 849,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ]
  },
  {
    "rentalPrice5Days": 849,
    "rentalPrice4Days": 738,
    "shop": "Corset Bloomfield",
    "securityDeposit": 590,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "category": "Modern Filipiniana",
    "blockedDates": [],
    "slug": "mahalia-cream-black-set",
    "rentalPrice3Days": 627,
    "retailPrice": 295000,
    "id": "Corset_Bloomfield_MAHALIA_CREAM_BLACK_SET",
    "colors": [
      "SET"
    ],
    "fittingAvailable": true,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "silhouette": "Two-Piece Bustier & Skirt Set",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_27_MAHALIA_CREAM_BLACK_SET.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/210a7eb3-6b21-4acf-b93f-7e75f8a3d0f1.png"
    ],
    "featured": false,
    "name": "MAHALIA CREAM BLACK SET",
    "extraDayRate": 150,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/mahaliacr-862621"
  },
  {
    "securityDeposit": 990,
    "extraDayRate": 223,
    "rentalPrice4Days": 1238,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "rentalPrice5Days": 1424,
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Corset Bloomfield",
    "blockedDates": [],
    "retailPrice": 495000,
    "fittingAvailable": true,
    "name": "MARICA BEIGE",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_30_MARICA_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/a9af80fa-a6cd-40fb-a1ac-c6b4927c3f0f.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "slug": "marica-beige",
    "rentalPrice3Days": 1052,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "colors": [
      "BEIGE"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/maricabei-865878",
    "id": "Corset_Bloomfield_MARICA_BEIGE"
  },
  {
    "rentalPrice5Days": 1424,
    "rentalPrice4Days": 1238,
    "colors": [
      "BURGUNDY"
    ],
    "shop": "Corset Bloomfield",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 223,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_29_MARICA_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/b889285a-9746-4c82-852c-fbfef649334b.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "featured": false,
    "rentalPrice3Days": 1052,
    "slug": "marica-burgundy",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "id": "Corset_Bloomfield_MARICA_BURGUNDY",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/maricabur-865231",
    "securityDeposit": 990,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "retailPrice": 495000,
    "blockedDates": [],
    "fittingAvailable": true,
    "category": "Modern Filipiniana",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "name": "MARICA BURGUNDY"
  },
  {
    "category": "Modern Filipiniana",
    "slug": "marica-champagne",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "colors": [
      "CHAMPAGNE"
    ],
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "fittingAvailable": true,
    "id": "Corset_Bloomfield_MARICA_CHAMPAGNE",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_31_MARICA_CHAMPAGNE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/be0ac28e-a05e-4ab0-9b97-83d892b8d11a.webp"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "name": "MARICA CHAMPAGNE",
    "rentalPrice3Days": 1052,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/maricacha-867080",
    "shop": "Corset Bloomfield",
    "extraDayRate": 223,
    "securityDeposit": 990,
    "rentalPrice4Days": 1238,
    "rentalPrice5Days": 1424,
    "retailPrice": 495000
  },
  {
    "shop": "Corset Bloomfield",
    "fittingAvailable": true,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 223,
    "rentalPrice3Days": 1052,
    "securityDeposit": 990,
    "category": "Modern Filipiniana",
    "slug": "marica-sage-green",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_28_MARICA_SAGE_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/1ca9573b-57d5-4c97-932f-3995b6c7641c.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "id": "Corset_Bloomfield_MARICA_SAGE_GREEN",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/maricasag-865230",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "retailPrice": 495000,
    "colors": [
      "GREEN"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": false,
    "rentalPrice5Days": 1424,
    "rentalPrice4Days": 1238,
    "name": "MARICA SAGE GREEN"
  },
  {
    "rentalPrice3Days": 1052,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "name": "MARICA WHITE",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "extraDayRate": 223,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "fittingAvailable": true,
    "id": "Corset_Bloomfield_MARICA_WHITE",
    "featured": false,
    "slug": "marica-white",
    "rentalPrice5Days": 1424,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "rentalPrice4Days": 1238,
    "retailPrice": 495000,
    "colors": [
      "WHITE"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "category": "Modern Filipiniana",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/maricawhi-868997",
    "shop": "Corset Bloomfield",
    "securityDeposit": 990,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_32_MARICA_WHITE.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/95be8d45-27cf-47be-be45-5eb6b3efd7e7.webp"
    ],
    "fabric": "Premium Textured Gazar Silk"
  },
  {
    "shop": "Corset Bloomfield",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/mayumicre-868857",
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_33_MAYUMI_CREAM.webp",
      "https://enstack-cdn-public.s3.amazonaws.com/images/ph/user_706236/merchant_705510/product/5977ba59-03e5-46eb-82f9-e7f3851dccd4.webp"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice3Days": 1052,
    "category": "Modern Filipiniana",
    "id": "Corset_Bloomfield_MAYUMI_CREAM",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "fittingAvailable": true,
    "colors": [
      "CREAM"
    ],
    "retailPrice": 495000,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "extraDayRate": 223,
    "slug": "mayumi-cream",
    "rentalPrice5Days": 1424,
    "featured": false,
    "securityDeposit": 990,
    "rentalPrice4Days": 1238,
    "name": "MAYUMI CREAM"
  },
  {
    "blockedDates": [],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_9_NINA_BRIDAL_GOWN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/b46988d6-5ccb-4f3a-a305-baea4fc7f9b7.png"
    ],
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/niabrida-866153",
    "fittingAvailable": true,
    "shop": "Corset Bloomfield",
    "retailPrice": 795000,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "id": "Corset_Bloomfield_NINA_BRIDAL_GOWN",
    "colors": [
      "GOWN"
    ],
    "rentalPrice3Days": 1690,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "extraDayRate": 358,
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "slug": "ni-a-bridal-gown",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "category": "Bridal & Prenup",
    "rentalPrice5Days": 2286,
    "securityDeposit": 1590,
    "name": "NIÑA BRIDAL GOWN",
    "rentalPrice4Days": 1988
  },
  {
    "featured": false,
    "rentalPrice3Days": 1690,
    "slug": "ni-a-bridal-gown",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack",
    "extraDayRate": 358,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/b46988d6-5ccb-4f3a-a305-baea4fc7f9b7.png"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "fittingAvailable": true,
    "id": "Corset_Bloomfield_NI_A_BRIDAL_GOWN",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "name": "NIÑA BRIDAL GOWN",
    "colors": [
      "GOWN"
    ],
    "securityDeposit": 1590,
    "retailPrice": 795000,
    "rentalPrice5Days": 2286,
    "category": "Bridal & Prenup",
    "rentalPrice4Days": 1988,
    "blockedDates": [],
    "shop": "Corset Bloomfield",
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/corsetbloomfield/niabrida-866153"
  },
  {
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "slug": "slide-1-of-1",
    "colors": [
      "1"
    ],
    "name": "Slide 1 of 1",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Corset_Bloomfield_1_Slide_1_of_1.png",
      "https://enstack-cdn.s3.amazonaws.com/web/merchant_705510/banner/BCB8F98D-5AB7-4DBC-AAAD-38DDB1907DDF.png.png?AWSAccessKeyId=AKIA3QPKBPVOGUKBJAEH&Signature=lEdVzx12zACOwrtJIdpVO8p8mNk%3D&Expires=1789219934"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice5Days": 1006,
    "extraDayRate": 158,
    "featured": false,
    "rentalPrice4Days": 875,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "shop": "Corset Bloomfield",
    "id": "Corset_Bloomfield_Slide_1_of_1",
    "securityDeposit": 700,
    "fittingAvailable": true,
    "description": "Authentic designer creation from Corset Bloomfield. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "retailPrice": 3500,
    "rentalPrice3Days": 744,
    "category": "Modern Filipiniana",
    "blockedDates": [],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "tagline": "Authentic Corset Bloomfield designer piece from Enstack"
  },
  {
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "slug": "alexa-blush-pink",
    "colors": [
      "PINK"
    ],
    "name": "ALEXA BLUSH PINK",
    "rentalPrice5Days": 316,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_102_ALEXA_BLUSH_PINK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/0fd10141-abe0-4275-9e59-18db8a1a466b.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "extraDayRate": 150,
    "featured": false,
    "rentalPrice4Days": 275,
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "id": "Love_Humbly_Shop_ALEXA_BLUSH_PINK",
    "securityDeposit": 220,
    "fittingAvailable": true,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexablus-852136",
    "retailPrice": 110000,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 234,
    "blockedDates": [],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "tagline": "Authentic Love Humbly designer piece from Enstack"
  },
  {
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexadark-852137",
    "featured": false,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "slug": "alexa-dark-dusty-blue",
    "rentalPrice5Days": 316,
    "name": "ALEXA DARK DUSTY BLUE",
    "rentalPrice4Days": 275,
    "id": "Love_Humbly_Shop_ALEXA_DARK_DUSTY_BLUE",
    "retailPrice": 110000,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 150,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana",
    "securityDeposit": 220,
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "colors": [
      "BLUE"
    ],
    "rentalPrice3Days": 234,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_103_ALEXA_DARK_DUSTY_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/0d4c0ded-9b32-45c9-824f-22f73c7f54ad.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": []
  },
  {
    "blockedDates": [],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexadust-852140",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "id": "Love_Humbly_Shop_ALEXA_DUSTY_GREEN",
    "rentalPrice3Days": 234,
    "retailPrice": 110000,
    "category": "Modern Filipiniana",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_104_ALEXA_DUSTY_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/917b3e92-389b-4337-8398-2c5c9293995d.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "extraDayRate": 150,
    "slug": "alexa-dusty-green",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "securityDeposit": 220,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "GREEN"
    ],
    "name": "ALEXA DUSTY GREEN",
    "featured": false,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice5Days": 316,
    "rentalPrice4Days": 275
  },
  {
    "name": "ALEXA EMERALD",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_105_ALEXA_EMERALD.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/ea1187ff-0e74-4f15-a0f8-685a149af325.png"
    ],
    "fittingAvailable": true,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexaemer-852142",
    "colors": [
      "EMERALD"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "retailPrice": 110000,
    "blockedDates": [],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "slug": "alexa-emerald",
    "rentalPrice3Days": 234,
    "category": "Modern Filipiniana",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "securityDeposit": 220,
    "shop": "Love Humbly",
    "extraDayRate": 150,
    "id": "Love_Humbly_Shop_ALEXA_EMERALD",
    "featured": false,
    "rentalPrice4Days": 275,
    "rentalPrice5Days": 316
  },
  {
    "fittingAvailable": true,
    "securityDeposit": 220,
    "name": "ALEXA GOLD MUSTARD",
    "blockedDates": [],
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 234,
    "slug": "alexa-gold-mustard",
    "retailPrice": 110000,
    "featured": false,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "extraDayRate": 150,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_101_ALEXA_GOLD_MUSTARD.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/24d86d3a-57e4-437e-98c9-17f3a72867f1.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "id": "Love_Humbly_Shop_ALEXA_GOLD_MUSTARD",
    "rentalPrice4Days": 275,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "rentalPrice5Days": 316,
    "colors": [
      "MUSTARD"
    ],
    "shop": "Love Humbly",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexagold-852124"
  },
  {
    "id": "Love_Humbly_Shop_ALEXA_LIGHT_GRAY",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexaligh-852146",
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice4Days": 275,
    "extraDayRate": 150,
    "rentalPrice5Days": 316,
    "featured": false,
    "retailPrice": 110000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_106_ALEXA_LIGHT_GRAY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/666d66ba-82b5-48df-be49-bbf91555d63e.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "slug": "alexa-light-gray",
    "fittingAvailable": true,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "securityDeposit": 220,
    "blockedDates": [],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "rentalPrice3Days": 234,
    "colors": [
      "GRAY"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "category": "Modern Filipiniana",
    "name": "ALEXA LIGHT GRAY"
  },
  {
    "rentalPrice4Days": 275,
    "rentalPrice5Days": 316,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "securityDeposit": 220,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexalila-852150",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "retailPrice": 110000,
    "extraDayRate": 150,
    "id": "Love_Humbly_Shop_ALEXA_LILAC",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "featured": false,
    "shop": "Love Humbly",
    "rentalPrice3Days": 234,
    "name": "ALEXA LILAC",
    "colors": [
      "LILAC"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "slug": "alexa-lilac",
    "fittingAvailable": true,
    "blockedDates": [],
    "category": "Modern Filipiniana",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_107_ALEXA_LILAC.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/a7d4eebb-cd0d-4b3d-85a0-2c0745669ce9.png"
    ],
    "fabric": "Premium Textured Gazar Silk"
  },
  {
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "shop": "Love Humbly",
    "fittingAvailable": true,
    "category": "Modern Filipiniana",
    "retailPrice": 110000,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexamidn-852151",
    "rentalPrice3Days": 234,
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_108_ALEXA_MIDNIGHT_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/7baf489f-d1e2-44b0-a76f-775dfa299527.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "featured": false,
    "securityDeposit": 220,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "slug": "alexa-midnight-blue",
    "rentalPrice4Days": 275,
    "id": "Love_Humbly_Shop_ALEXA_MIDNIGHT_BLUE",
    "name": "ALEXA MIDNIGHT BLUE",
    "colors": [
      "BLUE"
    ],
    "rentalPrice5Days": 316,
    "extraDayRate": 150
  },
  {
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "retailPrice": 110000,
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 234,
    "securityDeposit": 220,
    "shop": "Love Humbly",
    "fittingAvailable": true,
    "blockedDates": [],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexaroya-817996",
    "rentalPrice4Days": 275,
    "featured": false,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "name": "ALEXA ROYAL BLUE",
    "rentalPrice5Days": 316,
    "id": "Love_Humbly_Shop_ALEXA_ROYAL_BLUE",
    "colors": [
      "BLUE"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "extraDayRate": 150,
    "slug": "alexa-royal-blue",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_100_ALEXA_ROYAL_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/a0b2db7e-503b-415e-8071-eeec98cd0bdf.png"
    ],
    "fabric": "Premium Textured Gazar Silk"
  },
  {
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fittingAvailable": true,
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "rentalPrice3Days": 234,
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Love Humbly",
    "retailPrice": 110000,
    "name": "ALEXA TAUPE",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_109_ALEXA_TAUPE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/607602f5-d5d0-4c93-92b6-c1118466e143.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "extraDayRate": 150,
    "slug": "alexa-taupe",
    "securityDeposit": 220,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/alexataup-852153",
    "featured": false,
    "rentalPrice5Days": 316,
    "colors": [
      "TAUPE"
    ],
    "rentalPrice4Days": 275,
    "id": "Love_Humbly_Shop_ALEXA_TAUPE"
  },
  {
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana",
    "id": "Love_Humbly_Shop_ANTONIA_BLUSH_PINK",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "extraDayRate": 150,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice3Days": 326,
    "fittingAvailable": true,
    "colors": [
      "PINK"
    ],
    "featured": false,
    "retailPrice": 153000,
    "rentalPrice4Days": 383,
    "slug": "antonia-blush-pink",
    "blockedDates": [],
    "rentalPrice5Days": 440,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_115_ANTONIA_BLUSH_PINK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/fb9772c1-c41b-4cd6-b67f-f6facd45b93e.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniabl-842781",
    "name": "ANTONIA BLUSH PINK",
    "securityDeposit": 306
  },
  {
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniali-842772",
    "category": "Modern Filipiniana",
    "fittingAvailable": true,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "slug": "antonia-light-gray",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_116_ANTONIA_LIGHT_GRAY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/2914ab7c-cbbb-45cb-90c1-9cc777c97cfe.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "id": "Love_Humbly_Shop_ANTONIA_LIGHT_GRAY",
    "extraDayRate": 150,
    "rentalPrice3Days": 326,
    "name": "ANTONIA LIGHT GRAY",
    "retailPrice": 153000,
    "colors": [
      "GRAY"
    ],
    "featured": false,
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice4Days": 383,
    "blockedDates": [],
    "rentalPrice5Days": 440,
    "securityDeposit": 306
  },
  {
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "featured": false,
    "extraDayRate": 150,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "rentalPrice4Days": 383,
    "rentalPrice5Days": 440,
    "category": "Modern Filipiniana",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniama-842481",
    "blockedDates": [],
    "slug": "antonia-marsala-red",
    "id": "Love_Humbly_Shop_ANTONIA_MARSALA_RED",
    "colors": [
      "RED"
    ],
    "fittingAvailable": true,
    "name": "ANTONIA MARSALA RED",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "securityDeposit": 306,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_110_ANTONIA_MARSALA_RED.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/e01c75fb-2fae-4293-8aef-1118f0b44761.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "retailPrice": 153000,
    "rentalPrice3Days": 326
  },
  {
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "name": "ANTONIA PLUM",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "id": "Love_Humbly_Shop_ANTONIA_PLUM",
    "rentalPrice5Days": 440,
    "extraDayRate": 150,
    "featured": false,
    "rentalPrice4Days": 383,
    "slug": "antonia-plum",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "securityDeposit": 306,
    "fittingAvailable": true,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_112_ANTONIA_PLUM.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/e82a0936-1610-4fe5-ba39-940a7196fcc5.png"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniapl-842769",
    "colors": [
      "PLUM"
    ],
    "rentalPrice3Days": 326,
    "shop": "Love Humbly",
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "category": "Modern Filipiniana",
    "retailPrice": 153000
  },
  {
    "slug": "antonia-royal-blue",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "id": "Love_Humbly_Shop_ANTONIA_ROYAL_BLUE",
    "rentalPrice4Days": 383,
    "rentalPrice5Days": 440,
    "extraDayRate": 150,
    "category": "Modern Filipiniana",
    "name": "ANTONIA ROYAL BLUE",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniaro-842774",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "shop": "Love Humbly",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_113_ANTONIA_ROYAL_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/15ee1b8c-5c54-4916-8b12-3558a5f1569e.png"
    ],
    "rentalPrice3Days": 326,
    "blockedDates": [],
    "securityDeposit": 306,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "featured": false,
    "retailPrice": 153000,
    "fittingAvailable": true,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "BLUE"
    ]
  },
  {
    "fittingAvailable": true,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniaru-842776",
    "rentalPrice3Days": 326,
    "retailPrice": 153000,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "category": "Modern Filipiniana",
    "extraDayRate": 150,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "shop": "Love Humbly",
    "securityDeposit": 306,
    "name": "ANTONIA RUST",
    "colors": [
      "RUST"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 440,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "slug": "antonia-rust",
    "rentalPrice4Days": 383,
    "blockedDates": [],
    "featured": false,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_114_ANTONIA_RUST.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/29319945-3171-4906-b9d8-6e724e506cd3.png"
    ],
    "id": "Love_Humbly_Shop_ANTONIA_RUST"
  },
  {
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_111_ANTONIA_TEAL.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/fe577306-3af5-4672-9482-7d0d1e64562d.png"
    ],
    "id": "Love_Humbly_Shop_ANTONIA_TEAL",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "TEAL"
    ],
    "shop": "Love Humbly",
    "rentalPrice5Days": 440,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice4Days": 383,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": false,
    "blockedDates": [],
    "fittingAvailable": true,
    "retailPrice": 153000,
    "name": "ANTONIA TEAL",
    "securityDeposit": 306,
    "rentalPrice3Days": 326,
    "slug": "antonia-teal",
    "extraDayRate": 150,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/antoniate-842549",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana"
  },
  {
    "rentalPrice5Days": 1294,
    "rentalPrice4Days": 1125,
    "name": "DEANA BEIGE",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_42_DEANA_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/7e977ff9-f95b-4642-9152-e707ddb695a4.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "retailPrice": 450000,
    "colors": [
      "BEIGE"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanabeig-863138",
    "slug": "deana-beige",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": false,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "extraDayRate": 203,
    "rentalPrice3Days": 956,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "id": "Love_Humbly_Shop_DEANA_BEIGE",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "securityDeposit": 900,
    "category": "Modern Filipiniana",
    "blockedDates": []
  },
  {
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "BLACK"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "category": "Modern Filipiniana",
    "blockedDates": [],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_34_DEANA_BLACK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/2476e0c7-846d-4634-8f52-b94ecaaaf25a.png"
    ],
    "rentalPrice5Days": 1294,
    "shop": "Love Humbly",
    "rentalPrice4Days": 1125,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanablac-863129",
    "fittingAvailable": true,
    "name": "DEANA BLACK",
    "securityDeposit": 900,
    "id": "Love_Humbly_Shop_DEANA_BLACK",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "featured": false,
    "extraDayRate": 203,
    "slug": "deana-black",
    "rentalPrice3Days": 956,
    "retailPrice": 450000
  },
  {
    "name": "DEANA BURGUNDY",
    "colors": [
      "BURGUNDY"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "extraDayRate": 203,
    "rentalPrice4Days": 1125,
    "category": "Modern Filipiniana",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_38_DEANA_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/f0d78226-f24b-4173-8fb8-75bc23bf3b4c.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "slug": "deana-burgundy",
    "rentalPrice5Days": 1294,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "retailPrice": 450000,
    "fittingAvailable": true,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanaburg-863134",
    "shop": "Love Humbly",
    "id": "Love_Humbly_Shop_DEANA_BURGUNDY",
    "blockedDates": [],
    "featured": false,
    "securityDeposit": 900,
    "rentalPrice3Days": 956
  },
  {
    "rentalPrice3Days": 956,
    "id": "Love_Humbly_Shop_DEANA_CHAMPAGNE",
    "category": "Modern Filipiniana",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "extraDayRate": 203,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "securityDeposit": 900,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "featured": false,
    "rentalPrice5Days": 1294,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_39_DEANA_CHAMPAGNE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/7e042355-e610-42d8-a07b-c18d7ad49667.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice4Days": 1125,
    "name": "DEANA CHAMPAGNE",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanacham-863135",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "colors": [
      "CHAMPAGNE"
    ],
    "retailPrice": 450000,
    "slug": "deana-champagne"
  },
  {
    "rentalPrice3Days": 956,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "colors": [
      "GREEN"
    ],
    "shop": "Love Humbly",
    "fittingAvailable": true,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_43_DEANA_DUSTY_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/b335b855-b6b3-4981-b0d1-acb5a836cd2f.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "category": "Modern Filipiniana",
    "id": "Love_Humbly_Shop_DEANA_DUSTY_GREEN",
    "securityDeposit": 900,
    "blockedDates": [],
    "rentalPrice5Days": 1294,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice4Days": 1125,
    "slug": "deana-dusty-green",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "retailPrice": 450000,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanadust-863139",
    "featured": false,
    "name": "DEANA DUSTY GREEN",
    "extraDayRate": 203
  },
  {
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanadust-863131",
    "rentalPrice5Days": 1294,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice4Days": 1125,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_35_DEANA_DUSTY_ROSE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/c2be3504-4c55-4324-b4ff-fe1a383b8e8a.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "slug": "deana-dusty-rose",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "blockedDates": [],
    "name": "DEANA DUSTY ROSE",
    "featured": false,
    "retailPrice": 450000,
    "securityDeposit": 900,
    "colors": [
      "ROSE"
    ],
    "shop": "Love Humbly",
    "rentalPrice3Days": 956,
    "id": "Love_Humbly_Shop_DEANA_DUSTY_ROSE",
    "fittingAvailable": true,
    "extraDayRate": 203,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ]
  },
  {
    "rentalPrice3Days": 956,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanaecru-863136",
    "securityDeposit": 900,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "shop": "Love Humbly",
    "fittingAvailable": true,
    "retailPrice": 450000,
    "category": "Modern Filipiniana",
    "extraDayRate": 203,
    "rentalPrice5Days": 1294,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_40_DEANA_ECRU.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/392ccaeb-bcb2-44cb-aa54-1cc4cdabc3a3.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "slug": "deana-ecru",
    "id": "Love_Humbly_Shop_DEANA_ECRU",
    "rentalPrice4Days": 1125,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "ECRU"
    ],
    "featured": false,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "blockedDates": [],
    "name": "DEANA ECRU"
  },
  {
    "fittingAvailable": true,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "id": "Love_Humbly_Shop_DEANA_MIDNIGHT_BLUE",
    "rentalPrice3Days": 956,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "shop": "Love Humbly",
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "extraDayRate": 203,
    "name": "DEANA MIDNIGHT BLUE",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanamidn-863132",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_36_DEANA_MIDNIGHT_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/cc58c401-a4e6-4dde-88ed-42927e200853.png"
    ],
    "rentalPrice5Days": 1294,
    "slug": "deana-midnight-blue",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "retailPrice": 450000,
    "rentalPrice4Days": 1125,
    "featured": false,
    "colors": [
      "BLUE"
    ],
    "securityDeposit": 900
  },
  {
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanared-863133",
    "id": "Love_Humbly_Shop_DEANA_RED",
    "featured": false,
    "rentalPrice3Days": 956,
    "name": "DEANA RED",
    "securityDeposit": 900,
    "slug": "deana-red",
    "extraDayRate": 203,
    "fittingAvailable": true,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "retailPrice": 450000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_37_DEANA_RED.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/24102c0e-0a7e-40e8-8dfe-4c8b3d1889db.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "rentalPrice5Days": 1294,
    "rentalPrice4Days": 1125,
    "category": "Modern Filipiniana",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "RED"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Love Humbly"
  },
  {
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "rentalPrice3Days": 956,
    "category": "Modern Filipiniana",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "id": "Love_Humbly_Shop_DEANA_WHITE",
    "blockedDates": [],
    "rentalPrice5Days": 1294,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "retailPrice": 450000,
    "featured": false,
    "name": "DEANA WHITE",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_41_DEANA_WHITE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/3c572e48-a897-42c0-b38e-6f5eb771497a.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice4Days": 1125,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "WHITE"
    ],
    "securityDeposit": 900,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/deanawhit-863137",
    "extraDayRate": 203,
    "slug": "deana-white"
  },
  {
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/gabriella-842880",
    "id": "Love_Humbly_Shop_GABRIELLA_EMERALD",
    "rentalPrice3Days": 187,
    "featured": false,
    "securityDeposit": 176,
    "name": "GABRIELLA EMERALD",
    "slug": "gabriella-emerald",
    "extraDayRate": 150,
    "fittingAvailable": true,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "retailPrice": 88000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_117_GABRIELLA_EMERALD.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/499952be-7c76-4d65-92c6-e69154702e29.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice5Days": 253,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice4Days": 220,
    "category": "Modern Filipiniana",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "EMERALD"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Love Humbly"
  },
  {
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "name": "GABRIELLA GOLD MUSTARD",
    "blockedDates": [],
    "retailPrice": 88000,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 253,
    "featured": false,
    "rentalPrice4Days": 220,
    "slug": "gabriella-gold-mustard",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/gabriella-842883",
    "colors": [
      "MUSTARD"
    ],
    "fittingAvailable": true,
    "extraDayRate": 150,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "rentalPrice3Days": 187,
    "category": "Modern Filipiniana",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_118_GABRIELLA_GOLD_MUSTARD.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/fbb0a750-f00c-436e-94f7-92a79abb4c23.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "securityDeposit": 176,
    "id": "Love_Humbly_Shop_GABRIELLA_GOLD_MUSTARD"
  },
  {
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "blockedDates": [],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "retailPrice": 350000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_51_RIA_AMORE_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/d6540f7b-9f92-4639-b9c4-f092a767d9de.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "name": "RIA AMORE BEIGE",
    "rentalPrice3Days": 744,
    "colors": [
      "BEIGE"
    ],
    "featured": false,
    "slug": "ria-amore-beige",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-827293",
    "fittingAvailable": true,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "securityDeposit": 700,
    "extraDayRate": 158,
    "rentalPrice4Days": 875,
    "rentalPrice5Days": 1006,
    "category": "Modern Filipiniana",
    "id": "Love_Humbly_Shop_RIA_AMORE_BEIGE",
    "shop": "Love Humbly"
  },
  {
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "securityDeposit": 700,
    "retailPrice": 350000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_53_RIA_AMORE_BLACK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/80683b1e-2d81-4a20-9721-b2491b54d888.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "blockedDates": [],
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "rentalPrice4Days": 875,
    "category": "Modern Filipiniana",
    "rentalPrice5Days": 1006,
    "id": "Love_Humbly_Shop_RIA_AMORE_BLACK",
    "colors": [
      "BLACK"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-840318",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "slug": "ria-amore-black",
    "fittingAvailable": true,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "extraDayRate": 158,
    "featured": false,
    "rentalPrice3Days": 744,
    "name": "RIA AMORE BLACK"
  },
  {
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "name": "RIA AMORE BURGUNDY",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "rentalPrice3Days": 744,
    "securityDeposit": 700,
    "retailPrice": 350000,
    "id": "Love_Humbly_Shop_RIA_AMORE_BURGUNDY",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824614",
    "featured": false,
    "slug": "ria-amore-burgundy",
    "fittingAvailable": true,
    "extraDayRate": 158,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "colors": [
      "BURGUNDY"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "category": "Modern Filipiniana",
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_44_RIA_AMORE_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/2419b116-fff1-4b02-95c0-64a88d9d6d6e.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "blockedDates": []
  },
  {
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824617",
    "extraDayRate": 158,
    "rentalPrice3Days": 744,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_45_RIA_AMORE_CHAMPAGNE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/d61bc2b3-7ad3-4fe3-99f1-e65cc8dabb91.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "featured": false,
    "fittingAvailable": true,
    "colors": [
      "CHAMPAGNE"
    ],
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "retailPrice": 350000,
    "securityDeposit": 700,
    "blockedDates": [],
    "id": "Love_Humbly_Shop_RIA_AMORE_CHAMPAGNE",
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "name": "RIA AMORE CHAMPAGNE",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "category": "Modern Filipiniana",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "slug": "ria-amore-champagne"
  },
  {
    "fittingAvailable": true,
    "id": "Love_Humbly_Shop_RIA_AMORE_DARK_DUSTY_BLUE",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-845741",
    "colors": [
      "BLUE"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "blockedDates": [],
    "name": "RIA AMORE DARK DUSTY BLUE",
    "category": "Modern Filipiniana",
    "slug": "ria-amore-dark-dusty-blue",
    "rentalPrice3Days": 744,
    "securityDeposit": 700,
    "retailPrice": 350000,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_54_RIA_AMORE_DARK_DUSTY_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/a1c54cb0-582e-4f55-98cc-25c021247a44.png"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 158,
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "featured": false,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "shop": "Love Humbly"
  },
  {
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-831844",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "slug": "ria-amore-dusty-green",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "securityDeposit": 700,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "extraDayRate": 158,
    "name": "RIA AMORE DUSTY GREEN",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "retailPrice": 350000,
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "shop": "Love Humbly",
    "colors": [
      "GREEN"
    ],
    "featured": false,
    "fittingAvailable": true,
    "id": "Love_Humbly_Shop_RIA_AMORE_DUSTY_GREEN",
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_52_RIA_AMORE_DUSTY_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/3a5c7375-0c4a-46b6-b7e1-652b9292b54b.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice3Days": 744
  },
  {
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_46_RIA_AMORE_DUSTY_ROSE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/473bfcb9-1398-449c-b505-e62517d335e3.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "retailPrice": 350000,
    "name": "RIA AMORE DUSTY ROSE",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice3Days": 744,
    "colors": [
      "ROSE"
    ],
    "featured": false,
    "slug": "ria-amore-dusty-rose",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824620",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fittingAvailable": true,
    "securityDeposit": 700,
    "extraDayRate": 158,
    "rentalPrice4Days": 875,
    "rentalPrice5Days": 1006,
    "category": "Modern Filipiniana",
    "id": "Love_Humbly_Shop_RIA_AMORE_DUSTY_ROSE",
    "shop": "Love Humbly"
  },
  {
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": false,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "slug": "ria-amore-ecru",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824621",
    "fittingAvailable": true,
    "name": "RIA AMORE ECRU",
    "retailPrice": 350000,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 158,
    "rentalPrice3Days": 744,
    "category": "Modern Filipiniana",
    "colors": [
      "ECRU"
    ],
    "securityDeposit": 700,
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_47_RIA_AMORE_ECRU.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/40c6438c-f285-4a83-b998-93137646c326.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice4Days": 875,
    "blockedDates": [],
    "id": "Love_Humbly_Shop_RIA_AMORE_ECRU",
    "rentalPrice5Days": 1006,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ]
  },
  {
    "category": "Modern Filipiniana",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "fittingAvailable": true,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "blockedDates": [],
    "slug": "ria-amore-emerald",
    "name": "RIA AMORE EMERALD",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "id": "Love_Humbly_Shop_RIA_AMORE_EMERALD",
    "securityDeposit": 700,
    "rentalPrice3Days": 744,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "shop": "Love Humbly",
    "featured": false,
    "colors": [
      "EMERALD"
    ],
    "retailPrice": 350000,
    "extraDayRate": 158,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824662",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_55_RIA_AMORE_EMERALD.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/a815b0fb-45f5-46b1-8711-7ca88ba31ab2.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice4Days": 875,
    "rentalPrice5Days": 1006
  },
  {
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824671",
    "category": "Modern Filipiniana",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "securityDeposit": 700,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "slug": "ria-amore-midnight-blue",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "extraDayRate": 158,
    "name": "RIA AMORE MIDNIGHT BLUE",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "retailPrice": 350000,
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "shop": "Love Humbly",
    "colors": [
      "BLUE"
    ],
    "featured": false,
    "id": "Love_Humbly_Shop_RIA_AMORE_MIDNIGHT_BLUE",
    "fittingAvailable": true,
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_50_RIA_AMORE_MIDNIGHT_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/4be74e58-ece4-4092-9a72-787fb5314374.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice3Days": 744
  },
  {
    "rentalPrice4Days": 875,
    "securityDeposit": 700,
    "rentalPrice5Days": 1006,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "extraDayRate": 158,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "shop": "Love Humbly",
    "featured": false,
    "colors": [
      "RED"
    ],
    "rentalPrice3Days": 744,
    "name": "RIA AMORE RED",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824669",
    "blockedDates": [],
    "id": "Love_Humbly_Shop_RIA_AMORE_RED",
    "retailPrice": 350000,
    "fittingAvailable": true,
    "slug": "ria-amore-red",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_49_RIA_AMORE_RED.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/032b8e55-e6de-4dce-8b35-912475c23b88.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "category": "Modern Filipiniana"
  },
  {
    "category": "Modern Filipiniana",
    "retailPrice": 350000,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "name": "RIA AMORE WHITE",
    "colors": [
      "WHITE"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/riaamore-824666",
    "slug": "ria-amore-white",
    "rentalPrice4Days": 875,
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 1006,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_48_RIA_AMORE_WHITE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/643ead09-b77b-476d-9087-31bc75bb0cd0.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": false,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "fittingAvailable": true,
    "securityDeposit": 700,
    "id": "Love_Humbly_Shop_RIA_AMORE_WHITE",
    "extraDayRate": 158,
    "shop": "Love Humbly",
    "rentalPrice3Days": 744
  },
  {
    "id": "Love_Humbly_Shop_SALE_RIA_AMORE_CHAMPAGNE_4XL-5XL",
    "retailPrice": 245000,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "securityDeposit": 490,
    "name": "SALE!!! RIA AMORE CHAMPAGNE 4XL-5XL",
    "rentalPrice3Days": 521,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "category": "Modern Filipiniana",
    "fittingAvailable": true,
    "slug": "sale-ria-amore-champagne-4xl-5xl",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "extraDayRate": 150,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/saleri-864102",
    "rentalPrice4Days": 613,
    "rentalPrice5Days": 705,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_59_SALE_RIA_AMORE_CHAMPAGNE_4XL-5XL.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/88fd00de-e308-4433-80ee-884ab498930f.png"
    ],
    "featured": false,
    "shop": "Love Humbly",
    "colors": [
      "4XL-5XL"
    ],
    "blockedDates": [],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ]
  },
  {
    "slug": "sale-ria-amore-ecru-4xl-5xl",
    "retailPrice": 245000,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_58_SALE_RIA_AMORE_ECRU_4XL-5XL.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/bf10391b-7918-44a5-b67a-620f64405553.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "category": "Modern Filipiniana",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice4Days": 613,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice5Days": 705,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "securityDeposit": 490,
    "colors": [
      "4XL-5XL"
    ],
    "blockedDates": [],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/saleri-864101",
    "name": "SALE!!! RIA AMORE ECRU 4XL-5XL",
    "featured": false,
    "shop": "Love Humbly",
    "rentalPrice3Days": 521,
    "id": "Love_Humbly_Shop_SALE_RIA_AMORE_ECRU_4XL-5XL",
    "extraDayRate": 150,
    "fittingAvailable": true
  },
  {
    "fittingAvailable": true,
    "blockedDates": [],
    "securityDeposit": 490,
    "name": "SALE!!! RIA AMORE RED S-M",
    "category": "Modern Filipiniana",
    "slug": "sale-ria-amore-red-s-m",
    "rentalPrice3Days": 521,
    "id": "Love_Humbly_Shop_SALE_RIA_AMORE_RED_S-M",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_57_SALE_RIA_AMORE_RED_S-M.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/eaf2dadf-70e2-4640-8b97-a83be22dd23f.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "extraDayRate": 150,
    "featured": false,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "retailPrice": 245000,
    "rentalPrice4Days": 613,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "S-M"
    ],
    "rentalPrice5Days": 705,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/saleri-864094",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown"
  },
  {
    "rentalPrice4Days": 613,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "featured": false,
    "shop": "Love Humbly",
    "rentalPrice5Days": 705,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "blockedDates": [],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/saleri-864102",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "retailPrice": 245000,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/88fd00de-e308-4433-80ee-884ab498930f.png"
    ],
    "rentalPrice3Days": 521,
    "category": "Modern Filipiniana",
    "securityDeposit": 490,
    "extraDayRate": 150,
    "slug": "sale-ria-amore-champagne-4xl-5xl",
    "id": "Love_Humbly_Shop_SALE____RIA_AMORE_CHAMPAGNE_4XL-5XL",
    "name": "SALE!!! RIA AMORE CHAMPAGNE 4XL-5XL",
    "colors": [
      "4XL-5XL"
    ],
    "fittingAvailable": true
  },
  {
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "extraDayRate": 150,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/saleri-864101",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "images": [
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/bf10391b-7918-44a5-b67a-620f64405553.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice3Days": 521,
    "featured": false,
    "retailPrice": 245000,
    "colors": [
      "4XL-5XL"
    ],
    "id": "Love_Humbly_Shop_SALE____RIA_AMORE_ECRU_4XL-5XL",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "name": "SALE!!! RIA AMORE ECRU 4XL-5XL",
    "rentalPrice4Days": 613,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "rentalPrice5Days": 705,
    "slug": "sale-ria-amore-ecru-4xl-5xl",
    "category": "Modern Filipiniana",
    "securityDeposit": 490
  },
  {
    "rentalPrice3Days": 521,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "category": "Modern Filipiniana",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "id": "Love_Humbly_Shop_SALE____RIA_AMORE_RED_S-M",
    "blockedDates": [],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "rentalPrice5Days": 705,
    "retailPrice": 245000,
    "name": "SALE!!! RIA AMORE RED S-M",
    "featured": false,
    "images": [
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/eaf2dadf-70e2-4640-8b97-a83be22dd23f.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice4Days": 613,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "S-M"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/saleri-864094",
    "securityDeposit": 490,
    "extraDayRate": 150,
    "slug": "sale-ria-amore-red-s-m"
  },
  {
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "extraDayRate": 158,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamirabei-834012",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice3Days": 744,
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_74_TAMIRA_BEIGE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/866e2a42-85fd-402d-83c8-38fa6a01f34e.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "featured": false,
    "retailPrice": 350000,
    "colors": [
      "BEIGE"
    ],
    "id": "Love_Humbly_Shop_TAMIRA_BEIGE",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "blockedDates": [],
    "name": "TAMIRA BEIGE",
    "rentalPrice4Days": 875,
    "rentalPrice5Days": 1006,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "slug": "tamira-beige",
    "category": "Modern Filipiniana",
    "securityDeposit": 700
  },
  {
    "rentalPrice3Days": 744,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "category": "Modern Filipiniana",
    "fittingAvailable": true,
    "shop": "Love Humbly",
    "id": "Love_Humbly_Shop_TAMIRA_BLACK",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "blockedDates": [],
    "rentalPrice5Days": 1006,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "name": "TAMIRA BLACK",
    "retailPrice": 350000,
    "featured": false,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_75_TAMIRA_BLACK.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/38ecf9fe-5519-45bc-bad6-8280a56de06c.png"
    ],
    "rentalPrice4Days": 875,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "BLACK"
    ],
    "securityDeposit": 700,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamirabla-834014",
    "extraDayRate": 158,
    "slug": "tamira-black"
  },
  {
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "featured": false,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "slug": "tamira-burgundy",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamirabur-834059",
    "fittingAvailable": true,
    "name": "TAMIRA BURGUNDY",
    "retailPrice": 350000,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 158,
    "rentalPrice3Days": 744,
    "category": "Modern Filipiniana",
    "colors": [
      "BURGUNDY"
    ],
    "securityDeposit": 700,
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_76_TAMIRA_BURGUNDY.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/f353da7d-d54b-4ac9-8a03-3d0ce36d5d71.png"
    ],
    "rentalPrice4Days": 875,
    "blockedDates": [],
    "rentalPrice5Days": 1006,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "id": "Love_Humbly_Shop_TAMIRA_BURGUNDY"
  },
  {
    "featured": false,
    "fittingAvailable": true,
    "extraDayRate": 158,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiracha-834062",
    "securityDeposit": 700,
    "slug": "tamira-champagne",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice3Days": 744,
    "retailPrice": 350000,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "name": "TAMIRA CHAMPAGNE",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "shop": "Love Humbly",
    "category": "Modern Filipiniana",
    "id": "Love_Humbly_Shop_TAMIRA_CHAMPAGNE",
    "blockedDates": [],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_77_TAMIRA_CHAMPAGNE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/afa0949f-4d80-46bc-9eaa-8ad75baefcb6.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "rentalPrice5Days": 1006,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "rentalPrice4Days": 875,
    "colors": [
      "CHAMPAGNE"
    ]
  },
  {
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "blockedDates": [],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiradar-834063",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "slug": "tamira-dark-dusty-blue",
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "colors": [
      "BLUE"
    ],
    "id": "Love_Humbly_Shop_TAMIRA_DARK_DUSTY_BLUE",
    "featured": false,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_78_TAMIRA_DARK_DUSTY_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/64703989-1bcd-4172-80f5-25ff06e3be33.png"
    ],
    "name": "TAMIRA DARK DUSTY BLUE",
    "retailPrice": 350000,
    "extraDayRate": 158,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "rentalPrice3Days": 744,
    "shop": "Love Humbly",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "category": "Modern Filipiniana",
    "securityDeposit": 700,
    "fittingAvailable": true
  },
  {
    "colors": [
      "GREEN"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "rentalPrice3Days": 744,
    "name": "TAMIRA DUSTY GREEN",
    "id": "Love_Humbly_Shop_TAMIRA_DUSTY_GREEN",
    "category": "Modern Filipiniana",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "securityDeposit": 700,
    "fittingAvailable": true,
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_79_TAMIRA_DUSTY_GREEN.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/8416c5f5-dd70-49ed-bb21-6be34581f9b3.png"
    ],
    "slug": "tamira-dusty-green",
    "blockedDates": [],
    "retailPrice": 350000,
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "featured": false,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "shop": "Love Humbly",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "extraDayRate": 158,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiradus-834070",
    "tagline": "Authentic Love Humbly designer piece from Enstack"
  },
  {
    "extraDayRate": 158,
    "shop": "Love Humbly",
    "rentalPrice4Days": 875,
    "id": "Love_Humbly_Shop_TAMIRA_DUSTY_ROSE",
    "rentalPrice5Days": 1006,
    "category": "Modern Filipiniana",
    "blockedDates": [],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "colors": [
      "ROSE"
    ],
    "rentalPrice3Days": 744,
    "securityDeposit": 700,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiradus-834071",
    "slug": "tamira-dusty-rose",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_80_TAMIRA_DUSTY_ROSE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/c3c5969e-56a3-4d33-b94a-ab7bba6e4596.png"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "retailPrice": 350000,
    "fittingAvailable": true,
    "featured": false,
    "name": "TAMIRA DUSTY ROSE",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ]
  },
  {
    "rentalPrice3Days": 744,
    "blockedDates": [],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "fittingAvailable": true,
    "id": "Love_Humbly_Shop_TAMIRA_ECRU",
    "shop": "Love Humbly",
    "rentalPrice5Days": 1006,
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_81_TAMIRA_ECRU.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/ef54d161-9402-40b1-8e51-cb7272c6c1d1.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiraecr-834073",
    "rentalPrice4Days": 875,
    "extraDayRate": 158,
    "name": "TAMIRA ECRU",
    "securityDeposit": 700,
    "category": "Modern Filipiniana",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "colors": [
      "ECRU"
    ],
    "slug": "tamira-ecru",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "retailPrice": 350000
  },
  {
    "rentalPrice5Days": 1006,
    "shop": "Love Humbly",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiramid-834074",
    "rentalPrice4Days": 875,
    "category": "Modern Filipiniana",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "extraDayRate": 158,
    "retailPrice": 350000,
    "rentalPrice3Days": 744,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "slug": "tamira-midnight-blue",
    "id": "Love_Humbly_Shop_TAMIRA_MIDNIGHT_BLUE",
    "securityDeposit": 700,
    "colors": [
      "BLUE"
    ],
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "silhouette": "A-Line Modern Filipiniana Gown",
    "fittingAvailable": true,
    "blockedDates": [],
    "featured": false,
    "name": "TAMIRA MIDNIGHT BLUE",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_82_TAMIRA_MIDNIGHT_BLUE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/ee48d6a8-c496-428a-8d8c-1b7da89a99af.png"
    ]
  },
  {
    "rentalPrice4Days": 875,
    "retailPrice": 350000,
    "rentalPrice5Days": 1006,
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "id": "Love_Humbly_Shop_TAMIRA_OLD_ROSE",
    "extraDayRate": 158,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "shop": "Love Humbly",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamiraold-834076",
    "featured": false,
    "colors": [
      "ROSE"
    ],
    "securityDeposit": 700,
    "rentalPrice3Days": 744,
    "name": "TAMIRA OLD ROSE",
    "blockedDates": [],
    "fabric": "Premium Textured Gazar Silk",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_83_TAMIRA_OLD_ROSE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/7397d7d6-70c2-467d-89b1-286bd9a64c70.png"
    ],
    "fittingAvailable": true,
    "slug": "tamira-old-rose",
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "category": "Modern Filipiniana"
  },
  {
    "colors": [
      "RED"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "silhouette": "A-Line Modern Filipiniana Gown",
    "rentalPrice3Days": 744,
    "category": "Modern Filipiniana",
    "slug": "tamira-red",
    "retailPrice": 350000,
    "securityDeposit": 700,
    "name": "TAMIRA RED",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_84_TAMIRA_RED.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/aa9b4b03-0374-4557-99c8-5bb709d033cd.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "availableSizes": [
      "S",
      "M",
      "L",
      "Free Size"
    ],
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamirared-834077",
    "blockedDates": [],
    "fittingAvailable": true,
    "id": "Love_Humbly_Shop_TAMIRA_RED",
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "shop": "Love Humbly",
    "rentalPrice5Days": 1006,
    "rentalPrice4Days": 875,
    "featured": false,
    "extraDayRate": 158
  },
  {
    "fittingAvailable": true,
    "name": "TAMIRA WHITE",
    "category": "Modern Filipiniana",
    "rentalPrice3Days": 744,
    "blockedDates": [],
    "id": "Love_Humbly_Shop_TAMIRA_WHITE",
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "slug": "tamira-white",
    "featured": false,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_85_TAMIRA_WHITE.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/206f054a-4a4d-4102-b6d7-bbb255c53a0b.png"
    ],
    "fabric": "Premium Textured Gazar Silk",
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tamirawhi-834078",
    "rentalPrice5Days": 1006,
    "extraDayRate": 158,
    "shop": "Love Humbly",
    "retailPrice": 350000,
    "rentalPrice4Days": 875,
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "colors": [
      "WHITE"
    ],
    "securityDeposit": 700,
    "silhouette": "A-Line Modern Filipiniana Gown"
  },
  {
    "colors": [
      "DRESS"
    ],
    "name": "TULLE INFINITY DRESS",
    "rentalPrice3Days": 272,
    "availableSizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "securityDeposit": 256,
    "silhouette": "A-Line Modern Filipiniana Gown",
    "featured": false,
    "fittingAvailable": true,
    "fabric": "Soft Illusion Tulle",
    "images": [
      "https://bdpoazipbgicujqldoip.supabase.co/storage/v1/object/public/Rent-To-Slay/Love_Humbly_Shop_99_TULLE_INFINITY_DRESS.png",
      "https://d3umjsmruwiom.cloudfront.net/user_1389/cms/5cf7be46-ee8a-4f70-a90a-e543c551f7ee.png"
    ],
    "blockedDates": [],
    "slug": "tulle-infinity-dress",
    "rentalPrice5Days": 368,
    "rentalPrice4Days": 320,
    "description": "Authentic designer creation from Love Humbly. Complete with high-definition tailoring, corset boning, and premium fabrics. Official Enstack rental listing: https://enstack.ph/love-humbly-shop/tulleinfi-801464",
    "category": "Infinity & Multiway",
    "bestFor": [
      "Weddings & Entourage",
      "Debut & Galas",
      "Photoshoots & Editorial",
      "Formal Events"
    ],
    "careNotes": [
      "Professional Eco-Dry Clean Only",
      "Steam lightly on low heat",
      "Delicate corset boning & zipper"
    ],
    "shop": "Love Humbly",
    "extraDayRate": 150,
    "tagline": "Authentic Love Humbly designer piece from Enstack",
    "id": "Love_Humbly_Shop_TULLE_INFINITY_DRESS",
    "retailPrice": 128000
  }
];

export const INITIAL_BOOKINGS: Booking[] = [];
