const { Pool } = require('pg');
const config = {
    user:'dev',
    host: 'localhost',
    password: 'maxi2000sql',
    database: 'local'
};

const pool = new Pool(config);
const valor = 1;
const getAlumnos = async () => {
    try {
        console.log("Obteniendo amigos");
        const res = await pool.query(`select * from alumnos limit 1 offset ${valor-1}`);
        console.log(res.rows);
    } catch (err) {
        console.log(err);
    }
};

const getMatricula = async () => {
    try {
        console.log("Obteniendo Matriculas");
        const res = await pool.query('select * from matricula');
        console.log(res.rows);
    } catch (err) {
        console.log(err);
    }
};

const insertDataAlumnos = async () =>{
    const data = `INSERT INTO alumnos("ID_ALUMNO","NOMBRE","APELLIDO") VALUES($1,$2,$3)`
    const values = [5,'Rodrigo','Campos']
    
    const res = await pool.query(data,values);
    console.log(res.command);
};


const deleteDataAlumnos = async () => {
    try {
        const data = `DELETE FROM alumnos WHERE "ID_ALUMNO" = $1`
        const values = [3]
    
        const res = await pool.query(data,values);
        console.log(res.command);   
    } catch (err) {
        console.log(err); 
    }
};

const editDataAlumnos = async () => {
    try {
        const data = `UPDATE alumnos SET "NOMBRE" = $1 WHERE "NOMBRE" = $2`
        const values = ['Francisco', 'Paco']
    
        const res = await pool.query(data,values);
        console.log(res.command);   
    } catch (err) {
        console.log(err); 
    }
};
//insertDataAlumnos()
//deleteDataAlumnos();
//editDataAlumnos();
getAlumnos();
//getMatricula();