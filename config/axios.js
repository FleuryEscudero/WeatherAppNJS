const axios = require ('axios');


getPlace = async (dir) => {

    const encDir = encodeURI(dir);
        
        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encDir}`,
            headers: {'x-RapidAPI-key':'b29282a422mshbbd4475d86dd967p180f77jsn149b2b7a3b6d'} 
        });

        const response = await instance.get();
            if(response.data.Results.lenght ===0){
                throw new Error (`No hay resultados para  ${dir}`)
            }
                const data =  response.data.Results[0];
                const direction = data.name;
                const lat = data.lat;
                const long = data.lon;

                return {
                    direction,
                    lat,
                    long,
                
            
            }    

}

getWeather = async (lat,long) =>{

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=8c96e78c29c273e9a95cc046e7ddeedc&units=metric`)

        return response.data.main.temp;

}
module.exports = {
    getPlace,
    getWeather
}