// Icons
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as IoIcons from "react-icons/io";
import * as HiIcons from "react-icons/hi";
import * as BsIcons from "react-icons/bs";
import * as PiIcons from "react-icons/pi";
import * as FiIcons from "react-icons/fi";
import * as FcIcons from "react-icons/fc";
import * as RiIcons from "react-icons/ri";
import * as TbIcons from "react-icons/tb";
import * as SiIcons from "react-icons/si";
import * as TiIcons from "react-icons/ti";
import * as LiaIcons from "react-icons/lia";
import * as Io5Icons from "react-icons/io5";
import * as Fa6Icons from "react-icons/fa6";
import * as Hi2Icons from "react-icons/hi2";

// Styles
import styles from "./index.module.scss";

interface IIconSymbol {
    iconName: string;
    iconLibrary: string;
    customClass?: string;
}

type IconType = 
    typeof FaIcons  | 
    typeof MdIcons  |
    typeof IoIcons  |
    typeof HiIcons  |
    typeof BsIcons  |
    typeof PiIcons  |
    typeof FiIcons  |
    typeof FcIcons  |
    typeof RiIcons  |
    typeof TbIcons  |
    typeof SiIcons  |
    typeof TiIcons  |
    typeof LiaIcons |
    typeof Io5Icons |
    typeof Fa6Icons |
    typeof Hi2Icons;

const IconMapping = new Map<string, IconType>([
    ["FaIcons", FaIcons],
    ["IoIcons", IoIcons],
    ["MdIcons", MdIcons],
    ["HiIcons", HiIcons],
    ["BsIcons", BsIcons],
    ["PiIcons", PiIcons],
    ["FiIcons", FiIcons],
    ["FcIcons", FcIcons],
    ["RiIcons", RiIcons],
    ["TbIcons", TbIcons],
    ["SiIcons", SiIcons],
    ["TiIcons", TiIcons],
    ["LiaIcons", LiaIcons],
    ["Io5Icons", Io5Icons],
    ["Fa6Icons", Fa6Icons],
    ["Hi2Icons", Hi2Icons]
]);

const handleIconSelection = (iconLibrary: string, iconName: string) => {
    const IconSelected = IconMapping.get(iconLibrary);

    if (!IconSelected) return MdIcons["MdOutlineQuestionMark"];

    return IconSelected[iconName as keyof typeof IconSelected];
}

const IconSymbol = ({
    iconName,
    customClass,
    iconLibrary
}: IIconSymbol) => {
    const iconClassName = `${styles["icon-symbol__svg"]} ${customClass ?? ""}`.trim();

    const Icon = handleIconSelection(iconLibrary, iconName);

    if (!Icon) return  null;

    return (
        <Icon className = {iconClassName} />
    );
}

export default IconSymbol;