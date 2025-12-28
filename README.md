# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✨ Modern and responsive design
- 🎨 Beautiful UI with smooth animations
- 📱 Mobile-first approach
- ⚡ Fast and optimized with Next.js
- 🎯 TypeScript for type safety
- 🎭 Tailwind CSS for styling
- 📧 Contact form
- 🔗 Social media links

## Sections

- **Hero**: Introduction and call-to-action
- **About**: Personal information and background
- **Skills**: Technical skills with progress bars
- **Projects**: Portfolio of featured projects
- **Contact**: Contact form and social links

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

1. **Personal Information**: Update your name, bio, and contact information in the component files:
   - `components/Hero.tsx` - Update name and title
   - `components/About.tsx` - Update about section content
   - `components/Contact.tsx` - Update email and social media links

2. **Skills**: Edit the skills array in `components/Skills.tsx` to reflect your technical skills

3. **Projects**: Update the projects array in `components/Projects.tsx` with your actual projects

4. **Colors**: Customize the color scheme in `tailwind.config.js`

5. **Contact Form**: Implement the backend functionality for the contact form submission handler in `components/Contact.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

