// Core Dependencies
import { motion } from "motion/react";

// Components
import Markdown from "react-markdown";
import DetalleRecursosItem, { IDetalleRecursosItem } from "./DetalleRecursosItem";

// Styles
import styles from "./index.module.scss";
import { slideRightVariant } from "@/constants/animate-presence-variants";

interface IDetalleRecursos {
    title: string;
    description: string;
    exampleTitle: string;
    exampleItemsData: IDetalleRecursosItem[];
}

const DetalleRecursos = ({
    title,
    description,
    exampleTitle,
    exampleItemsData
}: IDetalleRecursos) => {
    return (
        <div className = {styles["detalle-recursos__container"]}>
            <motion.h1
                initial = "hidden"
                animate = "visible"
                variants = {slideRightVariant}
                className = {styles["detalle-recursos__title"]}
            >
                {title}
            </motion.h1>
            <motion.div 
                initial = "hidden"
                animate = "visible"
                variants = {slideRightVariant}
                className = {styles["descripcion-detalle-recursos__text"]}
            >
                <Markdown>{description}</Markdown>
            </motion.div>
            <motion.h1
                initial = "hidden"
                animate = "visible"
                variants = {slideRightVariant}
                className = {styles["detalle-recursos__title"]}
            >
                {exampleTitle}
            </motion.h1>
            <div className = {styles["ejemplos-detalle-recursos__container"]}>
                {
                    exampleItemsData.map(({
                        name,
                        imagePath,
                        externalURL,
                        description
                    }) =>
                        <DetalleRecursosItem
                            key = {name}
                            name = {name}
                            imagePath = {imagePath}
                            externalURL = {externalURL}
                            description = {description}
                        />
                    )
                }
            </div>
        </div>
    );
}

export default DetalleRecursos;