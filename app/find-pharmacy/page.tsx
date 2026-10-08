import FindPharmacyCard from '@/components/Find-Pharmacy/FindPharmacyCard/FindPharmacyCard';
import FindPharmacyMap from '@/components/Find-Pharmacy/FindPharmacyMap/FindPharmacyMap';
import styles from "./FindPharmacy.module.css";
import { SearchIcon } from '@/components/Icon/Icon';


const FindPharmacy = () => {
  return (
    <div className="container">
      
     <div className={styles['find-pharmacy-container-box']}>
     {/* <div className='container'> */}
       <h1 className={styles['find-pharmacy-title']}>Find your Nearest Pharmacy</h1>

      <div className={styles['find-pharmacy-searchbar-container']}>
        <label htmlFor="pharmacy-search">Search</label>
        <div className={styles['find-pharmacy-searchbar-wrapper']}>
          <input
            id="pharmacy-search"
            type="search"
            placeholder='Dr Stone pharmacy, 123 High Street'
            aria-label="Search for a pharmacy"
          />
          <SearchIcon className={styles['search-icon']} />
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
