//servidor con 2 rutas
//html //cualquier view, preferencia pug.
//json
//const 
//SECUALIZE/DOS TRES TABLAS
//DATOS DE TABLAS
//INFORMACIÓN - POR DATOS. (primer valor de la abla, o el segundo)
//post. -> agregar datos a la tabla. 
//usar seculize y posgress 
const express = require('express');
const app = express();
const path = require('path');
const port = 5000;
const host = 'localhost';

app.set('views', './view');
app.set('view engine', 'pug');

app.use('/',(req, res, next) => {
    console.log(`URL: ${req.url}`);
    next();
});

app.get('/',(req,res)=>{
    res.status(200).render('index')
    //res.send('Home Page')
});

app.get('/datos/static',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, './resources/nubix.json'))
    //res.send('Home Page')
})

app.get('/member/:name/country/:home', (req, res) => {
	const memberDetails = {
		member: req.params.name,
		country: req.params.home
	}
	res.render('home', memberDetails);
});

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')//tambien embiamos el estado

})

app.listen(port, host,() => {
    console.log(`Server started at ${host} port ${port}`);
  })