// Components
import DetalleRecursos from "@/components/DetalleRecursos";

// Data
import softwareYHerramientasData from "@/data/softwareYHerramientas";

// Styles
import styles from "./index.module.scss";

const SoftwareYHerramientas = () => {
    const resourceDescription = "El **Software abierto y las Herramientas Abiertas** o de open source proporcionan los medios tecnológicos para garantizar la transparencia, reproducibilidad y accesibilidad del conocimiento científico. Al utilizar software de código abierto en la investigación, se permite que la comunidad de investigación acceda, revise y mejore tanto procesos como los métodos utilizados, fomentando la colaboración y evitando la dependencia de herramientas de pago que pueden restringir el acceso al conocimiento. Al igual que los Datos de Investigación Abiertos, deben contar con licencias que permitan su libre uso y redistribución, con posibles requisitos mínimos como la atribución de la fuente original.";

    return (
        <div className = {styles["software-main__container"]}>
            <DetalleRecursos 
                description = {resourceDescription}
                exampleTitle = "Software y Herramienta"
                exampleItemsData = {softwareYHerramientasData}
                title = "¿Qué son los Software y Herramientas Abiertas?"
            />
        </div>
    );
}

export default SoftwareYHerramientas;