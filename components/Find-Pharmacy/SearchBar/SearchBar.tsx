
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
      <label
        htmlFor="condition-search"
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
        Search condition
      </label>
      <div className={styles['search-bar-wrapper']}>
        <input
          id="condition-search"
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
           {" "}
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
  