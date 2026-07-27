// api/contact.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: VercelRequest, res: VercelResponse) {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Método no permitido" });
	}

	const { name, email, subject, message } = req.body || {};

	// Validaciones en backend
	if (!name || name.trim().length < 2) {
		return res
			.status(400)
			.json({ message: "El nombre debe tener al menos 2 caracteres." });
	}

	if (!email || !EMAIL_REGEX.test(email)) {
		return res
			.status(400)
			.json({ message: "El email proporcionado no es válido." });
	}

	if (!subject || subject.trim().length < 3) {
		return res
			.status(400)
			.json({ message: "El asunto debe tener al menos 3 caracteres." });
	}

	if (!message || message.trim().length < 10) {
		return res
			.status(400)
			.json({ message: "El mensaje debe tener al menos 10 caracteres." });
	}

	try {
		await resend.emails.send({
			from: "onboarding@resend.dev", // Cambia por tu dominio verificado si compras uno más adelante
			to: "tech.izzyverse@gmail.com", // Correo de destino extraído de tus datos de contacto
			subject: `[Soporte Web] ${subject.trim()}`,
			html: `
        <h2>Nuevo mensaje de soporte técnico</h2>
        <p><strong>Nombre:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Asunto:</strong> ${subject.trim()}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.trim()}</p>
      `,
		});

		return res
			.status(200)
			.json({ success: true, message: "Mensaje enviado exitosamente." });
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ message: "Ocurrió un error al enviar el correo." });
	}
}
