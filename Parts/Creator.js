
const Creator = ( options )=>{

    options = Object.assign({
        data: {},
        required: []
    }, options);


    /**
     * Format key value object from {1: 'Hello', 2: 'Whats up?'} into [{id: 1, value: 'Hello'}, {id: 2, value: 'Whats up?'}]
     * as required by ProWorkflow for API Fields to be saved.
     *
     * @param obj
     * @returns {Array}
     */
    const formatApiFields = ( obj ) => {
        let formatted = [];
        for(let key in obj){
            formatted.push({
                id: parseInt(key),
                value: obj[key]
            })
        }
        return formatted;
    };


    return ( baseroute, config )=>{

        let methods = {

            create( args ){

                for (let key in args) {
                    if (options.data.hasOwnProperty(key))
                        options.data[key] = args[key]
                }

                options.data.apifields = formatApiFields(options.data.apifields);

                // TODO: Actually create the thing...

                return options.data;
            }
        };

        return methods;
    }

};


export default Creator;