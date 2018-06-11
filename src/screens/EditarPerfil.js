import React, { Component } from 'react';
import { View, Text, StyleSheet,Button,TextInput,Keyboard,ScrollView,Picker,TouchableHighlight,Image} from 'react-native';
import { connect } from 'react-redux';
import {changeName,changeSobreNome,EditarNome,EditarSobreNome,EditarEstado,EditarCidade,EditarSexo,EditarEstadoCivil,EditarIdade} from '../actions/AuthActions';
import { estados } from '../cidades-estados.json'
import SelectEstados from '../components/SelectEstados'
import SelectCidades from '../components/SelectCidades'


export class EditarPerfil extends Component {

	static navigationOptions = {
		title:'Editar Dados',
		headerStyle:{
            backgroundColor:'#a8119c'
	    }
	}

	constructor(props) {
		super(props);
		this.state = {
			estado:'',
			cidade:'',
			sexo:0,
			sexos:[
                {"nome":'Feminino'},
                {"nome":'Masculino'}
			],
			estadoCivil:1,
			estadosCivis:[
                {nome:'Solteiro'},
                {nome:'Casado(a)'},
                {nome:'Viuvo(a)'},
                {nome:'Divorciado(a)'}
			],
			uf: null,
			selectedValueEstado: null,
			selectedValueCidade: null ,
			
			idade:0,
			idades:[
			    {idade:"18"},
			    {idade:"19"},
			    {idade:"20"},
			    {idade:"21"},
			    {idade:"22"},
			    {idade:"23"},
			    {idade:"24"},
			    {idade:"25"},
			    {idade:"26"},
			    {idade:"27"},
			    {idade:"28"},
			    {idade:"29"},
			    {idade:"30"},
			    {idade:"31"},
			    {idade:"32"},
			    {idade:"33"},
			    {idade:"34"},
			    {idade:"35"},
			    {idade:"36"},
			    {idade:"37"},
			    {idade:"38"},
			    {idade:"39"},
			    {idade:"40"},
			    {idade:"41"},
			    {idade:"42"},
			    {idade:"43"},
			    {idade:"44"},
			    {idade:"45"},
			    {idade:"46"},
			    {idade:"47"},
			    {idade:"48"},
			    {idade:"49"},
			    {idade:"50"},
			    {idade:"51"},
			    {idade:"52"},
			    {idade:"53"},
			    {idade:"54"},
			    {idade:"55"},
			    {idade:"56"},
			    {idade:"57"},
			    {idade:"58"},
			    {idade:"59"},
			    {idade:"60"},
			    {idade:"61"},
			    {idade:"62"},
			    {idade:"63"},
			    {idade:"64"},
			    {idade:"65"},
			    {idade:"66"},
			    {idade:"67"},
			    {idade:"68"},
			    {idade:"69"},
			    {idade:"70"},
			    {idade:"71"},
			    {idade:"72"},
			    {idade:"73"},
			    {idade:"73"},
			    {idade:"74"},
			    {idade:"75"},
			    {idade:"76"},
			    {idade:"77"},
			    {idade:"78"},
			    {idade:"79"},
			    {idade:"80"},
			    {idade:"81"},
			    {idade:"82"},
			    {idade:"83"},
			    {idade:"83"},
			    {idade:"84"},
			    {idade:"85"},
			    {idade:"86"},
			    {idade:"87"},
			    {idade:"88"},
			    {idade:"89"},
			    {idade:"90"},
			    {idade:"91"},
			    {idade:"92"},
			    {idade:"93"},
			    {idade:"93"},
			    {idade:"94"},
			    {idade:"95"},
			    {idade:"96"},
			    {idade:"97"},
			    {idade:"98"},
			    {idade:"99"},
			    {idade:"100"},
			    {idade:"101"},
			    {idade:"102"},
			    {idade:"103"},
			    {idade:"104"},
			    {idade:"105"},
			    {idade:"106"},
			    {idade:"107"},
			    {idade:"108"},
			    {idade:"109"},
			    {idade:"110"},
			    {idade:"111"},
			    {idade:"112"},
			    {idade:"113"},
			    {idade:"114"},
			    {idade:"115"},
			    {idade:"116"},
			    {idade:"118"},
			    {idade:"119"},
			    {idade:"120"}		    
			],
			confirmPassword:''
		};

		this.editarNome = this.editarNome.bind(this);
		this.editarSobreNome = this.editarSobreNome.bind(this);
		this.editarEstado = this.editarEstado.bind(this);
		this.editarCidade = this.editarCidade.bind(this);
		this.editarSexo = this.editarSexo.bind(this);
		this.editarIdade = this.editarIdade.bind(this);
		this.editarEstadoCivil = this.editarEstadoCivil.bind(this);
	}

	componentDidUpdate(){
        if (this.props.status == 1){
        	Keyboard.dismiss();
        	this.props.navigation.navigate('PaginaInicial');
        }
    }
    changeSelects(){
    	if (this.state.estado != '' && this.state.cidade != '' && this.props.name != '' && this.props.sobreNome != '' && this.props.email != '' && this.props.password != '' && this.props.confirmPassword != ''){
    	    if(this.props.password == this.props.confirmPassword){
    	        this.props.SignUpAction(
    	 	        this.props.name, 
    	 	        this.props.sobreNome,
    	     	    this.props.email, 
    	 	        this.props.password, 
    	 	        this.state.estado,
    	 	        this.state.cidade,
    	 	        this.state.sexos[this.state.sexo].nome,
    	 	        this.state.idades[this.state.idade].idade,
    	 	        this.state.estadosCivis[this.state.estadoCivil].nome,
    	 	    );
    	    }else{
    	    	alert("senhas não conferem!");
    	    }
    	}else{
    		//alert(this.props.name+this.props.sobreNome+this.props.email+this.props.password, );
    		alert("Preencha todos os campos!");
    	}
    	 	
    }

    componentDidMount() {
        this.setState({
          uf: estados,
          selectedValueEstado: '',
          selectedValueCidade: ''
        })
      }

      renderValueChangeEstado = (value) => {
        console.warn(value.sigla)
        this.setState({
          selectedValueEstado: value,
          estado:value.nome
        })
      }


      renderValueChangeCidade = (value) => {
        console.warn(value)
        this.setState({
          selectedValueCidade: value,
          cidade:value
        })
      }

      editarNome(){
      	this.props.EditarNome(this.props.uid,this.props.name);
      	alert("Nome editado para "+this.props.name);
      }
      editarSobreNome(){
      	this.props.EditarSobreNome(this.props.uid,this.props.sobreNome);
      	alert("Sobrenome editado para "+this.props.sobreNome);
      }
      editarEstado(){
      	this.props.EditarEstado(this.props.uid,this.state.estado);
      	alert("Estado editado para "+this.state.estado);
      }
      editarCidade(){
      	this.props.EditarCidade(this.props.uid,this.state.cidade);
      	alert("Cidade editado para "+this.state.cidade);
      }
      editarSexo(){
      	this.props.EditarSexo(this.props.uid,this.state.sexos[this.state.sexo].nome);
      	alert("Sexo editado para "+this.state.sexos[this.state.sexo].nome);
      }
      editarIdade(){
      	this.props.EditarIdade(this.props.uid,this.state.idades[this.state.idade].idade);
      	alert("Idade editada para "+this.state.idades[this.state.idade].idade);
      }
      editarEstadoCivil(){
      	this.props.EditarEstadoCivil(this.props.uid,this.state.estadosCivis[this.state.estadoCivil].nome);
      	alert("EstadoCivil editado para "+this.state.estadosCivis[this.state.estadoCivil].nome);
      }

	render() {
        const { selectedValueCidade, selectedValueEstado, uf } = this.state;

		let sexosItems = this.state.sexos.map((v,k)=>{
            return <Picker.Item key={k} value={k} label={v.nome}/>
		});

		let idadeItems = this.state.idades.map((v,k)=>{
            return <Picker.Item key={k} value={k} label={v.idade}/>
		});

		let estadosCivisItems = this.state.estadosCivis.map((v,k)=>{
            return <Picker.Item key={k} value={k} label={v.nome}/>
		});
		


		return (
			<ScrollView>
			    <View style={styles.container}>
			        <Text style = {styles.texto}>Editar nome:</Text>
			        <View style={{flexDirection:'row',alignItems:'center'}}>
				        <TextInput style={styles.input} onChangeText={this.props.changeName}/>
				        <TouchableHighlight onPress={this.editarNome}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			            </TouchableHighlight>
				    </View>

				    <Text style = {styles.texto}>Editar sobrenome:</Text>
				    <View style={{flexDirection:'row',alignItems:'center'}}>
				        <TextInput style={styles.input} onChangeText={this.props.changeSobreNome}/>
				        <TouchableHighlight onPress={this.editarSobreNome}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			            </TouchableHighlight>
			        </View>
                    
                    <View style = {styles.picker}>
                        <Text style={styles.texto}>Estado: </Text>
                        <SelectEstados
                            selectedValue={selectedValueEstado}
                            data={uf}
                            onValueChange={this.renderValueChangeEstado} />
                            <TouchableHighlight onPress={this.editarEstado}style={{marginLeft:15}}>
                                <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			                </TouchableHighlight>
                    </View>

                    <View style = {styles.picker}>
                        <Text style={styles.texto}>Cidade: </Text>
                        <SelectCidades selectedValue={selectedValueCidade}
                            data={selectedValueEstado}
                            onValueChange={this.renderValueChangeCidade} />
                            <TouchableHighlight onPress={this.editarCidade}style={{marginLeft:15}}>
                                <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			                </TouchableHighlight>
                    </View>

				    <View style = {styles.picker}>
                        <Text style={styles.texto}>Sexo: </Text>
				        <Picker selectedValue={this.state.sexo} onValueChange={(itemValue,itemIndex)=> this.setState({sexo:itemValue})} style={{width:158}}>
				            {sexosItems}
				        </Picker>
				        <TouchableHighlight onPress={this.editarSexo}style={{marginLeft:15}}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			            </TouchableHighlight>
				    </View>

				     <View style = {styles.picker}>
                        <Text style={styles.texto}>Idade: </Text>
				        <Picker selectedValue={this.state.idade} onValueChange={(itemValue,itemIndex)=> this.setState({idade:itemValue})} style={{width:153}}>
				            {idadeItems}
				        </Picker>
				        <TouchableHighlight onPress={this.editarIdade}style={{marginLeft:15}}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			            </TouchableHighlight>
				    </View>

				    <View style = {styles.picker}>
                        <Text style={styles.texto}>Estado civil: </Text>
				        <Picker selectedValue={this.state.estadoCivil} onValueChange={(itemValue,itemIndex)=> this.setState({estadoCivil:itemValue})} style={{width:100}}>
				            {estadosCivisItems}
				        </Picker>
				        <TouchableHighlight onPress={this.editarEstadoCivil}style={{marginLeft:15}}>
                            <Image style={{width:30,height:30}} source={require('../assets/images/edit.png')}/>
			            </TouchableHighlight>
				    </View>
			    </View>
			</ScrollView>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		paddingLeft:10,
		flex:1,
		justifyContent:'flex-start',
		alignItems:'flex-start',
		marginTop:15
	},
	input:{
		width:'70%',
		height:50,
		fontSize:20,
		backgroundColor:'#DDDDDD',
		color:'rgba(130,14,25,1)',
		margin:10
	},
	texto:{
		fontSize:20,
		color:'rgba(130,14,25,1)'
	},
	picker:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center',
		marginTop:10,
		marginBottom:10
	}
});

const mapStateToProps = (state) => {
	return {
		name:state.auth.name,
		sobreNome:state.auth.sobreNome,
		uid:state.auth.uid
	};
};

const EditarPerfilConnect = connect(mapStateToProps, {changeName,changeSobreNome,EditarNome,EditarSobreNome,EditarEstado,EditarCidade,EditarSexo,EditarEstadoCivil,EditarIdade})(EditarPerfil);
export default EditarPerfilConnect;
















