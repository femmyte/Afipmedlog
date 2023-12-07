// sendEmail.js
const transporter = require('./mailer');

async function sendEmail(to, subject, text) {
	try {
		const info = await transporter.sendMail({
			from: 'your-email@gmail.com',
			to,
			subject,
			text,
		});

		console.log('Email sent: ', info.response);
	} catch (error) {
		console.error('Error sending email: ', error.message);
	}
}

module.exports = sendEmail;
