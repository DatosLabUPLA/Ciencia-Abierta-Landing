// Components
import Rutas from "../Rutas";
import Recursos from "../Recursos";
import Principios from "../Principios";
import Beneficios from "../Beneficios";
import ProyectosCarrusel from "../ProyectosCarrusel";
import CienciaAbiertaSection from "../CienciaAbiertaSection";

// Data
import SectionData from "@/data/sections";

const SECTIONS = [
  {
    key: "principios",
    Component: Principios
  },
  {
    key: "beneficios",
    Component: Beneficios
  },
  {
    key: "rutas",
    Component: Rutas
  },
  {
    key: "recursos",
    Component: Recursos
  },
  {
    key: "proyectos",
    Component: ProyectosCarrusel
  }
];


const SeccionesHome = () => {
  return (
    <>
      {
        Object.values(SECTIONS).map(
          ({ key, Component }) => {
            const { title, description } = SectionData[key as keyof typeof SectionData];

            return (
              <CienciaAbiertaSection
                title = {title}
                description = {description}
              >
                <Component />
              </CienciaAbiertaSection>
            );
          }
        )
      }
    </>
  );
}

export default SeccionesHome;