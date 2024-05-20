import styles from "./IconButton.module.css";

function Button({ children, ariaLabel, onClick, type, className, ...props }) {
  return (
    <button
      type="button"
      className={`flex items-center justify-center p-2 rounded-lg ${className} ${
        styles.btn
      } ${styles["btn-" + type]}`}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
