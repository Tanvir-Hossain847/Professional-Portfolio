# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (User ID)

## Step 5: Update Contact Component
In `src/components/Contact.jsx`, replace these placeholders:

```javascript
const serviceId = 'YOUR_SERVICE_ID' // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID' // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY' // Replace with your Public Key
```

## Step 6: Test the Form
1. Run your application
2. Fill out the contact form
3. Submit and check your email
4. Check EmailJS dashboard for delivery status

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content

## Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

## Pro Tips:
1. Set up email filters to organize contact form emails
2. Create an auto-reply template for better user experience
3. Monitor your monthly usage in the EmailJS dashboard
4. Test with different email providers to ensure delivery

## Troubleshooting:
- Check browser console for error messages
- Verify all IDs are correct
- Ensure email service is properly connected
- Check spam folder for test emails