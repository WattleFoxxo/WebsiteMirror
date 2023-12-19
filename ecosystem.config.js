module.exports = {
    apps : [{
        name: 'wattlefoxxocom',
        script: '/var/www/wattlefoxxocom/current/index.js',
        cwd: '/var/www/wattlefoxxocom/current',
        instances: 1,
        autorestart: true,
        watch: false,
        max_memory_restart: '512M',
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        }
    }],
    deploy : {
        wattlefoxxocom : {
            key  : '/root/.ssh/id_ed25519.pub',
            user : 'root',
            host : '192.168.50.102',
            ref  : 'origin/main',
            repo : 'git@github.com:WattleFoxxo/WebsiteMirror.git',
            fetch : 'all',
            path : '/var/www/wattlefoxxocom',
            'pre-deploy' : 'git pull',
            'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
  };