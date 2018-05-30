const initialState = {
	nutricionistas:[],
	perfilAtivo:'',
	coments:[]
};

const NutriReducer = (state = initialState, action) => {
    
	if(action.type == 'setNutricionistasList'){
		return {...state, nutricionistas:action.payload.nutricionistas};
	}
	
	if(action.type == 'setActivePerfil'){
		return {...state, perfilAtivo:action.payload.perfilAtivo};
	}

	if(action.type == 'setActiveComentMessage'){
		return {...state, coments:action.payload.coments};
	}
	

	return state;

};

export default NutriReducer;