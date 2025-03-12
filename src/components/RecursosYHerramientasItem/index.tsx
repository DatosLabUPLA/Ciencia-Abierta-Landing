//Interfaces
import { IRecursosYHerramientasItem } from "./interface";

//Styles
import styles from "./index.module.scss";

const RecursosYHerramientasItem = ({
    name,
    imagePath,
    externalURL,
    description 
}: IRecursosYHerramientasItem) => {
    return (
        <a 
            target = "_blank" 
            href = {externalURL}
            className = {styles["repositorio-main__container"]}
            data-aos = "zoom-in-up"
        >
            <img 
                src = {imagePath}
                className = {styles["repositorio__image"]}
            />
            <h3 className = {styles["nombre-repositorio__title"]}>{name}</h3>
            <span className = {styles["descripcion-repositorio__text"]}>{description}</span>
        </a>
    );
}

export default RecursosYHerramientasItem;