# Dr. Sergey Galitskiy - Professional Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing academic achievements, research publications, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Academic Focus**: Dedicated sections for publications, research, and academic achievements
- **Interactive Elements**: Smooth scrolling navigation and hover effects
- **Contact Form**: Built-in contact form for professional inquiries
- **PDF Downloads**: Direct access to CV and Resume documents
- **External Links**: Integration with Google Scholar and LinkedIn profiles

## 🛠 Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Docker & Railway ready
- **Performance**: Optimized for fast loading and SEO

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Docker (for containerized deployment)

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sergey-galitskiy-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Docker Development

1. **Build the Docker image**
   ```bash
   docker build -t sergey-portfolio .
   ```

2. **Run the container**
   ```bash
   docker run -p 3000:3000 sergey-portfolio
   ```

   Or use Docker Compose:
   ```bash
   docker-compose up
   ```

## 🚢 Deployment

### Railway Deployment

1. **Connect your repository to Railway**
   - Visit [Railway.app](https://railway.app)
   - Create a new project from GitHub repository

2. **Configure environment variables** (if needed)
   - Set any required environment variables in Railway dashboard

3. **Deploy**
   - Railway will automatically detect the `railway.json` configuration
   - The app will build and deploy using the Dockerfile

### Manual Docker Deployment

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Build Docker image**
   ```bash
   docker build -t sergey-portfolio .
   ```

3. **Run in production**
   ```bash
   docker run -p 3000:3000 -e NODE_ENV=production sergey-portfolio
   ```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Experience.tsx     # Experience & education
│   ├── Publications.tsx   # Publications & research
│   ├── Contact.tsx        # Contact form
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   ├── CV_sergey.pdf      # CV document
│   └── Resume_DR. SERGEY GALITSKIY.pdf
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── railway.json           # Railway deployment config
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Edit the content in each component file
2. **Publications**: Update the publications array in `components/Publications.tsx`
3. **Experience**: Modify the experience data in `components/Experience.tsx`
4. **Contact Information**: Update contact details in `components/Contact.tsx`

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font imports in `app/globals.css`
- **Layout**: Adjust component layouts in individual component files

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `app/page.tsx`
3. Update navigation links in `components/Header.tsx`

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: sergey.galitskiy@email.com
- LinkedIn: [Dr. Sergey Galitskiy](https://www.linkedin.com/in/sergey-galitskiy/)

---

Built with ❤️ for academic excellence
