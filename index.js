import Companies  from './Parts/Companies';
import Contacts  from './Parts/Contacts';


const ProWorkflow = ()=>{

    let defaults = require('./config');


    function loadModels( config ){
        this.Companies = Companies( config );
        this.Contacts  = Contacts( config );
    }


    let publicApi = {

        setup( config ){
            config = Object.assign(defaults, config);

            loadModels.call(publicApi, config)
        }

    };

    return publicApi;
};


export default ProWorkflow();