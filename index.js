import stampit from 'stampit';
import CompanyQueryObject  from './Parts/CompanyQuery';


const ProWorkflow = stampit().init(({ instance })=>{

    instance.Company = CompanyQueryObject( instance )

}).methods({

    setup( apikey = null, email = null, password = null ){

        if (apikey && email && password) {
            this.config.auth = {
                apikey: apikey,
                email: email,
                password: password
            };
        }

        console.error("Must enter all credentials during setup.")
    }

});


export default ProWorkflow;