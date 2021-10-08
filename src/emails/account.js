const sgMail = require('@sendgrid/mail');
const mail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nratnovsky@me.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
};

const sendCancellationMail = ( email, name) => {
    sgMail.send({
        to: email,
        from: 'nratnovsky@me.com',
        subject: 'Task App Cancellation',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.
        \nBest Regards,\nTask App.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationMail
}
