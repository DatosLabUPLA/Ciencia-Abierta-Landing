// Core Dependencies
import { useState } from "react";

// Components
import IconSymbol from "../IconSymbol";

// Styles
import styles from "./index.module.scss";

interface IAccordion {
    sectionName: string;
    children: React.ReactNode;
    closedStyles?: {
        color?: string;
        backgroundColor?: string;
    };
    openStyles?: {
        color?: string;
        filter?: string;
        backgroundColor?: string;
    };
}

const Accordion = ({ 
    children, 
    sectionName, 
    openStyles = {},
    closedStyles = {}
}: IAccordion) => {
    const [isOpen, setSetOpen] = useState<boolean>(false);
    const containerClassName = `${styles["accordion-main__container"]} ${isOpen ? styles["accordion__open"]: ""}`.trim();

    const openButtonStyle = isOpen ? openStyles : {};

    const handleOpenState = (newState: boolean) => {
        setSetOpen(newState);
    }

    return (
        <div className = {containerClassName}>
            <button 
                className = {styles["accordion__button"]} 
                onClick = {() => handleOpenState(!isOpen)}
                style = {{...closedStyles, ...openButtonStyle}}
            >
                <span className = {styles["accordion__text"]}>{sectionName}</span>
                <IconSymbol
                    iconLibrary = "MdIcons"
                    iconName = "MdOutlineArrowForwardIos"
                    customClass = {styles["accordion__icon"]}
                />
            </button>
            <div className = {styles["accordion-content__container"]}>
                {children}
            </div>
        </div>
    );
}

export default Accordion;