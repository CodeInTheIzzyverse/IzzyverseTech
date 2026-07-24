import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@/components/UI/Button/Button";
import "./Header.scss";
import { PATHS } from "@/constants/routes";
import { SOCIAL } from "@/constants/social";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 8);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={isScrolled ? "header header--scrolled" : "header"}>
            <section className="header__brand">
                <NavLink to={PATHS.HOME} onClick={closeMenu}>
                    <span>Izzyverse</span><span className="header__brand--accent">Tech</span>
                </NavLink>
            </section>

            <section className={`header__content ${isMenuOpen ? "header__content--open" : ""}`}>
                <nav className="header__menu">
                    <ul>
                        <li>
                            <NavLink
                                to={PATHS.HOME}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={PATHS.SERVICES}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                Servicios
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={PATHS.FAQ}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                FAQ
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={PATHS.CONTACT}
                                onClick={closeMenu}
                                className={({ isActive }) => isActive ? "header__link header__link--active" : "header__link"}
                            >
                                Contacto
                            </NavLink>
                        </li>
                        <li>
                            <Button variant="primary">
                                <a target="_blank" href={SOCIAL.whatsapp}>
                                    Agendar Cita
                                </a>
                            </Button>
                        </li>
                    </ul>
                </nav>
            </section>

            <Button variant="primary" className="header__cta">
                <a target="_blank" href={SOCIAL.whatsapp}>
                    Agendar Cita
                </a>
            </Button>

            <button className="header__hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5h16M4 12h16M4 19h16" />
                    </svg>
                )}
            </button>
        </header>
    )
}

export default Header;