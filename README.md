
# CANDLKAAR Artisan Candles Template

This is a premium, ready-to-publish frontend template for a luxury candle brand. Built with React 18, Tailwind CSS, and TypeScript.

## Key Features
- **Seasonal Toggle System**: Use the gift icon in the header to toggle `[data-theme="christmas"]`. This shifts accent colors and enables/disables seasonal components (like the hero banner on Home).
- **Responsive Architecture**: Mobile-first design that scales beautifully to ultra-wide desktops.
- **Content Agnostic**: All products, navigation links, and footer items are defined in `constants.ts` for easy replacement.
- **Accessibility**: Semantic HTML and focus states throughout.

## How to Customize

### 1. Adding Products
Navigate to `constants.ts` and update the `MOCK_PRODUCTS` array. Each product supports:
- `id`: Unique identifier
- `name`: Display name
- `price`: Numeric value
- `image`: URL to the product image
- `isSeasonal`: Boolean (if true, shows "Festive Choice" badge in Christmas mode)

### 2. Changing Branding/Colors
Global tokens are defined in `index.html` inside the `<style>` tag under `:root`.
- `--color-primary`: Main text and footer background.
- `--color-accent`: Highlight color (Gold in default, Deep Red in Christmas).
- `--color-surface`: Base background color.

### 3. Toggling Christmas Mode
The system is controlled by the `data-theme="christmas"` attribute on the root container. In `App.tsx`, the `isChristmas` state manages this. Any element with the utility class `.christmas-only` will automatically hide when Christmas mode is off.

### 4. File Safety Guide
- **SAFE TO EDIT**: `constants.ts`, `pages/*.tsx`, `index.html` (for tokens).
- **CAUTION**: `App.tsx` (routing), `components/Layout.tsx` (navigation logic).
- **DO NOT TOUCH**: `index.tsx` (boilerplate entry).

## Technical Requirements
- Modern browser with ES6+ support.
- Tailwind CSS (loaded via CDN for this template).
- React 18 / ReactDOM.
