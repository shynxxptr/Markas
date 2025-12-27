const path = require('path');

module.exports = {
    apps: [{
        name: "markas-bot",
        script: "./index.js",
        cwd: __dirname, // Explicitly set the current working directory
        env: {
            NODE_ENV: "development",
        },
        // Using node_args to require dotenv is good, but let's also try standard execution
        // node_args: "-r dotenv/config" 
    }]
}
