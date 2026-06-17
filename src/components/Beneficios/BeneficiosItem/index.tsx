// Styles
import { FunctionComponent, SVGProps } from "react";
import styles from "./index.module.scss";

export interface IBeneficiosItem {
    name: string;
    benefits: string[];
    SVG: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const BeneficiosItem = ({
    SVG,
    name, 
    benefits
}: IBeneficiosItem) => {
    return (
        <div className = {styles["beneficio-main__container"]}>
            <SVG className = {styles["beneficio__svg"]} />
            <ul className = {styles["beneficio-ul__container"]}>
                {
                    benefits.map(
                        (benefit, index) => (
                            <li key = {index} className = {styles["beneficio__li"]}>
                                {benefit}
                            </li>
                        )
                    )
                }
            </ul>
            <div className = {styles["beneficio-title__container"]}>
                <h1 className = {styles["beneficio__title"]} dangerouslySetInnerHTML = {{ __html: name }}/>
            </div>
        </div>
    );
}

export default BeneficiosItem;