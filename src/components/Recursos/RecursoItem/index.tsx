//Components
import { Link } from "react-router";
import { IRecurso } from "../interface";

//Styles
import styles from "./index.module.scss";

const RecrusoItem = ({name, path, imagePath, description}: IRecurso) => {
    return (
        <Link target = "_blank" className = {styles["recurso-main__container"]} to = {path}>
            <img className = {styles["recurso__image"]} src = {`${imagePath}`} alt = "image"/>
            <h1 className = {styles["recurso__title"]}>{name}</h1>
            <p className = {styles["recurso__text"]}>{description}</p>
        </Link>
    );
}

export default RecrusoItem;