import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import MitosList from './MitosList';
import MitosInterno from './MitosInterno';


const MitosVerdadesNavegador = StackNavigator({
	MitosList:{
		screen:MitosList	
	},
    MitosInterno:{
        	screen:MitosInterno
        },
  
});
export default MitosVerdadesNavegador;



