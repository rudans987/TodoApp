/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';

function App() {
  const today = new Date();
  console.log(today);
  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <DateHead date={today} />
      <Empty />
      <AddTodo />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  block: {flex: 1},
});
