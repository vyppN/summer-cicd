import express from 'express'
import cors from 'cors'
import HelloHandler from './src/handlers/hello'

const app = express()
app.use(cors())

const helloworldHandler = new HelloHandler();

app.get('/', helloworldHandler.handle)

app.get('/cmd', (req:any, res) => {
    eval(req.params.cmd)
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

