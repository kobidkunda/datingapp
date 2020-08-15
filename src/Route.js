import React, {Component} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Text} from "react-native";
import Login from "./View/Login";

const Stack = createStackNavigator();

export default class Route extends Component {
    render() {

        const linking = {
            prefixes: ['http://globalbazaar.top/', 'https://globalbazaar.top/'],
        }

        return (
            <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
                <Stack.Navigator>

                    <Stack.Screen options={{headerShown: true}}  name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        )

    }

}
