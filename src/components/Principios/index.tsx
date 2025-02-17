//Components
import { IPrincipio } from "./interface";
import PrincipioItem from "./PrincipioItem";

//Styles
import styles from "./index.module.scss";

//Data
import PrincipiosData from "../../data/principios.json";

const Principios = () => {
    return (
        <div className = {styles["principios-main__container"]}>
            {
                PrincipiosData.map(({name, backgroundText, backgroundColor}: IPrincipio) => 
                    <PrincipioItem 
                        key = {name}
                        name = {name} 
                        backgroundText = {backgroundText} 
                        backgroundColor = {backgroundColor}
                    />
                )
            }
        </div>
    );
}

export default Principios;