# 🚀 Francis Mbugua - Professional Portfolio

[![Portfolio Status](https://img.shields.io/badge/Status-Live-brightgreen)](https://francis297-web.github.io/personalportfolio)
[![HTML](https://img.shields.io/badge/HTML5-E34C26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, professional portfolio website showcasing projects, skills, and experience as a full-stack developer and founder of Nexora Technologies.

## ✨ Features

- 🎨 **Modern Dark Mode Design** - Elegant dark theme with smooth transitions
- 🌓 **Light/Dark Theme Toggle** - User preference-based theme switching
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Smooth Animations** - Engaging scroll reveal effects and transitions
- 📝 **Blog Section** - Share articles and insights with your audience
- 💬 **Testimonials** - Display client/colleague feedback
- 📧 **Newsletter Signup** - Build your email list with integrated form
- 🎯 **Call-to-Action Sections** - Strategically placed CTAs for conversions
- 📊 **Google Analytics Integration** - Track user behavior and engagement
- 🔍 **SEO Optimized** - Meta tags and semantic HTML for better search visibility
- ✉️ **Contact Form** - Get messages directly from potential clients
- ⬆️ **Back to Top Button** - Easy navigation for longer pages

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome 6.6.0
- **Styling**: Custom CSS with CSS Variables
- **Analytics**: Google Analytics
- **Hosting**: GitHub Pages (ready to deploy)

## 📁 Project Structure

```
personalportfolio/
├── index.html              # Main HTML file
├── CSS/
│   └── styles.css         # All styling and animations
├── js/
│   ├── main.js            # Core interactions & features
│   ├── loader.js          # Loading screen
│   ├── navbar.js          # Navigation functionality
│   ├── typing.js          # Typing effect
│   ├── particles.js       # Particle effects
│   ├── counter.js         # Counter animations
│   ├── theme.js           # Theme switching
│   └── cursor.js          # Custom cursor
├── images/                # Asset directory
├── README.md              # Documentation
└── .gitignore            # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime, etc.)
- Git (optional, for cloning)

### Installation

1. **Clone the Repository**
```bash
git clone https://github.com/Francis297-web/personalportfolio.git
cd personalportfolio
```

2. **Open in Browser**
```bash
# Using Python 3
python -m http.server 8000

# Or using Node.js
npx http-server
```

3. **Visit**
Open `http://localhost:8000` in your browser

Alternatively, simply open `index.html` directly in your browser.

## 📝 Customization Guide

### Update Your Information

**1. Personal Details (index.html)**
```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description here">
```

**2. Hero Section**
```html
<h1>Your Name <span>Here</span></h1>
<h2><span id="typing-text">Your Title</span></h2>
<p class="hero-description">Your bio...</p>
```

**3. Skills**
```html
<div class="skill-card">
    <i class="fab fa-skill-icon"></i>
    <h3>Skill Name</h3>
</div>
```

**4. Projects**
```html
<div class="project-card">
    <img src="images/project.png" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description</p>
    <div class="project-buttons">
        <a href="link">Live Demo</a>
        <a href="link">Source</a>
    </div>
</div>
```

**5. Blog Posts**
```html
<article class="blog-card">
    <div class="blog-date">
        <span class="day">15</span>
        <span class="month">Jul</span>
    </div>
    <h3>Article Title</h3>
    <p>Article preview...</p>
    <a href="#" class="read-more">Read More</a>
</article>
```

**6. Testimonials**
```html
<div class="testimonial-card">
    <p>"Your testimonial text"</p>
    <div class="testimonial-author">
        <img src="image.jpg" alt="Name">
        <div>
            <h4>Name</h4>
            <span>Position</span>
        </div>
    </div>
</div>
```

### Setup Google Analytics

1. Go to [Google Analytics](https://analytics.google.com)
2. Create a new property and get your Measurement ID
3. Update in `index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
    gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Color Customization

Edit CSS variables in `CSS/styles.css`:
```css
:root {
    --blue: #3B82F6;      /* Primary color */
    --purple: #8B5CF6;    /* Secondary color */
    --bg: #050816;        /* Background */
    --card: #0f172a;      /* Card background */
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ⚙️ Configuration

### Enable/Disable Features

**Theme Toggle** - Located in `js/main.js`
```javascript
// Theme toggle is automatically enabled
// Users can switch between light and dark modes
```

**Analytics** - Update your Google Analytics ID in `index.html`

**Newsletter Form** - Currently demonstrates functionality
- Connect to your email service (Mailchimp, Brevo, etc.)
- Update the form submission handler in `js/main.js`

**Contact Form** - Currently demonstrates functionality
- Connect to a backend service (EmailJS, Formspree, etc.)
- Update the form submission handler in `js/main.js`

## 🔐 Security Notes

- Never commit sensitive information (API keys, passwords)
- Use environment variables for sensitive data
- Validate all form inputs on the server-side
- Implement CSRF protection for forms

## 📊 Performance Tips

1. **Optimize Images**
   - Use compressed formats (WebP, AVIF)
   - Implement lazy loading
   - Use appropriate image sizes

2. **Code Splitting**
   - Consider bundling with Webpack for larger projects
   - Minify CSS and JavaScript

3. **Caching**
   - Enable browser caching
   - Use CDN for assets

## 🌐 Deployment

### GitHub Pages

1. Push to your GitHub repository
2. Go to Settings → Pages
3. Select main branch as source
4. Your site will be available at `https://username.github.io/personalportfolio`

### Other Platforms

- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload files and configure static hosting

## 📧 Email Integration

### Using Formspree
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- Your form fields -->
</form>
```

### Using EmailJS
```javascript
emailjs.send("SERVICE_ID", "TEMPLATE_ID", {
    from_name: name,
    to_email: "your@email.com",
    message: message
});
```

## 🐛 Troubleshooting

**Issue**: Styles not loading
- Clear browser cache (Ctrl+F5)
- Check file paths are correct
- Verify CSS file exists in `/CSS/` directory

**Issue**: JavaScript not working
- Check browser console for errors (F12)
- Verify all script tags are in correct order
- Ensure JavaScript files exist

**Issue**: Images not showing
- Check image file paths
- Verify images are in `/images/` directory
- Use correct file extensions

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome Icons](https://fontawesome.com/)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Francis Mbugua**
- GitHub: [@francis297-web](https://github.com/francis297-web)
- Email: contact@example.com (Update with your email)
- Website: [Your Portfolio URL]

## 🎯 Future Enhancements

- [ ] Dark mode animation improvements
- [ ] Advanced blog with markdown support
- [ ] Case studies section
- [ ] Project filtering by category
- [ ] Multilingual support
- [ ] Accessibility improvements (WCAG compliance)
- [ ] PWA (Progressive Web App) support
- [ ] CMS integration

---

**Made with ❤️ by Francis Mbugua**

⭐ If you find this portfolio useful, please consider giving it a star!
