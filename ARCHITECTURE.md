# Portfolio - Senior-Level Folder Structure

## 📁 Project Architecture

```
src/
├── assets/              # Static assets (images, fonts, etc.)
│   └── projects/        # Project screenshots
│
├── components/          # React components
│   ├── sections/        # Page sections (Hero, About, etc.)
│   │   ├── index.ts    # Barrel export for all sections
│   │   └── *.tsx       # Individual section components
│   │
│   ├── shared/          # Shared/common components
│   │   ├── index.ts    # Barrel export for shared components
│   │   ├── Navbar.tsx  # Navigation bar
│   │   └── Footer.tsx  # Footer component
│   │
│   └── ui/              # Reusable UI components (shadcn/ui)
│       └── *.tsx        # Atomic UI components
│
├── constants/           # Application constants and data
│   ├── index.ts        # Barrel export
│   └── portfolio-data.ts # Portfolio content data
│
├── context/             # React context providers
│   └── theme-provider.tsx # Dark/Light theme context
│
├── lib/                 # Utility functions and helpers
│   └── utils.ts        # Shared utility functions
│
├── pages/               # Route/Page components
│   ├── index.ts        # Barrel export for all pages
│   ├── Home.tsx        # Homepage
│   ├── ProjectsListPage.tsx    # All projects listing
│   └── ProjectDetailPage.tsx   # Individual project details
│
├── types/               # TypeScript type definitions
│   ├── index.ts        # Barrel export
│   └── portfolio.ts    # Portfolio-related types
│
├── App.tsx              # Main app component with routing
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind config

```

## 🎯 Key Principles

### 1. **Barrel Exports (index.ts)**
Each major folder has an `index.ts` for clean imports:

```typescript
// ❌ Before (multiple imports)
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";

// ✅ After (single import)
import { HeroSection, AboutSection } from "@/components/sections";
```

### 2. **Separation of Concerns**

- **Pages**: Route-level components (Home, Projects List, Project Detail)
- **Sections**: Reusable page sections (Hero, Experience, Skills)
- **Shared**: Common components used across pages (Navbar, Footer)
- **UI**: Atomic, reusable UI components (Button, Card, Badge)

### 3. **Type Safety**
All types centralized in `types/` folder with barrel exports:

```typescript
import type { Project, WorkExperience } from "@/types";
```

### 4. **Constants Organization**
All static data in `constants/` with single import point:

```typescript
import { PROJECTS, PERSONAL_INFO, SOCIAL_LINKS } from "@/constants";
```

## 📦 Import Patterns

### Absolute Imports (using `@/` alias)
```typescript
import { Component } from "@/components/sections";  // ✅
import { PROJECTS } from "@/constants";             // ✅
import type { Project } from "@/types";             // ✅
```

### Component Imports
```typescript
// Page components
import { Home, ProjectsListPage } from "@/pages";

// Section components
import { HeroSection, ProjectsSection } from "@/components/sections";

// Shared components
import { Navbar, Footer } from "@/components/shared";

// UI components (no barrel export - too many)
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
```

## 🚀 Benefits

1. **Maintainability**: Clear separation makes code easier to maintain
2. **Scalability**: Easy to add new features without restructuring
3. **Developer Experience**: Clean imports, easy to navigate
4. **Type Safety**: Centralized types prevent inconsistencies
5. **Reusability**: Components are organized by purpose
6. **Team Collaboration**: Consistent structure for all developers

## 🔄 Adding New Features

### Adding a New Page:
1. Create component in `src/pages/NewPage.tsx`
2. Export in `src/pages/index.ts`
3. Add route in `src/App.tsx`

### Adding a New Section:
1. Create component in `src/components/sections/NewSection.tsx`
2. Export in `src/components/sections/index.ts`
3. Import and use: `import { NewSection } from "@/components/sections"`

### Adding New Data:
1. Add constants to `src/constants/portfolio-data.ts`
2. Export in `src/constants/index.ts`
3. Add types to `src/types/portfolio.ts`
4. Export in `src/types/index.ts`

## 🎨 Styling Conventions

- **Tailwind CSS** for all styling
- **Dark mode** support via `theme-provider`
- **Semantic color classes**: `text-foreground`, `bg-card`, etc.
- **Responsive**: Mobile-first approach

## 📝 Code Quality

- ✅ No duplicate files
- ✅ Consistent import patterns
- ✅ TypeScript strict mode
- ✅ Proper component naming
- ✅ Clean barrel exports
- ✅ Organized by feature/purpose
