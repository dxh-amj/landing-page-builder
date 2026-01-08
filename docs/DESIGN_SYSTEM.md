# Landing Page Builder - Design System

A comprehensive guide to the design patterns and component architecture used in this project.

---

## 1. Font System

### Overview

This project uses an **inheritance-based font system** where fonts are declared at the page level and cascade down to all child components. This eliminates redundancy and ensures consistency.

### How It Works

```
┌─────────────────────────────────────────────────────────┐
│  <body class="font-inter">                              │
│    ├── <Header brandFont="'Sedan SC'">                  │  ← Brand name only
│    │       └── "Truston" uses Sedan SC                  │
│    │       └── Nav links inherit Inter                  │
│    ├── <Hero>                                           │  ← Inherits Inter
│    │       └── Heading inherits Inter                   │
│    │       └── Body text inherits Inter                 │
│    └── <Footer>                                         │  ← Inherits Inter
└─────────────────────────────────────────────────────────┘
```

### Defining Fonts

**1. Global Font Classes** (`src/styles/global.css`)

```css
/* Font Utility Classes */
.font-inter {
  font-family: Inter, sans-serif;
}

.font-poppins {
  font-family: Poppins, sans-serif;
}

.font-roboto {
  font-family: Roboto, sans-serif;
}
```

**2. Page-Level Declaration** (Astro pages)

```astro
<!-- demo-business.astro -->
<body class="font-inter">
  <!-- All children inherit Inter -->
</body>

<!-- demo-restaurant.astro -->
<body class="font-poppins bg-white">
  <!-- All children inherit Poppins -->
</body>
```

**3. Brand Font Override** (Header only)

```astro
<StandardHeader
  brandName="Truston"
  brandFont='"Sedan SC", serif'  <!-- Only affects brand name -->
/>
```

### Font Matrix by Page

| Page        | Body Font      | Brand Font          | Google Fonts Import            |
| ----------- | -------------- | ------------------- | ------------------------------ |
| Business    | `font-inter`   | Sedan SC            | `Inter`, `Sedan SC`            |
| Education   | `font-inter`   | Outfit              | `Inter`, `Outfit`              |
| Ecommerce   | `font-inter`   | Sansita Swashed     | `Inter`, `Sansita Swashed`     |
| Real Estate | `font-inter`   | Playfair Display SC | `Inter`, `Playfair Display SC` |
| Restaurant  | `font-poppins` | Playwrite US Trad   | `Poppins`, `Playwrite US Trad` |

### Adding a New Font

1. **Add the Google Font import** in your page's `<head>`:

   ```html
   <link
     href="https://fonts.googleapis.com/css2?family=NewFont:wght@400;700&display=swap"
     rel="stylesheet"
   />
   ```

2. **Add utility class** to `global.css`:

   ```css
   .font-newfont {
     font-family: NewFont, sans-serif;
   }
   ```

3. **Apply to page body**:
   ```html
   <body class="font-newfont"></body>
   ```

---

## 2. Color System

### Primary Color Prop

Every page has a `primaryColor` that drives the visual identity:

```astro
<StandardHeader primaryColor="#2563EB" />
<CenteredHero primaryColor="#2563EB" />
```

This single prop controls:

- Header CTA button background
- Hero primary button background
- Hero secondary button border/text color

### Color Matrix by Page

| Page        | Primary Color | Hex Code  |
| ----------- | ------------- | --------- |
| Business    | Blue          | `#2563EB` |
| Education   | Indigo        | `#4F46E5` |
| Ecommerce   | Violet        | `#7C3AED` |
| Real Estate | Emerald       | `#059669` |
| Restaurant  | Orange        | `#EA580C` |

---

## 3. Button Radius System

### Overview

Button corner radius is controlled via the `buttonRadius` prop, ensuring consistent styling across headers and heroes.

```astro
<StandardHeader buttonRadius="16px" />
<CenteredHero buttonRadius="16px" />
```

### Radius Presets by Design

| Design Style | Button Radius | Example Pages       |
| ------------ | ------------- | ------------------- |
| Sharp        | `8px`         | Business, Ecommerce |
| Rounded      | `12px`        | Real Estate         |
| Pill         | `16px`        | Education           |
| Full Pill    | `100px`       | Restaurant          |

---

## 4. Component Architecture

### Header Variants

| Component           | Use Case                       | Features                                 |
| ------------------- | ------------------------------ | ---------------------------------------- |
| `StandardHeader`    | Business, Ecommerce, Education | Logo left, nav center/right, login + CTA |
| `CenteredNavHeader` | Restaurant, Real Estate        | Centered logo, nav below, minimal CTA    |

### Hero Variants

| Component        | Use Case               | Layout                               |
| ---------------- | ---------------------- | ------------------------------------ |
| `CenteredHero`   | Business, Education    | Full-width background, centered text |
| `SplitHero`      | Ecommerce, Real Estate | Text left, image right (50/50)       |
| `RestaurantHero` | Restaurant             | Text left, animated image grid right |

---

## 5. Responsive Breakpoints

Custom breakpoints are defined in `global.css`:

```css
@theme {
  --breakpoint-1xl: 1400px;
  --breakpoint-3xl: 1600px;
  --breakpoint-4xl: 1680px;
  --breakpoint-5xl: 1800px;
  --breakpoint-6xl: 1900px;
}
```

### Mobile-First Approach

All components use Tailwind's mobile-first responsive modifiers:

```tsx
// Mobile: buttons stack, Desktop: buttons inline
<div className="flex flex-wrap items-center gap-4">

// Mobile: static images, Desktop: animated scroll
<div className="animate-scroll-up">  // Animation only on lg+
```

---

## 6. File Structure

```
src/
├── components/
│   ├── common/
│   │   ├── header/
│   │   │   ├── StandardHeader.tsx
│   │   │   ├── CenteredNavHeader.tsx
│   │   │   └── index.ts
│   │   └── hero/
│   │       ├── CenteredHero.tsx
│   │       ├── SplitHero.tsx
│   │       └── index.ts
│   └── designs/
│       └── restaurant/
│           └── RestaurantHero.tsx
├── pages/
│   ├── demo-business.astro
│   ├── demo-education.astro
│   ├── demo-ecommerce.astro
│   ├── demo-real-estate.astro
│   └── demo-restaurant.astro
└── styles/
    └── global.css
```
