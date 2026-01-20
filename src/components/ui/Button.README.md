# Button Component

A fully customizable button component built with Astro and Tailwind CSS, featuring multiple variants, sizes, and modes.

## Features

- ✨ **Two types**: Primary and Secondary
- 📏 **Three sizes**: Small, Medium, and Large
- 🌓 **Two modes**: Light and Dark
- 🎯 **Two usage contexts**: Default and Navbar
- 🔗 **Flexible rendering**: Can be rendered as `<button>` or `<a>` tag
- 🎨 **Smooth animations**: 100ms ease-out transitions
- 🎭 **Backdrop blur effects**: Glass morphism support
- ♿ **Accessible**: Semantic HTML with proper attributes

## Installation

The component is located at `src/components/ui/Button.astro`. Make sure you have the following dependencies installed:

```bash
npm install tailwindcss
```

Ensure your custom fonts are loaded via `src/styles/fonts.css` and imported in your global CSS.

## Usage

### Basic Examples

```astro
---
import Button from '../components/ui/Button.astro';
---

<!-- Primary button (default) -->
<Button>Click me</Button>

<!-- Primary large button -->
<Button type="primary" size="large">
  Get Started
</Button>

<!-- Secondary medium button -->
<Button type="secondary" size="medium">
  Learn More
</Button>

<!-- Dark mode primary button -->
<Button type="primary" mode="dark">
  Dark Button
</Button>

<!-- Navbar button (small secondary) -->
<Button type="secondary" size="small" usage="navbar">
  Sign In
</Button>
```

### As Link

```astro
<!-- Render as anchor tag -->
<Button as="a" href="/about">
  About Us
</Button>

<Button
  type="secondary"
  size="large"
  as="a"
  href="https://example.com"
  target="_blank"
>
  Visit Website
</Button>
```

### With Custom Classes

```astro
<!-- Add additional Tailwind classes -->
<Button class="shadow-lg">
  Custom Styled
</Button>

<Button
  type="secondary"
  class="w-full md:w-auto"
>
  Responsive Width
</Button>
```

### Using with Cleric AI Color System

The button component works seamlessly with the Cleric AI color system. Here are recommended usage patterns:

```astro
---
import Button from '../components/ui/Button.astro';
---

<!-- On dark backgrounds (use light mode) -->
<div class="bg-cleric-black p-8">
  <Button type="primary" mode="light">
    White Button on Dark
  </Button>

  <Button type="secondary" mode="light">
    Glass Effect on Dark
  </Button>

  <Button type="secondary" size="small" mode="light" usage="navbar">
    Navbar Button
  </Button>
</div>

<!-- On light backgrounds (use dark mode) -->
<div class="bg-cleric-white p-8">
  <Button type="primary" mode="dark">
    Black Button on Light
  </Button>

  <Button type="secondary" mode="dark">
    Glass Effect on Light
  </Button>
</div>

<!-- On gradient backgrounds with images -->
<div class="bg-gradient-to-r from-purple-900 to-blue-900 p-8">
  <!-- Use light mode for better contrast -->
  <Button type="primary" mode="light">
    Best for Hero Sections
  </Button>
</div>

<!-- With purple accent -->
<div class="bg-purple-40/10 border border-purple-40 p-6 rounded-xl">
  <p class="text-text-a mb-4">Special offer section</p>
  <Button type="primary" mode="dark">
    Get Started
  </Button>
</div>

<!-- Navbar implementation -->
<nav class="bg-cleric-black/50 backdrop-blur-lg">
  <div class="flex items-center gap-3">
    <Button type="secondary" size="small" mode="light" usage="navbar">
      Features
    </Button>
    <Button type="secondary" size="small" mode="light" usage="navbar">
      Pricing
    </Button>
    <Button type="primary" size="small" mode="light">
      Sign Up
    </Button>
  </div>
</nav>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'primary' \| 'secondary'` | `'primary'` | Button variant type |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `mode` | `'light' \| 'dark'` | `'light'` | Color mode (light or dark background) |
| `usage` | `'default' \| 'navbar'` | `'default'` | Usage context (affects secondary button styling) |
| `as` | `'button' \| 'a'` | `'button'` | HTML element to render |
| `href` | `string` | `undefined` | URL (only used when `as="a"`) |
| `class` | `string` | `''` | Additional CSS classes |
| `...rest` | `any` | - | Any other valid HTML attributes |

## Size Specifications

| Size | Height | Padding X | Padding Y | Border Radius |
|------|--------|-----------|-----------|---------------|
| Small | 33px | 16px | 6px | 150px |
| Medium | 41px | 24px | 10px | 150px |
| Large | 49px | 32px | 12px | 123.15px |

## Style Variants

### Light Mode

#### Primary
- **Default**: White background (`#FFFFFF`), black text
- **Hover**: Light gray background (`rgba(236, 236, 236, 0.9)`)

#### Secondary (Default Usage)
- **Default**: Semi-transparent white (`rgba(255, 255, 255, 0.05)`), white text, white border, 4px backdrop blur
- **Hover**: Slightly more opaque (`rgba(255, 255, 255, 0.12)`)

#### Secondary (Navbar Usage)
- **Default**: Semi-transparent white (`rgba(255, 255, 255, 0.2)`), white text, no border, 4px backdrop blur
- **Hover**: More opaque (`rgba(255, 255, 255, 0.3)`)

### Dark Mode

#### Primary
- **Default**: Black background (`#000000`), white text
- **Hover**: Semi-transparent black (`rgba(0, 0, 0, 0.8)`)

#### Secondary (Default Usage)
- **Default**: Semi-transparent white (`rgba(255, 255, 255, 0.05)`), black text, semi-transparent black border (`rgba(0, 0, 0, 0.5)`), 4px backdrop blur
- **Hover**: Semi-transparent black (`rgba(0, 0, 0, 0.1)`)

#### Secondary (Navbar Usage)
- **Default**: Semi-transparent black (`rgba(0, 0, 0, 0.1)`), black text, no border, 4px backdrop blur
- **Hover**: More opaque black (`rgba(0, 0, 0, 0.2)`)

## Animation

All buttons feature smooth hover transitions:
- **Duration**: 100ms
- **Timing Function**: ease-out
- **Properties**: background-color, border-color

## Common Patterns

### Call-to-Action Section

```astro
<div class="flex gap-4">
  <Button type="primary" size="large">
    Get Started Free
  </Button>
  <Button type="secondary" size="large">
    Watch Demo
  </Button>
</div>
```

### Navigation Bar

```astro
<nav class="flex items-center gap-3">
  <Button type="secondary" size="small" usage="navbar">
    Features
  </Button>
  <Button type="secondary" size="small" usage="navbar">
    Pricing
  </Button>
  <Button type="primary" size="small">
    Sign Up
  </Button>
</nav>
```

### Form Actions

```astro
<form>
  <!-- Form fields -->
  <div class="flex gap-3 justify-end">
    <Button type="secondary" size="medium">
      Cancel
    </Button>
    <Button type="primary" size="medium" type="submit">
      Submit
    </Button>
  </div>
</form>
```

### Dark Background Cards

```astro
<div class="bg-gray-900 p-8 rounded-lg">
  <h2 class="text-white mb-4">Premium Plan</h2>
  <Button type="primary" mode="dark" size="large" class="w-full">
    Subscribe Now
  </Button>
</div>
```

## Accessibility

The button component follows accessibility best practices:

- Uses semantic `<button>` or `<a>` tags
- Maintains proper color contrast ratios
- Supports keyboard navigation
- Works with screen readers
- All interactive states are clearly visible

### Adding ARIA Labels

```astro
<Button aria-label="Close dialog">
  ×
</Button>

<Button
  as="a"
  href="/docs"
  aria-label="Read documentation"
>
  Docs
</Button>
```

## Examples

View live examples at `/buttons-demo` route in your development server.

```bash
npm run dev
# Visit http://localhost:4321/buttons-demo
```

## Customization

### Extending Styles

You can extend the button with additional Tailwind classes:

```astro
<!-- Full width on mobile -->
<Button class="w-full md:w-auto">
  Responsive Button
</Button>

<!-- Add shadow -->
<Button class="shadow-xl">
  Elevated Button
</Button>

<!-- Add icon -->
<Button class="gap-3">
  <svg>...</svg>
  With Icon
</Button>
```

### Overriding Styles

For one-off customizations, pass additional classes:

```astro
<Button class="!bg-blue-500 !text-white hover:!bg-blue-600">
  Custom Color
</Button>
```

## TypeScript Support

The component includes full TypeScript type definitions:

```typescript
interface Props {
  type?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  mode?: 'light' | 'dark';
  usage?: 'default' | 'navbar';
  as?: 'button' | 'a';
  href?: string;
  class?: string;
}
```

## Cleric AI Color System Integration

The button component is designed to work with the Cleric AI color system. Here are the available colors and their usage:

### Available Color Classes

```astro
<!-- Primary Colors -->
bg-cleric-white    // rgba(255, 255, 255, 1) - #FFFFFF
bg-cleric-black    // rgba(0, 0, 0, 1) - #000000
bg-cleric-gray-a   // rgba(224, 224, 224, 1) - #E0E0E0

<!-- Text Colors -->
text-text-a        // rgba(49, 49, 49, 1) - #313131 - Main text
text-text-b        // rgba(107, 107, 107, 1) - #6B6B6B - Secondary text

<!-- Accent -->
bg-purple-40       // rgba(194, 156, 241, 1) - #C29CF1 - Purple accent
text-purple-40     // For purple text

<!-- Semantic Tokens -->
bg-background      // Adapts to theme (white in light, black in dark)
text-foreground    // Adapts to theme (text-a in light, white in dark)
bg-primary         // Black in light mode, white in dark mode
bg-secondary       // Purple-40 accent color
bg-muted           // Gray-a for muted sections
```

### Color Usage Guidelines

**For Dark Backgrounds:**
- Use `mode="light"` buttons
- Text should be `text-cleric-white` or `text-cleric-gray-a`
- Works great on: `bg-cleric-black`, dark gradients, dark images

**For Light Backgrounds:**
- Use `mode="dark"` buttons
- Text should be `text-text-a` or `text-text-b`
- Works great on: `bg-cleric-white`, `bg-cleric-gray-a`, light sections

**For Gradient/Image Backgrounds:**
- Prefer `mode="light"` for better visibility
- Add backdrop blur to containers: `backdrop-blur-lg`
- Consider semi-transparent backgrounds: `bg-cleric-black/50`

### Complete Color Demo

View the full color system at `/colors-demo`:

```bash
npm run dev
# Visit http://localhost:4321/colors-demo
```

This page shows all available colors, combinations, and usage examples.

## Browser Support

The button component works in all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

**Note**: Backdrop blur effects may have limited support in older browsers and will gracefully degrade.

## Contributing

When adding new variants or features:

1. Update the TypeScript interface in `Button.astro`
2. Add corresponding style definitions
3. Update this README with examples
4. Add visual examples to `/buttons-demo` page

## License

This component is part of the Cleric AI design system.
