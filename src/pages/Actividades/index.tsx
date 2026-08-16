// Core Dependencies
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Components
import Actividad from "@/components/Actividad";
import DescripcionActividadModal, { IDescripcionActividad } from "@/components/DescripcionActividadModal";

// Constants
import { delayChildrenVariant } from "@/constants/animate-presence-variants";

// Data
import ActividadesData from "@/data/actividades";

// Styles
import styles from "./index.module.scss";

const Actividades = () => {
    const [selectedPost, setSelectedPost] = useState<IDescripcionActividad>();

    return (
        <motion.div 
            initial = "hidden"
            whileInView = "visible"
            variants = {delayChildrenVariant}
            viewport = {{ once: true, amount: "some" }}
            className = {styles["actividades__container"]}
        >
            {
                ActividadesData.map(
                    (actividad) => (
                        <Actividad 
                            key = {actividad.name}
                            name = {actividad.name}
                            date = {actividad.date}
                            imagePath = {actividad.imagePath}
                            description = {actividad.description}
                            handleSelectPost = {() => setSelectedPost(actividad)}
                        />
                    )
                )
            }
            <AnimatePresence>
            {
                selectedPost &&
                <DescripcionActividadModal
                    actividad = {selectedPost}
                    handleCloseModal = {() => setSelectedPost(undefined)}
                />
            }
            </AnimatePresence>
        </motion.div>
    );
}

export default Actividades;