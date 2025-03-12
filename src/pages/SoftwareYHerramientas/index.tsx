//Components
import RecursosYHerramientasItem from "../../components/RecursosYHerramientasItem";

//Styles
import styles from "./index.module.scss";

//Data
import SoftwareYHerramientasData from "../../data/softwareYHerramientas.json"

const SoftwareYHerramientas = () => {
    return (
        <div className = {styles["software-main__container"]}>
            <h1 data-aos = "fade-right" className = {styles["descripcion-software__title"]}>¿Qué son los Software y Herramientas Abiertas?</h1>
            <p data-aos = "fade-right" className = {styles["descripcion-software__text"]}>
                hola
            </p>
            <h1 data-aos = "fade-right" className = {styles["ejemplos-software__title"]}>Software y Herramientas</h1>
            <div className = {styles["ejemplos-software__container"]}>
                {
                    SoftwareYHerramientasData.map(({ name, imagePath, externalURL, description }) =>
                        <RecursosYHerramientasItem
                            name = {name}
                            imagePath = {imagePath}
                            externalURL = {externalURL}
                            description = {description}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default SoftwareYHerramientas;