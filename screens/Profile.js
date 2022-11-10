import React, {component} from 'react';
import {text, view} from 'react-native';

export default class Profile extends component{
    render(){
        return(
            <View style ={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Text>Your Profile will appear here!</Text>
            </View>
        )
    }
}