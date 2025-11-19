require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

// Simple contact endpoint using SendGrid (configured via env)
const sgMail = require('@sendgrid/mail');
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (process.env.SENDGRID_API_KEY) {
    try {
      const msg = {
        to: process.env.ADMIN_EMAIL || 'you@example.com',
        from: process.env.FROM_EMAIL || 'hello@cloudsync.com',
        subject: `New contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone}</p><p><strong>Message:</strong><br/>${message}</p>`
      };
      await sgMail.send(msg);
      return res.json({ success: true });
    } catch (err) {
      console.error('SendGrid error', err);
    }
  }
  // fallback: pretend sent
  console.log('Contact received:', {name,email,phone,message});
  return res.json({ success: true, fallback:true });
});

// Simple portfolio API (read-only public)
const portfolio = require('./data/portfolio.json');
app.get('/api/portfolio', (req, res) => {
  res.json(portfolio);
});

// Mount admin routes (basic JWT-based) - kept simple for demo
const adminRouter = require('./admin');
app.use('/api/admin', adminRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
