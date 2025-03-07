//Components
import { IRecurso } from "../interface";

//Styles
import styles from "./index.module.scss";

const RecrusoItem = ({name, path, imagePath, description}: IRecurso) => {
    return (
        <a target = "_blank" className = {styles["recurso-main__container"]} href = {path}>
            <img className = {styles["recurso__image"]} src = {`${imagePath}`} alt = "image"/>
            <h1 className = {styles["recurso__title"]}>{name}</h1>
            <p className = {styles["recurso__text"]}>{description}</p>
        </a>
    );
}

export default RecrusoItem;