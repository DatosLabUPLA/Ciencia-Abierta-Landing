// Components
import PrincipiosItem from "./PrincipiosItem";

// Styles
import styles from "./index.module.scss";

// Data
import PrincipiosData from "@/data/principios";

const Principios = () => {
    return (
        <div className = {styles["principios-main__container"]}>
            {
                PrincipiosData.map(({
                    name,
                    iconName,
                    nameColor,
                    iconLibrary,
                    description,
                    backgroundColor,
                    iconBackgroundColor
                }) => 
                    <PrincipiosItem 
                        key = {name}
                        name = {name}
                        nameColor = {nameColor}
                        description = {description}
                        backgroundColor = {backgroundColor}
                        iconBackgroundColor = {iconBackgroundColor}
                        icon = {{
                            iconName: iconName,
                            iconLibrary: iconLibrary
                        }}
                    />
                )
            }
        </div>
    );
}

export default Principios;