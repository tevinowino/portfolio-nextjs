'use client';
import { ArrowRight, Mail, Code, Sparkles, Download, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    const [title, setTitle] = useState('Frontend Developer');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    useEffect(() => {
        const titles = ['Frontend Developer', 'Full Stack Developer', 'UI/UX Enthusiast', 'Problem Solver'];
        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % titles.length;
            setTitle(titles[currentIndex]);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            setMousePosition({
                x: (clientX - innerWidth / 2) / 25,
                y: (clientY - innerHeight / 2) / 25,
            });
            x.set((clientX - innerWidth / 2) / 25);
            y.set((clientY - innerHeight / 2) / 25);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    const fadeInUp = {
        initial: { opacity: 0, y: 30, filter: 'blur(10px)' },
        animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
        transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const floatingAnimation = {
        y: [0, -10, 0],
        transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    const sparkleVariants = {
        animate: {
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatDelay: Math.random() * 3
            }
        }
    };

    const getTitleGradient = (titleText) => {
        const gradients = {
            'Frontend Developer': 'from-green-400 via-emerald-500 to-green-600',
            'Full Stack Developer': 'from-pink-400 via-rose-500 to-pink-600',
            'UI/UX Enthusiast': 'from-purple-400 via-violet-500 to-purple-600',
            'Problem Solver': 'from-orange-400 via-amber-500 to-orange-600'
        };
        return gradients[titleText] || 'from-blue-400 via-cyan-500 to-blue-600';
    };

    const getTitleShadow = (titleText) => {
        const shadows = {
            'Frontend Developer': 'drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]',
            'Full Stack Developer': 'drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]',
            'UI/UX Enthusiast': 'drop-shadow-[0_0_30px_rgba(147,51,234,0.6)]',
            'Problem Solver': 'drop-shadow-[0_0_30px_rgba(251,146,60,0.6)]'
        };
        return shadows[titleText] || 'drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]';
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="relative min-h-[100vh] flex items-center justify-center py-10 sm:py-20 px-2 sm:px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 1, 0.3],
                            scale: [1, 1.5, 1]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}

                {/* Gradient Orbs */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl"
                    animate={{
                        x: mousePosition.x * 0.5,
                        y: mousePosition.y * 0.5,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full filter blur-3xl"
                    animate={{
                        x: mousePosition.x * -0.3,
                        y: mousePosition.y * -0.3,
                        scale: [1.2, 1, 1.2],
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                />
            </div>

            {/* Main Content */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-16 max-w-7xl mx-auto relative z-10"
            >
                {/* Left Content */}
                <div className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
                    <motion.div variants={fadeInUp} className="space-y-4 relative">
                        {/* Sparkle Effects */}
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                variants={sparkleVariants}
                                animate="animate"
                                className="absolute text-yellow-400"
                                style={{
                                    left: `${20 + Math.random() * 60}%`,
                                    top: `${20 + Math.random() * 60}%`,
                                }}
                            >
                                <Sparkles size={16} />
                            </motion.div>
                        ))}

                        <motion.div
                            className="flex items-center justify-center lg:justify-start gap-2 mb-4"
                            variants={fadeInUp}
                        >
                </motion.div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                            <motion.span 
                                className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-500 animate-gradient mb-2"
                                style={{ 
                                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
                                }}
                            >
                                Hi, I'm Tevin
                            </motion.span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={title}
                                    initial={{ opacity: 0, y: 30, rotateX: -90, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: -30, rotateX: 90, filter: 'blur(10px)' }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                    className={`block text-transparent bg-gradient-to-r ${getTitleGradient(title)} ${getTitleShadow(title)} bg-clip-text transform-gpu`}
                                >
                                    {title}
                                </motion.span>
                            </AnimatePresence>
                        </h1>
                    </motion.div>

                    <motion.p
                        variants={fadeInUp}
                        className="text-lg text-blue-100/80 max-w-2xl leading-relaxed"
                    >
                        Crafting exceptional digital experiences with modern technologies. 
                        I transform creative visions into powerful, scalable solutions that make an impact.
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-wrap justify-center lg:justify-start gap-6 py-4"
                    >
                        {[
                            { number: '10+', label: 'Projects' },
                            { number: '2+', label: 'Years' },
                            { number: '99.99%', label: 'Satisfaction' }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-2xl sm:text-3xl font-bold text-cyan-400">{stat.number}</div>
                                <div className="text-sm text-blue-100/60">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Action Buttons */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/projects"
                                className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl overflow-hidden font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Code size={18} />
                                    View Projects
                                </span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-blue-500/30 px-8 py-4 rounded-2xl overflow-hidden bg-blue-900/10 backdrop-blur-sm font-medium hover:border-blue-400/50 transition-all duration-300"
                            >
                                <span className="relative z-10 flex items-center gap-2 text-blue-100">
                                    <Mail size={18} />
                                    Contact Me
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </Link>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <button className="group relative inline-flex items-center justify-center w-full sm:w-auto gap-2 border-2 border-purple-500/30 px-8 py-4 rounded-2xl overflow-hidden bg-purple-900/10 backdrop-blur-sm font-medium hover:border-purple-400/50 transition-all duration-300">
                                <a href="/resume.pdf" download  className="relative z-10 flex items-center gap-2 text-purple-100">
                                    <Download size={18} />
                                    Resume
                                </a>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex justify-center lg:justify-start gap-4 pt-4"
                    >
                        {[
                            { icon: Github, href: '#', label: 'GitHub' },
                            { icon: Linkedin, href: '#', label: 'LinkedIn' },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="group p-3 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={20} className="text-blue-100 group-hover:text-blue-300 transition-colors" />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Right Content - Profile Image */}
                <motion.div
                    variants={fadeInUp}
                    className="flex-shrink-0 relative"
                    style={{
                        perspective: 1000,
                    }}
                >
                    <motion.div
                        animate={floatingAnimation}
                        style={{
                            rotateX: rotateX,
                            rotateY: rotateY,
                        }}
                        className="relative group"
                    >
                        {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div> */}
                        <div className="relative p-2 rounded-3xl">
                            <Image 
                                src="/images/hero-image.png" 
                                alt="Tevin - Frontend Developer" 
                                width={350} 
                                height={350}
                                priority
                                className="rounded-2xl object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        
                        {/* Floating Elements around image */}
                        {[
                            { icon: '⚡', position: 'top-4 -right-4', delay: 0 },
                            { icon: '🚀', position: '-top-4 right-8', delay: 1 },
                            { icon: '💡', position: 'bottom-8 -left-4', delay: 2 },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className={`absolute ${item.position} text-2xl bg-blue-500/20 backdrop-blur-lg rounded-full p-2 border border-blue-400/30`}
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: item.delay
                                }}
                            >
                                {item.icon}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center gap-2 cursor-pointer group"
                >
                    <span className="text-xs text-blue-100/60 group-hover:text-blue-100/80 transition-colors">Scroll Down</span>
                    <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center p-1 group-hover:border-cyan-400/70 transition-colors">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="w-1 h-3 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .animate-gradient {
                    animation: gradient 8s linear infinite;
                    background-size: 300% auto;
                }
            `}</style>
        </motion.section>
    );
}