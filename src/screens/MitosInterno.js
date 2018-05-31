import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TouchableHighlight,ScrollView} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';

export class MitosInterno extends Component {

	static navigationOptions = ({navigation})=>({
	    title:'Artigo'
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
                <Text>{this.state.texto}</Text>
			</View>
			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center'
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
















