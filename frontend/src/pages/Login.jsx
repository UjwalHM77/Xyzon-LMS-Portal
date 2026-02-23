import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const { data } = await axios.post(
                'http://localhost:5000/api/auth/login',
                { email, password },
                { headers: { 'Content-Type': 'application/json' } }
            );
            login(data);
            navigate('/dashboard');
        } catch (err) {
            setError(
                err.response?.data?.message || 'Login failed. Please try again.'
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
                    <h2>Welcome Back</h2>
                    <p>Sign in to your student portal</p>
                </div>

                {error && (
                    <div className="login-error">
                        <span>⚠️</span> {error}
                    </div>
                )}

                <form onSubmit={submitHandler} className="login-form">
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
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="login-submit" disabled={loading}>
                        {loading ? (
                            <span className="spinner"></span>
                        ) : (
                            <>Sign In <span className="btn-arrow">→</span></>
                        )}
                    </button>
                </form>

                <p className="login-footer-text">
                    Don't have an account? <Link to="/register" className="register-link">Sign Up Free</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
