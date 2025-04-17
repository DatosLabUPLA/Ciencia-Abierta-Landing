//Components
import { Link } from "react-router";
import { IRutaItem } from "../interface";

//Styles
import styles from "./index.module.scss";

const RutaItem = ({
    name,
    backgroundColor
}: IRutaItem) => {
    return (
        <Link
            target = "_blank"
            to = "/rutas-de-publicacion"
            className = {styles["ruta-item-main__container"]} 
            style = {{"backgroundColor": backgroundColor}}
        >
            {name}
        </Link>
    );
}

export default RutaItem;