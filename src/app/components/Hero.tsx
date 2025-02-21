'use client';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hyperspeed from './Hyperspeed';

export default function Hero() {
    const [title, setTitle] = useState('Frontend Developer');

    useEffect(() => {
        const titles = ['Frontend Developer', 'Full Stack Developer']
        let currentIndex = 0

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % titles.length
            setTitle(titles[currentIndex])
        }, 5000)

        return () => clearInterval(interval)
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[100vh] flex items-center justify-center py-10 sm:py-20 px-2 sm:px-4 overflow-hidden"
        >
            {/* Hyperspeed Background */}
            <div className="absolute inset-0">
                <Hyperspeed
                    effectOptions={{
                        onSpeedUp: () => { },
                        onSlowDown: () => { },
                        distortion: 'turbulentDistortion',
                        length: 400,
                        roadWidth: 30,
                        islandWidth: 1.5,
                        lanesPerRoad: 3,
                        fov: 100,
                        fovSpeedUp: 150,
                        speedUp: 2,
                        carLightsFade: 0.4,
                        totalSideLightSticks: 15,
                        lightPairsPerRoadWay: 30,
                        shoulderLinesWidthPercentage: 0.05,
                        brokenLinesWidthPercentage: 0.1,
                        brokenLinesLengthPercentage: 0.5,
                        lightStickWidth: [0.1, 0.4],
                        lightStickHeight: [1.2, 1.6],
                        movingAwaySpeed: [50, 70],
                        movingCloserSpeed: [-100, -140],
                        carLightsLength: [400 * 0.03, 400 * 0.15],
                        carLightsRadius: [0.04, 0.12],
                        carWidthPercentage: [0.25, 0.4],
                        carShiftX: [-0.6, 0.6],
                        carFloorSeparation: [0, 4],
                        colors: {
                            roadColor: 0x080808,
                            islandColor: 0x0a0a0a,
                            background: 0x000000,
                            shoulderLines: 0xFFFFFF,
                            brokenLines: 0xFFFFFF,
                            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                            sticks: 0x03B3C3,
                        }
                    }}
                />            </div>
            {/* Content */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="relative z-10 w-full flex flex-col items-center align-middle max-w-7xl mx-auto backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-blue-500/10"
            >
                <div className="space-y-4 sm:space-y-8 w-full">
                    <motion.div variants={fadeInUp} className="space-y-2">
                        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 animate-gradient">
                            Hi, I am Tevin
                            <br />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={title}
                                    initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    className={`text-transparent animate-glow ${title === 'Frontend Developer' ? 'bg-gradient-to-r from-green-400 to-green-600 drop-shadow-[0_0_30px_rgba(34,197,94,0.7)] hover:drop-shadow-[0_0_40px_rgba(34,197,94,0.9)]' : 'bg-gradient-to-r from-pink-400 to-pink-800 drop-shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:drop-shadow-[0_0_40px_rgba(236,72,153,0.9)]'} bg-clip-text`}
                                >
                                    {title}
                                </motion.span>
                            </AnimatePresence>
                        </h1>                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className="text-base sm:text-xl text-blue-100/80 max-w-2xl"
                    >
                        Building next-generation digital experiences with cutting-edge technology.
                        Transforming ideas into reality through code.
                    </motion.p>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/projects"
                                className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl overflow-hidden"
                            >
                                <span className="relative z-10">View Projects</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 border border-blue-500/30 px-6 sm:px-8 py-3 sm:py-4 rounded-xl overflow-hidden bg-blue-900/10 backdrop-blur-sm"
                            >
                                <span className="relative z-10">Contact Me</span>
                                <Mail className="group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-cyan-500/50 rounded-full flex justify-center p-1"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1 h-2 sm:h-3 bg-cyan-500/50 rounded-full"
                    />
                </motion.div>
            </motion.div>

            <style jsx>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradient {
            animation: gradient 6s linear infinite;
            background-size: 200% auto;
          }
        `}</style>
        </motion.section>
    );
}