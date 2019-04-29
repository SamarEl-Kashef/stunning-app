import React, { Component } from 'react';
import { View,Image, AsyncStorage} from 'react-native';
import { Spinner } from 'native-base';
export default class SplashScreen extends Component {

  constructor(props) {
    super(props);
    this._retrieveData();
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('isLoggedIn');
      if (value != '1') {
        this.props.navigation.navigate('Login')
        // We have data!!
        console.log(value);
      }
      else if( value == '1'){
        this.props.navigation.navigate('Home')
      }
    } catch (error) {
      // Error retrieving data
      console.log(error);
    }
  };

        
    render() {
        return ( 
            < View style={{backgroundColor:"white"}}  style={{flex:1, alignItems:'center',justifyContent:'center'}}>
              <Image   style={{ width:150,height:150}} source={require('../images/logo1.png')} />
              <Spinner color='black' />
            </View>
          );
}
}
