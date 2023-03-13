1. yarn init -y (create package.json)
2. yarn add express (install express)
3. npm install pg ( PostgreSQL client for Node.js.)
4. Create connection with database

const { Pool } = require('pg')
const pool = new Pool({
user: 'your_username',
host: 'your_hostname',
database: 'your_database_name',
password: 'your_password',
port: 5432, // or your database's port number
})
