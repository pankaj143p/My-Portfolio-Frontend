# 📧 EmailJS Template Setup Guide

## 🎯 You're Almost Done!

You already have your **Service ID** (`service_l4ikfgw`) configured. Now you just need to:
1. Create an email template 
2. Get your Template ID and Public Key

---

## 📋 Step 1: Create Email Template in EmailJS

1. **Go to EmailJS Dashboard**
   - Visit: https://dashboard.emailjs.com/admin
   - Login with your account

2. **Navigate to Email Templates**
   - Click "Email Templates" in the sidebar
   - Click "Create New Template"

3. **Template Settings**
   - **Template Name**: `Portfolio Contact Form`
   - **Subject**: `🚀 New Contact from {{from_name}} - {{subject}}`

4. **Template Content (Choose ONE option):**

### Option A: HTML Template (Recommended)
Copy the entire content from `EMAIL_TEMPLATE.html` file in your project folder.

### Option B: Simple Template
```html
Subject: 🚀 New Contact from {{from_name}} - {{subject}}

Hi Pankaj,

You have received a new message from your portfolio:

👤 FROM: {{from_name}}
📧 EMAIL: {{from_email}}
📝 SUBJECT: {{subject}}
🕐 TIME: {{current_date}} at {{current_time}}

💬 MESSAGE:
{{message}}

---
Reply directly to: {{from_email}}
Portfolio: {{portfolio_url}}

This message was sent from your portfolio contact form.
```

5. **Template Variables Used:**
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email  
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{current_date}}` - Date received
   - `{{current_time}}` - Time received
   - `{{portfolio_url}}` - Your portfolio URL
   - `{{reply_to}}` - Reply email address

6. **Save and Test**
   - Click "Save"
   - Click "Test It" with sample data
   - **Copy the Template ID** (looks like: `template_xxxxxxx`)

---

## 📋 Step 2: Get Your Public Key

1. **Navigate to Account Settings**
   - Click your profile icon → "Account"
   - Find "General" tab

2. **Copy Public Key**
   - Look for "Public Key" section
   - **Copy the key** (long string of characters)

---

## 📋 Step 3: Update Your .env File

Replace the placeholder values:

```env
# EmailJS Configuration  
VITE_EMAILJS_SERVICE_ID=service_l4ikfgw
VITE_EMAILJS_TEMPLATE_ID=template_your_actual_id_here  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here

# Your email where you want to receive messages
VITE_CONTACT_EMAIL=pankaj114477pankaj@gmail.com
```

---

## 📋 Step 4: Test Your Setup

1. **Restart Development Server**
   ```bash
   npm run dev
   ```

2. **Test Contact Form**
   - Fill out the form on your portfolio
   - Submit the message
   - Check your email inbox for the formatted message

---

## 🎨 Template Features

✅ **Professional Design**: Modern, responsive email layout  
✅ **Rich Formatting**: Beautiful HTML styling with gradients  
✅ **Sender Info**: Clear contact details with avatar  
✅ **Quick Reply**: Direct reply button with pre-filled content  
✅ **Metadata**: Timestamp and source tracking  
✅ **Mobile Friendly**: Responsive design for all devices  
✅ **Branding**: Your portfolio branding and colors  

---

## 🔧 Troubleshooting

### Template Not Working?
- Verify Template ID is correct in .env
- Check all template variables are spelled correctly
- Test template in EmailJS dashboard first

### Emails Not Receiving?
- Check spam/junk folder
- Verify email service is connected properly
- Test with a simple template first

### Public Key Issues?
- Make sure you're using the Public Key, not Private Key
- Copy the entire key including any special characters

---

## 📊 Email Template Preview

The HTML template includes:
- **Header**: Portfolio branding with gradient
- **Sender Card**: Professional contact information
- **Message Content**: Clean, readable message display  
- **Metadata**: Timestamp and source information
- **Quick Actions**: Direct reply button
- **Footer**: Portfolio link and branding

---

## ✅ Final Checklist

- [ ] Service ID: `service_l4ikfgw` ✅ (Already Done!)
- [ ] Template created in EmailJS dashboard
- [ ] Template ID copied to .env file
- [ ] Public Key copied to .env file  
- [ ] Development server restarted
- [ ] Contact form tested successfully

---

**Once complete, your portfolio will have a professional contact system! 🎉**

The beautiful email template will make your contact form responses look professional and organized.
