import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
/* import {Drawer} from './TiposNavegacao/Drawer'; */
/* import {Tab} from './TiposNavegacao/Tab'; */
import {Stack} from './TiposNavegacao/Stack';
// import { Container } from './styles';

export function Routes(){
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack />
        {/*  <Tab /> */}
        {/*  <Drawer /> */}
      </NavigationContainer>
    </View>
  );
};
