const initialState = {
	nutricionistas:[],
	perfilAtivo:''
};

const NutriReducer = (state = initialState, action) => {
    
	if(action.type == 'setNutricionistasList'){
		return {...state, nutricionistas:action.payload.nutricionistas};
	}
	
	if(action.type == 'setActivePerfil'){
		return {...state, perfilAtivo:action.payload.perfilAtivo};
	}
	


	return state;

};

export default NutriReducer;