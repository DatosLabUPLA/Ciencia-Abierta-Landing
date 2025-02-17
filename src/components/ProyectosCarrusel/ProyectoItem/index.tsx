//Components
import { IProyectoCarrusel } from "../interface";

//Styles
import styles from "./index.module.scss";

const ProyectoItem = ({name, imagePath, description}: IProyectoCarrusel) => {
    return (
        <div className = {styles["proyecto-main__container"]}>
            <p className = {styles["proyecto__text"]}>{description}</p>
            <h1 className = {styles["proyecto__title"]}>{name}</h1>
            <img className = {styles["proyecto__image"]} src = {imagePath}/>
        </div>
    );
}

export default ProyectoItem;