/* =========================================================
   SwiftConvertHub — components.js
   Injects nav and footer into every page
   ========================================================= */

(function () {
  'use strict';

  /* ---- Theme ---- */
  const savedTheme = localStorage.getItem('sch-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  /* ---- Nav HTML ---- */
  const NAV_HTML = `
  <nav class="nav" role="navigation" aria-label="Main navigation">
    <div class="container">
      <a class="nav-logo" href="/">
        <div class="logo-mark">⚡</div>
        Swift<span>Convert</span>Hub
      </a>
      <ul class="nav-links" id="nav-links">
        <li><a href="/" data-page="home">Converters</a></li>
        <li><a href="/blog.html" data-page="blog">Blog</a></li>
        <li><a href="/about.html" data-page="about">About</a></li>
        <li><a href="/contact.html" data-page="contact">Contact</a></li>
      </ul>
      <div class="nav-right">
        <button class="theme-btn" id="theme-btn" aria-label="Toggle theme" title="Toggle dark/light mode">🌙</button>
        <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;

  /* ---- Footer HTML ---- */
  const FOOTER_HTML = `
  <footer class="footer" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a class="nav-logo" href="/" style="text-decoration:none;">
            <div class="logo-mark">⚡</div>
            Swift<span>Convert</span>Hub
          </a>
          <p>Free, instant unit conversions for everyone. No sign-up, no ads clutter — just fast, accurate results.</p>
        </div>
        <div class="footer-col">
          <h4>Converters</h4>
          <ul>
            <li><a href="/#length">Length &amp; Distance</a></li>
            <li><a href="/#weight">Weight &amp; Mass</a></li>
            <li><a href="/#temperature">Temperature</a></li>
            <li><a href="/#storage">Digital Storage</a></li>
            <li><a href="/#binary">Binary &amp; Numbers</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/about.html">About</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/privacy.html">Privacy Policy</a></li>
            <li><a href="/terms.html">Terms of Use</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} SwiftConvertHub. All rights reserved.</p>
        <p>Free unit converter &mdash; No login required</p>
      </div>
    </div>
  </footer>`;

  /* ---- Inject ---- */
  function inject() {
    const navEl = document.getElementById('nav-placeholder');
    const footerEl = document.getElementById('footer-placeholder');
    if (navEl) navEl.outerHTML = NAV_HTML;
    if (footerEl) footerEl.outerHTML = FOOTER_HTML;

    // Mark active nav link
    const page = document.body.dataset.page || 'home';
    document.querySelectorAll('[data-page]').forEach(a => {
      if (a.dataset.page === page) a.classList.add('active');
    });

    // Theme button
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      const t = document.documentElement.getAttribute('data-theme');
      themeBtn.textContent = t === 'dark' ? '☀️' : '🌙';
      themeBtn.addEventListener('click', () => {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sch-theme', next);
        themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
      });
    }

    // Mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
