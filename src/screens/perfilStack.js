import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Perfil from './Perfil';
import EditarPerfil from './EditarPerfil';


const PerfilStackNavegador = StackNavigator({
	Perfil:{
		screen:Perfil	
	},
    EditarPerfil:{
        	screen:EditarPerfil
        },
  
});
export default PerfilStackNavegador;



