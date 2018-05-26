import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import ConversaList from './ConversaList';
import ConversaInterna from './ConversaInterna';


const ConversasStackNavegador = StackNavigator({
	ConversaList:{
		screen:ConversaList	
	},
    ConversaInterna:{
        	screen:ConversaInterna
        },
  
});
export default ConversasStackNavegador;















