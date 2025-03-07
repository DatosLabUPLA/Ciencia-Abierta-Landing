//Interfaces
import { IRepositorioItem } from "./interface";

//Styles
import styles from "./index.module.scss";

const RepositorioItem = ({
    name,
    imagePath,
    externalURL,
    description 
}: IRepositorioItem) => {
    return (
        <a 
            target = "_blank" 
            href = {externalURL}
            className = {styles["repositorio-main__container"]}
    
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

export default RepositorioItem;