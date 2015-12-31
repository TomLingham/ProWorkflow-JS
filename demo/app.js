import config from '../config.local';

import ProWorkflow from "../index";


ProWorkflow.setup( config );


console.log(
    ProWorkflow.Contacts
        .create({
            name: 'Test Company',
            apifields: {
                43: 500,
                55: 'Here is a description'
            }
        })
);