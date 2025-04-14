//Core Dependencies
import { useState } from "react";

//Components
import { MdOutlineArrowForwardIos } from "react-icons/md";

//Interfaces
import { IAccordion } from "./interface";

//Styles
import styles from "./index.module.scss";

const Accordion = ({ sectionName, children, closedStyles, openStyles }: IAccordion) => {
    const [open, setOpen] = useState<boolean>(false);

    const closedButtonStyles = closedStyles ? closedStyles : undefined;

    const OpenButtonStyles = openStyles ? openStyles : {
        color: "white",
        backgroundColor: "#6b6b6b"
    }

    const ternaryButtonStyle = open ? OpenButtonStyles : undefined;

    const setOpenHandler = () => {
        setOpen(!open);
    }

    return (
        <div className = {styles["accordion-main__container"]}>
            <button 
                onClick = {setOpenHandler}
                className = {styles["accordion__button"]} 
                style = {{...closedButtonStyles, ...ternaryButtonStyle}}>
                {sectionName} <MdOutlineArrowForwardIos className = {open ? styles["accordion-open__icon"] : ""}/>
            </button>
            <div 
                className = {`${styles["accordion-content__container"]} ${open ? styles["accordion-content-open__container"]: ""}`}>
                {children}
            </div>
        </div>
    );
}

export default Accordion;