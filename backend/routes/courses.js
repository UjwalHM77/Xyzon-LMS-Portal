import express from 'express';
import Course from '../models/Course.js';

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find({});
        // If DB is empty, let's return some mock data for the sake of the demo
        if (courses.length === 0) {
            return res.json([
                {
                    _id: "1",
                    title: "Complete MERN Stack Guide",
                    description: "Learn building full stack apps with MongoDB, Express, React, Node.js.",
                    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    instructor: "John Doe",
                    duration: "20 hours",
                    price: 49.99
                },
                {
                    _id: "2",
                    title: "Advanced JavaScript Concepts",
                    description: "Master closures, promises, async/await and more.",
                    thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    instructor: "Jane Smith",
                    duration: "10 hours",
                    price: 29.99
                },
                {
                    _id: "3",
                    title: "UI/UX Design Masterclass",
                    description: "Learn Figma and design principles for modern web apps.",
                    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    instructor: "Alice Johnson",
                    duration: "15 hours",
                    price: 39.99
                }
            ]);
        }
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get course by ID
router.get('/:id', async (req, res) => {
    try {
        // For demo purposes, we do a simple check. Usually we would query the database with Course.findById(req.params.id)
        const courses = [
            {
                _id: "1",
                title: "Complete MERN Stack Guide",
                description: "Learn building full stack apps with MongoDB, Express, React, Node.js. This course covers everything from basics to advanced topics.",
                thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                instructor: "John Doe",
                duration: "20 hours",
                price: 49.99,
                modules: ["Introduction", "React Basics", "Node Express API", "MongoDB", "Full Stack Integration"]
            },
            {
                _id: "2",
                title: "Advanced JavaScript Concepts",
                description: "Master closures, promises, async/await and more.",
                thumbnail: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                instructor: "Jane Smith",
                duration: "10 hours",
                price: 29.99,
                modules: ["Variables & Scopes", "Closures", "Async JS", "Prototypes"]
            }
        ];

        const dbCourse = await Course.findById(req.params.id).catch(e => null);
        if (dbCourse) return res.json(dbCourse);

        const mockCourse = courses.find(c => c._id === req.params.id);
        if (mockCourse) {
            res.json(mockCourse);
        } else {
            res.status(404).json({ message: 'Course not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;
