'use client'

import styles from "./Footer.module.css"
import Link from 'next/link'
import { ChevronRight, ExternalLink, MailIcon, MapPin, PhoneIcon} from 'lucide-react'
import {nhs_providing_service, registered_pharmacy, ryft, secure_ssl} from "@/data/assets"
import Image from "next/image"
// icons 
const FacebookIcon = () =>(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-container']}>
        {/* footer-top  */}
        <div className={styles['footer-top']}>
          {/* column 1  */}
          <div className={styles['footer-col']}>
            <h3 className={styles['footer-heading']}>Legal & Safety</h3>
            <ul className={styles['footer-list']}>
              <li><Link href="/terms" className={styles['footer-links']}><ChevronRight/> Terms & Conditions</Link></li>
              <li><Link href="/privacy" className={styles['footer-links']}><ChevronRight/>Privacy Policy</Link></li>
              <li><Link href="/cookie-policy" className={styles['footer-links']}><ChevronRight/>Cookie Policy</Link></li>
              <li><Link href="/complaints" className={styles['footer-links']}><ChevronRight/>Complaints Procedure</Link></li>
              <li><Link href="/accessibility" className={styles['footer-links']}><ChevronRight/>Accessibility Statement</Link></li>
              <li><Link href="/about" className={styles['footer-links']}><ChevronRight/>About us</Link></li>
            </ul>  
          </div>

          {/* column 2  */}
          <div className={styles['footer-col']}>
            <h3 className={styles['footer-heading']}>Information</h3>
            <ul className={styles['footer-list']}>
              <li>
                <div className={styles['footer-links']} style={{pointerEvents:'none'}}>
                  <MapPin size={16}/> 10 High Street, Londonm UK 
                </div>
              </li>
              <li>
                <a href='tel:+441234567890' className={styles['footer-links']}>
                  <PhoneIcon size={16}/> +44 1234 567 890    
                </a>
              </li>
              <li>
                <a href="mailto:contact@yourpharmacy.co.uk" className={styles['footer-links']}>
                  <MailIcon size={16}/>contact@yourpharmacy.co.uk
                </a>
              </li>
            </ul>
          </div>

          {/* column 3  */}
          <div className={styles['footer-col']}>
            <h3 className={styles['footer-heading']}>Regulatory Informaiton</h3>
            <div className={styles['footer-text-con']}>
              <span>GPhC Registration:  </span>
              <span>Pharmacy: 1234567</span>
              <a href="#" target='_blank' className={styles['footer-external-link']}>Verify Registration<ExternalLink size={18}/></a>
            </div>

            <div className={styles['footer-text-con']}>
              <span>Superintendent Pharmacist:</span>
              <span>GPhc Reg: 12345678</span>
              <span>Dr. Sarah Johnson</span>
            </div>

            <div className={styles['footer-text-con']}>
              <span>Pharmacy Owner:</span>
              <span>Digital Health Pharmacy</span>
              <span>Company No: 12345678</span>
            </div>
          </div>
          {/* column 4   */}
          <div className={styles['footer-col']}>
            <h3 className={styles['footer-heading']}>Opening Hours</h3>
            <div className={styles['footer-text-con']}>
              <span>Monday-Friday</span>
              <span>09:00AM to 06:00PM</span>
            </div>
            <div className={styles['footer-text-con']}>
              <span>Saturday</span>
              <span>11:00AM to 3:00PM</span>
            </div>
            <div className={styles['footer-text-con']}>
              <span>Sunday</span>
              <span>Emergency Only</span>
            </div>
          </div>
          {/* column 5  */}
          <div className={styles['footer-col']}>
          <div className={styles['footer-icons']}>
            <a href="#" className={styles['footer-icon-btn']} aria-label='facebook-icon'>
              <FacebookIcon/>
            </a>
            <a href="#" className={styles['footer-icon-btn']} aria-label='twitter-icon'>
              <TwitterIcon/>
            </a>
            <a href="#" className={styles['footer-icon-btn']} aria-label='instagram-icon'>
              <InstagramIcon/>
            </a>
            <a href="#" className={styles['footer-icon-btn']} aria-label='linkedIn-icon'>
              <LinkedInIcon/>
            </a>
          </div>

          <div className={styles['footer-img']}>
            <Image
            src={registered_pharmacy}
            alt="Registered pharmacy"
            className={styles['footer-badge-img']}/>
              <Image
            src={nhs_providing_service}
            alt="Providing NHS Services"
            className={styles['footer-badge-img']}/>
              <Image
            src={secure_ssl}
            alt="secure SSL Encryption"
            className={styles['footer-badge-img']}/>
              <Image
            src={ryft}
            alt="ryft"
            className={styles['footer-badge-img']}/>
          </div>

          <div className={styles['footer-emergency']}>
            <span className={styles['footer-emergency-title']}>Medical Emeregency?</span>
            <span className={styles['footer-emergency-subtitle']}>Call 999 or visit A&E</span>
          </div>
          </div>
        </div>

        {/* middle section  */}
        <div className={styles['footer-middle']}>
          <div className={styles['footer-copyright']}>
            © 2024 Digital Health Pharmacy Ltd. All rights reserved.<br />
            Registered in England & Wales. Company No: 12345678
          </div>

          <div className="footer-middle-links">
            <a href="#" target="_blank" className="footer-external-link">
              GPhC Website <ExternalLink/>
            </a>
            <a href="#" target="_blank" className="footer-external-link">
              NHS Website <ExternalLink/>
            </a>
          </div>
        </div>

        {/* bottom section*/}
        <div className="footer-bottom">
          Powered by healthya | ConX
        </div>
      </div>

  
    </footer>
  )
}

export default Footer
