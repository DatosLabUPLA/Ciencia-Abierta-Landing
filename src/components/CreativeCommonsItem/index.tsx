//Components
import { ICreativeCommonsItem } from "./interface";

//Styles
import styles from "./index.module.scss";

const CreativeCommonsItem = ({
    example,
    imagePath,
    description
}: ICreativeCommonsItem)  => {
    return (
        <div className = {styles["creative-commons-item__container"]}>
            <p className = {styles["creative-commons-item-description__text"]} dangerouslySetInnerHTML = {{ __html: description }} />
            <h3>Ejemplo</h3>
            <p className = {styles["creative-commons-item-example__text"]} dangerouslySetInnerHTML = {{ __html: example }}/>          
            <img className = {styles["creative-commons-item__image"]} src = {imagePath}/>
        </div>
    );
}

export default CreativeCommonsItem;