import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <div className={styles.content}>
        <p className={styles.eyebrow}>404 · Page not found</p>
        <h1 id="not-found-title">We can’t find that page</h1>
        <p className={styles.description}>
          The link may be out of date, or the page may have moved. Try going
          back to the homepage or browse our healthcare services.
        </p>
        <div className={styles.actions}>
          <Link className={styles.primaryLink} href="/">
            Back to home
          </Link>
          <Link className={styles.secondaryLink} href="/all-conditions">
            Browse health conditions
          </Link>
        </div>
      </div>
      <div className={styles.number} aria-hidden="true">
        404
      </div>
    </section>
  );
}
