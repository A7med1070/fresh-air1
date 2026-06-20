const pages = [
  ["index.html", "الرئيسية"],
  ["/buy-used-air-conditioners-riyadh", "شراء المكيفات"],
  ["about.html", "من نحن"],
  ["services.html", "الخدمات"],
  ["products.html", "التكييفات"],
  ["gallery.html", "المعرض"],
  ["reviews.html", "التقييمات"],
  ["contact.html", "تواصل معنا"]
];

const iconPaths = {
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.23a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92Z"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z"/>',
  snow: '<path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07 19.07 4.93M8 2l4 4 4-4M8 22l4-4 4 4"/>',
  truck: '<path d="M10 17H5a3 3 0 0 1-3-3V6h12v11M14 9h4l4 4v4h-3M7 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3L5.8 21 7 14.2 2 9.3l6.9-1L12 2Z"/>',
  mail: '<path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>',
  whatsapp: '<path d="M20 11.7a8 8 0 0 1-11.9 7L3 20l1.4-4.9A8 8 0 1 1 20 11.7Z"/><path d="M9.2 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.4l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.2.3-.1.5.4.8 1 1.4 1.8 1.8.2.1.3 0 .5-.1l.7-.5c.2-.1.4-.1.6 0l1.8.9c.3.1.4.3.4.6 0 .4-.3 1.2-.8 1.5-.5.4-1.7.7-3.6-.1-2.7-1.1-4.4-3.8-4.6-4.1-.1-.2-1.1-1.5-1.1-2.8 0-1.3.7-2 .9-2.2Z"/>'
};

const svgIcon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name] || iconPaths.star}</svg>`;

function alSaqrLogo(className = "brand-logo") {
  const uid = `fa-${className.replace(/[^a-z0-9]/gi, "") || "logo"}`;
  return `
    <svg class="${className}" viewBox="0 0 430 124" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="الصقر لشراء مكيفات مستعملة بالرياض">
      <defs>
        <linearGradient id="${uid}-mark" x1="18" y1="14" x2="122" y2="108" gradientUnits="userSpaceOnUse">
          <stop stop-color="#84F8FF"/>
          <stop offset=".46" stop-color="#20BDEB"/>
          <stop offset="1" stop-color="#94EA46"/>
        </linearGradient>
        <linearGradient id="${uid}-wind" x1="18" y1="30" x2="124" y2="78" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E8FFFF"/>
          <stop offset=".55" stop-color="#66ECFF"/>
          <stop offset="1" stop-color="#79F2C3"/>
        </linearGradient>
        <linearGradient id="${uid}-shine" x1="148" y1="18" x2="410" y2="104" gradientUnits="userSpaceOnUse">
          <stop stop-color="var(--logo-text)"/>
          <stop offset=".5" stop-color="var(--logo-text)"/>
          <stop offset="1" stop-color="var(--logo-accent)"/>
        </linearGradient>
        <filter id="${uid}-glow" x="-10" y="-10" width="158" height="144" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="12" stdDeviation="11" flood-color="#21D8FF" flood-opacity=".32"/>
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#8EE23F" flood-opacity=".22"/>
        </filter>
        <filter id="${uid}-textGlow" x="120" y="0" width="310" height="124" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="2" stdDeviation="1.1" flood-color="var(--logo-shadow)" flood-opacity=".82"/>
          <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#21D8FF" flood-opacity=".14"/>
        </filter>
      </defs>
      <g class="logo-symbol" filter="url(#${uid}-glow)">
        <path d="M128 31c-30-12-67-7-101 18 28-3 50 4 68 20-25-2-51 5-77 23 42 2 79-6 105-25 12-9 20-20 24-35-6 2-12 2-19-1Z" fill="url(#${uid}-wind)" opacity=".98"/>
        <path d="M35 51c34 2 62 13 87 36" stroke="#F8FFFF" stroke-width="4" stroke-linecap="round" opacity=".82"/>
        <path d="M105 35l27-18-9 29 24-12c-9 18-24 30-45 38 9-13 11-25 3-37Z" fill="url(#${uid}-mark)"/>
        <path d="M113 34l13-7-5 13 13-5" stroke="#082437" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>
        <circle class="logo-spark" cx="118" cy="33" r="3.2" fill="#082437"/>
        <path d="M22 93c31 4 64-1 94-16" stroke="url(#${uid}-mark)" stroke-width="5" stroke-linecap="round" opacity=".82"/>
      </g>
      <g class="logo-copy" filter="url(#${uid}-textGlow)">
        <text class="logo-wordmark logo-wordmark-ar" x="398" y="54" direction="rtl" text-anchor="end">الصقر</text>
        <text class="logo-tagline" x="398" y="82" direction="rtl" text-anchor="end">شراء مكيفات مستعملة بالرياض</text>
        <path class="logo-rule logo-rule-green" d="M214 98h98"/>
        <path class="logo-rule logo-rule-blue" d="M324 98h54"/>
      </g>
    </svg>
  `;
}

function alSaqrMark(className = "brand-mark-logo") {
  const uid = `fa-${className.replace(/[^a-z0-9]/gi, "") || "mark"}`;
  return `
    <svg class="${className}" viewBox="0 0 144 124" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="${uid}-mark" x1="18" y1="14" x2="122" y2="108" gradientUnits="userSpaceOnUse">
          <stop stop-color="#84F8FF"/>
          <stop offset=".46" stop-color="#20BDEB"/>
          <stop offset="1" stop-color="#94EA46"/>
        </linearGradient>
        <linearGradient id="${uid}-wind" x1="18" y1="30" x2="124" y2="78" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E8FFFF"/>
          <stop offset=".55" stop-color="#66ECFF"/>
          <stop offset="1" stop-color="#79F2C3"/>
        </linearGradient>
        <filter id="${uid}-glow" x="-10" y="-10" width="158" height="144" color-interpolation-filters="sRGB">
          <feDropShadow dx="0" dy="12" stdDeviation="11" flood-color="#21D8FF" flood-opacity=".32"/>
          <feDropShadow dx="0" dy="3" stdDeviation="4" flood-color="#8EE23F" flood-opacity=".22"/>
        </filter>
      </defs>
      <g class="logo-symbol" filter="url(#${uid}-glow)">
        <path d="M128 31c-30-12-67-7-101 18 28-3 50 4 68 20-25-2-51 5-77 23 42 2 79-6 105-25 12-9 20-20 24-35-6 2-12 2-19-1Z" fill="url(#${uid}-wind)" opacity=".98"/>
        <path d="M35 51c34 2 62 13 87 36" stroke="#F8FFFF" stroke-width="4" stroke-linecap="round" opacity=".82"/>
        <path d="M105 35l27-18-9 29 24-12c-9 18-24 30-45 38 9-13 11-25 3-37Z" fill="url(#${uid}-mark)"/>
        <path d="M113 34l13-7-5 13 13-5" stroke="#082437" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" opacity=".48"/>
        <circle class="logo-spark" cx="118" cy="33" r="3.2" fill="#082437"/>
        <path d="M22 93c31 4 64-1 94-16" stroke="url(#${uid}-mark)" stroke-width="5" stroke-linecap="round" opacity=".82"/>
      </g>
    </svg>
  `;
}

function initShell() {
  document.body.insertAdjacentHTML("afterbegin", `
    <header class="nav">
      <div class="nav-inner">
        <a class="brand" href="index.html" aria-label="الصقر">
          <span class="brand-full">${alSaqrLogo("brand-logo")}</span>
          <span class="brand-compact">${alSaqrMark("brand-mark-logo")}<span>الصقر</span></span>
        </a>
        <nav class="nav-links" aria-label="التنقل الرئيسي">
          ${pages.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
        </nav>
        <div class="nav-actions">
          <button class="icon-btn theme-toggle" type="button" title="تبديل الوضع" aria-label="تبديل الوضع">${svgIcon("moon")}</button>
          <button class="menu-btn" type="button" aria-label="القائمة" aria-expanded="false" aria-controls="primary-navigation">${svgIcon("menu")}</button>
        </div>
      </div>
    </header>
    <div class="quick-contact" aria-label="تواصل سريع">
      <a class="whatsapp" href="https://wa.me/966556800314?text=${encodeURIComponent("أريد التواصل مع الصقر بخصوص شراء مكيفات مستعملة بالرياض")}" aria-label="واتساب">${svgIcon("whatsapp")}</a>
      <a class="call-now" href="tel:+966556800314">اتصل الآن</a>
    </div>
  `);

  const currentPath = location.pathname.replace(/^\/+/, "").replace(/\/+$/, "");
  const current = currentPath || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href").replace(/^\/+/, "").replace(/\/+$/, "");
    if (href === current) link.classList.add("active");
  });

  const savedTheme = localStorage.getItem("alsaqr-theme");
  if (savedTheme === "light") document.documentElement.classList.add("light");
  const themeBtn = document.querySelector(".theme-toggle");
  const setThemeIcon = () => themeBtn.innerHTML = svgIcon(document.documentElement.classList.contains("light") ? "sun" : "moon");
  setThemeIcon();
  themeBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("light");
    localStorage.setItem("alsaqr-theme", document.documentElement.classList.contains("light") ? "light" : "dark");
    setThemeIcon();
  });

  document.querySelector(".nav-links").id = "primary-navigation";
  document.querySelector(".menu-btn").addEventListener("click", (event) => {
    const isOpen = document.querySelector(".nav-links").classList.toggle("open");
    event.currentTarget.setAttribute("aria-expanded", String(isOpen));
  });

  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("scrolled", scrollY > 18);
  onScroll();
  addEventListener("scroll", onScroll, { passive: true });

  document.querySelectorAll("a[href$='.html']").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current) link.setAttribute("aria-current", "page");
  });
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href").replace(/^\/+/, "").replace(/\/+$/, "");
    if (href === current) link.setAttribute("aria-current", "page");
  });
}

function initReveals() {
  document.querySelectorAll(".reveal, .card, .stat").forEach((el) => el.classList.add("visible"));
}

function initCounters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    const suffix = el.dataset.suffix || "";
    el.textContent = `${prefix}${target.toLocaleString("ar-SA")}${suffix}`;
  });
}

function initCarousel(selector = "[data-carousel]") {
  document.querySelectorAll(selector).forEach((carousel) => {
    if (matchMedia("(max-width: 768px)").matches) {
      carousel.hidden = true;
      carousel.innerHTML = "";
      return;
    }

    const slides = JSON.parse(carousel.dataset.slides || "[]");
    if (!slides.length) return;
    let index = 0;
    carousel.innerHTML = `<div class="slide"></div><div class="slider-dots"></div>`;
    const slide = carousel.querySelector(".slide");
    const dots = carousel.querySelector(".slider-dots");
    dots.innerHTML = slides.map((_, i) => `<button type="button" aria-label="شريحة ${i + 1}"></button>`).join("");
    const render = () => {
      const item = slides[index];
      slide.style.backgroundImage = `url('${item.image}')`;
      slide.setAttribute("role", "img");
      slide.setAttribute("aria-label", `${item.title} - ${item.text}`);
      slide.innerHTML = `<span class="eyebrow">${item.tag}</span><h2>${item.title}</h2><p>${item.text}</p>`;
      dots.querySelectorAll("button").forEach((dot, i) => dot.classList.toggle("active", i === index));
    };
    dots.querySelectorAll("button").forEach((dot, i) => dot.addEventListener("click", () => {
      index = i;
      render();
    }));
    render();
  });
}

function initFilters() {
  const grid = document.querySelector("[data-product-grid]");
  if (!grid) return;
  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filter;
      document.querySelectorAll("[data-filter]").forEach((item) => item.classList.toggle("active", item === btn));
      grid.querySelectorAll("[data-type]").forEach((card) => {
        const show = value === "all" || card.dataset.type === value || card.dataset.price === value;
        card.style.display = show ? "" : "none";
      });
    });
  });
}

function initLightbox() {
  const items = document.querySelectorAll("[data-lightbox]");
  if (!items.length) return;
  document.body.insertAdjacentHTML("beforeend", `<div class="lightbox"><button class="btn primary" type="button">إغلاق</button><img src="assets/img/hero-ac-luxury.webp" alt="معاينة الصورة"></div>`);
  const box = document.querySelector(".lightbox");
  const img = box.querySelector("img");
  items.forEach((item) => item.addEventListener("click", () => {
    img.src = item.dataset.lightbox;
    box.classList.add("open");
  }));
  box.addEventListener("click", (event) => {
    if (event.target === box || event.target.tagName === "BUTTON") box.classList.remove("open");
  });
}

function initFaq() {
  document.querySelectorAll(".faq-q").forEach((button) => {
    button.addEventListener("click", () => button.closest(".faq-item").classList.toggle("open"));
  });
}

function initWhatsappForm() {
  const form = document.querySelector("[data-whatsapp-form]");
  if (!form) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const details = String(data.get("details") || "").trim();
    if (!name || !phone || !details) {
      form.reportValidity();
      return;
    }
    const message = [
      "السلام عليكم الصقر",
      "حجزك كان من موقع الصقر للمكيفات.",
      `الاسم: ${name}`,
      `رقم الجوال: ${phone}`,
      `نوع الخدمة: ${service}`,
      `التفاصيل والحي: ${details}`,
      "أرغب في تأكيد الموعد أو المعاينة داخل الرياض."
    ].join("\n");
    const notice = form.querySelector(".form-success");
    if (notice) notice.classList.add("show");
    window.open(`https://wa.me/966556800314?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}

function initProductDetail() {
  const target = document.querySelector("[data-product-detail]");
  if (!target) return;
  const params = new URLSearchParams(location.search);
  const id = params.get("id") || "split-24";
  const products = {
    "split-24": ["مكيف سبليت 24 وحدة", "مكيف نظيف مفحوص، تبريد قوي، ضمان تشغيل بعد التركيب.", "2,150 ر.س", "assets/img/split-wall.webp"],
    "window-18": ["مكيف شباك 18 وحدة", "خيار اقتصادي للملاحق والغرف، تنظيف كامل وفحص كهرباء.", "950 ر.س", "assets/img/window-ac.webp"],
    "central": ["وحدة تكييف مركزية", "وحدة مناسبة للفلل والمكاتب مع تقييم فني قبل التسليم.", "5,800 ر.س", "assets/img/central-hvac.webp"]
  };
  const product = products[id] || products["split-24"];
  target.innerHTML = `
    <div class="split">
      <div class="media-frame" role="img" aria-label="${product[0]} من الصقر" style="background-image:url('${product[3]}')"></div>
      <div>
        <span class="eyebrow">تفاصيل المنتج</span>
        <h1>${product[0]}</h1>
        <p class="lead">${product[1]} يشمل السعر المعاينة الفنية والتوصيل داخل الرياض حسب الحي، مع إمكانية الفك والتركيب بواسطة فريق الصقر.</p>
        <p class="price">${product[2]}</p>
        <div class="inline-actions">
          <a class="btn primary" href="tel:+966556800314">${svgIcon("phone")} اتصل الآن</a>
          <a class="btn ghost" href="contact.html">اطلب معاينة</a>
          <a class="btn" href="products.html">عودة للمكيفات</a>
        </div>
      </div>
    </div>`;
}

function init() {
  initShell();
  initReveals();
  initCounters();
  initCarousel();
  initFilters();
  initLightbox();
  initFaq();
  initWhatsappForm();
  initProductDetail();
}

init();

