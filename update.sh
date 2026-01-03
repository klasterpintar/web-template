#!/bin/bash

# PM2 Update Script for Web Template
# This script performs zero-downtime updates by pulling changes, building, and reloading PM2 processes

set -e  # Exit on error

echo "=========================================="
echo "  Web Template Update Script"
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

# Check if PM2 is installed
command -v pm2 >/dev/null 2>&1 || { print_error "PM2 is not installed. Aborting."; exit 1; }

# Get the directory where the script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# 1. Pull latest changes (if using git)
if [ -d .git ]; then
    print_info "Pulling latest changes from git..."
    git pull || { print_error "Git pull failed"; exit 1; }
    print_success "Latest changes pulled"
    echo ""
fi

# 2. Update Backend
print_info "Updating backend..."
cd backend

print_info "Installing/updating backend dependencies..."
npm install --production=false
print_success "Backend dependencies updated"

print_info "Running database migrations..."
npm run migrate || { print_error "Migration failed"; exit 1; }
print_success "Database migrations completed"

print_info "Building backend..."
npm run build || { print_error "Backend build failed"; exit 1; }
print_success "Backend built successfully"

cd ..
echo ""

# 3. Update Frontend
print_info "Updating frontend..."
cd frontend

print_info "Installing/updating frontend dependencies..."
npm install --production=false
print_success "Frontend dependencies updated"

print_info "Building frontend..."
npm run build || { print_error "Frontend build failed"; exit 1; }
print_success "Frontend built successfully"

cd ..
echo ""

# 4. Reload PM2 Processes (Zero-downtime)
print_info "Reloading PM2 processes (zero-downtime)..."

# Reload backend with cluster mode (zero-downtime)
pm2 reload web-template-backend
print_success "Backend reloaded"

# Reload frontend
pm2 reload web-template-frontend
print_success "Frontend reloaded"

# Save PM2 process list
pm2 save

echo ""
echo "=========================================="
echo "  Update Completed Successfully!"
echo "=========================================="
echo ""
print_info "PM2 Status:"
pm2 status
echo ""
print_info "Application updated with zero downtime"
echo ""
