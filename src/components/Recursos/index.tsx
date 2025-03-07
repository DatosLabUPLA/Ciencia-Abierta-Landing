//Components
import { IRecurso } from "./interface";
import RecrusoItem from "./RecursoItem";

//Styles
import styles from "./index.module.scss";

//Data
import RecursosData from "../../data/recursos.json";

const Recursos = () => {
    return (
        <div className = {styles["recursos-main__container"]}>
            {
                RecursosData.map(({name, path, imagePath, description}: IRecurso) => 
                    <RecrusoItem
                        key = {name}
                        path = {path}
                        name = {name}
                        imagePath = {imagePath}
                        description = {description}
                    />
                )
            }
        </div>
    );
}

export default Recursos;