# EmailJS Setup Instructions

To make the contact form functional, you need to set up EmailJS. Follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create an Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (rakshitmandloi@gmail.com)
5. Note down the **Service ID**

## 3. Create an Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{firstName}} {{lastName}}

From: {{firstName}} {{lastName}}
Email: {{email}}
Company: {{company}}
Project Type: {{projectType}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down the **Template ID**

## 4. Get Your Public Key
1. Go to "Account" -> "General"
2. Find your **Public Key**

## 5. Update the Code
In `src/app/page.tsx`, replace these placeholders with your actual values:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',    // Replace with your Service ID
  'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'     // Replace with your Public Key
);
```

## 6. Test the Form
1. Run your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Optional: Add Harshit's Email
To receive emails at both addresses:
1. In your EmailJS template, add both emails in the "To Email" field:
   - `rakshitmandloi@gmail.com, bansalharshit55@gmail.com`
2. Or create two separate services for each email

## Free Plan Limits
- 200 emails per month
- EmailJS branding in emails
- Upgrade to paid plan for more emails and remove branding

The contact form will now send emails directly from your frontend without needing a backend server!
