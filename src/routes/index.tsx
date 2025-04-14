//Components
import  Layout from "../components/Layout/index";
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter
} from "react-router-dom";

//Pages
import LicenciasPage from "../pages/Licencias";
import RepositoriosPage from "../pages/Repositorios";
import CienciaAbiertaPage from "../pages/CienciaAbierta";
import RutasPublicacionPage from "../pages/RutasPublicacion";
import DatosInvestigacionPage from "../pages/DatosInvestigacion";
import SoftwareYHerramientasPage from "../pages/SoftwareYHerramientas";

const Licencias = <Layout><LicenciasPage /></Layout>
const Repositorios = <Layout><RepositoriosPage /></Layout>;
const CienciaAbierta = <Layout><CienciaAbiertaPage /></Layout>;
const RutasPublicacion = <Layout><RutasPublicacionPage /></Layout>
const DatosInvestigacion = <Layout><DatosInvestigacionPage /></Layout>
const SoftwareYHerramientas = <Layout><SoftwareYHerramientasPage /></Layout>

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index path = "/ciencia-abierta" element = {CienciaAbierta}/>
            <Route path = "/diplomado" element = {CienciaAbierta}/>
            <Route path = "/proyecto-ciencia-abierta" element = {CienciaAbierta}/>
            <Route path = "/repositorios" element = {Repositorios}/>
            <Route path = "/datos-investigacion" element = {DatosInvestigacion}/>
            <Route path = "/software-y-herramientas" element = {SoftwareYHerramientas}/>
            <Route path = "/licencias" element = {Licencias}/>
            <Route path = "/rutas-de-publicacion" element = {RutasPublicacion}/>
            <Route path = "*" element = {<Navigate to = "/ciencia-abierta"/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;