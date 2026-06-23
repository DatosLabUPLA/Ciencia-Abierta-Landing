// Core Dependencies
import { motion } from "motion/react";

// Components
import Accordion from "@/components/Accordion";
import DetalleRecursos from "@/components/DetalleRecursos";
import CreativeCommonsItem from "@/components/CreativeCommonsItem";
import { ICreativeCommonsItem } from "@/components/CreativeCommonsItem/interface";

// Constants
import { slideRightVariant } from "@/constants/animate-presence-variants";

// Data
import licenciasData from "@/data/licencias";
import creativeCommonsData from "@/data/creativeCommonsLicencias";

// Styles
import styles from "./index.module.scss";

const Licencias = () => {
    const resourceDescription = "Las licencias **Creative Commons (CC)** permiten a las autorías intelectuales definir de manera específica cómo desean que sus obras sean utilizadas, estableciendo condiciones claras para su uso y distribución, mientras conservan ciertos derechos sobre ellas.\nA diferencia del sistema tradicional de derecho de autor, donde la regla general es que cualquier uso de una obra requiere permiso expreso del titular, el enfoque de las licencias CC se basa en la flexibilidad y la apertura: quien crea decide qué libertades otorga sobre su contenido, promoviendo así la circulación del conocimiento y la creatividad colaborativa.";

    return (
        <div className = {styles["licencias-main__container"]}>
            <DetalleRecursos 
                description = {resourceDescription}
                exampleItemsData = {licenciasData}
                title = "¿Qué son las Licencias Abiertas?"
                exampleTitle = "Herramientas de Licencias Abiertas"
            />
            <motion.h1 
                initial = "hidden"
                animate = "visible"
                variants = {slideRightVariant}
                className = {styles["creative-commons-licencias__title"]}
            >
                Tipos de Licencias Creative Commons
            </motion.h1>
            <div className = {styles["creative-commons-licencias__container"]}>
                {
                    creativeCommonsData.map(({
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