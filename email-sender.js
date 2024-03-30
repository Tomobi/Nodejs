const nodemailer = require('nodemailer');


// Creating a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'random@gmail.com',
        pass: 'dvffdsfhnhgfngjm',
    },
});

// Defining email options
const mailOptions = {
    from: 'random@gmail.com ',
    to: 'random@gmail.com', 
    subject: 'Test Email',
    text: 'This is a test email sent from Node.js using Nodemailer.',
};

// Sending the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('There was an Error:', error);
    } else {
        console.log('Email sent successfully:', info.response);
    }
});