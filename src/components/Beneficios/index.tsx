//Components
import { IBeneficio } from "./interface";
import BeneficioItem from "./BeneficioItem";

//Styles
import styles from "./index.module.scss";

//Data
import BeneficiosData from "../../data/beneficios.json";

const Beneficios = () => {
    return (
        <div className = {styles["beneficios-main__container"]}>
            {
                BeneficiosData.map(({name, benefits}: IBeneficio) =>
                    <BeneficioItem
                        key = {name}
                        name = {name}
                        benefits = {benefits}
                    />
                )
            }
        </div>
    );
}

export default Beneficios;