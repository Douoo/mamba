import styles from "./Button.module.css";

function Button({ children, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`uppercase ${styles.btn} ${styles[`${`btn-` + type}`]} `}
    >
      {children}
    </button>
  );
}

export default Button;
