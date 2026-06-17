// Core Dependencies
import {
    Route,
    Navigate,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

// Components
import GeneralLayout from "./layouts/GeneralLayout";

// Pages
import LicenciasPage from "@/pages/Licencias";
import ActividadesPage from "@/pages/Actividades";
import RepositoriosPage from "@/pages/Repositorios";
import CienciaAbiertaPage from "@/pages/CienciaAbierta";
import RutasPublicacionPage from "@/pages/RutasPublicacion";
import RecursosDigitalesPage from "@/pages/RecursosDigitales";
import DatosInvestigacionPage from "@/pages/DatosInvestigacion";
import SoftwareYHerramientasPage from "@/pages/SoftwareYHerramientas";
import ProyectoCienciaAbiertaPage from "@/pages/ProyectoCienciaAbierta";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element = {<GeneralLayout />}>
                <Route path = "/licencias" element = {<LicenciasPage />}/>
                <Route path = "/actividades" element = {<ActividadesPage />}/>
                <Route path = "/diplomado" element = {<CienciaAbiertaPage />}/>
                <Route path = "/repositorios" element = {<RepositoriosPage />}/>
                <Route path = "/recursos" element = {<RecursosDigitalesPage />}/>
                <Route index path = "/ciencia-abierta" element = {<CienciaAbiertaPage />}/>
                <Route path = "/rutas-de-publicacion" element = {<RutasPublicacionPage />}/>
                <Route path = "/datos-investigacion" element = {<DatosInvestigacionPage />}/>
                <Route path = "/software-y-herramientas" element = {<SoftwareYHerramientasPage />}/>
                <Route path = "/proyecto-ciencia-abierta" element = {<ProyectoCienciaAbiertaPage />}/>
            </Route>
            <Route path = "*" element = {<Navigate to = "/ciencia-abierta"/>}/>
        </Route>
    )
);

export default Router;