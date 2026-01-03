module.exports = {
  apps: [
    {
      name: 'web-template-backend',
      script: './backend/dist/server.js',
      instances: 2,
      exec_mode: 'cluster',
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 5000
      },
      error_file: './backend/logs/error.log',
      out_file: './backend/logs/out.log',
      log_file: './backend/logs/combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 3000,
      kill_timeout: 5000
    },
    {
      name: 'web-template-frontend',
      script: 'serve',
      args: '-s dist -l 3000',
      cwd: './frontend',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production'
      },
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      log_file: './logs/combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      autorestart: true,
      max_restarts: 10,
      min_uptime: '10s',
      listen_timeout: 3000,
      kill_timeout: 5000
    }
  ],
  
  deploy: {
    production: {
      user: 'deploy',
      host: 'your-server.com',
      ref: 'origin/main',
      repo: 'git@github.com:username/web-template.git',
      path: '/var/www/web-template',
      'pre-deploy': 'git fetch --all',
      'post-deploy': 'bash deploy.sh && pm2 reload ecosystem.config.js --env production',
      'pre-setup': 'mkdir -p /var/www/web-template',
      'post-setup': 'bash deploy.sh',
      env: {
        NODE_ENV: 'production'
      }
    }
  }
};
