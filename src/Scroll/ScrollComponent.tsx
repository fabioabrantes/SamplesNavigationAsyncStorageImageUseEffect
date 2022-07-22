import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';

interface IUser {
  name: string;
  id: number;
}

const listUsers: IUser[] = [
  {name: 'fabio', id: 1},
  {name: 'fabio', id: 2},
  {name: 'pedro', id: 3},
  {name: 'roberto', id: 4},
  {name: 'bebeto', id: 5},
  {name: 'romário', id: 6},
  {name: 'falcão', id: 7},
  {name: 'messi', id: 8},
  {name: 'cafu', id: 9},
  {name: 'alex', id: 10},
  {name: 'rivaldo', id: 11},
  {name: 'rocha', id: 12},
  {name: 'ronaldo', id: 13},
  {name: 'neymar', id: 14},
  {name: 'jose', id: 15},
];

export function ScrollComponent(){
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);

  useEffect(() => {
    setUsers(listUsers);
  }, []);

  if (users.length > 0) {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          users.map(user => (
            <View key={user.id} style={styles.item}>
              <Text>{user.name}</Text>
              <Text>{user.id}</Text>
            </View>
          ))
        }
      </ScrollView>
    );
  } else {
    return (
      <View style={styles.item}>
        <Text>não tem lista de usuários</Text>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    padding: 30,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});