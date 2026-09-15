
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const suggestions = [
    "Acid Reflux & Heartburn",
    "Athlete's Foot",
    "Azelaic Acid",
    "Chesty Cough",
    "Sore Throat"
  ];

  return (
    <div className={styles['search-bar-dropdown']}>
     
      <div className={styles['search-bar-wrapper']}>
        <input 
          type='text' 
          placeholder='What condition are you looking for?'
          className={styles['search-input']}
        />
        <button className={styles['search-submit-btn']}>Search</button>
      </div>

    
      <ul className={styles['suggestions-list']}>
        {suggestions.map((item, index) => (
          <li key={index} className={styles['suggestion-item']}>
            {item}
           \
            {item === "Sore Throat" && (
              <span className={styles['nhs-badge']}>NHS</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchBar;
