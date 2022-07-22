import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icone from 'react-native-vector-icons/MaterialIcons';

import {TelaATab} from '../Paginas/paginasTab/TelaATab';
import {TelaBTab} from '../Paginas/paginasTab/TelaBTab';
import {TelaCTab} from '../Paginas/paginasTab/TelaCTab';

// import { Container } from './styles';
const {Navigator, Screen} = createBottomTabNavigator();

export function Tab(){
  return (
    <Navigator
    screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'gray',
      tabBarShowLabel: true,
      tabBarLabelStyle: {fontSize: 20},
      tabBarStyle: {backgroundColor: 'yellow'},
      headerShown:false,
      }}
      initialRouteName="TelaB">
      <Screen
        name="TelaA"
        component={TelaATab}
        options={{
          title: 'Inicial',
          tabBarIcon: ({size, color}) => (
            <Icone name="add" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="TelaB"
        component={TelaBTab}
        options={{
          title: 'Meio',
          tabBarIcon: ({size, color}) => (
            <Icone name="list" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="TelaC"
        component={TelaCTab}
        options={{
          title: 'Final',
          tabBarIcon: ({size, color}) => (
            <Icone name="book" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
};
