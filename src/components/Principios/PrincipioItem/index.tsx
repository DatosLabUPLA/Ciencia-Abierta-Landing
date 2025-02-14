//Components
import { IPrincipio } from "../interface";

//Styles
import styles from "./index.module.scss";

const PrincipioItem = ({name, backgroundText, backgroundColor}: IPrincipio) => {
    return (
        <div className = {styles["principio-main__container"]}>
            <div className = {styles["principio-front__container"]} style = {{"backgroundColor": backgroundColor}}>
                {name}
            </div>
            <div className = {styles["principio-back__container"]} style = {{"backgroundColor": backgroundColor}}>
                {backgroundText}
            </div>
        </div>
    )
}

export default PrincipioItem;