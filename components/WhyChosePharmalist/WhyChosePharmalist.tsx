import Pharmalistcard from '@/components/PharmalistCard/PharmalistCard'
import { PharmacistImage, PharmacistImage2, PharmacistImage3 } from '@/data/assets'
import styles from "./WhyChosePharmalist.module.css"

const pharmalistDataSet = [
  {
    title:"Pharmacy and Health Clinic",
    description:"Our qualified pharmacists and clinicians deliver expert care that meets strict NHS clinical standards, keeping your health in safe hands.",
    imgSrc:PharmacistImage,
  },
   {
    title:"Local and Online Services",
    description:"Order prescriptions, book consultations and manage your medications online, anytime, from any device. We are here in person too.",
    imgSrc:PharmacistImage2,
  },
   {
    title:"Three generation family owned and run business",
    description:"Whether you need NHS prescription support or private healthcare, we bring both together in one place. Trusted care, built around you.",
    imgSrc:PharmacistImage3
  },
]

const WhyChosePharmalist = () => {
  return (
    <div className={styles['pharmalist-container']}>
      <h2 className={styles['pharmalist-heading']}>Why Choose <span>The Pharmacist</span></h2>

     
        <div className={styles['pharmalist-card-box']}>
          {pharmalistDataSet.map((pharmalist)=>{
            return(
              <div key={pharmalist.title}  className={styles['card-wrapper']}>
               
                  <Pharmalistcard
                    title = {pharmalist.title}
                    description={pharmalist.description}
                    imgSrc={pharmalist.imgSrc}
                  />
               
              </div>
            )
          })}
        </div>
   
     
    </div>
  )
}

export default WhyChosePharmalist;