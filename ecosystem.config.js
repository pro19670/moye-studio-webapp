module.exports = {
  apps: [
    {
      name: 'moye-studio-webapp',
      script: 'node_modules/.bin/next',
      args: 'start',
      cwd: '/home/user/webapp',
      instances: 1,
      exec_mode: 'fork',
      watch: false,
      max_memory_restart: '500M',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};