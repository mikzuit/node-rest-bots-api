module.exports = {
    db: {
        production: "mongodb://" + process.env.MONGODB_ADDRESS + ":27017/robots",
        development: "mongodb://" + process.env.MONGODB_ADDRESS + ":27017/dev-robots",
    }
}