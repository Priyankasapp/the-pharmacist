/* eslint-disable react/jsx-key */
"use client";
import ProcessSection from "@/components/all-conditions/ProcessSection/ProcessSection";
import styles from "./AllConditions.module.css";
import { optionA, optionB, optionC, optionD, processData } from "@/lib/data";
import Image from "next/image";
import { vectorOne, VectorTwo } from "@/data/assets";
import FAQ from "@/components/Contact/FAQ/FAQ";
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button/Button";
import OptionSectionCard from "@/components/all-conditions/OptionSectionCard/OptionSectionCard";

const AllCondition = () => {
  const allAlphabetGroups = [
    { letter: "A", data: optionA },
    { letter: "B", data: optionB },
    { letter: "C", data: optionC },
    { letter: "D", data: optionD },
  ];

  const alphabetList = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  return (
    <div className={styles["all-conditions-container"]}>
      <h1>Discover Conditions and Find the Right Care</h1>

      {/* Process section */}
      <div className={styles["all-condition-process-section"]}>
        <Image
          src={vectorOne}
          alt="vectorOne"
          className={`${styles["all-condition-bg-vector"]} ${styles["all-condition-left-back-vector"]}`}
        />
        <Image
          src={VectorTwo}
          alt="vectorTwo"
          className={`${styles["all-condition-bg-vector"]} ${styles["all-condition-right-back-vector"]}`}
        />

        <div className={styles["all-condition-process-wrapper"]}>
          {processData.map((process) => (
            <ProcessSection
              key={process.id}
              id={process.id}
              heading={process.heading}
              desc={process.desc}
            />
          ))}
        </div>
      </div>

      {/* Option section */}
      <div className={styles["all-condition-option-section"]}>
        <div className={styles["all-condition-option-header"]}>
          <h2>
            Choose an option or search what you&apos;re looking for below.
          </h2>

          <div className={styles["all-condition-option-header-searchbar-sec"]}>
            <div
              className={
                styles["all-condition-option-header-searchbar-contaienr"]
              }
            >
              <input
                type="text"
                placeholder="Search for health conditions (e.g., stomach ache)"
                className={styles["all-condition-option-header-search-input"]}
              />
              <Button showArrow>Search</Button>
            </div>
            <div
              className={styles["all-condition-option-header-right-component"]}
            >
              <span>Show</span>
              <div
                className={
                  styles["all-condition-option-header-dropdown-container"]
                }
              >
                <span>Private Services</span>
                <ChevronDown size={19} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles["deases-section"]}>
          <div>
            {allAlphabetGroups.map((group) => (
              <div
                key={group.letter}
                id={`section-${group.letter}`}
                className={styles["alphabet-row-wrapper"]}
              >
                <div className={styles["alphabet-heading-container"]}>
                  <span className={styles["alphabet-letter-cricle"]}>
                    {group.letter}
                  </span>
                </div>

                <div className={styles["option-section"]}>
                  {group.data.map((item) => (
                    <OptionSectionCard
                      // key={item.slug}
                      slug={item.slug}
                      name={item.name}
                      desc={item.desc}
                      isNHS={item.isNHS}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        
        <nav className={styles["az-sidebar"]}>
            {alphabetList.map((letter)=>(
              <a 
              key={letter}
              href={`#section-${letter}`}
              className={styles["az-sidebar-link"]}>
                {letter}
              </a>  
            ))} 
        </nav>
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default AllCondition;
