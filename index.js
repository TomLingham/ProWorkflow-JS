import Companies  from './Parts/Companies';
import Contacts  from './Parts/Contacts';


const ProWorkflow = ( config )=>{

    config = Object.assign({}, config);

    return {

        setup( apikey = null, email = null, password = null ){

            if (apikey && email && password) {
                config.auth = {
                    apikey: apikey,
                    email: email,
                    password: password
                };
            }

            console.error("Must enter all credentials during setup.")
        },

        Companies: Companies( config ),
        Contacts: Contacts( config )
    }
};


export default ProWorkflow;