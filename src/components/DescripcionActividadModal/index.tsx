// Components
import Markdown from "react-markdown";
import IconSymbol from "../IconSymbol";
import ModalWrapper from "../ModalWrapper";
import CustomButton from "../CustomButton";
import { AnimatePresence } from "motion/react";

// Images
import LogoImage from "@/assets/commons/logo_ines_ca.png";

// Styles
import styles from "./index.module.scss";

interface IDescripcionActividadModal {
    name: string;
    date: string;
    imagePath?: string;
    modalState: boolean;
    description: string;
    handleCloseModal: () => void
}

const DescripcionActividadModal = ({
    name,
    date,
    imagePath,
    modalState,
    description,
    handleCloseModal
}: IDescripcionActividadModal) => {
    return (
        <AnimatePresence>
            {
                modalState &&
                <ModalWrapper handleCloseModal = {handleCloseModal}>
                    <div 
                        onClick = {(event) => event.stopPropagation()}
                        className = {styles["descripcion-actividad-modal__container"]}
                    >
                        <div className = {styles["descripcion-actividad-header__container"]}>
                            <div className = {styles["actividad-fecha__container"]}>
                                <span className = {styles["actividad-fecha__title"]}>Actividad</span>
                                <span className = {styles["actividad__date"]}>
                                    <IconSymbol
                                        iconLibrary = "FaIcons"
                                        iconName = "FaRegCalendar"
                                        customClass = {styles["actividad-date__icon"]}
                                    /> 
                                    {date}
                                </span>
                            </div>
                            <CustomButton 
                                buttonText = "Cerrar"
                                iconName = "IoMdClose"
                                iconLibrary = "IoIcons"
                                handleOnClick = {handleCloseModal}
                                customClassName = {styles["header-close__button"]}
                            />
                        </div>
                        <div className = {styles["descripcion-actividad__container"]}>             
                            <h1 className = {styles["descripcion-actividad__title"]}>{name}</h1>
                            <Markdown>{description}</Markdown>
                            <img src = {imagePath ?? LogoImage}/>
                        </div>
                    </div>
                </ModalWrapper>
            }
        </AnimatePresence>
    );
}

export default DescripcionActividadModal;