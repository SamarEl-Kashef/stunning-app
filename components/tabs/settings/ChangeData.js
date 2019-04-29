import React from 'react';
import { Text, ToastAndroid, Image } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Form, Item, Input, Icon, Header, Left, Body, Right, Title, Button } from 'native-base';
import BackHeader from '../../BackHeader';

export default class ChangeData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      newEmail: ""
    };
  }

  // Reauthenticates the current user and returns a promise...
  reauthenticate = (currentPassword) => {
    let user = firebase.auth().currentUser;
    let cred = firebase.auth.EmailAuthProvider.credential(user.email, currentPassword);
    return user.reauthenticateWithCredential(cred);
  }

  // Changes user's password...
  onChangePasswordPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      let user = firebase.auth().currentUser;
      user.updatePassword(this.state.newPassword).then(() => {
        ToastAndroid.showWithGravity(
          'Password is changed successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }

  // Changes user's email...
  onChangeEmailPress = () => {
    this.reauthenticate(this.state.currentPassword).then(() => {
      let user = firebase.auth().currentUser;
      user.updateEmail(this.state.newEmail).then(() => {
        ToastAndroid.showWithGravity(
          'Email is changed successfully!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }).catch((error) => { console.log(error.message); });
    }).catch((error) => { console.log(error.message) });
  }

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'transparent', shadowOpacity: 0, elevation: 0 }}>
          <Left>
            <Button transparent onPress={() =>
              this.props.navigation.navigate('Settings')
            }>
              <Icon name='arrow-back' style={{ color: 'black' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#000000' }}>Account settings</Title>
          </Body>
          <Right>
            <Image source={require('../../../images/logo1.png')}
              style={{ width: 55, height: 55, margin: 5 }}></Image>
          </Right>
        </Header>

        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Current Password"
                value={this.state.currentPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(currentPassword) => { this.setState({ currentPassword }) }} />
            </Item>

            <Item success>
              <Input
                placeholder="New Password"
                value={this.state.newPassword}
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(newPassword) => { this.setState({ newPassword }) }} />
              <Text
                style={{ margin: 5 }}
                onPress={this.onChangePasswordPress}>Save Changes</Text>
              <Icon name='checkmark-circle' />
            </Item>

            <Item last success>
              <Input
                placeholder="New Email"
                value={this.state.newEmail}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={(newEmail) => { this.setState({ newEmail }) }} />
              <Text
                style={{ margin: 5 }}
                onPress={this.onChangeEmailPress}>Save Changes</Text>
              <Icon name='checkmark-circle' />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}