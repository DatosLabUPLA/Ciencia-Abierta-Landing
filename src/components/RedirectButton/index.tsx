//Components
import { IRedirectButton } from "./interface";

//Styles
import styles from "./index.module.scss";

const RedirectButton = ({text, url, type}: IRedirectButton) => {
    return (
        <a 
            target = "_blank" 
            className = {`${styles["ciencia-abierta-redirect__button"]} ${type === "section" && styles["ciencia-abierta-redirect-section__button"]}`} 
            href = {url}>{text}
        </a>
    );
}

export default RedirectButton;