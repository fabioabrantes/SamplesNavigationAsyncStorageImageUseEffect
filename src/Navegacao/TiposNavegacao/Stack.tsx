import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {TelaA} from '../Paginas/PaginasStack/TelaA';
import {TelaB} from '../Paginas/PaginasStack/TelaB';
import {TelaC} from '../Paginas/PaginasStack/TelaC';

import {Drawer} from './Drawer';

const {Navigator, Screen} = createNativeStackNavigator();

export function Stack(){
  return (
    <Navigator
      initialRouteName="TelaA"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {color: 'green'},
      }}>
      <Screen
        name="TelaA"
        options={{title: 'Informações de Tela A'}}
        component={TelaA}
      />
      <Screen
        name="TelaB"
        options={{title: 'Informações de Tela B'}}
        component={TelaB}
      />
      <Screen
        name="TelaC"
        options={{title: 'Informações de Tela C '}}
        component={TelaC}
      />
      <Screen
        name="Drawer"
        options={{title: 'Informações do Drawer '}}
        component={Drawer}
      />
    </Navigator>
  );
};

