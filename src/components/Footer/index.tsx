// Core Dependencies
import { motion } from "motion/react"; 

// Components
import IconSymbol from "../IconSymbol";

// Constants
import { slideUpVariant, delayChildrenVariant } from "@/constants/animate-presence-variants";

// Data
import RedesSocialesData from "@/data/redesSociales";

// Images
import LogoFooterUpla from "@/assets/commons/logo_footer_upla.png";

// Styles
import styles from "./index.module.scss";

const Footer = () => {
    return (
        <motion.div
            initial = "hidden"
            whileInView = "visible"
            variants = {delayChildrenVariant}
            viewport = {{ once: true, amount: 0.2 }}
            className = {styles["footer-main__container"]}
        >
            <motion.img 
                src = {LogoFooterUpla} 
                variants = {slideUpVariant}
                className = {styles["footer__image"]} 
            />
            <motion.div
                variants = {slideUpVariant}
                className = {styles["footer-content__container"]}
            >
                <h1 className = {styles["footer-content__title"]}>Visítanos también en</h1>
                <div className = {styles["pages__container"]}>
                    <a 
                        target = "_blank"
                        className = {styles["page__link"]}
                        href = "https://www.upla.cl/portada/"
                    >
                        - Página UPLA
                    </a>
                    <a 
                        target = "_blank"
                        className = {styles["page__link"]}
                        href = "https://www.upla.cl/noticias/"
                    >
                        - Noticias UPLA
                    </a>
                </div>
            </motion.div>
            <motion.div
                variants = {slideUpVariant}
                className = {styles["footer-content__container"]}
            >
                <h1 className = {styles["footer-content__title"]}>Nuestras redes sociales</h1>
                <div className = {styles["social-networks__container"]}>
                    {
                        RedesSocialesData.map(
                            ({
                                href,
                                name,
                                iconName,
                                iconLibrary
                            }) => (
                                <a
                                    key = {name}
                                    href = {href}
                                    target = "_blank"
                                    className = {styles["social-network__link"]}
                                >
                                    <IconSymbol 
                                        iconName = {iconName}
                                        iconLibrary = {iconLibrary}
                                        customClass = {styles["custom-link__icon"]}
                                    />
                                </a>
                            )
                        )
                    }
                </div>
            </motion.div>
            <motion.div
                variants = {slideUpVariant}
                className = {styles["footer-content__container"]}
            >
                <h1 className = {styles["footer-content__title"]}>Contacto</h1>
                <a 
                    className = {styles["footer__link"]} 
                    href = "mailto:ines.cienciaabierta@upla.cl"
                >
                    <IconSymbol 
                        customClass = {styles["custom-link__icon"]}
                        iconName = "IoMdMail"
                        iconLibrary = "IoIcons"
                    /> 
                    ines.cienciaabierta@upla.cl
                </a>
            </motion.div>

        </motion.div>
    );
}

export default Footer;