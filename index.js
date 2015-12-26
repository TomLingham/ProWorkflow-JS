import PWFCompanies  from './Parts/Companies';

let PWF = ( options )=>{


    let config = require('./config');

    Object.assign(config, options)


    return {

        setup: ( apikey = null, email = null, password = null )=>{

            if (apikey && email && password) {
                config.auth = {
                    apikey: apikey,
                    email: email,
                    password: password
                };

                return console.info(`API credentials set: "${apikey}", "${email}", "${password}"`)
            }

            return console.error("Must enter all credentials during setup.");
        },

        getConfig:()=>{
            return Object.assign( {}, config );
        },

        company: PWFCompanies( config )
    }
};

export default PWF;