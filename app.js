function initCarousel(sectionEl) {
  const carousel = sectionEl.querySelector(".carousel");
  const prev = sectionEl.querySelector(".carousel-btn.prev");
  const next = sectionEl.querySelector(".carousel-btn.next");
  if (!carousel || !prev || !next) return;

  const scrollAmount = 220;

  prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
}

function renderThemeBadge(theme) {
  if (theme.type === "seasonal") {
    return `<span class="theme-banner-badge seasonal">Seasonal</span>`;
  }
  if (theme.forYou) {
    return `<span class="theme-banner-badge">For you</span>`;
  }
  return "";
}

function renderThemeSection(theme) {
  const products = theme.products.slice(0, 10);
  const reason = theme.forYou && theme.reason
    ? `<p class="theme-banner-reason">${theme.reason}</p>`
    : "";

  return `
    <section class="theme-section" data-theme="${theme.id}">
      <a href="theme.html?id=${theme.id}" class="theme-banner" data-theme="${theme.id}">
        <div class="theme-banner-bg" style="background-image: url('${theme.image}')"></div>
        <div class="theme-banner-caption">
          ${renderThemeBadge(theme)}
          <h2 class="theme-banner-title">${theme.name}</h2>
          <p class="theme-banner-tagline">${theme.tagline}</p>
          ${reason}
        </div>
        <span class="see-all see-all--banner">See all →</span>
      </a>
      <div class="carousel-wrap">
        <button class="carousel-btn prev" aria-label="Scroll left">‹</button>
        <div class="carousel">
          ${products.map(renderProductCard).join("")}
        </div>
        <button class="carousel-btn next" aria-label="Scroll right">›</button>
      </div>
    </section>
  `;
}

function renderRecommendedSection() {
  const products = getRecommendedProducts();
  const rows = [];
  for (let i = 0; i < products.length; i += 5) {
    rows.push(products.slice(i, i + 5));
  }

  return `
    <section class="recommended-section">
      <div class="recommended-header">
        <div>
          <p class="section-label">Picked for you</p>
          <h2 class="recommended-title">Recommended for you</h2>
          <p class="recommended-sub">Based on your saves, follows, and browsing in ${USER_PROFILE.location}</p>
        </div>
      </div>
      <div class="recommended-rows">
        ${rows.map((row) => `
          <div class="recommended-row">
            ${row.map(renderProductCard).join("")}
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderHome() {
  const themes = getPersonalizedThemes();

  const app = document.getElementById("app");
  app.innerHTML = `
    <section class="hero">
      <p class="hero-eyebrow">Your circle · ${USER_PROFILE.location}</p>
      <h1>Discover what to <em>shop</em> next</h1>
      <p class="hero-sub">Browse curated themes picked for your style — not endless product grids.</p>
      <div class="personalization-bar">
        <span>✦</span>
        <span>Themes ordered for <strong>${USER_PROFILE.name}</strong> based on saves, follows & location</span>
      </div>
    </section>

    <section class="theme-sections">
      ${themes.map(renderThemeSection).join("")}
    </section>

    ${renderRecommendedSection()}
  `;

  document.querySelectorAll(".theme-section").forEach(initCarousel);
}

document.addEventListener("DOMContentLoaded", renderHome);
