//Components
import { IRutasPublicacionItem } from "./interface";

//Styles
import styles from "./index.module.scss";

const RutaPublicacionItem = ({
    description,
    characteristics,
}: IRutasPublicacionItem) => {
    return (
        <div className = {styles["ruta-item-main__container"]}>
            <p className = {styles["descripcion-ruta-item__text"]} dangerouslySetInnerHTML = {{ __html: description }}/>
            <h2 className = {styles["caracteristicas-ruta-item__title"]}>Principales características</h2>
            <ul className = {styles["caracteristicas-ruta-item__container"]}>
                {
                    characteristics.map((text: string, index: number) => <li key = {index} className = {styles["caracteristicas-ruta-item__text"]}>{text}</li>)
                }
            </ul>
        </div>
    );
}

export default RutaPublicacionItem;