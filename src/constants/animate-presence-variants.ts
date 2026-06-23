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

export const zoomInUpVariant: Variants = {
    hidden: { scale: 0.0, opacity: 0 },
    visible: {
        scale: 1.0,
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
        transition: {
            damping: 25,
            duration: 0.5, 
            type: "spring", 
            stiffness: 250
        } 
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

export const carouselVariant = (direction: -1 | 1): Variants => ({
    hidden: { 
        opacity: 0,
        x: direction * 100
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: { 
            delay: 0.2,
            bounce: 0.4,
            type: "spring",
            visualDuration: 0.3
        }
    },
    exit: {
        opacity: 0,
        x: direction * 2* -100
    }
});