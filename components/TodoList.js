import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
    <FlatList
      // ItemSeparatorComponent=아이템 사이사이 스타일(구분선같은)을 줄 수 있는 props
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      data={todos}
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default TodoList;

const styles = StyleSheet.create({
  list: {flex: 1},
  separator: {backgroundColor: '#e0e0e0', height: 1},
});
