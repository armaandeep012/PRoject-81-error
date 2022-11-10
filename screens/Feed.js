import React, {component} from 'react';
import {text, view} from 'react-native';

export default class Feed extends component{
    render(){
        return(
            <View style ={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Your Feeds will appear here!</Text>
            </View>
        )
    }
}