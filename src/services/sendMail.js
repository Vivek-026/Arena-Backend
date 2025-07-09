const  sender  = require('../config/emailConfig');

const sendBasicMail = async (mailFrom, mailTo, mailSubject, mailBody) => {
    try {
        const info = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody
        });
        console.log('Email sent: ', info.response || info.messageId);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = sendBasicMail;
