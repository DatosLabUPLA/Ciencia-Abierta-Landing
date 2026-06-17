// Components
import IconSymbol from "../IconSymbol";

// Styles
import styles from "./index.module.scss";

interface ICustomLink {
    href: string;
    linkText: string;
    iconName?: string;
    iconLibrary?: string;
    customClassName?: string;
}

const CustomLink = ({
    href,
    iconName,
    linkText,
    iconLibrary,
    customClassName,
}: ICustomLink) => {
    const linkClass = `${styles.custom__button} ${customClassName}`.trim();

    return (
        <a 
            href = {href}
            target = "_blank"
            className = {linkClass}
        >
            {
                iconName && iconLibrary &&
                <IconSymbol 
                    iconName = {iconName}
                    iconLibrary = {iconLibrary}
                    customClass = {styles["custom-button__icon"]}
                />
            }
            {linkText}
        </a>
    );
}

export default CustomLink;