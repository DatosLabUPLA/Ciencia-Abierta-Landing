// Components
import MiembroEquipo from "../MiembroEquipo";

// Data
import EquipoDireccion from "@/data/equipoDireccion";

// Styles
import styles from "./index.module.scss";

const Direccion = () => {
    return (
        <div className = {styles["direccion__container"]}>
            {
                EquipoDireccion.map(
                    (direccion) => (
                        <MiembroEquipo 
                            {...direccion}
                        />
                    )
                )
            }
        </div>
    );
}

export default Direccion;