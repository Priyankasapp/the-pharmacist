'use client'

import { useState, ChangeEvent, FormEvent } from "react";
import Button from "@/components/Button/Button";
import styles from "./ContactForm.module.css";
import { MailOpenIcon, MapIcon, PhoneCall } from "@/components/Icon/Icon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type } = e.target;
    
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else {
      const value = e.target.value;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  
    console.log("Form data submitted :", formData);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    });
  };

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
            <form onSubmit={handleSubmit}>
              <div className={styles["contact-input-box"]}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.phone}
                  onChange={handleChange}
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
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </div>
              
              <div className={styles["contact-input-box"]}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
                  checked={formData.privacy}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="privacy">
                  You agree to our friendly <a href="#">privacy policy.</a>
                </label>
              </div>
              
              <Button showArrow className={styles["contact-button"]} type="submit">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
