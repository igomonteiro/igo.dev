"use server";

import { Resend } from "resend";

interface ContactForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export async function send({ name, email, subject, message }: ContactForm) {
	const resend = new Resend(process.env.RESEND_API_KEY);
	try {
		const { error } = await resend.emails.send({
			from: "onboarding@resend.dev",
			to: "igobmonteiro@gmail.com",
			subject: `${subject} from ${name}`,
			text: message,
		});
		if (error) {
			throw Error("Failed to sent email");
		}
		return { message: "E-mail sent" };
	} catch (err) {
		return { message: "Failed to send email" };
	}
}
