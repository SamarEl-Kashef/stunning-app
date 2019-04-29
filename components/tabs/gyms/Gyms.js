import React, { Component } from 'react';
import MainHeader from '../../MainHeader';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class Gyms extends Component {
    constructor(props) {
        super(props)
      }

    render() {
      let gymImage = require("../../../images/gold's.png")
        return ( 
            <Container>
                <MainHeader title='Nearby Gyms'/>
                <Content>
                <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={gymImage} />
              </Left>
              <Body>
                <Text> Gold's Gym </Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent onPress={ () => {
                     this.props.navigation.navigate('GymDetails',{
                         title: "Gold's Gym",
                         description: "Its time to build a difference . ."
                     });
                }}>
                  <Text>View details</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
                </Content>
            </Container>
            
          );
}
}
