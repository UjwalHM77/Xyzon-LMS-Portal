export default function handler(req, res) {
    res.status(200).json({ enrolled: 6, active: 3, completed: 2 });
}
