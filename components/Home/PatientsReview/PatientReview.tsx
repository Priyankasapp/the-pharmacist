/* eslint-disable react/jsx-key */
'use client';
import { VectorEight } from "@/data/assets";
import styles from "./PatientReview.module.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { patients } from "@/lib/data";
import PatientsCard from "@/components/PatientsCard/PatientsCard";

const PatientReview = () => {
  return (
    <section className={styles['patient-review-section']}>
        {/* background img  */}
        <div className={styles['patient-review-bg-img-wrapper']}>
            <Image
            src={VectorEight}
            alt="vector Image"
            className={styles['patient-review-bg-img']}/>
        </div>

        <div className={styles['patient-review-info-con']}>
            {/* left section  */}
            <div className={styles['patient-review-left-section']}>
                <h2>Hear From Our <span>Patients</span></h2>

                <p>
                    Discover patient experiences that highlight our commitment to trusted care and professional guidance.
                </p>
                <div className={styles['patient-icon-wrapper']}>
                   <button> <ChevronLeft/></button>
                   <button><ChevronRight/></button>
                </div>
            </div>
            {/* right section  */}
            <div className={styles['patient-review-right-section']}>
                <div className={styles['patient-review-cards']}>
                    {patients.map((patient)=>(
                       <PatientsCard
                id={patient.id}
                title={patient.title}
                name={patient.name}
                rating={patient.rating}
                imgSrc={patient.imgSrc}
                description={patient.description}/>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PatientReview