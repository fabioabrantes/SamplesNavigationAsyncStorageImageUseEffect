import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
  margin-top: 40;
  
  align-items: center;
  background-color: #e6e1e1;
`;
export const HeaderText = styled.Text`
  font-size: 25px;
  text-align: center;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  font-size: 18px;
  background-color: #eee;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
`;

export const PctArea = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px;
  width: 80%;
`;
export const PctItem = styled.Button`
  border-radius: 30px;
`;
export const CalcButtonArea = styled.View`
  margin: 10px;
  width: 80%;
`;
export const CalcButton = styled.Button``;
export const ResultArea = styled.View`
  width: 100%;
  margin-top: 30px;
  background-color: #eee;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;
export const ResultItemTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
export const ResultItem = styled.Text`
  font-size: 15px;
  margin-bottom: 30px;
`;