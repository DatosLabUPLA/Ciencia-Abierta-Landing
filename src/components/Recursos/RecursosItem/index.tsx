// Components
import { Link } from "react-router";

// Styles
import styles from "./index.module.scss";

interface IRecursosItem {
    name: string;
    path: string;
    imagePath: string;
    description: string;
}

const RecursosItem = ({
    name, 
    path, 
    imagePath, 
    description
}: IRecursosItem) => {
    return (
        <Link 
            to = {path}
            target = "_blank" 
            className = {styles["recurso-main__container"]} 
        >
            <img className = {styles["recurso__image"]} src = {imagePath} alt = "image"/>
            <h1 className = {styles["recurso__title"]}>{name}</h1>
            <p className = {styles["recurso__text"]}>{description}</p>
        </Link>
    );
}

export default RecursosItem;