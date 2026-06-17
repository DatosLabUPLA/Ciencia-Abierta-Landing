// Components
import Accordion from "../Accordion";
import Markdown from "react-markdown";

// Data
import PreguntasFrecuentesData from "@/data/preguntasFrecuentes";

// Styles
import styles from "./index.module.scss";

const PreguntasFrecuentes = () => {
    const customAccordeonStyles = {
        closedStyles: {
            color: "#FFFFFF",
            backgroundColor: "#0E9FE3"
        },
        openStyles: {
            filter: "brightness(1.1)",
            backgroundColor: "#0E9FE3"
        }
    };

    return (
        <div className = {styles["preguntas-frecuentes__container"]}>
            {
                PreguntasFrecuentesData.map(
                    ({pregunta, respuesta}, index) => (
                        <Accordion
                            key = {`faq-${index}`}
                            sectionName = {pregunta}
                            {...customAccordeonStyles}
                        >
                            <div className = {styles["pregunta-frecuente__container"]}>
                                <Markdown>{respuesta}</Markdown>
                            </div>
                        </Accordion>
                    )
                )
            }
        </div>
    );
}

export default PreguntasFrecuentes;
