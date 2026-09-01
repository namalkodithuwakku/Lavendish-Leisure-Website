export type Hotel = {
  slug: string; name: string; shortName: string; destination: string; region: string;
  image: string; gallery: string[]; phone: string; phoneDisplay: string; address: string;
  scenario: string; experiences: string[]; intro: string; highlights: string[];
};

export const groupContact = {
  hotline: "+94753555946", hotlineDisplay: "+94 75 355 5946",
  whatsapp: "+94752200202", whatsappDisplay: "+94 75 220 0202",
  landline: "+94112088865", email: "sales@lavendishleisure.com",
  bookingUrl: "https://lavendishleisure.com/booking/",
};

const images = {
  grand: "https://lavendishleisure.com/wp-content/uploads/2024/07/grand_tamarind_lake_hotel_cover.jpg",
  okrin: "https://lavendishleisure.com/wp-content/uploads/2025/06/lavendish-okrin-hotel-1.jpg",
  beach: "https://lavendishleisure.com/wp-content/uploads/2025/06/lavendish-beach-resort.jpg",
  beach2: "https://lavendishleisure.com/wp-content/uploads/2025/06/lavendish-beach-resort-1.jpg",
  miridiya: "https://lavendishleisure.com/wp-content/uploads/2024/08/miridiya-lake-resort.jpg",
  wasgamuwa: "https://lavendishleisure.com/wp-content/uploads/2024/08/wasgamuwa-national-park.jpg",
  wilpattu: "https://lavendishleisure.com/wp-content/uploads/2025/06/wilpattu-dis-1.jpg",
  kandy: "https://lavendishleisure.com/wp-content/uploads/2024/08/Kandy-Sri-Lanka12-819x1024-1.jpg",
  pool: "https://lavendishleisure.com/wp-content/uploads/2025/06/pool-side-p-1080.jpeg",
  pool2: "https://lavendishleisure.com/wp-content/uploads/2025/06/Swimming-Pool-8-scaled.jpg",
  property: "https://lavendishleisure.com/wp-content/uploads/2025/06/DSC01175-HDR.jpg",
};

export const hotels: Hotel[] = [
  { slug:"grand-tamarind-lake-kataragama", name:"Grand Tamarind Lake", shortName:"Grand Tamarind Lake", destination:"Kataragama", region:"Southern Sri Lanka", image:images.grand, gallery:[images.grand,images.pool,images.pool2], phone:"+94753556039", phoneDisplay:"+94 75 355 6039", address:"Raja Mawatha, Kataragama", scenario:"504430", experiences:["Family","Wildlife","Pilgrimage","Lakeside"], intro:"A relaxed lakeside base in Kataragama for family holidays, sacred journeys and wildlife adventures towards Yala.", highlights:["Kataragama location","Gateway to Yala","Family-friendly setting","Pool and lakeside atmosphere"] },
  { slug:"lavendish-okrin-kataragama", name:"Lavendish Okrin", shortName:"Okrin", destination:"Kataragama", region:"Southern Sri Lanka", image:images.okrin, gallery:[images.okrin,images.property,images.pool], phone:"+94753556044", phoneDisplay:"+94 75 355 6044", address:"No. 10, Detagamuwa, Kataragama", scenario:"504427", experiences:["Wildlife","Pilgrimage","Family","Lakeside"], intro:"A comfortable Kataragama stay beside the natural landscape of Detagamuwa, well placed for pilgrimage and Yala-bound journeys.", highlights:["Near Detagamuwa Tank","Kataragama access","Yala gateway","Spacious stay setting"] },
  { slug:"tamarind-lifestyle-kataragama", name:"Lavendish Tamarind Lifestyle", shortName:"Tamarind Lifestyle", destination:"Kataragama", region:"Southern Sri Lanka", image:images.pool, gallery:[images.pool,images.pool2,images.grand], phone:"+94753556130", phoneDisplay:"+94 75 355 6130", address:"Raja Mawatha, Kataragama", scenario:"505602", experiences:["Family","Pilgrimage","Wildlife","Groups"], intro:"A practical lifestyle hotel for families, groups and travellers who want straightforward access to Kataragama and nearby wildlife experiences.", highlights:["Central Kataragama base","Family and group stays","Pilgrimage access","Yala excursion potential"] },
  { slug:"miridiya-lake-resort-anuradhapura", name:"Miridiya Lake Resort", shortName:"Miridiya Lake Resort", destination:"Anuradhapura", region:"North Central Sri Lanka", image:images.miridiya, gallery:[images.miridiya,images.pool2,images.property], phone:"+94752555921", phoneDisplay:"+94 75 255 5921", address:"Wasaladantha Mawatha, Anuradhapura", scenario:"504429", experiences:["Culture","Pilgrimage","Lakeside","Family"], intro:"A tranquil Anuradhapura base for ancient-city exploration, pilgrimage journeys and peaceful time beside the lake.", highlights:["Anuradhapura location","Ancient-city access","Lakeside setting","Family-friendly base"] },
  { slug:"lavendish-lake-giritale", name:"Lavendish Lake", shortName:"Lavendish Lake", destination:"Giritale", region:"Cultural Triangle", image:images.grand, gallery:[images.grand,images.pool,images.property], phone:groupContact.hotline, phoneDisplay:groupContact.hotlineDisplay, address:"Giritale, Polonnaruwa District", scenario:"508875", experiences:["Lakeside","Culture","Nature","Family"], intro:"A calm Giritale stay positioned for lakeside relaxation and journeys into Polonnaruwa and Sri Lanka’s Cultural Triangle.", highlights:["Giritale Lake setting","Polonnaruwa access","Cultural Triangle base","Nature-led stays"] },
  { slug:"lavendish-beach-resort-unawatuna", name:"Lavendish Beach Resort", shortName:"Beach Resort", destination:"Unawatuna", region:"Southern Coast", image:images.beach, gallery:[images.beach,images.beach2,images.pool], phone:"+94912283201", phoneDisplay:"+94 91 228 3201", address:"Ganehena, Unawatuna", scenario:"505885", experiences:["Beach","Couples","Family","Coast"], intro:"A coastal stay in Unawatuna with convenient access to the beach, Galle and the energetic character of Sri Lanka’s southern coast.", highlights:["Unawatuna location","Beach access","Galle excursions","Couples and family stays"] },
  { slug:"lavendish-wild-safari-wasgamuwa", name:"Lavendish Wild Safari", shortName:"Wild Safari", destination:"Wasgamuwa", region:"Central Sri Lanka", image:images.wasgamuwa, gallery:[images.wasgamuwa,images.property,images.pool], phone:"+94753941941", phoneDisplay:"+94 75 394 1941", address:"No. 1 Ela, Hadungamuwa, Wilgamuwa, Wasgamuwa", scenario:"504428", experiences:["Wildlife","Nature","Safari","Family"], intro:"A nature-focused base near Wasgamuwa for elephant country, safari journeys and unhurried time surrounded by Sri Lanka’s wild interior.", highlights:["Wasgamuwa safari base","Wildlife experiences","Nature setting","Family adventure"] },
  { slug:"lavendish-wild-wilpattu", name:"Lavendish Wild Wilpattu", shortName:"Wild Wilpattu", destination:"Wilpattu", region:"North Western Sri Lanka", image:images.wilpattu, gallery:[images.wilpattu,images.property,images.pool], phone:"+94252056001", phoneDisplay:"+94 25 205 6001", address:"Puttalam Road, Sinharagama, Nochchiyagama", scenario:"504623", experiences:["Wildlife","Safari","Nature","Adventure"], intro:"A convenient wilderness base for Wilpattu National Park, designed for travellers who want safari experiences and a quieter natural setting.", highlights:["Wilpattu safari access","Sinharagama location","Wildlife-led journeys","Nature retreat"] },
  { slug:"lavendish-hills-kandy", name:"Lavendish Hills Kandy", shortName:"Lavendish Hills", destination:"Kandy", region:"Central Highlands", image:images.kandy, gallery:[images.kandy,images.property,images.pool], phone:"+94753581186", phoneDisplay:"+94 75 358 1186", address:"No. 12, Old Matale Road, Kandy", scenario:"508117", experiences:["Hills","Culture","City","Couples"], intro:"A Kandy city base combining hill-country atmosphere with convenient access to cultural landmarks and the city’s key experiences.", highlights:["Kandy city location","Cultural attractions","Hill-country atmosphere","Leisure and business stays"] },
  { slug:"lavendish-country-resort-dambulla", name:"Lavendish Country Resort", shortName:"Country Resort", destination:"Dambulla", region:"Cultural Triangle", image:images.property, gallery:[images.property,images.pool2,images.grand], phone:"+94753556071", phoneDisplay:"+94 75 355 6071", address:"01 Mile Post, Kandalama Road, Dambulla", scenario:"504622", experiences:["Culture","Family","Nature","Heritage"], intro:"A country-style base in Dambulla for Sigiriya, cave-temple visits and memorable family journeys through the Cultural Triangle.", highlights:["Dambulla location","Sigiriya excursions","Cultural Triangle access","Family-friendly base"] },
];

export const hotelBySlug = (slug: string) => hotels.find((hotel) => hotel.slug === slug);
export const whatsappLink = (hotel?: Hotel) => {
  const text = hotel ? `Hello Lavendish Leisure, I would like to enquire about ${hotel.name} in ${hotel.destination}.` : "Hello Lavendish Leisure, I would like help planning a stay.";
  return `https://wa.me/${groupContact.whatsapp.replace("+","")}?text=${encodeURIComponent(text)}`;
};
