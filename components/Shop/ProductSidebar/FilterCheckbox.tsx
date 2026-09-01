import { FilterOption } from '@/lib/types';
import styles from './ProductSidbar.module.css'

interface FilterCheckboxProps {
    option: FilterOption
}
const FilterCheckbox = ({ option }: FilterCheckboxProps) => {
  return (
    <div className={styles["filter-checkbox-container"]}>
        <input
        type='checkbox'
        id={option.id}
        name={option.id}
        value={option.id}
        className={styles["filter-checkbox-input"]}
        />
        
        <label htmlFor={option.id} className={styles["filter-checkbox-label"]}>
            {option.label}
        </label>
    </div>
  )
}

export default FilterCheckbox;