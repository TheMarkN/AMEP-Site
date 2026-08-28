// AMEP shared shell: header + footer are injected once here so every
// page stays in sync without hand-editing nine copies of the same markup.

const AMEP_NAV = [
  { href: "index.html", label: "Home" },
  { href: "product-design.html", label: "Product Design" },
  { href: "podcast.html", label: "Podcast" },
  { href: "foundation.html", label: "Foundation" },
  { href: "academy.html", label: "Academy" },
  { href: "community.html", label: "Community" },
  { href: "build-your-factory.html", label: "Build Your Factory" },
  { href: "raw-materials.html", label: "Raw Materials" },
  { href: "about.html", label: "About" },
];

function currentFile() {
  const p = window.location.pathname.split("/").pop();
  return p === "" ? "index.html" : p;
}

function renderHeader() {
  const here = currentFile();
  const links = AMEP_NAV.map(
    (item) =>
      `<a href="${item.href}"${item.href === here ? ' class="current" aria-current="page"' : ""}>${item.label}</a>`
  ).join("\n");

  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <header class="site-header">
      <div class="inner">
        <a class="logo" href="index.html">
          <span>AMEP<span class="dot">.</span></span>
          <span class="full">Africa Manufacturing Ecosystem Platform</span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="primaryNav">Menu</button>
        <nav class="primary" id="primaryNav">
          ${links}
        </nav>
      </div>
    </header>
  `
  );

  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("primaryNav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  });
}

function renderFooter() {
  document.body.insertAdjacentHTML(
    "beforeend",
    `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="logo" style="margin-bottom:14px;">
              <span>AMEP<span class="dot">.</span></span>
            </div>
            <p class="small" style="max-width:32em; color:#B7BBC0;">
              A single system for reaching Africa's manufacturing goals — from
              product design to raw materials, factory build-out to workforce training.
            </p>
          </div>
          <div>
            <h4>Platform</h4>
            <ul>
              <li><a href="product-design.html">Product Design</a></li>
              <li><a href="build-your-factory.html">Build Your Factory</a></li>
              <li><a href="raw-materials.html">Raw Materials</a></li>
              <li><a href="academy.html">Academy</a></li>
            </ul>
          </div>
          <div>
            <h4>Community</h4>
            <ul>
              <li><a href="community.html">Makers &amp; Manufacturers</a></li>
              <li><a href="podcast.html">The Podcast</a></li>
              <li><a href="foundation.html">The Foundation</a></li>
            </ul>
          </div>
          <div>
            <h4>Studio</h4>
            <ul>
              <li><a href="about.html">About AMEP</a></li>
              <li><a href="https://purpleideation.studio" target="_blank" rel="noopener">Purple Ideation Studios</a></li>
              <li><a href="https://vertexworks.africa" target="_blank" rel="noopener">Vertex Works</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} AMEP — Africa Manufacturing Ecosystem Platform</span>
          <span>SPEC.NO — AMEP/2026/01</span>
        </div>
      </div>
    </footer>
  `
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
