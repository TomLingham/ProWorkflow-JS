import stampit from 'stampit';


const QueryObject = stampit().init(({instance, args})=>{

    instance.addParam = (base, key, value) => {
        var sep = (base.indexOf('?') > -1) ? '&' : '?';
        return base + sep + key + '=' + value;
    };

    instance.parseParam = ( param )=>{
        switch(typeof param){
            case 'boolean':
                return param.toString();
                break;

            case 'array':
                return param.join();
                break;
        }
        return param
    };

    instance.paramIsValid = ( param ) => {
        if( param instanceof Array )
            return param.length >= 1;

         return param !== null;
    };

}).methods({

    fields( ...fields ){

        this.query.fields = fields.filter(( field )=>{
            return typeof field == 'string' || field instanceof String;
        });

        return this;
    },


    filters( filters ){

        for(let key in filters) {
            if(this.query.filters.hasOwnProperty(key))
                this.query.filters[key] = filters[key]
        }

        return this;
    },


    filter( field, value ){

        if( this.query.filters[field] !== undefined )
            this.query.filters[field] = value;

        return this;
    },


    page( page, limit = 10 ){

        this.query.results.pagenumber = page;
        this.query.results.pagesize = limit;

        return this;
    },


    orderby( field, order ){

        this.query.results.sortby = field;
        this.query.results.sortorder = order;

        return this;
    },


    get(){
        let url = this.config.baseurl;
        url = this.addParam(url, 'fields', this.query.fields.join() );

        for(let key in this.query.filters){
            if (this.paramIsValid(this.query.filters[key]))
                url = this.addParam(url, key, this.parseParam( this.query.filters[key] ));
        }

        console.log(url);
    }
});


export default QueryObject;