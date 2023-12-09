import express from 'express'
import { json } from 'body-parser'

const port = 6000
const app = express()
app.use(json())

app.get('/api/users/currentUser', (req, res) => {
    res.send('Hi there');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
}) 