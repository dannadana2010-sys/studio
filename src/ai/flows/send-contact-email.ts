'use server';
/**
 * @fileOverview A flow for sending a contact form email.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const ContactFormInputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

// IMPORTANT: This API key is a placeholder and MUST be replaced with a real Resend API key.
// You should store your API key securely, for example in environment variables.
// For Firebase, you can use `firebase functions:config:set resend.apikey="YOUR_API_KEY"`
// and access it with `process.env.RESEND_APIKEY`.
// For local development, you can create a .env.local file with RESEND_API_KEY="re_12345678_1234567890abcdef"
const resend = new Resend(process.env.RESEND_API_KEY || 're_12345678_1234567890abcdef');

const sendContactEmailFlow = ai.defineFlow(
  {
    name: 'sendContactEmailFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: z.object({ success: z.boolean() }),
  },
  async (input) => {
    try {
      await resend.emails.send({
        from: 'onboarding@resend.dev', // This must be a verified domain on Resend
        to: 'Victoireluxuryservices@gmail.com',
        subject: `New Contact Form Submission from ${input.name}`,
        html: `
          <h1>New Contact Message</h1>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Phone:</strong> ${input.phone || 'Not provided'}</p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });
      return { success: true };
    } catch (error) {
      console.error('Error sending email:', error);
      // It's better to not throw the error to the client, but log it.
      // We return success: false to indicate failure.
      return { success: false };
    }
  }
);

export async function sendContactEmail(input: ContactFormInput): Promise<{ success: boolean }> {
    const result = await sendContactEmailFlow(input);
    if (!result.success) {
        // This will be caught by the try/catch block in the form component.
        throw new Error("Failed to send email.");
    }
    return result;
}
