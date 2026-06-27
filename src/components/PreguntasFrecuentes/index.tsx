// Core Dependencies
import { motion } from "motion/react";

// Components
import Accordion from "../Accordion";
import Markdown from "react-markdown";
import Lighthouse from "../Lighthouse";

// Constants
import { slideRightVariant } from "@/constants/animate-presence-variants";

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
                        <motion.div 
                            initial = "hidden"
                            key = {`faq-${index}`}
                            whileInView = "visible"
                            variants = {slideRightVariant}
                            viewport = {{ once: true, amount: 0.3 }}
                            className = {styles["pregunta-frecuente__wrapper"]}
                        >
                            <Accordion
                                sectionName = {pregunta}
                                {...customAccordeonStyles}
                            >
                                <div className = {styles["pregunta-frecuente__container"]}>
                                    <Markdown>{respuesta}</Markdown>
                                </div>
                            </Accordion>
                        </motion.div>
                    )
                )
            }
            {/* <div style={{position: "absolute", right: 0, width: "100vw", height:"100%", alignSelf: "center", justifySelf: "center"}}>

                <Lighthouse />
            </div> */}
        </div>
    );
}

export default PreguntasFrecuentes;
