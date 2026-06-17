// Components
import Equipo from "@/components/Equipo";
import Alianzas from "@/components/Alianzas";
import Direccion from "@/components/Direccion";
import DescripcionProyecto from "@/components/DescripcionProyecto";

// Styles
import styles from "./index.module.scss";

const ProyectoCienciaAbierta = () => {
    return (
        <div className = {styles["proyecto-ciencia-abierta__container"]}>
            <h1 className = {styles["seccion-proyecto-ciencia-abierta__title"]}>Sobre el proyecto</h1>
            <DescripcionProyecto />
            <h1 className = {styles["seccion-proyecto-ciencia-abierta__title"]}>Dirección</h1>
            <Direccion />
            <h1 className = {styles["seccion-proyecto-ciencia-abierta__title"]}>Equipo de gestión</h1>
            <Equipo />
            <h1 className = {styles["seccion-proyecto-ciencia-abierta__title"]}>Colaboradores</h1>
            <Alianzas />
        </div>
    );
}

export default ProyectoCienciaAbierta;