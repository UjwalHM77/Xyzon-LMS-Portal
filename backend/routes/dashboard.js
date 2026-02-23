import express from 'express';

const router = express.Router();

// Mock Dashboard API
router.get('/', (req, res) => {
    // In a real app we would check the user token (req.headers.authorization)
    // and fetch actual stats from the database based on the user's courses

    res.json({
        enrolled: 4,
        active: 2,
        completed: 1
    });
});

export default router;
