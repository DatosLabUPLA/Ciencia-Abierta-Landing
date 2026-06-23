// Core Dependencies
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

// Components
import Layout from "@/components/Layout";

// Utils
import scrollToTopUtil from "@/utils/scrollToTopUtil";

const GeneralLayout = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        scrollToTopUtil("main__container");
    }, [pathname]);

    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default GeneralLayout;