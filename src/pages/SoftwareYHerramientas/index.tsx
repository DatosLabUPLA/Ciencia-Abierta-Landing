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
                El <strong>Software abierto y las Herramientas Abiertas</strong> o de open source proporcionan los medios tecnológicos para garantizar la transparencia, reproducibilidad y accesibilidad del conocimiento científico. Al utilizar software de código abierto en la investigación, se permite que la comunidad de investigación acceda, revise y mejore tanto procesos como los métodos utilizados, fomentando la colaboración y evitando la dependencia de herramientas de pago que pueden restringir el acceso al conocimiento. Al igual que los Datos de Investigación Abiertos, deben contar con licencias que permitan su libre uso y redistribución, con posibles requisitos mínimos como la atribución de la fuente original. 
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