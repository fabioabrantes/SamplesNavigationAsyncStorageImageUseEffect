import React from 'react';
import {PassoStack} from '../../../Components/PassoStack';
import {TextoCentral} from '../../../Components/TextoCentral';

export function TelaA(){
  return (
    <>
      <PassoStack avancar="TelaB" info={{numero: 222}}>
        <TextoCentral corFundo="#e53935"> Tela A</TextoCentral>
      </PassoStack>
    </>
  );
};
