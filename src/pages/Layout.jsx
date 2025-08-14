import { Outlet, Link } from "react-router-dom";
import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";
import Section from "../componentes/Section";
import Acessibilidade from "../componentes/Acessibilidade";

function Layout() {
    return (
        <>
            
                <Menu />
                <Acessibilidade />
                <Outlet />
                <Section />
                <Footer />
            
        </>
    )
};

export default Layout;