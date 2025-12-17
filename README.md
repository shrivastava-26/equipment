# Equipment Manager

A full-stack web application for managing equipment records with CRUD operations, search, and sorting capabilities.

## Tech Stack

### Frontend
- React
- CSS Modules
- React Hook Form
- React Toastify

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

- ✅ Add new equipment records
- ✅ View all equipment in a table
- ✅ Update existing equipment details
- ✅ Delete equipment records
- ✅ Search equipment
- ✅ Sort equipment
- ✅ Responsive UI with toast notifications

---

## Project Structure

```
equipment/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
└── backend/
    ├── models/
    ├── routes/
    ├── controllers/
    ├── config/
    ├── .env
    └── package.json
```

---

## Installation & Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or Atlas)

### 1. Clone the Repository

```bash
git clone <your-github-repo-url>
cd equipment
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=8080
DB_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
npm start
```

Backend will run at: `http://localhost:8080`

### 3. Frontend Setup

Open a new terminal window:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:8080/api
```

Start the frontend application:

```bash
npm start
```

Frontend will run at: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/equipment` | Get all equipment |
| POST | `/api/equipment` | Create new equipment |
| PUT | `/api/equipment/:id` | Update equipment |
| DELETE | `/api/equipment/:id` | Delete equipment |

---

## Assumptions

- Node.js and npm are installed on the system
- MongoDB is available locally or via MongoDB Atlas
- Application is intended for internal/admin usage
- Basic validation is sufficient for the current scope

---

## Future Improvements

### Backend
- Add Swagger documentation for APIs
- Implement centralized logging and monitoring
- Add caching for frequently accessed data
- Improve error handling and API response consistency
- Add rate limiting and request validation middleware
- Implement authentication and authorization

### Frontend
- Enhance UI/UX with modern design system
- Add comprehensive form validation with error messages
- Introduce state management (Redux or Context API)
- Add client-side caching
- Implement pagination for large datasets
- Add export functionality (CSV/PDF)
