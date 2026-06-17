// Components
import RecursosYHerramientasItem from "../RecursosYHerramientasItem";

// Data
import AlianzasData from "@/data/alianzas";

// Styles
import styles from "./index.module.scss";

const Alianzas = () => {
    return (
        <div className = {styles["alianzas__container"]}>
            {
                AlianzasData.map(
                    (alianzaData) => (
                        <RecursosYHerramientasItem 
                            {...alianzaData}
                        />
                    )
                )
            }
        </div>
    );
}

export default Alianzas;