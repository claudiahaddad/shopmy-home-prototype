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
    <section class="theme-section" data-theme="${theme.id}" style="--theme-accent: ${theme.accent}">
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

function renderCreatorSection(creatorId) {
  const creator = getCreatorById(creatorId);
  if (!creator) return "";

  const picks = getCreatorPicks(creatorId, 10);

  return `
    <section class="creator-section" data-creator="${creator.id}">
      <div class="creator-header">
        <div class="creator-identity">
          <img class="creator-avatar" src="${creator.image}" alt="${creator.fullName}" />
          <div class="creator-meta">
            <div class="creator-eyebrow-row">
              <p class="creator-eyebrow">Recently curated</p>
              ${creator.updated ? `<span class="creator-updated"><span class="creator-updated-dot"></span>${creator.updated}</span>` : ""}
            </div>
            <h2 class="creator-name">${creator.name}</h2>
            <p class="creator-sub">${creator.fullName} · ${creator.handle}</p>
            <p class="creator-bio">${creator.bio}</p>
          </div>
        </div>
        <button class="creator-follow" aria-pressed="true">Following</button>
      </div>
      <div class="carousel-wrap">
        <button class="carousel-btn prev" aria-label="Scroll left">‹</button>
        <div class="carousel">
          ${picks.map(renderProductCard).join("")}
        </div>
        <button class="carousel-btn next" aria-label="Scroll right">›</button>
      </div>
    </section>
  `;
}

function renderNewUserView() {
  const themes = getPersonalizedThemes();

  return `
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
}

function renderJustCuratedSection() {
  const feed = getJustCuratedFeed(12);

  return `
    <section class="just-curated theme-section" data-section="just-curated">
      <div class="jc-header">
        <p class="jc-live"><span class="jc-live-dot"></span>Live from your creators</p>
        <h2 class="jc-title">Just Curated</h2>
        <p class="jc-sub">The latest saves from creators you follow — freshest first</p>
      </div>
      <div class="carousel-wrap">
        <button class="carousel-btn prev" aria-label="Scroll left">‹</button>
        <div class="carousel">
          ${feed.map(renderJustCuratedCard).join("")}
        </div>
        <button class="carousel-btn next" aria-label="Scroll right">›</button>
      </div>
    </section>
  `;
}

function renderFollowingView() {
  const themes = getPersonalizedThemes();
  const topThemes = themes.slice(0, 2);
  const restThemes = themes.slice(2);

  return `
    <section class="hero">
      <p class="hero-eyebrow">From the creators you follow</p>
      <h1>Fresh picks from your <em>favorites</em></h1>
    </section>

    <section class="theme-sections">
      ${renderJustCuratedSection()}
      ${renderCreatorSection("sofia")}
      ${topThemes.map(renderThemeSection).join("")}
      ${renderCreatorSection("alexandra")}
      ${restThemes.map(renderThemeSection).join("")}
    </section>

    ${renderRecommendedSection()}
  `;
}

function renderView(view) {
  const app = document.getElementById("app");
  app.innerHTML = view === "following" ? renderFollowingView() : renderNewUserView();

  app
    .querySelectorAll(".theme-section, .creator-section")
    .forEach(initCarousel);

  window.scrollTo({ top: 0, behavior: "auto" });
}

function initTabs() {
  const tabs = document.querySelectorAll(".proto-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (tab.classList.contains("active")) return;
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderView(tab.dataset.view);
    });
  });
}

function init() {
  initTabs();
  renderView("new-user");
}

document.addEventListener("DOMContentLoaded", init);
