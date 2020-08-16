import React, {Component} from "react";
import { ListItem } from 'react-native-elements'
import {View} from "react-native";

export default class ListChat extends Component{
    constructor(props) {
        super(props);

        this.state = {
            data:[{
                name: 'Amy Farha',
                img: 'https://sharp-brown-93fa7e.netlify.app/asset/1.jpg',
            },
                {
                    name: 'Chris Jackson',
                    img: 'https://sharp-brown-93fa7e.netlify.app/asset/1.jpg',
                }],
            loading: false,
        };
    }


    Godetails = async (l) => {

        this.props.navigation.navigate('Chat',{
            data: l
        })

    }

  async  componentDidMount() {

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
            data: Logindata.profiles,
            loading:false
        })
    }

    render() {

        return (
            <View>
                {
                    this.state.data.map((l, i) => (
                        <ListItem
                            key={i}
                            leftAvatar={{ source: { uri:'https://sharp-brown-93fa7e.netlify.app' + l.img } }}
                            title={l.name}
                            bottomDivider
                            onPress={() => this.Godetails(l) }
                        />
                    ))
                }
            </View>
        );
    }
}
