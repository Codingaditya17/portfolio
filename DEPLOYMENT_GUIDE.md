# Complete Deployment Guide - Portfolio Website

Follow these steps to deploy your portfolio website to Vercel (permanent hosting).

---

## Step 1: Prepare Your Project

### 1.1 Check Your Files
Make sure you have:
- ✅ All your code files
- ✅ `package.json` with dependencies
- ✅ `.gitignore` file (should already exist)

### 1.2 Remove Unnecessary Files (Optional)
You can delete these if you want:
- `EMAILJS_SETUP.md` (if you're not using EmailJS)
- Any test files or temporary files

---

## Step 2: Create a GitHub Repository

### 2.1 Go to GitHub
1. Open your browser and go to [https://github.com](https://github.com)
2. Sign in to your account (or create one if you don't have it)

### 2.2 Create New Repository
1. Click the **"+"** icon in the top right corner
2. Select **"New repository"**

### 2.3 Repository Settings
Fill in the details:
- **Repository name**: `portfolio` (or any name you like)
- **Description**: "My personal portfolio website" (optional)
- **Visibility**: Choose **Public** (free) or **Private**
- **DO NOT** check "Initialize with README" (we'll add files manually)
- **DO NOT** add .gitignore or license (we already have them)

3. Click **"Create repository"**

---

## Step 3: Initialize Git and Push to GitHub

### 3.1 Open Terminal in Your Project
1. Open Cursor/VS Code
2. Open the terminal (Ctrl + ` or Cmd + `)
3. Make sure you're in your project directory: `/Users/adityapatel/portfolio`

### 3.2 Initialize Git (if not already done)
```bash
git init
```

### 3.3 Add All Files
```bash
git add .
```

### 3.4 Create First Commit
```bash
git commit -m "Initial commit - Portfolio website"
```

### 3.5 Connect to GitHub Repository
Replace `YOUR_USERNAME` with your actual GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
```

**Example:**
```bash
git remote add origin https://github.com/adityapatel/portfolio.git
```

### 3.6 Rename Branch to Main (if needed)
```bash
git branch -M main
```

### 3.7 Push to GitHub
```bash
git push -u origin main
```

**Note:** You'll be asked for your GitHub username and password. Use a **Personal Access Token** instead of password:
- Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate new token with `repo` permissions
- Use that token as your password

---

## Step 4: Deploy to Vercel

### 4.1 Go to Vercel
1. Open [https://vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"** (recommended)

### 4.2 Import Your Repository
1. After logging in, click **"Add New..."** → **"Project"**
2. You'll see a list of your GitHub repositories
3. Find your `portfolio` repository
4. Click **"Import"**

### 4.3 Configure Project Settings
Vercel will auto-detect Next.js settings. You can leave everything as default:

- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 4.4 Environment Variables (Optional)
If you have EmailJS set up, add these:
- Click **"Environment Variables"**
- Add:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your service ID
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your template ID
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your public key

### 4.5 Deploy!
1. Click **"Deploy"** button
2. Wait 2-3 minutes for the build to complete
3. 🎉 **Your site is now live!**

You'll get a URL like: `https://portfolio-xyz.vercel.app`

---

## Step 5: Custom Domain (Optional)

### 5.1 Add Domain
1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name (e.g., `adityapatel.dev`)
4. Click **"Add"**

### 5.2 Configure DNS
Vercel will show you DNS records to add:
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Add the DNS records Vercel provides
3. Wait for DNS propagation (can take up to 24 hours)

---

## Step 6: Future Updates

### 6.1 Make Changes Locally
Edit your files in Cursor/VS Code

### 6.2 Commit and Push
```bash
git add .
git commit -m "Update portfolio content"
git push
```

### 6.3 Automatic Deployment
Vercel will **automatically** detect the push and redeploy your site! No manual steps needed.

---

## Troubleshooting

### Issue: "Build failed"
**Solution:**
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Try running `npm run build` locally first

### Issue: "Module not found"
**Solution:**
- Make sure you've run `npm install` locally
- Check that all imports are correct
- Verify `node_modules` is in `.gitignore`

### Issue: "Environment variables not working"
**Solution:**
- Make sure variable names start with `NEXT_PUBLIC_` for client-side
- Redeploy after adding environment variables

### Issue: "Images not showing"
**Solution:**
- Make sure images are in `/public` folder
- Use paths like `/image.jpg` (not `/public/image.jpg`)
- Check file names match exactly (case-sensitive)

---

## Quick Command Reference

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Your message here"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main

# For future updates
git add .
git commit -m "Update message"
git push
```

---

## Summary

✅ **Step 1**: Prepare project  
✅ **Step 2**: Create GitHub repository  
✅ **Step 3**: Push code to GitHub  
✅ **Step 4**: Deploy to Vercel  
✅ **Step 5**: (Optional) Add custom domain  
✅ **Step 6**: Future updates are automatic!

**Your portfolio is now live 24/7!** 🚀

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Docs**: https://docs.github.com
- **Next.js Docs**: https://nextjs.org/docs

