# Jotee - Technology Solutions Landing Page

A modern, responsive landing page for Jotee, a technology company specializing in computers, gadgets, peripherals, and CCTV solutions. Built with React, TypeScript, and Framer Motion for smooth animations and exceptional user experience.

## 🚀 Features

### 🎨 **Modern Design**

- **Exclusive UI Patterns**: Modern card designs, gradient backgrounds, glassmorphism effects
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Smooth Animations**: Framer Motion integration with staggered reveals and hover effects
- **Premium Color Scheme**: Consistent use of primary (green) and secondary (yellow) colors

### 📱 **Landing Page Sections**

- **Hero Section**: Animated text, CTA buttons, trust indicators, and floating background elements
- **Features Section**: Product categories with interactive cards and service features
- **Products Showcase**: Interactive product cards with ratings, reviews, and category filtering
- **Brands Section**: Slow marquee movement showcasing trusted brand partners
- **Statistics Section**: Animated counters and achievement awards
- **Testimonials Section**: Customer reviews with auto-playing carousel
- **Call-to-Action Section**: Multiple contact methods and special offers

### 🛠️ **Technical Features**

- **TypeScript**: Fully typed components with proper interfaces
- **Framer Motion**: Advanced animations with proper variant typing
- **Tailwind CSS**: Utility-first styling with custom color variables
- **Component Architecture**: Modular, reusable section components
- **Performance**: Optimized animations and efficient rendering

## 🛠️ **Tech Stack**

- **Frontend**: React 19.1.1
- **Language**: TypeScript 5.8.3
- **Build Tool**: Vite 7.1.6
- **Styling**: Tailwind CSS 4.1.13
- **Animations**: Framer Motion 12.23.15
- **Icons**: Lucide React 0.544.0
- **Routing**: React Router DOM 7.9.1

## 📦 **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/ogbajeleo/jotee.git
   cd jotee
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🚀 **Available Scripts**

| Script            | Description                        |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the development server       |
| `npm run build`   | Build the project for production   |
| `npm run preview` | Preview the production build       |
| `npm run lint`    | Run ESLint for code quality checks |

## 📁 **Project Structure**

```
jotee/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable components
│   │   ├── sections/      # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── ProductsShowcase.tsx
│   │   │   ├── BrandsSection.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── pages/             # Page components
│   │   └── landingPage/
│   │       └── index.tsx
│   ├── routes/            # Routing configuration
│   │   └── AppRoutes.tsx
│   ├── index.css          # Global styles
│   ├── main.tsx           # Application entry point
│   └── App.tsx            # Root component
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # Project documentation
```

## 🎨 **Design System**

### **Color Palette**

- **Primary**: `#22C55E` (Green)
- **Primary Dark**: `#16A34A`
- **Primary Light**: `#4ADE80`
- **Secondary**: `#FDE047` (Yellow)
- **Secondary Dark**: `#FACC15`

### **Typography**

- **Font Family**: Sansation (custom font)
- **Headings**: Bold, large sizes with gradient text effects
- **Body Text**: Clean, readable typography

### **Components**

- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, hover animations
- **Icons**: Lucide React icons throughout
- **Animations**: Framer Motion for smooth transitions

## 🚀 **Deployment**

### **Build for Production**

```bash
npm run build
```

### **Preview Production Build**

```bash
npm run preview
```

### **Deploy to Vercel**

1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on every push to main branch

### **Deploy to Netlify**

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy automatically on every push to main branch

## 🤝 **Contributing**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 **Code Style**

- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting (recommended)
- **TypeScript**: Strict type checking enabled
- **Component Structure**: Functional components with hooks
- **File Naming**: PascalCase for components, camelCase for utilities

## 🐛 **Troubleshooting**

### **Common Issues**

1. **Port already in use**

   ```bash
   npm run dev -- --port 3001
   ```

2. **TypeScript errors**

   ```bash
   npm run lint
   ```

3. **Build failures**
   ```bash
   npm run build
   npm run preview
   ```

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 **Support**

For support, email support@jotee.com .

## 🔗 **Links**

- **Live Demo**: [https://jotee.vercel.app](https://jotee.vercel.app)


---

**Made with ❤️ Ogbajeleo**
