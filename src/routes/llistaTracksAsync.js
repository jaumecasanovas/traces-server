const router = require('express').Router();
const http = require('http');
const axios = require('axios');
const { response } = require('express');

var track=[];


const config = {
  method: 'GET',
  url: 'http://localhost:3001/tracks'
}

axios(config)
  .then((response) => {      
      response.data.forEach(item => {                  
        let itemList='';
        //itemList = `{'${item['id']}', '(${item['coords']})', '${item['temps']}'}`;
        itemList= item;
        
        //console.log(itemList)
        track.push(itemList)        
        });        
      console.error('després del push')        
      return console.error(`return llistaTracksAsync`);
  })
  .then(()=> {
      console.error(`then llistaTracksAsync`);
      renderData();      
  })
 
  //'{"type":"Feature","geometry":{"type":"Point","coordinates":[2.1222648,42.3862]},"properties":{"time":"2021-11-13T10:47:47.000+00:00"}}'

function renderData(){
  console.log("Renderitzant tracks")
  var cad='';
  let i=0;
  /*track.forEach(item =>{ 
     cad+= track[i];
     i++;
     if(i<track.length) cad+= ",";     
  })*/
  cad=JSON.stringify(track)
  console.log(cad)
  //console.log(cad)
  var cadJS="<script> trackList='" + cad + "'</script>"
  //console.log(cadJS)
  router.get('/', (req, res) => {                  
 // Renderitza a .ejs passant dades per { dataJS: cadJS }                
    res.render('llistaTracksAsync.ejs', {dataJS: cadJS});      
  });
}


module.exports = router;
