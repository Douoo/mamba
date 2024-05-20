"use client";

import styles from "./Accordion.module.css";
import { useState } from "react";

function AccordionPanel({ title, content, open }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`${styles["accordion-panel"]}`}
      onClick={() => {
        setIsOpen((prevValue) => !prevValue);
      }}
    >
      <h2 className={`${styles["accordion-title"]}`}>
        <button class={`${styles["accordion-trigger"]}`} aria-expanded={isOpen}>
          {title}
        </button>
        <span className={`${styles.icon} ${isOpen && styles.active}`}></span>
      </h2>
      <div
        className={`${styles["accordion-content"]} ${isOpen && styles.active}`}
        role="region"
        aria-hidden={open}
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

export default AccordionPanel;
