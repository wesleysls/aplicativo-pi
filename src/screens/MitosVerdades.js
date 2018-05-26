import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

export class MitosVerdades extends Component {

	static navigationOptions = ({navigation}) => ({
	    drawerLabel:'Mitos e Verdades',

	});
	constructor(props) {
		super(props);
		this.state = {};

	}

	render() {
		return (
			<View style={styles.container}>
				<Text>PAGINA MITOS E VERDADES</Text>
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
		status:state.auth.status
	};
};

const MitosVerdadesConnect = connect(mapStateToProps, {})(MitosVerdades);
export default  MitosVerdadesConnect;













