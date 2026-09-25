import Pharmalistcard from '@/components/PharmalistCard/PharmalistCard'
import styles from "./WhyChosePharmalist.module.css"
import { pharmalistDataSet } from '@/lib/data'

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