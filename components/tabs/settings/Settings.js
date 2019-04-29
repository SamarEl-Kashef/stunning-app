import React, { Component } from 'react';
import MainHeader from '../../MainHeader';
import { Container, Button, Content, ListItem, Text, Icon, Left, Body, Right, Item, Form, Picker } from 'native-base';
import { ToastAndroid, AsyncStorage } from 'react-native';
import * as firebase from 'firebase';

export default class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  onPressChangeLanguage = () => {
    strings.setLanguage('ar');
    this.setState({})
  }

  onPressChangeLanguage = () => {
    strings.setLanguage('en');
    this.setState({})
  }

  signOutUser = async () => {
    await AsyncStorage.clear();
    firebase.auth().signOut().then(() => {
      this.props.navigation.navigate('Login')
      ToastAndroid.showWithGravity(
        'You are logged out.',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      console.log('Signed Out');
    }, function (error) {
      console.error('Sign Out Error', error);
    });
  }


  render() {
    return (
      <Container>
        <MainHeader title='Settings' />
        <Content>


          <ListItem icon
            onPress={() => {
              this.props.navigation.navigate('ChangeData')
            }}>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="person" />
              </Button>
            </Left>
            <Body>
              <Text >Account Setting</Text>
            </Body>
            <Right>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>

          <ListItem icon
            onPress={this.signOutUser}>
            <Left>
              <Button style={{ backgroundColor: "black" }}>
                <Icon active name="exit" />
              </Button>
            </Left>
            <Body>
              <Text>Logout</Text>
            </Body>
            <Right />
          </ListItem>

          <Form style={{marginLeft:'14%'}}>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select your language"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="English" value="key1" />
                <Picker.Item label="العربية" value="key2" />
              </Picker>
            </Item>
          </Form>


        </Content>
      </Container>

    );
  }
}
