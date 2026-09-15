'use client'
import { ChevronRight, ExternalLink, MailIcon, MapPin, PhoneCallIcon, PhoneIcon } from "lucide-react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { FaceBookIcon, InstaIcon, LinkedIcon, nhs_providing_service, registered_pharmacy, ryft, secure_ssl, TwitterIcon } from "@/data/assets";
const Footer = () => {  
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-container']}>
        {/* top section  */}
        <div className={styles['footer-top-section']}>
          <div className={styles['footer-left-col-section']}>
            <div className={styles['footer-col']}>
              <span className={styles['footer-heading']}>Legal & Safety</span>
              <ul className={styles['footer-desc']}>
              <li>
                <Link href='/terms' className={styles['footer-links-wrapper']}>
                <ChevronRight size={20}/>
                <span>Terms & Conditions</span></Link>
              </li>
              <li>
                <Link href='/terms' className={styles['footer-links-wrapper']}>
                <ChevronRight size={20}/>
                <span>Privacy Policy</span></Link>
              </li>
              <li>
                <Link href='/terms' className={styles['footer-links-wrapper']}>
                <ChevronRight size={20}/>
                <span>Cookie Policy</span></Link>
              </li>
              <li>
                <Link href='/terms' className={styles['footer-links-wrapper']}>
                <ChevronRight size={20}/>
                <span>Complaints Procedure</span></Link>
              </li>
              <li>
                <Link href='/terms' className={styles['footer-links-wrapper']}>
                <ChevronRight size={20}/>
                <span>Accessibility Statement</span></Link>
              </li>
              <li>
                <Link href='/terms' className={styles['footer-links-wrapper']}>
                <ChevronRight size={20}/>
                <span>About Us</span></Link>
              </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <span className={styles['footer-heading']}>Information</span>
              <ul className={styles['footer-desc']}>
                <li>
                  <div className={styles['footer-links-wrapper']}>
                    <MapPin size={16}/>
                    <span>10 High Street, London UK</span>
                  </div>
                </li>
                <li>
                  <div className={styles['footer-links-wrapper']}>
                    <PhoneIcon size={16}/>
                    <span> +44 1234 567 890</span>
                  </div>
                </li>
                <li>
                  <div className={styles['footer-links-wrapper']}>
                    <MailIcon size={16}/>
                    <span>contact@yourpharmacy.co.uk</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className={styles['footer-col']}>
              <span className={styles['footer-heading']}>Regulatory Information</span>
              <div className={styles['footer-text-con']}>
                <span>GPhC Registration: </span>
                <span>Pharmacy: 1234567</span>
               <a href="#" target='_blank' className={styles['footer-external-link']}> <span>Verify Registration</span><ExternalLink size={18}/></a>
              </div>
               <div className={styles['footer-text-con']}>
                <span>Superintendent Pharmacist:</span>
                <span>Dr. Sarah Johnson</span>
                <span>GPhC Reg: 2345678</span>
              </div>
              <div className={styles['footer-text-con']}>
                <span>Pharmacy Owner:</span>
                <span>Digital Health Pharmacy Ltd</span>
                <span>Company No: 12345678</span>
              </div>
            </div>
          
           <div className={styles['footer-col']}>
              <span className={styles['footer-heading']}>Opening Hours</span>
              <div className={styles['footer-text-con']}>
                <span>Monday-Friday</span>
                <span>09:00AM to 06:00PM</span>
              </div>

            

              <div className={styles['footer-text-con']}>
                <span>Saturday</span>
                <span>11:00AM to 03:00PM</span>
              </div>

              <div className={styles['footer-text-con']}>
                <span>Sunday</span>
                <span>Emergency Only</span>
              </div>
            </div>
          
          </div>
          <div className={styles['footer-right-col-section']}>
          <div className={styles['footer-img-icon-wrapper']}>
              <div className={styles['footer-icons-wrappers']}>
              <a href="https://www.facebook.com/" className={styles['footer-icon-img-wrapper']}>
                <Image
                src={FaceBookIcon}
                alt="Facebook"
                className={styles['footer-icon-img']}
                />
              </a>
            </div>
            <div className={styles['footer-icons']}>
              <a href="https://x.com/" className={styles['footer-icon-img-wrapper']}>
                <Image
                src={TwitterIcon}
                alt="Twitter"
                className={styles['footer-icon-img']}
                />
              </a>
            </div>
            <div className={styles['footer-icons']}>
              <a href="https://www.instagram.com/" className={styles['footer-icon-img-wrapper']}>
                <Image
                src={InstaIcon}
                alt="Instagram"
                className={styles['footer-icon-img']}
                />
              </a>
            </div>
            <div className={styles['footer-icons']}>
              <a href="https://in.linkedin.com/" className={styles['footer-icon-img-wrapper']}>
                <Image
                src={LinkedIcon}
                alt="LinkedIn"
                className={styles['footer-icon-img']}
                />
              </a>
            </div>
          </div>
          <div className={styles['footer-middle-img-con']}>
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
            alt="Secure SSL Encryption"
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

        {/* bottom section  */}
        <div className={styles['footer-bottom-section']}> 
          
          {/* copyright section container  */}
          <div className={styles['footer-copyright-section']}>
            <div className={styles['footer-copyright-container']}>
              <div className={styles['footer-copyright']}>
                © 2024 Digital Health Pharmacy Ltd. All rights reserved. <br />
                Registred in England & Wales.Company No: 1234678
              </div>

              <div className={styles['footer-links']}>
                <a href="#" target="_blank" className={styles['footer-external-link']}>
                  GPhC Website <ExternalLink/>
                </a>
                <a href="#" target="_blank" className={styles['footer-external-link']}>
                  NHS Website <ExternalLink/>
                </a>
              </div>
            </div>
          </div>
         
         </div>
         <div className={styles['footer-powered-text']}>
            <span >Powered by healthya | ConX</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
