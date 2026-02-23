// In-memory users store
const users = [
    { _id: 'u1', name: 'Ujwal HM', email: 'ujwal@gmail.com', password: '123456', role: 'student' },
    { _id: 'u2', name: 'Demo Student', email: 'demo@lms.com', password: 'demo123', role: 'student' },
];

export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { email, password } = req.body;
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: 'lms-token-' + user._id,
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
}
