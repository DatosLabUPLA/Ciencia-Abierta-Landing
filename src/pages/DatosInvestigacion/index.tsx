//Components
import RecursosYHerramientasItem from "../../components/RecursosYHerramientasItem";

//Styles
import styles from "./index.module.scss";

//Data
import DatosData from "../../data/datos.json"

const DatosInvestigacion = () => {
    return (
        <div className = {styles["datos-main__container"]}>
            <h1 data-aos = "fade-right" className = {styles["descripcion-datos__title"]}>¿Qué son los Datos de Investigación Abiertos?</h1>
            <p data-aos = "fade-right" className = {styles["descripcion-datos__text"]}>
                hola
            </p>
            <h1 data-aos = "fade-right" className = {styles["ejemplos-datos__title"]}>Datos de Investigación</h1>
            <div className = {styles["ejemplos-datos__container"]}>
                {
                    DatosData.map(({ name, imagePath, externalURL, description }) =>
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

export default DatosInvestigacion;