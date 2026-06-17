// Core Dependencies
import { motion } from "motion/react";

// Components
import { ICienciaAbiertaSection } from "./interface";

// Constants
import { slideUpVariant } from "@/constants/animate-presence-variants";

// Styles
import styles from "./index.module.scss";

const CienciaAbiertaSection = ({title, description, children}: ICienciaAbiertaSection) => {
    return (
        <motion.div 
            initial = "hidden"
            whileInView = "visible"
            variants = {slideUpVariant}
            viewport = {{ once: true, amount: 0.2 }}
            className = {styles["section-main__container"]}
        >
            <h1 className = {styles["section__title"]}>{title}</h1>
            {description && <p className = {styles["section-description__text"]}>{description}</p>}
            <div className = {styles["section-children__container"]}>
                {children}
            </div>
        </motion.div>
    );
}

export default CienciaAbiertaSection;