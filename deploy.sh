#!/bin/bash

# PM2 Deployment Script for Web Template
# This script installs dependencies, builds the application, runs migrations, and starts PM2 processes

set -e  # Exit on error

echo "=========================================="
echo "  Web Template Deployment Script"
echo "=========================================="
echo ""

# Function to print colored output
print_success() {
    echo -e "\033[0;32m✓ $1\033[0m"
}

print_error() {
    echo -e "\033[0;31m✗ $1\033[0m"
}

print_info() {
    echo -e "\033[0;34m➜ $1\033[0m"
}

# Check if required commands are available
print_info "Checking required commands..."
command -v node >/dev/null 2>&1 || { print_error "Node.js is not installed. Aborting."; exit 1; }
command -v npm >/dev/null 2>&1 || { print_error "npm is not installed. Aborting."; exit 1; }
command -v pm2 >/dev/null 2>&1 || { print_error "PM2 is not installed. Install it with: npm install -g pm2"; exit 1; }
print_success "All required commands are available"
echo ""

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# 1. Backend Setup
print_info "Setting up backend..."
cd backend

if [ ! -f .env ]; then
    print_error ".env file not found in backend directory. Please create it from .env.example"
    exit 1
fi

print_info "Installing backend dependencies..."
npm install --production=false
print_success "Backend dependencies installed"

print_info "Running database migrations..."
npm run migrate || { print_error "Migration failed"; exit 1; }
print_success "Database migrations completed"

print_info "Building backend..."
npm run build || { print_error "Backend build failed"; exit 1; }
print_success "Backend built successfully"

# Create logs directory if it doesn't exist
mkdir -p logs
print_success "Backend logs directory ready"

cd ..
echo ""

# 2. Frontend Setup
print_info "Setting up frontend..."
cd frontend

if [ ! -f .env ]; then
    print_error ".env file not found in frontend directory. Please create it from .env.example"
    exit 1
fi

print_info "Installing frontend dependencies..."
npm install --production=false
print_success "Frontend dependencies installed"

print_info "Building frontend..."
npm run build || { print_error "Frontend build failed"; exit 1; }
print_success "Frontend built successfully"

# Create logs directory if it doesn't exist
mkdir -p logs
print_success "Frontend logs directory ready"

cd ..
echo ""

# 3. PM2 Setup
print_info "Starting PM2 processes..."

# Stop any existing PM2 processes
pm2 delete web-template-backend 2>/dev/null || true
pm2 delete web-template-frontend 2>/dev/null || true

# Start PM2 processes using ecosystem config
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

print_success "PM2 processes started"
echo ""

# 4. Display Status
echo "=========================================="
echo "  Deployment Completed Successfully!"
echo "=========================================="
echo ""
print_info "PM2 Status:"
pm2 status
echo ""
print_info "Backend running on: http://localhost:5000"
print_info "Frontend running on: http://localhost:3000"
echo ""
print_info "Useful commands:"
echo "  - View logs: pm2 logs"
echo "  - Monitor: pm2 monit"
echo "  - Restart: bash update.sh"
echo "  - Stop: bash stop.sh"
echo ""
