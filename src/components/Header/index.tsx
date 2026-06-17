// Components
import { Link, useLocation } from "react-router-dom";

// Constants
import { NAV_LINKS } from "@/constants/navigation";

// Images
import LogoUpla from "@/assets/commons/logo_ines_ca.png";

// Styles
import styles from "./index.module.scss";

const Header = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <header className = {styles["header-main__container"]}>
            <div className = {styles["header-logo__container"]}>
                <Link to = "/ciencia-abierta">
                    <img className = {styles["header-logo__image"]} src = {LogoUpla} alt = "logo upla"/>
                </Link>
            </div>
            <ul className = {styles["nav-ul__container"]}>
                {
                    NAV_LINKS.map(
                        ({ name, href }) => {
                            const liClassName = `${styles["page__li"]} ${location.pathname === href ? styles["active-page__li"] : ""}`.trim();

                            return (
                                <li 
                                    key = {href} 
                                    className = {liClassName}
                                >
                                    <Link to = {href}>{name}</Link>
                                </li>
                            );
                        }
                    )
                }
            </ul>
        </header>
    );
}

export default Header;