//Components
import RecursosYHerramientasItem from "../../components/RecursosYHerramientasItem";

//Styles
import styles from "./index.module.scss";

//Data
import LicenciasData from "../../data/licencias.json"

const Licencias = () => {
    return (
        <div className = {styles["licencias-main__container"]}>
            <h1 data-aos = "fade-right" className = {styles["descripcion-licencias__title"]}>¿Qué son las Licencias Abiertas?</h1>
            <p data-aos = "fade-right" className = {styles["descripcion-licencias__text"]}>
                hola
            </p>
            <h1 data-aos = "fade-right" className = {styles["ejemplos-licencias__title"]}>Datos de Investigación</h1>
            <div className = {styles["ejemplos-licencias__container"]}>
                {
                    LicenciasData.map(({ name, imagePath, externalURL, description }) =>
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

export default Licencias;