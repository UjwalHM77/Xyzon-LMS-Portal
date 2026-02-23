# ⚡ Xyzon LMS Portal

A premium **Learning Management System** built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) — featuring a dark glassmorphism UI, animated gradients, and a fully functional student portal.

> **AICTE Internship Project** — Ujwal Rai

---

## 🚀 Features

- 🏠 **Home Page** — Hero section with animated orbs, gradient text, feature cards & stats
- 🔐 **Student Sign Up** — New users can register and get instant access
- 🔑 **Student Login** — Authenticated login with session persistence
- 📊 **Dashboard** — Collapsible sidebar, stat cards, course progress bars, activity feed
- 📚 **Course Catalog** — 6 rich courses with category filter tabs, ratings, student counts
- 📖 **Course Detail** — Expandable curriculum modules, pricing card, instructor profile
- 📱 **Responsive** — Fully responsive on all screen sizes
- 🎨 **Premium UI** — Dark glassmorphism, Space Grotesk typography, micro-animations

---

## 🛠️ Tech Stack

| Layer      | Technology                           |
|------------|--------------------------------------|
| Frontend   | React 19 + Vite 6, React Router 7   |
| Backend    | Node.js, Express.js 5               |
| Database   | In-memory (MongoDB-ready models)     |
| HTTP       | Axios                                |
| Styling    | Custom CSS, Glassmorphism, CSS Animations |
| Fonts      | Google Fonts (Inter, Space Grotesk)  |

---

## 📂 Complete Project Structure

```
Xyzon-LMS-Portal/
│
├── README.md                          # Project documentation
│
├── backend/                           # Express.js API Server
│   ├── .env                           # Environment variables (PORT, MONGO_URI, JWT_SECRET)
│   ├── package.json                   # Backend dependencies & scripts
│   ├── server.js                      # Main Express server (routes, in-memory data, auth)
│   ├── db.js                          # MongoDB connection helper (for production use)
│   │
│   ├── models/                        # Mongoose data models
│   │   ├── User.js                    # User schema (name, email, password, role)
│   │   └── Course.js                  # Course schema (title, description, price, etc.)
│   │
│   └── routes/                        # Express API route handlers
│       ├── auth.js                    # POST /api/auth/login, POST /api/auth/register
│       ├── dashboard.js               # GET /api/dashboard (student stats)
│       └── courses.js                 # GET /api/courses, GET /api/courses/:id
│
└── frontend/                          # React + Vite Frontend
    ├── index.html                     # HTML entry point (Google Fonts, SEO meta tags)
    ├── package.json                   # Frontend dependencies & scripts
    ├── vite.config.js                 # Vite configuration
    │
    └── src/
        ├── main.jsx                   # React entry point (AuthProvider wrapper)
        ├── App.jsx                    # React Router configuration (6 routes)
        ├── App.css                    # App-level styles
        ├── index.css                  # Global design system (CSS variables, animations)
        │
        ├── context/
        │   └── AuthContext.jsx        # React Context for auth state (login, logout, persist)
        │
        └── pages/
            ├── Home.jsx               # Landing page (hero, features, stats, footer)
            ├── Home.css               # Home styles (orbs, glassmorphism nav, animations)
            ├── Login.jsx              # Student login form
            ├── Login.css              # Login styles (glass card, input focus glow)
            ├── Register.jsx           # Student registration form (sign up)
            ├── Dashboard.jsx          # Student dashboard (sidebar, stats, progress, feed)
            ├── Dashboard.css          # Dashboard styles (collapsible sidebar, stat cards)
            ├── Courses.jsx            # Course catalog with filter tabs
            ├── Courses.css            # Courses grid styles (card hover, image overlay)
            ├── CourseDetail.jsx       # Individual course page (modules, pricing, instructor)
            └── CourseDetail.css       # Detail styles (expandable modules, price card)
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+ installed

### 1. Clone the repository
```bash
git clone https://github.com/UjwalHM77/Xyzon-LMS-Portal.git
cd Xyzon-LMS-Portal
```

### 2. Start the Backend
```bash
cd backend
npm install
npm start
# Server runs on http://localhost:5000
```

### 3. Start the Frontend
```bash
cd frontend
npm install
npm run dev
# App runs on http://localhost:5173
```

---

## 🔑 Demo Credentials

| Email               | Password | Notes              |
|---------------------|----------|--------------------|
| `ujwal@gmail.com`   | `123456` | Pre-registered     |
| `demo@lms.com`      | `demo123`| Pre-registered     |
| *Any new email*     | *Any*    | Use **Sign Up** to register |

---

## 📡 API Endpoints

| Method | Endpoint              | Description                |
|--------|-----------------------|----------------------------|
| POST   | `/api/auth/register`  | Register a new student     |
| POST   | `/api/auth/login`     | Login with email & password|
| GET    | `/api/dashboard`      | Get dashboard statistics   |
| GET    | `/api/courses`        | Get all courses            |
| GET    | `/api/courses/:id`    | Get course by ID           |

---

## 📅 Day-by-Day Development Progress

| Day | Task                          | Deliverables                                                         |
|-----|-------------------------------|----------------------------------------------------------------------|
| 1   | **Setup**                     | Project structure, backend & frontend folders, database connection    |
| 2   | **Authentication**            | Login UI, Register UI, Auth API, session persistence                 |
| 3   | **Home Page**                 | Landing page UI, glassmorphism nav, hero section, feature cards      |
| 4   | **Dashboard**                 | Student dashboard, sidebar, stats API, progress bars, activity feed  |
| 5   | **Courses Module**            | Course model, courses API, course listing UI with filter tabs        |
| 6   | **Course Detail**             | Course detail page, expandable modules, pricing card, instructor bio |
| 7   | **Integration & Deployment**  | Frontend-backend integration, testing, build, GitHub deployment      |

---

## 👤 Author

**Ujwal Rai** — [GitHub](https://github.com/UjwalHM77)

---

## 📜 License

This project is part of an AICTE Internship assignment.
