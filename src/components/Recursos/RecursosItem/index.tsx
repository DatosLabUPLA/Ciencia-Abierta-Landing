// Components
import { Link } from "react-router";
import IconSymbol, { IIconSymbol } from "@/components/IconSymbol";

// Styles
import styles from "./index.module.scss";

interface IRecursosItem {
    name: string;
    path: string;
    icon: IIconSymbol;
    nameColor: string;
    description: string;
    iconBackgroundColor: string;
}

const RecursosItem = ({
    name,
    path,
    icon,
    nameColor,
    description,
    iconBackgroundColor
}: IRecursosItem) => {
    return (
        <Link 
            to = {path}
            target = "_blank" 
            className = {styles["recurso-main__container"]}
        >   
            <IconSymbol 
                {...icon}
                customClass = {styles["recurso__title-icon"]}
                style = {{
                    color: nameColor,
                    backgroundColor: iconBackgroundColor
                }}
            />
            <h3 
                className = {styles["recurso__title"]}
                style = {{
                    color: nameColor
                }}
            >
                {name}
            </h3>
            <p className = {styles["recurso__description"]}>{description}</p>
            <IconSymbol 
                iconLibrary = "Fa6Icons"
                iconName = "FaArrowRightLong"
                style = {{ color: nameColor }}
                customClass = {styles["recurso__link-icon"]}
            />
        </Link>
    );
}

export default RecursosItem;