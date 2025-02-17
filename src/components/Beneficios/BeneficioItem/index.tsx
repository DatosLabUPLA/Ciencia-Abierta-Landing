//Components
import { IBeneficio } from "../interface";

//Styles
import styles from "./index.module.scss";


const BeneficioItem = ({name, benefits}: IBeneficio) => {
    return (
        <div className = {styles["beneficio-main__container"]}>
            <ul className = {styles["beneficio-ul__container"]}>
                {
                    benefits.map((benefit: string) => <li className = {styles["beneficio__li"]}>{benefit}</li>)
                }
            </ul>
            <h1 className = {styles["beneficio__title"]} dangerouslySetInnerHTML = {{ __html: name }}/>
        </div>
    );
}

export default BeneficioItem;