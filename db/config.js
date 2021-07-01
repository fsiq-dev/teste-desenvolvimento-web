const nodeenvironment = process.env.NODE_ENV || "development"

if (nodeenvironment === "development") {
  require('dotenv').config()
}

module.exports = {
  uri: `mongodb://${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`
  // `mongodb+srv:${process.env.MONGO_NAME}:${process.env.MONGO_PASSWORD}//${process.env.MONGO_HOST}/${process.env.MONGO_DB_NAME}`
}
