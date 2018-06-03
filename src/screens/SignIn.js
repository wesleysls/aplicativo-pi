import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,TouchableHighlight} from 'react-native';
import { connect } from 'react-redux';
import { checkLogin,changeEmail,changePassword,SignInAction} from '../actions/AuthActions';

export class SignIn extends Component {

	static navigationOptions = {
		title:'Login',
	}

	constructor(props) {
		super(props);
		this.state = {
			name:''
		};
		
		this.signupButton = this.signupButton.bind(this);
		this.forgotPassword = this.forgotPassword.bind(this);
	}
    
    componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('PaginaInicial');
        }
    }
    signupButton(){
         this.props.navigation.navigate('SignUp');
	}

	forgotPassword(){
         this.props.navigation.navigate('ForgotPassword');
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style = {styles.texto}>Digite seu e-mail:</Text>
				<TextInput style={styles.input} onChangeText={this.props.changeEmail}/>
				<Text style = {styles.texto}>Digite sua senha:</Text>
				<TextInput secureTextEntry = {true} style={styles.input} onChangeText={this.props.changePassword}/>
			    <View style={{flexDirection:'row',alignItems:'center'}}>
			        <TouchableHighlight style={styles.button}  onPress={this.signupButton}>
			            <Text style={styles.texto}>Cadastre-se</Text>
			        </TouchableHighlight>

			        <TouchableHighlight style={styles.button} onPress={this.forgotPassword}>
			            <Text style ={{color:'rgba(130,14,25,1)7'}}>Esqueci a senha</Text>
			        </TouchableHighlight>
			    </View>
			    <View style={{marginTop:10}}>
			        <Button title="Entrar" onPress={()=>{
			    	    this.props.SignInAction(this.props.email, this.props.password);
			        }}/>
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
		status:state.auth.status,
		uid:state.auth.uid,
		email:state.auth.email,
		password:state.auth.password
	};
};

const SignInConnect = connect(mapStateToProps, { checkLogin,changeEmail,changePassword,SignInAction })(SignIn);
export default SignInConnect;
















