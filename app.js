const cookieParser = require('cookie-parser')
const express = require('express')
const path=require('path');
const app = express()
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

const mostarPreferencias = function (req, res) {
    let cookie = req.cookies.preferencias
    res.render('index', {cookie:cookie})
};

const ponerCookie = function (req, res) {
    let intereses = req.body.intereses
    if(intereses){
        res.cookie('preferencias', intereses, {maxAge: 60000, path: '/'}) 
        res.status(200).send('Anuncio guardado');
    }else{
        console.log("Error")
    }
}

app.get('/', mostarPreferencias)

app.post('/anuncios', ponerCookie)

app.listen(3000)