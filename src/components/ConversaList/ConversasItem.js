import React, {Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet,Image} from 'react-native';

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
                <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'flex-start'}}>
                    <View style={ConversaItemStyles.foto}>
                        <Image style={{width:50,height:50}} source={require('./group.png')}/>
                    </View>
                    <View style={{flex:1}}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>{this.props.data.titulo}</Text>
                    </View>
                </View>
            </TouchableHighlight>
			
	    );
	}
}	
const ConversaItemStyles = StyleSheet.create({
    buttonArea:{
    	minHeight:60,
        width:'95%',
    	flex:1,
    	justifyContent:'center',
        alignItems:'center',
    	padding:10,
        paddingLeft:5,
        borderBottomWidth:1,
        borderBottomColor:'#CCCCCC',
    },
    foto:{
        width:50,
        height:50,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'

    }
});