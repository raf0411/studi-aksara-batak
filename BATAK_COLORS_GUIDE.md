# Batak Color System Documentation

This guide explains how to use the custom Batak color palette throughout your Aksara Batak website.

## Color Palette Overview

The color system is based on your provided hex codes and includes:

- **Primary Browns**: Light (#D6C0B3), Dark (#493628), Medium (#AB886D), Darker (#5B3C24)
- **Secondary Browns**: Deep (#311F12), Warm (#372416), Rich (#402B1B), Soft (#AE8769)
- **Light Tones**: Cream (#E0B59C), Gray Light (#D9D9D9), Gray Warm (#E4E0E1)
- **Neutrals**: White (#FFFFFF), Black (#000000)
- **Alpha Variants**: Various opacity levels (50%, 75%)
- **Gradient**: Linear gradient from #3C2616 (10%) to #241205 (100%)

## How to Use the Colors

### Method 1: Tailwind CSS Classes (Recommended)

Use the predefined Tailwind classes directly in your JSX:

```tsx
// Background colors
<div className="bg-batak-brown-light">Light brown background</div>
<div className="bg-batak-brown-dark">Dark brown background</div>
<div className="bg-batak-cream">Cream background</div>

// Text colors
<h1 className="text-batak-brown-dark">Dark brown text</h1>
<p className="text-batak-brown-medium">Medium brown text</p>

// Border colors
<div className="border border-batak-brown-medium">Bordered element</div>

// Gradients
<div className="bg-batak-gradient">Gradient background</div>
<div className="bg-batak-gradient-horizontal">Horizontal gradient</div>

// Alpha variants
<div className="bg-batak-brown-light-50">50% opacity brown</div>
<div className="bg-batak-brown-muted">75% opacity brown</div>
```

### Method 2: Predefined Color Combinations

Import and use predefined combinations for consistency:

```tsx
import { batakColorClasses } from '@/lib/colors';

// Use predefined combinations
<Card className={batakColorClasses.combinations.primaryCard}>
  Primary styled card
</Card>

<Card className={batakColorClasses.combinations.darkCard}>
  Dark styled card
</Card>

<Card className={batakColorClasses.combinations.creamCard}>
  Cream styled card
</Card>
```

### Method 3: CSS Variables

Use CSS variables for dynamic styling:

```tsx
// In JSX with style prop
<div style={{ 
  backgroundColor: 'var(--batak-brown-medium)', 
  color: 'var(--batak-white)' 
}}>
  Styled with CSS variables
</div>

// In CSS files
.custom-class {
  background-color: var(--batak-brown-light);
  border-color: var(--batak-brown-medium);
}
```

### Method 4: JavaScript Color Objects

Import and use the color objects for programmatic access:

```tsx
import { batakColors, batakGradients } from '@/lib/colors';

// Use in style props
<div style={{ 
  backgroundColor: batakColors.brown.soft,
  color: batakColors.neutral.white,
  background: batakGradients.horizontal
}}>
  Programmatically styled
</div>

// Use in conditional styling
const getBackgroundColor = (theme: string) => {
  return theme === 'dark' ? batakColors.brown.dark : batakColors.brown.light;
};
```

### Method 5: Special Effects

Use predefined utility classes for special effects:

```tsx
// Gradient text
<h1 className="text-gradient-batak">
  Text with gradient effect
</h1>

// Gradient border
<div className="border-gradient-batak p-4">
  Element with gradient border
</div>
```

## Best Practices

### 1. Consistency
- Use the predefined color combinations (`batakColorClasses.combinations`) for UI components
- Stick to the color palette instead of custom colors
- Use semantic color names rather than specific hex values

### 2. Accessibility
- Ensure sufficient contrast between text and background colors
- Test your color combinations with accessibility tools
- The provided color palette generally follows accessibility guidelines

### 3. Color Usage Guidelines

**Primary Colors** (Use most frequently):
- `batak-brown-light` for light backgrounds and secondary elements
- `batak-brown-dark` for text and primary buttons
- `batak-cream` for content backgrounds

**Secondary Colors** (Use sparingly):
- `batak-brown-medium` for borders and accents
- `batak-brown-darker` for hover states and emphasis
- Gradient for hero sections and special elements

**Text Color Combinations**:
- Dark text on light backgrounds: `text-batak-brown-dark bg-batak-brown-light`
- Light text on dark backgrounds: `text-batak-cream bg-batak-brown-dark`
- Medium contrast: `text-batak-brown-medium bg-batak-cream`

### 4. Component Styling Examples

```tsx
// Button variants
<Button className="bg-batak-brown-dark text-batak-cream hover:bg-batak-brown-darker">
  Primary Button
</Button>

<Button className="bg-batak-brown-light text-batak-brown-dark hover:bg-batak-cream">
  Secondary Button
</Button>

// Card styling
<Card className="bg-batak-cream border-batak-brown-light">
  <CardHeader className="text-batak-brown-dark">
    Card Title
  </CardHeader>
  <CardContent className="text-batak-brown-medium">
    Card content
  </CardContent>
</Card>

// Navigation
<nav className="bg-batak-brown-dark">
  <a className="text-batak-cream hover:text-batak-brown-light">
    Navigation Link
  </a>
</nav>
```

## Available Color Classes

### Background Classes
- `bg-batak-brown-light`, `bg-batak-brown-dark`, `bg-batak-brown-medium`
- `bg-batak-cream`, `bg-batak-gray-light`, `bg-batak-gray-warm`
- `bg-batak-white`, `bg-batak-black`
- `bg-batak-gradient`, `bg-batak-gradient-horizontal`

### Text Classes
- `text-batak-brown-light`, `text-batak-brown-dark`, `text-batak-brown-medium`
- `text-batak-cream`, `text-batak-white`, `text-batak-black`

### Border Classes
- `border-batak-brown-light`, `border-batak-brown-dark`, `border-batak-brown-medium`
- `border-batak-cream`

### Special Effects
- `text-gradient-batak` - Gradient text effect
- `border-gradient-batak` - Gradient border effect

## Files Structure

```
src/
├── lib/
│   └── colors.ts          # Color definitions and utilities
├── components/
│   └── BatakColorShowcase.tsx  # Example component showing all usage methods
├── pages/
│   └── HomeWithBatakColors.tsx # Example page with Batak colors
├── index.css              # CSS variables and utilities
└── tailwind.config.js     # Tailwind configuration with color definitions
```

## Testing Your Colors

You can use the `BatakColorShowcase` component to see all colors in action:

```tsx
import BatakColorShowcase from '@/components/BatakColorShowcase';

// Add to your router or directly render to test colors
<BatakColorShowcase />
```

This will display all available colors, combinations, and usage examples in your browser.
