import FindPharmacyCard from '@/components/Find-Pharmacy/FindPharmacyCard/FindPharmacyCard';
import FindPharmacyMap from '@/components/Find-Pharmacy/FindPharmacyMap/FindPharmacyMap';
import styles from "./FindPharmacy.module.css";
import { Search } from 'lucide-react';

const FindPharmacy = () => {
  return (
    <div className={styles['find-pharmacy']}>
     <div className={styles['find-pharmacy-container-box']}>
       <h1 className={styles['find-pharmacy-title']}>Find your Nearest Pharmacy</h1>

      <div className={styles['find-pharmacy-searchbar-container']}>
        <span>Search</span>
        <div className={styles['find-pharmacy-searchbar-wrapper']}>
          <input placeholder='Dr Stone pharmacy, 123 High Street'/>
          <Search className={styles['search-icon']} />
        </div>
      </div>

      <div className={styles['find-pharmacy-container']}>
        {/* Map Bounding Container */}
        <div className={styles['find-pharmacy-map-wrapper']}>
          <FindPharmacyMap />
        </div>
        
        {/* Sidebar Cards Panel */}
        <div className={styles['find-pharmacy-card-list']}>
          <FindPharmacyCard />
          <FindPharmacyCard />
          <FindPharmacyCard />
        </div>
      </div>
     </div>
    </div>
  );
};

export default FindPharmacy;
