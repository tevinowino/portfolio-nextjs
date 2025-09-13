'use client';
import { Code, Sparkles, Github, Linkedin, Bot } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import ChatbotDialog from './ChatbotDialog';

interface AnimatedElement {
    id: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
}

export default function Hero() {
    const [title, setTitle] = useState('Frontend Developer');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isChatbotOpen, setChatbotOpen] = useState(false);
    const [animatedElements, setAnimatedElements] = useState<AnimatedElement[]>([]);
    const [sparkles, setSparkles] = useState<AnimatedElement[]>([]);

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
        const handleMouseMove = (e: any) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const newX = (clientX - innerWidth / 2) / 25;
            const newY = (clientY - innerHeight / 2) / 25;
            setMousePosition({ x: newX, y: newY });
            x.set(newX);
            y.set(newY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [x, y]);

    useEffect(() => {
        const generateElements = (count: number) => Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
        }));
        setAnimatedElements(generateElements(20));

        const generateSparkles = (count: number) => Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            duration: 2,
            delay: Math.random() * 3,
        }));
        setSparkles(generateSparkles(5));
    }, []);


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

    const sparkleVariants = (delay: number, duration: number) => ({
        animate: {
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            transition: {
                duration,
                repeat: Infinity,
                repeatDelay: delay,
            }
        }
    });

    const getTitleGradient = (titleText: any) => {
        const gradients = {
            'Frontend Developer': 'from-green-400 via-emerald-500 to-green-600',
            'Full Stack Developer': 'from-pink-400 via-rose-500 to-pink-600',
            'UI/UX Enthusiast': 'from-purple-400 via-violet-500 to-purple-600',
            'Problem Solver': 'from-orange-400 via-amber-500 to-orange-600'
        };
        return gradients[titleText] || 'from-primary to-accent';
    };

    const getTitleShadow = (titleText: any) => {
        const shadows = {
            'Frontend Developer': 'drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]',
            'Full Stack Developer': 'drop-shadow-[0_0_30px_rgba(236,72,153,0.6)]',
            'UI/UX Enthusiast': 'drop-shadow-[0_0_30px_rgba(147,51,234,0.6)]',
            'Problem Solver': 'drop-shadow-[0_0_30px_rgba(251,146,60,0.6)]'
        };
        return shadows[titleText] || 'drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]';
    };

    return (
        <>
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative min-h-[100vh] flex items-center justify-center py-10 sm:py-20 px-2 sm:px-4 overflow-hidden bg-gradient-to-br from-background via-blue-900/10 to-background"
            >
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {animatedElements.map(el => (
                        <motion.div
                            key={el.id}
                            className="absolute w-1 h-1 bg-primary/20 rounded-full"
                            style={{ left: el.left, top: el.top }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 1, 0.3],
                                scale: [1, 1.5, 1]
                            }}
                            transition={{
                                duration: el.duration,
                                repeat: Infinity,
                                delay: el.delay
                            }}
                        />
                    ))}
                    <motion.div
                        className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full filter blur-3xl"
                        animate={{
                            x: mousePosition.x * 0.5,
                            y: mousePosition.y * 0.5,
                            scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full filter blur-3xl"
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
                            {sparkles.map(s => (
                                <motion.div
                                    key={s.id}
                                    variants={sparkleVariants(s.delay, s.duration)}
                                    animate="animate"
                                    className="absolute text-yellow-400"
                                    style={{ left: s.left, top: s.top }}
                                >
                                    <Sparkles size={16} />
                                </motion.div>
                            ))}

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                <motion.span 
                                    className="block bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground animate-gradient-x mb-2"
                                    style={{ 
                                        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` 
                                    }}
                                >
                                    Hello, Tevin here,
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
                            className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Crafting exceptional digital experiences with modern technologies. 
                            I transform creative visions into powerful, scalable solutions that make an impact.
                        </motion.p>

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
                                    <div className="text-2xl sm:text-3xl font-bold text-purple-500">{stat.number}</div>
                                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                             <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <button
                                    onClick={() => setChatbotOpen(true)}
                                    className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
                                >
                                    <Bot size={18} />
                                    Take a Mini-Interview
                                </button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link
                                    href="/projects"
                                    className="group relative inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-lg bg-card/50 backdrop-blur-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
                                >
                                    <Code size={18} />
                                    View Projects
                                </Link>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center lg:justify-start gap-4 pt-4"
                        >
                            {[
                                { icon: Github, href: 'https://github.com/tevinowino', label: 'GitHub' },
                                { icon: Linkedin, href: 'https://www.linkedin.com/in/tevinowino/', label: 'LinkedIn' },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-3 rounded-full bg-primary/10 border border-border backdrop-blur-sm hover:bg-primary/20 hover:border-primary/40 transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Content - Profile Image */}
                    <motion.div
                        variants={fadeInUp}
                        className="flex-shrink-0 relative"
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            animate={floatingAnimation}
                            style={{
                                rotateX: rotateX,
                                rotateY: rotateY,
                            }}
                            className="relative group"
                        >
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
                            
                            {[
                                { icon: '⚡', position: 'top-4 -right-4', delay: 0 },
                                { icon: '🚀', position: '-top-4 right-8', delay: 1 },
                                { icon: '💡', position: 'bottom-8 -left-4', delay: 2 },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`absolute ${item.position} text-2xl bg-primary/20 backdrop-blur-lg rounded-full p-2 border border-primary/30`}
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
                        <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">Scroll Down</span>
                        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1 group-hover:border-primary/70 transition-colors">
                            <motion.div
                                animate={{ y: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </motion.section>
            <ChatbotDialog isOpen={isChatbotOpen} onClose={() => setChatbotOpen(false)} />
        </>
    );
}
