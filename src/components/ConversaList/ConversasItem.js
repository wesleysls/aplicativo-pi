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
                <Text>{this.props.data.key}</Text>
            </TouchableHighlight>
			
	    );
	}
}	
const ConversaItemStyles = StyleSheet.create({
    buttonArea:{
        width:300,
    	height:40,
    	flex:1,
    	justifyContent:'center',
    	paddingLeft:10,
        borderBottomWidth:2,
        borderBottomColor:'#CCCCCC',
    	

    }
});