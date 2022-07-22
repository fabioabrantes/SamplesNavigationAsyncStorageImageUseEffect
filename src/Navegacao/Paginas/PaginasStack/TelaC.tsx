import React from 'react';
import {useRoute} from '@react-navigation/core';
import {PassoStack} from '../../../Components/PassoStack';
import {TextoCentral} from '../../../Components/TextoCentral';

interface IRoute {
  numero: number;
}

export function TelaC(){
  const route = useRoute();
  const {numero} = route.params as IRoute;
  return (
    <PassoStack voltar avancar="Drawer">
      <TextoCentral corFundo="#9932cd">Tela C - {numero}</TextoCentral>
    </PassoStack>
  );
};
