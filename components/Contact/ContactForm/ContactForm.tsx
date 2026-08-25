
import styles from "./ContactForm.module.css"
import { Button } from "@/components/Button/Button"
import {PhoneCall,MailOpen, MapPin} from 'lucide-react'
const ContactForm = () => {
  return (
    <div className={styles['contact']}>
        <div className={styles['contact-container']}>
            {/* left*/}
            <div className={styles['contact-left']}>
                <h1>Get in Touch Today.</h1>
                <p>We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you soon with help.</p>

                <div className={styles['contact-container-box']}>
                    {/* box 1  */}
                    <div className={styles['contact-box']}>
                        {/* icon  */}
                    <div className={styles['contact-icon']}><PhoneCall /></div>
                    <div>
                        {/* detail  */}
                        <h3>Call Us</h3>
                        <p><a href="tel:+441234567890">+44 1234 567 890</a></p>
                    </div>
                    </div>
                    {/* box 2  */}
                    <div className={styles['contact-box']}>
                   <div className={styles['contact-icon']}>
                        {/* icon */}
                     <MailOpen /></div>
                    <div>
                        {/* detail  */}
                        <h3>Email Us</h3>
                        <p><a href="#">contact@yourpharmacy.co.uk</a></p>
                    </div>
                    </div>
                    {/* box 3  */}
                    <div className={styles['contact-box']}>
                   <div className={styles['contact-icon']}>
                     {/* icon */}
                     <MapPin /></div>
                    <div>
                        {/* detail  */}
                        <h3>Find Us</h3>
                        <p>10 High Street, London, UK</p>
                    </div>
                    </div>
                </div>

            </div>
            {/* right   */}
            <div className={styles['contact-right']}>
                <h2>Send us a message</h2>
                <div className={styles['contact-form-container']}>
                    <form>
                        <div className={styles['contact-input-box']}>
                            <label htmlFor="Full Name">Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        
                        <div className={styles['contact-input-box']}>
                            <label htmlFor="Email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email" />
                        </div>

                        <div className={styles['contact-input-box']}>
                            <label htmlFor="Phone number">Phone number</label>
                            <input type="tel" name="phone number" id="phone number" placeholder="Enter your phone number" />
                        </div>

                        <div className={styles['contact-input-box']}>
                            <label htmlFor="Subject">Subject</label>
                            <input type="text" name="subject" placeholder="Enter subject" />
                        </div>
                        <div className={styles['contact-input-box']}>
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" placeholder="Your message" rows={4}></textarea>
                        </div>
                        
                        <div className={styles['contact-textArea-box']}>
                            <input type="checkbox" name="privacy" id="privacy" />
                            <label htmlFor="privacy">You agree to our friendly 
                                <a href="#"> privacy policy.</a>
                            </label>
                        </div>

                        <Button>Send Message</Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
