const initialState = {
	artigos:[],
	ArtigoAtivo:''
};

const MitosReducer = (state = initialState, action) => {
    
	if(action.type == 'setMitosList'){
		return {...state, artigos:action.payload.artigos};
	}
	
	if(action.type == 'setActiveArtigo'){
		return {...state, ArtigoAtivo:action.payload.ArtigoAtivo};
	}

	return state;

};

export default MitosReducer;