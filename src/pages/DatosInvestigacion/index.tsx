// Components
import DetalleRecursos from "@/components/DetalleRecursos";

// Data
import datosInvestigacionData from "@/data/datos";

// Styles
import styles from "./index.module.scss";

const DatosInvestigacion = () => {
    const resourceDescription = "Los **Datos de Investigación Abiertos** son aquellos datos generados durante procesos científicos que se ponen a disposición del público sin restricciones, permitiendo su acceso, uso, reutilización y redistribución a cualquier persona. Esta práctica se alinea con la filosofía de la Ciencia Abierta, promoviendo la transparencia, la colaboración y el avance del conocimiento. Al compartir datos de manera abierta, se facilita la verificación de resultados, se fomenta la innovación y se optimiza el uso de recursos en la comunidad científica.\n\nPara que los datos sean considerados abiertos, deben tener ciertas características, como cumplir con los principios FAIR y contar con licencias que permitan su libre uso y redistribución, con posibles requisitos mínimos como la atribución de la fuente original.\n\nPara una mejor administración de los Datos de Investigación Abiertos, se recomienda tener un Plan de Gestión de Datos o PGD. El PGD es un documento protocolar que describe cómo se manejarán los datos durante un proyecto de investigación o en una organización, en el que se detalla los tipos de datos que se recopilarán, cómo se documentarán, compartirán y conservarán, su almacenamiento y creación de respaldos de seguridad, responsabilidades y recursos, entre otras consideraciones. Una herramienta útil para generar PGD es [DMP Tool](https://dmptool.org/plans), un página que contiene plantillas para rellenar formularios sobre datos de investigación, disponible actualmente solo en inglés."
    
    return (
        <div className = {styles["datos-main__container"]}>
            <DetalleRecursos
                description = {resourceDescription}
                exampleTitle = "Datos de Investigación"
                exampleItemsData = {datosInvestigacionData}
                title = "¿Qué son los Datos de Investigación Abiertos?"
            />
        </div>
    );
}

export default DatosInvestigacion;