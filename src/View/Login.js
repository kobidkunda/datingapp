import React, {Component} from "react";
import {View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
export default class Login extends Component{

    render() {
        return (
            <View style={{
                flex:1,
                margin:5
            }}>
                <View style={{
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Input
                        placeholder='Username'
                    />

                    <Input
                        placeholder='Password'
                    />

                </View>



                <View style={{
                    flex:1
                }}>

                    <Button
                        title="Login"
                    />

                </View>

            </View>
        );
    }
}
