"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ExternalLink,
  MailIcon,
  MapPin,
  PhoneIcon,
} from "lucide-react";
import styles from "./Footer.module.css";
import {
  FaceBookIcon,
  InstaIcon,
  LinkedIcon,
  nhs_providing_service,
  registered_pharmacy,
  ryft,
  secure_ssl,
  TwitterIcon,
} from "@/data/assets";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={`container ${styles["footer-container"]}`}>
        {/* Top Section */}
        <div className={styles["footer-top-section"]}>
          {/* Left Columns */}
          <div className={styles["footer-left-col-section"]}>
            {/* Col 1: Legal & Safety */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-heading"]}>Legal & Safety</h3>
              <ul className={styles["footer-desc"]}>
                <li>
                  <Link href="/terms" className={styles["footer-links-wrapper"]}>
                    <ChevronRight size={16} />
                    <span>Terms & Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className={styles["footer-links-wrapper"]}>
                    <ChevronRight size={16} />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className={styles["footer-links-wrapper"]}>
                    <ChevronRight size={16} />
                    <span>Cookie Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href="/complaints" className={styles["footer-links-wrapper"]}>
                    <ChevronRight size={16} />
                    <span>Complaints Procedure</span>
                  </Link>
                </li>
                <li>
                  <Link href="/accessibility" className={styles["footer-links-wrapper"]}>
                    <ChevronRight size={16} />
                    <span>Accessibility Statement</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className={styles["footer-links-wrapper"]}>
                    <ChevronRight size={16} />
                    <span>About Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Information */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-heading"]}>Information</h3>
              <ul className={styles["footer-desc"]}>
                <li>
                  <div className={styles["footer-links-wrapper"]}>
                    <MapPin size={16} />
                    <span>10 High Street, London UK</span>
                  </div>
                </li>
                <li>
                  <a href="tel:+441234567890" className={styles["footer-links-wrapper"]}>
                    <PhoneIcon size={16} />
                    <span>+44 1234 567 890</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@yourpharmacy.co.uk" className={styles["footer-links-wrapper"]}>
                    <MailIcon size={16} />
                    <span>contact@yourpharmacy.co.uk</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Regulatory */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-heading"]}>Regulatory Info</h3>
              <div className={styles["footer-text-con"]}>
                <span>GPhC Registration:</span>
                <span>Pharmacy: 1234567</span>
                <a
                  href="https://www.pharmacyregulation.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["footer-external-link"]}
                >
                  <span>Verify Registration</span>
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className={styles["footer-text-con"]}>
                <span>Superintendent Pharmacist:</span>
                <span>Dr. Sarah Johnson</span>
                <span>GPhC Reg: 2345678</span>
              </div>

              <div className={styles["footer-text-con"]}>
                <span>Pharmacy Owner:</span>
                <span>Digital Health Pharmacy Ltd</span>
                <span>Company No: 12345678</span>
              </div>
            </div>

            {/* Col 4: Opening Hours */}
            <div className={styles["footer-col"]}>
              <h3 className={styles["footer-heading"]}>Opening Hours</h3>
              <div className={styles["footer-text-con"]}>
                <span className={styles["footer-day"]}>Monday - Friday</span>
                <span>09:00 AM – 06:00 PM</span>
              </div>

              <div className={styles["footer-text-con"]}>
                <span className={styles["footer-day"]}>Saturday</span>
                <span>11:00 AM – 03:00 PM</span>
              </div>

              <div className={styles["footer-text-con"]}>
                <span className={styles["footer-day"]}>Sunday</span>
                <span className={styles["footer-highlight"]}>Emergency Only</span>
              </div>
            </div>
          </div>

          <div className={styles["footer-right-col-section"]}>
            {/* Social Icons */}
            <div className={styles["footer-img-icon-wrapper"]}>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={styles["footer-icon-img-wrapper"]}
              >
                <Image src={FaceBookIcon} alt="Facebook" width={16} height={16} className={styles["footer-icon-img"]} />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className={styles["footer-icon-img-wrapper"]}
              >
                <Image src={TwitterIcon} alt="Twitter" width={16} height={16} className={styles["footer-icon-img"]} />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className={styles["footer-icon-img-wrapper"]}
              >
                <Image src={InstaIcon} alt="Instagram" width={16} height={16} className={styles["footer-icon-img"]} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={styles["footer-icon-img-wrapper"]}
              >
                <Image src={LinkedIcon} alt="LinkedIn" width={16} height={16} className={styles["footer-icon-img"]} />
              </a>
            </div>

            {/* Badges */}
            <div className={styles["footer-middle-img-con"]}>
              <Image src={registered_pharmacy} alt="Registered pharmacy" className={styles["footer-badge-img"]} />
              <Image src={nhs_providing_service} alt="Providing NHS Services" className={styles["footer-badge-img"]} />
              <Image src={secure_ssl} alt="Secure SSL Encryption" className={styles["footer-badge-img"]} />
              <Image src={ryft} alt="Ryft payment secure" className={styles["footer-badge-img"]} />
            </div>

            {/* Emergency Notice */}
            <div className={styles["footer-emergency"]}>
              <span className={styles["footer-emergency-title"]}>Medical Emergency?</span>
              <span className={styles["footer-emergency-subtitle"]}>Call 999 or visit your local A&E</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className={styles["footer-bottom-section"]}>
          <div className={styles["footer-copyright-container"]}>
            <p className={styles["footer-copyright"]}>
              © {new Date().getFullYear()} Digital Health Pharmacy Ltd. All rights reserved. <br />
              Registered in England & Wales. Company No: 12345678
            </p>

            <div className={styles["footer-links"]}>
              <a
                href="https://www.pharmacyregulation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-external-link"]}
              >
                GPhC Website <ExternalLink size={14} />
              </a>
              <a
                href="https://www.nhs.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles["footer-external-link"]}
              >
                NHS Website <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Powered By */}
        <div className={styles["footer-powered-text"]}>
          <span>Powered by healthya | ConX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;