//Components
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { 
    FaInstagram,
    FaFacebookF 
} from "react-icons/fa";

//Styles
import styles from "./index.module.scss";

//Images
import LogoFooterUpla from "../../assets/logo_footer_upla.png";

const Footer = () => {
    return (
        <div className = {styles["footer-main__container"]}>
            <img data-aos = "fade-right" src = {LogoFooterUpla} className = {styles["footer__image"]}/>
            <div data-aos = "fade-down" className = {styles["pages-main__container"]}>
                <h1 className = {styles["pages__title"]}>Visítanos también en</h1>
                <div className = {styles["pages__container"]}>
                    <a target = "_blank" href = "https://www.upla.cl/portada/">- Página UPLA</a>
                    <a target = "_blank" href = "https://www.upla.cl/noticias/">- Noticias UPLA</a>
                </div>
            </div>
            <div data-aos = "fade-down" className = {styles["social-networks-main__container"]}>
                <h1 className = {styles["social-networks__title"]}>Nuestras redes sociales</h1>
                <div className = {styles["social-networks__container"]}>
                    <a target = "_blank" href = "https://www.instagram.com/upla_comunica/" style = {{"backgroundColor": "#ea2c59"}}>
                        <FaInstagram />
                    </a>
                    <a target = "_blank" href = "https://www.facebook.com/uplacomunica" style = {{"backgroundColor": "#3b5998"}}>
                        <FaFacebookF />
                    </a>
                    <a target = "_blank" href = "https://twitter.com/upla_comunica" style = {{"backgroundColor": "#000000"}}>
                        <FaXTwitter />
                    </a>
                    <a target = "_blank" href = "https://www.youtube.com/user/comunicacionesupla" style = {{"backgroundColor": "#a82400"}}>
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;