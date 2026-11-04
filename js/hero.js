/* SwiftConvertHub — homepage hero converter (2026 redesign) */
(function () {
  'use strict';
  var root = document.getElementById('sch-hero');
  if (!root) return;

  var CATS = {
    length: { en: ['Length', 'Miles', 'Kilometers', '1 mi = 1.609344 km exactly (international mile, 1959 agreement).'],
              es: ['Longitud', 'Millas', 'Kilómetros', '1 mi = 1,609344 km exactos (milla internacional, acuerdo de 1959).'],
              from: 'mi', to: 'km', def: '26.2', fn: function (v) { return v * 1.609344; }, anchor: '#length' },
    weight: { en: ['Weight', 'Pounds', 'Kilograms', '1 lb = 0.45359237 kg exactly.'],
              es: ['Peso', 'Libras', 'Kilogramos', '1 lb = 0,45359237 kg exactos.'],
              from: 'lb', to: 'kg', def: '150', fn: function (v) { return v * 0.45359237; }, anchor: '#weight' },
    temperature: { en: ['Temperature', 'Fahrenheit', 'Celsius', '°C = (°F − 32) × 5/9.'],
              es: ['Temperatura', 'Fahrenheit', 'Celsius', '°C = (°F − 32) × 5/9.'],
              from: '°F', to: '°C', def: '98.6', fn: function (v) { return (v - 32) * 5 / 9; }, anchor: '#temperature' },
    storage: { en: ['Storage', 'Gigabytes (decimal)', 'Gibibytes (binary)', '1 GB = 1,000,000,000 bytes; 1 GiB = 1,073,741,824 bytes (IEC 80000-13).'],
              es: ['Almacenamiento', 'Gigabytes (decimal)', 'Gibibytes (binario)', '1 GB = 1.000.000.000 bytes; 1 GiB = 1.073.741.824 bytes (IEC 80000-13).'],
              from: 'GB', to: 'GiB', def: '500', fn: function (v) { return v * 1e9 / 1073741824; }, anchor: '#storage' },
    cooking: { en: ['Cooking', 'US cups', 'Milliliters', '1 US cup = 236.5882365 mL.'],
              es: ['Cocina', 'Tazas (EE. UU.)', 'Mililitros', '1 taza (EE. UU.) = 236,5882365 mL.'],
              from: 'cup', to: 'mL', def: '2', fn: function (v) { return v * 236.5882365; }, anchor: '#cooking' }
  };
  var cat = 'length';
  var tabs = root.querySelector('.sch-tabs');
  var input = document.getElementById('hc-input');
  var $ = function (id) { return document.getElementById(id); };

  function lang() { return document.documentElement.lang === 'es' ? 'es' : 'en'; }
  function fmt(n) {
    var l = lang() === 'es' ? 'es-ES' : 'en-US';
    return parseFloat(n.toPrecision(10)).toLocaleString(l, { maximumFractionDigits: 8 });
  }

  function buildTabs() {
    tabs.innerHTML = '';
    Object.keys(CATS).forEach(function (k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', k === cat ? 'true' : 'false');
      b.textContent = CATS[k][lang()][0];
      b.addEventListener('click', function () { cat = k; input.value = CATS[k].def; buildTabs(); render(); });
      tabs.appendChild(b);
    });
  }

  function render() {
    var c = CATS[cat], t = c[lang()];
    $('hc-from-name').textContent = t[1];
    $('hc-to-name').textContent = t[2];
    $('hc-from-unit').textContent = c.from;
    $('hc-to-unit').textContent = c.to;
    $('hc-note').textContent = t[3];
    $('hc-more').setAttribute('href', c.anchor);
    var v = parseFloat(String(input.value).replace(',', '.'));
    var r = isNaN(v) ? null : c.fn(v);
    $('hc-num').textContent = r === null ? '—' : fmt(r);
    var max = r === null ? 10 : Math.max(Math.ceil(Math.abs(r) / 10) * 10, 10);
    var ticks = $('hc-ticks');
    ticks.innerHTML = '';
    for (var i = 0; i <= 10; i++) {
      var d = document.createElement('div');
      d.className = 'sch-tick';
      d.style.left = (i * 10) + '%';
      var line = document.createElement('i');
      line.style.height = (i % 5 === 0 ? 18 : 10) + 'px';
      var lab = document.createElement('span');
      lab.textContent = fmt(Math.round(max * i / 10 * 100) / 100);
      d.appendChild(line); d.appendChild(lab); ticks.appendChild(d);
    }
    $('hc-marker').style.left = (r === null ? 0 : Math.min(Math.abs(r) / max * 100, 100)) + '%';
  }

  input.addEventListener('input', render);
  var lb = document.getElementById('lang-btn');
  if (lb) lb.addEventListener('click', function () { setTimeout(function () { buildTabs(); render(); }, 0); });
  buildTabs();
  render();
})();
