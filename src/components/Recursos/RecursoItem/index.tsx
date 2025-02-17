//Components
import { IRecurso } from "../interface";

//Styles
import styles from "./index.module.scss";

const RecrusoItem = ({name, imagePath, externalURL, description}: IRecurso) => {
    return (
        <a target = "_blank" className = {styles["recurso-main__container"]} href = {externalURL}>
            <img className = {styles["recurso__image"]} src = {`${imagePath}`} alt = "image"/>
            <h1 className = {styles["recurso__title"]}>{name}</h1>
            <p className = {styles["recurso__text"]}>{description}</p>
        </a>
    );
}

export default RecrusoItem;