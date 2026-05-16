# Anurag Tiwari — Portfolio Website
## Deployment Guide & Customization Instructions

---

## 🚀 Quick Start

```bash
cd d:\Portfolio
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173)

---

## 📁 Folder Structure

```
d:\Portfolio\
├── public/
│   ├── favicon.svg          ← Your logo (AT initials gradient)
│   ├── resume.pdf           ← ⚠️ PLACE YOUR RESUME HERE
│   └── og-image.jpg         ← Social share preview image (1200x630px)
├── src/
│   ├── assets/
│   │   └── profile.jpg      ← ⚠️ PLACE YOUR PHOTO HERE
│   ├── components/          ← All UI components (modular, reusable)
│   ├── context/
│   │   └── ThemeContext.jsx ← Dark/light mode logic
│   ├── data/
│   │   ├── skills.js        ← ⚠️ Edit your skills & proficiency levels
│   │   ├── projects.js      ← ⚠️ Add your real project links
│   │   └── socialLinks.js   ← ⚠️ Update TODOs with your links/email
│   ├── App.jsx              ← Main app assembly
│   └── index.css            ← Global styles & design tokens
├── index.html               ← SEO meta tags
├── tailwind.config.js       ← Design system tokens
└── package.json
```

---

## ✏️ Personalization Checklist

### 1. Add Your Profile Photo
Place your photo at `src/assets/profile.jpg`, then in `src/components/Hero.jsx`:

```jsx
// Replace the initials div with:
import profilePhoto from '../assets/profile.jpg';

// Then in JSX:
<img src={profilePhoto} alt="Anurag Tiwari" className="w-full h-full object-cover" />
```

### 2. Add Your Resume
Copy your resume PDF to `public/resume.pdf`

### 3. Update Social Links & Email
Open `src/data/socialLinks.js` and fill in all `// TODO:` items:
- LeetCode profile URL
- HackerRank profile URL  
- YouTube channel URL
- Twitter/X profile URL
- WhatsApp number (`wa.me/91XXXXXXXXXX`)
- Your email address

### 4. Update Contact Email
In `src/components/Contact.jsx` and `src/components/SocialLinks.jsx`, replace `your@email.com`

### 5. Add Real Projects
In `src/data/projects.js`, update each project with:
- Real GitHub repo links
- Live demo URLs
- Project screenshots

### 6. Enable EmailJS Contact Form
1. Create account at [emailjs.com](https://www.emailjs.com/)
2. Create an Email Service + Template
3. In `src/components/Contact.jsx`, uncomment the EmailJS code and add your keys

---

## 🌐 Deployment

### Option A: Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel login
vercel --prod
```
Your site goes live at `https://portfolio-[hash].vercel.app`

### Option B: Netlify

```bash
npm run build
# Then drag the 'dist' folder to netlify.com/drop
# OR use Netlify CLI:
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Option C: GitHub Pages

```bash
npm install -D gh-pages
# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"
npm run deploy
```

---

## 🔗 Custom Domain Setup

### On Vercel:
1. Go to your project dashboard → **Settings** → **Domains**
2. Add your domain (e.g., `anuragtiwari.dev`)
3. Update your domain's DNS with Vercel's nameservers

### On Netlify:
1. Go to **Domain Settings** → **Add Custom Domain**
2. Add a CNAME record: `www → your-site.netlify.app`
3. Add an ALIAS record: `@ → your-site.netlify.app`

### Recommended Domain Registrars:
- **Namecheap** (~$8-10/year for `.dev`)
- **Porkbun** (cheapest)
- **Google Domains**

---

## 🎨 Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | Indigo | `#6366F1` |
| Secondary | Violet | `#8B5CF6` |
| Accent | Cyan | `#06B6D4` |
| Dark BG | Deep Navy | `#0F0F1A` |
| Card BG | Dark Blue | `#1A1A2E` |
| Text | Slate | `#E2E8F0` |

---

## 🔤 Fonts

| Usage | Font | Weight |
|-------|------|--------|
| Headings | Space Grotesk | 600-700 |
| Body | Inter | 400-500 |
| Code/Tech | JetBrains Mono | 400-500 |

---

## ⚡ Performance Tips

- Compress your profile photo to under 200KB (use [squoosh.app](https://squoosh.app))
- Compress your resume PDF (use [ilovepdf.com](https://ilovepdf.com))
- Run `npm run build` to check bundle size before deployment

---

## 📊 Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 90+ |
| SEO | 95+ |
