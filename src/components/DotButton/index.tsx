// Styles
import styles from "./index.module.scss";

interface IDotButton {
    isActivated: boolean;
    handleOnClick: () => void;
}

const DotButton = ({
    isActivated,
    handleOnClick,
}: IDotButton) => {
    const dotButtonClassName = `${styles["dot__button"]} ${isActivated ? styles["activated-dot__button"] : ""}`.trim();

    return (
        <button
            onClick = {handleOnClick}
            className = {dotButtonClassName}
        />
    );
}

export default DotButton;