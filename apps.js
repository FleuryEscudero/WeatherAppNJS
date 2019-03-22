/**
 * Weather App
 */


const argv = require ('./config/yargs').argv;
const place = require ('./config/axios');


/**
 * Codigo fly
 */
// getInfo = async (direction) => {
//     place.getPlace(direction).then(response => {
       
//             place.getWeather(response.lat,response.long).then(res =>{
//                 console.log(`el Clima de ${response.name} es de ${res.temp}`)
//             }).catch(err=>{
//                 console.log(`No se pudo obtener el clima de la ciudad ${response.name}`)
//                 console.log(err)})
        
//     }).catch(err => console.log(err));
    
// }


getInfo = async (direction)=>{

    try {
        const coords = await place.getPlace(direction);
        const temp = await place.getWeather(coords.lat, coords.long);
        return `el clima de ${coords.direction} es de ${temp}`
    }catch (e){
            return `No se pudo obtener el clima de la ciudad ${direction}`
    }
}

getInfo(argv.direction)
        .then(console.log)
        .catch(console.log)
              