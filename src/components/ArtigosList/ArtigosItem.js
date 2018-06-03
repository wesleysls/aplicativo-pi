import React, {Component} from 'react';
import {View,Text,StyleSheet,TouchableHighlight,Image} from 'react-native';

export default class ArtigosItem extends Component{
	
    constructor(props){
    	super(props);
        this.state = {
            foto:null
        };

        this.onclick = this.onclick.bind(this);

        this.state.foto = {uri:this.props.data.foto};

    }

    onclick(){
        this.props.onPress(this.props.data);
    }

	render(){
		return(
            <TouchableHighlight onPress = {this.onclick}>
			<View style={ArtigoStyles.area}>
                <View style ={ArtigoStyles.foto}>
                    <Image source={this.state.foto} style={{width:340,height:200,}}/>
                </View>
                <Text style={ArtigoStyles.titulo}>{this.props.data.titulo}</Text>
            </View>
            </TouchableHighlight>
	    );
	}
}	
const ArtigoStyles = StyleSheet.create({
    area:{
        marginTop:20,
        marginBottom:10,
        width:340,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white'
    },
    foto:{
        width:340,
        height:200,
        backgroundColor:'#DDDDDD',
        justifyContent:'center',
        alignItems:'center',
    },
    titulo:{
        fontSize:25,
        textAlign:'center',
        marginBottom:30
    }
    
});