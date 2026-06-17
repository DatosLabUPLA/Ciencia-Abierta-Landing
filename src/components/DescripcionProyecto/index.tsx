// Components
import CustomLink from "../CustomLink";

// Styles
import styles from "./index.module.scss";

const DescripcionProyecto = () => {
    const projectDescription = [
        "El Proyecto InES Ciencia Abierta de la Universidad de Playa Ancha tiene como propósito fortalecer las capacidades institucionales para la gestión de la información científica y los datos de investigación, promoviendo una cultura de investigación más abierta, colaborativa y alineada con estándares nacionales e internacionales.",
        "Impulsado por la Vicerrectoría de Investigación, Postgrado e Innovación y financiado por la Agencia Nacional de Investigación y Desarrollo (ANID), este proyecto busca avanzar en la implementación de políticas, infraestructura tecnológica y procesos formativos que permitan mejorar la visibilidad, accesibilidad y reutilización del conocimiento generado en la institución.",
        "A través de sus líneas de acción, el proyecto aborda el desarrollo de una gobernanza institucional en Ciencia Abierta, la implementación de plataformas tecnológicas interoperables, la formación de capacidades en la comunidad académica y el fortalecimiento de redes de colaboración a nivel nacional e internacional.",
        "De este modo, la iniciativa contribuye a la democratización del conocimiento, promoviendo prácticas de investigación responsables, transparentes y orientadas al impacto social, en coherencia con los desafíos actuales del ecosistema científico y las políticas de acceso abierto."
    ];

    return (
        <div className = {styles["descripcion-proyecto__container"]}>
            {
                projectDescription.map(
                    (description, index) => (
                        <span 
                            key = {`project-description-${index}`}
                            className = {styles["descripcion-proyecto__text"]}
                        >
                            {description}
                        </span>
                    )
                )
            }
            <div className = {styles["proyecto-politicas__container"]}>
                <CustomLink
                    iconLibrary = "Io5Icons" 
                    iconName = "IoLogOutOutline"
                    linkText = "Política Ciencia Abierta UPLA"
                    customClassName = {styles["proyecto-politica__button"]}
                    href = "https://s3.amazonaws.com/documentos.anid.cl/estudios/Politica_acceso_a_informacion_cientifica_2022.pdf"
                />
                <CustomLink
                    iconLibrary = "Io5Icons" 
                    linkText = "Política ANID"
                    iconName = "IoLogOutOutline"
                    customClassName = {styles["proyecto-politica__button"]}
                    href = "https://s3.amazonaws.com/documentos.anid.cl/estudios/Politica_acceso_a_informacion_cientifica_2022.pdf"
                />
            </div>
        </div>
    );
}

export default DescripcionProyecto;