//Components
import RutaItem from "./RutaItem";

//Styles
import styles from "./index.module.scss";

//Data
import RutasPublicacionData from "../../data/rutasPublicacion.json";

const Rutas = () => {
    return (
        <div className = {styles["rutas-main__container"]}>
            {
                RutasPublicacionData.map(({ name, color }) => 
                    <RutaItem name = {name} backgroundColor = {color}/>
                )
            }
        </div>
    );
}

export default Rutas;