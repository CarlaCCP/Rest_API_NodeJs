module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send("Você esta na rota de antendimentos e vamos fazer um get"))  
}