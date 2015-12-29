import ProWorkflow from "./local.config";


console.log(
    ProWorkflow.Companies
        .create({
            name: 'Test Companu',
            apifields: {
                43: 500,
                55: 'Here is a description'
            }
        })
);