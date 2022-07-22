import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
interface IProps {
  voltar?: boolean;
  avancar?: "TelaB" | "TelaC" | "TelaD" | "TelaE" | "Drawer";
  info?: {
    numero: number;
  };
  children: React.ReactNode;
}

export function PassoStack({voltar,avancar,info, children}: IProps){
  const navigation = useNavigation();

  function handleInfoToScreenB(){
    navigation.navigate(avancar, info);
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {voltar && (
          <Button
            title="voltar"
            onPress={() => {
              navigation.goBack();
            }}
          />
        )}
        
        {avancar && (
          <Button
            title="Avançar"
            onPress={handleInfoToScreenB}
          />
        )}
      </View>
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
