//Components
import RecursosYHerramientasItem from "../../components/RecursosYHerramientasItem";

//Styles
import styles from "./index.module.scss";

//Data
import RepositoriosData from "../../data/repositorios.json"

const Repositorios = () => {
    return (
        <div className = {styles["repositorios-main__container"]}>
            <h1 data-aos = "fade-right" className = {styles["descripcion-repositorios__title"]}>¿Qué son los Repositorios Abiertos?</h1>
            <p data-aos = "fade-right" className = {styles["descripcion-repositorios__text"]}>
                Los repositorios abiertos son plataformas digitales que almacenan, organizan y difunden de manera gratuita y sin restricciones materiales académicos, científicos y educativos. Su propósito es facilitar el acceso libre al conocimiento, promoviendo la visibilidad y el impacto de la investigación a nivel global.
                Estos repositorios pueden contener artículos científicos, tesis, libros, datos de investigación y otros recursos, asegurando su preservación y disponibilidad a largo plazo. Su funcionamiento se basa en estándares internacionales de interoperabilidad, permitiendo que investigadores, estudiantes y el público en general accedan y compartan información de forma abierta.
            </p>
            <h1 data-aos = "fade-right" className = {styles["ejemplos-repositorios__title"]}>Repositorios</h1>
            <div className = {styles["ejemplos-repositorios__container"]}>
                {
                    RepositoriosData.map(({ name, imagePath, externalURL, description }) =>
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

export default Repositorios;