'use client'

import styles from "./SearchMenu.module.css"
import nhs from "@/public/imaegs/nhs.png"
import Image from "next/image";
import Button from "../Button/Button";

type SearchMenuProps = {
    isOpen:boolean;
}
export const SearchMenu = ({isOpen}:SearchMenuProps) =>{
    if(!isOpen) return null;
    
    return(
        <div className={styles['menu-container']}>
            {/* Search Section  */}
        <div className={styles['search-form']}>
            <label
                htmlFor="searchInput"
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
            <input 
            type="text" 
            placeholder="What condition are you looking for?" name="search" 
            id="searchInput"
            className={styles.searchBar} />
            <Button 
           
            showArrow={false}
            >Search</Button>
        </div>

        {/* Menu List  */}
        <ul className={styles['search-menu']} id="searchList">
            <li className={styles['search-item']}>
                <a href="#">search-item</a>
            </li>
            <li className={styles['search-item']}>
                <a href="#">Athlete &apos;s Foot</a>
            </li>
            <li className={styles['search-item']}>
                <a href="#">Azelaic Acid</a>
            </li>
            <li className={styles['search-item']}>
                <a href="#">Chesty Cough</a>
            </li>
            <li className={styles['search-item']}>
                <a href="#">Sore Throat</a>
                <Image
                        src={nhs}
                        height={20} alt={""}/>
            </li>
        </ul>

        </div>
    );
};
