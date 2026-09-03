/* eslint-disable react/jsx-key */ // Note: Best practice is to use the key prop instead of disabling this lint rule
"use client";
import ProcessSection from "@/components/all-conditions/ProcessSection/ProcessSection";
import styles from "./AllConditions.module.css";
import { processData } from "@/lib/data";
import Image from "next/image";
import { vectorOne, VectorTwo } from "@/data/assets";
import FAQ from "@/components/Contact/FAQ/FAQ";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/Button/Button";
import OptionSectionCard from "@/components/all-conditions/OptionSectionCard/OptionSectionCard";

const AllCondition = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles["all-conditions-container"]}>
      <h1>Discover Conditions and Find the Right Care</h1>

      {/* process section  */}
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

      {/* Option section  */}
      <div className={styles["all-condition-option-section"]}>
        {/* option card  */}
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
                placeholder="Search for health conditions (e.g.,stomach ache)"
                className={styles["all-condition-option-header-search-input"]}
              />
              <Button showArrow >Search</Button>
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
        {/* options  alphabets*/}
        <div>

            {/* component */}
            <div className="option-section">
                <OptionSectionCard/>
            </div>
        </div>
      </div>
      {/* FAQ Section  */}
      <div>
        <FAQ />
      </div>
    </div>
  );
};

export default AllCondition;
