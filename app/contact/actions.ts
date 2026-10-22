"use server";

import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "@/sanity/env";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const initialError: ContactFormState = {
  status: "error",
  message: "Please check the form and try again.",
};

export async function submitContact(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Quietly discard bot submissions that fill the hidden honeypot field.
  if (String(formData.get("website") ?? "").trim()) {
    return { status: "success", message: "Thanks for contacting us. We’ll be in touch soon." };
  }

  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const privacyAccepted = formData.get("privacy") === "on";

  if (
    !fullName || fullName.length > 120 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 ||
    !phone || phone.length > 40 ||
    !subject || subject.length > 160 ||
    !message || message.length > 5000 ||
    !privacyAccepted
  ) {
    return initialError;
  }

  const token = process.env.SANITY_API_WRITE_TOKEN;
  if (!token) {
    console.error("Contact form is missing SANITY_API_WRITE_TOKEN.");
    return {
      status: "error",
      message: "The contact form is temporarily unavailable. Please try again later.",
    };
  }

  try {
    const writeClient = createClient({
      projectId,
      dataset,
      apiVersion,
      token,
      useCdn: false,
    });

    await writeClient.create({
      _type: "contactSubmission",
      fullName,
      email,
      phone,
      subject,
      message,
      privacyAccepted,
      submittedAt: new Date().toISOString(),
      status: "new",
    });

    return {
      status: "success",
      message: "Thanks for contacting us. We’ll be in touch soon.",
    };
  } catch (error) {
    console.error("Failed to save contact form submission to Sanity:", error);
    return {
      status: "error",
      message: "We couldn’t send your message. Please try again.",
    };
  }
}
