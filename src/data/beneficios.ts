// SVGs
import ImpactoSVG from "@/assets/beneficios/impacto.svg?react";
import ImpulsoSVG from "@/assets/beneficios/impulso.svg?react";
import TransparenciaSVG from "@/assets/beneficios/transparencia.svg?react";
import AccesibilidadSVG from "@/assets/beneficios/accesibilidad.svg?react";

const BeneficiosData = [
    {
        svg: TransparenciaSVG,
        name: "Transparencia y Calidad Científica",
        benefits: [
            "Facilita la verificación y reproducibilidad de los estudios.",
            "Permite una evaluación más inclusiva y menos sesgada.",
            "Refuerza la integridad de la investigación, reduciendo el fraude científico."
        ]
    },
    {
        svg: AccesibilidadSVG,
        name: "Accesibilidad e Inclusión Global",
        benefits: [
            "Elimina barreras económicas y geográficas al conocimiento.",
            "Reduce desigualdades en la producción y acceso a la ciencia.",
            "Promueve la diversidad de voces y conocimientos en la investigación."
        ]
    },
    {
        svg: ImpactoSVG,
        name: "Impacto Social y Cooperación Global",
        benefits: [
            "Fomenta la confianza de la sociedad en la ciencia.",
            "Facilita la colaboración internacional en investigación.",
            "Permite el uso del conocimiento abierto en la toma de decisiones públicas."
        ]
    },
    {
        svg: ImpulsoSVG,
        name: "Impulso a la Innovación y el Desarrollo",
        benefits: [
            "Acelera el avance científico al permitir la reutilización de datos.",
            "Favorece la economía del conocimiento y el desarrollo tecnológico.",
            "Reduce costos en la investigación al evitar duplicaciones innecesarias."
        ]
    }
];

export default BeneficiosData;