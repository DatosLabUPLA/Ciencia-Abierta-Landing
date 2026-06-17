// Components
import { Link } from "react-router";

// Styles
import styles from "./index.module.scss";

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
            {name}
        </Link>
    );
}

export default RutasItem;