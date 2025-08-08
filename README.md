# React Vite Dashboard Boilerplate

A modern, feature-rich React dashboard boilerplate built with Vite, TypeScript, and the latest tools.

## ✨ Features

- ⚡ **Vite** - Fast development and build tool
- 🎯 **TypeScript** - Type safety and better DX
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Shadcn/UI** - Beautiful, accessible components
- 🌍 **Internationalization** - English and Indonesian support
- 🎭 **Three Themes** - Light, Dark, and Colorful modes
- 📱 **Responsive Design** - Resizable sidebar (desktop) + sheet (mobile)
- 🗂️ **Smart Routing** - React Router with dynamic breadcrumbs
- 📊 **State Management** - Zustand for client state
- 🔄 **Data Fetching** - TanStack Query for server state
- 📝 **Form Handling** - React Hook Form + Zod validation
- 🎨 **Icons** - Lucide React icon library

## 🚀 Quick Start

1. **Clone and install dependencies:**
```bash
npm install
```

2. **Setup Shadcn/UI components:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button sheet separator breadcrumb card badge table input label select textarea toast dropdown-menu avatar
```

3. **Start development server:**
```bash
npm run dev
```

4. **Build for production:**
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Shadcn components
│   ├── layout/          # Layout components
│   ├── forms/           # Form components
│   └── common/          # Shared components
├── hooks/               # Custom hooks
├── lib/                 # Utilities and config
├── pages/               # Page components
├── stores/              # Zustand stores
├── locales/             # Translation files
├── types/               # TypeScript types
└── styles/              # Global styles
```

## 🎨 Theme System

Three built-in themes:
- **Light** - Clean, minimal design
- **Dark** - Easy on the eyes
- **Colorful** - Vibrant, modern aesthetic

Toggle themes using the header button or programmatically:
```tsx
const { theme, setTheme, toggleTheme } = useTheme();
```

## 🌍 Localization

Currently supports English and Indonesian. Add new languages by:

1. Create translation file in `src/locales/[lang].json`
2. Import in `src/lib/i18n.ts`
3. Add to language switcher

```tsx
const { t } = useTranslation();
const localizedText = t('nav.dashboard');
```

## 📊 State Management

**Client State (Zustand):**
```tsx
const { user, theme, sidebarCollapsed } = useAppStore();
```

**Server State (TanStack Query):**
```tsx
const { data, isLoading, error } = useQuery({
  queryKey: ['products'],
  queryFn: fetchProducts
});
```

## 📱 Responsive Layout

- **Desktop/Tablet**: Resizable sidebar (200px - 400px)
- **Mobile**: Sheet drawer navigation
- **Auto-collapse**: Sidebar remembers state

## 🛠️ Customization

### Adding New Pages

1. Create page component in `src/pages/`
2. Add route to `src/App.tsx`
3. Add navigation item to sidebar
4. Add translations for breadcrumbs

### Styling Components

The boilerplate uses Tailwind utility classes with Shadcn/UI components. Customize the design system in:
- `tailwind.config.js` - Theme configuration
- `src/styles/globals.css` - CSS variables
- `components.json` - Shadcn/UI settings

### Adding Form Validation

Forms use React Hook Form + Zod:

```tsx
const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(schema)
});
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| React 18 | UI library |
| Vite | Build tool |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Shadcn/UI | Component library |
| React Router | Client-side routing |
| TanStack Query | Server state management |
| Zustand | Client state management |
| React Hook Form | Form handling |
| Zod | Schema validation |
| React i18next | Internationalization |
| Lucide React | Icons |

## 🎯 Use Cases

Perfect for:
- Admin dashboards
- SaaS applications
- Content management systems
- E-commerce backends
- Analytics platforms
- Internal tools

## 📄 License

MIT License - feel free to use this boilerplate for your projects!

---

Built with ❤️ using modern React ecosystem tools.