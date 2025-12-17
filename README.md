# Web Template - Full-Stack Development Starter

A modern, production-ready full-stack web development template built with React, Node.js, Express, MySQL, and Tailwind CSS. This template provides a solid foundation for building scalable web applications with best practices baked in.

## 🚀 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Fast, minimalist web framework
- **MySQL** - Reliable relational database
- **Knex.js** - SQL query builder and migration tool
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React 18** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Axios** - Promise-based HTTP client

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Comes with Node.js
- **MySQL** (v5.7 or higher) - [Download](https://dev.mysql.com/downloads/)

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd web-template
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Edit .env with your database credentials
# nano .env or use your preferred editor
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory
cd ../frontend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# The default API URL is already set to http://localhost:5000/api
```

## 🗄️ Database Setup

### 1. Create Database

```bash
# Login to MySQL
mysql -u root -p

# Create database
CREATE DATABASE web_template_db;

# Exit MySQL
exit;
```

### 2. Run Migrations

```bash
# From the backend directory
cd backend

# Run migrations to create tables
npm run migrate
```

### 3. Seed Database (Optional)

```bash
# Seed database with sample data
npm run seed
```

## 🏃 Running the Application

### Start Backend Server

```bash
# From backend directory
cd backend

# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

The backend server will start on `http://localhost:5000`

### Start Frontend Development Server

```bash
# From frontend directory (in a new terminal)
cd frontend

# Start development server
npm run dev
```

The frontend will start on `http://localhost:5173` and automatically open in your browser.

## 📁 Project Structure

```
web-template/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # Database configuration
│   │   ├── controllers/
│   │   │   └── exampleController.js # Business logic
│   │   ├── routes/
│   │   │   ├── index.js             # Route aggregator
│   │   │   └── exampleRoutes.js     # User routes
│   │   ├── middleware/
│   │   │   └── errorHandler.js      # Global error handler
│   │   └── server.js                # Express app setup
│   ├── db/
│   │   ├── migrations/              # Database migrations
│   │   └── seeds/                   # Database seeds
│   ├── knexfile.js                  # Knex configuration
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.js             # API client setup
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Header.jsx       # Navigation header
│   │   │   │   └── Footer.jsx       # Page footer
│   │   │   └── ExampleComponent.jsx # CRUD component
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Home page
│   │   │   └── About.jsx            # About page
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # App entry point
│   │   └── index.css                # Global styles
│   ├── public/                      # Static assets
│   ├── index.html                   # HTML template
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # Tailwind configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
└── README.md
```

## 🔌 API Endpoints

### Base URL: `http://localhost:5000/api`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | API information |
| GET | `/users` | Get all users |
| GET | `/users/:id` | Get user by ID |
| POST | `/users` | Create new user |
| PUT | `/users/:id` | Update user |
| DELETE | `/users/:id` | Delete user |

### Health Check
- **GET** `http://localhost:5000/health` - Server health check

### Example Requests

#### Get All Users
```bash
curl http://localhost:5000/api/users
```

#### Create User
```bash
curl -X POST http://localhost:5000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

#### Update User
```bash
curl -X PUT http://localhost:5000/api/users/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane Doe","email":"jane@example.com"}'
```

#### Delete User
```bash
curl -X DELETE http://localhost:5000/api/users/1
```

## 🔐 Environment Variables

### Backend (.env)

```env
# Database Configuration
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=web_template_db
DB_PORT=3306

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Frontend (.env)

```env
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

## 📜 Available Scripts

### Backend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| start | `npm start` | Start production server |
| dev | `npm run dev` | Start development server with auto-reload |
| migrate | `npm run migrate` | Run database migrations |
| rollback | `npm run rollback` | Rollback last migration |
| seed | `npm run seed` | Seed database with sample data |

### Frontend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `npm run dev` | Start development server |
| build | `npm run build` | Build for production |
| preview | `npm run preview` | Preview production build |
| lint | `npm run lint` | Run ESLint |

## 🎨 Features

- ✅ **RESTful API** - Clean API architecture following REST conventions
- ✅ **Database Migrations** - Version control for database schema
- ✅ **Error Handling** - Comprehensive error handling and validation
- ✅ **CORS Configuration** - Ready for cross-origin requests
- ✅ **Environment Variables** - Secure configuration management
- ✅ **Responsive Design** - Mobile-first responsive UI
- ✅ **React Router** - Client-side routing with React Router v6
- ✅ **Tailwind CSS** - Utility-first styling with custom components
- ✅ **Hot Module Replacement** - Fast development with Vite HMR
- ✅ **Production Ready** - Optimized builds for deployment

## 🧪 Development Workflow

1. **Database Changes**: Create a new migration file
   ```bash
   cd backend
   npx knex migrate:make migration_name
   ```

2. **API Development**: Add controllers and routes in `backend/src/`

3. **Frontend Components**: Create React components in `frontend/src/components/`

4. **Styling**: Use Tailwind utility classes or extend the theme in `tailwind.config.js`

## 🚢 Deployment

### Backend Deployment

1. Set environment variables on your hosting platform
2. Run migrations: `npm run migrate`
3. Start the server: `npm start`

### Frontend Deployment

1. Build the application: `npm run build`
2. Deploy the `dist/` folder to your static hosting service (Netlify, Vercel, etc.)
3. Update `VITE_API_URL` to point to your production API

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Team for the amazing UI library
- Express Team for the web framework
- Tailwind CSS for the utility-first CSS framework
- Vite Team for the lightning-fast build tool
- Knex.js Team for the SQL query builder

---

**Happy Coding! 🎉**
