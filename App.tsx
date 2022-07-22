import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScrollComponent} from './src/Scroll/ScrollComponent';
import {CalculadoraGorjeta} from './src/UseEffect/CalculadoraGorjeta';
import {Routes} from './src/Navegacao/Routes';
import {ImageComponent} from './src/Image/ImageComponent';
import {AsyncStorageComponent} from './src/AsyncStorage/AsyncStorageComponent';


function App(){
  return (
    <SafeAreaView style={{flex:1}}>
       <ScrollComponent />
       {/* <CalculadoraGorjeta /> */}
       {/* <Routes /> */}
       {/* <AsyncStorageComponent /> */}
        {/* <ImageComponent /> */}
    </SafeAreaView>
  );
};

export default App;
