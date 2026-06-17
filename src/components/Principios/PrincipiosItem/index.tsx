// Styles
import styles from "./index.module.scss";

interface IPrincipiosItem {
    name: string;
    backgroundText: string;
    backgroundColor: string;
}

const PrincipiosItem = ({
    name, 
    backgroundText, 
    backgroundColor
}: IPrincipiosItem) => {
    const backgroundColorContainer = { backgroundColor: backgroundColor };

    return (
        <div className = {styles["principio-main__container"]}>
            <div className = {styles["principio-front__container"]} style = {backgroundColorContainer}>
                {name}
            </div>
            <div className = {styles["principio-back__container"]} style = {backgroundColorContainer}>
                {backgroundText}
            </div>
        </div>
    )
}

export default PrincipiosItem;