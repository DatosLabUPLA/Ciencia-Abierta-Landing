// Core Dependencies
import { Outlet } from "react-router";

// Components
import Layout from "@/components/Layout";

const GeneralLayout = () => {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default GeneralLayout;