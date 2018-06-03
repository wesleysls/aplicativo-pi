import firebase from '../firebaseConnection';

export const  getMitosList = ()=>{
    return(dispatch) => {
        firebase.database().ref('artigos').on('value',(snapshot)=>{
             let artigos = [];
             snapshot.forEach((childItem)=>{
                     artigos.push({
                         key:childItem.key,
                         titulo:childItem.val().titulo,
                         autor:childItem.val().autor,
                         texto:childItem.val().texto,
                         foto:childItem.val().foto
                     });                
             });

             dispatch({
                type:'setMitosList',
                payload:{
                    artigos:artigos
                }
             });
        });
    };
};

export const setActiveArtigo = (key) =>{
    return{
        type:'setActiveArtigo',
        payload:{
            ArtigoAtivo:key
        }
    };
};


