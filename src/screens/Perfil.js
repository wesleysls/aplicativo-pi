import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,Button,TouchableHighlight,TextInput,Image,ScrollView} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions,DrawerActions} from 'react-navigation';
import { connect } from 'react-redux';
import{SignOut} from '../actions/AuthActions';
import ConversasItem from '../components/ConversaList/ConversasItem';
import{getChatList,setActiveChat}	from '../actions/ChatActions';
import { createChat } from '../actions/ChatActions';
import firebase from '../firebaseConnection';


export class Perfil extends Component {

	static navigationOptions = ({navigation}) => ({
	    drawerLabel:'Perfil',
	     header:null
	});

	constructor(props) {
		super(props);
		this.state = {
			inputText:'',
			nome:'',
			cidade:'',
			estadoCivil:'',
			foto:null
		};


		let tela = 2;
        this.sair = this.sair.bind(this);
        this.props.getChatList(this.props.uid,tela);
        this.conversaClick = this.conversaClick.bind(this);
        this.adicionarConversa = this.adicionarConversa.bind(this);
        this.editar = this.editar.bind(this);
	}

	sair(){
        this.props.SignOut();
        window.globalNavigator.navigate('SignIn');
	}

	 componentDidMount(){
	 	firebase.database().ref('usuarios').child(this.props.uid).on('value',(snapshot)=>{
           let nome = snapshot.val().name;
           let cidade = snapshot.val().cidade;
           let estadoCivil = snapshot.val().estadoCivil;
           let foto = snapshot.val().foto;

           this.setState({
           	nome:nome,
           	cidade:cidade,
           	estadoCivil:estadoCivil,
           	foto:{uri:foto}
           });
        });
	 }

	conversaClick(data){
        this.props.setActiveChat(data.key);
        this.props.navigation.navigate('ConversaInterna');
	}

	adicionarConversa(){

		let titulo = this.state.inputText;
        let state = this.state;
        state.inputText = '';
        this.setState(state);

        this.props.createChat(this.props.uid,titulo);
	}
	editar(){
        this.props.navigation.navigate('EditarPerfil');
	}

	render() {
		return (
			<View style={styles.container}>
			    <View style={styles.header}>
			        <TouchableHighlight onPress={()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}>
			            <Image style={styles.addImage} source={require('../assets/images/menu.png')}/>
			        </TouchableHighlight>
			        <TouchableHighlight onPress={this.sair}>
			            <Image style={{width:40,height:40}} source={require('../assets/images/logout.png')}/>
			        </TouchableHighlight>
			    </View>
			    <ScrollView>
			    <View style={styles.corpo}>
			        <View style={styles.foto}>
                        <Image style={{width:120,height:120}} source={this.state.foto}/>
                        <TouchableHighlight onPress={this.editar}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			            </TouchableHighlight>
			        </View>
			        <View>
			            <Text style={{fontWeight:'bold',fontSize:20}}>{this.state.nome}</Text>
			        </View>
			        <View style={{flexDirection:'row'}}>
			            <Text style={{marginRight:5}}>{this.state.cidade}</Text>
			            <Text style={{marginRight:5}}>Brasieiro(a)</Text>
			            <Text>{this.state.estadoCivil}</Text>
			        </View>
			    </View>  
			    <View style = {styles.inf}>
			        <Text style={{fontSize:20,marginBottom:5}}>Adicione uma conversa</Text>
			        <View style={styles.addArea}>
				         <TextInput style={styles.input} value={this.state.inputText} underlineColorAndroid={'transparent'} placeholder={'Digite aqui...'} multiline={true}underlineColorAndroid={'transparent'} placeholder={'Digite aqui...'} multiline={true} onChangeText={(inputText)=>this.setState({inputText})}/>	
				         <TouchableHighlight style={styles.sendButton} onPress={this.adicionarConversa}>
			                <Image style={styles.addImage} source={require('../assets/images/add.png')}/>
				        </TouchableHighlight>  	
				    </View>	
			    </View>
			    <View style={{width:'100%',borderBottomWidth:1,borderBottomColor:'#CCCCCC'}}>
			        <Text style={{fontSize:20,marginBottom:10,fontWeight:'bold'}}>Minhas Conversas:</Text>
			    </View>
			    <FlatList
                    data={this.props.chats}
                    renderItem={({item})=><ConversasItem data={item} onPress={this.conversaClick}/>}		

			    />
			</ScrollView>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	header:{
		height:60,
		width:'100%',
		backgroundColor:'#a8119c',
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'center',
		paddingRight:4
	},
	iconesHeader:{
        height:60,
        width:60
	},
    corpo:{
        height:220,
    	justifyContent:'center',
    	alignItems:'center',
    },
    inf:{
    	backgroundColor:'#a8119c',
    	justifyContent:'center',
		alignItems:'center',
    },
    foto:{
    	width:180,
    	height:120,
    	justifyContent:'flex-end',
		alignItems:'flex-end',
		flexDirection:'row'
    },
    input:{
		width:260,
		minHeight:50,
		maxHeight:160,
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
















