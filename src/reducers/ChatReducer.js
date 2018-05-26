const initialState = {
	chats:[],
	contacts:[],
	chatAtivo:'',
	activeChatMessages:[]
};

const ChatReducer = (state = initialState, action) => {
    
	if(action.type == 'setContactList'){
		return {...state, contacts:action.payload.users};
	}
	if(action.type == 'setActiveChat'){
		return {...state, chatAtivo:action.payload.chatId};
	}
	if(action.type == 'setChatList'){
		return{...state, chats:action.payload.chats};
	}

	if(action.type == 'setActiveChatMessage'){
		return{...state,activeChatMessages:action.payload.msgs};
	}


	return state;

};

export default ChatReducer;