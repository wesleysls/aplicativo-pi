import React, {Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';

export default class ConversasItem extends Component{
	
    constructor(props){
    	super(props);
    	this.onclick = this.onclick.bind(this);
    }

    onclick(){
        this.props.onPress(this.props.data);
    }

	render(){
		return(
            <TouchableHighlight underlayColor = "#DDDDDD" style = {ConversaItemStyles.buttonArea} onPress = {this.onclick}>
                <Text style={{fontWeight:'bold',fontSize:15}}>{this.props.data.titulo}</Text>
            </TouchableHighlight>
			
	    );
	}
}	
const ConversaItemStyles = StyleSheet.create({
    buttonArea:{
    	minHeight:60,
        width:350,
    	flex:1,
    	justifyContent:'center',
    	padding:10,
        borderBottomWidth:1,
        borderBottomColor:'#CCCCCC',
    	

    }
});