import { Outlet, Link } from "react-router-dom";
import Menu from "../componentes/Menu";
import Footer from "../componentes/Footer";
import Section from "../componentes/Section";


function Layout() {
    return (
        <>
                
                <Menu />
                
                <Outlet />
                <Section />
                <Footer />
            
        </>
    )
};

export default Layout;