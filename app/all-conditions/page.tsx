import ProcessSection from "@/components/all-conditions/ProcessSection/ProcessSection";
import styles from "./AllConditions.module.css";
import { processData } from "@/lib/data";
import Image from "next/image";
import { vectorOne, VectorTwo } from "@/data/assets";
import FAQ from "@/components/Contact/FAQ/FAQ";
import Button from "@/components/Button/Button";
import OptionSectionCard from "@/components/all-conditions/OptionSectionCard/OptionSectionCard";
import { ChevronDown } from "@/components/Icon/Icon";
import { client } from "@/sanity/lib/client";
import { healthConditionsQuery } from "@/sanity/lib/queries";

const AllCondition = async () => {
  // Fetch health conditions from Sanity
  const conditions = await client.fetch(healthConditionsQuery);

  // Group Sanity conditions alphabetically from A to Z
  const allAlphabetGroups = Array.from({ length: 26 }, (_, index) => {
    const letter = String.fromCharCode(65 + index);

    return {
      letter,
      data: conditions.filter((item: { name: string; id: string }) =>
        item.name?.trim().toUpperCase().startsWith(letter),
      ),
    };
  });

  // Generate alphabet navigation
  const alphabetList = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode(65 + index),
  );

  return (
    <div className={styles["all-conditions-container"]}>
      <div className="container">
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
            <h2>Choose an option or search what you are looking for below.</h2>

            <div
              className={styles["all-condition-option-header-searchbar-sec"]}
            >
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

                <Button showArrow className={styles["all-condition-button"]}>
                  Search
                </Button>
              </div>

              <div
                className={
                  styles["all-condition-option-header-right-component"]
                }
              >
                <span>Show</span>

                <div
                  className={
                    styles["all-condition-option-header-dropdown-container"]
                  }
                >
                  <span>Private Services</span>
                  <ChevronDown />
                </div>
              </div>
            </div>
          </div>

          {/* Health conditions fetched from Sanity */}
          <div className={styles["deases-section"]}>
            <div className={styles["dieases-content-scroll"]}>
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
                    {group.data.map(
                      (item: {
                        _id: string;
                        name: string;
                        id: string;
                        desc: string;
                        isNHS: boolean;
                      }) => (
                        <div
                          className={styles["option-card-wrapper"]}
                          key={item._id}
                          id={item.id}
                        >
                          <OptionSectionCard
                            name={item.name}
                            desc={item.desc}
                            isNHS={item.isNHS}
                            id={item.id}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* A-Z sidebar */}
            <nav className={styles["az-sidebar"]}>
              {alphabetList.map((letter) => (
                <a
                  key={letter}
                  href={`#section-${letter}`}
                  className={styles["az-sidebar-link"]}
                >
                  {letter}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* FAQ section */}
        <div>
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default AllCondition;
