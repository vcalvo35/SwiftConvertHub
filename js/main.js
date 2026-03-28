/* =========================================================
   SwiftConvertHub — main.js
   All converter logic: Length, Weight, Temperature,
   Digital Storage, Binary/Number Systems
   ========================================================= */
'use strict';

/* =========================================================
   1. LENGTH CONVERTER
   Base unit: meter
   ========================================================= */
const LENGTH_UNITS = {
  meter:          { label: 'Meter (m)',              factor: 1 },
  kilometer:      { label: 'Kilometer (km)',          factor: 1000 },
  centimeter:     { label: 'Centimeter (cm)',         factor: 0.01 },
  millimeter:     { label: 'Millimeter (mm)',         factor: 0.001 },
  mile:           { label: 'Mile (mi)',               factor: 1609.344 },
  yard:           { label: 'Yard (yd)',               factor: 0.9144 },
  foot:           { label: 'Foot (ft)',               factor: 0.3048 },
  inch:           { label: 'Inch (in)',               factor: 0.0254 },
  nautical_mile:  { label: 'Nautical Mile (nmi)',     factor: 1852 },
  light_year:     { label: 'Light Year (ly)',         factor: 9.461e15 },
};

function convertLength() {
  const val  = parseFloat(document.getElementById('len-val').value);
  const from = document.getElementById('len-from').value;
  const to   = document.getElementById('len-to').value;
  const out  = document.getElementById('len-result');
  if (isNaN(val)) { out.value = ''; return; }
  const meters = val * LENGTH_UNITS[from].factor;
  const result = meters / LENGTH_UNITS[to].factor;
  out.value = formatNumber(result);
}

function swapLength() {
  const f = document.getElementById('len-from');
  const t = document.getElementById('len-to');
  [f.value, t.value] = [t.value, f.value];
  convertLength();
}

/* =========================================================
   2. WEIGHT / MASS CONVERTER
   Base unit: kilogram
   ========================================================= */
const WEIGHT_UNITS = {
  kilogram:  { label: 'Kilogram (kg)',     factor: 1 },
  gram:      { label: 'Gram (g)',          factor: 0.001 },
  milligram: { label: 'Milligram (mg)',    factor: 0.000001 },
  pound:     { label: 'Pound (lb)',        factor: 0.453592 },
  ounce:     { label: 'Ounce (oz)',        factor: 0.0283495 },
  stone:     { label: 'Stone (st)',        factor: 6.35029 },
  tonne:     { label: 'Metric Tonne (t)', factor: 1000 },
  ton_us:    { label: 'US Ton (short ton)', factor: 907.185 },
  ton_uk:    { label: 'UK Ton (long ton)', factor: 1016.05 },
};

function convertWeight() {
  const val  = parseFloat(document.getElementById('wt-val').value);
  const from = document.getElementById('wt-from').value;
  const to   = document.getElementById('wt-to').value;
  const out  = document.getElementById('wt-result');
  if (isNaN(val)) { out.value = ''; return; }
  const kg = val * WEIGHT_UNITS[from].factor;
  out.value = formatNumber(kg / WEIGHT_UNITS[to].factor);
}

function swapWeight() {
  const f = document.getElementById('wt-from');
  const t = document.getElementById('wt-to');
  [f.value, t.value] = [t.value, f.value];
  convertWeight();
}

/* =========================================================
   3. TEMPERATURE CONVERTER
   ========================================================= */
function tocelsius(val, from) {
  switch (from) {
    case 'celsius':    return val;
    case 'fahrenheit': return (val - 32) * 5 / 9;
    case 'kelvin':     return val - 273.15;
    case 'rankine':    return (val - 491.67) * 5 / 9;
    default: return val;
  }
}
function fromCelsius(c, to) {
  switch (to) {
    case 'celsius':    return c;
    case 'fahrenheit': return c * 9 / 5 + 32;
    case 'kelvin':     return c + 273.15;
    case 'rankine':    return (c + 273.15) * 9 / 5;
    default: return c;
  }
}

function convertTemp() {
  const val  = parseFloat(document.getElementById('tmp-val').value);
  const from = document.getElementById('tmp-from').value;
  const to   = document.getElementById('tmp-to').value;
  const out  = document.getElementById('tmp-result');
  if (isNaN(val)) { out.value = ''; return; }
  const c = tocelsius(val, from);
  out.value = formatNumber(fromCelsius(c, to));
}

function swapTemp() {
  const f = document.getElementById('tmp-from');
  const t = document.getElementById('tmp-to');
  [f.value, t.value] = [t.value, f.value];
  convertTemp();
}

/* =========================================================
   4. DIGITAL STORAGE CONVERTER
   Base unit: byte
   ========================================================= */
const STORAGE_UNITS = {
  bit:       { label: 'Bit (b)',              factor: 0.125 },
  byte:      { label: 'Byte (B)',             factor: 1 },
  kilobyte:  { label: 'Kilobyte (KB)',        factor: 1024 },
  megabyte:  { label: 'Megabyte (MB)',        factor: 1048576 },
  gigabyte:  { label: 'Gigabyte (GB)',        factor: 1073741824 },
  terabyte:  { label: 'Terabyte (TB)',        factor: 1099511627776 },
  petabyte:  { label: 'Petabyte (PB)',        factor: 1.126e15 },
  kibibyte:  { label: 'Kibibyte (KiB)',       factor: 1024 },
  mebibyte:  { label: 'Mebibyte (MiB)',       factor: 1048576 },
  gibibyte:  { label: 'Gibibyte (GiB)',       factor: 1073741824 },
};

function convertStorage() {
  const val  = parseFloat(document.getElementById('st-val').value);
  const from = document.getElementById('st-from').value;
  const to   = document.getElementById('st-to').value;
  const out  = document.getElementById('st-result');
  if (isNaN(val)) { out.value = ''; return; }
  const bytes = val * STORAGE_UNITS[from].factor;
  out.value = formatNumber(bytes / STORAGE_UNITS[to].factor);
}

function swapStorage() {
  const f = document.getElementById('st-from');
  const t = document.getElementById('st-to');
  [f.value, t.value] = [t.value, f.value];
  convertStorage();
}

/* =========================================================
   5. BINARY / NUMBER SYSTEMS CONVERTER
   ========================================================= */
function convertBinary() {
  const raw  = document.getElementById('bin-input').value.trim();
  const base = document.getElementById('bin-from').value;
  if (!raw) {
    ['bin-dec','bin-bin','bin-hex','bin-oct'].forEach(id => {
      document.getElementById(id).textContent = '—';
    });
    return;
  }

  let decimal;
  try {
    switch (base) {
      case '10': decimal = parseInt(raw, 10);  break;
      case '2':  decimal = parseInt(raw, 2);   break;
      case '16': decimal = parseInt(raw, 16);  break;
      case '8':  decimal = parseInt(raw, 8);   break;
      default:   decimal = NaN;
    }
  } catch { decimal = NaN; }

  if (isNaN(decimal) || decimal < 0) {
    ['bin-dec','bin-bin','bin-hex','bin-oct'].forEach(id => {
      document.getElementById(id).textContent = 'Invalid input';
    });
    return;
  }

  document.getElementById('bin-dec').textContent = decimal.toString(10);
  document.getElementById('bin-bin').textContent = decimal.toString(2);
  document.getElementById('bin-hex').textContent = decimal.toString(16).toUpperCase();
  document.getElementById('bin-oct').textContent = decimal.toString(8);
}

/* =========================================================
   Helper: populate <select> from units object
   ========================================================= */
function buildSelect(selectId, units, defaultVal) {
  const sel = document.getElementById(selectId);
  if (!sel) return;
  sel.innerHTML = Object.entries(units)
    .map(([k, u]) => `<option value="${k}"${k === defaultVal ? ' selected' : ''}>${u.label}</option>`)
    .join('');
}

/* =========================================================
   Helper: formatNumber — clean output
   ========================================================= */
function formatNumber(n) {
  if (Math.abs(n) >= 1e12 || (Math.abs(n) < 1e-6 && n !== 0)) {
    return n.toExponential(6);
  }
  // up to 10 significant digits, strip trailing zeros
  const s = parseFloat(n.toPrecision(10)).toString();
  return s;
}

/* =========================================================
   Quick chip helpers — pre-fill converter
   ========================================================= */
window.quickConvert = function(converterId, fromUnit, toUnit, value) {
  const val  = document.getElementById(converterId + '-val');
  const from = document.getElementById(converterId + '-from');
  const to   = document.getElementById(converterId + '-to');
  if (!val || !from || !to) return;
  val.value  = value;
  from.value = fromUnit;
  to.value   = toUnit;
  // trigger correct converter
  switch (converterId) {
    case 'len': convertLength(); break;
    case 'wt':  convertWeight(); break;
    case 'tmp': convertTemp();   break;
    case 'st':  convertStorage(); break;
  }
  document.getElementById(converterId === 'len' ? 'length' :
    converterId === 'wt' ? 'weight' :
    converterId === 'tmp' ? 'temperature' : 'storage').scrollIntoView({ behavior: 'smooth', block: 'center' });
};

/* =========================================================
   Init on DOM ready
   ========================================================= */
document.addEventListener('DOMContentLoaded', function () {
  // Build selects
  buildSelect('len-from', LENGTH_UNITS, 'kilometer');
  buildSelect('len-to',   LENGTH_UNITS, 'mile');
  buildSelect('wt-from',  WEIGHT_UNITS, 'kilogram');
  buildSelect('wt-to',    WEIGHT_UNITS, 'pound');
  buildSelect('st-from',  STORAGE_UNITS, 'gigabyte');
  buildSelect('st-to',    STORAGE_UNITS, 'megabyte');

  // Attach events — Length
  ['len-val','len-from','len-to'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', convertLength);
  });

  // Attach events — Weight
  ['wt-val','wt-from','wt-to'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', convertWeight);
  });

  // Attach events — Temperature
  ['tmp-val','tmp-from','tmp-to'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', convertTemp);
  });

  // Attach events — Storage
  ['st-val','st-from','st-to'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', convertStorage);
  });

  // Attach events — Binary
  const binInput = document.getElementById('bin-input');
  const binFrom  = document.getElementById('bin-from');
  if (binInput) binInput.addEventListener('input', convertBinary);
  if (binFrom)  binFrom.addEventListener('change', convertBinary);
});
