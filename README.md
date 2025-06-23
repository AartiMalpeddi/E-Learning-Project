# 🎓 E-Learning Management System

This is a backend-focused Node.js application for managing students, courses, and categories in an E-Learning environment. Built with Express.js and MongoDB (via Mongoose), the system provides RESTful APIs to handle operations like student registration, course management, and category classification.

---

## 🚀 Features

- Add and manage students
- Create and manage courses
- Organize courses into categories
- RESTful APIs for CRUD operations
- Mongoose models and routing separation

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **API Testing**: Postman / curl (recommended for testing endpoints)

---

## 📦 Installation

```bash
git clone https://github.com/AartiMalpeddi/E-Learning-Project.git
cd E-Learning-Project
npm install
```

## ⚙️ Setup
1. Ensure MongoDB is running locally or provide a cloud DB URI.

2. (Optional) Create a .env file to store environment variables like:

```ini
MONGODB_URI=mongodb://localhost:27017/elearning
PORT=3000
```
3. Start the server:
```bash
node app.js
```
