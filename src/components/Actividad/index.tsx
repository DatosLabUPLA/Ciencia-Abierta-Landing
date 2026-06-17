// Components
import Markdown from "react-markdown";
import { motion } from "motion/react";
import IconSymbol from "../IconSymbol";
import CustomButton from "../CustomButton";

// Constants
import { slideUpVariant } from "@/constants/animate-presence-variants";

// Styles
import styles from "./index.module.scss";

export interface IActividad {
    name: string;
    date: string;
    description: string;
    handleSelectPost: () => void;
}

const Actividad = ({
    name,
    date,
    description,
    handleSelectPost
}: IActividad) => {
    const shortDescription = description.split("\n")[0];

    return (
        <motion.div
            variants = {slideUpVariant}
            className = {styles["actividad__container"]}
        >
            <span className = {styles["actividad__date"]}>
                <IconSymbol
                    iconLibrary = "FaIcons"
                    iconName = "FaRegCalendar"
                    customClass = {styles["actividad-date__icon"]}
                /> 
                {date}
            </span>
            <h3 className = {styles["actividad__title"]}>{name}</h3>

            <div className = {styles["actividad-descripcion__container"]}>
                <Markdown>{shortDescription}</Markdown>
            </div>
            <CustomButton
                iconLibrary = "Io5Icons" 
                buttonText = "Saber más"
                iconName = "IoLogOutOutline"
                handleOnClick = {handleSelectPost}
            />
        </motion.div>
    );
}

export default Actividad;