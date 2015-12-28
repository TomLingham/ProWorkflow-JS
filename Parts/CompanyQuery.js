import stampit from 'stampit';
import QueryObject from './QueryObject'

const Company = stampit().props({
    query: {
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
    }
});

const CompanyQueryObject = Company.compose(QueryObject);

export default CompanyQueryObject;