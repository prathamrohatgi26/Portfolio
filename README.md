# 👨‍💻 Pratham Rohatgi - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Frontend Engineer. Built with React and Vite for optimal performance and developer experience.

## 🚀 Live Demo

[View Portfolio](https://prathamrohatgi.vercel.app/)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Interactive Sections**: 
  - Hero section with animated hand wave
  - About section with downloadable CV
  - Skills showcase with proficiency levels
  - Portfolio with filterable project categories
  - Contact form with EmailJS integration
  - GitHub activity calendar
- **Performance Optimized**: Built with Vite for fast development and optimized builds
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 🛠️ Technologies Used

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **Vite 7.0.1** - Fast build tool and development server
- **CSS3/SCSS** - Custom styling with CSS variables and responsive design
- **JavaScript/TypeScript** - Modern ES6+ features

### Libraries & Tools
- **Swiper 8.4.5** - Touch slider for project showcases
- **React GitHub Calendar 4.5.9** - GitHub contribution calendar
- **EmailJS 3.10.0** - Contact form functionality
- **DayJS 1.11.13** - Date manipulation
- **Boxicons** - Icon library for UI elements

### Development Tools
- **ESLint** - Code linting and formatting
- **Jest & Testing Library** - Unit testing framework
- **Web Vitals** - Performance monitoring

## 📁 Project Structure

```
Portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/           # Images, PDFs, and static files
│   ├── components/       # React components organized by feature
│   │   ├── about/        # About section components
│   │   ├── contact/      # Contact form components
│   │   ├── footer/       # Footer component
│   │   ├── header/       # Navigation header
│   │   ├── home/         # Hero section components
│   │   ├── qualification/# Education/experience timeline
│   │   ├── recentWork/   # Recent projects showcase
│   │   ├── scrollup/     # Scroll to top button
│   │   ├── skills/       # Skills and technologies
│   │   └── work/         # Portfolio projects
│   ├── App.jsx          # Main application component
│   ├── App.css          # Global styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Base styles
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run test suite

## 🎨 Customization

### Personal Information
Update your personal details in the following files:
- `src/components/home/Data.jsx` - Name, title, and description
- `src/components/about/About.jsx` - About section content
- `src/components/about/Info.jsx` - Personal statistics

### Projects
Add or modify projects in `src/components/work/Data.jsx`:
```javascript
{
  id: 1,
  image: ProjectImage,
  title: "Project Name",
  category: "app", // or "web"
  link: "https://project-url.com"
}
```

### Skills
Update your skills in:
- `src/components/skills/Frontend.jsx` - Frontend technologies
- `src/components/skills/Other.jsx` - Backend and other skills

### Styling
- Global styles: `src/App.css`
- Component-specific styles: `src/components/[component]/[component].css`
- CSS variables for theming: Defined in `src/App.css`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### EmailJS Setup
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Update the EmailJS configuration in the contact component

### GitHub Calendar
Update the GitHub username in the qualification component to display your contribution activity.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with default settings

### Other Platforms
The project can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

While this is a personal portfolio, if you find any bugs or have suggestions for improvements, feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

- **Name**: Pratham Rohatgi
- **Email**: [prathamrohatgi@gmail.com]
- **LinkedIn**: [https://www.linkedin.com/in/pratham-rohatgi26 ]
- **GitHub**: [https://github.com/prathamrohatgi26 ]
- **Portfolio**: [https://prathamrohatgi.vercel.app ]

---

⭐ If you found this portfolio helpful, please give it a star!
