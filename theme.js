function renderThemePage() {
  const params = new URLSearchParams(window.location.search);
  const themeId = params.get("id");
  const theme = getThemeById(themeId);

  const app = document.getElementById("theme-app");

  if (!theme) {
    app.innerHTML = `
      <section class="hero">
        <h1>Theme not found</h1>
        <p><a href="index.html">← Back to Home</a></p>
      </section>
    `;
    return;
  }

  document.title = `${theme.name} — ShopMy`;

  app.innerHTML = `
    <section class="theme-hero" data-theme="${theme.id}">
      <div class="theme-hero-bg" style="background-image: url('${theme.image}')"></div>
      <div class="theme-hero-caption">
        <a href="index.html" class="back-link back-link--on-image">← All themes</a>
        ${theme.type === "seasonal" ? '<span class="theme-banner-badge seasonal">Seasonal</span>' : theme.forYou ? '<span class="theme-banner-badge">For you</span>' : ""}
        <h1>${theme.name}</h1>
        <p class="theme-hero-tagline">${theme.tagline}</p>
        <div class="theme-hero-stats">
          <span>${theme.products.length} items</span>
          <span>Curated by ShopMy team</span>
          ${theme.forYou && theme.reason ? `<span>${theme.reason}</span>` : ""}
        </div>
      </div>
    </section>

    <section class="theme-products">
      <div class="products-toolbar">
        <h2>Shop the collection</h2>
        <div class="sort-pills">
          <button class="sort-pill active" data-sort="relevance">For you</button>
          <button class="sort-pill" data-sort="price-low">Price ↑</button>
          <button class="sort-pill" data-sort="price-high">Price ↓</button>
          <button class="sort-pill" data-sort="new">Newest</button>
        </div>
      </div>
      <div class="product-grid" id="product-grid">
        ${theme.products.map(renderProductCard).join("")}
      </div>
    </section>
  `;

  const grid = document.getElementById("product-grid");
  const pills = document.querySelectorAll(".sort-pill");

  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");

      let sorted = [...theme.products];
      const sort = pill.dataset.sort;

      if (sort === "price-low") sorted.sort((a, b) => a.price - b.price);
      else if (sort === "price-high") sorted.sort((a, b) => b.price - a.price);
      else if (sort === "new") sorted.reverse();

      grid.innerHTML = sorted.map(renderProductCard).join("");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderThemePage);
