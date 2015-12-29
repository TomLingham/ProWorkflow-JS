
const Finder = ( options )=>{

    options = Object.assign({
        fields: [],
        filters: {},
        results: {}
    }, options);


    /**
     * Add the paramater to the url
     *
     * @param base
     * @param key
     * @param value
     * @returns {string}
     */
    const addParam = (base, key, value) => {
        var sep = (base.indexOf('?') > -1) ? '&' : '?';
        return base + sep + key + '=' + value;
    };


    /**
     * Parse param into correct format for addition to URL
     *
     * @param param
     * @returns {*}
     */
    const parseParam = ( param )=>{

        if(typeof param == 'boolean')
            return param.toString();

        if( param instanceof Array)
            return param.join();

        if( typeof param == 'object') {
            if(param !== null) {
                let str = [];
                for (let key in param) {
                    str.push(key + ',' + param[key]);
                }
                return str.join('||');
            }
        }

        return param
    };


    /**
     * Check if param is valid for sending via API
     *
     * @param param
     * @returns {boolean}
     */
    const paramIsValid = ( param ) => {
        if( param instanceof Array )
            return param.length >= 1;

         return param !== null;
    };


    return ( baseroute, config )=>{

        let methods = {

            fields(...fields){

                options.fields = fields.filter((field)=> {
                    return typeof field == 'string' || field instanceof String;
                });

                return methods;
            },

            filters(filters){

                for (let key in filters) {
                    if (options.filters.hasOwnProperty(key))
                        options.filters[key] = filters[key]
                }

                return methods;
            },

            filter(field, value){

                if (options.filters[field] !== undefined)
                    options.filters[field] = value;

                return methods;
            },

            page(page, limit = 10){

                options.results.pagenumber = page;
                options.results.pagesize = limit;

                return methods;
            },

            orderby(field, order){

                options.results.sortby = field;
                options.results.sortorder = order;

                return methods;
            },

            get(){
                let url = config.baseurl + baseroute;
                url = addParam(url, 'fields', options.fields.join());

                for ( let key in options.filters ) {
                    if ( paramIsValid(options.filters[key]) )
                        url = addParam(url, key, parseParam(options.filters[key]));
                }

                // TODO: Actually get the data...
                return url;
            }
        };

        return methods;
    }

};


export default Finder;