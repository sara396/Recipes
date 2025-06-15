
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "gmail", // אפשר גם SMTP של ספק אחר
    auth: {
        user: "s0534167916@gmail.com",
        pass: "your-app-password" // לא סיסמה רגילה, אלא App Password (אם בג'ימייל)
    }
});

  async function sendWelcomeEmail(toEmail, userName) {
    const mailOptions = {
        from: '"האתר שלי" <your-email@gmail.com>',
        to: toEmail,
        subject: "ברוך הבא!",
        text: `שלום ${userName}, נרשמת בהצלחה לאתר שלנו!`
    };

    return transporter.sendMail(mailOptions);
}


export default sendWelcomeEmail