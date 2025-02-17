//Components
import ProyectoItem from "./ProyectoItem";
import {IProyectoCarrusel} from "./interface";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

//Styles
import styles from "./index.module.scss";

//Data
import ProyectosCarruselData from "../../data/proyectos.json";

const ProyectosCarrusel = () => {
    return (
        <div className = {styles["proyectos-carrusel-main__container"]}>
            <button className = {styles["proyectos-carrusel-left-arrow__button"]}>
                <IoIosArrowBack size = {24} color = "white"/>
            </button>
            {
                ProyectosCarruselData.map(({name, imagePath, description}: IProyectoCarrusel) => 
                    <ProyectoItem
                        key = {name}
                        name = {name}
                        imagePath = {imagePath}
                        description = {description}
                    />
                )
            }
            <button className = {styles["proyectos-carrusel-right-arrow__button"]}>
                <IoIosArrowForward size = {24} color = "white"/>
            </button>
        </div>
    );
}

export default ProyectosCarrusel;