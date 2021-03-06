const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const http = require('http');

const dispositius = require('./components/recepccio/dispositius');
const usuaris = require('./components/usuaris');
const tracks = require('./components/carrega/carregaTracks');


// Inicialitzacions
const app = express();
const server = http.Server(app);

// configuració del motor de plantilles basat en ejs-mate
app.engine('ejs', engine); 
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

// Determina les rutes i el directori del naveador
//    localhost/
//    localhost/llista
//


// Ruta per defecte de l'aplicació que carrega el mapa amb Leaflet
app.use('/',            require('./routes/mostraMapa.js'));

app.use('/corredors',   require('./routes/llistaCorredors.js'));
//app.use('/tracks',      require('./routes/llistaTracks.js'));
//app.use('/tracksAsync', require('./routes/llistaTracksAsync.js'));
app.use('/demo',        require('./routes/demo.js'));
app.use('/prova',       require('./routes/prova.js'));

app.use(express.static(path.join(__dirname,'public')));

// Comproba els dispositius dels corredors
// /components/api_traccar/dispositius.js


// Abans de crear usuaris s'han de borrar les taules runners i points 
// i deixar comentades les línies de getDispositius() i carregaTracks()

//crearUsuaris(); 

// Obté els dispositius sincronitzats i inicia la recepcció de posicions
// desant en bdd els tracks de cada dispositiu 
// 
// Per iniciar la recepció de posicions cal iniciar el server de trackar
// i revisar els dispositius sincronitzats.
dispositius.getDispositius();


// Comproba a la bdd si hi ha tracks registrats 
// En cas trobar-ne genera un fitxer amb el track de cada dispositiu sincronitzat 
// components/carrega

tracks.carregaTracks();    


// Crea els usuaris de prova
// Els usuaris han de coincidir amb els donats d'alta a traccar  (pendnet sincronitzar altes)
function crearUsuaris() {
    //usuaris.setUsuari(14, "Jaume","Casanovas",202);
    //usuaris.setUsuari(20, "Pixel 3","Android", 203);
    usuaris.setUsuari(49, "Windos - Pixel 2","Android",201);  // Emulador windows ruta Pic d'Eina - Noufonts  id: 619502
//    usuaris.setUsuari(16,"Pixel 4","Android",200);   // Emulador linux ruta Olla petita de Núria. id: 734242

    //console.log(usuaris.getUsuaris());
    //usuaris.getUsuaris()
}

// Inici servidor
server.listen(3000, () => {   console.log('http://localhost:3000/');  });




