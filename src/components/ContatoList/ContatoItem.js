import React, {Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet} from 'react-native';

export default class ContatoItem extends Component{
	
    constructor(props){
    	super(props);
    	this.onclick = this.onclick.bind(this);
    }

    onclick(){
        this.props.onPress(this.props.data);
    }

	render(){
		return(
            <TouchableHighlight underlayColor = "#DDDDDD" style = {ContatoItensStyles.buttonArea} onPress = {this.onclick}>
                <Text>{this.props.data.name}</Text>
            </TouchableHighlight>
			
	    );
	}
}	
const ContatoItensStyles = StyleSheet.create({
    buttonArea:{
        width:300,
    	height:40,
    	flex:1,
    	justifyContent:'center',
    	paddingLeft:10,
        borderBottomWidth:2,
        borderBottomColor:'#CCCCCC'
    	

    }
});