'use client'

import FAQ from "@/components/Contact/FAQ/FAQ";
import TreatmentCard from "@/components/Lifestyle-treatmemts/TreatmentsCard/TreatmentCard";
import { treatments } from "@/lib/data";

const LifestyleTreatments = () =>{
    
    return(
        <div >
            <div style={{
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
                padding:"0% 4%"
            }}>
                <h1>Lifestyle Treatments</h1>
                <div> Search bar </div>
            </div>
            
            <div style={{
                padding:"2% 4%",
                display:"grid",
                gridTemplateColumns:"repeat(3, minmax(0, 1fr))",
                gap: "24px"
            }}>

               {treatments.map((treatment)=>{
                return(
                    <div key={treatment.name} style={{display:"flex", justifyContent:"center", gap:"24px"}}>
                        <TreatmentCard
                        name={treatment.name}
                        desc={treatment.desc}
                        imgSrc={treatment.imgSrc}/>
                    </div>
                )
               })}
            </div>
            <div>
                <FAQ/>
            </div>
        </div>
    )
}
export default LifestyleTreatments;