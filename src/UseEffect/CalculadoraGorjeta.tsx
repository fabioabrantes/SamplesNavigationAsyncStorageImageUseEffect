import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { 
  Container,
  HeaderText,
  Input,
  PctArea,
  PctItem,
  CalcButtonArea,
  CalcButton,
  ResultArea,
  ResultItemTitle,
  ResultItem,

 } from './styles';

export function CalculadoraGorjeta() {
  const [valorConta, setValorConta] = useState('');
  const [percentagemGorjeta, setPercentagemGorjeta] = useState(0);
  const [gorjeta, setGorjeta] = useState(0);
  const [valorTotal, setValorTotal] = useState("0");
  const [temRelatorio, setTemRelatorio] = useState(false);
  
  function calcGorjeta() {
    let valorNumerico = parseFloat(valorConta);
    if (valorNumerico) {
      setGorjeta((percentagemGorjeta / 100) * valorNumerico);
    }
  }

  function calcTotal(){
    let total = (parseFloat(valorConta) + gorjeta).toFixed(2)
    setValorTotal(total);
  }

  function mostrarRelatorio(){
    if(valorConta && percentagemGorjeta >0) {
      setTemRelatorio(true);
    }
  }

  useEffect(() => {
    calcGorjeta();
    setValorTotal('0');
  }, [percentagemGorjeta,valorConta]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="blue"
        hidden={false}
        animated={true}
      />

      <HeaderText>Calculadora de Gorjeta</HeaderText>

      <Input
        placeholder="Insira o valor da conta?"
        placeholderTextColor="#a9ce24"
        keyboardType="numeric"
        value={valorConta}
        onChangeText={setValorConta}
      />

      <HeaderText>Escolha a percentagem da gorjeta</HeaderText>
      <PctArea>
        <PctItem
          title="5%"
          onPress={() => {
            setPercentagemGorjeta(5);
          }}
        />

        <PctItem
          title="10%"
          onPress={() => {
            setPercentagemGorjeta(10);
          }}
        />

        <PctItem
          title="15%"
          onPress={() => {
            setPercentagemGorjeta(15);
          }}
        />

        <PctItem
          title="20%"
          onPress={() => {
            setPercentagemGorjeta(20);
          }}
        />
      </PctArea>

      <CalcButtonArea>
        <CalcButton title={`mostrar o relatório dos gastos`} onPress={mostrarRelatorio} />
      </CalcButtonArea>

      {temRelatorio && (
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(valorConta).toFixed(2)}</ResultItem>
          
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>
            R$ {gorjeta.toFixed(2)} ({percentagemGorjeta}%)
          </ResultItem>

          <CalcButtonArea>
            <CalcButton title='Calcular valor total' onPress={calcTotal} />
          </CalcButtonArea>

          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>
            R$ {valorTotal}
          </ResultItem>
        </ResultArea> 
      )}
    </Container>
  );
}