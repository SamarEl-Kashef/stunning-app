import React, { Component } from 'react';
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base';
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class BackHeader extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <Header style={{ backgroundColor: 'transparent', shadowOpacity:0, elevation:0}}>
          <Left>
          <Button onPress={()=>
            this.props.navigation.navigate('Home')
            }>
            <Icon name='arrow-back' style={{color:'black'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color:'#000000'}}>{this.props.title}</Title>
          </Body>
          <Right>
            <Image source={require('../images/logo1.png')}
            style={{width:55, height:55, margin:5}}></Image>
            </Right>
        </Header>
    );
  }
}

export default withNavigation(BackHeader);