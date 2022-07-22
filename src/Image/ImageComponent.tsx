import React, {useState} from 'react';
import {Image, StatusBar, Text} from 'react-native';
import styled from 'styled-components/native';

import Logo from './zumbi.svg';
import Logo2 from './logoIFPB.png';

export function ImageComponent(){
  const [status, setStatus] = useState('');

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="blue"
        hidden={false}
        animated={true}
      />
      <Text>{"Logomarca do Zumbi"}</Text>
      <Logo width={120} height={120} />

      <Image
        source={require('./logoIFPB.png')}
        style={{width: 200, height: 200, backgroundColor: 'gray'}}
        resizeMode="center"
      />
      <Image
        source={Logo2}
        style={{width: 200, height: 200, backgroundColor: 'gray'}}
        resizeMode="center"
      />

      <Image
        source={{uri: 'https:www.google.com.br/google.jpg'}}
        style={{width: 200, height: 200}}
        resizeMode="contain"
        defaultSource={require('./placeholder.png')}
        onLoadStart={() => {
          setStatus('carregando');
        }}
        onLoad={() => setStatus('carregou!')}
      />
      <Text>{status}</Text>     
      
    </Container>
  );
};
const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;