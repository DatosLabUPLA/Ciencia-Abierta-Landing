// Core Dependencies
import { wrap } from "motion";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

// Components
import DotButton from "../DotButton";
import IconSymbol from "../IconSymbol";
import ProyectoItem from "./ProyectoItem";

// Data
import proyectosData from "@/data/proyectos";

// Styles
import styles from "./index.module.scss";

const ProyectosCarrusel = () => {
    const [direction, setDirection] = useState<1 | -1>(1);
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    

    const handleSetItem = (itemIndex: number) => {
        setSelectedItemIndex(itemIndex);
    }

    const handleSetNextItem = (newDirection: 1 | -1) => {
        const nextItem = wrap(0, proyectosData.length, selectedItemIndex + newDirection);
        setDirection(newDirection);
        setSelectedItemIndex(nextItem);
    }


    return (
        <div className = {styles["proyectos-carrusel-main__container"]}>
            <AnimatePresence
                initial = {false}
                mode = "popLayout"
                custom = {direction}
            >
                <ProyectoItem
                    key = {selectedItemIndex}
                    proyectoData = {proyectosData[selectedItemIndex]}
                />
            </AnimatePresence>
            <div className = {styles["proyectos-carrusel-buttons__container"]}>
                <button 
                    onClick = {() => handleSetNextItem(-1)}
                    className = {styles["proyectos-carrusel-arrow__button"]} 
                >
                    <IconSymbol
                        iconLibrary = "IoIcons"
                        iconName = "IoIosArrowBack"
                        customClass = {styles["proyectos-carrusel-arrow__icon"]}
                    />
                </button>
                <div className = {styles["proyectos-carrusel-dots__container"]}>
                    {
                        Array.from({ length: proyectosData.length }, 
                            (_, index) => (
                                <DotButton
                                    key = {index}
                                    isActivated = {index === selectedItemIndex}
                                    handleOnClick = {() => handleSetItem(index)}
                                />
                            )
                        )
                    }
                </div>
                <button 
                    onClick = {() => handleSetNextItem(1)}
                    className = {styles["proyectos-carrusel-arrow__button"]}
                >
                    <IconSymbol
                        iconLibrary = "IoIcons"
                        iconName = "IoIosArrowForward"
                        customClass = {styles["proyectos-carrusel-arrow__icon"]}
                    />
                </button>
            </div>
        </div>
    );
}

export default ProyectosCarrusel;