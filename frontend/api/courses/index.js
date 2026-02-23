const courses = [
    {
        _id: '1', title: 'Complete MERN Stack Development',
        description: 'Master full-stack web development from scratch. Build production-ready applications using MongoDB, Express.js, React.js, and Node.js. This comprehensive course covers everything from setting up your development environment to deploying scalable applications on the cloud. Includes 10+ real-world projects, code reviews, and industry best practices.',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        instructor: 'John Doe', duration: '42 hours', price: 49.99, rating: 4.8, students: 1240, category: 'Web Development', level: 'Intermediate',
        modules: ['Environment Setup & Tooling', 'JavaScript ES6+ Fundamentals', 'React.js — Components & Hooks', 'State Management with Context API', 'Node.js & Express REST APIs', 'MongoDB & Mongoose ODM', 'Authentication with JWT', 'File Uploads & Cloud Storage', 'Testing with Jest & React Testing Library', 'Deployment to Vercel & Render']
    },
    {
        _id: '2', title: 'Advanced JavaScript & TypeScript',
        description: 'Take your JavaScript skills to the next level. Deep-dive into closures, prototypes, event loop, generators, proxies, and the module system. Then transition into TypeScript with generics, decorators, and advanced type patterns used in production codebases at top companies.',
        thumbnail: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        instructor: 'Jane Smith', duration: '28 hours', price: 39.99, rating: 4.9, students: 890, category: 'Programming', level: 'Advanced',
        modules: ['Execution Context & Scope Chain', 'Closures & Currying Patterns', 'Prototypal Inheritance Deep Dive', 'Promises, Async/Await & Event Loop', 'Generators & Iterators', 'Proxy & Reflect API', 'TypeScript Fundamentals', 'Generics & Utility Types', 'Decorators & Metadata', 'Building a TS Library from Scratch']
    },
    {
        _id: '3', title: 'UI/UX Design with Figma',
        description: 'Learn modern UI/UX design from ideation to high-fidelity prototypes. Master Figma, design systems, color theory, typography, user research, wireframing, and interactive prototyping. Create a professional portfolio with 5 case studies.',
        thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        instructor: 'Alice Johnson', duration: '35 hours', price: 44.99, rating: 4.7, students: 670, category: 'Design', level: 'Beginner',
        modules: ['Design Thinking & UX Principles', 'User Research & Personas', 'Wireframing & Information Architecture', 'Figma Interface & Tools Mastery', 'Color Theory & Typography', 'Component Libraries & Design Systems', 'Responsive & Mobile Design', 'Interactive Prototyping', 'Usability Testing', 'Portfolio Case Study Creation']
    },
    {
        _id: '4', title: 'Python for Data Science & AI',
        description: 'Unlock the power of Python for data analysis, machine learning, and artificial intelligence. From NumPy and Pandas to scikit-learn and TensorFlow — build real predictive models, create stunning visualizations, and deploy ML solutions.',
        thumbnail: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        instructor: 'Dr. Raj Patel', duration: '50 hours', price: 59.99, rating: 4.9, students: 2100, category: 'Data Science', level: 'Intermediate',
        modules: ['Python Essentials for Data Science', 'NumPy & Vectorized Operations', 'Pandas — Data Wrangling & Cleaning', 'Data Visualization with Matplotlib & Seaborn', 'Statistics & Probability', 'Machine Learning with scikit-learn', 'Deep Learning with TensorFlow', 'Natural Language Processing', 'Model Deployment with Flask', 'Capstone: End-to-End ML Pipeline']
    },
    {
        _id: '5', title: 'DevOps & Cloud Engineering',
        description: 'Master the DevOps lifecycle — from CI/CD pipelines to container orchestration with Docker & Kubernetes. Learn AWS, Terraform, monitoring with Prometheus & Grafana, and build infrastructure as code for production-grade systems.',
        thumbnail: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        instructor: 'Mike Chen', duration: '38 hours', price: 54.99, rating: 4.6, students: 540, category: 'Cloud & DevOps', level: 'Advanced',
        modules: ['Linux & Shell Scripting', 'Git & GitHub Workflows', 'Docker — Containers from Scratch', 'Docker Compose & Multi-Container Apps', 'Kubernetes Fundamentals', 'CI/CD with GitHub Actions', 'AWS Core Services (EC2, S3, RDS)', 'Infrastructure as Code with Terraform', 'Monitoring with Prometheus & Grafana', 'Capstone: Full DevOps Pipeline']
    },
    {
        _id: '6', title: 'Mobile App Development with React Native',
        description: 'Build cross-platform mobile apps for iOS and Android using React Native. Cover navigation, state management, native modules, push notifications, and publishing to App Store & Google Play.',
        thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        instructor: 'Sarah Williams', duration: '32 hours', price: 46.99, rating: 4.7, students: 780, category: 'Mobile Development', level: 'Intermediate',
        modules: ['React Native Environment Setup', 'Core Components & Styling', 'Navigation with React Navigation', 'State Management (Redux Toolkit)', 'API Integration & Networking', 'Camera, Maps & Native Modules', 'Push Notifications', 'Animations with Reanimated', 'Testing & Debugging', 'Publishing to App Store & Play Store']
    }
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(courses);
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
