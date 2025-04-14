//Components
import Accordion from "../../components/Accordion";
import RutaPublicacionItem from "../../components/RutaPublicacionItem";

//Styles
import styles from "./index.module.scss";

//Data
import RutasPublicacionData from "../../data/rutasPublicacion.json";

const RutasPublicacion = () => {
    return ( 
        <div className = {styles["rutas-publicacion-main__container"]}>
            <h1 className = {styles["descripcion-rutas__title"]}>¿Qué son las Rutas de Publicación?</h1>
            <p className = {styles["descripcion-rutas__text"]}>
                Las rutas de publicación en acceso abierto, promovidas por la <strong>UNESCO</strong>, permiten la difusión libre del conocimiento científico a nivel global. 
                <strong> Existen diversas rutas:</strong>
            </p>
            <ul className = {styles["short-descripcion-rutas__container"]}>
                {
                    RutasPublicacionData.map(({ name, color, shortDescription }) => 
                        <li key = {`${name.replace(" ", "_").toLowerCase()}_short`} style = {{ color: color }} className = {styles["short-descripcion-rutas__li"]}>
                            {name}: <span className = {styles["short-descripcion-rutas__text"]}>{shortDescription}</span>
                        </li>
                    )
                }
            </ul>
            <p className = {styles["descripcion-rutas__text"]}>Estos modelos fomentan la democratización del conocimiento y facilitan el acceso a información clave para la investigación y la educación.</p>
            <img className = {styles["descripcion-rutas__image"]} src = "/rutasPublicacion/rutas_flujo.png"/>
            <div>
                {
                    RutasPublicacionData.map(({
                        name,
                        color,
                        shortDescription,
                        description,
                        characteristics

                    }) => {
                        const closedStyles = {
                            color: "white",
                            backgroundColor: color
                        }

                        const openStyles = {
                            filter: "brightness(1.1)"
                        }

                        return (
                            <Accordion 
                                key = {name} 
                                sectionName = {name}
                                closedStyles = {closedStyles} 
                                openStyles = {openStyles}
                            >
                                <RutaPublicacionItem 
                                    name = {name}
                                    color = {color}
                                    shortDescription = {shortDescription}
                                    description = {description}
                                    characteristics = {characteristics}
                                />
                            </Accordion>
                        );
                    })
                }
               
            </div>
        </div>
    );
}

export default RutasPublicacion;