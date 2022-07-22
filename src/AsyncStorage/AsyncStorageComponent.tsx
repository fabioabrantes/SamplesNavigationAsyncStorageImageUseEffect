import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Container,
  Input,
  Botao,
  NameArea,
  Nome
} from './styles';


export function AsyncStorageComponent(){
  const [name, setName] = useState('');
  const [texto, setTexto] = useState('');

  async function handleSaveTexto(){
    let textoTemp = `O nome digitado foi ${name}`;
    try {
      if (name !== '') {
        await AsyncStorage.setItem('@name:Projeto', textoTemp);
        setName('');
      }
    } catch (error) {
      Alert.alert(error.message());
    }
  };

  async function getTexto(){
    try {
      const textSalvo = await AsyncStorage.getItem('@name:Projeto');
      if (textSalvo !== '' && textSalvo) {
        setTexto(textSalvo);
      }
    } catch (error) {
      Alert.alert(error.message());
    }
  };

  useEffect(() => {
    async function visualizarNome() {
      getTexto();
    }
    visualizarNome();
  }, [name]);

  return (
    <Container>
      <Input
        placeholder="digite seu nome"
        value={name}
        onChangeText={setName}
      />

      <Botao title="salvar" onPress={handleSaveTexto} />

      <NameArea>
        <Nome>{texto}</Nome>
      </NameArea>
    </Container>
  );
};

