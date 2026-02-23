import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const [stats, setStats] = useState({ enrolled: 0, completed: 0, active: 0 });
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        const fetchDashboardStats = async () => {
            try {
                const { data } = await axios.get('/api/dashboard', {
                    headers: { Authorization: `Bearer ${user?.token}` }
                });
                setStats(data);
            } catch (error) {
                console.error("Error fetching dashboard stats", error);
            }
        };
        if (user) fetchDashboardStats();
    }, [user]);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const courses = [
        { id: '1', title: 'MERN Stack Guide', progress: 65, color: '#6366f1' },
        { id: '2', title: 'Advanced JavaScript', progress: 40, color: '#06b6d4' },
        { id: '3', title: 'UI/UX Design', progress: 20, color: '#f59e0b' },
    ];

    return (
        <div className="dash-layout">
            {/* Sidebar */}
            <aside className={`dash-sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
                <div className="sidebar-top">
                    <div className="sidebar-brand">
                        <span className="sb-icon">⚡</span>
                        {sidebarOpen && <span className="sb-text">Xyzon<span className="sb-accent">LMS</span></span>}
                    </div>
                    <button className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        {sidebarOpen ? '◀' : '▶'}
                    </button>
                </div>

                <nav className="sidebar-menu">
                    <Link to="/dashboard" className="menu-item active">
                        <span className="mi-icon">📊</span>
                        {sidebarOpen && <span>Overview</span>}
                    </Link>
                    <Link to="/courses" className="menu-item">
                        <span className="mi-icon">📚</span>
                        {sidebarOpen && <span>Courses</span>}
                    </Link>
                </nav>

                <div className="sidebar-bottom">
                    <button onClick={handleLogout} className="menu-item logout-item">
                        <span className="mi-icon">🚪</span>
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="dash-main">
                <header className="dash-topbar">
                    <div>
                        <h1 className="dash-greeting">Welcome back, <span className="gradient-text">{user?.name}</span> 👋</h1>
                        <p className="dash-subgreeting">Here's your learning overview</p>
                    </div>
                    <div className="topbar-avatar">
                        <div className="avatar-circle">{user?.name?.charAt(0)}</div>
                    </div>
                </header>

                {/* Stats Cards */}
                <section className="dash-stats">
                    <div className="dstat-card">
                        <div className="dstat-icon purple-bg">📚</div>
                        <div className="dstat-info">
                            <div className="dstat-value">{stats.enrolled}</div>
                            <div className="dstat-label">Enrolled</div>
                        </div>
                    </div>
                    <div className="dstat-card">
                        <div className="dstat-icon blue-bg">⚡</div>
                        <div className="dstat-info">
                            <div className="dstat-value">{stats.active}</div>
                            <div className="dstat-label">Active</div>
                        </div>
                    </div>
                    <div className="dstat-card">
                        <div className="dstat-icon green-bg">🏆</div>
                        <div className="dstat-info">
                            <div className="dstat-value">{stats.completed}</div>
                            <div className="dstat-label">Completed</div>
                        </div>
                    </div>
                </section>

                {/* Course Progress */}
                <section className="dash-section">
                    <h2 className="section-title">Course Progress</h2>
                    <div className="progress-cards">
                        {courses.map(c => (
                            <Link to={`/courses/${c.id}`} key={c.id} className="progress-card">
                                <div className="pc-header">
                                    <h4>{c.title}</h4>
                                    <span className="pc-percent">{c.progress}%</span>
                                </div>
                                <div className="pc-bar-track">
                                    <div className="pc-bar-fill" style={{ width: `${c.progress}%`, background: c.color }}></div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Activity Feed */}
                <section className="dash-section">
                    <h2 className="section-title">Recent Activity</h2>
                    <div className="activity-feed">
                        <div className="feed-item">
                            <div className="feed-dot green"></div>
                            <div className="feed-content">
                                <p>Completed module <strong>React Hooks Deep Dive</strong></p>
                                <span className="feed-time">5 hours ago</span>
                            </div>
                        </div>
                        <div className="feed-item">
                            <div className="feed-dot purple"></div>
                            <div className="feed-content">
                                <p>Enrolled in <strong>MERN Stack Development</strong></p>
                                <span className="feed-time">2 days ago</span>
                            </div>
                        </div>
                        <div className="feed-item">
                            <div className="feed-dot blue"></div>
                            <div className="feed-content">
                                <p>Started <strong>Advanced JavaScript Concepts</strong></p>
                                <span className="feed-time">1 week ago</span>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;
