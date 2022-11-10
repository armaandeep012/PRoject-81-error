import React, {component} from 'react';
import {text, view} from 'react-native';

export default class CreatePost extends component{
    render(){
        return(
            <View style ={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>You can Create your Post here!!</Text>
            </View>
        )
    }
}