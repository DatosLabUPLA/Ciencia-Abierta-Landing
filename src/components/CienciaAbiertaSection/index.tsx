//Components
import { ICienciaAbiertaSection } from "./interface";
//Styles
import styles from "./index.module.scss";

const CienciaAbiertaSection = ({title, description, children}: ICienciaAbiertaSection) => {
    return (
        <div className = {styles["section-main__container"]}>
            <h1 className = {styles["section__title"]}>{title}</h1>
            {description && <p className = {styles["section-description__text"]}>{description}</p>}
            <div className = {styles["section-children__container"]}>
                {children}
            </div>
        </div>
    );
}

export default CienciaAbiertaSection;