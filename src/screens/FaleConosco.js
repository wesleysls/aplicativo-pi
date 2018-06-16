import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,TouchableHighlight,Image} from 'react-native';
import { connect } from 'react-redux';
import {faleConosco} from '../actions/AuthActions';
import {StackActions,DrawerActions} from 'react-navigation';
import firebase from '../firebaseConnection';

export class FaleConosco extends Component {

	static navigationOptions = {
		title:'Fale Conosco',
	}

	constructor(props) {
		super(props);
		this.state = {
			inputText:''
		};

	    this.sendMsg = this.sendMsg.bind(this);
	}
    
    sendMsg(){
		let txt = this.state.inputText;
        let state = this.state;
        state.inputText = '';
        this.setState(state);

        firebase.database().ref('usuarios').child(this.props.uid).child('name').on('value',(snapshot)=>{    
            this.props.faleConosco(txt,this.props.uid,snapshot.val())
        });

        alert("Mensagem enviada com sucessso!");
        this.props.navigation.navigate('Perfil');
        
	}
  

	render() {
		return (
			<View style={styles.container}>
			    <View style={styles.header}>
			        <TouchableHighlight  onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}>
			            <Image style={styles.menuImage} source={require('../assets/images/menu.png')}/>
			        </TouchableHighlight>
			    </View>
			    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
			        <View style={{width:300,minHeight:200,backgroundColor:'#a8119c',justifyContent:'center',alignItems:'center',borderRadius:10,padding:10}}>
				        <Text style = {styles.texto}>Em que podemos te ajudar?</Text>
				        <TextInput  multiline={true} underlineColorAndroid={'transparent'} placeholder={'Digite aqui...'} style={styles.input} value={this.state.inputText} onChangeText={(inputText)=>this.setState({inputText})}/>
			            <Button title="enviar" onPress={this.sendMsg}/>
			        </View>
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
		minHeight:50,
		maxHeight:160,
		fontSize:20,
		backgroundColor:'#DDDDDD',
		margin:20,
		borderRadius:10,
		paddingLeft:10
	},
	texto:{
		color:'white',
		fontSize:20,
	},
	button:{
	    margin:10
	},
	header:{
		width:'100%',
		height:60,
		backgroundColor:'#a8119c',
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center'
	},
	menuImage:{
		width:52,
		height:52
	}
});

const mapStateToProps = (state) => {
	return {
		uid:state.auth.uid,
	};
};

const FaleConoscoConnect = connect(mapStateToProps, {faleConosco})(FaleConosco);
export default FaleConoscoConnect;
















