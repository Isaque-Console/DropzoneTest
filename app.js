const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.post('/file-upload', (req,res) => {
    // let drop = req.body.file
    console.log("deu certo!")
    res.send("deu certo!")
})

const port = 4000
app.listen(port, () => {
    console.log("Servidor rodando na porta 4000")
})

