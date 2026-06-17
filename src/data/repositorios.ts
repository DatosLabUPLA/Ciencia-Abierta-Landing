// Images
import ANIDImage from "@/assets/repositorios/anid.png";
import DOAJImage from "@/assets/repositorios/doaj.png";
import DOABImage from "@/assets/repositorios/doab.png";
import ROADImage from "@/assets/repositorios/road.png";
import ArxivImage from "@/assets/repositorios/arXiv.png";
import CEPALImage from "@/assets/repositorios/cepal.png";
import ZenodoImage from "@/assets/repositorios/zenodo.png";
import RedalycImage from "@/assets/repositorios/redalyc.png";
import DialnetImage from "@/assets/repositorios/dialnet.png";
import PreprintsImage from "@/assets/repositorios/preprints.png";

const RepositoriosData = [
    {
        "name": "ANID",
        "imagePath": ANIDImage,
        "externalURL": "https://repositorio.anid.cl/home",
        "description": "Plataforma de Acceso Abierto que reúne la producción científica financiada por la Agencia Nacional de Investigación y Desarrollo de Chile (ANID). Contiene artículos, tesis, informes y otros documentos de investigación generados en proyectos apoyados por la agencia."
    },
    {
        "name": "arXiv",
        "imagePath": ArxivImage,
        "externalURL": "https://arxiv.org/",
        "description": "Repositorio de preprints en física, matemáticas, informática y disciplinas afines, administrado por la Universidad de Cornell. Permite la difusión rápida de investigaciones antes de su revisión formal por pares."
    },
    {
        "name": "CEPAL",
        "imagePath": CEPALImage,
        "externalURL": "https://repositorio.cepal.org/home",
        "description": "Plataforma digital de la Comisión Económica para América Latina y el Caribe (CEPAL), donde se alojan documentos, informes y estudios sobre economía, desarrollo sostenible y políticas públicas en la región."
    },
    {
        "name": "Dialnet",
        "imagePath": DialnetImage,
        "externalURL": "https://dialnet.unirioja.es/",
        "description": "Base de datos de documentación científica en español, especializada en ciencias sociales y humanidades. Ofrece acceso a artículos, tesis y documentos académicos de universidades e instituciones iberoamericanas."
    },
    {
        "name": "Directory of Open Access Journals (DOAJ)",
        "imagePath": DOAJImage,
        "externalURL": "https://doaj.org/",
        "description": "Índice global que recopila revistas científicas de acceso abierto revisadas por pares, abarcando diversas disciplinas. Su objetivo es aumentar la visibilidad y la calidad de la producción científica accesible sin restricciones."
    },
    {
        "name": "Directory of Open Access Books (DOAB)",
        "imagePath": DOABImage,
        "externalURL": "https://www.doabooks.org",
        "description": "DOAB es un directorio que indexa libros académicos de acceso abierto revisados por pares. Su objetivo es mejorar la visibilidad y facilitar la difusión de monografías de calidad sin restricciones. Reúne publicaciones de diversas disciplinas, garantizando el acceso gratuito a contenidos científicos y académicos."
    },
    {
        "name": "Preprints.org",
        "imagePath": PreprintsImage,
        "externalURL": "https://www.preprints.org",
        "description": "Plataforma multidisciplinaria para la publicación de preprints, que permite a los investigadores compartir sus hallazgos antes de la revisión por pares. Fomenta la ciencia abierta y el acceso temprano al conocimiento."
    },
    {
        "name": "Redalyc",
        "imagePath": RedalycImage,
        "externalURL": "https://www.redalyc.org",
        "description": "Sistema de información académica que indexa revistas científicas de Acceso Abierto en Iberoamérica. Su modelo promueve la publicación sin costos para autores ni lectores, priorizando la calidad editorial."
    },
    {
        "name": "ROAD (Directory of Open Access Scholarly Resources)",
        "imagePath": ROADImage,
        "externalURL": "https://road.issn.org/",
        "description": "Servicio del ISSN que proporciona acceso a revistas, conferencias y otros recursos académicos en acceso abierto. Incluye información bibliográfica detallada y facilita la identificación de publicaciones científicas."
    },
    {
        "name": "Zenodo",
        "imagePath": ZenodoImage,
        "externalURL": "https://zenodo.org/",
        "description": "Repositorio de datos y documentos científicos desarrollado por el CERN, que permite a investigadores compartir publicaciones, conjuntos de datos y software con acceso abierto y preservación a largo plazo."
    }
];

export default RepositoriosData;