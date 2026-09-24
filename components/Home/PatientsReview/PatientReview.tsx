    
    'use client';
    import { VectorEight } from "@/data/assets";
    import styles from "./PatientReview.module.css";
    import Image from "next/image";
    import { ChevronLeft, ChevronRight } from "lucide-react";
    import { patients } from "@/lib/data";
    import PatientsCard from "@/components/PatientsCard/PatientsCard";
    import { useState } from "react";

    const PatientReview = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
        
        const handlePrevious = () =>{
            setCurrentIndex((prevIndex)=>
            prevIndex === 0 ? patients.length-1 : prevIndex - 1)
        };

        const handleNext = () => {
            setCurrentIndex((prevIndex)=>
            prevIndex === patients.length - 1 ? 0 : prevIndex + 1);
        };
    const CARD_WIDTH = 400;
    const GAP = 20;
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
                    <button type="button" onClick={handlePrevious} aria-label="previous"> <ChevronLeft/></button>
                    <button type="button" onClick={handleNext} aria-label="next"><ChevronRight/></button>
                    </div>
                </div>
                {/* right section  */}

                <div className={styles['patient-review-right-section']}>
                    <div className={styles['patient-review-cards']}>
                        {patients.map((patient)=>(
                        <PatientsCard
                        key={patient.id}
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

    export default PatientReview;