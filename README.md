# Cleric AI - Website

Modern, responsive website for Cleric AI built with Astro and Tailwind CSS.

## 🎨 Design System

This project implements a custom design system with:

- **Custom Fonts**: GT Alpina (headings) and Cleric Sans Text (body)
- **Color Palette**:
  - Primary: Cleric Purple, Black, White
  - Secondary: Gray variants for text and backgrounds
- **Component Library**: Reusable UI components with Tailwind CSS
- **Responsive Design**: Mobile-first approach with breakpoints for tablet and desktop

## 🚀 Project Structure

```text
/
├── public/
│   ├── favicon.svg           # Cleric AI favicon
│   ├── fonts/                # Custom font files
│   └── images/               # Image assets
│       ├── logo-vector.svg
│       ├── background.jpg
│       └── hero_slack*.png
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── Button.astro
│   │   │   ├── HeroBadgeLink.astro
│   │   │   └── NavigationMenu.astro
│   │   ├── AnnouncementBanner.astro
│   │   ├── Footer.astro
│   │   └── Navbar.astro
│   ├── layouts/
│   │   └── Layout.astro     # Main layout with SEO & meta tags
│   ├── pages/
│   │   └── index.astro      # Homepage
│   ├── styles/
│   │   └── fonts.css        # Font-face declarations
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   └── global.css           # Global styles & design tokens
├── tailwind.config.mjs      # Tailwind configuration
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎯 Features

### Performance Optimizations
- ✅ Lazy loading for images
- ✅ Font preloading for critical fonts
- ✅ Optimized image dimensions with width/height attributes
- ✅ Responsive images for different screen sizes

### Accessibility (A11y)
- ✅ Skip to main content link
- ✅ Enhanced focus states
- ✅ ARIA labels for sections
- ✅ Semantic HTML structure
- ✅ Alt text for all images
- ✅ Keyboard navigation support

### SEO
- ✅ Meta tags (title, description)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card tags
- ✅ Favicon
- ✅ Semantic HTML structure

### Component Architecture
- **DRY Principles**: Eliminated code duplication using data structures and map functions
- **Tailwind CSS**: All styling uses utility classes (no inline styles)
- **Reusable Components**: Button, Navigation, and other UI components
- **Responsive Design**: Mobile-first with breakpoints for tablet and desktop

## 🎨 Design Tokens

Key design tokens are defined in `src/global.css`:

```css
/* Colors */
--cleric-purple: #7C3AED
--cleric-black: #000000
--cleric-white: #FFFFFF
--text-a: #000000 (primary text)
--text-b: #6B6B6B (secondary text)

/* Typography */
--font-heading: 'GT Alpina', serif
--font-body: 'Cleric Sans Text', sans-serif
```

## 📱 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1023px
  - Desktop: ≥ 1024px

## 🔧 Development Notes

### Adding New Components

1. Create component in `src/components/`
2. Use Tailwind CSS utility classes
3. Follow existing naming conventions
4. Add TypeScript types for props

### Modifying Colors

Update `tailwind.config.mjs` and `src/global.css` to maintain consistency across the design system.

### Font Management

Custom fonts are loaded via `src/styles/fonts.css`. Add font files to `public/fonts/` directory.

## 📄 License

© Cleric 2025 - All rights reserved

## 👥 Contributing

This is a private project. For questions or issues, please contact the development team.

---

Built with [Astro](https://astro.build) 🚀
