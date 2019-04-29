import React, { Component } from 'react';
import { Image, BackHandler, AsyncStorage } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
import MainHeader from '../../MainHeader';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }
    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        AsyncStorage.getItem('isLoggedIn')
        console.log('logged in',AsyncStorage.getItem('isLoggedIn'))
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.goBack();
        return true;
    }
    render() {
        return (
            <Container>
                <MainHeader title='Home' />

                <Content>
                    <Card>
                        <CardItem header>
                            <Text>
                                Dumbell pushup
                            </Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../../images/pushup.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text note>
                                    Place a pair of dumbbells, slightly wider than shoulder width apart. Set yourself in a pushup position with hands on dumbbells. Lower your body to the floor, pause, then complete 1 push up. Once you're back in the starting position, row the dumbbell on one side to the side of your chest by pulling the dumbbell upwards.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text>Plank</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../../images/plank.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text note>
                                    The plank (also called a front hold, hover, or abdominal bridge) is an isometric core strength exercise that involves maintaining a position similar to a push-up for the maximum possible time.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card>
                        <CardItem header>
                            <Text>Bulgarian Split Squat</Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../../images/squat.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text note>
                                    The Bulgarian split squat is a single leg exercise that targets your quads, hamstrings, and glutes. As you can see, there are three key parts to the Bulgarian split squat: You balance on one foot, with your rear foot on a bench or box. Your back stays more or less straight throughout the whole movement. You usually hold dumbbells to add weight, instead of using a barbell.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>

        );
    }
}
