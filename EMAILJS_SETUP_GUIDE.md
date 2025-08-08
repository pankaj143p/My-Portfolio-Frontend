# 📧 Complete EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. **Visit EmailJS Website**
   - Go to: https://www.emailjs.com/
   - Click "Sign Up" (top right corner)

2. **Register Your Account**
   - Enter your email address
   - Create a password
   - Verify your email address
   - Complete the registration

---

## Step 2: Add Email Service (Get Service ID)

1. **Navigate to Email Services**
   - After login, click on "Email Services" in the left sidebar
   - Click "Add New Service" button

2. **Choose Your Email Provider**
   - **Gmail**: Most common choice
   - **Outlook/Hotmail**: Microsoft emails
   - **Yahoo**: Yahoo emails
   - **Custom SMTP**: For other providers

3. **Setup Gmail Service (Recommended)**
   - Click "Gmail"
   - Click "Connect Account"
   - Sign in with your Gmail account
   - Allow EmailJS permissions
   - Give your service a name (e.g., "Portfolio Contact")

4. **Get Your Service ID**
   - After setup, you'll see your service listed
   - **Copy the Service ID** (looks like: `service_xxxxxxx`)
   - This is your `VITE_EMAILJS_SERVICE_ID`

---

## Step 3: Create Email Template (Get Template ID)

1. **Navigate to Email Templates**
   - Click "Email Templates" in the left sidebar
   - Click "Create New Template"

2. **Configure Template Settings**
   - **Template Name**: "Portfolio Contact Form"
   - **From Name**: `{{from_name}}`
   - **From Email**: Your email (e.g., pankaj114477pankaj@gmail.com)
   - **To Email**: Your email (where you want to receive messages)

3. **Create Template Content**
   ```
   Subject: New Contact from {{from_name}} - {{subject}}
   
   Hello,
   
   You have received a new message from your portfolio contact form:
   
   Name: {{from_name}}
   Email: {{from_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   
   ---
   Sent from your portfolio website
   ```

4. **Test Template**
   - Click "Test It" button
   - Fill in sample values
   - Send test email to verify it works

5. **Save Template**
   - Click "Save"
   - **Copy the Template ID** (looks like: `template_xxxxxxx`)
   - This is your `VITE_EMAILJS_TEMPLATE_ID`

---

## Step 4: Get Public Key

1. **Navigate to Account Settings**
   - Click on your profile/account icon (top right)
   - Select "Account" or "General"

2. **Find Public Key**
   - Look for "Public Key" section
   - **Copy the Public Key** (long string of characters)
   - This is your `VITE_EMAILJS_PUBLIC_KEY`

---

## Step 5: Update Your .env File

Replace the placeholder values in your `.env` file:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_your_actual_id_here
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here

# Your email where you want to receive messages
VITE_CONTACT_EMAIL=pankaj114477pankaj@gmail.com
```

---

## Step 6: Enable Less Secure Apps (Gmail Only)

If using Gmail, you might need to:

1. **Option A: App Password (Recommended)**
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate app password for EmailJS

2. **Option B: OAuth2 (Automatic with EmailJS)**
   - EmailJS handles this automatically when you connect Gmail

---

## Step 7: Test Your Setup

1. **Restart Development Server**
   ```bash
   npm run dev
   ```

2. **Test Contact Form**
   - Fill out your contact form
   - Submit the form
   - Check your email inbox
   - Verify you received the test message

---

## 🔧 Troubleshooting

### Common Issues:

1. **401 Unauthorized Error**
   - Check if Public Key is correct
   - Verify Service ID matches your account

2. **Template Not Found**
   - Ensure Template ID is copied correctly
   - Check if template is saved and active

3. **Emails Not Receiving**
   - Check spam folder
   - Verify "To Email" in template settings
   - Test with EmailJS dashboard first

4. **CORS Errors**
   - Add your domain to EmailJS allowed origins
   - For development, add `http://localhost:5173`

---

## 📊 EmailJS Free Plan Limits

- **200 emails/month** (free)
- Upgrade available for higher limits
- All features available on free plan

---

## 🎯 Quick Checklist

- [ ] EmailJS account created
- [ ] Email service connected (Gmail recommended)
- [ ] Email template created and tested
- [ ] Service ID copied to .env
- [ ] Template ID copied to .env
- [ ] Public Key copied to .env
- [ ] Development server restarted
- [ ] Contact form tested successfully

---

## 📞 Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: Available in dashboard
- Test emails in EmailJS dashboard before implementing

---

**Once completed, your portfolio will have a fully functional contact form! 🎉**
