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
    const [transform, setTransform] = useState({
        transform: "translateX(0)"
    })
    
    useEffect(() => {
        //OPTIMIZAR
        const transformStyle = {
            transform: ""
        }
        if (position < currentPosition) {
            transformStyle.transform = "translateX(-120vw)"
        } else if (position > currentPosition) {
            transformStyle.transform = "translateX(120vw)"
        } else {
            transformStyle.transform = "translateX(0)"
        }

        setTransform(prevState => {
            return {...prevState, ...transformStyle}
        });
    }, [currentPosition]);

    return (
        <div className = {styles["proyecto-main__container"]} style = {transform}>
            <p className = {styles["proyecto__text"]}>{description}</p>
            <h1 className = {styles["proyecto__title"]}>{name}</h1>
            <img className = {styles["proyecto__image"]} src = {imagePath}/>
        </div>
    );
}

export default ProyectoItem;