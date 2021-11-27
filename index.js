const axios = require('axios')
const express = require('express')
const https = require('https')

const app = express()

app.listen(3000, () => console.log('servidor rodando na porta 3000'))

app.get('/atendimentos', (req, res) => res.send("Você esta na rota de antendimentos e vamos fazer um get"))

// app.get('/cep', async(req, res)=>{
//     try {
//         const response = await axios.get('https://viacep.com.br/ws/11700270/json/')
//         res.send(response.body)
//     } catch(error){
//         console.log(error)
//     }
// })

https.get('https://viacep.com.br/ws/11700270/json/' , (resp) =>{
    
})