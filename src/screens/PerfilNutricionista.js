import React, { Component } from 'react';
import { View, Text, FlatList,StyleSheet,Button,TouchableHighlight,TextInput,Image} from 'react-native';
import { NavigationActions } from 'react-navigation';
import {StackActions} from 'react-navigation';
import { connect } from 'react-redux';
import {votar} from '../actions/NutriActions';

export class PerfilNutricionista extends Component {

	static navigationOptions = ({navigation}) => ({
	    drawerLabel:'Perfil'
	});

	constructor(props) {
		super(props);
		this.state = {
			inputText:'',
			nome:'',
			telefone:'',
			endereco:'',
			crn9:'',
			media:''
		};

		this.props.nutricionistas.forEach((childItem)=>{

			if(childItem.key == this.props.perfilAtivo){

               this.state.nome = childItem.nome;
               this.state.telefone = childItem.telefone;
               this.state.endereco = childItem.endereco;
               this.state.crn9 = childItem.crn9;
               this.state.media = childItem.media;
			}
		});
		this.votar1 = this.votar1.bind(this);
		this.votar2 = this.votar2.bind(this);
		this.votar3 = this.votar3.bind(this);
		this.votar4 = this.votar4.bind(this);
		this.votar5 = this.votar5.bind(this);
	}

	votar1(){
		this.props.votar(parseFloat(1),this.props.perfilAtivo);
	}
	votar2(){
		this.props.votar(parseFloat(2),this.props.perfilAtivo);
	}
	votar3(){
		this.props.votar(parseFloat(3),this.props.perfilAtivo);
	}
	votar4(){
		this.props.votar(parseFloat(4),this.props.perfilAtivo);
	}
	votar5(){
		this.props.votar(parseFloat(5),this.props.perfilAtivo);
	}

	render() {
		return (
			<View style={styles.container}>
			    <View style={styles.corpo}>
			        <View style={styles.dados}>
			            <View style={styles.foto}>
                            <Text>foto do usuário</Text>
			            </View>
			            <View>
			                <Text>{this.state.nome}</Text>
			                <Text>Telefone: {this.state.telefone}</Text>
			                <Text>{this.state.endereco}</Text>
			                <Text>CRN9: {this.state.crn9}</Text>
			            </View>
			        </View>
			        <View style={styles.votoArea}>
			            <Text style={styles.txtVoto}>Vote!</Text>
			            <TouchableHighlight style={styles.votoButton} onPress={this.votar1}>
			               <Image style={styles.VotoImage} source={require('../assets/images/star.png')}/>
			            </TouchableHighlight>
			            <TouchableHighlight style={styles.votoButton} onPress={this.votar2}>
			               <Image style={styles.VotoImage} source={require('../assets/images/star.png')}/>
			            </TouchableHighlight>
			            <TouchableHighlight style={styles.votoButton} onPress={this.votar3}>
			               <Image style={styles.VotoImage} source={require('../assets/images/star.png')}/>
			            </TouchableHighlight>
			            <TouchableHighlight style={styles.votoButton} onPress={this.votar4}>
			               <Image style={styles.VotoImage} source={require('../assets/images/star.png')}/>
			            </TouchableHighlight>
			            <TouchableHighlight style={styles.votoButton} onPress={this.votar5}>
			               <Image style={styles.VotoImage} source={require('../assets/images/star.png')}/>
			            </TouchableHighlight>
			            <Text style={styles.txtMedia}>Media: {this.state.media}</Text>
			        </View>   
			    </View>  
			    <View style = {styles.inf}>
			        <Text style={styles.txtComent}>Adicione um comentario!</Text>
			        <View style={styles.addArea}>
				        <TextInput style={styles.input} value={this.state.inputText} onChangeText={(inputText)=>this.setState({inputText})}/>	
				        <TouchableHighlight style={styles.sendButton} onPress={this.adicionarConversa}>
			                <Image style={styles.addImage} source={require('../assets/images/add.png')}/>
				        </TouchableHighlight>  	
				    </View>	
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
    corpo:{
    	marginLeft:10,
    	height:220,
    	justifyContent:'center',
    	alignItems:'flex-start',
    	borderBottomWidth:2,
    	borderBottomColor:'white'
    },
    inf:{
    	flex:1,
    	backgroundColor:'#a8119c',
    	justifyContent:'flex-start',
		alignItems:'center',
    },
    foto:{
    	width:100,
    	height:100,
    	backgroundColor:'#cfd8dc',
    	justifyContent:'center',
		alignItems:'center',
		marginRight:10
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
	VotoImage:{
        width:35,
		height:35,
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
	txtComent:{
		fontSize:15
	},
	txtVoto:{
        fontSize:20,
        marginRight:10,
	},
	txtMedia:{
        fontSize:20,
        marginLeft:10
	},
	dados:{
		height:100,
    	flexDirection:'row',
    	justifyContent:'center',
    	alignItems:'center',
	},
	votoArea:{
		height:40,
		flexDirection:'row',
        justifyContent:'flex-start',
    	alignItems:'center',
    	marginTop:10
	},
	votoButton:{
		width:35,
		height:35,
	}
});

const mapStateToProps = (state) => {
	return {
		status:state.auth.status,
		chatAtivo:state.chat.chatAtivo,
		chats:state.chat.chats,
		uid:state.auth.uid,
		perfilAtivo:state.nutri.perfilAtivo,
		nutricionistas:state.nutri.nutricionistas

	};
};

const PerfilNutricionistaConnect = connect(mapStateToProps, {votar})(PerfilNutricionista);
export default  PerfilNutricionistaConnect;















