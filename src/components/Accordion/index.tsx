//Core Dependencies
import { useState } from "react";

//Components
import { MdOutlineArrowForwardIos } from "react-icons/md";

//Interfaces
import { IAccordion } from "./interface";

//Styles
import styles from "./index.module.scss";

const Accordion = ({ sectionName, children }: IAccordion) => {
    const [open, isOpen] = useState<boolean>(false);

    const isOpenHandler = () => {
        isOpen(!open);
    }

    return (
        <div className = {styles["accordion-main__container"]}>
            <button className = {styles["accordion__button"]} onClick = {isOpenHandler}>
                {sectionName} <MdOutlineArrowForwardIos style = {open ? {"transform": "rotateZ(90deg)"} : {}}/>
            </button>
            <div className = {styles["accordion-content__container"]} style = {open ? {} : {maxHeight: 0}}>
                {children}
            </div>
        </div>
    );
}

export default Accordion;