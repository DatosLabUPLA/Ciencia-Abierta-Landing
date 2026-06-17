// Core Dependencies
import { motion } from "motion/react";

// Components
import CustomLink from "@/components/CustomLink";
import SeccionesHome from "@/components/SeccionesHome";
import CiencaAbiertaDescripcion from "@/components/CiencaAbiertaDescripcion";

// Constants
import { slideRightVariant } from "@/constants/animate-presence-variants";

// Styles 
import styles from "./index.module.scss";

//Ver background y videos
const CienciaAbierta = () => {
    return (
        <div className = {styles["ciencia-abierta-main__container"]}>
            <motion.div 
                initial = "hidden"
                animate = "visible"
                variants = {slideRightVariant}
                className = {styles["ciencia-abierta-banner__container"]}
            >
                <h1 className = {styles["ciencia-abierta__title"]}>Ciencia Abierta</h1>
                <h3 className = {styles["ciencia-abierta__slogan"]}>Conocimiento sin barreras, innovación sin límites</h3>
                <CustomLink 
                    linkText = "Saber más"
                    customClassName = {styles["ciencia-abierta-referencia_link"]}
                    href = "https://acceso-abierto.anid.cl/componentes/inescienciaabierta/"
                />
            </motion.div>
            <div className = {styles["ciencia-abierta-sections__container"]}>
                <CiencaAbiertaDescripcion />
                <SeccionesHome />
            </div>
        </div>
    );
};

export default CienciaAbierta;