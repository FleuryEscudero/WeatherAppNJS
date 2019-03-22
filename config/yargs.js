const argv = require ('yargs').options({
    direccion: {alias:'d',demand: true, desc: 'Dirección de la ciudad'}
})


module.exports ={
    argv
}