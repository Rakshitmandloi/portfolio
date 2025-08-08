# TechConsult - IT Consultancy Portfolio Website

A modern, dynamic portfolio website for an IT consultancy company built with Next.js 15, TypeScript, and cutting-edge UI libraries.

## 🚀 Features

- **Modern Design**: Professional, techie, and dynamic interface
- **Responsive**: Fully responsive design that works on all devices
- **Animated Background**: Dynamic particle system background
- **Smooth Animations**: Framer Motion powered animations throughout
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Built with Next.js App Router for optimal SEO
- **Dark Theme**: Professional dark theme with glass morphism effects

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **UI Components**: Radix UI
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
src/
├── app/
│   ├── about/           # About founders page
│   ├── contact/         # Contact form page
│   ├── projects/        # Projects showcase page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── ui/              # Reusable UI components
│   ├── AnimatedBackground.tsx
│   └── Navigation.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## 🌟 Pages

### Homepage
- Hero section with animated text and CTAs
- Services showcase with hover effects
- Call-to-action section

### About Us
- Founder profiles with achievements
- Company statistics
- Mission and vision statements

### Projects
- Project showcase with filtering
- Detailed project metrics
- Technology stack display

### Contact
- Functional contact form with validation
- Contact information cards
- Response time information

## 🎨 Design Features

- **Glass Morphism**: Modern glass effects throughout
- **Gradient Backgrounds**: Beautiful gradient overlays
- **Particle System**: Animated background particles
- **Hover Animations**: Interactive hover effects
- **Smooth Transitions**: Fluid page transitions
- **Professional Typography**: Clean, readable fonts

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build & Deploy

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. Push to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be available at `https://yourusername.github.io/portfolio-website`

## 🎯 Customization

### Founder Information
Update founder details in `/src/app/about/page.tsx`:
- Names, roles, and bios
- Achievements and skills
- Social media links
- Profile images

### Contact Information
Update contact details in `/src/app/contact/page.tsx`:
- Email address
- Phone number
- Office address
- Form submission handling

### Company Branding
- Update logo and company name in `Navigation.tsx`
- Modify color schemes in `tailwind.config.ts`
- Update metadata in `layout.tsx`

### Project Showcase
Add your projects in `/src/app/projects/page.tsx`:
- Project descriptions
- Technologies used
- Performance metrics
- Demo links

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for environment-specific settings:
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_CONTACT_EMAIL=hello@yourcompany.com
```

### Tailwind Configuration
Customize design tokens in `tailwind.config.ts`:
- Colors
- Fonts
- Spacing
- Animations

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px+

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js optimized images
- **Code Splitting**: Automatic code splitting with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support and questions:
- Email: hello@techconsult.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the TechConsult team
