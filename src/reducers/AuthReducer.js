const initialState = {
	name:'',
	sobreNome:'',
	email:'',
	password:'',
	confirmPassword:'',
	uid:'',
	status:0
};

const AuthReducer = (state = initialState, action) => {

	if(action.type == 'changeStatus') {
		return { ...state, status:action.payload.status};
	}

	if(action.type == 'changeEmail'){
		return {...state,email:action.payload.email};
	}

	if(action.type == 'changePassword'){
		return {...state,password:action.payload.pass};
	}
	if(action.type == 'changeConfirmPassword'){
		return {...state,confirmPassword:action.payload.repass};
	}
	if(action.type == 'changeName'){
		return {...state,name:action.payload.name};
	}
	if(action.type == 'changeSobreNome'){
	    return {...state,sobreNome:action.payload.sobreNome};
	}
	if(action.type == 'changeUid'){
		return {...state,status:1,uid:action.payload.uid};
	}



	return state;

};

export default AuthReducer;