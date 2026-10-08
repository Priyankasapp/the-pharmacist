import { useId } from 'react';
import { FilterOption } from '@/lib/types';
import styles from './ProductSidebar.module.css'

interface FilterCheckboxProps {
    option: FilterOption;
    checked?: boolean;
    onChange?: () => void;
}

const FilterCheckbox = ({ option, checked = false, onChange }: FilterCheckboxProps) => {
  const inputId = useId();
  const safeValue = option.id || option.label;

  return (
    <div className={styles["filter-checkbox-container"]}>
        <input
        type='checkbox'
        id={inputId}
        name={safeValue}
        value={safeValue}
        checked={checked}
        onChange={onChange}
        className={styles["filter-checkbox-input"]}
        />
        
        <label htmlFor={inputId} className={styles["filter-checkbox-label"]}>
            {option.label}
        </label>
    </div>
  )
}

export default FilterCheckbox;