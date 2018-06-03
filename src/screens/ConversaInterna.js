import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TouchableHighlight,Image,BackHandler,FlatList,TextInput} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import {setActiveChat,sendMessage,monitorChat,monitorChatOff} from '../actions/ChatActions';
import firebase from '../firebaseConnection';

import MensagemItem from '../components/conversaInterna/mensagemItem';	

export class ConversaInterna extends Component {

	static navigationOptions = ({navigation})=>({
	    title:'CONVERSAS',
	    headerStyle:{
            backgroundColor:'#a8119c'
	    },
	    headerLeft:(
            <TouchableHighlight onPress={()=>{navigation.state.params.voltarFunction()}} underlayColor={false}>
                <Image source={require('react-navigation/src/views/assets/back-icon.png')} style={{width:25,height:25,marginLeft:20}}/>
            </TouchableHighlight>
	    	)
	})

	constructor(props) {
		super(props);
		this.state = {
			inputText:'',
			name:''
		};
		this.voltar = this.voltar.bind(this);
		this.sendMsg = this.sendMsg.bind(this);
	}
    
    componentDidMount(){
    	this.props.navigation.setParams({voltarFunction:this.voltar});
    	BackHandler.addEventListener('hardwareBackPress',this.voltar);

    	this.props.monitorChat(this.props.chatAtivo);
    }

    componentWillUnmount(){
    	BackHandler.removeEventListener('hardwareBackPress',this.voltar);
    }

	voltar(){
		this.props.monitorChatOff(this.props.chatAtivo);
		this.props.setActiveChat('');
		this.props.navigation.goBack();
		return true;
	}

	sendMsg(){
		let txt = this.state.inputText;
        let state = this.state;
        state.inputText = '';
        this.setState(state);

        firebase.database().ref('usuarios').child(this.props.uid).child('name').on('value',(snapshot)=>{    
            this.props.sendMessage(txt,this.props.uid,snapshot.val(),this.props.chatAtivo)
        }); 
        
	}

	render() {
		return (
			<View style={styles.container}>
				<FlatList
				    ref={(ref)=>{this.chatArea = ref }}
				    onContentSizeChange={()=>{this.chatArea.scrollToEnd({animated:true})}}
				    onLayout={()=>{this.chatArea.scrollToEnd({animated:true})}}
				    style={styles.chatArea}
				    data={this.props.activeChatMessages}
				    renderItem={({item})=><MensagemItem data={item} me = {this.props.uid}/>}
				/>
				<View style={{justifyContent:'center',flexDirection:'row',width:'100%'}}>
				    <View style={styles.sendArea}>
				        <TextInput style={styles.sendInput} value={this.state.inputText} onChangeText={(inputText)=>this.setState({inputText})}/>
				    </View>
				    <TouchableHighlight style={styles.sendButton} onPress={this.sendMsg}>
				        <Image style={styles.sendImage} source={require('../assets/images/send.png')}/>
				    </TouchableHighlight>
				</View>

			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#cf88ce',

	},
	sendArea:{
		flex:1,
        height:50,
        backgroundColor:'white',
        flexDirection:'row',
        borderRadius:20
	},
	chatArea:{
		flex:1,
		backgroundColor:'#cf88ce',
	},
	sendInput:{
		height:50,
		flex:1
	},
	sendButton:{
		width:50,
		height:50,
		justifyContent:'center',
		alignItems:'center'
	},
	sendImage:{
		width:40,
		height:45,
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		uid:state.auth.uid,
		chatAtivo:state.chat.chatAtivo,
		activeChatMessages:state.chat.activeChatMessages,
		name:state.auth.name

	};
};

const ConversaInternaConnect = connect(mapStateToProps, { setActiveChat,sendMessage,monitorChat,monitorChatOff})(ConversaInterna);
export default  ConversaInternaConnect;
















