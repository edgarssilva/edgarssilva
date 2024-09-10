'use client';

import React from "react";
import { motion, useInView } from "framer-motion";

export default function RevealSection({ children, className }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const variants = {
        hidden: { y: 15, opacity: 0, filter: "blur(3px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" }
    };

    return <motion.section className={className + " motion"}
        ref={ref}
        initial={"hidden"}
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
    >
        {children}
    </motion.section >;
}
