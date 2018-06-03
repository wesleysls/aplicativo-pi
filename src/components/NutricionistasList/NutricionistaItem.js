import React, {Component} from 'react';
import {View,Text,TouchableHighlight,StyleSheet,Image} from 'react-native';

export default class NutricionistaItem extends Component{
	
    constructor(props){
    	super(props);
    	this.onclick = this.onclick.bind(this);
        this.state ={
            foto:null
        }

        this.state.foto ={uri:this.props.data.foto};
    }

    onclick(){
        this.props.onPress(this.props.data);
    }

	render(){
		return(
            <TouchableHighlight onPress = {this.onclick}>
            <View style = {NutricionistaItensStyles.buttonArea} onPress = {this.onclick}>
                <View style={NutricionistaItensStyles.foto}>
                    <Image source={this.state.foto} style={{width:70,height:70,}}/>
                </View>
                <View>
                    <Text>{this.props.data.nome}</Text>
                    <Text>{this.props.data.endereco}</Text>
                    <Text>{this.props.data.telefone}</Text>
                </View>
            </View>
            </TouchableHighlight>
			
	    );
	}
}	
const NutricionistaItensStyles = StyleSheet.create({
    buttonArea:{
        flexDirection:'row',
        width:300,
    	height:100,
    	justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth:2,
        borderBottomColor:'#CCCCCC'
    },
    foto:{
        width:70,
        height:70,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#CCCCCC',
        marginRight:10
    }
});