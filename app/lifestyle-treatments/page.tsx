import FAQ from "@/components/Contact/FAQ/FAQ";
import TreatmentCard from "@/components/Lifestyle-treatmemts/TreatmentsCard/TreatmentCard";
import styles from "./LifestyleTreatments.module.css";
import Button from "@/components/Button/Button";
import { client } from "@/sanity/lib/client";
import { TREATMENTS_QUERY } from "@/sanity/lib/queries";

type SanityTreatment = {
  _id: string;
  title: string;
  img: string;
  condition: string[];
};

const LifestyleTreatments = async () => {
  const treatments = await client.fetch<SanityTreatment[]>(TREATMENTS_QUERY);
  return (
    <div className="container">
      <div className={styles['lifestyle-treatment']}>
        
      <div className={styles['lifestyle-header']}>
        <h1>Lifestyle Treatments</h1>
        <div className={styles['lifestyle-searchbar-wrapper']}>
            <label
              htmlFor="lifestyle-search"
              style={{
                position: 'absolute',
                width: '1px',
                height: '1px',
                padding: 0,
                margin: '-1px',
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
              }}
            >
              Search lifestyle treatments
            </label>
            <input
              id="lifestyle-search"
              type="text"
              placeholder="Search for health conditions (e.g., Hair Loss)"
            />
            <Button showArrow className={styles['lifestyle-button']}>Search</Button>
        </div>
      </div>

      <div className={styles['lifestyle-cards-container']}>
        {treatments.map((treatment) => (
          <div key={treatment._id}
          className={styles['lifestyle-card-wrapper']}>
            <TreatmentCard
              _id={treatment._id}
              slug={treatment.title}
              name={treatment.title}
              desc={treatment.condition.join(", ")}
              imgSrc={treatment.img}
            />
          </div>
        ))}
      </div>
      <div className={styles['faq-wrapper']}>
        <FAQ />
      </div>
</div>    </div>  
  );
};

export default LifestyleTreatments;
