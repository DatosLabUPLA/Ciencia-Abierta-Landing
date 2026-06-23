import { PropsWithChildren } from "react";

// Components
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Layout;