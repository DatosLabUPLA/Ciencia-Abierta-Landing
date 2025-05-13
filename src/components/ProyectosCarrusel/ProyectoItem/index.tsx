//Components
import { useEffect, useState } from "react";
import { IProyectoCarrusel } from "../interface";

//Styles
import styles from "./index.module.scss";

const ProyectoItem = ({
    name,
    position,
    imagePath,
    description,
    currentPosition
}: IProyectoCarrusel) => {
    const [transformStyles, setTransformStyles] = useState({
        transform: "translateX(0)"
    })
    
    useEffect(() => {
        //OPTIMIZAR
        const transformStyle = {
            transform: "translateX(0)"
        }

        if (position !== currentPosition) {
            transformStyle.transform = position < currentPosition ? "translateX(-120vw)" : "translateX(120vw)";
        }

        setTransformStyles(prevState => {
            return {...prevState, ...transformStyle}
        });
    }, [currentPosition]);

    return (
        <div className = {styles["proyecto-main__container"]} style = {transformStyles}>
            <p className = {styles["proyecto__text"]}>{description}</p>
            <h1 className = {styles["proyecto__title"]}>{name}</h1>
            <img className = {styles["proyecto__image"]} src = {imagePath}/>
        </div>
    );
}

export default ProyectoItem;