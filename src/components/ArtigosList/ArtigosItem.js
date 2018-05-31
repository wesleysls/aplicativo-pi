import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native';

export default class ArtigosItem extends Component{
	
    constructor(props){
    	super(props);
        this.state = {};

        this.onclick = this.onclick.bind(this);

    }

    onclick(){
        this.props.onPress(this.props.data);
    }

	render(){
		return(
            <TouchableHighlight onPress = {this.onclick}>
			<View style={ArtigoStyles.area}>
                <View style ={ArtigoStyles.foto}>
                    <Text>Foto do Artigo</Text>
                </View>
                <Text style={ArtigoStyles.titulo}>{this.props.data.titulo}</Text>
            </View>
            </TouchableHighlight>
	    );
	}
}	
const ArtigoStyles = StyleSheet.create({
    area:{
        marginTop:6,
        marginBottom:10,
        width:'100%',
        height:270,
        justifyContent:'flex-start',
        alignItems:'center',
        borderBottomWidth:2,
        borderColor:'black',
        backgroundColor:'white'

    },
    foto:{
        width:350,
        height:200,
        backgroundColor:'#cfd8dc',
        justifyContent:'center',
        alignItems:'center',
    },
    titulo:{
        fontSize:25,
        textAlign:'center'
    }
    
});