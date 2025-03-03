//Core Dependencies
import { useState } from "react";

//Components
import ProyectoItem from "./ProyectoItem";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

//Styles
import styles from "./index.module.scss";

//Data
import ProyectosCarruselData from "../../data/proyectos.json";

const ProyectosCarrusel = () => {
    const [endPosition, setEndPosition] = useState(false);
    const [startPosition, setStartPosition] = useState(true);
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    
    const changeProyectoHandler = (next: boolean) => {
        if (next && currentItemIndex < (ProyectosCarruselData.length - 1)) {
            setStartPosition(false);
            setCurrentItemIndex(currentItemIndex + 1);
            setEndPosition((currentItemIndex + 1) === (ProyectosCarruselData.length - 1) ? true : false);
        } else if (!next && currentItemIndex > 0) {
            setEndPosition(false);
            setCurrentItemIndex(currentItemIndex - 1);
            setStartPosition(!(currentItemIndex - 1) ? true : false);
        }
    }

    return (
        <div className = {styles["proyectos-carrusel-main__container"]}>
            <button 
                onClick = {() => changeProyectoHandler(false)}
                style = {startPosition ? {backgroundColor: "#9e9e9e"} : {}}
                className = {styles["proyectos-carrusel-left-arrow__button"]} 
            >
                <IoIosArrowBack size = {24} color = "white"/>
            </button>
            {
                ProyectosCarruselData.map(({name, imagePath, description}, index) => 
                    <ProyectoItem
                        key = {name}
                        name = {name}
                        position = {index}
                        imagePath = {imagePath}
                        description = {description}
                        currentPosition = {currentItemIndex}
                    />
                )
            }
            <button 
                onClick = {() => changeProyectoHandler(true)}
                style = {endPosition ? {backgroundColor: "#9e9e9e"} : {}}
                className = {styles["proyectos-carrusel-right-arrow__button"]}
            >
                <IoIosArrowForward size = {24} color = "white"/>
            </button>
        </div>
    );
}

export default ProyectosCarrusel;