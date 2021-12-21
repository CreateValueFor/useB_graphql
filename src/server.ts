import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import depthLimit from 'graphql-depth-limit'
import { createServer } from 'http'
import compression from 'compression'
import cors from 'cors'
import { Sequelize } from 'sequelize-typescript'
import dotenv from 'dotenv'
import authRouter from './router/auth'

dotenv.config()
// 환경변수 세팅
// TODO mysql .env로 분리 필요

console.log(process.env.DB_DBNAME)

// DB_USERNAME = 'root'
// DB_PASSWORD = 'mk159753'
// DB_DBNAME = 'dashboard'
// DB_HOST = 'localhost'
// DB_PORT = 3306

import schema from './schema'
import { Dialect } from 'sequelize/types'
// sequelize basic setting
const sequelize = new Sequelize({
  database: process.env.DB_DBNAME,
  dialect: process.env.DB_DIALECT as Dialect,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) as number,
  define: {
    timestamps: false,
  },
  models: [__dirname + '/models'],
  modelMatch: (filename, member) => {
    return (
      filename.substring(0, filename.indexOf('.model')) === member.toLowerCase()
    )
  },
})
// sequlize connect
sequelize.authenticate().then(() => {
  console.log('db connected succesfully')
})
// express server start
const app = express()
// apollo server start
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
})
// cors
app.use('*', cors())
// compress dist file to run efficiently
app.use(compression())
// apply graphql
app.use('/auth', authRouter)
server.applyMiddleware({ app, path: '/graphql' })

const httpServer = createServer(app)

httpServer.listen({ port: 80 }, (): void => console.log('server start'))
