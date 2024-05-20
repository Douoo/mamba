import styles from "./Card.module.css";

function Card({ children, className, type, id }) {
  return (
    <div id={id} className={`${styles.card} ${styles["card-" + type]} ${className}`}>
      {children}
    </div>
  );
}

export default Card;
