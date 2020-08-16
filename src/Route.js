import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native";
import Login from "./View/Login";
import ListChat from "./View/ListChat";
import Chat from "./View/Chat";

const Stack = createStackNavigator();

export default class Route extends Component {
    render() {

        const linking = {
            prefixes: ['http://globalbazaar.top/', 'https://globalbazaar.top/'],
        }

        return (
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                <Stack.Navigator>

                    <Stack.Screen options={ListChat.navigationOptions}  name="ListChat" component={ListChat} />
                    <Stack.Screen options={Chat.navigationOptions}  name="Chat" component={Chat} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    }

}
