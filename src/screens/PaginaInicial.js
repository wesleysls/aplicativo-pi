import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';

import Nutricionistas from './Nutricionistas';
import MitosVerdades from './MitosVerdades';
import Perfil from './Perfil';
import ConversasStack from './ConversasStack';
import FaleConosco from './FaleConosco';


const Navegador = DrawerNavigator({
	Perfil:{
		screen:Perfil
	},
    Nutricionistas:{
        	screen:Nutricionistas,
            navigationOptions:{
                drawerLabel:'Nutricionistas'
            }
        },
    MitosVerdades:{
    	screen:MitosVerdades
    },
    ConversasStack:{
    	screen:ConversasStack,
        navigationOptions:{
            drawerLabel:'Conversas'
        }
    },
    FaleConosco:{
        screen:FaleConosco
    }
  
});
export default Navegador;















