// Components
import DetalleRecursos from "@/components/DetalleRecursos";

// Data
import repositoriosData from "@/data/repositorios";

// Styles
import styles from "./index.module.scss";

const Repositorios = () => {
    const resourceDescription = "Los repositorios abiertos son plataformas digitales que almacenan, organizan y difunden de manera gratuita y sin restricciones materiales académicos, científicos y educativos. Su propósito es facilitar el acceso libre al conocimiento, promoviendo la visibilidad y el impacto de la investigación a nivel global.\nEstos repositorios pueden contener artículos científicos, tesis, libros, datos de investigación y otros recursos, asegurando su preservación y disponibilidad a largo plazo. Su funcionamiento se basa en estándares internacionales de interoperabilidad, permitiendo que investigadores, estudiantes y el público en general accedan y compartan información de forma abierta.";

    return (
        <div className = {styles["repositorios-main__container"]}>
            <DetalleRecursos
                exampleTitle = "Repositorios"
                description = {resourceDescription}
                exampleItemsData = {repositoriosData}
                title = "¿Qué son los Repositorios Abiertos?"
            />
        </div>
    );
}

export default Repositorios;