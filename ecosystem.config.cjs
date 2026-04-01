module.exports = {
  apps: [
    {
      name: "outlabel-app",
      cwd: "/home/outlabel/outlabel-app",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 1339",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};
