//Components
import Principios from "../../components/Principios";
import RedirectButton from "../../components/RedirectButton";
import CienciaAbiertaImage from "../../assets/ciencia_abierta.png";
import CienciaAbiertaSection from "../../components/CienciaAbiertaSection";

//Styles 
import styles from "./index.module.scss";

//Data
import SectionData from "../../data/sections.json";

const CienciaAbierta = () => {
    return (
        <div className = {styles["ciencia-abierta-main__container"]}>
            <div className = {styles["ciencia-abierta-banner__container"]}>
                <h1 className = {styles["ciencia-abierta__title"]}>Ciencia Abierta</h1>
                <h3 className = {styles["ciencia-abierta__slogan"]}>Conocimiento sin barreras, innovación sin límites</h3>
                <RedirectButton 
                    url = "#"
                    text = "Saber más"
                    type = "banner"
                />
            </div>
            <div className = {styles["ciencia-abierta-sections__container"]}>
                <div className = {styles["ciencia-abierta-informacion__container"]}>
                    <div className = {styles["ciencia-abierta-definicion__container"]}>
                        <h1 className = {styles["ciencia-abierta-definicion__title"]}>¿Qué es la Ciencia Abierta?</h1>
                        <p  className = {styles["ciencia-abierta-definicion__text"]}>La Ciencia Abierta promueve la colaboración y el intercambio de conocimientos para hacer la investigación más eficiente, creativa y transparente. A través del acceso libre a datos, herramientas e infraestructuras, fortalece la excelencia científica y la confianza social, impulsando el análisis, la innovación y el debate académico.</p>
                        <RedirectButton 
                            url = "#"
                            text = "Saber más"
                            type = "section"
                        />
                    </div>
                    <img src = {CienciaAbiertaImage} className = {styles["ciencia-abierta-definicion__image"]}/>
                </div>
                <CienciaAbiertaSection title = {SectionData["principios"]["title"]} description = {SectionData["principios"]["description"]}>
                    <Principios />
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["beneficios"]["title"]} description = {SectionData["beneficios"]["description"]}>
                    <h1>aaa</h1>
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["recursos"]["title"]} description = {SectionData["recursos"]["description"]}>
                    <h1>aaa</h1>
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["proyectos"]["title"]} description = {SectionData["proyectos"]["description"]}>
                    <h1>aaa</h1>
                </CienciaAbiertaSection>
            </div>
        </div>
    );
};

export default CienciaAbierta;