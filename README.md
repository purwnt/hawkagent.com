# HawkAgent.com - Premium Domain Landing Page

A modern React landing page for HawkAgent.com, built with Vite, Tailwind CSS, and shadcn/ui components. Ready for deployment to Cloudflare Pages.

## Features
- Responsive design with dark mode support
- Animated UI components
- Professional domain showcase with use cases
- Contact modal for domain inquiries
- Optimized for production deployment

## Project Structure
```
hawkagent.com/
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── lib/utils.js       # Utility functions
│   ├── assets/            # Images and static assets
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   └── main.jsx           # Entry point
├── dist/                  # Build output (gitignored)
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── index.html             # HTML entry point
```

## Development

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The development server will start at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist/` directory.

## Deployment to Cloudflare Pages

### Prerequisites
1. A Cloudflare account (free tier works)
2. The project files in a Git repository (GitHub, GitLab, Bitbucket)

### Deployment Steps

#### Option 1: Direct Upload (No Git Required)
1. Run the build command:
   ```bash
   npm run build
   ```
2. Log in to your Cloudflare Dashboard
3. Navigate to **Pages** in the sidebar
4. Click **Create a project** → **Upload assets**
5. Drag and drop the entire `dist/` folder or zip it and upload
6. Click **Deploy project**
7. Your site will be live at `https://your-project.pages.dev`

#### Option 2: Git Integration (Recommended)
1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. In Cloudflare Dashboard → **Pages** → **Connect to Git**
3. Authorize Cloudflare to access your Git provider
4. Select your repository
5. Configure build settings:
   - **Framework preset**: None (or Vite if available)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (root of repository)
6. Click **Save and Deploy**
7. Cloudflare will automatically build and deploy on every push to main

#### Option 3: Using Wrangler CLI
1. Install Wrangler:
   ```bash
   npm install -g wrangler
   ```
2. Login to Cloudflare:
   ```bash
   wrangler login
   ```
3. Build the project:
   ```bash
   npm run build
   ```
4. Deploy:
   ```bash
   wrangler pages deploy dist --project-name=hawkagent
   ```

### Custom Domain Setup
1. In Cloudflare Dashboard → **Pages** → Select your project
2. Go to **Custom domains** tab
3. Click **Set up a domain**
4. Enter your domain (hawkagent.com)
5. Follow the DNS configuration instructions
6. Cloudflare will automatically provision SSL certificates

### Environment Variables
This project doesn't require environment variables, but if needed:
- Add them in Cloudflare Pages dashboard → **Settings** → **Environment variables**
- They will be available during the build process

### Continuous Deployment
With Git integration, every push to your main branch will automatically:
1. Trigger a new build
2. Run `npm run build`
3. Deploy the `dist/` folder
4. Make your site live within seconds

## File Structure for Deployment
Cloudflare Pages expects these files in the build output:
- `index.html` - Entry point
- `assets/` - CSS, JS, and image files
- Static assets served from root

The Vite build automatically generates this optimized structure.

## Troubleshooting

### Build Fails
- Ensure all dependencies are installed: `npm install`
- Check Node.js version (16+ recommended)
- Verify `dist/` directory is empty before building

### Deployment Issues
- Confirm build command is `npm run build`
- Verify output directory is `dist`
- Check Cloudflare build logs for errors

### Custom Domain Problems
- DNS propagation can take up to 24 hours
- Ensure CNAME record points to your Pages URL
- SSL certificates are provisioned automatically

## License
This project is for demonstration purposes. The HawkAgent.com domain showcase content is for marketing the domain sale.

For support or inquiries about the domain, contact: domains@hawkagent.com