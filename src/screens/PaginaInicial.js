import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import ContatoList from './ContatoList';
import MitosVerdades from './MitosVerdades';
import Perfil from './Perfil';
import ConversasStack from './ConversasStack';

//static navigationOptions = ({navigation}) => ({
    //    header:null;
   // });

const Navegador = DrawerNavigator({
	Perfil:{
		screen:Perfil
	},
    ContatoList:{
        	screen:ContatoList
        },
    MitosVerdades:{
    	screen:MitosVerdades
    },
    ConversasStack:{
    	screen:ConversasStack,
        navigationOptions:{
            drawerLabel:'Conversas'
        }
    }
  
});
export default Navegador;















