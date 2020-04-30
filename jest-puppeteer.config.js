module.exports = {
    server: {
      command: 'http-server -c-1 -p 1234',
    },
    launch: {
        headless: process.env.HEADLESS !== 'false',
        slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
        devtools: true
    }
}