// Components
import DetalleRecursosItem from "../DetalleRecursos/DetalleRecursosItem";

// Data
import AlianzasData from "@/data/alianzas";

// Styles
import styles from "./index.module.scss";

const Alianzas = () => {
    return (
        <div className = {styles["alianzas__container"]}>
            {
                AlianzasData.map(
                    ({name, imagePath, externalURL}) => (
                        <DetalleRecursosItem 
                            key = {name}
                            name = {name}
                            imagePath = {imagePath}
                            externalURL = {externalURL}
                        />
                    )
                )
            }
        </div>
    );
}

export default Alianzas;