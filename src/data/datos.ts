// Images
import Re3dataImage from "@/assets/datos/re3data.png";
import FigshareImage from "@/assets/datos/figshare.png";
import DatosGobImage from "@/assets/datos/datos_gob.png";
import DataEuropaImage from "@/assets/datos/data_europa.png";
import FAIRsharingImage from "@/assets/datos/fairsharing.png";

const DatosInvestigacionData = [
    {
        "name": "Data Europa EU",
        "imagePath": DataEuropaImage,
        "externalURL": "https://data.europa.eu/es",
        "description": "Portal oficial de datos abiertos de la Unión Europea, que reúne información pública de los estados miembros. Ofrece acceso a conjuntos de datos en múltiples formatos para fomentar la investigación, el desarrollo tecnológico y la innovación en sectores clave."
    },
    {
        "name": "Figshare",
        "imagePath": FigshareImage,
        "externalURL": "https://figshare.com/",
        "description": "Repositorio en línea que permite a investigadores almacenar, compartir y publicar diversos tipos de resultados científicos, como artículos, conjuntos de datos, imágenes, videos y presentaciones. Promueve la ciencia abierta al proporcionar DOI para cada material depositado, garantizando su citabilidad y acceso público."
    },
    {
        "name": "FAIRsharing",
        "imagePath": FAIRsharingImage,
        "externalURL": "https://fairsharing.org/",
        "description": "Directorio de estándares, bases de datos y políticas relacionadas con la gestión de datos científicos, alineado con los principios FAIR (Findable, Accessible, Interoperable, Reusable). Apoya a investigadores y organizaciones en la adopción de buenas prácticas para la gestión de datos."
    },
    {
        "name": "Portal de Datos Abiertos del Gobierno de Chile",
        "imagePath": DatosGobImage,
        "externalURL": "https://datos.gob.cl/dataset/",
        "description": "Plataforma que centraliza conjuntos de datos abiertos generados por instituciones públicas de Chile. Facilita el acceso a información en diversas áreas, promoviendo la transparencia, la innovación y la reutilización de datos para investigación y desarrollo."
    },
    {
        "name": "re3data (Registry of Research Data Repositories)",
        "imagePath": Re3dataImage,
        "externalURL": "https://www.re3data.org/",
        "description": "Directorio global de repositorios de datos de investigación en diversas disciplinas. Proporciona información detallada sobre políticas de acceso, formatos y certificaciones, facilitando la localización de fuentes de datos confiables y reutilizables."
    }
];

export default DatosInvestigacionData;