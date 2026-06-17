// Images
import LicenciasImage from "@/assets/recursos/licencias.png";
import RepositoriosImage from "@/assets/recursos/repositorios.png";
import DatosInvestigacionImage from "@/assets/recursos/datos.png";
import SoftwareHerramientasImage from "@/assets/recursos/software.png";

const RecursosData = [
    {
        "name": "Repositorios Abiertos",
        "path": "/repositorios",
        "imagePath": RepositoriosImage,
        "description": "Plataformas para compartir artículos y publicaciones científicas en acceso abierto."
    },
    {
        "name": "Datos de Investigación Abiertos",
        "path": "/datos-investigacion",
        "imagePath": DatosInvestigacionImage,
        "description": "Recursos para compartir y reutilizar datos científicos."
    },
    {
        "name": "Software y Herramientas Abiertas",
        "path": "/software-y-herramientas",
        "imagePath": SoftwareHerramientasImage,
        "description": "Programas de código abierto para la investigación."
    },
    {
        "name": "Licencias Abiertas",
        "path": "/licencias",
        "imagePath": LicenciasImage,
        "description": "Herramientas para compartir contenido legalmente."
    }
];

export default RecursosData;