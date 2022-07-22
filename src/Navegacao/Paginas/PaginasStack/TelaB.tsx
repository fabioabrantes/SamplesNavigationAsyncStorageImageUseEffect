import React from 'react';
import {useRoute} from '@react-navigation/core';
import {PassoStack} from '../../../Components/PassoStack';
import {TextoCentral} from '../../../Components/TextoCentral';

// import { Container } from './styles';
interface IRoute {
  numero: number;
}
export function TelaB(){
  const route = useRoute();
  const {numero} = route.params as IRoute;
  
  return (
    <>
      <PassoStack voltar avancar="TelaC" info={{numero: 123}}>
        <TextoCentral corFundo="#5535e5"> Tela B: {numero}</TextoCentral>
      </PassoStack>
    </>
  );
};
