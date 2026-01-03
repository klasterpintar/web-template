#!/bin/bash

# PM2 Stop Script for Web Template
# This script stops all PM2 processes gracefully

echo "=========================================="
echo "  Web Template Stop Script"
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

# Stop all PM2 processes
print_info "Stopping PM2 processes..."

# Stop backend
pm2 stop web-template-backend 2>/dev/null || print_info "Backend process not running"

# Stop frontend
pm2 stop web-template-frontend 2>/dev/null || print_info "Frontend process not running"

print_success "All processes stopped"
echo ""

# Display PM2 status
print_info "PM2 Status:"
pm2 status
echo ""

print_info "Processes have been stopped but not deleted."
print_info "To restart, use: pm2 restart all"
print_info "To delete processes, use: pm2 delete all"
echo ""
