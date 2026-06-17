// Core Dependencies
import { motion } from "motion/react";

// Components
import CustomLink from "@/components/CustomLink";

// Images
import CienciaAbiertaImage from "@/assets/commons/ciencia_abierta.png";

// Constants
import { slideLeftVariant } from "@/constants/animate-presence-variants";

// Styles
import styles from "./index.module.scss";

const CiencaAbiertaDescripcion = () => {
    return (
        <motion.div 
            initial = "hidden"
            whileInView = "visible"
            variants = {slideLeftVariant}
            viewport = {{ once: true, amount: "some" }}
            className = {styles["ciencia-abierta-descripcion__container"]} 
        >
            <div className = {styles["ciencia-abierta-definicion__container"]}>
                <h1 className = {styles["ciencia-abierta-definicion__title"]}>¿Qué es la Ciencia Abierta?</h1>
                <p  className = {styles["ciencia-abierta-definicion__text"]}>La Ciencia Abierta promueve la colaboración y el intercambio de conocimientos para hacer la investigación más eficiente, creativa y transparente. A través del acceso libre a datos, herramientas e infraestructuras, fortalece la excelencia científica y la confianza social, impulsando el análisis, la innovación y el debate académico.</p>
                <CustomLink 
                    linkText = "Saber más"
                    customClassName = {styles["ciencia-abierta-referencia_link"]}
                    href = "https://unesdoc.unesco.org/ark:/48223/pf0000379949_spa"
                />
            </div>
            <img src = {CienciaAbiertaImage} className = {styles["ciencia-abierta-definicion__image"]}/>
        </motion.div>
    );
}

export default CiencaAbiertaDescripcion;