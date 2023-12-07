import c1 from '@public/category/vegetables.png';
import c2 from '@public/category/fruit.png';
import c3 from '@public/category/dairy.png';
import c4 from '@public/category/grains.png';
import c5 from '@public/category/dryfruits.png';
import Image from 'next/image';
import { roboto, robotoslab } from '@styles/fonts';
import { motion, Variants } from 'framer-motion';
import { cvariants } from '@framer/Variants';
import Link from 'next/link';
const Categories = () => {
    return (
        <motion.div variants={cvariants} initial='initial' animate='after'>
            <motion.span className={`text-xl ml-2 font-bold`}>whats you want </motion.span>
            <motion.div className='grid grid-cols-3 m:grid-cols-6'>
                <motion.div variants={cvariants} className='text-center mx-1'>
                    <Link href={{ pathname: '/category', query: { name: 'vegetables' } }}>
                        <Image
                            src={c1}
                            alt='category'
                            width={200}
                            height={200}
                            className='w-full h-28 max-w-[100px] mx-auto'
                        />
                        <span className={`${roboto.className} ${robotoslab.className}`}>vegetables</span>
                    </Link>
                </motion.div>
                <motion.div variants={cvariants} className='text-center mx-1'>
                    <Link href={{ pathname: '/category', query: { name: 'fruits' } }}>
                        <Image
                            src={c2}
                            alt='category2'
                            width={200}
                            height={200}
                            className='w-full h-28 max-w-[100px] mx-auto'
                        />
                        <span className={`${roboto.className} ${robotoslab.className}`}>Fruits</span>
                    </Link>
                </motion.div>
                <motion.div variants={cvariants} className='text-center mx-1'>
                    <Link href={{ pathname: '/category', query: { name: 'dairy' } }}>
                        <Image
                            src={c3}
                            alt='category'
                            width={200}
                            height={200}
                            className='w-full h-28 max-w-[100px] mx-auto'
                        />
                        <span className={`${roboto.className} ${robotoslab.className}`}>Dairyproducts</span>
                    </Link>
                </motion.div>
                <motion.div variants={cvariants} className=''>
                    <Link href={{ pathname: '/category', query: { name: 'grains' } }}>
                        <Image
                            src={c4}
                            alt='category'
                            width={200}
                            height={200}
                            className='w-full h-28 max-w-[100px] mx-auto'
                        />
                        <span className={`${roboto.className} ${robotoslab.className} flex justify-center `}>Grains</span>
                    </Link>
                </motion.div>
                <motion.div variants={cvariants} className='text-center mx-1'>
                    <Link href={{ pathname: '/category', query: { name: 'dryfruits' } }}>
                        <Image
                            src={c5}
                            alt='category'
                            width={200}
                            height={200}
                            className='w-full h-28 max-w-[100px] mx-auto'
                        />
                        <span className={`${roboto.className} ${robotoslab.className}`}>DryFruits</span>
                    </Link>
                </motion.div>

            </motion.div>
        </motion.div>

    )
}

export default Categories