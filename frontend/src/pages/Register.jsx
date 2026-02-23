import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './Login.css'; /* Reuse Login styles */

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }
        setLoading(true);
        setError('');
        try {
            const { data } = await axios.post(
                '/api/auth/register',
                { name, email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError(
                err.response?.data?.message || 'Registration failed. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-orb login-orb-1"></div>
            <div className="login-orb login-orb-2"></div>

            <Link to="/" className="login-back">← Back to Home</Link>

            <div className="login-card">
                <div className="login-card-header">
                    <div className="login-logo">⚡</div>
                    <h2>Create Account</h2>
                    <p>Join Xyzon LMS and start learning today</p>
                </div>

                {error && (
                    <div className="login-error">
                        <span>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={submitHandler} className="login-form">
                    <div className="form-group">
                        <label>Full Name</label>
                        <div className="input-wrapper">
                            <span className="input-icon">👤</span>
                            <input
                                type="text"
                                placeholder="Enter your full name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <div className="input-wrapper">
                            <span className="input-icon">📧</span>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="input-wrapper">
                            <span className="input-icon">🔒</span>
                            <input
                                type="password"
                                placeholder="Create a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Confirm Password</label>
                        <div className="input-wrapper">
                            <span className="input-icon">🔐</span>
                            <input
                                type="password"
                                placeholder="Confirm your password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-submit" disabled={loading}>
                        {loading ? (
                            <span className="spinner"></span>
                        ) : (
                            <>Create Account <span className="btn-arrow">→</span></>
                        )}
                    </button>
                </form>

                <p className="login-footer-text">
                    Already have an account? <Link to="/login" className="register-link">Sign In</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
