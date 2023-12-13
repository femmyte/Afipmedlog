"use server";
import SendDidEmail from "@/email/send-did-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const sendEmail = async (formData) => {
  const email = formData.get("senderEmail");
  const did = formData.get("did");
  const name = formData.get("name");
  try {
    await resend.emails.send({
      from: "AFIP MEDLOG <onboarding@resend.dev>",
      to: email,
      subject: `Dr's DID`,
      reply_to: email,
      // html: `<p>Share your health record with me through this DID <br /> <strong>${did}</strong>!</p>`,
      react: <SendDidEmail name={name} did={did} />,
    });
  } catch (error) {
    console.log(error);
  }
};
