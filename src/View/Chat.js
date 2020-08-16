import React, {Component} from "react";
import {Input, Icon} from 'react-native-elements'
import {ImageBackground, Text, View} from "react-native";

export default class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            name:null
        };
    }
    static navigationOptions = {
        headerTitle :'Chat',
        headerTintColor: '#000000',
        headerTitleStyle: {
            color:'#000000',
            fontSize:22
        },
    }



    componentDidMount() {
        const  itemId = this.props.route.params.data;

        this.setState({
            name: this.props.route.params.data.name
        })

        this.props.navigation.setParams({ headerTitle: 'your content' })


    }


    render() {
        return (
            <ImageBackground
                source={require('../Asset/chatbg.png')}
                style={{
                flex:1
            }}>
                <View style={{
                    flex:9
                }}>

                </View>

                <View style={{
                    flex:1
                }}>

                    <Input
                        placeholder='Type Chat'
                        inputStyle={{
                            color:'#3b3b3b'
                        }}
                        inputContainerStyle={{
                            backgroundColor: 'rgba(255,255,255,0.58)'
                        }}
                        onChangeText={(text) => { this.setState({password: text})} }

                        secureTextEntry={false}

                        labelStyle={{
                            color:'#3b3b3b'
                        }}
                        rightIcon={
                            <Icon
                                name='sc-telegram'
                                type='evilicon'
                                size={35}
                                onPress={() => alert('Please Subscribe a package to start chatting')}
                            />
                        }
                    />

                </View>

            </ImageBackground>
        );
    }

}
