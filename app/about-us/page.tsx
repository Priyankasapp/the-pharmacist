import Hero from "@/components/about/Hero/Hero";
import Patients from "@/components/about/Patients/Patients";
import Specialist from "@/components/about/Specialist/Specialist";
import Timeline from "@/components/about/Timeline/Timeline";
import WhatWeOffer from "@/components/about/WhatWeOffer/WhatWeOffer";
import WhyChosePharmalist from "@/components/about/WhyChosePharmalist/WhyChosePharmalist";


const AboutUs = () => {
    return(
         <div style={{padding:'0% 3%', }}>
            <h1 >About Us</h1>
            <Hero/>
            <WhatWeOffer/>
            <Timeline/>
            <WhyChosePharmalist/>
            <Specialist/>
            <Patients/>
        </div>
    );
}
export default AboutUs;