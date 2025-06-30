# Bianca Azurri Ragdolls - Professional Cat Breeder Website

A beautiful, modern website for a ragdoll cat breeder built with Next.js, React, and Tailwind CSS. This website features an elegant blue and white color scheme reminiscent of a serene winter landscape, perfectly matching the calm temperament of ragdoll cats.

## 🌟 Features

### Design & User Experience
- **Elegant Color Scheme**: Various shades of blue (navy, sky blue, powder blue) with crisp whites
- **Responsive Design**: Mobile-friendly layout that looks great on all devices
- **Modern UI**: Clean, spacious design with plenty of white space
- **Professional Typography**: Custom font combinations for headers and body text
- **Smooth Animations**: Hover effects and transitions for enhanced user experience

### Pages & Content
- **Homepage**: Hero section, introduction, featured cats, testimonials, and call-to-action
- **Available Cats**: Gallery of cats for sale with filtering options
- **About Us**: Breeder experience, credentials, and breeding philosophy
- **Ragdoll Breed Info**: Educational content about ragdoll characteristics and temperament
- **Care Guide**: Comprehensive tips for ragdoll cat care and health
- **Adoption Process**: Step-by-step guide with requirements and pricing
- **Contact**: Contact form, location, and contact information

### Key Components
- **Navigation**: Responsive navigation with mobile menu
- **Hero Section**: Full-screen hero with beautiful ragdoll imagery
- **Featured Cats**: Interactive cat cards with availability status
- **Testimonials**: Customer reviews with star ratings
- **Contact Form**: Functional contact form with validation
- **Footer**: Comprehensive footer with links and contact info

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom color palette
- **Icons**: Lucide React for beautiful icons
- **Fonts**: Inter (sans-serif) and Playfair Display (serif)

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ragdoll-cat-breeder
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
   Navigate to [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Color Palette

The website uses a carefully crafted color palette that evokes trust, calmness, and elegance:

- **Ragdoll Blue 50**: `#f0f9ff` (Powder Blue)
- **Ragdoll Blue 100**: `#e0f2fe` (Sky Blue Light)
- **Ragdoll Blue 200**: `#bae6fd` (Sky Blue)
- **Ragdoll Blue 600**: `#0284c7` (Primary Blue)
- **Ragdoll Blue 800**: `#075985` (Navy Blue)
- **Ragdoll Blue 900**: `#0c4a6e` (Navy Dark)
- **Ragdoll Gray 50**: `#f8fafc` (Crisp White)
- **Ragdoll Gray 200**: `#e2e8f0` (Silver)

## 📁 Project Structure

```
ragdoll-cat-breeder/
├── app/
│   ├── globals.css           # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with navigation and footer
│   ├── page.tsx             # Homepage
│   ├── about/
│   │   └── page.tsx         # About us page
│   ├── available-cats/
│   │   └── page.tsx         # Available cats gallery
│   ├── breed-info/
│   │   └── page.tsx         # Ragdoll breed information
│   ├── care-guide/
│   │   └── page.tsx         # Cat care guide
│   ├── contact/
│   │   └── page.tsx         # Contact page with form
│   └── adoption-process/
│       └── page.tsx         # Adoption process guide
├── components/
│   ├── Navigation.tsx       # Header navigation component
│   ├── Footer.tsx          # Footer component
│   ├── HeroSection.tsx     # Homepage hero section
│   ├── FeaturedCats.tsx    # Featured cats section
│   └── Testimonials.tsx    # Customer testimonials
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── package.json           # Project dependencies
```

## 🐱 Content Features

### Cat Profiles
Each cat profile includes:
- High-quality photos
- Name, color, age, and gender
- Price and availability status
- Personality description
- Parent information
- Contact options

### Breed Information
Comprehensive ragdoll breed guide covering:
- Physical characteristics and size
- Temperament and personality traits
- Color patterns and variations
- Health information and lifespan
- Care requirements

### Adoption Process
Detailed 6-step adoption process:
1. Initial Contact
2. Application & Screening
3. Meet & Match
4. Reservation & Contract
5. Preparation Period
6. Going Home

## 📧 Contact Form

The contact form includes:
- Required fields validation
- Specific cat interest selection
- Responsive design
- Form submission handling (ready for backend integration)

## 🔧 Customization

### Adding New Cats
To add new available cats, edit the `availableCats` array in `app/available-cats/page.tsx`:

```typescript
{
  id: 7,
  name: "New Cat Name",
  color: "Color Point",
  age: "X weeks",
  gender: "Male/Female",
  price: "$X,XXX",
  image: "image-url",
  status: "available",
  description: "Cat description",
  parents: "Parent names"
}
```

### Updating Contact Information
Modify contact details in:
- `components/Footer.tsx`
- `app/contact/page.tsx`

### Customizing Colors
Update the color palette in `tailwind.config.js` under the `ragdoll-blue` and `ragdoll-gray` color definitions.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Optimized

- Semantic HTML structure
- Meta descriptions and titles
- Optimized images with alt text
- Clean URL structure
- Fast loading times

## 🚀 Deployment

The website can be deployed to various platforms:

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload the 'out' folder to Netlify
```

### Other Platforms
The website supports any platform that can host static files or Node.js applications.

## 📄 License

This project is created for educational and demonstration purposes. All images used are from Unsplash and are free for commercial use.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📞 Support

For questions about this website template, please create an issue in the repository.

---

**Built with ❤️ for ragdoll cat lovers everywhere** 