# Web Template - Full-Stack Development Starter

A modern, production-ready full-stack web development template built with **TypeScript**, React, Node.js, Express, MySQL, and Tailwind CSS. This template provides a solid foundation for building scalable web applications with best practices and full type safety.

## 🚀 Tech Stack

### Backend
- **TypeScript** - Type-safe JavaScript
- **Node.js** - JavaScript runtime
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

# Development mode (with auto-reload using tsx)
npm run dev

# Build TypeScript
npm run build

# Production mode (requires build first)
npm start

# Type check
npm run type-check
```

The backend server will start on `http://localhost:5000`

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

### Backend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| build | `npm run build` | Compile TypeScript to JavaScript |
| start | `npm start` | Start production server (requires build) |
| dev | `npm run dev` | Start development server with auto-reload (tsx) |
| migrate | `npm run migrate` | Run database migrations |
| rollback | `npm run rollback` | Rollback last migration |
| seed | `npm run seed` | Seed database with sample data |
| type-check | `npm run type-check` | Check TypeScript types without emitting |

### Frontend Scripts

| Script | Command | Description |
|--------|---------|-------------|
| dev | `npm run dev` | Start development server |
| build | `npm run build` | Type check and build for production |
| preview | `npm run preview` | Preview production build |
| lint | `npm run lint` | Run ESLint |
| type-check | `npm run type-check` | Check TypeScript types without emitting |

## 🎨 Features

- ✅ **TypeScript** - Full type safety across backend and frontend
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
   npx knex migrate:make migration_name --knexfile knexfile.ts
   ```

2. **API Development**: Add controllers and routes in `backend/src/` with TypeScript types

3. **Frontend Components**: Create React components in `frontend/src/components/` with TypeScript

4. **Type Safety**: Use interfaces and types for props, state, and API responses

5. **Styling**: Use Tailwind utility classes or extend the theme in `tailwind.config.js`

## 🚢 Deployment

### Production Deployment with PM2

This project includes PM2 process manager configuration for production deployment with features like cluster mode, automatic restart, monitoring, and zero-downtime updates.

#### Prerequisites

Before deploying to production, ensure you have:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MySQL** database configured
- **PM2** installed globally: `npm install -g pm2`
- (Optional) **Nginx** for reverse proxy

#### Quick Deployment

1. **Clone and Setup**
   ```bash
   git clone <repository-url>
   cd web-template
   ```

2. **Configure Environment Variables**
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Edit backend/.env with your production settings
   
   # Frontend
   cp frontend/.env.example frontend/.env
   # Edit frontend/.env with your production API URL
   ```

3. **Run Deployment Script**
   ```bash
   bash deploy.sh
   ```

This script will:
- Install all dependencies
- Run database migrations
- Build backend and frontend
- Start PM2 processes in cluster mode
- Configure automatic restart

#### PM2 Configuration

The `ecosystem.config.js` file configures:

**Backend (API Server)**
- Runs in **cluster mode** with 2 instances
- Port: 5000
- Memory limit: 500MB
- Automatic restart on crash
- Load balanced across instances

**Frontend (Static Files)**
- Served using `serve` package
- Port: 3000
- Memory limit: 300MB
- Single instance (fork mode)

#### Available Scripts

```bash
# Full deployment (initial or clean deploy)
bash deploy.sh

# Zero-downtime update (pull changes, rebuild, reload)
bash update.sh

# Stop all processes gracefully
bash stop.sh
```

#### PM2 Management Commands

```bash
# View status of all processes
pm2 status

# View real-time logs
pm2 logs

# View logs for specific app
pm2 logs web-template-backend
pm2 logs web-template-frontend

# Monitor CPU and memory usage
pm2 monit

# Restart specific process
pm2 restart web-template-backend
pm2 restart web-template-frontend

# Reload with zero downtime (cluster mode)
pm2 reload web-template-backend

# Stop processes
pm2 stop all
pm2 stop web-template-backend
pm2 stop web-template-frontend

# Delete processes from PM2
pm2 delete all
pm2 delete web-template-backend
pm2 delete web-template-frontend

# Save PM2 process list
pm2 save

# Resurrect saved processes (after reboot)
pm2 resurrect
```

#### Auto-start on System Boot

To make your application start automatically on system reboot:

```bash
# Generate startup script
pm2 startup

# Follow the instructions shown (may need sudo)
# Then save the current process list
pm2 save
```

#### Nginx Reverse Proxy Setup

An example Nginx configuration is provided in `nginx.conf`. To use it:

1. **Install Nginx**
   ```bash
   sudo apt-get update
   sudo apt-get install nginx
   ```

2. **Copy configuration**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/web-template
   sudo ln -s /etc/nginx/sites-available/web-template /etc/nginx/sites-enabled/
   ```

3. **Edit the configuration**
   ```bash
   sudo nano /etc/nginx/sites-available/web-template
   # Update server_name with your domain
   ```

4. **Test and reload Nginx**
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```

The Nginx config provides:
- Reverse proxy for backend API (port 5000)
- Reverse proxy for frontend (port 3000)
- Static file caching
- SSL/TLS support (commented out, configure as needed)
- Security headers
- Load balancing

#### Monitoring and Logs

**PM2 Logs**
- Backend logs: `backend/logs/`
- Frontend logs: `frontend/logs/`

**View logs in real-time**
```bash
# All applications
pm2 logs

# Specific application
pm2 logs web-template-backend --lines 100

# Error logs only
pm2 logs --err
```

**PM2 Web Dashboard**
```bash
# Install PM2 web interface
pm2 install pm2-server-monit

# Or use keymetrics for advanced monitoring
pm2 link <secret> <public>
```

#### Troubleshooting

**Problem: Application won't start**
```bash
# Check PM2 logs
pm2 logs

# Check if ports are available
sudo lsof -i :5000
sudo lsof -i :3000

# Verify .env files exist
ls -la backend/.env
ls -la frontend/.env
```

**Problem: Database connection fails**
```bash
# Test database connection
mysql -h <host> -u <user> -p <database>

# Verify environment variables
cd backend && cat .env
```

**Problem: Out of memory**
```bash
# Check memory usage
pm2 monit

# Increase memory limit in ecosystem.config.js
# max_memory_restart: '500M' -> '1G'
```

**Problem: Port already in use**
```bash
# Find process using the port
sudo lsof -i :5000
sudo lsof -i :3000

# Kill the process or change port in config
```

**Problem: Zero-downtime reload not working**
```bash
# Ensure cluster mode is enabled (check ecosystem.config.js)
# Use reload instead of restart
pm2 reload web-template-backend

# Restart if reload fails
pm2 restart web-template-backend
```

#### Environment-Specific Deployment

**Staging Environment**
```bash
# Update ecosystem.config.js with staging config
# Or use PM2 ecosystem environments
pm2 start ecosystem.config.js --env staging
```

**Production Environment**
```bash
pm2 start ecosystem.config.js --env production
```

#### Best Practices

1. **Always use environment variables** for sensitive data
2. **Run database migrations** before starting the application
3. **Use zero-downtime reload** (`pm2 reload`) for updates
4. **Monitor memory and CPU usage** regularly with `pm2 monit`
5. **Set up log rotation** to prevent disk space issues
6. **Use Nginx** as a reverse proxy for better performance
7. **Enable PM2 startup** for automatic recovery after reboot
8. **Backup database** before running migrations

#### Log Rotation

PM2 includes a log rotation module:

```bash
# Install PM2 log rotate
pm2 install pm2-logrotate

# Configure rotation settings
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 30
pm2 set pm2-logrotate:compress true
```

### Manual Deployment (Alternative)

If you prefer not to use PM2:

#### Backend Deployment

1. Build TypeScript: `npm run build`
2. Set environment variables on your hosting platform
3. Run migrations: `npm run migrate`
4. Start the server: `npm start`

#### Frontend Deployment

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
