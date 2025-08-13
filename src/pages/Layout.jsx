import { Outlet, Link } from "react-router-dom";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Acessibilidade from "../componentes/Acessibilidade";

function Layout() {
    return (
        <>
            <div className='container'>
                <Menu />
                <Acessibilidade />
                <Outlet />
                <Section />
                <Footer />
            </div>
        </>
    )
};

export default Layout;