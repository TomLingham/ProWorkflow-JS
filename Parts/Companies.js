import Finder from './Finder';
import Creator from './Creator';
import ModelComposer from './ModelComposer';

const Companies = ModelComposer( 'companies',
    Finder({
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
            apifields: {},
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
    }),
    Creator({
        data: {
            name: null,
            type: null,
            address1: null,
            address2: null,
            address3: null,
            apifields: {},
            city: null,
            code: null,
            country: null,
            email: null,
            facebook: null,
            fax: null,
            linkedin: null,
            phone: null,
            state: null,
            tagid: null,
            twitter: null,
            zipcode: null
        },
        required: [
            'name',
            'type'
        ]
    }
));


export default Companies;