// migrate.js
const { MongoClient } = require('mongodb');
const { migrate } = require('mongodb-migrations');
const connectDB = require('../config/database');
const migrationsDir = `${__dirname}/migrations`;
async function main() {
    await connectDB();

    const db = await MongoClient.connect('mongodb://localhost:27017/Organization');
    await migrate(db, migrationsDir);
    await db.close();
}

main().catch(console.error);