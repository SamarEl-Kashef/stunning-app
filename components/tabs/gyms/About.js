import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';

export default class About extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return ( 
            <Container>
                <Content>
                    <Card transparent>
                        <CardItem header>
                            <Text>
                            {this.props.title}
                            </Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../../../images/gym.jpg')} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text note>
                                   {this.props.description}
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
            
          );
}
}
