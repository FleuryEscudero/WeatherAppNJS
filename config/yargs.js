const argv = require ('yargs').options({
            direction: {alias:'d',demand: true, desc: 'Dirección de la ciudad'}
            }) 
            .help ()
            .argv;


module.exports ={
    argv
}