/* ===== Coffee Craft - Game Logic ===== */

// ==================== STATE ====================
const STORAGE_KEY = 'coffee-craft-saves';

const state = {
  currentStep: 0,
  choices: {
    size: null,
    temperature: null,
    cupMaterial: null,
    cupStyle: null,
    coffeeBase: null,
    syrups: [],
    milk: null,
    toppings: []
  }
};

// ==================== DATA ====================
const sizes = [
  { id: 'small', label: 'Small', icon: '☕', desc: '8 oz', fillPct: 60 },
  { id: 'medium', label: 'Medium', icon: '🫗', desc: '12 oz', fillPct: 72 },
  { id: 'large', label: 'Large', icon: '🫖', desc: '16 oz', fillPct: 82 },
  { id: 'xl', label: 'Extra Large', icon: '🍶', desc: '20 oz', fillPct: 92 }
];

const temperatures = [
  { id: 'extraHot', label: 'Extra Hot', icon: '🔥', desc: 'Steaming!', cupType: 'paper' },
  { id: 'hot', label: 'Hot', icon: '☕', desc: 'Nice & warm', cupType: 'paper' },
  { id: 'roomTemp', label: 'Room Temp', icon: '🌡️', desc: 'No chill', cupType: 'plastic' },
  { id: 'lessIce', label: 'Less Ice', icon: '🧊', desc: 'A few cubes', cupType: 'plastic' },
  { id: 'ice', label: 'Ice', icon: '🧊', desc: 'Chilled', cupType: 'plastic' },
  { id: 'extraIce', label: 'Extra Ice', icon: '🧊', desc: 'Mountain of ice', cupType: 'plastic' }
];

const paperColors = [
  { id: 'pink-rose', label: 'Pink Rose', emoji: '🌸', color: '#FF69B4' },
  { id: 'sunflower', label: 'Sunflower', emoji: '🌻', color: '#FFD700' },
  { id: 'lavender', label: 'Lavender', emoji: '💜', color: '#B57EDC' },
  { id: 'tulip', label: 'Tulip', emoji: '🌷', color: '#FF6347' },
  { id: 'blue-rose', label: 'Blue Rose', emoji: '💙', color: '#4A90D9' },
  { id: 'jasmine', label: 'Jasmine', emoji: '🤍', color: '#F5F5DC' },
  { id: 'begonia', label: 'Begonia', emoji: '❤️', color: '#FF6B6B' },
  { id: 'peony', label: 'Peony', emoji: '🩷', color: '#FFB6C1' },
  { id: 'orchid', label: 'Orchid', emoji: '🧡', color: '#DA70D6' },
  { id: 'chrysanthemum', label: 'Chrysanthemum', emoji: '💛', color: '#FFD700' },
  { id: 'lotus', label: 'Lotus', emoji: '🪷', color: '#FFE4E1' },
  { id: 'narcissus', label: 'Narcissus', emoji: '🤍', color: '#FFFACD' },
  { id: 'cherry-blossom', label: 'Cherry Blossom', emoji: '🩷', color: '#FFB7C5' }
];

const plasticTextures = [
  { id: 'glossy', label: 'Glossy', icon: '✨', desc: 'Shiny finish' },
  { id: 'matte', label: 'Matte', icon: '〰️', desc: 'Soft finish' }
];

const roasts = [
  { id: 'dark', label: 'Coco Dark Roast', emoji: '🌑', color: '#3E2723', foamHeight: 8, desc: 'Deep & bold, least foam' },
  { id: 'medium', label: 'Creamy Medium Roast', emoji: '🥛', color: '#6D4C41', foamHeight: 25, desc: 'Smooth, most foam' },
  { id: 'light', label: 'Fruity Light Roast', emoji: '🍑', color: '#A1887F', foamHeight: 4, desc: 'Bright & light, barely any foam' }
];

const syrupFlavors = [
  { id: 'vanilla', label: 'Vanilla', emoji: '🍦', color: '#FFF8DC' },
  { id: 'mocha', label: 'Mocha', emoji: '🍫', color: '#3E2723' },
  { id: 'caramel', label: 'Caramel', emoji: '🍯', color: '#D4A574' },
  { id: 'lavender', label: 'Lavender', emoji: '💜', color: '#B57EDC' },
  { id: 'honey', label: 'Honey', emoji: '🍯', color: '#FFD700' },
  { id: 'rose', label: 'Rose', emoji: '🌹', color: '#FF69B4' },
  { id: 'mint', label: 'Mint', emoji: '🌿', color: '#98FF98' },
  { id: 'peach', label: 'Peach', emoji: '🍑', color: '#FFDAB9' },
  { id: 'osmanthus', label: 'Osmanthus', emoji: '🌼', color: '#FFD700' }
];

const milks = [
  { id: 'whole', label: 'Whole Milk', emoji: '🥛', color: '#D7B89E', desc: 'Creamy, light caramel' },
  { id: 'oat', label: 'Oat Milk', emoji: '🌾', color: '#C4A882', desc: 'Warm beige, smooth' },
  { id: 'almond', label: 'Almond Milk', emoji: '🥜', color: '#E8D5C4', desc: 'Pale, thin' },
  { id: 'whipped', label: 'Whipped Cream', emoji: '🍦', color: null, desc: 'Fluffy white on top' },
  { id: 'none', label: 'None', emoji: '🚫', color: null, desc: 'No creamer' }
];

const toppings = [
  { id: 'whippedCream', label: 'Whipped Cream', emoji: '☁️', cssClass: 'topping-whipped' },
  { id: 'chocolateShavings', label: 'Chocolate Shavings', emoji: '🍫', cssClass: 'topping-chocolate' },
  { id: 'cinnamonDust', label: 'Cinnamon Dust', emoji: '✨', cssClass: 'topping-cinnamon' },
  { id: 'caramelDrizzle', label: 'Caramel Drizzle', emoji: '🍯', cssClass: 'topping-caramel' }
];

// ==================== DOM REFS ====================
const app = document.getElementById('app');
const progressBar = document.getElementById('progress-bar');
const nav = document.getElementById('nav');
const backBtn = document.getElementById('back-btn');
const nextBtn = document.getElementById('next-btn');
const progressSteps = document.querySelectorAll('.progress-step');

// ==================== UTILITY ====================
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getChoiceLabel(category, id) {
  if (!id) return 'Not selected';
  const map = {
    sizes, temperatures, paperColors, plasticTextures, roasts, syrupFlavors, milks, toppings
  };
  const data = {
    sizes, temperatures, paperColors, plasticTextures, roasts, syrupFlavors, milks, toppings
  };
  const list = data[category];
  if (!list) return id;
  const item = list.find(i => i.id === id);
  return item ? item.label : id;
}

// ==================== RENDER ENGINE ====================
function render() {
  updateProgress();
  updateNav();

  switch (state.currentStep) {
    case 0: renderWelcome(); break;
    case 1: renderSizeSelection(); break;
    case 2: renderTemperatureSelection(); break;
    case 3: renderCupStyle(); break;
    case 4: renderCoffeeBase(); break;
    case 5: renderSyrups(); break;
    case 6: renderMilkSelection(); break;
    case 7: renderToppings(); break;
    case 8: renderFinalResult(); break;
    default: renderWelcome();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
  if (state.currentStep === 0) {
    progressBar.classList.add('hidden');
    return;
  }
  progressBar.classList.remove('hidden');

  const total = progressSteps.length;
  const currentIdx = Math.min(state.currentStep - 1, total - 1);

  progressSteps.forEach((el, i) => {
    el.classList.remove('completed', 'active');
    if (i < currentIdx) el.classList.add('completed');
    else if (i === currentIdx) el.classList.add('active');
  });

  // Update progress line
  const pct = ((currentIdx) / (total - 1)) * 100;
  document.querySelector('#progress-track').style.setProperty('--progress-width', pct + '%');
}

function updateNav() {
  if (state.currentStep === 0 || state.currentStep === 8) {
    nav.classList.add('hidden');
    return;
  }
  nav.classList.remove('hidden');
  backBtn.disabled = state.currentStep <= 1;
  nextBtn.disabled = !isStepComplete();
}

function isStepComplete() {
  switch (state.currentStep) {
    case 1: return state.choices.size !== null;
    case 2: return state.choices.temperature !== null;
    case 3: return state.choices.cupStyle !== null;
    case 4: return state.choices.coffeeBase !== null;
    case 5: return state.choices.syrups.length > 0 && state.choices.syrups.every(s => s.method);
    case 6: return state.choices.milk !== null;
    case 7: return true; // toppings optional
    default: return false;
  }
}

function clearApp() {
  app.innerHTML = '';
}

// ==================== STEP RENDERERS ====================

// STEP 0: Welcome
function renderWelcome() {
  clearApp();
  app.innerHTML = `
    <div class="welcome-screen">
      <div class="welcome-cup">☕</div>
      <h1>Coffee Craft</h1>
      <p class="subtitle">Design your perfect cup of coffee</p>
      <button class="start-btn" onclick="startGame()">Start Making →</button>
    </div>
  `;
}

function startGame() {
  state.currentStep = 1;
  render();
}

// STEP 1: Size
function renderSizeSelection() {
  clearApp();
  let cards = sizes.map(s => {
    const selected = state.choices.size === s.id ? 'selected' : '';
    return `
      <div class="option-card ${selected}" onclick="selectSize('${s.id}')">
        <div class="card-top"><span class="label">${s.label}</span><span class="card-check"></span></div>
        <div class="card-visual"><span class="icon">${s.icon}</span></div>
        <div class="card-bottom"><span class="desc">${s.desc}</span></div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="step-screen">
      <h2 class="step-title">Choose your size</h2>
      <p class="step-subtitle">How much coffee are you craving?</p>
      <div class="options-grid">${cards}</div>
    </div>
  `;
}

function selectSize(id) {
  state.choices.size = id;
  render();
}

// STEP 2: Temperature
function renderTemperatureSelection() {
  clearApp();
  let cards = temperatures.map(t => {
    const selected = state.choices.temperature === t.id ? 'selected' : '';
    return `
      <div class="option-card ${selected}" onclick="selectTemperature('${t.id}')">
        <div class="card-top"><span class="label">${t.label}</span><span class="card-check"></span></div>
        <div class="card-visual"><span class="icon">${t.icon}</span></div>
        <div class="card-bottom"><span class="desc">${t.desc}</span></div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="step-screen">
      <h2 class="step-title">Choose the temperature</h2>
      <p class="step-subtitle">How do you like your coffee served?</p>
      <div class="options-grid">${cards}</div>
    </div>
  `;
}

function selectTemperature(id) {
  state.choices.temperature = id;
  const temp = temperatures.find(t => t.id === id);
  state.choices.cupMaterial = temp.cupType;
  state.choices.cupStyle = null; // Reset cup style
  render();
}

// STEP 3: Cup Style
function renderCupStyle() {
  clearApp();
  const isPaper = state.choices.cupMaterial === 'paper';

  if (isPaper) {
    let cards = paperColors.map(c => {
      const selected = state.choices.cupStyle === c.id ? 'selected' : '';
      return `
        <div class="option-card ${selected}" onclick="selectCupStyle('${c.id}')">
          <div class="card-top"><span class="label">${c.emoji} ${c.label}</span><span class="card-check"></span></div>
          <div class="card-visual">
            <div class="cup-swatch" style="background: ${c.color};"><div class="lid"></div></div>
          </div>
          <div class="card-bottom"><span class="desc">Paper</span></div>
        </div>
      `;
    }).join('');

    app.innerHTML = `
      <div class="step-screen">
        <h2 class="step-title">Choose your cup style</h2>
        <p class="step-subtitle">Paper cup (hot drink) — Pick a flower-inspired color!</p>
        <div class="options-grid">${cards}</div>
      </div>
    `;
  } else {
    let cards = plasticTextures.map(t => {
      const selected = state.choices.cupStyle === t.id ? 'selected' : '';
      return `
        <div class="option-card ${selected}" onclick="selectCupStyle('${t.id}')">
          <div class="card-top"><span class="label">${t.icon} ${t.label}</span><span class="card-check"></span></div>
          <div class="card-visual">
            <div class="cup-swatch" style="background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1)); border: 1px solid rgba(36,28,24,0.12);">
              <div class="lid"></div>
            </div>
          </div>
          <div class="card-bottom"><span class="desc">${t.desc}</span></div>
        </div>
      `;
    }).join('');

    app.innerHTML = `
      <div class="step-screen">
        <h2 class="step-title">Choose your cup style</h2>
        <p class="step-subtitle">Plastic cup (cold drink) — Pick a finish</p>
        <div class="options-grid cols-2">${cards}</div>
      </div>
    `;
  }
}

function selectCupStyle(id) {
  state.choices.cupStyle = id;
  render();
}

// STEP 4: Coffee Base
function renderCoffeeBase() {
  clearApp();
  let cards = roasts.map(r => {
    const selected = state.choices.coffeeBase === r.id ? 'selected' : '';
    return `
      <div class="option-card ${selected}" onclick="selectCoffeeBase('${r.id}')">
        <div class="card-top"><span class="label">${r.emoji} ${r.label}</span><span class="card-check"></span></div>
        <div class="card-visual">
          <div class="roast-visual" style="background: ${r.color};">
            <div class="foam" style="height: ${r.foamHeight}%;"></div>
          </div>
        </div>
        <div class="card-bottom"><span class="desc">${r.desc}</span></div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="step-screen">
      <h2 class="step-title">Choose your espresso base</h2>
      <p class="step-subtitle">Pick a roast — each has a unique look & feel</p>
      <div class="options-grid cols-3">${cards}</div>
    </div>
  `;
}

function selectCoffeeBase(id) {
  state.choices.coffeeBase = id;
  render();
}

// STEP 5: Syrups
function renderSyrups() {
  clearApp();

  // Step 5.1: Flavor selection
  let flavorCards = syrupFlavors.map(sf => {
    const isSelected = state.choices.syrups.some(s => s.flavor === sf.id);
    const isDisabled = !isSelected && state.choices.syrups.length >= 2;
    return `
      <div class="option-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}" 
           onclick="toggleSyrup('${sf.id}')">
        <div class="card-top"><span class="label">${sf.label}</span><span class="card-check"></span></div>
        <div class="card-visual" style="flex-direction:column;">
          <span class="icon">${sf.emoji}</span>
          <span class="syrup-dot" style="background:${sf.color};"></span>
        </div>
        <div class="card-bottom"><span class="desc">Syrup</span></div>
      </div>
    `;
  }).join('');

  let methodSection = '';
  if (state.choices.syrups.length > 0) {
    let methods = state.choices.syrups.map((s, idx) => {
      const syrup = syrupFlavors.find(sf => sf.id === s.flavor);
      return `
        <div class="syrup-method-section">
          <h3>${syrup.emoji} ${syrup.label} — How to add it?</h3>
          <div class="method-buttons">
            <button class="method-btn ${s.method === 'line' ? 'selected' : ''}" 
                    onclick="setSyrupMethod(${idx}, 'line')">🧴 Line the Cup</button>
            <button class="method-btn ${s.method === 'stir' ? 'selected' : ''}" 
                    onclick="setSyrupMethod(${idx}, 'stir')">🔄 Stir It In</button>
          </div>
        </div>
      `;
    }).join('');
    methodSection = `<div class="syrup-method-section" style="margin-top:20px;"><h3 style="text-align:center;">Application Method</h3>${methods}</div>`;
  }

  app.innerHTML = `
    <div class="step-screen">
      <h2 class="step-title">Add syrups</h2>
      <p class="step-subtitle">Choose up to 2 flavors (tap selected to remove)</p>
      <div class="options-grid">${flavorCards}</div>
      <p style="text-align:center;margin:10px 0;color:var(--text-secondary);font-size:0.9rem;">
        Selected: ${state.choices.syrups.length}/2
      </p>
      ${methodSection}
      ${state.choices.syrups.length > 0 ? '<div style="text-align:center;margin-top:15px;"><button class="nav-btn" onclick="finishSyrups()" style="background:var(--accent);color:white;border:none;padding:12px 32px;border-radius:8px;font-size:16px;font-weight:600;cursor:pointer;">Confirm Syrups ✓</button></div>' : ''}
    </div>
  `;
}

function toggleSyrup(id) {
  const existing = state.choices.syrups.findIndex(s => s.flavor === id);
  if (existing >= 0) {
    state.choices.syrups.splice(existing, 1);
  } else if (state.choices.syrups.length < 2) {
    state.choices.syrups.push({ flavor: id, method: null });
  }
  render();
}

function setSyrupMethod(idx, method) {
  if (state.choices.syrups[idx]) {
    state.choices.syrups[idx].method = method;
    render();
  }
}

function finishSyrups() {
  if (state.choices.syrups.every(s => s.method)) {
    render(); // will re-render and allow next
  }
}

// STEP 6: Milk
function renderMilkSelection() {
  clearApp();
  let cards = milks.map(m => {
    const selected = state.choices.milk === m.id ? 'selected' : '';
    let previewStyle = '';
    if (m.color) {
      previewStyle = `background: ${m.color};`;
    } else if (m.id === 'whipped') {
      previewStyle = 'background: radial-gradient(ellipse at center, white, #F0F0F0);';
    } else {
      previewStyle = 'background: transparent; border: 1px dashed var(--border);';
    }
    return `
      <div class="option-card ${selected}" onclick="selectMilk('${m.id}')">
        <div class="card-top"><span class="label">${m.label}</span><span class="card-check"></span></div>
        <div class="card-visual" style="flex-direction:column; gap:8px;">
          <span class="icon">${m.emoji}</span>
          <div class="milk-preview" style="${previewStyle}"></div>
        </div>
        <div class="card-bottom"><span class="desc">${m.desc}</span></div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="step-screen">
      <h2 class="step-title">Choose your milk / creamer</h2>
      <p class="step-subtitle">This will change the color & texture of your drink</p>
      <div class="options-grid">${cards}</div>
    </div>
  `;
}

function selectMilk(id) {
  state.choices.milk = id;
  render();
}

// STEP 7: Toppings
function renderToppings() {
  clearApp();
  let cards = toppings.map(t => {
    const isSelected = state.choices.toppings.includes(t.id);
    const isDisabled = !isSelected && state.choices.toppings.length >= 2;
    return `
      <div class="option-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}" 
           onclick="toggleTopping('${t.id}')">
        <div class="card-top"><span class="label">${t.label}</span><span class="card-check"></span></div>
        <div class="card-visual"><span class="icon">${t.emoji}</span></div>
        <div class="card-bottom"><span class="desc">Topping</span></div>
      </div>
    `;
  }).join('');

  app.innerHTML = `
    <div class="step-screen">
      <h2 class="step-title">Choose toppings</h2>
      <p class="step-subtitle">Pick up to 2 (or skip!)</p>
      <div class="options-grid">${cards}</div>
      <p style="text-align:center;margin-top:16px;color:var(--text-secondary);font-size:0.75rem;text-transform:uppercase;letter-spacing:0.06em;">
        Selected: ${state.choices.toppings.length}/2
      </p>
    </div>
  `;
}

function toggleTopping(id) {
  const idx = state.choices.toppings.indexOf(id);
  if (idx >= 0) {
    state.choices.toppings.splice(idx, 1);
  } else if (state.choices.toppings.length < 2) {
    state.choices.toppings.push(id);
  }
  render();
}

// STEP 8: Final Result
function renderFinalResult() {
  clearApp();
  const c = state.choices;

  // Build the cup
  const sizeData = sizes.find(s => s.id === c.size);
  const tempData = temperatures.find(t => t.id === c.temperature);
  const roastData = roasts.find(r => r.id === c.coffeeBase);

  // Cup color
  let cupBg, cupBorder;
  if (c.cupMaterial === 'paper') {
    const colorData = paperColors.find(p => p.id === c.cupStyle);
    cupBg = colorData ? colorData.color : '#FFD700';
    cupBorder = 'rgba(0,0,0,0.15)';
  } else {
    const textureData = plasticTextures.find(p => p.id === c.cupStyle);
    if (textureData && textureData.id === 'glossy') {
      cupBg = 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.15))';
    } else {
      cupBg = 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.08))';
    }
    cupBorder = 'rgba(255,255,255,0.4)';
  }

  // Coffee liquid color
  let liquidColor = roastData ? roastData.color : '#6D4C41';
  const milkData = milks.find(m => m.id === c.milk);
  if (milkData && milkData.color) {
    // Blend coffee + milk
    liquidColor = milkData.color;
  }

  // Fill %
  const fillPct = sizeData ? sizeData.fillPct : 72;

  // Foam
  const foamH = roastData ? roastData.foamHeight : 10;

  // Syrup lines
  let syrupLinesHtml = '';
  let syrupSwirlHtml = '';
  state.choices.syrups.forEach(s => {
    const syrup = syrupFlavors.find(sf => sf.id === s.flavor);
    if (!syrup) return;
    if (s.method === 'line') {
      const left = 15 + Math.random() * 60;
      syrupLinesHtml += `<div class="syrup-line" style="left:${left}%;background:${syrup.color};"></div>`;
    } else if (s.method === 'stir') {
      syrupSwirlHtml += `<div class="syrup-swirl" style="background: radial-gradient(ellipse, ${syrup.color}, transparent 70%);"></div>`;
    }
  });

  // Toppings
  let toppingsHtml = '';
  state.choices.toppings.forEach((t, i) => {
    const topData = toppings.find(to => to.id === t);
    if (!topData) return;
    const delay = i * 0.3;
    let extraStyle = '';
    if (t === 'chocolateShavings') {
      const left = 20 + i * 30;
      extraStyle = `left:${left}%;top:${5 + i * 8}px;`;
    } else if (t === 'caramelDrizzle') {
      extraStyle = 'left:0;';
    } else if (t === 'cinnamonDust') {
      extraStyle = 'left:0;';
    } else {
      extraStyle = `left:${5 + i * 20}%;`;
    }
    toppingsHtml += `<div class="topping-item ${topData.cssClass}" style="animation-delay:${delay}s;${extraStyle}"></div>`;
  });

  // Straw (for cold drinks)
  let strawHtml = '';
  if (c.cupMaterial === 'plastic') {
    strawHtml = `<div class="straw right-straw"></div>`;
  }

  // Steam (for hot drinks)
  let steamHtml = '';
  if (c.cupMaterial === 'paper') {
    steamHtml = `
      <div class="steam-container">
        <div class="steam-wisp" style="left:20%;animation-delay:0s;"></div>
        <div class="steam-wisp" style="left:45%;animation-delay:0.7s;"></div>
        <div class="steam-wisp" style="left:70%;animation-delay:1.4s;"></div>
      </div>
    `;
  }

  // Summary
  const syrupText = c.syrups.map(s => {
    const syrup = syrupFlavors.find(sf => sf.id === s.flavor);
    return `${syrup ? syrup.emoji + ' ' + syrup.label : s.flavor} (${s.method === 'line' ? '🧴 Lined' : '🔄 Stirred'})`;
  }).join(', ') || 'None';

  const toppingText = c.toppings.map(t => {
    const top = toppings.find(to => to.id === t);
    return top ? top.emoji + ' ' + top.label : t;
  }).join(', ') || 'None';

  app.innerHTML = `
    <div class="final-screen">
      <h2>☕ Your Custom Coffee</h2>
      <p class="creation-subtitle">Here's your creation!</p>

      <div class="final-cup-container">
        <div class="cup">
          ${steamHtml}
          <div class="cup-lid">
            <div class="sip-hole"></div>
          </div>
          <div class="cup-body" style="--fill-pct:${fillPct}%;">
            <div class="coffee-fill" style="height: ${fillPct}%; background: ${liquidColor};">
              <div class="foam-layer" style="height: ${foamH}px;"></div>
              ${syrupLinesHtml}
              ${syrupSwirlHtml}
            </div>
            <div class="toppings-layer">
              ${toppingsHtml}
            </div>
          </div>
          ${strawHtml}
        </div>
      </div>

      <div class="final-summary">
        <h3>📋 Recipe</h3>
        <div class="summary-item"><span class="summary-label">Size</span><span class="summary-value">${sizeData ? sizeData.icon + ' ' + sizeData.label : 'N/A'}</span></div>
        <div class="summary-item"><span class="summary-label">Temperature</span><span class="summary-value">${tempData ? tempData.icon + ' ' + tempData.label : 'N/A'}</span></div>
        <div class="summary-item"><span class="summary-label">Cup</span><span class="summary-value">${c.cupMaterial === 'paper' ? '📄 ' + capitalize(c.cupStyle || '') : '♻️ Plastic (' + (c.cupStyle || '') + ')'}</span></div>
        <div class="summary-item"><span class="summary-label">Coffee Base</span><span class="summary-value">${roastData ? roastData.emoji + ' ' + roastData.label : 'N/A'}</span></div>
        <div class="summary-item"><span class="summary-label">Syrups</span><span class="summary-value">${syrupText}</span></div>
        <div class="summary-item"><span class="summary-label">Milk</span><span class="summary-value">${milkData ? milkData.emoji + ' ' + milkData.label : 'N/A'}</span></div>
        <div class="summary-item"><span class="summary-label">Toppings</span><span class="summary-value">${toppingText}</span></div>
      </div>

      <input type="text" class="name-input" placeholder="Name your creation..." id="coffee-name" maxlength="30" />

      <div class="final-buttons">
        <button class="final-btn primary" onclick="playAgain()">🔄 Make Another</button>
        <button class="final-btn success" onclick="saveCreation()">💾 Save</button>
        <button class="final-btn secondary" onclick="shareCreation()">📋 Share</button>
      </div>
    </div>
  `;
}

// ==================== ACTIONS ====================
function playAgain() {
  state.currentStep = 0;
  state.choices = {
    size: null,
    temperature: null,
    cupMaterial: null,
    cupStyle: null,
    coffeeBase: null,
    syrups: [],
    milk: null,
    toppings: []
  };
  render();
}

function saveCreation() {
  const name = document.getElementById('coffee-name')?.value || 'My Coffee';
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  saved.push({
    id: Date.now(),
    date: new Date().toISOString(),
    name: name,
    choices: { ...state.choices }
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  alert('💾 Saved to your gallery!');
}

function shareCreation() {
  const c = state.choices;
  const sizeData = sizes.find(s => s.id === c.size);
  const tempData = temperatures.find(t => t.id === c.temperature);
  const roastData = roasts.find(r => r.id === c.coffeeBase);
  const milkData = milks.find(m => m.id === c.milk);

  const lines = [
    '☕ My Coffee Craft Creation!',
    `Size: ${sizeData ? sizeData.label : 'N/A'}`,
    `Temp: ${tempData ? tempData.label : 'N/A'}`,
    `Cup: ${c.cupMaterial === 'paper' ? 'Paper (' + c.cupStyle + ')' : 'Plastic (' + c.cupStyle + ')'}`,
    `Base: ${roastData ? roastData.label : 'N/A'}`,
    `Syrups: ${c.syrups.map(s => s.flavor + ' (' + s.method + ')').join(', ') || 'None'}`,
    `Milk: ${milkData ? milkData.label : 'N/A'}`,
    `Toppings: ${c.toppings.map(t => t).join(', ') || 'None'}`,
    '\nMade with ☕ Coffee Craft!'
  ];

  const text = lines.join('\n');
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      alert('📋 Copied to clipboard! Share it with friends.');
    }).catch(() => {
      prompt('📋 Copy this text:', text);
    });
  } else {
    prompt('📋 Copy this text:', text);
  }
}

// ==================== NAVIGATION ====================
backBtn.addEventListener('click', () => {
  if (state.currentStep > 1) {
    state.currentStep--;
    render();
  }
});

nextBtn.addEventListener('click', () => {
  if (isStepComplete() && state.currentStep < 8) {
    state.currentStep++;
    render();
  }
});

// ==================== INIT ====================
render();
