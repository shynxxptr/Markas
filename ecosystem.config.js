module.exports = {
    apps: [{
        name: "markas-bot",
        script: "./index.js",
        env: {
            NODE_ENV: "development",
        },
        // This will force PM2 to load the .env file
        node_args: "-r dotenv/config"
    }]
}
