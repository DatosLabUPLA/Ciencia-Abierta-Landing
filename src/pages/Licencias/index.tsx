//Components
import Accordion from "../../components/Accordion";
import CreativeCommonsItem from "../../components/CreativeCommonsItem";
import RecursosYHerramientasItem from "../../components/RecursosYHerramientasItem";
import { ICreativeCommonsItem } from "../../components/CreativeCommonsItem/interface";

//Styles
import styles from "./index.module.scss";

//Data
import LicenciasData from "../../data/licencias.json";
import CreativeCommonsData from "../../data/creativeCommonsLicencias.json";

const Licencias = () => {
    return (
        <div className = {styles["licencias-main__container"]}>
            <h1 data-aos = "fade-right" className = {styles["descripcion-licencias__title"]}>¿Qué son las Licencias Abiertas?</h1>
            <p data-aos = "fade-right" className = {styles["descripcion-licencias__text"]}>
                Las licencias <strong>Creative Commons (CC)</strong> permiten a las autorías intelectuales definir de manera específica cómo desean que sus obras sean utilizadas, estableciendo condiciones claras para su uso y distribución, mientras conservan ciertos derechos sobre ellas.
                A diferencia del sistema tradicional de derecho de autor, donde la regla general es que cualquier uso de una obra requiere permiso expreso del titular, el enfoque de las licencias CC se basa en la flexibilidad y la apertura: quien crea decide qué libertades otorga sobre su contenido, promoviendo así la circulación del conocimiento y la creatividad colaborativa.
            </p>
            <h1 data-aos = "fade-right" className = {styles["ejemplos-licencias__title"]}>Herramientas de Licencias Abiertas</h1>
            <div className = {styles["ejemplos-licencias__container"]}>
                {
                    LicenciasData.map(({ name, imagePath, externalURL, description }) =>
                        <RecursosYHerramientasItem
                            key = {name}
                            name = {name}
                            imagePath = {imagePath}
                            externalURL = {externalURL}
                            description = {description}
                        />
                    )
                }
            </div>
            <h1 data-aos = "fade-right" className = {styles["creative-commons-licencias__title"]}>Tipos de Licencias Creative Commons</h1>
            <div className = {styles["creative-commons-licencias__container"]}>
                {
                    CreativeCommonsData.map(({
                        name,
                        example,
                        imagePath,
                        description
                    }: ICreativeCommonsItem) => 
                        <Accordion key = {name} sectionName = {name}>
                            <CreativeCommonsItem 
                                name = {name}
                                example = {example}
                                imagePath = {imagePath}
                                description = {description}
                            />
                        </Accordion>
                    )
                }
            </div>
        </div>
    );
}

export default Licencias;