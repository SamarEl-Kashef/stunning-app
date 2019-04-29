import React, { Component } from 'react';
import { Image, ToastAndroid, AsyncStorage } from 'react-native';
import { Container, Content, Form, Item, Input, Button, Text } from 'native-base';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB1vJa6t_Jaj2kFXB3X3sBxaY3S92lNtrA",
  authDomain: "physicaltrainingapp-90281.firebaseapp.com",
  databaseURL: "https://physicaltrainingapp-90281.firebaseio.com",
  projectId: "physicaltrainingapp-90281",
  storageBucket: "physicaltrainingapp-90281.appspot.com",
  messagingSenderId: "247693271639"
};
firebase.initializeApp(config);


export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }
  
  signUp = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then((token) => {
      console.log(token)
      AsyncStorage.setItem('isLoggedIn', '1')
      this.props.navigation.navigate('Home');
      ToastAndroid.showWithGravity(
        'Signed up successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }).catch(function (error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        ToastAndroid.showWithGravity(
          'The password is too weak.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );

      } else if (errorCode == 'auth/email-already-in-use') {
        ToastAndroid.showWithGravity(
          'Email is already in use.',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
      else if (errorCode == 'auth/invalid-email') {
        ToastAndroid.showWithGravity(
          'Invalid email address',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }

      else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  logIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password).then((user) => {
      AsyncStorage.setItem('isLoggedIn', '1')
      this.props.navigation.navigate('Home');
      ToastAndroid.showWithGravity(
        'Logged in successfully!',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      console.log('logged in', user)
    }).catch((error)=>{
      console.log('error', error);
    })
  }

  render() {
    return (
      <Container>
        <Content>
          <Image source={require('../images/logo1.png')}
            style={{ width: 100, height: 100, alignSelf: 'center', marginTop: '10%' }} />
          <Form style={{ marginTop: '40%' }}>

            <Item>
              <Input placeholder="Email"
                onChangeText={(email) => this.setState({ email })}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </Item>

            <Item>
              <Input placeholder="Password"
                onChangeText={(password) => this.setState({ password })}
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
              />
            </Item>
            <Button dark rounded
            style={{ margin: 10, justifyContent: "center", alignSelf: "stretch", textAlignVertical: "center" }}
            onPress={() => this.signUp(this.state.email, this.state.password)}
            ><Text> Sign up </Text></Button>

            <Button dark rounded
            style={{ margin: 10, justifyContent: "center", alignSelf: "stretch", textAlignVertical: "center"}}
            onPress={() => this.logIn(this.state.email, this.state.password)}
            ><Text> Login </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}