# Web Template - Full-Stack Development Starter

A modern, production-ready full-stack web development template built with **TypeScript**, React, Node.js, Express, MySQL, and Tailwind CSS. This template provides a solid foundation for building scalable web applications with best practices and full type safety.

## 🚀 Tech Stack

### Backend
- **Bun.js** - Fast JavaScript runtime with performance improvements over Node.js
- **TypeScript** - Type-safe JavaScript
- **Express** - Fast, minimalist web framework
- **MySQL** - Reliable relational database
- **Knex.js** - SQL query builder and migration tool
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **TypeScript** - Type-safe JavaScript
- **React 19** - Latest version of the modern UI library
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Router v6** - Client-side routing
- **Axios** - Promise-based HTTP client

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Bun** (v1.0 or higher) - [Install Bun](https://bun.sh/docs/installation)
  - **Or Node.js** (v16 or higher) if you prefer - [Download](https://nodejs.org/)
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

# Install dependencies with Bun (much faster than npm!)
bun install

# Create .env file from example
cp .env.example .env

# Edit .env with your database credentials
# nano .env or use your preferred editor
```

> **Note**: If you prefer Node.js, you can use `npm install` instead of `bun install`. The backend is compatible with both runtimes!

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
bun run migrate
```

### 3. Seed Database (Optional)

```bash
# Seed database with sample data
bun run seed
```

## 🏃 Running the Application

### Start Backend Server

```bash
# From backend directory
cd backend

# Development mode with hot reload (Bun's built-in watch mode)
bun run dev

# Build TypeScript (optional with Bun)
bun run build

# Production mode (Bun runs TypeScript directly)
bun start

# Type check
bun run type-check
```

> **Using Node.js instead?** Replace `bun` with `npm` in the commands above.

The backend server will start on `http://localhost:5000` with **Bun.js runtime** for blazing fast performance! 🚀

### Start Frontend Development Server

```bash
# From frontend directory (in a new terminal)
cd frontend

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run type-check
```

The frontend will start on `http://localhost:5173` and automatically open in your browser.

## ⚡ Why Bun?

This template uses **Bun.js** for the backend, providing significant performance improvements:

### 🚀 Performance Benefits
- ⚡ **2-3x faster startup time** compared to Node.js
- 📦 **10-25x faster package installation** than npm (varies by project)
- 🔥 **Instant hot reload** with built-in `--watch` flag
- 💾 **Lower memory usage** - More efficient runtime

*Based on [official Bun benchmarks](https://bun.sh/blog/bun-v1.0#performance). Actual results vary by hardware and project characteristics.*

### 🛠️ Developer Experience
- 🧪 **Built-in test runner** - No need for Jest or Mocha
- 📦 **Built-in package manager** - Faster than npm/yarn/pnpm
- 🔄 **Native TypeScript support** - No compilation needed for development
- 🎯 **Drop-in Node.js replacement** - Compatible with npm packages
- 🔨 **All-in-one toolkit** - Bundler, test runner, package manager

### 📥 Installing Bun

**macOS/Linux:**
```bash
curl -fsSL https://bun.sh/install | bash
```

**Windows (PowerShell):**
```powershell
powershell -c "irm bun.sh/install.ps1 | iex"
```

**Verify installation:**
```bash
bun --version
```

### 🔄 Node.js Compatibility

Don't want to use Bun? No problem! The backend is fully compatible with Node.js:
- Simply use `npm install` instead of `bun install`
- Use `npm run dev` instead of `bun run dev`
- All functionality remains the same

## 📁 Project Structure

```
web-template/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts          # Database configuration
│   │   ├── controllers/
│   │   │   └── exampleController.ts # Business logic
│   │   ├── routes/
│   │   │   ├── index.ts             # Route aggregator
│   │   │   └── exampleRoutes.ts     # User routes
│   │   ├── middleware/
│   │   │   └── errorHandler.ts      # Global error handler
│   │   └── server.ts                # Express app setup
│   ├── db/
│   │   ├── migrations/              # Database migrations
│   │   └── seeds/                   # Database seeds
│   ├── knexfile.ts                  # Knex configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── package.json
│   ├── .env.example
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.ts             # API client setup
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Header.tsx       # Navigation header
│   │   │   │   └── Footer.tsx       # Page footer
│   │   │   └── ExampleComponent.tsx # CRUD component
│   │   ├── pages/
│   │   │   ├── Home.tsx             # Home page
│   │   │   └── About.tsx            # About page
│   │   ├── App.tsx                  # Main app component
│   │   ├── main.tsx                 # App entry point
│   │   ├── vite-env.d.ts            # Vite environment types
│   │   └── index.css                # Global styles
│   ├── public/                      # Static assets
│   ├── index.html                   # HTML template
│   ├── vite.config.ts               # Vite configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── tsconfig.node.json           # TypeScript Node configuration
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

### Backend Scripts (with Bun)

| Script | Command | Description |
|--------|---------|-------------|
| install | `bun install` | Install dependencies (much faster than npm!) |
| dev | `bun run dev` | Start development server with hot reload |
| start | `bun start` | Start production server (runs TypeScript directly) |
| build | `bun run build` | Compile TypeScript (optional with Bun) |
| migrate | `bun run migrate` | Run database migrations |
| rollback | `bun run rollback` | Rollback last migration |
| seed | `bun run seed` | Seed database with sample data |
| type-check | `bun run type-check` | Check TypeScript types without emitting |

> **Note**: Replace `bun` with `npm` if using Node.js instead.

### Frontend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `npm run dev` | Start development server |
| build | `npm run build` | Type check and build for production |
| preview | `npm run preview` | Preview production build |
| lint | `npm run lint` | Run ESLint |
| type-check | `npm run type-check` | Check TypeScript types without emitting |

## 🎨 Features

- ✅ **Bun.js Runtime** - Faster backend with native TypeScript support
- ✅ **TypeScript** - Full type safety across backend and frontend
- ✅ **RESTful API** - Clean API architecture following REST conventions
- ✅ **Database Migrations** - Version control for database schema
- ✅ **Error Handling** - Comprehensive error handling and validation
- ✅ **CORS Configuration** - Ready for cross-origin requests
- ✅ **Environment Variables** - Secure configuration management
- ✅ **Hot Reload** - Fast development feedback with Bun's `--watch`
- ✅ **Responsive Design** - Mobile-first responsive UI
- ✅ **React Router** - Client-side routing with React Router v6
- ✅ **Tailwind CSS** - Utility-first styling with custom components
- ✅ **Fast Package Management** - Lightning-fast installation with Bun
- ✅ **Production Ready** - Optimized builds for deployment
- ✅ **Backward Compatible** - Works with both Bun and Node.js

## 🧪 Development Workflow

1. **Database Changes**: Create a new migration file
   ```bash
   cd backend
   npx knex migrate:make migration_name --knexfile knexfile.ts
   ```

2. **API Development**: Add controllers and routes in `backend/src/` with TypeScript types

3. **Frontend Components**: Create React components in `frontend/src/components/` with TypeScript

4. **Type Safety**: Use interfaces and types for props, state, and API responses

5. **Styling**: Use Tailwind utility classes or extend the theme in `tailwind.config.js`

## 🚢 Deployment

### Backend Deployment (with Bun)

**Option 1: Deploy with Bun (Recommended)**
1. Install Bun on your server
2. Set environment variables on your hosting platform
3. Install dependencies: `bun install --production`
4. Run migrations: `bun run migrate`
5. Start the server: `bun start`

**Option 2: Deploy with Node.js**
1. Build TypeScript: `bun run build` or `npm run build`
2. Set environment variables
3. Run migrations: `npm run migrate`
4. Start the server: `node dist/server.js`

> **Note**: Bun is recommended for production as it uses less memory and starts faster!

### Frontend Deployment

1. Build the application: `npm run build` (includes TypeScript compilation)
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

- TypeScript Team for bringing type safety to JavaScript
- React Team for the amazing UI library
- Express Team for the web framework
- Tailwind CSS for the utility-first CSS framework
- Vite Team for the lightning-fast build tool
- Knex.js Team for the SQL query builder

---

**Happy Coding! 🎉**
