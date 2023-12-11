import express from 'express'
import { json } from 'body-parser'
import { currentUserRouter } from './routes/current-user'

const port = 6000
const app = express()
app.use(json())

app.use(currentUserRouter)

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
}) 