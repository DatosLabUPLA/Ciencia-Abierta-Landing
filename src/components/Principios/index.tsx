// Components
import PrincipiosItem from "./PrincipiosItem";

// Styles
import styles from "./index.module.scss";

// Data
import PrincipiosData from "@/data/principios";

const Principios = () => {
    return (
        <div className = {styles["principios-main__container"]}>
            {
                PrincipiosData.map(({
                    name, 
                    backgroundText, 
                    backgroundColor
                }) => 
                    <PrincipiosItem 
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