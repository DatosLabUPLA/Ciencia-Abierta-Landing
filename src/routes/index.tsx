//Components
import  Layout from "../components/Layout/index";
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter
} from "react-router-dom";

//Pages
import RepositoriosPage from "../pages/Repositorios";
import CienciaAbiertaPage from "../pages/CienciaAbierta";

const Repositorios = <Layout><RepositoriosPage /></Layout>;
const CienciaAbierta = <Layout><CienciaAbiertaPage /></Layout>;


const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index path = "/ciencia-abierta" element = {CienciaAbierta}/>
            <Route path = "/diplomado" element = {CienciaAbierta}/>
            <Route path = "/proyecto-ciencia-abierta" element = {CienciaAbierta}/>
            <Route path = "/repositorios" element = {Repositorios}/>
            <Route path = "/" element = {<Navigate to = "/ciencia-abierta"/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;