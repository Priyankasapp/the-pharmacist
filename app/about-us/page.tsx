import Hero from "@/components/about/Hero/Hero";
import Patients from "@/components/about/Patients/Patients";
import Specialist from "@/components/about/Specialist/Specialist";
import Timeline from "@/components/about/Timeline/Timeline";
import WhatWeOffer from "@/components/about/WhatWeOffer/WhatWeOffer";
import WhyChosePharmalist from "@/components/WhyChosePharmalist/WhyChosePharmalist";

const page = () => {
  return (
    <div>
      <h1
        style={{
          margin: "0% 4%",
          fontWeight: "600",
          fontSize: "40px",
        }}
      >
        About Us
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Hero />
        <WhatWeOffer />
        <Timeline />
        <WhyChosePharmalist />
        <Specialist />
        <Patients />
      </div>
    </div>
  );
};

export default page;
