// Components
import IconSymbol from "../IconSymbol";

// Styles
import styles from "./index.module.scss";

interface ICustomButton {
    disabled?: boolean;
    buttonText: string;
    iconName?: string;
    iconLibrary?: string;
    customClassName?: string;
    handleOnClick: () => void
}

const CustomButton = ({
    iconName,
    buttonText,
    iconLibrary,
    handleOnClick,
    customClassName,
    disabled = false
}: ICustomButton) => {
    const buttonClass = `${styles.custom__button} ${customClassName}`.trim();

    return (
        <button 
            disabled = {disabled}
            onClick = {handleOnClick}
            className = {buttonClass}
        >
            {
                iconName && iconLibrary &&
                <IconSymbol 
                    iconName = {iconName}
                    iconLibrary = {iconLibrary}
                    customClass = {styles["custom-button__icon"]}
                />
            }
            {buttonText}
        </button>
    );
}

export default CustomButton;