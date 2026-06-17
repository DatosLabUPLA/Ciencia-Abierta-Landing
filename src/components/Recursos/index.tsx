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
                        imagePath, 
                        description
                    }) => (
                        <RecursosItem
                            key = {name}
                            path = {path}
                            name = {name}
                            imagePath = {imagePath}
                            description = {description}
                        />
                    )
                )
            }
        </div>
    );
}

export default Recursos;