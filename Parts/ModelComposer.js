
const ModelComposer = ( baseroute, finder, creator )=>{

    return ( config )=>{
        return Object.assign({}, finder( baseroute, config ), creator(baseroute, config ));
    }

};

export default ModelComposer;