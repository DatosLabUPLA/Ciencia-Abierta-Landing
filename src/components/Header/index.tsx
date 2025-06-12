//Components
import { Link } from "react-router-dom";

//Styles
import styles from "./index.module.scss";

//Images
import LogoUpla from "../../assets/logo_ines_ca.png";

const Header = () => {
    return (
        <header className = {styles["header-main__container"]}>
            <div className = {styles["header-logo__container"]}>
                <img className = {styles["header-logo__image"]} src = {LogoUpla} alt = "logo upla"/>
            </div>
            <ul className = {styles["nav-ul__container"]}>
                <li className = {styles["page__li"]}><Link to = "/ciencia-abierta">Ciencia Abierta</Link></li>
                <li className = {styles["page__li"]}><Link to = "/diplomado">Diplomado</Link></li>
                <li className = {styles["page__li"]}><Link to = "/proyecto-ciencia-abierta">Proyecto Ciencia Abierta</Link></li>
            </ul>
        </header>
    );
}

export default Header;