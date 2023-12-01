'use server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
	console.log(formData.get('email'));
	const email = formData.get('email');
	const did = formData.get('did');

	resend.emails.send({
		from: 'AFIP MEDLOG <onboarding@resend.dev>',
		to: email,
		subject: 'My DID',
		html: `<p>Get my health record with this DID <strong>${did}</strong>!</p>`,
	});
};
