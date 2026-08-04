// Components
import IconSymbol, { IIconSymbol } from "@/components/IconSymbol";

// Styles
import styles from "./index.module.scss";

interface IPrincipiosItem {
    name: string;
    icon: IIconSymbol;
    nameColor: string;
    description: string;
    backgroundColor: string;
    iconBackgroundColor: string;
}

const PrincipiosItem = ({
    name,
    icon,
    nameColor,
    description,
    backgroundColor,
    iconBackgroundColor
}: IPrincipiosItem) => {
    return (
        <div 
            style = {{ backgroundColor: backgroundColor }}
            className = {styles["principio-main__container"]}
        >
            <div className = {styles["principio__title-container"]}>
                <IconSymbol 
                    {...icon}
                    customClass = {styles["principio__title-icon"]}
                    style = {{
                        color: nameColor,
                        backgroundColor: iconBackgroundColor
                    }} 
                />
                <h3
                    style = {{ color: nameColor }} 
                    className = {styles["principio__title"]}
                >
                    {name}
                </h3>
            </div>
            <p className = {styles["principio__container"]}>{description}</p>
        </div>
    )
}

export default PrincipiosItem;