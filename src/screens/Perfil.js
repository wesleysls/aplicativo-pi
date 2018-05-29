import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,Button,TouchableHighlight,TextInput,Image} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import{SignOut} from '../actions/AuthActions';
import ConversasItem from '../components/ConversaList/ConversasItem';
import{getChatList,setActiveChat}	from '../actions/ChatActions';
import { createChat } from '../actions/ChatActions';

export class Perfil extends Component {

	static navigationOptions = ({navigation}) => ({
	    drawerLabel:'Perfil'
	});

	constructor(props) {
		super(props);
		this.state = {
			inputText:'',
		};
		let tela = 2;
        this.sair = this.sair.bind(this);
        this.props.getChatList(this.props.uid,tela);
        this.conversaClick = this.conversaClick.bind(this);
        this.adicionarConversa = this.adicionarConversa.bind(this);
	}
	sair(){
        this.props.SignOut();
        window.globalNavigator.navigate('SignIn');
	}

	conversaClick(data){
        this.props.setActiveChat(data.key);
	}

	adicionarConversa(){

		let titulo = this.state.inputText;
        let state = this.state;
        state.inputText = '';
        this.setState(state);

        this.props.createChat(this.props.uid,titulo);
	}

	render() {
		if (this.props.chatAtivo != ''){
			this.props.navigation.navigate('ConversaInterna');
		}
		return (
			<View style={styles.container}>
			    <TouchableHighlight style={styles.header} onPress={this.sair}>
			        <Image style={styles.addImage} source={require('../assets/images/logout.png')}/>
			    </TouchableHighlight>
			    <View style={styles.corpo}>
			        <View style={styles.foto}>
                        <Text>foto do usuário</Text>
			        </View>
			    </View>  
			    <View style = {styles.inf}>
			        <Text style={{fontSize:20,marginBottom:10}}>Minhas Conversas</Text>
			        <View style={styles.addArea}>
				         <TextInput style={styles.input} value={this.state.inputText} onChangeText={(inputText)=>this.setState({inputText})}/>	
				         <TouchableHighlight style={styles.sendButton} onPress={this.adicionarConversa}>
			                <Image style={styles.addImage} source={require('../assets/images/add.png')}/>
				        </TouchableHighlight>  	
				    </View>	

			        <FlatList
                        data={this.props.chats}
                        renderItem={({item})=><ConversasItem data={item} onPress={this.conversaClick}/>}		

			        />
			    </View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#a8119c',
	},
	header:{
		height:40,
		backgroundColor:'#a8119c',
		flexDirection:'row',
		justifyContent:'flex-end'
	},
    corpo:{
    	flex:1,
    	flexDirection:'row',
    	justifyContent:'center',
    	alignItems:'flex-start',
    	borderBottomWidth:2,
    	borderBottomColor:'white'
    },
    inf:{
    	flex:2,
    	backgroundColor:'#a8119c',
    	justifyContent:'center',
		alignItems:'center',
    },
    foto:{
    	width:120,
    	height:120,
    	backgroundColor:'#cfd8dc',
    	justifyContent:'center',
		alignItems:'center',
    },
    input:{
		width:260,
		height:50,
		fontSize:20,
		backgroundColor:'#DDDDDD',
		margin:10,
		borderRadius:5
	},
	addImage:{
		width:52,
		height:52,
	},
	addArea:{
    	flexDirection:'row',
    	justifyContent:'center',
    	alignItems:'center',
	},
	sendButton:{
		width:52,
		height:52,
		justifyContent:'center',
		alignItems:'center'
	},
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		chatAtivo:state.chat.chatAtivo,
		chats:state.chat.chats,
		uid:state.auth.uid,

	};
};

const PerfilConnect = connect(mapStateToProps, { SignOut,getChatList,setActiveChat,createChat})(Perfil);
export default  PerfilConnect;
















