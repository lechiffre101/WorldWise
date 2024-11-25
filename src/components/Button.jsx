import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

function Button({ children, onClick, type }) {
  const navigate = useNavigate();
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

export default Button;
