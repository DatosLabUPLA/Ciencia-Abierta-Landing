// Components
import BeneficioItem from "./BeneficiosItem";

// Data
import BeneficiosData from "@/data/beneficios";

// Styles
import styles from "./index.module.scss";

const Beneficios = () => {
    return (
        <div className = {styles["beneficios-main__container"]}>
            {
                BeneficiosData.map(({name, benefits, svg}) =>
                    <BeneficioItem
                        SVG = {svg}
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