import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { connect } from 'react-redux';
import NutricionistaItem from '../components/NutricionistasList/NutricionistaItem';
import { getNutricionistasList,setActivePerfil} from '../actions/NutriActions';

export class NutricionistasList extends Component {

	static navigationOptions = ({navigation}) => ({
	    header:null
	});

	constructor(props) {
		super(props);
		this.state = {};
		this.props.getNutricionistasList();
        this.verPerfil = this.verPerfil.bind(this);
	}

	verPerfil(item){
		this.props.setActivePerfil(item.key);
        this.props.navigation.navigate('PerfilNutricionista');
	}

	render() {
		return (
			<View style={styles.container}>
			    <FlatList
                    data ={	this.props.nutricionistas}
                    renderItem = {({item})=><NutricionistaItem data={item} onPress = {this.verPerfil}/>}
				/>	
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1, 
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#a8119c',
	}
});

const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
		nutricionistas:state.nutri.nutricionistas,
	};
};

const NutricionistasListConnect = connect(mapStateToProps, {getNutricionistasList,setActivePerfil})(NutricionistasList);
export default  NutricionistasListConnect;
















