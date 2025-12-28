# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it work:

## Step 1: Install the Package

Run this command in your terminal:
```bash
npm install @emailjs/browser
```

## Step 2: Sign Up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier allows 200 emails/month)

## Step 3: Create an Email Service

1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 4: Create an Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template structure:
   - **Subject**: `New Contact Form Message from {{from_name}}`
   - **Content**:
     ```
     You have a new message from your portfolio website!
     
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
4. **Copy your Template ID** (you'll need this)

## Step 5: Get Your Public Key

1. Go to **Account** → **General**
2. Find **API Keys** section
3. **Copy your Public Key**

## Step 6: Create Environment Variables

1. Create a file named `.env.local` in your project root (same folder as `package.json`)
2. Add these lines (replace with your actual values):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. **Important**: Never commit `.env.local` to git (it's already in `.gitignore`)

## Step 7: Restart Your Dev Server

After creating `.env.local`, restart your Next.js dev server:
```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## Step 8: Test It!

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox - you should receive the message!

## Troubleshooting

- **"Service ID not found"**: Make sure your `.env.local` file is in the project root and you've restarted the dev server
- **Emails not arriving**: Check your spam folder, and verify your EmailJS service is properly connected
- **Rate limit errors**: Free tier allows 200 emails/month. Upgrade if you need more

## For Production (Vercel)

When deploying to Vercel:
1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add the same three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
4. Redeploy your site

That's it! Your contact form will now send real emails to your inbox! 🎉

