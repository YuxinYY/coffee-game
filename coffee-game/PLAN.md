# 🎮 Coffee Craft — Custom Coffee Game Plan

## 📁 Project Structure

```
coffee-game/
├── index.html          ← Single-page HTML with all structure
├── style.css           ← All styling, animations, cup visuals
├── script.js           ← All game logic, state, rendering
├── PLAN.md             ← This plan document
└── README.md           ← How to run/play
```

**Strategy**: Pure static single-page app — no frameworks, no build tools, no backend. HTML + CSS + JavaScript. Works by opening `index.html` in any browser.

---

## 🎯 Game Flow

### Screen Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    START SCREEN                             │
│          "Welcome to Coffee Craft!"  [Start]               │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 1: SIZE                                              │
│  ☕ Small (8oz)  │  🫗 Medium (12oz)                       │
│  🫖 Large (16oz)  │  🍶 Extra Large (20oz)                 │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 2: TEMPERATURE                                       │
│  🔥 Extra Hot  │  🔥 Hot  │  🌡️ Room Temp                 │
│  🧊 Less Ice   │  🧊 Ice  │  🧊 Extra Ice                 │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3a: CUP MATERIAL (auto-filtered by temperature)      │
│                                                            │
│  IF (Extra Hot OR Hot) → PAPER cups only                   │
│  IF (Room Temp / Less Ice / Ice / Extra Ice) → PLASTIC     │
│                                                            │
│  ┌──────────────────┐  ┌───────────────────┐               │
│  │  📄 Paper Cup    │  │  ♻️ Plastic Cup   │               │
│  │  (Hot drinks)    │  │  (Cold drinks)    │               │
│  └──────────────────┘  └───────────────────┘               │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 3b: CUP STYLE / COLOR                                │
│                                                            │
│  IF PAPER:                                                 │
│   Pick from 13 Flower-themed colors:                       │
│   🌸 Pink Rose     🌻 Sunflower        💜 Lavender         │
│   🌷 Tulip         💙 Blue Rose        🤍 Jasmine          │
│   ❤️ Begonia       🩷 Peony            🧡 Orchid           │
│   💛 Chrysanthemum 🪷 Lotus             🤍 Narcissus        │
│   🩷 Cherry Blossom                                        │
│                                                            │
│  IF PLASTIC:                                               │
│   Pick texture:  ✨ Glossy  │  〰️ Matte                    │
│   (All plastic cups are clear/see-through)                  │
│                                                            │
│  ALL CUPS COME WITH LIDS (visual shown on cup)             │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 4: COFFEE BASE                                       │
│                                                            │
│  Three espresso roasts with distinct visuals:               │
│                                                            │
│  🌑 Coco Dark Roast:                                       │
│     → Deepest, darkest brown color                         │
│     → Minimal foam on top                                  │
│     → Rich, opaque look                                    │
│                                                            │
│  🥛 Creamy Medium Roast:                                   │
│     → Medium brown color                                   │
│     → MOST foam (thick creamy top layer)                   │
│     → Velvety texture                                      │
│                                                            │
│  🍑 Fruity Light Roast:                                    │
│     → Lightest brown / amber color                         │
│     → LEAST foam (thin layer, almost none)                 │
│     → Clearer, more translucent look                       │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 5: ADD-INS / SYRUPS                                  │
│                                                            │
│  Step 5.1 — Choose up to 2 syrups:                        │
│  🍦 Vanilla    🍫 Mocha       🍯 Caramel                   │
│  💜 Lavender   🍯 Honey       🌹 Rose                      │
│  🌿 Mint       🍑 Peach      🌼 Osmanthus                  │
│                                                            │
│  Step 5.2 — Application method:                            │
│   For each syrup chosen, pick:                             │
│    🔲 Line the cup (syrup coats inner wall)                │
│    🔄 Stir it in (syrup mixes into coffee)                 │
│                                                            │
│   *If 2 syrups chosen: one can line, one can stir          │
│   *If 1 syrup chosen: pick either method                   │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 6: MILK / CREAMER                                    │
│                                                            │
│  🥛 Whole Milk      → Lightens color, creamy swirl         │
│  🌾 Oat Milk        → Warm beige tint, smooth              │
│  🥜 Almond Milk     → Very light, thin consistency         │
│  🍦 Whipped Cream   → White fluff on top, no color change  │
│  🚫 None            → Coffee stays as-is                   │
│                                                            │
│  *Each milk changes the drink's color and texture visually │
│  *Whipped cream sits on top like a topping                 │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 7: TOPPINGS (choose up to 2)                         │
│                                                            │
│  ☁️ Whipped Cream      → Fluffy white cloud on top         │
│  🍫 Chocolate Shavings → Dark brown curls on top           │
│  ✨ Cinnamon Dust       → Speckled brown dusting            │
│  🍯 Caramel Drizzle    → Golden zigzag on top              │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  Step 8: FINAL RESULT SCREEN                               │
│                                                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              ☕ YOUR CUSTOM COFFEE ☕                │   │
│  │                                                     │   │
│  │    ┌───────────────────────────────────────┐        │   │
│  │    │       🎨 LARGE ANIMATED CUP           │        │   │
│  │    │  - Shows size/color/material visually │        │   │
│  │    │  - Animated steam rising              │        │   │
│  │    │  - Coffee fill level matches size     │        │   │
│  │    │  - Coffee color matches base + milk   │        │   │
│  │    │  - Foam layer reflects roast          │        │   │
│  │    │  - Syrup lines visible if "lined"     │        │   │
│  │    │  - Toppings shown on top              │        │   │
│  │    │  - Lid + straw if applicable          │        │   │
│  │    │  - Cup color/pattern applied          │        │   │
│  │    └───────────────────────────────────────┘        │   │
│  │                                                     │   │
│  │  Name Your Creation: [________________]             │   │
│  │                                                     │   │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────┐  │   │
│  │  │ 🔄 Play Again│  │ 💾 Save      │  │ 📋 Share │  │   │
│  │  └──────────────┘  └──────────────┘  └──────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧠 Core Architecture

### Game State Object (`script.js`)

```javascript
const state = {
  currentStep: 0,                // 0 = Welcome, 1-8 = steps
  choices: {
    size: null,                  // 'small' | 'medium' | 'large' | 'xl'
    temperature: null,           // 'extraHot' | 'hot' | 'roomTemp' | 'lessIce' | 'ice' | 'extraIce'
    cupMaterial: null,           // 'paper' | 'plastic' (auto-derived from temp)
    cupStyle: null,              // paper: flower name string | plastic: 'glossy' | 'matte'
    coffeeBase: null,            // 'dark' | 'medium' | 'light'
    syrups: [],                  // [{ flavor: 'vanilla', method: 'line' | 'stir' }, ...]
    milk: null,                  // 'whole' | 'oat' | 'almond' | 'whipped' | 'none'
    toppings: [],                // ['whippedCream', 'chocolateShavings', ...]
    name: ''                     // custom name for final creation
  },
  savedCreations: []             // loaded from localStorage
};
```

### Rendering System

- **Single container**: `<div id="app">` in `index.html`
- **`render()` function**: Clears `#app`, renders the current step based on `state.currentStep`
- Each step has its own `renderStepX()` function returning HTML string
- **Live preview cup**: A small cup in the sidebar/corner that updates reactively as choices are made
- **Progress bar**: Shows 8 segments with completed steps highlighted

### Navigation

- **Back button**: `state.currentStep--; render();`
- **Next button**: Only enabled when required choice is made
- **Click selection**: Cards are clickable, highlight on select
- **Cannot go back past Step 0**: Back button hidden on welcome screen
- **Cannot skip forward**: Next button disabled until current step selection is valid

---

## 🎨 Visual Design System

### CSS Coffee Cup Architecture

The cup is drawn entirely with layered `<div>` elements + CSS:

```
┌────────────────────────────────────────────┐
│               LID (top oval)               │
│    ┌────────────────────────────────┐      │
│    │  STRAW (if selected)           │      │
│    │    │                           │      │
│    └────┼───────────────────────────┘      │
│      ┌──┴────────────────────────┐         │
│      │  TOPPINGS LAYER           │         │
│      │  (whipped cream, etc.)    │         │
│      ├───────────────────────────┤         │
│      │  FOAM LAYER               │         │
│      │  (varies by roast)        │         │
│      ├───────────────────────────┤         │
│      │  COFFEE LIQUID            │         │
│      │  (color = base + milk)    │         │
│      │                           │         │
│      │  SYRUP LINES (if lined)   │         │
│      │  ~~~~~~~~                 │         │
│      └───────────────────────────┘         │
│    CUP BODY (color + pattern)              │
└────────────────────────────────────────────┘
```

### Key CSS Techniques

| Feature | CSS Technique |
|---------|--------------|
| Cup shape | `border-radius` + `overflow: hidden` on a rectangle |
| 3D effect | Multiple box-shadows, gradient backgrounds |
| Cup patterns | `background-image` with `radial-gradient` (polka dots), `linear-gradient` (stripes), or solid color |
| Steam animation | `@keyframes` with opacity + translateY + scale |
| Liquid fill | Percentage-based height on inner fill div |
| Foam | White-ish gradient top layer with varying height |
| Syrup lines | Colored strips on inner wall using `background` with `repeating-linear-gradient` |
| Lid | Ellipse (`border-radius: 50%`) above cup with small sip hole |
| Straw | Thin rectangle with `border-radius`, angled/rotated |

### Flower Colors for Paper Cups (CSS Variables)

```css
:root {
  --pink-rose: #FF69B4;
  --sunflower: #FFD700;
  --lavender: #B57EDC;
  --tulip: #FF6347;
  --blue-rose: #4A90D9;
  --jasmine: #F5F5DC;
  --begonia: #FF6B6B;
  --peony: #FFB6C1;
  --orchid: #DA70D6;
  --chrysanthemum: #FFD700;
  --lotus: #FFE4E1;
  --narcissus: #FFFACD;
  --cherry-blossom: #FFB7C5;
}
```

### Plastic Cup Visual

- Clear/see-through: **semi-transparent background** with subtle white border
- Glossy: `background: linear-gradient` with white highlight reflections
- Matte: `background: rgba(255,255,255,0.1)` with soft blur
- The coffee inside is visible through the cup!

---

## 🔧 Detailed Step Implementation

### Step 0 — Welcome Screen
- Title "☕ Coffee Craft"
- Subtitle: "Design your perfect cup of coffee"
- Animated coffee cup in background
- [Start] button → `state.currentStep = 1; render();`

### Step 1 — Size Selection
- 4 cards: Small (8oz), Medium (12oz), Large (16oz), XL (20oz)
- Each card shows cup size visually (relative heights)
- Selected: glowing border + checkmark

### Step 2 — Temperature Selection
- 6 cards with icons
- **Auto-filters Step 3**:
  - `extraHot` & `hot` → paper cups only
  - `roomTemp`, `lessIce`, `ice`, `extraIce` → plastic cups only

### Step 3a — Cup Material
- Depending on Step 2, only one option is available (paper or plastic)
- Displayed with explanation "Hot drinks need paper cups" / "Cold drinks use plastic cups"
- Auto-selected, user just reviews and clicks Next

### Step 3b — Cup Style & Color
- **If paper**: Grid of 13 flower colors, each as a small cup swatch with flower name + emoji
- **If plastic**: 2 options — Glossy (✨) or Matte (〰️), shown as transparent cup renderings
- Both show a **lid** on the cup preview

### Step 4 — Coffee Base
- 3 roast cards with:
  - Visual color swatch showing coffee + foam
  - Foam height indicator (tall for medium, short for light)
  - Name + flavor description
- Preview cup updates with roast color

### Step 5 — Syrups (Sub-steps)
**5.1 Flavor Selection:**
- Grid of 9 syrup flavors with color-coded circles
- User can select 1 or 2 (selection limit enforced)
- Selected syrups show a number badge (1st, 2nd)

**5.2 Application Method:**
- For each selected syrup, show two buttons: "Line the Cup" 🧴 and "Stir In" 🔄
- If 2 syrups: user assigns one to each method (can be same or different)
- Visual preview: "lined" shows colored vertical stripes on cup wall; "stirred" shows swirl pattern in liquid

### Step 6 — Milk/Creamer
- 5 options with visual previews
- Each changes the coffee liquid appearance:
  - **Whole milk**: Light caramel, creamy swirl pattern
  - **Oat milk**: Warm beige, smooth texture
  - **Almond milk**: Very pale, thin/watery appearance
  - **Whipped cream**: White fluffy layer on top (like a topping)
  - **None**: Coffee color remains unchanged

### Step 7 — Toppings
- 4 options, choose up to 2
- Each has a distinct visual:
  - **Whipped Cream**: White cloud shape on top
  - **Chocolate Shavings**: Small brown curls
  - **Cinnamon Dust**: Speckled brown dots
  - **Caramel Drizzle**: Golden zigzag lines
- Selection limit enforced with visual counter

### Step 8 — Final Result
- Full-page display of the completed coffee
- **Animated elements**:
  1. Cup rises up with a bounce animation
  2. Coffee liquid pours in and fills to correct level
  3. Foam layer appears
  4. Toppings drop in one by one
  5. Steam starts rising (continuous)
  6. Straw slides in (if selected)
- **Summary card** below cup listing all choices
- **Name input**: text field for custom name
- **Buttons**: Play Again, Save (localStorage), Share (copy text summary)

---

## 🔄 Edge Cases & Constraints

| Constraint | Enforcement |
|-----------|-------------|
| Temperature → Material match | Step 2 choice determines Step 3a available options |
| Max 2 syrups | UI disables additional selection after 2 chosen |
| Max 2 toppings | UI disables after 2 chosen; if user deselects, re-enables |
| Syrup method assignment | Must pick a method for each syrup before proceeding |
| Whipped Cream as milk vs topping | If user picks Whipped Cream as milk, it appears as topping layer; if also picked as topping, show more prominent |
| No milk + No toppings | Coffee stays pure — valid state, proceed normally |
| Cannot go back past Step 0 | Back button hidden on welcome screen |
| Cannot skip forward | Next button disabled until current step selection is valid |

---

## 🗃️ Data Persistence (localStorage)

```javascript
const STORAGE_KEY = 'coffee-craft-saves';

function saveToGallery(creation) {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  saved.push({
    id: Date.now(),
    date: new Date().toISOString(),
    ...creation
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
}

function loadGallery() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}
```

---

## 📱 Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| > 768px (desktop) | 3-4 column option grid, sidebar preview |
| 480-768px (tablet) | 2-3 column grid, preview above options |
| < 480px (mobile) | Single column, stacked cards, full-width |

---

## 📋 Development Phases

| Phase | Description | Est. Time |
|-------|------------|-----------|
| **Phase 1** | HTML skeleton + CSS boilerplate + JS render engine + navigation | ~2 hrs |
| **Phase 2** | Coffee cup CSS art (size, shape, lid, steam animations) | ~3 hrs |
| **Phase 3** | Steps 1-3: Size, Temperature, Cup Material + Style | ~2 hrs |
| **Phase 4** | Steps 4-5: Coffee Base + Syrup system (with sub-steps) | ~2.5 hrs |
| **Phase 5** | Steps 6-7: Milk/Creamer + Toppings | ~2 hrs |
| **Phase 6** | Final result screen with animations | ~2.5 hrs |
| **Phase 7** | localStorage save/gallery + responsive polish | ~1.5 hrs |
| **Phase 8** | Final testing, edge cases, bugs | ~1 hr |
| **Total** | | **~16.5 hours** |
