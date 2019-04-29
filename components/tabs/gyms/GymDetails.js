import React, { Component } from 'react';
import { Container, Tab, Tabs, Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import BackHeader from '../../BackHeader';
import About from './About';
import Map from './Map';

export default class GymDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { navigation } = this.props,
        title = navigation.getParam('title', 'NO-ID'),
        description = navigation.getParam('description', 'NO-ID');
        return (
            <Container>
                <Header style={{ backgroundColor: 'transparent', shadowOpacity: 0, elevation: 0 }}>
                    <Left>
                        <Button transparent onPress={() =>
                            navigation.navigate('Gyms')
                        }>
                            <Icon name='arrow-back' style={{ color: 'black' }} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{ color: '#000000' }}>{title}</Title>
                    </Body>
                    <Right>
                        <Image source={require('../../../images/logo1.png')}
                            style={{ width: 55, height: 55, margin: 5 }}></Image>
                    </Right>
                </Header>

                <Tabs tabBarUnderlineStyle={{ backgroundColor: '#808080' }} >
                    <Tab
                        heading="About"
                        tabStyle={{ backgroundColor: 'white' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#a9a9a9' }}
                        activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <About
                            title={title}
                            description={description}/>
                    </Tab>

                    <Tab
                        heading="Map"
                        tabStyle={{ backgroundColor: 'white' }}
                        textStyle={{ color: 'black' }}
                        activeTabStyle={{ backgroundColor: '#a9a9a9' }}
                        activeTextStyle={{ color: 'white', fontWeight: 'bold' }}>
                        <Map />
                    </Tab>
                </Tabs>
            </Container>

        );
    }
}
