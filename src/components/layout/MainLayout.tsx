import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import WhatsappBtn from "@/components/UI/SocialBtn/WhatsappBtn";
import KofiBtn from "@/components/UI/SocialBtn/KofiBtn";
import { PATHS } from "@/constants/routes";

const MainLayout = () => {
    const location = useLocation();
    const showFloatingButtons = location.pathname !== PATHS.LINKS;

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {showFloatingButtons && <WhatsappBtn />}
            {showFloatingButtons && <KofiBtn />}
        </>
    )
}

export default MainLayout;