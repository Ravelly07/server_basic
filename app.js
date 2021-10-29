//SECUALIZE/DOS TRES TABLAS
//DATOS DE TABLAS
//INFORMACIÓN - POR DATOS. (primer valor de la abla, o el segundo)
//post. -> agregar datos a la tabla. 
//usar seculize y posgress 

const routesAlumnos = require('./routes/alumnos')
const routesMatricula = require('./routes/matricula')
const db = require('./DB/connection');

const express = require('express');
const { json } = require('express');
const app = express();

const path = require('path');

const port = 5000;
const host = 'localhost';

//pug format
app.set('views', './view');
app.set('view engine', 'pug');

app.use(json());

//routes
app.use('/api/alumnos',routesAlumnos);
app.use('/api/matricula',routesMatricula);

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
});

app.listen(port, host,() => {
    console.log(`Server started at ${host} port ${port}`);

    const dbConnection =  async () => {
             try {
                 db.authenticate();
                 console.log('Data Base are alreary Onlie');
             } catch (err) {
                 throw new Error(err);
             }
        };
    dbConnection();
  })