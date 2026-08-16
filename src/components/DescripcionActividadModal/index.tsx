// Components
import Markdown from "react-markdown";
import IconSymbol from "../IconSymbol";
import ModalWrapper from "../ModalWrapper";
import CustomButton from "../CustomButton";

// Images
import LogoImage from "@/assets/commons/logo_ines_ca.png";

// Styles
import styles from "./index.module.scss";

export interface IDescripcionActividad {
    name: string;
    date: string;
    imagePath?: string;
    description: string;
}

interface IDescripcionActividadModal {
    handleCloseModal: () => void;
    actividad: IDescripcionActividad
}

const DescripcionActividadModal = ({
    actividad,
    handleCloseModal
}: IDescripcionActividadModal) => {
    const   {    
        name,
        date,
        imagePath,
        description
    } = actividad;

    return (
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
                    <img src = {imagePath ?? LogoImage} alt = "actividad-image" />
                </div>
            </div>
        </ModalWrapper>
    );
}

export default DescripcionActividadModal;