// Images
import Isotipo from "@/assets/commons/isotipo_ines_ca.png";

// Styles
import styles from "./index.module.scss";

interface IMiembroEquipo {
    fullName: string;
    position: string;
    socialNetworks: string[];
    profileImage: string | null;
}

const MiembroEquipo = ({
    fullName,
    position,
    profileImage
}: IMiembroEquipo) => {
    return (
        <div className = {styles["miembro-equipo__container"]}>
            <img  className = {styles["miembro-equipo__image"]} src = {profileImage ?? Isotipo}/>
            <div className = {styles["miembro-equipo-informacion__container"]}>
                <h3 className = {styles["miembro-equipo__name"]}>{fullName}</h3>
                <h1 className = {styles["miembro-equipo__position"]}>{position}</h1>
            </div>
        </div>
    );
}

export default MiembroEquipo;