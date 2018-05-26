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

export const SignUpAction =(name,sobreNome,email,password)=> {
    return(dispatch)=>{
    	firebase.auth().createUserWithEmailAndPassword(email,password)
    	.then((user)=>{
             let uid = firebase.auth().currentUser.uid;
             
             firebase.database().ref('usuarios').child(uid).set({
             	name:name,
                sobreNome:sobreNome
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
