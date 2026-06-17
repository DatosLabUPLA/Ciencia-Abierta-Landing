// Core Dependencies
import { motion } from "motion/react";
import { PropsWithChildren } from "react";

// Constants
import { opacityVariant } from "@/constants/animate-presence-variants";

// Styles
import styles from "./index.module.scss";

interface IModalWrapper extends PropsWithChildren{
    handleCloseModal: () => void;
}

const ModalWrapper = ({
    children,
    handleCloseModal
}: IModalWrapper) => {
    return (
        <motion.div
            exit = "exit"
            initial = "hidden"
            animate = "visible"
            variants = {opacityVariant}
            onClick = {handleCloseModal}
            className = {styles["modal__wrapper"]}
        >
            {children}
        </motion.div>
    );
}

export default ModalWrapper;