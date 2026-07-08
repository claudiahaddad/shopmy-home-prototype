const USER_PROFILE = {
  name: "claudia",
  location: "New York, NY",
  signals: ["saved Reformation", "follows @sofia", "browsed wedding content"],
};

const PRODUCT_IMAGE_FALLBACK = "https://picsum.photos/id/434/400/500";
const SAVED_BY_AVATARS = {
  Sofia: "assets/sofia-avatar.png",
  Alexandra: "assets/alexandra-avatar.png",
  Hailee: "assets/hailee-avatar.png",
};

function productImage(photoId) {
  return `https://images.unsplash.com/photo-${photoId}?w=400&h=500&fit=crop&auto=format&q=80`;
}

function picsumImage(id) {
  return `https://picsum.photos/id/${id}/400/500`;
}

const THEMES = [
  {
    id: "euro-summer",
    name: "Euro Summer",
    tagline: "Linen, espadrilles, and golden-hour essentials",
    type: "evergreen",
    accent: "#c4a574",
    gradient: "linear-gradient(135deg, #f5e6d3 0%, #e8c9a0 50%, #d4a574 100%)",
    image: "assets/euro-summer.png",
    forYou: true,
    reason: "Trending in NYC this week",
    products: [
      { id: 1, name: "Linen Midi Dress", brand: "Reformation", price: 178, image: productImage("1572804013309-59a88b7e92f1"), curator: "Sofia M.", savedBy: "Sofia" },
      { id: 2, name: "Woven Raffia Tote", brand: "Staud", price: 245, image: productImage("1590874103328-eac38a683ce7"), curator: "Elena R.", savedBy: "Sofia" },
      { id: 3, name: "Gold Hoop Earrings", brand: "Mejuri", price: 98, image: productImage("1611591437281-460bfbe1220a"), curator: "Sofia M." },
      { id: 4, name: "Espadrille Wedges", brand: "Castañer", price: 165, image: productImage("1603487742131-4160ec999306"), curator: "Maya K." },
      { id: 5, name: "Oversized Sunglasses", brand: "Le Specs", price: 69, image: productImage("1511499767150-a48a237f0083"), curator: "Elena R.", savedBy: "Alexandra" },
      { id: 6, name: "Silk Scarf", brand: "Hermès", price: 420, image: productImage("1601924994987-69e26d50dc26"), curator: "Sofia M." },
      { id: 7, name: "Straw Bucket Hat", brand: "Lack of Color", price: 89, image: productImage("1521369909029-2afed882baee"), curator: "Maya K." },
      { id: 8, name: "Crochet Top", brand: "& Other Stories", price: 59, image: productImage("1434389677669-e08b4cac3105"), curator: "Elena R." },
      { id: 9, name: "Leather Sandals", brand: "Ancient Greek", price: 280, image: productImage("1543163521-1bf539c55dd2"), curator: "Sofia M." },
      { id: 10, name: "Mini Crossbody", brand: "Jacquemus", price: 590, image: productImage("1584917865442-de89df76afd3"), curator: "Maya K.", savedBy: "Alexandra" },
    ],
  },
  {
    id: "wedding-guest",
    name: "Wedding Guest",
    tagline: "Elegant dresses and finishing touches for every ceremony",
    type: "evergreen",
    accent: "#9b8b9e",
    gradient: "linear-gradient(135deg, #f0e8f0 0%, #d4c4d4 50%, #b8a4b8 100%)",
    image: "assets/wedding-guest.png",
    forYou: true,
    reason: "Because you saved Reformation",
    products: [
      { id: 11, name: "Satin Slip Dress", brand: "Reformation", price: 248, image: productImage("1566174053879-31528523f8ae"), curator: "Sofia M.", savedBy: "Sofia" },
      { id: 12, name: "Pearl Drop Earrings", brand: "Mejuri", price: 150, image: productImage("1605100804763-247f67b3557e"), curator: "Elena R." },
      { id: 13, name: "Strappy Heels", brand: "Sam Edelman", price: 130, image: productImage("1542291026-7eec264c27ff"), curator: "Maya K.", savedBy: "Alexandra" },
      { id: 14, name: "Clutch Bag", brand: "Cult Gaia", price: 198, image: productImage("1553062407-98eeb64c6a62"), curator: "Sofia M." },
      { id: 15, name: "Floral Midi", brand: "Zimmermann", price: 695, image: productImage("1515886657613-9f3515b0c78f"), curator: "Elena R.", savedBy: "Sofia" },
      { id: 16, name: "Hair Comb", brand: "Jennifer Behr", price: 245, image: productImage("1522337360788-8b13dee7a37e"), curator: "Maya K." },
      { id: 17, name: "Wrap Dress", brand: "DVF", price: 368, image: productImage("1490481651871-ab68de25d43d"), curator: "Sofia M.", savedBy: "Alexandra" },
      { id: 18, name: "Block Heel Sandal", brand: "Schutz", price: 118, image: productImage("1617137968427-85924c800a22"), curator: "Elena R." },
      { id: 19, name: "Statement Cuff", brand: "Completedworks", price: 320, image: productImage("1573408301185-9146fe634ad0"), curator: "Maya K." },
      { id: 20, name: "Silk Shawl", brand: "Equipment", price: 295, image: productImage("1558618666-fcd25c85cd64"), curator: "Sofia M." },
    ],
  },
  {
    id: "quiet-luxury",
    name: "Quiet Luxury",
    tagline: "Understated pieces that speak for themselves",
    type: "evergreen",
    accent: "#8a8580",
    gradient: "linear-gradient(135deg, #f5f3f0 0%, #e8e4df 50%, #d4cfc8 100%)",
    image: "assets/quiet-luxury.png",
    forYou: true,
    reason: "Because you like Khaite",
    products: [
      { id: 21, name: "Cashmere Sweater", brand: "Loro Piana", price: 1890, image: productImage("1556821840-3a63f95609a7"), curator: "Sofia M.", savedBy: "Alexandra" },
      { id: 22, name: "Leather Tote", brand: "The Row", price: 2890, image: productImage("1445205170230-053b83016050"), curator: "Elena R.", savedBy: "Sofia" },
      { id: 23, name: "Gold Bangle", brand: "Cartier", price: 6800, image: productImage("1611591437281-460bfbe1220a"), curator: "Maya K." },
      { id: 24, name: "Wool Coat", brand: "Max Mara", price: 3290, image: productImage("1539533018447-63fcce2678e3"), curator: "Sofia M." },
      { id: 25, name: "Leather Loafers", brand: "Totême", price: 590, image: productImage("1556905055-8f358a7a47b2"), curator: "Elena R." },
      { id: 26, name: "Silk Blouse", brand: "Khaite", price: 890, image: productImage("1564257631407-4deb1f99d992"), curator: "Maya K.", savedBy: "Sofia" },
      { id: 27, name: "Structured Bag", brand: "Bottega Veneta", price: 3200, image: productImage("1523275335684-37898b6baf30"), curator: "Sofia M.", savedBy: "Alexandra" },
      { id: 28, name: "Tailored Trousers", brand: "Vince", price: 295, image: productImage("1594633312681-425c7b97ccd1"), curator: "Elena R." },
      { id: 29, name: "Stud Earrings", brand: "Tiffany & Co.", price: 1250, image: productImage("1605100804763-247f67b3557e"), curator: "Maya K." },
      { id: 30, name: "Leather Belt", brand: "Hermès", price: 890, image: productImage("1576995853123-5a10305d93c0"), curator: "Sofia M." },
    ],
  },
  {
    id: "fourth-of-july",
    name: "Fourth of July",
    tagline: "Red, white, blue — and ready for the long weekend",
    type: "seasonal",
    accent: "#c44",
    gradient: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 40%, #e8f0ff 100%)",
    image: "assets/fourth-of-july.png",
    forYou: true,
    reason: "Because it's one week away",
    products: [
      { id: 81, name: "Red & White Striped Midi Dress", brand: "Reformation", price: 178, image: productImage("1541099649105-f69ad21f3246"), curator: "Sofia M.", savedBy: "Alexandra" },
      { id: 82, name: "Oversized Navy Sunglasses", brand: "Le Specs", price: 69, image: productImage("1611222777277-61319d63ca94"), curator: "Elena R." },
      { id: 83, name: "Red Canvas Stripe Tote", brand: "Baggu", price: 42, image: productImage("1445205170230-053b83016050"), curator: "Maya K." },
      { id: 84, name: "White Wide-Leg Linen Pants", brand: "Vince", price: 295, image: productImage("1469334031218-e382a71b716b"), curator: "Sofia M.", savedBy: "Sofia" },
      { id: 85, name: "Blue Gingham Mini Dress", brand: "& Other Stories", price: 89, image: productImage("1515372039744-b8f02a3ae446"), curator: "Elena R.", savedBy: "Sofia" },
      { id: 86, name: "White Cat-Eye Sunglasses", brand: "Celine", price: 420, image: productImage("1577803645773-f96470509666"), curator: "Maya K.", savedBy: "Alexandra" },
      { id: 87, name: "Navy Woven Beach Tote", brand: "Cuyana", price: 168, image: productImage("1590874103328-eac38a683ce7"), curator: "Sofia M." },
      { id: 88, name: "Cherry Red Puff-Sleeve Dress", brand: "Zara", price: 59, image: productImage("1594938298603-c8148c4dae35"), curator: "Elena R." },
      { id: 89, name: "White Cropped Wide Pants", brand: "Aritzia", price: 98, image: productImage("1541643600914-78b084683601"), curator: "Maya K." },
      { id: 90, name: "Red Bandana Print Tote", brand: "Staud", price: 195, image: productImage("1553062407-98eeb64c6a62"), curator: "Sofia M." },
    ],
  },
];

const CREATORS = [
  {
    id: "sofia",
    name: "Sofia's Picks",
    fullName: "Sofia Richie Grainge",
    shortName: "Sofia",
    handle: "@sofiarichiegrainge",
    image: "assets/creator-sofia.png",
    bio: "Quiet-luxury staples, tailored neutrals, and effortless date-night pieces.",
    updated: "Updated today",
    pickIds: [21, 24, 1, 22, 15, 11, 84, 6, 27, 30, 25, 20],
  },
  {
    id: "alexandra",
    name: "Alexandra's Picks",
    fullName: "Alexandra Leclerc",
    shortName: "Alexandra",
    handle: "@alexandra.leclerc",
    image: "assets/creator-alexandra.png",
    bio: "Riviera-ready dresses, statement accessories, and wedding-season finds.",
    updated: "Updated this week",
    pickIds: [15, 17, 5, 81, 10, 13, 27, 86, 2, 88, 14, 21],
  },
  {
    id: "hailee",
    name: "Hailee's Picks",
    fullName: "Hailee Steinfeld",
    shortName: "Hailee",
    handle: "@haileesteinfeld",
    image: "assets/creator-hailee.png",
    bio: "Off-duty cool-girl staples, sharp tailoring, and red-carpet-ready statement pieces.",
    updated: "Updated today",
    pickIds: [26, 82, 9, 28, 3, 89, 19, 7, 85, 4, 16, 12],
  },
];

function getThemeById(id) {
  return THEMES.find((t) => t.id === id);
}

function getAllProducts() {
  return THEMES.flatMap((t) => t.products);
}

function getProductById(id) {
  return getAllProducts().find((p) => p.id === id);
}

function getCreatorById(id) {
  return CREATORS.find((c) => c.id === id);
}

function getCreatorPicks(creatorId, limit = 10) {
  const creator = getCreatorById(creatorId);
  if (!creator) return [];

  const picks = creator.pickIds
    .map(getProductById)
    .filter(Boolean);

  // Rotate the order on each visit so the row always feels fresh.
  const offset = Math.floor(Date.now() / (1000 * 60 * 60)) % picks.length;
  const rotated = [...picks.slice(offset), ...picks.slice(0, offset)];

  return rotated.slice(0, limit);
}

function getPersonalizedThemes() {
  return [...THEMES].sort((a, b) => {
    if (a.forYou && !b.forYou) return -1;
    if (!a.forYou && b.forYou) return 1;
    if (a.type === "seasonal" && b.type !== "seasonal") return -1;
    if (a.type !== "seasonal" && b.type === "seasonal") return 1;
    return 0;
  });
}

function getRecommendedProducts() {
  const themes = getPersonalizedThemes();
  const products = [];
  const seen = new Set();

  for (const theme of themes) {
    const limit = theme.forYou ? 6 : 2;
    for (const product of theme.products.slice(0, limit)) {
      if (products.length >= 20) break;
      if (!seen.has(product.id)) {
        seen.add(product.id);
        products.push(product);
      }
    }
    if (products.length >= 20) break;
  }

  return products.slice(0, 20);
}

const JUST_CURATED_TIMES = [
  "Just now",
  "22m ago",
  "48m ago",
  "1h ago",
  "2h ago",
  "3h ago",
  "5h ago",
  "8h ago",
  "Today",
  "Today",
  "Yesterday",
  "Yesterday",
];

function getJustCuratedFeed(limit = 12) {
  const perCreator = CREATORS.map((c) => ({
    creator: c,
    picks: getCreatorPicks(c.id, 8),
  }));

  const feed = [];
  const seen = new Set();
  let round = 0;

  while (feed.length < limit) {
    let addedThisRound = false;
    for (const { creator, picks } of perCreator) {
      const product = picks[round];
      if (!product) continue;
      addedThisRound = true;
      if (seen.has(product.id)) continue;
      seen.add(product.id);
      feed.push({ product, creator });
      if (feed.length >= limit) break;
    }
    if (!addedThisRound) break;
    round++;
  }

  return feed.map((entry, i) => ({
    ...entry,
    timeAgo: JUST_CURATED_TIMES[i] || "This week",
  }));
}

function renderJustCuratedCard(entry) {
  const { product, creator, timeAgo } = entry;
  const avatar = SAVED_BY_AVATARS[creator.shortName] || PRODUCT_IMAGE_FALLBACK;

  return `
    <article class="product-card jc-card" data-id="${product.id}">
      <button class="heart-btn" aria-label="Save item" onclick="event.stopPropagation()">♡</button>
      <span class="jc-time">${timeAgo}</span>
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_IMAGE_FALLBACK}'" />
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h4 class="product-name">${product.name}</h4>
        <div class="product-price">$${product.price}</div>
        <div class="product-saved-by">
          <img src="${avatar}" alt="" class="saved-by-avatar" />
          <span>Curated by <strong>${creator.shortName}</strong></span>
        </div>
      </div>
    </article>
  `;
}

function renderProductMeta(product) {
  const avatar = product.savedBy && SAVED_BY_AVATARS[product.savedBy];
  if (avatar) {
    return `
      <div class="product-saved-by">
        <img src="${avatar}" alt="" class="saved-by-avatar" />
        <span>Saved by <strong>${product.savedBy}</strong></span>
      </div>
    `;
  }

  return `<div class="product-curator">via ${product.curator}</div>`;
}

function renderProductCard(product) {
  return `
    <article class="product-card" data-id="${product.id}">
      <button class="heart-btn" aria-label="Save item" onclick="event.stopPropagation()">♡</button>
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_IMAGE_FALLBACK}'" />
      <div class="product-info">
        <div class="product-brand">${product.brand}</div>
        <h4 class="product-name">${product.name}</h4>
        <div class="product-price">$${product.price}</div>
        ${renderProductMeta(product)}
      </div>
    </article>
  `;
}
