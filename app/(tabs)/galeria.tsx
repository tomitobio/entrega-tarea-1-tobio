import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    const DATA = [
    { id: '1', title: 'Imagen 1' },
    { id: '2', title: 'Imagen 2' },
    { id: '3', title: 'Imagen 3' }, 
    ]
    
    type ItemProps = {title: string};
    const Item = ({title}: ItemProps) => (
        <View style={styles.cardBox}>
        <Text style={styles.cardText}>{title}</Text>
        </View>
    );
  return (
    <View style={styles.titleContainer}>
        <FlatList data={DATA} 
        renderItem={({item}) => <Item title={item.title}/>} 
        keyExtractor={item => item.id}/>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  cardBox: {
    marginTop: 30,
    padding: 20,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ececec', 
  },
  cardText: {
    fontSize: 20,
    color: 'black',
  },
});
