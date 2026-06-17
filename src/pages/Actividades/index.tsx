// Core Dependencies
import { useState } from "react";
import { motion } from "motion/react";

// Components
import Actividad from "@/components/Actividad";
import DescripcionActividadModal from "@/components/DescripcionActividadModal";

// Constants
import { delayChildrenVariant } from "@/constants/animate-presence-variants";

// Data
import ActividadesData from "@/data/actividades";

// Styles
import styles from "./index.module.scss";

const Actividades = () => {
    const [selectedPost, setSelectedPost] = useState<any>();
    const [displayPostDescription, setDisplayPostDescription] = useState<boolean>(false);

    const handleDisplayPostState = (newState: boolean) => {
        setDisplayPostDescription(newState);
    }

    const handleSelectPost = (actividadData: any) => {
        setSelectedPost(actividadData);
        handleDisplayPostState(true);
    }

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
                            name = {actividad.name}
                            date = {actividad.date}
                            description = {actividad.description}
                            handleSelectPost = {() => handleSelectPost(actividad)}
                        />
                    )
                )
            }
            <DescripcionActividadModal
                {...selectedPost}
                modalState = {displayPostDescription}
                handleCloseModal = {() => handleDisplayPostState(false)}
            />
        </motion.div>
    );
}

export default Actividades;