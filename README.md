# TrendyPerks Landing Page

A modern, fully responsive static landing page website for an affiliate marketing project promoting rewards, perks, and opportunity-based offers.

## Project Overview

**Domain**: trendyperks.name.ng  
**Purpose**: Landing page that introduces rewards, perks, and opportunity-based offers  
**Goal**: Encourage users to explore offers and click affiliate links

## Features

- ✅ Fully responsive design (mobile-first approach)
- ✅ Modern, clean, and minimal design
- ✅ High contrast typography with friendly and trustworthy feel
- ✅ Fast load speed with optimized code
- ✅ SEO-friendly with proper meta tags and Open Graph tags
- ✅ Smooth animations and hover effects
- ✅ Accessibility features included
- ✅ Lazy loading for images
- ✅ Smooth scrolling navigation

## Sections

1. **Hero Section** - Main headline with call-to-action
2. **Featured Offers** - Grid of 6 offer cards with images and descriptions
3. **How It Works** - 3-step process explanation
4. **Trending Opportunities** - Additional opportunity highlights
5. **Social Proof** - Testimonials from users
6. **Call-to-Action** - Final conversion section
7. **Footer** - Navigation, copyright, and disclaimer

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern CSS with Grid, Flexbox, and CSS Variables
- **JavaScript ES6+** - Vanilla JavaScript for interactivity
- **Google Fonts** - Inter and Poppins fonts
- **No frameworks** - Pure static site for maximum performance

## Color Palette

- **Primary**: Deep Purple (#4f46e5)
- **Secondary**: Bright Orange (#f59e0b)
- **Accent**: Teal (#10b981)
- **Background**: Light/White
- **Text**: Dark Gray (#1f2937)

## Typography

- **Headings**: Poppins (300, 400, 500, 600, 700)
- **Body**: Inter (300, 400, 500, 600, 700)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Optimized CSS and JavaScript
- Lazy loading for images
- Minimal HTTP requests
- Fast loading times
- No external dependencies

## File Structure

```
trendyperks/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── assets/
│   └── images/         # Placeholder images for offers
└── README.md           # This file
```

## Development

This is a static site with no build process required. Simply open `index.html` in a browser to view the site.

### Local Development

1. Clone or download the project files
2. Open `index.html` in your preferred browser
3. Make edits to HTML, CSS, or JavaScript as needed
4. Refresh browser to see changes

### Image Assets

The site uses placeholder images located in `assets/images/`. Replace these with your actual offer images:

- `job-icon.png` - For job opportunities
- `gift-card-icon.png` - For gift card rewards
- `shopping-icon.png` - For shopping deals
- `survey-icon.png` - For paid surveys
- `hustle-icon.png` - For side hustles
- `finance-icon.png` - For financial perks

## Deployment

### Deploying to Render (Recommended)

Render is a cloud platform that makes it easy to deploy static sites.

#### Prerequisites

- GitHub account
- Render account (free tier available)

#### Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial trendyperks landing page"
   git branch -M main
   git remote add origin https://github.com/yourusername/trendyperks.git
   git push -u origin main
   ```

2. **Connect to Render**
   - Go to [render.com](https://render.com)
   - Sign up for a free account
   - Click "New +" and select "Static Site"

3. **Configure Deployment**
   - Connect your GitHub repository
   - Set the following configuration:
     - **Service type**: Static Site
     - **Name**: trendyperks (or your preferred name)
     - **Branch**: main
     - **Build command**: (leave blank)
     - **Publish directory**: `trendyperks` (the folder containing your site)
   - Click "Create Static Site"

4. **Custom Domain (Optional)**
   - In your Render dashboard, go to your site settings
   - Add your custom domain (trendyperks.name.ng)
   - Follow the DNS configuration instructions
   - Enable SSL (automatic with Render)

5. **Environment Variables**
   - No environment variables needed for this static site

#### Render Configuration

This project includes a `render.yaml` configuration file that forces static deployment:

```yaml
services:
  - type: web
    name: trendyperks
    env: static
    buildCommand: ""
    staticPublishPath: .
```

This configuration ensures Render treats the project as a static site and doesn't attempt to run npm or look for package.json.

### Alternative Deployment Options

#### Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Set publish directory to `trendyperks`
4. Deploy

#### Vercel
1. Push to GitHub
2. Import project in Vercel
3. Set output directory to `trendyperks`
4. Deploy

#### GitHub Pages
1. Push to GitHub
2. Go to repository settings
3. Enable GitHub Pages
4. Set source to `/root` and folder to `/trendyperks`
5. Your site will be available at `https://yourusername.github.io/trendyperks/`

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #4f46e5;
    --secondary-color: #f59e0b;
    --accent-color: #10b981;
}
```

### Content
Update text content in `index.html`:
- Headlines and descriptions
- Offer details and links
- Testimonials
- Footer information

### Images
Replace placeholder images in `assets/images/` with your actual images:
- Ensure images are optimized for web (compressed)
- Use appropriate dimensions (icons: 100x100px, hero images: 1200x600px)

### Affiliate Links
Update placeholder links (`https://example-offer-link.com`) with your actual affiliate links:
```html
<a href="YOUR_AFFILIATE_LINK_HERE" class="offer-button">View Offer</a>
```

## SEO Optimization

The site includes:
- Proper meta title and description
- Open Graph tags for social sharing
- Semantic HTML structure
- Alt text for images
- Structured content hierarchy

### Customizing SEO
Update meta tags in `index.html`:
```html
<title>Your Custom Title Here</title>
<meta name="description" content="Your custom description here">
<meta property="og:title" content="Your OG Title">
<meta property="og:description" content="Your OG Description">
```

## Analytics

To add analytics (Google Analytics, etc.), add your tracking code before the closing `</head>` tag in `index.html`:

```html
<!-- Add your analytics code here -->
<script>
  // Your analytics script
</script>
</head>
```

## Legal

### Disclaimer
The footer includes a standard disclaimer for affiliate marketing sites:
```html
<p class="disclaimer">This site promotes third-party offers and may receive compensation for referrals.</p>
```

### Privacy Policy
A placeholder privacy policy link is included. Create a proper privacy policy page and update the link:
```html
<a href="YOUR_PRIVACY_POLICY_URL" class="privacy-link">Privacy Policy</a>
```

## Troubleshooting

### Common Issues

1. **Images not loading**
   - Check file paths in HTML
   - Ensure images are in the correct directory
   - Verify image file formats

2. **CSS not applying**
   - Check CSS file path in HTML
   - Clear browser cache
   - Check browser developer tools for errors

3. **JavaScript not working**
   - Check script file path in HTML
   - Open browser developer console for errors
   - Ensure JavaScript is enabled in browser

4. **Mobile responsiveness issues**
   - Test in different screen sizes
   - Check CSS media queries
   - Verify viewport meta tag is present

### Performance Optimization

- Compress images before uploading
- Minify CSS and JavaScript (optional for this small site)
- Use a CDN for faster loading (Render provides this automatically)

## Support

For questions or issues with this template:

1. Check the troubleshooting section above
2. Review browser developer console for errors
3. Ensure all files are properly uploaded and linked

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

**Note**: This is a static landing page template. For affiliate marketing compliance, ensure you:
- Disclose affiliate relationships clearly
- Comply with FTC guidelines
- Include proper privacy policies
- Follow platform-specific affiliate program rules