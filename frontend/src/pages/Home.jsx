import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Home.css';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="home-page">
            {/* Animated background orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            {/* Navbar */}
            <nav className="nav-glass">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        <span className="brand-icon">⚡</span>
                        <span className="brand-text">Xyzon<span className="brand-accent">LMS</span></span>
                    </Link>
                    <div className="nav-links">
                        <Link to="/courses" className="nav-link">Courses</Link>
                        {user ? (
                            <Link to="/dashboard" className="nav-cta">Dashboard →</Link>
                        ) : (
                            <>
                                <Link to="/login" className="nav-link">Sign In</Link>
                                <Link to="/register" className="nav-cta">Sign Up Free →</Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero">
                <div className="hero-badge">🚀 Next-Gen Learning Platform</div>
                <h1 className="hero-title">
                    Master Skills.<br />
                    <span className="gradient-text">Build Your Future.</span>
                </h1>
                <p className="hero-subtitle">
                    Explore curated courses from industry experts. Track your progress, earn certificates, and accelerate your career — all in one beautiful platform.
                </p>
                <div className="hero-actions">
                    <Link to={user ? "/dashboard" : "/register"} className="btn-primary">
                        <span>Get Started Free</span>
                        <span className="btn-arrow">→</span>
                    </Link>
                    <Link to="/courses" className="btn-ghost">
                        Browse Courses
                    </Link>
                </div>

                {/* Stats */}
                <div className="stats-row">
                    <div className="stat-item">
                        <div className="stat-num">500+</div>
                        <div className="stat-label">Active Students</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-num">50+</div>
                        <div className="stat-label">Courses</div>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                        <div className="stat-num">95%</div>
                        <div className="stat-label">Satisfaction</div>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="features-section">
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-wrap purple">
                            <span>📚</span>
                        </div>
                        <h3>Expert-Led Courses</h3>
                        <p>Learn from industry professionals with hands-on projects and real-world applications.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrap blue">
                            <span>📊</span>
                        </div>
                        <h3>Track Progress</h3>
                        <p>Visual dashboards to monitor your learning journey and stay motivated.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-wrap cyan">
                            <span>🏆</span>
                        </div>
                        <h3>Earn Rewards</h3>
                        <p>Complete courses, earn certificates, and showcase your achievements.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-glass">
                <p>© 2026 Xyzon LMS Portal · Built with MERN Stack · <a href="https://github.com/UjwalHM77/Xyzon-LMS-Portal" target="_blank" rel="noreferrer">GitHub</a></p>
            </footer>
        </div>
    );
};

export default Home;
