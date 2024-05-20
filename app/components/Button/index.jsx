import styles from "./Button.module.css";

function Button({ text, type }) {
  return (
    <button
      className={`uppercase ${styles.btn} ${styles[`${`btn-` + type}`]} `}
    >
      {text}
    </button>
  );
}

export default Button;
