import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SratchInput({ className }) {
  return (
    <div className={`d-flex`}>
      <div className={`${styles.container} ${className}  mx-auto`}>
        <input
          type="text"
          placeholder="Search For Friends"
          className={` ${styles.inputSearch}`}
        ></input>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={`${styles.iconSearch} me-3`}
        />
      </div>
    </div>
  );
}
