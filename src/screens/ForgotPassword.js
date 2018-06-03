import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail,forgotPassword} from '../actions/AuthActions';

export class ForgotPassword extends Component {

	static navigationOptions = {
		title:'Recuperar senha',
	}

	constructor(props) {
		super(props);
		this.state = {
			name:''
		};
		
		this.trocarSenha = this.trocarSenha.bind(this);
	}
    
    componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('PaginaInicial');
        }
    }
    trocarSenha(){
    	if(this.props.email != ''){
            this.props.forgotPassword(this.props.email);
            this.props.navigation.navigate('SignIn');
        }else{
        	alert("Preencha os campos!");
        }
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style = {styles.texto}>Digite seu e-mail:</Text>
				<TextInput style={styles.input} onChangeText={this.props.changeEmail}/>
			    <View style={styles.button}>
			        <Button  onPress={this.trocarSenha} title ="Trocar senha"/>
			    </View>

			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
	},
	input:{
		width:'80%',
		height:50,
		fontSize:20,
		backgroundColor:'#DDDDDD',
		margin:10
	},
	texto:{
		color:'rgba(130,14,25,1)7',
		fontSize:20,
	},
	button:{
	    margin:10
	}
});

const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
		email:state.auth.email,
	};
};

const ForgotPasswordConnect = connect(mapStateToProps, {changeEmail,forgotPassword })(ForgotPassword);
export default ForgotPasswordConnect;
















