// Components
import MiembroEquipo from "../MiembroEquipo";

// Data
import MiembrosEquipo from "@/data/equipo";

// Styles
import styles from "./index.module.scss";

const Equipo = () => {
    return (
        <div className = {styles["equipo__container"]}>
            {
                MiembrosEquipo.map(
                    (miembrosEquipo) => (
                        <MiembroEquipo 
                            {...miembrosEquipo}
                        />
                    )
                )
            }
        </div>
    );
}

export default Equipo;