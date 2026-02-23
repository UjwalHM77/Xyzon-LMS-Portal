import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/api/courses');
                setCourses(data);
            } catch (error) {
                console.error("Error fetching courses", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    const categories = ['All', ...new Set(courses.map(c => c.category))];
    const filtered = filter === 'All' ? courses : courses.filter(c => c.category === filter);

    return (
        <div className="courses-page">
            <div className="courses-orb courses-orb-1"></div>
            <div className="courses-orb courses-orb-2"></div>

            {/* Header */}
            <nav className="nav-glass">
                <div className="nav-inner">
                    <Link to="/" className="nav-brand">
                        <span className="brand-icon">⚡</span>
                        <span className="brand-text">Xyzon<span className="brand-accent">LMS</span></span>
                    </Link>
                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/dashboard" className="nav-cta">Dashboard →</Link>
                    </div>
                </div>
            </nav>

            <header className="courses-hero">
                <div className="courses-hero-inner">
                    <span className="courses-badge">📚 Course Catalog</span>
                    <h1>Explore Our <span className="gradient-text">Courses</span></h1>
                    <p>Handpicked courses from top instructors to help you level up your skills and career.</p>
                </div>
            </header>

            {/* Filter Tabs */}
            <div className="filter-bar">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`filter-chip ${filter === cat ? 'active' : ''}`}
                        onClick={() => setFilter(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <main className="courses-container">
                {loading ? (
                    <div className="courses-loader">
                        <div className="loader-spinner"></div>
                        <p>Loading courses...</p>
                    </div>
                ) : (
                    <div className="courses-grid">
                        {filtered.map((course, idx) => (
                            <Link to={`/courses/${course._id}`} key={course._id} className="course-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="cc-image-wrap">
                                    <img src={course.thumbnail} alt={course.title} />
                                    <div className="cc-overlay">
                                        <span className="cc-tag">{course.duration}</span>
                                    </div>
                                    <div className="cc-level-badge">{course.level || 'Beginner'}</div>
                                </div>
                                <div className="cc-body">
                                    <div className="cc-meta-row">
                                        <span className="cc-category">{course.category}</span>
                                        <span className="cc-rating">⭐ {course.rating}</span>
                                    </div>
                                    <h3>{course.title}</h3>
                                    <p className="cc-instructor">by {course.instructor}</p>
                                    <p className="cc-desc">{course.description.substring(0, 100)}...</p>
                                    <div className="cc-footer">
                                        <div className="cc-footer-left">
                                            <span className="cc-price">${course.price}</span>
                                            <span className="cc-students">👥 {course.students?.toLocaleString()} students</span>
                                        </div>
                                        <span className="cc-view">View →</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
};

export default Courses;
