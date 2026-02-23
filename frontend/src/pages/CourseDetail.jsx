import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './CourseDetail.css';

const CourseDetail = () => {
    const { id } = useParams();
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeModule, setActiveModule] = useState(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                const { data } = await axios.get(`/api/courses/${id}`);
                setCourse(data);
            } catch (error) {
                console.error("Error fetching course details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [id]);

    if (loading) {
        return (
            <div className="cd-loader-page">
                <div className="loader-spinner"></div>
                <p>Loading course details...</p>
            </div>
        );
    }

    if (!course) {
        return (
            <div className="cd-error-page">
                <h2>Course not found</h2>
                <Link to="/courses" className="btn-ghost">← Back to Courses</Link>
            </div>
        );
    }

    const modules = course.modules || ['Introduction', 'Core Concepts', 'Advanced Topics', 'Projects'];

    return (
        <div className="cd-page">
            <div className="cd-orb cd-orb-1"></div>
            <div className="cd-orb cd-orb-2"></div>

            {/* Nav */}
            <nav className="nav-glass">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        <span className="brand-icon">⚡</span>
                        <span className="brand-text">Xyzon<span className="brand-accent">LMS</span></span>
                    </Link>
                    <div className="nav-links">
                        <Link to="/courses" className="nav-link">Courses</Link>
                        <Link to="/dashboard" className="nav-cta">Dashboard →</Link>
                    </div>
                </div>
            </nav>

            {/* Hero Banner */}
            <div className="cd-hero">
                <div className="cd-hero-inner">
                    <Link to="/courses" className="cd-back">← All Courses</Link>
                    <div className="cd-hero-content">
                        <div className="cd-hero-text">
                            <div className="cd-hero-tags">
                                <span className="cd-badge">{course.duration}</span>
                                <span className="cd-badge level">{course.level || 'Beginner'}</span>
                                <span className="cd-badge category">{course.category}</span>
                            </div>
                            <h1>{course.title}</h1>
                            <p className="cd-instructor-line">
                                👨‍🏫 Instructor: <strong>{course.instructor}</strong>
                            </p>
                            <div className="cd-hero-stats">
                                <span>⭐ {course.rating} rating</span>
                                <span>👥 {course.students?.toLocaleString()} students</span>
                                <span>📖 {modules.length} modules</span>
                            </div>
                        </div>
                        <div className="cd-price-card">
                            <div className="cd-price-amount">${course.price}</div>
                            <button className="cd-enroll-btn">
                                <span>Enroll Now</span>
                                <span className="btn-arrow">→</span>
                            </button>
                            <p className="cd-guarantee">✅ 30-day money-back guarantee</p>
                            <div className="cd-price-features">
                                <span>♾️ Lifetime access</span>
                                <span>📱 Mobile & desktop</span>
                                <span>🏅 Certificate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <main className="cd-content">
                <div className="cd-left">
                    {/* About */}
                    <section className="cd-section">
                        <h2 className="cd-section-title">About This Course</h2>
                        <p className="cd-description">{course.description}</p>
                    </section>

                    {/* Modules */}
                    <section className="cd-section">
                        <h2 className="cd-section-title">Course Curriculum ({modules.length} Modules)</h2>
                        <div className="cd-modules">
                            {modules.map((mod, idx) => (
                                <div
                                    key={idx}
                                    className={`cd-module-item ${activeModule === idx ? 'expanded' : ''}`}
                                    onClick={() => setActiveModule(activeModule === idx ? null : idx)}
                                    style={{ animationDelay: `${idx * 0.06}s` }}
                                >
                                    <div className="cd-mod-num">{String(idx + 1).padStart(2, '0')}</div>
                                    <div className="cd-mod-info">
                                        <h4>{mod}</h4>
                                        <p>{Math.floor(idx * 1.5 + 3)} lessons · {Math.floor(idx * 5 + 20)} min</p>
                                        {activeModule === idx && (
                                            <div className="cd-mod-preview">
                                                <div className="preview-item">📹 Video lectures with code walkthroughs</div>
                                                <div className="preview-item">📝 Downloadable exercise files</div>
                                                <div className="preview-item">✅ Module quiz & assessment</div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="cd-mod-toggle">{activeModule === idx ? '▲' : '▼'}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <aside className="cd-right">
                    <div className="cd-sidebar-card">
                        <h3>🎯 What you'll learn</h3>
                        <ul className="cd-learn-list">
                            <li><span className="check-icon">✓</span> Build real-world projects from scratch</li>
                            <li><span className="check-icon">✓</span> Master backend API development</li>
                            <li><span className="check-icon">✓</span> Optimize application performance</li>
                            <li><span className="check-icon">✓</span> Industry best practices & patterns</li>
                            <li><span className="check-icon">✓</span> Certificate of completion</li>
                        </ul>
                    </div>

                    <div className="cd-sidebar-card">
                        <h3>📦 Course Includes</h3>
                        <div className="cd-includes">
                            <div className="cd-include-item">📹 {course.duration} of HD video</div>
                            <div className="cd-include-item">📝 Downloadable resources & code</div>
                            <div className="cd-include-item">💬 Private community access</div>
                            <div className="cd-include-item">📱 Watch on any device</div>
                            <div className="cd-include-item">🏅 Certificate of completion</div>
                            <div className="cd-include-item">🔄 Free lifetime updates</div>
                        </div>
                    </div>

                    <div className="cd-sidebar-card instructor-card">
                        <h3>👨‍🏫 About the Instructor</h3>
                        <div className="instructor-info">
                            <div className="instructor-avatar">{course.instructor?.charAt(0)}</div>
                            <div>
                                <p className="instructor-name">{course.instructor}</p>
                                <p className="instructor-bio">Senior {course.category} Expert · 10+ years experience</p>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default CourseDetail;
