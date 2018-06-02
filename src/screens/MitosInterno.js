import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TouchableHighlight,ScrollView} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';

export class MitosInterno extends Component {

	static navigationOptions = ({navigation})=>({
	    title:'Artigo',
	     headerStyle:{
            backgroundColor:'#a8119c'
	    }
	})

	constructor(props) {
		super(props);

		this.state = {
			texto:'',
			autor:'',
			titulo:'',
		};

		this.props.Artigos.forEach((childItem)=>{

			if(childItem.key == this.props.ArtigoAtivo){
               this.state.texto = childItem.texto;
               this.state.autor = childItem.autor;
               this.state.titulo = childItem.titulo;
			}
		});
	}

	render() {
		return (
			<ScrollView>
			<View style={styles.container}>
                <View style={styles.area}>
                    <View style ={styles.foto}>
                        <Text>Foto do Artigo</Text>
                    </View>
                    <Text style={{fontSize:25}}>{this.state.titulo}</Text>
                    <Text style={{fontWeight:'bold'}}>Por: {this.state.autor}</Text>
                </View>
                <View style={styles.textoArea}>
                    <Text style={{fontSize:18,textAlign:'left',fontWeight:'100',lineHeight:30}}>{this.state.texto}</Text>
                </View>
			</View>
			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'white'
	},
	area:{
        width:'100%',
        height:300,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'white'
    },
    foto:{
        width:'100%',
        height:200,
        backgroundColor:'#DDDDDD',
        justifyContent:'center',
        alignItems:'center',
    },
    textoArea:{
    	width:'100%',
    	paddingLeft:15,
    	paddingRight:15
    }
	
});

const mapStateToProps = (state) => {
	return {
		
		ArtigoAtivo:state.mitos.ArtigoAtivo,
		Artigos:state.mitos.artigos
	};
};

const MitosInternoConnect = connect(mapStateToProps, {})(MitosInterno);
export default  MitosInternoConnect;
















