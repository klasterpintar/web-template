# Backend - Bun.js + Express + MySQL + Knex + TypeScript

Fast and modern backend server built with Bun.js runtime and TypeScript.

## Quick Start

```bash
# Install dependencies with Bun (fast!)
bun install

# Setup environment
cp .env.example .env
# Edit .env with your database credentials

# Run migrations
bun run migrate

# Seed database
bun run seed

# Start development server with hot reload
bun run dev
```

## 🚀 Bun vs Node.js

This backend uses Bun instead of Node.js for better performance:

| Feature | Bun | Node.js |
|---------|-----|---------|
| Startup Time | 2-3x faster | Baseline |
| Package Install | ~10-25x faster* | Baseline |
| Memory Usage | Typically lower | Higher |
| TypeScript | Native support | Needs compilation |
| Watch Mode | Built-in `--watch` | Needs nodemon/tsx |
| Built-in Tools | Bundler, Test runner | Needs external tools |

*Performance improvements vary based on project size and system specifications. These are approximate figures based on Bun's benchmarks.

## 📦 Available Scripts

### Development
- `bun run dev` - Start development server with hot reload (watches for changes)
- `bun run build` - Compile TypeScript (optional with Bun)
- `bun run type-check` - Check TypeScript types without building

### Production
- `bun start` - Start production server (runs TypeScript directly)

### Database
- `bun run migrate` - Run database migrations
- `bun run rollback` - Rollback last migration
- `bun run seed` - Seed database with sample data

### Package Management
- `bun install` - Install dependencies (much faster than npm!)
- `bun add <package>` - Add a new package
- `bun remove <package>` - Remove a package

## 🔄 Migration from Node.js

If you prefer Node.js over Bun, you can easily switch:

### Option 1: Keep Node.js compatibility
The code is already compatible! Just use:
```bash
npm install        # instead of bun install
npm run dev        # instead of bun run dev
```

### Option 2: Update scripts for Node.js
Edit `package.json`:
```json
{
  "scripts": {
    "start": "node dist/server.js",
    "dev": "tsx watch src/server.ts",
    "migrate": "knex migrate:latest --knexfile knexfile.ts"
  }
}
```

Then install additional dev dependencies:
```bash
npm install --save-dev tsx nodemon
```

## 🎯 Why TypeScript + Bun?

### Native TypeScript Support
Bun runs TypeScript files directly without compilation:
- No build step needed for development
- Faster iteration cycles
- Instant hot reload

### Performance Benefits
- **Server startup**: Typically 2-3x faster than Node.js
- **Package installation**: Approximately 10-25x faster than npm (varies by project size)
- **Hot reload**: Near-instant with `bun --watch`
- **Memory footprint**: Generally lower than Node.js (varies by workload)

*Note: Performance improvements depend on your specific hardware, project size, and workload. These are approximate figures based on Bun's published benchmarks.*

### Developer Experience
- Built-in watch mode - no need for nodemon or tsx
- Fast package installation - replaces npm/yarn/pnpm
- Compatible with npm packages - drop-in replacement
- All-in-one toolkit - bundler, test runner, package manager

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts          # Database configuration
│   ├── controllers/
│   │   └── exampleController.ts # Business logic
│   ├── middleware/
│   │   └── errorHandler.ts      # Global error handler
│   ├── routes/
│   │   ├── index.ts             # Route aggregator
│   │   └── exampleRoutes.ts     # API routes
│   └── server.ts                # Express app & server startup
├── db/
│   ├── migrations/              # Database migrations
│   └── seeds/                   # Database seeds
├── dist/                        # Compiled output (optional)
├── knexfile.ts                  # Knex configuration
├── bunfig.toml                  # Bun configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies & scripts
├── .env.example                 # Environment variables template
├── .bunignore                   # Files to ignore for Bun bundler
└── README.md                    # This file
```

## 🔧 Configuration

### bunfig.toml
Bun's configuration file for package installation and runtime behavior:
- Package registry configuration
- Cache settings
- Runtime options

### tsconfig.json
TypeScript compiler configuration:
- Target: ES2022
- Module system: ES Modules
- Strict type checking enabled
- Source maps for debugging

### knexfile.ts
Database migration and connection configuration for MySQL.

## 🔌 Environment Variables

Required environment variables in `.env`:

```bash
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=web_template_db
DB_PORT=3306

# Server
PORT=5000
NODE_ENV=development
```

## 🧪 Testing Database Connection

The app automatically tests the database connection on startup. If the connection fails, the server won't start and will show an error message.

## 🛠️ Troubleshooting

### Bun not found
Install Bun:
```bash
# macOS/Linux
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

### Database connection failed
1. Ensure MySQL is running
2. Check credentials in `.env`
3. Verify database exists: `CREATE DATABASE web_template_db;`
4. Test connection: `mysql -u root -p`

### Port already in use
Change the `PORT` in `.env` file or kill the process using port 5000:
```bash
# Find process
lsof -i :5000

# Kill process (macOS/Linux)
kill -9 <PID>
```

## 📚 Learn More

- [Bun Documentation](https://bun.sh/docs)
- [Express.js Documentation](https://expressjs.com/)
- [Knex.js Documentation](https://knexjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 🤝 Contributing

When adding new features:
1. Write TypeScript with proper types
2. Test with both Bun and Node.js if possible
3. Update migrations for database changes
4. Follow existing code structure
5. Add proper error handling

---

**Built with ⚡ Bun.js for maximum performance!**
