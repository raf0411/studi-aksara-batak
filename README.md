# Aksara Batak Website

A modern web application for learning and exploring the traditional Aksara Batak script. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Character Gallery** - Browse and explore Aksara Batak characters by category
- **Learning Center** - Structured lessons for learning the script step by step
- **Translator Tool** - Translate text between Latin script and Aksara Batak
- **Cultural Information** - Learn about the Batak people and their heritage
- **Responsive Design** - Works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

- **Frontend**: React + Vite + TypeScript
- **Styling**: Tailwind CSS + ShadCN/UI
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📦 Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd aksara-batak-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # ShadCN/UI components
│   ├── Layout.tsx      # Main layout component
│   └── Navbar.tsx      # Navigation component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Gallery.tsx     # Character gallery
│   ├── Learn.tsx       # Learning center
│   ├── Translator.tsx  # Translation tool
│   └── About.tsx       # About page
├── lib/                # Utility functions
│   └── utils.ts        # Helper utilities
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🎨 Design System

This project uses a consistent design system based on:

- **Tailwind CSS** for utility-first styling
- **ShadCN/UI** for pre-built accessible components
- **Framer Motion** for smooth animations
- **Lucide React** for icons

## 🌟 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- The Batak community for preserving this beautiful script
- Cultural experts and linguists who provided guidance
- All contributors and supporters of this preservation effort
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
