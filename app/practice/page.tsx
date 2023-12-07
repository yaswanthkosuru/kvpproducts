'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion';
import { type } from 'os';
const item: Variants = {
    hide: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        y: [10, 0],
        type: 'spring',
        transition: {
            staggerChildren: 0.3,
            type: 'spring',
        }

    }
}
const page = () => {

    return (
        <motion.div initial='hide' animate='show' variants={item}>
            <motion.li variants={item}>hi hiello</motion.li>
            <motion.li variants={item}>yaswanth</motion.li>
            <motion.li variants={item}>ela unnaru</motion.li>
            <motion.li variants={item}>good morning</motion.li>
            <div className='mt-[1000px]'></div>
            <motion.div
                className='w-20 h-20 bg-green-500'
                whileInView={{ scale: 1.2 }}
                initial={{ scale: 0.5 }}
                transition={{ type: 'spring' }}
            ></motion.div>
        </motion.div>

    )
}

export default page