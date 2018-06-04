import firebase from '../firebaseConnection';


export const SignOut = () =>{
    firebase.auth().signOut();
    return{
    	type:'changeStatus',
    	payload:{
    		status:2
    	}
    };
};

export const forgotPassword = (email)=>{
    return(dispatch)=>{
        firebase.auth().sendPasswordResetEmail(email).then(function(user){
            alert("E-mail de recuperação de senha enviado!");
        }).catch(function(e){
            alert(e);
        })
    };
};

export const checkLogin = () => {

	return (dispatch) => {
        firebase.auth().onAuthStateChanged((user)=>{
             if(user) {
			dispatch({
				type:'changeUid',
				payload:{
					uid:user.uid
				}
			});
            
		} else {
			dispatch({
				type:'changeStatus',
				payload:{
					status:2
				}
			});
		}

        });

		let user = firebase.auth().currentUser;

	}

};

export const SignUpAction =(name,sobreNome,email,password,estado,cidade,sexo,idade,estadoCivil)=> {
    return(dispatch)=>{
    	firebase.auth().createUserWithEmailAndPassword(email,password)
    	.then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             
             firebase.database().ref('usuarios').child(uid).set({
             	name:name,
                sobreNome:sobreNome,
                estado:estado,
                cidade:cidade,
                sexo:sexo,
                idade:idade,
                estadoCivil:estadoCivil
             });

             firebase.database().ref('chats').once('value').then((snapshot)=>{
                 snapshot.forEach((childItem)=>{
                    firebase.database().ref('chats').child(childItem.key).child('membros').child(uid).set({
                        id:uid
                    });
                 });
             });

             dispatch({
             	type:'changeUid',
             	payload:{
             		uid:uid
             	}
             });
    	})
    	.catch((error)=>{   
    		switch(error.code){
    			case 'auth/email-already-in-use':
    			    alert("Email já utilizado!");
    			break;
    			case 'auth/invalid-email':
    			    alert("email invalido!");
    			break;
    			case 'auth/operation-not-allowed':
    			    alert("tente novamente mais tarde!");
    			break;
    			case 'auth/weak-password':
    			    alert("Digite uma senha melhor!");
    			break;
    		}

    	});
    }
};

export const faleConosco = (txt,author,name) => {
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
       
       let msgId = firebase.database().ref('faleConosco').child('mensagens').push();
       msgId.set({
          data:currentDate,
          msg:txt,
          uid:author,
          name:name
       });
    };
};

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

export const changeEmail = (email) =>{
    return{
    	type:'changeEmail',
    	payload:{
    		email:email
    	}
    };
};

export const changePassword = (pass) =>{
    return{
    	type:'changePassword',
    	payload:{
    		pass:pass
    	}
    };	
};
export const changeConfirmPassword = (repass) =>{
    return{
        type:'changeConfirmPassword',
        payload:{
            repass:repass
        }
    };  
};

export const changeName = (name) =>{
    return{
    	type:'changeName',
    	payload:{
    		name:name
    	}
    };	
};

export const changeSobreNome = (sobreNome) =>{
    return{
        type:'changeSobreNome',
        payload:{
            sobreNome:sobreNome
        }
    };  
};
