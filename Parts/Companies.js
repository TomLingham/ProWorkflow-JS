
let PWFCompanies = ( config ) => {

    let query = {
        fields: [
            'address',
            'code',
            'contacts',
            'email',
            'fax',
            'image',
            'lastmodified',
            'name',
            'phone',
            'tags',
            'type',
            'website',
            'apifields'
        ],
        filters: {
            apifields: [],
            apifieldsmode: 'any',
            divisionid: null,
            id: [],
            idfrom: null,
            idto: null,
            lastmodifiedfrom: null,
            lastmodifiedto: null,
            pending: false,
            search: null,
            searchcode: null,
            searchemail: null,
            searchname: null,
            tagid: null,
            type: null
        },
        results: {
            pagenumber: null,
            pagesize: null,
            sortby: 'name',
            sortorder: 'asc'
        }
    };


    let self = {

        where: ( field, value )=>{

            if( query.filters[field] !== undefined )
                query.filters[field] = value;

            return self;
        },

        getQuery: ()=>{
            return Object.assign({}, query);
        }
    };

    return self;
};


export default PWFCompanies;