# Cleric AI Color System

A comprehensive color system for the Cleric AI design system, featuring carefully selected colors for optimal contrast and accessibility.

## Table of Contents

- [Color Palette](#color-palette)
- [Usage](#usage)
- [Semantic Tokens](#semantic-tokens)
- [Best Practices](#best-practices)
- [Examples](#examples)

## Color Palette

### Primary Colors

These are the foundational colors of the Cleric AI brand.

| Color Name | Value | Hex | Tailwind Class | Usage |
|------------|-------|-----|----------------|-------|
| **Primary White** | `rgba(255, 255, 255, 1)` | `#FFFFFF` | `bg-cleric-white` / `text-cleric-white` | Backgrounds, text on dark surfaces |
| **Primary Black** | `rgba(0, 0, 0, 1)` | `#000000` | `bg-cleric-black` / `text-cleric-black` | Backgrounds, primary text, buttons |
| **Primary Gray A** | `rgba(224, 224, 224, 1)` | `#E0E0E0` | `bg-cleric-gray-a` / `text-cleric-gray-a` | Borders, muted backgrounds, dividers |

### Text Colors

Optimized for readability with proper contrast ratios.

| Color Name | Value | Hex | Tailwind Class | Usage |
|------------|-------|-----|----------------|-------|
| **Text A** | `rgba(49, 49, 49, 1)` | `#313131` | `text-text-a` | Primary text, headings, main content |
| **Text B** | `rgba(107, 107, 107, 1)` | `#6B6B6B` | `text-text-b` | Secondary text, descriptions, captions |

### Secondary Colors

Accent colors for highlights and interactive elements.

| Color Name | Value | Hex | Tailwind Class | Usage |
|------------|-------|-----|----------------|-------|
| **Purple 40** | `rgba(194, 156, 241, 1)` | `#C29CF1` | `bg-purple-40` / `text-purple-40` | Accents, highlights, CTAs, interactive elements |

## Usage

### Basic Color Classes

```astro
<!-- Backgrounds -->
<div class="bg-cleric-white">White background</div>
<div class="bg-cleric-black">Black background</div>
<div class="bg-cleric-gray-a">Gray background</div>
<div class="bg-purple-40">Purple background</div>

<!-- Text Colors -->
<p class="text-text-a">Main text color</p>
<p class="text-text-b">Secondary text color</p>
<p class="text-cleric-white">White text</p>
<p class="text-purple-40">Purple accent text</p>

<!-- Borders -->
<div class="border border-cleric-gray-a">Gray border</div>
<div class="border border-purple-40">Purple border</div>

<!-- Opacity Variants -->
<div class="bg-cleric-black/50">50% opacity black</div>
<div class="bg-purple-40/10">10% opacity purple</div>
```

## Semantic Tokens

Semantic color tokens automatically adapt to light/dark mode themes.

| Token | Light Mode | Dark Mode | Tailwind Class |
|-------|------------|-----------|----------------|
| **background** | White | Black | `bg-background` |
| **foreground** | Text A | White | `text-foreground` |
| **primary** | Black | White | `bg-primary` |
| **primary-foreground** | White | Black | `text-primary-foreground` |
| **secondary** | Purple 40 | Purple 40 | `bg-secondary` |
| **secondary-foreground** | White | Black | `text-secondary-foreground` |
| **muted** | Gray A | Dark Gray | `bg-muted` |
| **muted-foreground** | Text B | Gray A | `text-muted-foreground` |
| **accent** | Purple 40 | Purple 40 | `bg-accent` |
| **border** | Gray A | Dark Gray | `border-border` |

### Using Semantic Tokens

```astro
<!-- These automatically adapt to light/dark mode -->
<div class="bg-background text-foreground">
  Adapts to theme
</div>

<button class="bg-primary text-primary-foreground">
  Primary button
</button>

<div class="bg-muted text-muted-foreground">
  Muted content
</div>
```

## Best Practices

### 1. Choose the Right Mode for Your Background

**On Dark Backgrounds** (black, dark gradients, dark images):
```astro
<div class="bg-cleric-black p-8">
  <h1 class="text-cleric-white font-heading">Heading</h1>
  <p class="text-cleric-gray-a font-body">Secondary text</p>
  <span class="text-purple-40">Accent text</span>
</div>
```

**On Light Backgrounds** (white, light grays):
```astro
<div class="bg-cleric-white p-8">
  <h1 class="text-text-a font-heading">Heading</h1>
  <p class="text-text-b font-body">Secondary text</p>
  <span class="text-purple-40">Accent text</span>
</div>
```

### 2. Maintain Contrast Ratios

Always ensure sufficient contrast between text and background:

✅ **Good Contrast**
```astro
<div class="bg-cleric-white">
  <p class="text-text-a">Readable text</p>
</div>

<div class="bg-cleric-black">
  <p class="text-cleric-white">Readable text</p>
</div>
```

❌ **Poor Contrast**
```astro
<div class="bg-cleric-white">
  <p class="text-cleric-white">Invisible text!</p>
</div>

<div class="bg-cleric-gray-a">
  <p class="text-text-b">Low contrast</p>
</div>
```

### 3. Use Purple 40 Sparingly

Purple 40 is an accent color. Use it for:
- Call-to-action highlights
- Interactive element hover states
- Important notifications
- Links and clickable elements

```astro
<!-- Good use of purple -->
<div class="bg-cleric-white p-6">
  <h2 class="text-text-a">Special Offer</h2>
  <p class="text-text-b">Limited time only</p>
  <a href="#" class="text-purple-40 hover:underline">Learn more →</a>
</div>

<!-- Subtle highlight -->
<div class="bg-purple-40/10 border border-purple-40 p-6 rounded-lg">
  <p class="text-text-a">Featured content</p>
</div>
```

### 4. Leverage Opacity for Depth

Use opacity variants to create visual hierarchy:

```astro
<!-- Overlay effects -->
<div class="relative">
  <img src="hero.jpg" class="w-full" />
  <div class="absolute inset-0 bg-cleric-black/60">
    <h1 class="text-cleric-white">Hero Title</h1>
  </div>
</div>

<!-- Glass morphism -->
<div class="bg-cleric-white/10 backdrop-blur-lg border border-cleric-white/20">
  <p class="text-cleric-white">Glassmorphic card</p>
</div>

<!-- Subtle backgrounds -->
<div class="bg-purple-40/5">
  <p class="text-text-a">Subtle purple tint</p>
</div>
```

## Examples

### Hero Section

```astro
<section class="relative min-h-screen">
  <!-- Background image/gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black"></div>

  <!-- Content with proper contrast -->
  <div class="relative z-10 container mx-auto px-4 py-20">
    <h1 class="text-6xl font-heading text-cleric-white mb-4">
      Welcome to Cleric AI
    </h1>
    <p class="text-xl text-cleric-gray-a mb-8">
      Transform your workflow with AI-powered insights
    </p>
    <button class="bg-cleric-white text-cleric-black px-8 py-3 rounded-full hover:bg-cleric-gray-a">
      Get Started
    </button>
  </div>
</section>
```

### Content Card

```astro
<div class="bg-cleric-white border border-cleric-gray-a rounded-xl p-6 shadow-sm">
  <h3 class="text-2xl font-heading text-text-a mb-3">
    Feature Title
  </h3>
  <p class="text-base text-text-b mb-4">
    Description of the feature using secondary text color for better hierarchy.
  </p>
  <a href="#" class="text-purple-40 hover:text-purple-40/80 font-medium">
    Learn more →
  </a>
</div>
```

### Highlight Box

```astro
<div class="bg-purple-40/10 border-l-4 border-purple-40 p-6 rounded-r-lg">
  <h4 class="text-lg font-body font-semibold text-text-a mb-2">
    💡 Pro Tip
  </h4>
  <p class="text-text-b">
    Use this style for important callouts and tips.
  </p>
</div>
```

### Dark Navbar

```astro
<nav class="bg-cleric-black/90 backdrop-blur-lg border-b border-cleric-white/10">
  <div class="container mx-auto px-4 py-4 flex items-center justify-between">
    <div class="text-cleric-white font-heading text-xl">
      Cleric AI
    </div>

    <div class="flex items-center gap-6">
      <a href="#" class="text-cleric-gray-a hover:text-cleric-white transition">
        Features
      </a>
      <a href="#" class="text-cleric-gray-a hover:text-cleric-white transition">
        Pricing
      </a>
      <button class="bg-cleric-white text-cleric-black px-6 py-2 rounded-full hover:bg-cleric-gray-a">
        Sign Up
      </button>
    </div>
  </div>
</nav>
```

### Footer

```astro
<footer class="bg-cleric-black text-cleric-white py-12">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h4 class="font-body font-semibold mb-4">Product</h4>
        <ul class="space-y-2 text-cleric-gray-a">
          <li><a href="#" class="hover:text-purple-40">Features</a></li>
          <li><a href="#" class="hover:text-purple-40">Pricing</a></li>
          <li><a href="#" class="hover:text-purple-40">Documentation</a></li>
        </ul>
      </div>
      <!-- More columns... -->
    </div>

    <div class="border-t border-cleric-white/10 pt-8 text-cleric-gray-a text-sm">
      <p>&copy; 2024 Cleric AI. All rights reserved.</p>
    </div>
  </div>
</footer>
```

## Accessibility

All colors in the Cleric AI system have been chosen to meet WCAG 2.1 AA contrast requirements:

- **Text A on White**: 12.5:1 (AAA)
- **Text B on White**: 4.5:1 (AA)
- **White on Black**: 21:1 (AAA)
- **Purple 40**: Use with caution, check contrast with color picker

### Testing Contrast

Always verify contrast ratios for custom color combinations:

```astro
<!-- Good contrast -->
<div class="bg-cleric-black">
  <p class="text-cleric-white">21:1 ratio ✅</p>
</div>

<!-- Check this combination -->
<div class="bg-purple-40">
  <p class="text-cleric-white">Verify contrast ratio</p>
</div>
```

## Demo

View all colors in action:

```bash
npm run dev
# Visit http://localhost:4321/colors-demo
```

## CSS Variables

If you need to access raw CSS variables:

```css
/* Primary Colors */
--primary-white: 0 0% 100%;
--primary-black: 0 0% 0%;
--primary-gray-a: 0 0% 87.8%;

/* Text Colors */
--text-a: 0 0% 19.2%;
--text-b: 0 0% 42%;

/* Secondary */
--purple-40: 265 71% 78%;
```

Usage with HSL:
```astro
<div style="background: hsl(var(--purple-40))">
  Custom element
</div>
```

## License

This color system is part of the Cleric AI design system.
