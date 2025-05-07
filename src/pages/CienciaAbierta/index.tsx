//Components
import Rutas from "../../components/Rutas";
import Recursos from "../../components/Recursos";
import Beneficios from "../../components/Beneficios";
import Principios from "../../components/Principios";
import RedirectButton from "../../components/RedirectButton";
import CienciaAbiertaImage from "../../assets/ciencia_abierta.png";
import ProyectosCarrusel from "../../components/ProyectosCarrusel";
import CienciaAbiertaSection from "../../components/CienciaAbiertaSection";

//Styles 
import styles from "./index.module.scss";

//Data
import SectionData from "../../data/sections.json";

const CienciaAbierta = () => {
    return (
        <div className = {styles["ciencia-abierta-main__container"]}>
            <div className = {styles["ciencia-abierta-banner__container"]}>
                <h1 className = {styles["ciencia-abierta__title"]} data-aos = "fade-right">Ciencia Abierta</h1>
                <h3 className = {styles["ciencia-abierta__slogan"]} data-aos = "fade-right">Conocimiento sin barreras, innovación sin límites</h3>
                <RedirectButton
                    url = "https://acceso-abierto.anid.cl/componentes/inescienciaabierta/"
                    text = "Saber más"
                    type = "banner"
                />
            </div>
            <div className = {styles["ciencia-abierta-sections__container"]}>
                <div className = {styles["ciencia-abierta-informacion__container"]} data-aos = "fade-left">
                    <div className = {styles["ciencia-abierta-definicion__container"]}>
                        <h1 className = {styles["ciencia-abierta-definicion__title"]}>¿Qué es la Ciencia Abierta?</h1>
                        <p  className = {styles["ciencia-abierta-definicion__text"]}>La Ciencia Abierta promueve la colaboración y el intercambio de conocimientos para hacer la investigación más eficiente, creativa y transparente. A través del acceso libre a datos, herramientas e infraestructuras, fortalece la excelencia científica y la confianza social, impulsando el análisis, la innovación y el debate académico.</p>
                        <RedirectButton 
                            url = "https://unesdoc.unesco.org/ark:/48223/pf0000379949_spa"
                            text = "Saber más"
                            type = "section"
                        />
                        <a 
                            target = "_blank"
                            href = "https://doi.org/10.54677/YDOG4702"
                            className = {styles["ciencia-abierta-referencia_link"]}
                        >UNESCO. (2021). Recomendación de la UNESCO sobre la Ciencia Abierta (Documento de programa o de reunión No. SC-PCB-SPP/2021/OS/UROS).</a>
                    </div>
                    <img src = {CienciaAbiertaImage} className = {styles["ciencia-abierta-definicion__image"]}/>
                </div>
                <CienciaAbiertaSection title = {SectionData["principios"]["title"]} description = {SectionData["principios"]["description"]}>
                    <Principios />
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["beneficios"]["title"]} description = {SectionData["beneficios"]["description"]}>
                    <Beneficios />
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["rutas"]["title"]} description = {SectionData["rutas"]["description"]}>
                    <Rutas />
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["recursos"]["title"]} description = {SectionData["recursos"]["description"]}>
                    <Recursos />
                </CienciaAbiertaSection>
                <CienciaAbiertaSection title = {SectionData["proyectos"]["title"]} description = {SectionData["proyectos"]["description"]}>
                    <ProyectosCarrusel />
                </CienciaAbiertaSection>
            </div>
        </div>
    );
};

export default CienciaAbierta;