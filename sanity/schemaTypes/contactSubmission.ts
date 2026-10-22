import { defineField, defineType } from "sanity";

export const contactSubmissionType = defineType({
  name: "contactSubmission",
  title: "Contact Submission",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required().max(120),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email().max(254),
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) => Rule.required().max(40),
    }),
    defineField({
      name: "subject",
      title: "Subject",
      type: "string",
      validation: (Rule) => Rule.required().max(160),
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      validation: (Rule) => Rule.required().max(5000),
    }),
    defineField({
      name: "privacyAccepted",
      title: "Privacy Policy Accepted",
      type: "boolean",
      validation: (Rule) => Rule.required().custom((value) =>
        value === true ? true : "Consent is required to submit this message.",
      ),
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "In Progress", value: "inProgress" },
          { title: "Resolved", value: "resolved" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "fullName", subtitle: "subject" },
  },
});
