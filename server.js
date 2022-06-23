const express = require('express')
const app = express()
const cors = require('cors')
const { Collection } = require('mongodb')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_String,
    dbName = ''
collection



