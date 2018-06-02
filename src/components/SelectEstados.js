import React, { Component } from 'react'
import {View, Picker } from 'react-native'

export default  props => (
    <View >
        {
            props.data ?
                <Picker style={{width:200}}
                    selectedValue={props.selectedValue}
                    onValueChange={props.onValueChange}
                >
                    {
                        props.data.map(estado =>
                            <Picker.Item key={estado} label={estado.nome} value={estado} />)
                    }
                </Picker>
                :
                null
        }
    </View>
)