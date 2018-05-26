import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,ScrollView} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin,changeEmail,changePassword,changeName,changeSobreNome,SignUpAction} from '../actions/AuthActions';

export class SignUp extends Component {

	static navigationOptions = {
		title:'Cadastrar',
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('PaginaInicial');
        }
    }

	render() {
		
		return (
			<ScrollView>
			    <View style={styles.container}>
			        <Text style = {styles.texto}>Digite seu nome:</Text>
				    <TextInput style={styles.input} onChangeText={this.props.changeName}/>

				    <Text style = {styles.texto}>Digite seu sobrenome:</Text>
				    <TextInput style={styles.input} onChangeText={this.props.changeSobreNome}/>

				    <Text style = {styles.texto}>Digite seu e-mail:</Text>
			    	<TextInput style={styles.input} onChangeText={this.props.changeEmail}/>

			    	<Text style = {styles.texto}>Digite sua senha:</Text>
				    <TextInput secureTextEntry = {true} style={styles.input} onChangeText={this.props.changePassword}/>
			       
			        <Button title="Cadastrar" onPress={()=>{
			    	    this.props.SignUpAction(this.props.name, this.props.sobreNome,this.props.email, this.props.password);
			         }}/>
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
	},
	input:{
		width:'80%',
		height:50,
		fontSize:20,
		backgroundColor:'#DDDDDD',
		color:'rgba(130,14,25,1)',
		margin:10
	},
	texto:{
		fontSize:20,
		color:'rgba(130,14,25,1)'
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		name:state.auth.name,
		email:state.auth.email,
		password:state.auth.password,
		sobreNome:state.auth.sobreNome
	};
};

const SignUpConnect = connect(mapStateToProps, { checkLogin,changeEmail,changePassword,changeName,changeSobreNome,SignUpAction })(SignUp);
export default SignUpConnect;
















