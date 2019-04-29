import React, {Component} from 'react';
import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from './components/SplashScreen';
import Home from './components/tabs/home/Home';
import Gyms from './components/tabs/gyms/Gyms';
import About  from './components/tabs/gyms/About';
import Map  from './components/tabs/gyms/Map';
import GymDetails from './components/tabs/gyms/GymDetails';
import Food from './components/tabs/food/Food';
import Settings from './components/tabs/settings/Settings';
import Login from './components/Login';
import ChangeData from './components/tabs/settings/ChangeData';
import BackHeader from './components/BackHeader';

const mainNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-home" size={24} color={tintColor} ></Ionicons>
        )
      })
    },
    Gyms: {
      screen: Gyms,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-body" size={24} color={tintColor} ></Ionicons>
        )
      })
    },
    Food: {
      screen: Food,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-restaurant" size={24} color={tintColor} ></Ionicons>
        )
      })
    },
    Settings: {
      screen: Settings,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" size={24} color={tintColor} ></Ionicons>
        )
      })
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#808080',
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold'

      },
      style: {
        backgroundColor: '#dcdcdc',
      },
    }

  }
);


export default createAppContainer(createSwitchNavigator({
  SplashScreen: SplashScreen,
  Login: Login,
  mainNavigator,
  GymDetails: GymDetails,
  Map : Map,
  ChangeData
},
  {

    initialRouteName:'SplashScreen',
  }
))
