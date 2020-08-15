import React, {Component} from "react";
import {Image, ImageBackground, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
export default class Login extends Component{

    render() {
        return (
            <ImageBackground
                source={require('../Asset/login.jpg')}

                style={{
                flex:1,

            }}>

                <View style={{
                    flex:1,
                    margin:5,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <Image source={require('../Asset/logo.png')}
                    style={{
                        width:100,
                        height:100
                    }}
                    />

                </View>



                <View style={{
                    flex:1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin:5
                }}>

                    <Input
                        placeholder='Username'
                        inputStyle={{
                            color:'#3b3b3b'
                        }}
                        inputContainerStyle={{
                            backgroundColor: 'rgba(255,255,255,0.58)'
                        }}

                        labelStyle={{
                            color:'#3b3b3b'
                        }}
                    />

                    <Input
                        placeholder='Password'
                        inputStyle={{
                            color:'#3b3b3b'
                        }}
                        inputContainerStyle={{
                            backgroundColor: 'rgba(255,255,255,0.58)'
                        }}

                        labelStyle={{
                            color:'#3b3b3b'
                        }}
                    />

                </View>



                <View style={{
                    flex:1,
                    margin:5
                }}>

                    <Button
                        title="Login"
                        buttonStyle={{
                            backgroundColor:'#FF006F'
                        }}
                    />

                </View>

            </ImageBackground>
        );
    }
}
