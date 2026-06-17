// Core Dependencies
import { stagger, Variants } from "motion";

export const delayChildrenVariant: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: stagger(0.3),
            }
        }
}

export const slideLeftVariant: Variants = {
    hidden: { x: "100px", opacity: 0 },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const slideRightVariant: Variants = {
    hidden: { x: "-100px", opacity: 0 },
    visible: {
        x: "0",
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const slideUpVariant: Variants = {
    hidden: { y: "100px", opacity: 0 },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const dropInVariant: Variants = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
        y: "0", 
        opacity: 1,
        transition: { duration: 0.5, type: "spring", damping: 25, stiffness: 250 } 
    },
    exit: { y: "100vh", opacity: 0 },
};

export const opacityVariant: Variants = {
    hidden: { 
        opacity: 0 
    },
    visible: { 
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        opacity: 0,
         transition: { duration: 0.5 }
    }
};