import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,FlatList	} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import{getChatList,setActiveChat}	from '../actions/ChatActions';
import ConversasItem from '../components/ConversaList/ConversasItem';


export class ConversaList extends Component {

	static navigationOptions = ({navigation}) => ({
	    title:'Conversas',
	});

	constructor(props) {
		super(props);
		this.state = {};
        this.props.getChatList(this.props.uid);
        this.conversaClick = this.conversaClick.bind(this);
	}

	conversaClick(data){
        this.props.setActiveChat(data.key);
	}

	render() {
        if (this.props.chatAtivo != ''){
			this.props.navigation.navigate('ConversaInterna');
		}
		return (
			<View style={styles.container}>
			    <FlatList
                   data={this.props.chats}
                   renderItem={({item})=><ConversasItem data={item} onPress={this.conversaClick}/>}		

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
		status:state.auth.status,
		chatAtivo:state.chat.chatAtivo,
		chats:state.chat.chats,
		uid:state.auth.uid,
	};
};

const ConversaListConnect = connect(mapStateToProps, { getChatList,setActiveChat})(ConversaList);
export default  ConversaListConnect;
















