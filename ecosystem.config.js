module.exports = {
  apps: [
    {
      name: 'MedasDigital App',
      port: '4200',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
}
