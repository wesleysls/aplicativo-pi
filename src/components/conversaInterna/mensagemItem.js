import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class MensagemItem extends Component{
	
    constructor(props){
    	super(props);
        let bgColor = 'white';
        let align = 'flex-start';
        let textAlign = 'left';

        if(this.props.data.uid == this.props.me){
            bgColor = '#dcf8c6';
            align = 'flex-end';
            textAlign = 'right';
        }
        

        this.state = {
            bgColor:bgColor,
            align:align,
            textAlign:textAlign
        };

    }

	render(){
		return(
			<View style={[MensagemItemStyles.area,{alignSelf:this.state.align,backgroundColor:this.state.bgColor }]}>
                <Text style={MensagemItemStyles.nameArea}>{this.props.data.name}</Text>
                <Text style = {{textAlign:this.state.textAlign}}>{this.props.data.msg}</Text>
                <Text style={MensagemItemStyles.dateTxt}>{this.props.data.date}</Text>
            </View>
	    );
	}
}	
const MensagemItemStyles = StyleSheet.create({
    area:{
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5,
        padding:10,
        alignSelf:'baseline',
        maxWidth:'80%',
        borderRadius:5

    },
    dateTxt:{
        fontSize:11,
        textAlign:'right'
    },
    nameArea:{
        textAlign:'left',
        fontSize:15
    }
    
});