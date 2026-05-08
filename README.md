# MERN Hacker News Scraper App

A full-stack MERN application that scrapes the top stories from Hacker News and allows authenticated users to bookmark stories.

---

# Features

## Web Scraper
- Scrapes top 10 stories from Hacker News
- Extracts:
  - Title
  - URL
  - Points
  - Author
  - Posted Time
- Stores scraped data in MongoDB
- Runs automatically on server start
- Can also be triggered manually via API

---

## Backend Features
- JWT Authentication
- Register/Login APIs
- Fetch all stories
- Fetch single story
- Bookmark functionality
- Protected routes
- MongoDB integration
- REST API architecture

---

## Frontend Features
- React.js frontend
- Bootstrap responsive UI
- Login/Register pages
- Story listing
- Bookmark stories
- Protected bookmarks page
- React Context API for authentication
- Toast notifications

---

# Tech Stack

## Frontend
- React.js
- Bootstrap
- Axios
- React Router DOM
- React Toastify

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- Axios
- Cheerio

---

# Folder Structure

## Backend

```bash
backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
```

## Frontend

```bash
frontend/
│
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.js
│   └── index.js
```

---

# Environment Variables

## Backend `.env`

```env
PORT=5000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/ginisys9/MernApp
```

---

# Backend Setup

```bash
cd backend

npm install

npm run dev
```

Backend runs on:

```bash
http://localhost:3000
```

---

# Frontend Setup

```bash
cd frontend

npm install

npm start
```

Frontend runs on:

```bash
http://localhost:3000
```

---

# API Endpoints

## Authentication APIs

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

---

## Story APIs

### Get All Stories

```http
GET /api/stories
```

### Get Single Story

```http
GET /api/stories/:id
```

### Toggle Bookmark

```http
POST /api/stories/:id/bookmark
```

Protected Route (JWT Required)

---

## Scraper API

### Run Scraper Manually

```http
POST /api/scrape
```

---

# Authentication Flow

- User registers/logs in
- JWT token generated from backend
- Token stored in localStorage
- Axios interceptor attaches token automatically
- Protected routes validate token

---

# Bookmark Functionality

- Logged-in users can bookmark stories
- Bookmark data stored in MongoDB
- Users can add/remove bookmarks

---

# Bonus Features

- Responsive Bootstrap UI
- Protected routes
- Toast notifications
- Clean folder structure
- Meaningful Git commits

---

# Deployment

## Frontend
- Vercel

## Backend
- Render / Railway

---

# Future Improvements

- Pagination
- Search functionality
- Dark mode
- Loading skeletons
- User profile page

---

# Author

MD Intekhap

Backend Developer | MERN Stack Developer
