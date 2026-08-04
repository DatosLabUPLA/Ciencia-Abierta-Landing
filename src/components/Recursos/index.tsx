// Components
import RecursosItem from "./RecursosItem";

// Data
import RecursosData from "@/data/recursos";

// Styles
import styles from "./index.module.scss";

const Recursos = () => {
    return (
        <div className = {styles["recursos-main__container"]}>
            {
                RecursosData.map(
                    ({
                        name,
                        path,
                        iconName,
                        nameColor,
                        description,
                        iconLibrary,
                        iconBackgroundColor
                    }) => (
                        <RecursosItem
                            key = {name}
                            path = {path}
                            name = {name}
                            nameColor = {nameColor}
                            description = {description}
                            iconBackgroundColor = {iconBackgroundColor}
                            icon = {{
                                iconName: iconName,
                                iconLibrary: iconLibrary
                            }}
                        />
                    )
                )
            }
        </div>
    );
}

export default Recursos;