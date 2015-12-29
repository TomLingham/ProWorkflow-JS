import Finder from './Finder';
import Creator from './Creator';
import ModelComposer from './ModelComposer';

const Contacts = ModelComposer( 'contacts',
    Finder({
        fields: [
            'address',
            'company',
            'email',
            'fax',
            'groups',
            'image',
            'lastmodified',
            'location',
            'logindetails',
            'name',
            'phone',
            'roles',
            'tags',
            'teams',
            'title'
        ],
        filters: {
            allowlogin: null,
            apifields: {},
            apifieldsmode: 'any',
            companyid: null,
            divisionid: null,
            id: [],
            idfrom: null,
            idto: null,
            lastmodifiedfrom: null,
            lastmodifiedto: null,
            pending: false,
            roleid: [],
            search: null,
            searchemail: null,
            searchname: null,
            tagid: null,
            type: null
        },
        results: {
            pagenumber: null,
            pagesize: null,
            sortby: 'firstname',
            sortorder: 'asc'
        }
    }),
    Creator({
        data:{
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
        }
    }
));

export default Contacts;