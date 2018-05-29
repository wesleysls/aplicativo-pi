import firebase from '../firebaseConnection';

export const  getChatList = (userUid,tela)=>{
    return(dispatch) => {
        firebase.database().ref('usuarios').child(userUid).child('chats').on('value',(snapshot)=>{
             let chats = [];
             snapshot.forEach((childItem)=>{
                 if(tela == 1){
                     chats.push({
                         key:childItem.key,
                         titulo:childItem.val().titulo,
                         criador:childItem.val().criador
                     });
                 }else{
                     if(childItem.val().criador == userUid){
                         chats.push({
                             key:childItem.key,
                             titulo:childItem.val().titulo,
                             criador:childItem.val().criador
                            });
                     }

                 } 
             });

             dispatch({
                type:'setChatList',
                payload:{
                    chats:chats
                }
             });
        });
    };
};


export const  getContactList = (userUid) => {
    return (dispatch) => {
        firebase.database().ref('usuarios').once('value').then((snapshot)=>{
            let users = [];
            snapshot.forEach((childItem)=>{
                
                if(childItem.key != userUid){
                    users.push({
                        key:childItem.key,
                        name:childItem.val().name
                    });
                }
            });

            dispatch({
                type:'setContactList',
                payload:{
                    users:users
                }
            });
        });
    };
};

export const createChat = (userUid,titulo)=> {
    return (dispatch)=>{
        let newChat = firebase.database().ref('chats').push();
        let chatId = newChat.key;

        firebase.database().ref('usuarios').once('value').then((snapshot)=>{
            let users = [];
            snapshot.forEach((childItem)=>{

                newChat.child('membros').child(childItem.key).set({
                    id:childItem.key
                }); 

                firebase.database().ref('usuarios').child(childItem.key).child('chats').child(chatId).set({
                    id:chatId,
                    titulo:titulo,
                    criador:userUid
                });

            });
        });

        /*
        // criandochat
        let newChat = firebase.database().ref('chats').push();
        newChat.child('membros').child(userUid1).set({
            id:userUid1
        });
        newChat.child('membros').child(userUid2).set({
            id:userUid2
        });
        // associando aos envolvidos
        let chatId = newChat.key;
        firebase.database().ref('usuarios').child(userUid1).child('chats').child(chatId).set({
            id:chatId
        });
        firebase.database().ref('usuarios').child(userUid2).child('chats').child(chatId).set({
            id:chatId
        });
        */

        dispatch({
            type:'setActiveChat',
            payload:{
                chatId:chatId
            }
        });
    }
};

export const setActiveChat = (chatId) =>{
    return{
        type:'setActiveChat',
        payload:{
            chatId:chatId
        }
    };
};

export const sendMessage = (txt,author,name,chatAtivo) => {
    return(dispatch) => {
       let currentDate ='';
       let cDate = new Date();

       currentDate = cDate.getFullYear();
       currentDate+='-';

       if((cDate.getMonth()+1)< 10){
            currentDate+= "0"+ (cDate.getMonth()+1);
       }else{
            currentDate+= (cDate.getMonth()+1);
       }
       currentDate+='-';

       if((cDate.getDate())< 10){
            currentDate+= "0"+ cDate.getDate();
       }else{
            currentDate+= cDate.getDate();
       }
       currentDate+=' ';
       
       if((cDate.getHours())< 10){
            currentDate+= "0"+ cDate.getHours();
       }else{
            currentDate+= cDate.getHours();
       }
        currentDate+=':';

       if((cDate.getMinutes())< 10){
            currentDate+= "0"+ cDate.getMinutes();
       }else{
            currentDate+= cDate.getMinutes();
       }
        currentDate+=':';

       if((cDate.getSeconds())< 10){
            currentDate+= "0"+ cDate.getSeconds();
       }else{
            currentDate+= cDate.getSeconds();
       }
       
       let msgId = firebase.database().ref('chats').child(chatAtivo).child('mensagens').push();
       msgId.set({
          data:currentDate,
          msg:txt,
          uid:author,
          name:name
       });
    };
};

export const monitorChat = (chatAtivo)=>{
    return (dispatch) =>{
        firebase.database().ref('chats').child(chatAtivo).child('mensagens').orderByChild('data').on('value',(snapshot)=>{
            let arrayMsg = [];
            snapshot.forEach((childItem)=>{
                 arrayMsg.push({
                    key:childItem.key,
                    date:childItem.val().data,
                    msg:childItem.val().msg,
                    uid:childItem.val().uid,
                    name:childItem.val().name
                 });
            });

            dispatch({
                type:'setActiveChatMessage',
                payload:{
                    'msgs':arrayMsg
                }
            });
        });  
    };

};
export const monitorChatOff = (chatAtivo)=>{
    return(dispatch) =>{
        firebase.database().ref('chats').child('chatAtivo').child('mensagens').off();
    };

};


/*
export const SignInAction = (email,password)=>{
	return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             dispatch({
             	type:'changeUid',
             	payload:{
             		uid:uid
             	}
             });
    	})
        .catch((error)=>{
            switch(error.code){
                case 'auth/invalid-email':
                    alert("Email invalido!");
                    break;
                case 'auth/user-disabled':
                    alert("Usuário desativado!");
                    break;
                case 'auth/user-not-found':
                    alert("Usuario não encontrado");
                    break;
                case 'auth/wrong-password':
                    alert("Usuario e/ou senha errados");
                    break;

            }
        });
	};	
};
*/
/*
export const changeName = (name) =>{
    return{
    	type:'changeName',
    	payload:{
    		name:name
    	}
    };	
};
*/