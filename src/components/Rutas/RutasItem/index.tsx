// Components
import { Link } from "react-router";

// Styles
import styles from "./index.module.scss";
import IconSymbol from "@/components/IconSymbol";

interface IRutasItem {
    name: string;
    backgroundColor: string;
}

const RutasItem = ({
    name,
    backgroundColor
}: IRutasItem) => {
    return (
        <Link
            target = "_blank"
            to = "/rutas-de-publicacion"
            className = {styles["ruta-item-main__container"]} 
            style = {{"backgroundColor": backgroundColor}}
        >
            <span className = {styles["ruta-item__name"]}>{name}</span>
            <IconSymbol
                iconLibrary = "Fa6Icons"
                iconName = "FaArrowRightLong"
                customClass = {styles["ruta-item__icon"]}
            />
        </Link>
    );
}

export default RutasItem;