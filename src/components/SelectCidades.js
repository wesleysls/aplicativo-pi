import React from 'react';
import { View, Picker, StyleSheet } from 'react-native';


export default props => (
    <View  >
        {
            props.data ?
                <Picker style={{width:200}}
                    selectedValue={props.selectedValue}
                    onValueChange={props.onValueChange}
                >
                    {
                        props.data.cidades.map(cidade => <Picker.Item key={cidade} label={cidade} value={cidade} />)
                    }
                </Picker>
                :
                <Picker style={{width:200}}
                    selectedValue={props.selectedValue}
                    onValueChange={props.onValueChange}
                >
                    <Picker.Item  label={'selecione'} />
                </Picker>
        }
    </View>
)