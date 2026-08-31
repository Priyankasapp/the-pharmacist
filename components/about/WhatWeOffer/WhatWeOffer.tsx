
import Button from "@/components/Button/Button"
import styles from "./WhatWeOffer.module.css"

const cardData = [
  {
    title:"Prescription dispensing",
    description:"Fast and accurate dispensing of your prescriptions, every time.",
  },
  {
    title:"Online consultations",
    description:"Speak to our pharmacists or healthcare experts from anywhere.",
  },
  {
    title:"Health services and advice",
    description:"Expert guidance to help you manage your health effectively",
  },
  {
    title:"Over-the-counter Meds",
    description:"A wide range of trusted medicines and wellness products.",
  }
]

const WhatWeOffer = () => {
  return (
    <div className={styles['what-we-offer']}>
      <h2>What We <span>Offer</span></h2>

      {/* cards  */}
      
      <div className={styles['what-we-offer-container']}>
        <div className={styles['what-we-offer-cards']}>
        {cardData.map((card, index)=>(
          <div key={index} className={styles['what-we-offer-card']}>
            <h3 className={styles['what-we-offer-title']}>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
        </div>
       
       <Button>Explore Our Treatments</Button>
      </div>
    </div>
  )
}

export default WhatWeOffer