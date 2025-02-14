//Components
import  Layout from "../components/Layout/index";
import CienciaAbiertaPage from "../pages/CienciaAbierta";
import {
    Route,
    Routes,
    Navigate,
    BrowserRouter
} from "react-router-dom";

const CienciaAbierta = <Layout><CienciaAbiertaPage /></Layout>;

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route index path = "/ciencia-abierta" element = {CienciaAbierta}/>
            <Route path = "/diplomado" element = {CienciaAbierta}/>
            <Route path = "/proyecto-ciencia-abierta" element = {CienciaAbierta}/>
            <Route path = "/" element = {<Navigate to = "/ciencia-abierta"/>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;