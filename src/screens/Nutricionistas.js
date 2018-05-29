import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import NutricionistasList from './NutricionistasList';
import PerfilNutricionista from './PerfilNutricionista';


const NutricionistasStackNavegador = StackNavigator({
	NutricionistasList:{
		screen:NutricionistasList
	},
    PerfilNutricionista:{
        	screen:PerfilNutricionista
        },
  
});
export default NutricionistasStackNavegador;