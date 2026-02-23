// Simple in-memory store (resets on cold start — fine for demo)
const users = [
    { _id: 'u1', name: 'Ujwal HM', email: 'ujwal@gmail.com', password: '123456', role: 'student' },
    { _id: 'u2', name: 'Demo Student', email: 'demo@lms.com', password: 'demo123', role: 'student' },
];

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, password } = req.body;
    const exists = users.find((u) => u.email === email);
    if (exists) return res.status(400).json({ message: 'User already exists' });

    const newUser = {
        _id: 'u' + Date.now(),
        name,
        email,
        password,
        role: 'student',
    };
    users.push(newUser);

    res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        token: 'lms-token-' + newUser._id,
    });
}
