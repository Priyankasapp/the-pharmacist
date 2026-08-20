"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./ServicesMenu.module.css";
import { SERVICES_MENU } from "@/data/services";
import {ChevronRight} from "lucide-react"
type ServicesMenuProps = {
  isOpen: boolean;
};

export function ServicesMenu({ isOpen }: ServicesMenuProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.megaMenu} role="menu" aria-label="Our Services">
      <div className={`container ${styles.inner}`}>
        {SERVICES_MENU.map((column, columnIndex) => (
          <div
            key={column.id}
            className={`${styles.column} ${
              columnIndex < SERVICES_MENU.length - 1 ? styles.columnDivider : ""
            }`}
          >
            {/* Column header */}
            <div className={styles.columnHeader}>
              {column.logo && (
                <Image
                  src={column.logo}
                  alt=""
                  width={28}
                  height={18}
                  className={styles.columnLogo}
                  aria-hidden="true"
                />
              )}
              <span className={styles.columnLabel}>{column.label}</span>
            </div>

            {/* Groups */}
            <div
              className={`${styles.groups} ${
                column.groups.length > 1 ? styles.groupsGrid : ""
              }`}
            >
              {column.groups.map((group) => (
                <div key={group.title} className={styles.group}>
                  {group.href ? (
                    <Link href={group.href} className={styles.groupTitle}>
                      {group.title}
                    </Link>
                  ) : (
                    <p className={styles.groupTitle}>{group.title}</p>
                  )}

                  <ul className={styles.linkList}>
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link href={link.href} className={styles.link}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* View all */}
            <Link href={column.viewAllHref} className={styles.viewAll}>
              <span>View all conditions</span>
              <ChevronRight size={30}/>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}