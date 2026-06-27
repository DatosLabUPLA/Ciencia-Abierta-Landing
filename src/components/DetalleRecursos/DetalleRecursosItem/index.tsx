// Core Dependencies
import { motion } from "motion/react";

// Styles
import styles from "./index.module.scss";
import { zoomInUpVariant } from "@/constants/animate-presence-variants";

export interface IDetalleRecursosItem {
    name: string;
    imagePath: string;
    externalURL: string;
    description?: string;
}

const DetalleRecursosItem = ({
    name,
    imagePath,
    externalURL,
    description 
}: IDetalleRecursosItem) => {
    return (
        <motion.a // Eliminar y arreglar estilos
            target = "_blank" 
            initial = "hidden"
            href = {externalURL}
            whileInView = "visible"
            variants = {zoomInUpVariant}
            viewport = {{ once: true, amount: "some" }}
            className = {styles["detalle-recursos-item__wrapper"]}
        >
            <div className = {styles["detalle-recursos-item__container"]}>
                <img 
                    src = {imagePath}
                    className = {styles["recurso-item__image"]}
                />
                <h3 className = {styles["recurso-item__title"]}>{name}</h3>
                {
                    description &&
                    <span className = {styles["descripcion-recurso-item__text"]}>{description}</span>
                }
            </div>
        </motion.a>
    );
}

export default DetalleRecursosItem;