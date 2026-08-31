'use Client';
import { AboutHero } from "@/data/assets";
import styles from "./Hero.module.css";
import Image from "next/image";
const Hero = () =>{
  return(
    <div className={styles['about-hero']}> 
      {/* Left Section  */}
      <div className={styles['about-hero-left']}>
        <Image
          src={AboutHero}
          className={styles['about-hero-image']} 
          alt={"About Hero"}
          placeholder="blur"
          priority  />
      </div>
      {/* Right Section  */}
      <div className={styles['about-hero-right']}>
        <h2>We make accessing <span>healthcare</span> quick & easy.</h2>
        <p>We make accessing healthcare quick and easy by removing unnecessary steps and confusion. Our platform is designed to help you find the right treatments, trusted medical support, and clear guidance all in one place. With a focus on convenience, safety, and care, we help you manage your health with confidence and peace of mind.
        </p>
      </div>
    </div>
  );
};
export default Hero;