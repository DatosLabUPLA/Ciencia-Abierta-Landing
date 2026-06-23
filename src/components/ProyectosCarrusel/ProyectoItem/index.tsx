// Core Dependencies
import { forwardRef } from "react";
import { motion, usePresenceData } from "motion/react";

// Constants
import { carouselVariant } from "@/constants/animate-presence-variants";

// Styles
import styles from "./index.module.scss";

export interface IProyectoItem {
    proyectoData: {
        name: string;
        href: string;
        imagePath: string;
        description: string;
    }
}

const ProyectoItem = forwardRef<HTMLAnchorElement, IProyectoItem>(
    (
        { proyectoData }: IProyectoItem, 
        ref
    ) => {
        const {
            name,
            href,
            imagePath,
            description
        } = proyectoData;

        const direction = usePresenceData();
        
        return (
            <motion.a 
                ref = {ref}
                exit = "exit"
                href = {href}
                target = "_blank"
                initial = "hidden"
                animate = "visible"
                variants = {carouselVariant(direction)}
                className = {styles["proyecto-main__container"]}
            >
                <h1 className = {styles["proyecto__title"]}>{name}</h1>
                <p className = {styles["proyecto__text"]}>{description}</p>
                <img className = {styles["proyecto__image"]} src = {imagePath} />
            </motion.a>
        );
    }
);

export default ProyectoItem;