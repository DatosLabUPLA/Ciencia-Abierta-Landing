// Core Dependencies
import { motion } from "motion/react";

// Components
import CustomButton from "../CustomButton";
import CustomLink from "@/components/CustomLink";

// Images
import CienciaAbiertaImage from "@/assets/commons/ciencia_abierta.png";

// Constants
import { slideLeftVariant } from "@/constants/animate-presence-variants";

// Styles
import styles from "./index.module.scss";
import scrollToTopUtil from "@/utils/scrollToTopUtil";

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
                <div className = {styles["ciencia-abierta-definicion__referencias"]}>
                    <CustomLink 
                        linkText = "Saber más"
                        iconLibrary = "Io5Icons" 
                        iconName = "IoLogOutOutline"
                        customClassName = {styles["ciencia-abierta-referencia__button"]}
                        href = "https://unesdoc.unesco.org/ark:/48223/pf0000379949_spa"
                    />
                    <CustomButton
                        iconLibrary = "GoIcons"
                        buttonText = "Proyectos"
                        iconName = "GoProjectSymlink"
                        customClassName = {styles["ciencia-abierta-referencia__button"]}
                        handleOnClick = {() => scrollToTopUtil("main__container", true)}
                    />
                </div>
            </div>
            <img src = {CienciaAbiertaImage} className = {styles["ciencia-abierta-definicion__image"]}/>
        </motion.div>
    );
}

export default CiencaAbiertaDescripcion;