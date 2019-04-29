import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Container } from 'native-base';
export default class Map extends Component {


    render() {
        return (
            <Container>
                <WebView source={{ uri: "https://www.google.com/maps/dir/29.9845461,31.3034959/Gold's+Gym+Maadi,+1+El-Mahata%D8%8C+Square%D8%8C+Maadi+as+Sarayat+Al+Gharbeyah,+Al+Maadi,+Cairo+Governorate%E2%80%AD/@29.9710279,31.2513756,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x145847f5d2aff44f:0xe9ae0718f8de5a71!2m2!1d31.259641!2d29.9600046" }}
                    style={{ width: "100%", height: 300 }} />
            </Container>

        );
    }
}