import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList } from 'react-native';
import { connect } from 'react-redux';
import ContatoItem from '../components/ContatoList/ContatoItem';
import { getContactList } from '../actions/ChatActions';
import { createChat } from '../actions/ChatActions';

export class ContatoList extends Component {

	static navigationOptions = ({navigation}) => ({
	    drawerLabel:'Contatos',
	});

	constructor(props) {
		super(props);
		this.state = {};
		this.props.getContactList(this.props.uid);
        this.conversaClick = this.conversaClick.bind(this);
	}

	conversaClick(item){
        this.props.createChat(this.props.uid);
        this.props.navigation.navigate('ConversasStack');
	}

	render() {
		return (
			<View style={styles.container}>
			    <FlatList
                    data ={	this.props.contacts}
                    renderItem = {({item})=><ContatoItem data={item} onPress = {this.conversaClick}/>}
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
		contacts:state.chat.contacts,
	};
};

const ContatoListConnect = connect(mapStateToProps, {getContactList,createChat})(ContatoList);
export default  ContatoListConnect;
















