// Components
import PreguntasFrecuentes from "@/components/PreguntasFrecuentes";

// Styles
import styles from "./index.module.scss";

const RecursosDigitales = () => {
    return (
        <div className = {styles["recursos-digitales__container"]}>
            <h1 className = {styles["seccion-recursos-digitales__title"]}>Preguntas frecuentes</h1>
            <PreguntasFrecuentes />
        </div>
    );
}

export default RecursosDigitales;