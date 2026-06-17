// Components
import RutasItem from "./RutasItem";

// Data
import RutasPublicacionData from "@/data/rutasPublicacion";

// Styles
import styles from "./index.module.scss";

const Rutas = () => {
    return (
        <div className = {styles["rutas-main__container"]}>
            {
                RutasPublicacionData.map(
                    ({ name, color }) => (
                        <RutasItem 
                            key = {name} 
                            name = {name} 
                            backgroundColor = {color}
                        />
                    )
                )
            }
        </div>
    );
}

export default Rutas;