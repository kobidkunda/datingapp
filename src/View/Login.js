import React, {Component} from "react";
import {Alert, Image, ImageBackground, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
export default class Login extends Component{


    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false,
            username:null,
            password: null
        };
    }

    OnLogin = async () => {

        console.log(this.state.username);

        this.setState({
            loading:true
        })
        let USER_PROFILE = await fetch('https://sharp-brown-93fa7e.netlify.app/index.json', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                Pragma: 'no-cache',
                Expires: 0,
            },
        });

        let Logindata = await USER_PROFILE.json();

        this.setState({
            data: Logindata,
            loading:false
        })

        if (Logindata.username === this.state.username && Logindata.password === this.state.password){
            this.props.navigation.navigate('ListChat')
        } else {
            alert('Invalid Password')
        }



        console.log(Logindata);
    }

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
                        onChangeText={(text) => { this.setState({username: text})} }

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
                        onChangeText={(text) => { this.setState({password: text})} }

                        secureTextEntry={true}

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
                        loading={this.state.loading}
                        onPress={() => this.OnLogin()}
                    />

                </View>

            </ImageBackground>
        );
    }
}
