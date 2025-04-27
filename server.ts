import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hell world!')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

