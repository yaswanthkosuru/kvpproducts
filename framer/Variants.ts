import { Variants } from "framer-motion";

export const bannervariants: Variants = {
    initial: {
        opacity: 0,
        x: -20
    },
    after: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 1,
            type: 'spring',
            damping: 20
        }
    }

}
export const productloading: Variants = {
    initial: {
        opacity: 0,

    },
    after: {
        opacity: 1,
        transition: {
            staggerChildren: 2.5,
            duration: 4,
            repeat: 20000,
            repeatType: 'loop',
        }

    }

}
export const categoryvariants: Variants = {
    initial: {
        opacity: 0,
        y: -10,
    },
    after: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.1,
            type: 'linear'
        }
    }
}
export const smallproductvariants: Variants = {
    initial: {
        scale: 0.4,
        y: -10,
        x: -10,
    },
    after: {
        scale: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.5
        }
    }

}
export const filteredproductvariants: Variants = {
    initial: {
        x: 100,
    },
    after: {
        x: 0,
        transition: {
            duration: 0.2,
            staggerChildren: 0.2,
            type: 'tween'
        }
    }

}