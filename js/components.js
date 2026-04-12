/* =========================================================
   SwiftConvertHub â€” components.js
   Injects nav and footer + handles theme & i18n (EN/ES)
   ========================================================= */

(function () {
  'use strict';

  /* ---- Theme ---- */
  const savedTheme = localStorage.getItem('sch-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  /* =========================================================
     i18n â€” English / EspaÃ±ol
     ========================================================= */
  let currentLang = localStorage.getItem('sch-lang') || 'en';

  const i18n = {
    en: {
      // Nav
      nav_converters: 'Converters',
      nav_blog: 'Blog',
      nav_about: 'About',
      nav_contact: 'Contact',
      // Hero
      hero_badge: '5 Converter Categories',
      hero_h1: 'Convert Anything,',
      hero_h1_span: 'Instantly',
      hero_p: 'Free unit converters for length, weight, temperature, digital storage and binary numbers. No sign-up, no fluff \u2014 instant results.',
      hero_cta: '\u26a1 Start Converting',
      hero_cta2: 'Learn More',
      stat1_label: 'Categories',
      stat2_label: 'Unit Types',
      stat3_label: 'Free Forever',
      stat4_label: 'No Login',
      // Sections
      sec_length_label: '\ud83d\udccf Length',
      sec_length_h2: 'Length & Distance Converter',
      sec_length_p: 'Convert between meters, kilometers, miles, feet, inches and more.',
      sec_weight_label: '\u2696\ufe0f Weight',
      sec_weight_h2: 'Weight & Mass Converter',
      sec_weight_p: 'Convert between kilograms, pounds, ounces, stones, tonnes and more.',
      sec_temp_label: '\ud83c\udf21\ufe0f Temperature',
      sec_temp_h2: 'Temperature Converter',
      sec_temp_p: 'Convert between Celsius, Fahrenheit, Kelvin and Rankine instantly.',
      sec_storage_label: '\ud83d\udcbe Storage',
      sec_storage_h2: 'Digital Storage Converter',
      sec_storage_p: 'Convert between bits, bytes, KB, MB, GB, TB, PB and binary prefixes (KiB, MiB, GiB).',
      sec_binary_label: '\ud83d\udd22 Numbers',
      sec_binary_h2: 'Binary & Number Systems',
      sec_binary_p: 'Convert between Decimal, Binary, Hexadecimal and Octal number systems instantly.',
      // Converter cards
      card_length_title: 'Length & Distance',
      card_length_sub: 'Metric \u2194 Imperial \u2194 Astronomical',
      card_weight_title: 'Weight & Mass',
      card_weight_sub: 'Metric \u2194 Imperial \u2194 Avoirdupois',
      card_temp_title: 'Temperature',
      card_temp_sub: 'Celsius \u2194 Fahrenheit \u2194 Kelvin \u2194 Rankine',
      card_storage_title: 'Digital Storage',
      card_storage_sub: 'Decimal \u2194 Binary (IEC) \u2194 Bits',
      card_binary_title: 'Binary & Number Systems',
      card_binary_sub: 'Decimal \u2194 Binary \u2194 Hex \u2194 Octal',
      // Form labels
      label_from: 'From',
      label_to: 'To',
      label_value: 'Value',
      label_result: 'Result',
      label_input_base: 'Input Base',
      label_enter_number: 'Enter Number',
      ph_enter_value: 'Enter value',
      ph_result: 'Result',
      ph_enter_number: 'e.g. 255',
      // Binary output labels
      bin_label_dec: 'Decimal (Base 10)',
      bin_label_bin: 'Binary (Base 2)',
      bin_label_hex: 'Hexadecimal (Base 16)',
      bin_label_oct: 'Octal (Base 8)',
      // Why section
      why_label: '\ud83d\udd0d Why Us',
      why_h2: 'The Smartest Way to Convert Units',
      why_p: "Everything you need, nothing you don\u2019t.",
      feat1_h3: 'Instant Results',
      feat1_p: 'Conversions happen as you type \u2014 no button to press, no waiting. Pure speed.',
      feat2_h3: 'High Precision',
      feat2_p: 'Up to 10 significant digits of accuracy. Scientific notation for very large or small values.',
      feat3_h3: 'Dark & Light Mode',
      feat3_p: 'Switch between themes with one click. Your preference is saved automatically.',
      feat4_h3: 'Mobile Friendly',
      feat4_p: 'Works perfectly on phones and tablets. Convert on the go, anywhere.',
      feat5_h3: 'No Account Needed',
      feat5_p: 'No sign-up, no email, no tracking. Just open and convert.',
      feat6_h3: 'Always Free',
      feat6_p: 'Every converter on this site is free and always will be.',
      // Category tiles
      cat_length: 'Length',
      cat_weight: 'Weight',
      cat_temp: 'Temperature',
      cat_storage: 'Storage',
      cat_binary: 'Binary',
      // Footer
      footer_tagline: 'Free, instant unit conversions for everyone. No sign-up, no ads clutter \u2014 just fast, accurate results.',
      footer_col1_h4: 'Converters',
      footer_length: 'Length & Distance',
      footer_weight: 'Weight & Mass',
      footer_temp: 'Temperature',
      footer_storage: 'Digital Storage',
      footer_binary: 'Binary & Numbers',
      footer_col2_h4: 'Pages',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Use',
      footer_rights: 'All rights reserved.',
      footer_free: 'Free unit converter \u2014 No login required',
      // About page
      about_label: 'About',
      about_h1: 'About SwiftConvertHub',
      about_p1: 'SwiftConvertHub is a free, fast, and accurate unit converter built for everyone \u2014 students, engineers, developers, travelers, and curious minds.',
      about_p2: 'We built SwiftConvertHub because unit conversion should be simple and instant. No sign-up forms, no cluttered interfaces, no paywalls. Just open the tool and convert.',
      about_offer_h2: 'What We Offer',
      about_promise_h2: 'Our Promise',
      about_promise_p: 'SwiftConvertHub will always be free. We may display non-intrusive ads to keep the lights on, but we will never require an account, never sell your data, and never put converters behind a paywall.',
      about_contact_p: 'Have a suggestion or found a bug?',
      about_contact_link: 'Contact us',
      // Contact page
      contact_label: 'Contact',
      contact_h1: 'Get in Touch',
      contact_p: 'Have a suggestion, found a bug, or just want to say hello? Send us a message.',
      contact_name_label: 'Your Name',
      contact_email_label: 'Email Address',
      contact_subject_label: 'Subject',
      contact_msg_label: 'Message',
      contact_submit: 'Send Message \ud83d\ude80',

      // Jump Points
      jp_weight_to_feexio: 'Selling products or services online?',
      jp_weight_to_feexio_link: 'Calculate your fees and profit margins',
      jp_temp_to_ilh: 'Sharing this conversion with your audience?',
      jp_temp_to_ilh_link: 'Create a WhatsApp link or QR code in seconds',
      jp_storage_to_feexio: 'Pricing digital services or storage plans?',
      jp_storage_to_feexio_link: 'Calculate your profit margins and fees',

      // FAQ Section
      faq_title: 'Frequently Asked Questions',
      faq_subtitle: 'Common questions about unit conversions and how our converters work.',
      faq_q1: 'How many kilometers are in a mile?',
      faq_a1: 'One mile equals exactly 1.60934 kilometers. Conversely, one kilometer equals approximately 0.621371 miles. This conversion is commonly needed when traveling between countries using metric and imperial systems.',
      faq_q2: 'How do you convert Celsius to Fahrenheit?',
      faq_a2: 'Multiply the Celsius value by 9/5 and add 32. Formula: \u00b0F = (\u00b0C \u00d7 9/5) + 32. For example, 100\u00b0C = 212\u00b0F and 0\u00b0C = 32\u00b0F. To reverse: \u00b0C = (\u00b0F \u2212 32) \u00d7 5/9.',
      faq_q3: 'What is the difference between GB and GiB?',
      faq_a3: 'A gigabyte (GB) equals 1,000,000,000 bytes (decimal). A gibibyte (GiB) equals 1,073,741,824 bytes (binary). Hard drive makers use decimal GB while operating systems often report in binary GiB \u2014 that\'s why a 1 TB drive shows ~931 GiB.',
      faq_q4: 'How do you convert pounds to kilograms?',
      faq_a4: 'Divide the pound value by 2.20462 to get kilograms. Example: 150 lbs \u00f7 2.20462 \u2248 68.04 kg. To convert kg to lbs, multiply by 2.20462. Our Weight Converter also handles ounces, stones, and tonnes.',
      faq_q5: 'How do you convert a decimal number to binary?',
      faq_a5: 'Repeatedly divide the number by 2 and record the remainders from bottom to top. Example: 13 \u2192 1101 in binary. Our Binary & Number Systems converter handles decimal, binary, hexadecimal and octal instantly.',
    },
    es: {
      // Nav
      nav_converters: 'Conversores',
      nav_blog: 'Blog',
      nav_about: 'Nosotros',
      nav_contact: 'Contacto',
      // Hero
      hero_badge: '5 Categor\u00edas de Conversi\u00f3n',
      hero_h1: 'Convierte Todo,',
      hero_h1_span: 'Instant\u00e1neamente',
      hero_p: 'Conversores de unidades gratuitos para longitud, peso, temperatura, almacenamiento digital y sistemas num\u00e9ricos. Sin registro, sin complicaciones \u2014 resultados instant\u00e1neos.',
      hero_cta: '\u26a1 Comenzar a Convertir',
      hero_cta2: 'M\u00e1s Informaci\u00f3n',
      stat1_label: 'Categor\u00edas',
      stat2_label: 'Tipos de Unidades',
      stat3_label: 'Siempre Gratis',
      stat4_label: 'Sin Registro',
      sec_length_label: '\ud83d\udccf Longitud',
      sec_length_h2: 'Conversor de Longitud y Distancia',
      sec_length_p: 'Convierte entre metros, kil\u00f3metros, millas, pies, pulgadas y m\u00e1s.',
      sec_weight_label: '\u2696\ufe0f Peso',
      sec_weight_h2: 'Conversor de Peso y Masa',
      sec_weight_p: 'Convierte entre kilogramos, libras, onzas, piedras, toneladas y m\u00e1s.',
      sec_temp_label: '\ud83c\udf21\ufe0f Temperatura',
      sec_temp_h2: 'Conversor de Temperatura',
      sec_temp_p: 'Convierte entre Celsius, Fahrenheit, Kelvin y Rankine instant\u00e1neamente.',
      sec_storage_label: '\ud83d\udcbe Almacenamiento',
      sec_storage_h2: 'Conversor de Almacenamiento Digital',
      sec_storage_p: 'Convierte entre bits, bytes, KB, MB, GB, TB, PB y prefijos binarios (KiB, MiB, GiB).',
      sec_binary_label: '\ud83d\udd22 N\u00fameros',
      sec_binary_h2: 'Binario y Sistemas Num\u00e9ricos',
      sec_binary_p: 'Convierte entre Decimal, Binario, Hexadecimal y Octal instant\u00e1neamente.',
      card_length_title: 'Longitud y Distancia',
      card_length_sub: 'M\u00e9trico \u2194 Imperial \u2194 Astron\u00f3mico',
      card_weight_title: 'Peso y Masa',
      card_weight_sub: 'M\u00e9trico \u2194 Imperial \u2194 Avoirdupois',
      card_temp_title: 'Temperatura',
      card_temp_sub: 'Celsius \u2194 Fahrenheit \u2194 Kelvin \u2194 Rankine',
      card_storage_title: 'Almacenamiento Digital',
      card_storage_sub: 'Decimal \u2194 Binario (IEC) \u2194 Bits',
      card_binary_title: 'Binario y Sistemas Num\u00e9ricos',
      card_binary_sub: 'Decimal \u2194 Binario \u2194 Hex \u2194 Octal',
      label_from: 'Desde', label_to: 'Hasta', label_value: 'Valor', label_result: 'Resultado',
      label_input_base: 'Base de Entrada', label_enter_number: 'Ingresar N\u00famero',
      ph_enter_value: 'Ingresa un valor', ph_result: 'Resultado', ph_enter_number: 'ej. 255',
      bin_label_dec: 'Decimal (Base 10)', bin_label_bin: 'Binario (Base 2)',
      bin_label_hex: 'Hexadecimal (Base 16)', bin_label_oct: 'Octal (Base 8)',
      why_label: '\ud83d\udd0d Por Qu\u00e9 Nosotros',
      why_h2: 'La Forma M\u00e1s Inteligente de Convertir Unidades',
      why_p: 'Todo lo que necesitas, nada que no necesitas.',
      feat1_h3: 'Resultados Instant\u00e1neos',
      feat1_p: 'Las conversiones ocurren mientras escribes \u2014 sin bot\u00f3n que presionar, sin esperar. Velocidad pura.',
      feat2_h3: 'Alta Precisi\u00f3n',
      feat2_p: 'Hasta 10 d\u00edgitos significativos de precisi\u00f3n. Notaci\u00f3n cient\u00edfica para valores muy grandes o peque\u00f1os.',
      feat3_h3: 'Modo Oscuro y Claro',
      feat3_p: 'Cambia entre temas con un clic. Tu preferencia se guarda autom\u00e1ticamente.',
      feat4_h3: 'Compatible con M\u00f3viles',
      feat4_p: 'Funciona perfectamente en tel\u00e9fonos y tabletas. Convierte sobre la marcha, en cualquier lugar.',
      feat5_h3: 'Sin Cuenta',
      feat5_p: 'Sin registro, sin email, sin rastreo. Solo abre y convierte.',
      feat6_h3: 'Siempre Gratis',
      feat6_p: 'Cada conversor en este sitio es gratuito y siempre lo ser\u00e1.',
      cat_length: 'Longitud', cat_weight: 'Peso', cat_temp: 'Temperatura',
      cat_storage: 'Almacenamiento', cat_binary: 'Binario',
      footer_tagline: 'Conversiones de unidades gratuitas e instant\u00e1neas. Sin registro, sin anuncios molestos \u2014 solo resultados r\u00e1pidos y precisos.',
      footer_col1_h4: 'Conversores', footer_length: 'Longitud y Distancia',
      footer_weight: 'Peso y Masa', footer_temp: 'Temperatura',
      footer_storage: 'Almacenamiento Digital', footer_binary: 'Binario y N\u00fameros',
      footer_col2_h4: 'P\u00e1ginas', footer_privacy: 'Pol\u00edtica de Privacidad',
      footer_terms: 'T\u00e9rminos de Uso', footer_rights: 'Todos los derechos reservados.',
      footer_free: 'Conversor gratuito \u2014 Sin inicio de sesi\u00f3n',
      about_label: 'Nosotros', about_h1: 'Acerca de SwiftConvertHub',
      about_p1: 'SwiftConvertHub es un conversor de unidades gratuito, r\u00e1pido y preciso.',
      about_p2: 'Creamos SwiftConvertHub porque la conversi\u00f3n de unidades deber\u00eda ser simple e instant\u00e1nea.',
      about_offer_h2: 'Lo Que Ofrecemos', about_promise_h2: 'Nuestra Promesa',
      about_promise_p: 'SwiftConvertHub siempre ser\u00e1 gratuito.',
      about_contact_p: '\u00bfTienes alguna sugerencia o encontraste un error?',
      about_contact_link: 'Cont\u00e1ctanos',
      contact_label: 'Contacto', contact_h1: 'Ponte en Contacto',
      contact_p: 'Env\u00edanos un mensaje.',
      contact_name_label: 'Tu Nombre', contact_email_label: 'Correo Electr\u00f3nico',
      contact_subject_label: 'Asunto', contact_msg_label: 'Mensaje',
      contact_submit: 'Enviar Mensaje \ud83d\ude80',
      // Jump Points
      jp_weight_to_feexio: '\u00bfVendes productos o servicios en l\u00ednea?',
      jp_weight_to_feexio_link: 'Calcula tus comisiones y m\u00e1rgenes de ganancia',
      jp_temp_to_ilh: '\u00bfCompartes esta conversi\u00f3n con tu audiencia?',
      jp_temp_to_ilh_link: 'Crea un enlace de WhatsApp o c\u00f3digo QR en segundos',
      jp_storage_to_feexio: '\u00bfCalculas el precio de servicios digitales o planes de almacenamiento?',
      jp_storage_to_feexio_link: 'Calcula tus m\u00e1rgenes de ganancia y comisiones',

      // FAQ Section
      faq_title: 'Preguntas Frecuentes',
      faq_subtitle: 'Preguntas comunes sobre conversión de unidades y cómo funcionan nuestros conversores.',
      faq_q1: '¿Cuántos kilómetros hay en una milla?',
      faq_a1: 'Una milla equivale exactamente a 1.60934 kilómetros. Un kilómetro equivale a aproximadamente 0.621371 millas. Esta conversión es frecuente al viajar entre países con sistemas métrico e imperial.',
      faq_q2: '¿Cómo se convierten los grados Celsius a Fahrenheit?',
      faq_a2: 'Multiplica el valor en Celsius por 9/5 y suma 32. Fórmula: °F = (°C × 9/5) + 32. Por ejemplo, 100°C = 212°F y 0°C = 32°F. Para invertir: °C = (°F − 32) × 5/9.',
      faq_q3: '¿Cuál es la diferencia entre GB y GiB?',
      faq_a3: 'Un gigabyte (GB) equivale a 1,000,000,000 bytes (decimal). Un gibibyte (GiB) equivale a 1,073,741,824 bytes (binario). Los fabricantes de discos usan GB decimal mientras que los sistemas operativos reportan en GiB binario.',
      faq_q4: '¿Cómo se convierten libras a kilogramos?',
      faq_a4: 'Divide el valor en libras entre 2.20462 para obtener kilogramos. Ejemplo: 150 lbs ÷ 2.20462 ≈ 68.04 kg. Para convertir kg a lbs, multiplica por 2.20462.',
      faq_q5: '¿Cómo se convierte un número decimal a binario?',
      faq_a5: 'Divide repetidamente el número entre 2 y registra los restos de abajo hacia arriba. Ejemplo: 13 → 1101 en binario. Nuestro conversor maneja decimal, binario, hexadecimal y octal al instante.',
    }
  };

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('sch-lang', lang);
    const t = i18n[lang];
    if (!t) return;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) langBtn.textContent = lang === 'en' ? 'ES' : 'EN';
    document.documentElement.lang = lang === 'en' ? 'en' : 'es';
  }

  function toggleLang() {
    applyLang(currentLang === 'en' ? 'es' : 'en');
  }

  // Expose globally so inline onclick handlers can call them if needed
  window.applyLang = applyLang;
  window.toggleLang = toggleLang;

  /* ---- Nav HTML ---- */
  const NAV_HTML = '<nav class="nav" role="navigation" aria-label="Main navigation">' +
    '<div class="container">' +
      '<a class="nav-logo" href="/" aria-label="SwiftConvertHub Home">' +
        '<img src="/assets/logo-nav-light.png" alt="SwiftConvertHub" id="nav-logo-img" style="height:44px;width:auto;display:block;" />' +
      '</a>' +
      '<ul class="nav-links" id="nav-links">' +
        '<li><a href="/" data-page="home" data-i18n="nav_converters">Converters</a></li>' +
        '<li><a href="/blog.html" data-page="blog" data-i18n="nav_blog">Blog</a></li>' +
        '<li><a href="/about.html" data-page="about" data-i18n="nav_about">About</a></li>' +
        '<li><a href="/contact.html" data-page="contact" data-i18n="nav_contact">Contact</a></li>' +
      '</ul>' +
      '<div class="nav-right">' +
        '<button class="lang-btn" id="lang-btn" aria-label="Switch language">' + (currentLang === 'en' ? 'ES' : 'EN') + '</button>' +
        '<button class="theme-btn" id="theme-btn" aria-label="Toggle theme" title="Toggle dark/light mode">\ud83c\udf19</button>' +
        '<button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle menu">' +
          '<span></span><span></span><span></span>' +
        '</button>' +
      '</div>' +
    '</div>' +
  '</nav>';

  /* ---- Footer HTML ---- */
  const year = new Date().getFullYear();
  const FOOTER_HTML = '<footer class="footer" role="contentinfo">' +
    '<div class="container">' +
      '<div class="footer-grid">' +
        '<div class="footer-brand">' +
          '<a href="/" style="text-decoration:none;display:inline-block;margin-bottom:12px;" aria-label="SwiftConvertHub">' +
            '<img src="/assets/logo-footer-light.png" alt="SwiftConvertHub" id="footer-logo-img" style="height:32px;width:auto;display:block;" />' +
          '</a>' +
          '<p data-i18n="footer_tagline">Free, instant unit conversions for everyone. No sign-up, no ads clutter \u2014 just fast, accurate results.</p>' +
          '<div style="display:flex;gap:12px;margin-top:16px;align-items:center;">' +
            '<a href="https://www.facebook.com/toolsynergylab" target="_blank" rel="noopener" aria-label="Facebook" style="display:inline-flex;color:#9CA3AF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>' +
            '<a href="https://www.instagram.com/toolsynergylab" target="_blank" rel="noopener" aria-label="Instagram" style="display:inline-flex;color:#9CA3AF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>' +
            '<a href="https://www.youtube.com/channel/UCRcgmNeRDcBtk1S3UFjr1gw" target="_blank" rel="noopener" aria-label="YouTube" style="display:inline-flex;color:#9CA3AF;"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg></a>' +
          '</div>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 data-i18n="footer_col1_h4">Converters</h4>' +
          '<ul>' +
            '<li><a href="/#length" data-i18n="footer_length">Length &amp; Distance</a></li>' +
            '<li><a href="/#weight" data-i18n="footer_weight">Weight &amp; Mass</a></li>' +
            '<li><a href="/#temperature" data-i18n="footer_temp">Temperature</a></li>' +
            '<li><a href="/#storage" data-i18n="footer_storage">Digital Storage</a></li>' +
            '<li><a href="/#binary" data-i18n="footer_binary">Binary &amp; Numbers</a></li>' +
          '</ul>' +
        '</div>' +
        '<div class="footer-col">' +
          '<h4 data-i18n="footer_col2_h4">Pages</h4>' +
          '<ul>' +
            '<li><a href="/blog.html" data-i18n="nav_blog">Blog</a></li>' +
            '<li><a href="/about.html" data-i18n="nav_about">About</a></li>' +
            '<li><a href="/contact.html" data-i18n="nav_contact">Contact</a></li>' +
            '<li><a href="/privacy.html" data-i18n="footer_privacy">Privacy Policy</a></li>' +
            '<li><a href="/terms.html" data-i18n="footer_terms">Terms of Use</a></li>' +
          '</ul>' +
        '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
        '<p>&copy; ' + year + ' SwiftConvertHub. <span data-i18n="footer_rights">All rights reserved.</span></p>' +
        '<p data-i18n="footer_free">Free unit converter \u2014 No login required</p>' +
      '</div>' +
    '</div>' +
  '</footer>';

    /* ---- Inject ---- */
  const NETWORK_BAR_HTML = '<div style="background:#1a1a2e;color:#a0a8c8;font-size:12px;text-align:center;padding:6px 16px;letter-spacing:0.02em;">' +
    'More free tools:&nbsp;' +
    '<a href="https://instantlinkhub.com" target="_blank" rel="noopener" style="color:#7eb8f7;text-decoration:none;margin:0 6px;">InstantLinkHub</a>&middot;' +
    '<a href="https://feexio.com" target="_blank" rel="noopener" style="color:#7eb8f7;text-decoration:none;margin:0 6px;">Feexio</a>&middot;' +
    '<a href="https://swiftconverthub.com" target="_blank" rel="noopener" style="color:#c8d0e8;text-decoration:none;margin:0 6px;font-weight:600;">SwiftConvertHub</a>' +
    '</div>';

  function updateLogos(theme) {
    var navImg = document.getElementById('nav-logo-img');
    var footerImg = document.getElementById('footer-logo-img');
    var isDark = theme === 'dark';
    if (navImg) navImg.src = isDark ? '/assets/logo-nav-dark.png' : '/assets/logo-nav-light.png';
    if (footerImg) footerImg.src = isDark ? '/assets/logo-footer-dark.png' : '/assets/logo-footer-light.png';
  }

  function inject() {
    const navEl = document.getElementById('nav-placeholder');
    const footerEl = document.getElementById('footer-placeholder');
    if (navEl) navEl.outerHTML = NETWORK_BAR_HTML + NAV_HTML;
    if (footerEl) footerEl.outerHTML = FOOTER_HTML;

    // Mark active nav link
    const page = document.body.dataset.page || 'home';
    document.querySelectorAll('[data-page]').forEach(function (a) {
      if (a.dataset.page === page) a.classList.add('active');
    });

    // Theme button
    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      const t = document.documentElement.getAttribute('data-theme');
      themeBtn.textContent = t === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
      themeBtn.addEventListener('click', function () {
        const cur = document.documentElement.getAttribute('data-theme');
        const next = cur === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('sch-theme', next);
        themeBtn.textContent = next === 'dark' ? '\u2600\ufe0f' : '\ud83c\udf19';
        updateLogos(next);
      });
    }

    // Set correct logo on load
    updateLogos(document.documentElement.getAttribute('data-theme') || 'light');

    // Lang button
    const langBtn = document.getElementById('lang-btn');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLang);
    }

    // Mobile menu
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
      mobileBtn.addEventListener('click', function () {
        navLinks.classList.toggle('open');
      });
    }

    // Apply saved language to all data-i18n elements (nav + footer + page body)
    applyLang(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();

