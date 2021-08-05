const express = require('express');
const app = express();

const hbs=require('hbs');
const port = process.env.PORT ||3000;

hbs.registerPartials(__dirname + '/views/parcial');

app.set('view engine', 'hbs'); 

app.get('/',(req,res)=>{
   res.render('home',{
        //nombre: ""+da,
        //anio: new Date().getFullYear() 
   }); 
  
});
app.use(express.static(__dirname+'/public'));

app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto 3000${port}`);
});
