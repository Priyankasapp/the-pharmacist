'use client';

import { useActionState } from "react";
import Button from "@/components/Button/Button";
import styles from "./ContactForm.module.css";
import { MailOpenIcon, MapIcon, PhoneCall } from "@/components/Icon/Icon";
import { submitContact, type ContactFormState } from "@/app/contact/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

const ContactForm = () => {
  const [state, formAction, pending] = useActionState(submitContact, initialState);

  return (
    <div className={styles["contact"]}>
      <div className={styles["contact-container"]}>
        {/* left*/}
        <div className={styles["contact-left"]}>
          <h1>Get in Touch Today.</h1>
          <p>
            We&apos;d love to hear from you. Send us a message and we&apos;ll
            get back to you soon with help.
          </p>
          <div className={styles["contact-container-box"]}>
            <div className={styles["contact-box"]}>
              <div className={styles["contact-icon"]}>
                <PhoneCall />
              </div>
              <div>
                <h3>Call Us</h3>
                <p>
                  <a href="tel:+441234567890">+44 1234 567 890</a>
                </p>
              </div>
            </div>
            <div className={styles["contact-box"]}>
              <div className={styles["contact-icon"]}>
                <MailOpenIcon />
              </div>
              <div>
                <h3>Email Us</h3>
                <p>
                  <a href="mailto:contact@yourpharmacy.co.uk">contact@yourpharmacy.co.uk</a>
                </p>
              </div>
            </div>
            <div className={styles["contact-box"]}>
              <div className={styles["contact-icon"]}>
                <MapIcon />
              </div>
              <div>
                <h3>Find Us</h3>
                <p>10 High Street, London, UK</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className={styles["contact-right"]}>
          <h2>Send us a message</h2>
          <div className={styles["contact-form-container"]}>
            <form action={formAction} aria-busy={pending}>
              <div className={styles["contact-honeypot"]} aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              <div className={styles["contact-input-box"]}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  maxLength={120}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
              </div>
              
              <div className={styles["contact-input-box"]}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  maxLength={254}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                />
              </div>
              
              <div className={styles["contact-input-box"]}>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  maxLength={40}
                  placeholder="Enter your phone number"
                  autoComplete="tel"
                  required
                />
              </div>
              
              <div className={styles["contact-input-box"]}>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  maxLength={160}
                  placeholder="Enter subject"
                  required
                />
              </div>
              
              <div className={styles["contact-input-box"]}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  maxLength={5000}
                  placeholder="Your message"
                  rows={4}
                  required
                ></textarea>
              </div>
              
              <div className={styles["contact-textArea-box"]}>
                <input 
                  type="checkbox" 
                  id="privacy" 
                  name="privacy" 
                  required
                />
                <label htmlFor="privacy">
                  You agree to our friendly <a href="#">privacy policy.</a>
                </label>
              </div>
              
              {state.message && (
                <p className={`${styles["contact-form-message"]} ${styles[state.status]}`} role="status">
                  {state.message}
                </p>
              )}
              <Button showArrow className={styles["contact-button"]} type="submit" disabled={pending}>
                {pending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
