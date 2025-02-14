//Components
import { IPrincipio } from "./interface";

//Styles
import styles from "./index.module.scss";

//Data
import PrincipiosData from "../../data/principios.json";
import PrincipioItem from "./PrincipioItem";

const Principios = () => {
    return (
        <div className = {styles["principios-main__container"]}>
            {
                PrincipiosData.map(({name, backgroundText, backgroundColor}: IPrincipio) => 
                    <PrincipioItem 
                        name = {name} 
                        backgroundText = {backgroundText} 
                        backgroundColor = {backgroundColor}/>
                )
            }
        </div>
    );
}

export default Principios;