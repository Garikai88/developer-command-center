const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const sendContactEmail = ({ name, email, message }) => {
    return transporter.sendMail({
        from: `"Command Center" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `New Transmission from ${name}`,
        text: `From: ${name} (${email})\n\nMessage:\n${message}`,
        html: `
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `
    });
};

module.exports = { sendContactEmail };
