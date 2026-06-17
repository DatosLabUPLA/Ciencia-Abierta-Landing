// Styles
import styles from "./index.module.scss";

export interface IRecursosYHerramientasItem {
    name: string;
    imagePath: string;
    externalURL: string;
    description?: string;
}

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
            {
                description &&
                <span className = {styles["descripcion-repositorio__text"]}>{description}</span>
            }
        </a>
    );
}

export default RecursosYHerramientasItem;