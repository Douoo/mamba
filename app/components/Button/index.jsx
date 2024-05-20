import styles from "./Button.module.css";

function Button({ text, type, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`uppercase ${styles.btn} ${styles[`${`btn-` + type}`]} `}
    >
      {text}
    </button>
  );
}

export default Button;
