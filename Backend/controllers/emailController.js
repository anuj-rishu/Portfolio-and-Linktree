const transporter = require('../config/emailConfig');

const sendEmails = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Auto-reply to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out! We have received your message and will get back to you soon.</p>
        <p>Here's what you sent us:</p>
        <p>${message}</p>
        <br>
        <p>Best regards,</p>
        <p>Your Team</p>
      `
    };

    // Send emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({ success: true, message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ success: false, message: 'Failed to send emails' });
  }
};

module.exports = { sendEmails };