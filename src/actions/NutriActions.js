import firebase from '../firebaseConnection';

export const  getNutricionistasList = ()=>{
    return(dispatch) => {
        firebase.database().ref('nutricionistas').on('value',(snapshot)=>{
             let nutricionistas = [];
             snapshot.forEach((childItem)=>{
                     nutricionistas.push({
                         key:childItem.key,
                         nome:childItem.val().nome,
                         telefone:childItem.val().telefone,
                         endereco:childItem.val().endereco,
                         crn9:childItem.val().crn9,
                         media:childItem.val().media,
                         foto:childItem.val().foto
                     });                
             });

             dispatch({
                type:'setNutricionistasList',
                payload:{
                    nutricionistas:nutricionistas
                }
             });
        });
    };
};

export const setActivePerfil = (key) =>{
    return{
        type:'setActivePerfil',
        payload:{
            perfilAtivo:key
        }
    };
};

export const votar = (voto,nutricionista) =>{
    return(dispatch)=>{
        
        let votoId = firebase.database().ref('votos').push();
        votoId.set({
            nota:voto,
            nutricionista:nutricionista
        });

        
        let votos = parseFloat(1);
        

        firebase.database().ref('votos').once('value').then((snapshot)=>{
            let notas = [];
            let soma = 0;
            snapshot.forEach((childItem)=>{
                if(childItem.val().nutricionista == nutricionista){
                  notas.push({
                      nota:childItem.val().nota,
                      nutricionista:childItem.val().nutricionista
                  });
                   // soma += parseFloat(childItem.val().nota);
                   // votos++;
                    //alert(soma + votos);
                    //soma++;
                   // alert(soma);
                }
            });
            //alert (notas.length);
            
            notas.forEach((childItem)=>{
               if(childItem.nutricionista == nutricionista){
                   soma = soma + childItem.nota;
               }
            });

            let media = (soma/notas.length);
            firebase.database().ref('nutricionistas').child(nutricionista).child('media').set(media.toFixed(2));
            alert("Voto computado com sucesso!");
        });
    }
}

export const sendComent = (txt,author,name,nutricionista) => {
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
       
       let msgId = firebase.database().ref('nutricionistas').child(nutricionista).child('comentarios').push();
       msgId.set({
          data:currentDate,
          msg:txt,
          uid:author,
          name:name
       });
    };
};

export const monitorComent = (nutricionista)=>{
    return (dispatch) =>{
        firebase.database().ref('nutricionistas').child(nutricionista).child('comentarios').orderByChild('data').on('value',(snapshot)=>{
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
                type:'setActiveComentMessage',
                payload:{
                    'coments':arrayMsg
                }
            });
        });  
    };

};
export const monitorComentOff = (nutricionista)=>{
    return(dispatch) =>{
        firebase.database().ref('nutricionistas').child(nutricionista).child('comentarios').off();
    };

};

