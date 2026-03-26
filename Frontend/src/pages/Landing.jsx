import React from 'react'
import { useNavigate } from 'react-router'
import { motion } from 'framer-motion'
import { 
    Sparkles, 
    Zap, 
    Target, 
    ShieldCheck, 
    ChevronRight,
    ArrowUpRight,
    Search,
    Layout,
    Briefcase,
    TrendingUp
} from 'lucide-react'
import { useAuth } from '../features/auth/hooks/useAuth'
import '../style/landing.scss'

const Landing = () => {
    const navigate = useNavigate()
    const { user } = useAuth()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    }

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
        }
    }

    const floatVariants = {
        animate: {
            y: [0, -15, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }
    }

    return (
        <main className='landing-v3'>
            <div className='mesh-bg-v3'></div>
            
            <div className='landing-wrapper'>
                <motion.section 
                    className='hero-centered'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <motion.div className='pre-title' variants={itemVariants}>
                        <Sparkles size={16} />
                        <span>Intelligence in every interaction</span>
                    </motion.div>

                    <motion.h1 className='hero-title-v3' variants={itemVariants}>
                        The ultimate way to <br />
                        <span className='highlight-orange'>Master your Career</span>
                    </motion.h1>

                    <motion.p className='hero-subtitle-v3' variants={itemVariants}>
                        Expertly crafted tools for modern job seekers. Instant interview analysis,
                        ATS-perfect resumes, and a smarter way to land your dream role.
                    </motion.p>

                    <motion.div className='cta-group-v3' variants={itemVariants}>
                        {user ? (
                            <button 
                                className='button primary-button large'
                                onClick={() => navigate('/interview-prep')}
                            >
                                <span>Go to Dashboard</span>
                                <ChevronRight size={20} />
                            </button>
                        ) : (
                            <>
                                <button 
                                    className='button primary-button large'
                                    onClick={() => navigate('/register')}
                                >
                                    <span>Get Started Free</span>
                                    <ChevronRight size={20} />
                                </button>
                                <button 
                                    className='button secondary-button-v3 large'
                                    onClick={() => navigate('/login')}
                                >
                                    <span>Sign In</span>
                                    <ArrowUpRight size={20} />
                                </button>
                            </>
                        )}
                    </motion.div>

                    <motion.div 
                        className='hero-preview-v3' 
                        variants={itemVariants}
                    >
                        <motion.div 
                            className='preview-canvas-v3'
                            animate="animate"
                            variants={floatVariants}
                        >
                            <div className='preview-nav'>
                                <div className='dots'><span></span><span></span><span></span></div>
                                <div className='url-bar'>app.ai-coach.io/prep</div>
                            </div>
                            <div className='preview-content'>
                                <div className='skeleton-line'></div>
                                <div className='skeleton-line short'></div>
                                <div className='skeleton-grid'>
                                    <span></span><span></span><span></span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.section>

                <section className='benefits-v3'>
                    <div className='benefits-grid-v3'>
                        {[
                            { 
                                icon: <Zap />, 
                                title: 'Instant Analysis', 
                                desc: 'Get a full breakdown of your interview performance in less than 3 seconds.' 
                            },
                            { 
                                icon: <Target />, 
                                title: 'Tailored Strategy', 
                                desc: 'Every response is custom-built for the specific role and company you are targeting.' 
                            },
                            { 
                                icon: <Briefcase />, 
                                title: 'Job Matching', 
                                desc: 'Discover hidden opportunities that perfectly align with your unique AI-generated profile.' 
                            },
                            { 
                                icon: <Layout />, 
                                title: 'ATS Perfection', 
                                desc: 'Resumes that pass every automated check and catch every human eye.' 
                            },
                            { 
                                icon: <TrendingUp />, 
                                title: 'Skill Gap Radar', 
                                desc: 'Identify precisely what you are missing and how to close the gap before the interview.' 
                            },
                            { 
                                icon: <Sparkles />, 
                                title: 'Mock Simulator', 
                                desc: 'Practice with the exact technical and behavioral questions our AI predicts for the role.' 
                            }
                        ].map((b, i) => (
                            <motion.div
                                key={i}
                                className='benefit-card-v3'
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                            >
                                <div className='benefit-icon-v3'>{b.icon}</div>
                                <h4>{b.title}</h4>
                                <p>{b.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Landing
