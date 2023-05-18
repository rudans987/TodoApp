import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Empty = () => {
  return (
    <View style={styles.block}>
      <Image
        source={require('../assets/images/young_and_happy.png')}
        style={styles.image}
      />
      <Text style={styles.desription}>할 일이 없습니다.</Text>
    </View>
  );
};

export default Empty;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  desription: {
    fontSize: 24,
    color: '#9e9e9e',
  },
});
