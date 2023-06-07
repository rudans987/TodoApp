/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import DateHead from './components/DateHead';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';

function App() {
  const today = new Date();
  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두리스트 만들어보기', done: false},
  ]);
  const onInsert = text => {
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {id: nextId, text, done: false};
    setTodos(todos.concat(todo));
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.block}>
      <KeyboardAvoidingView
        behavior={Platform.select({ios: 'padding'})}
        style={styles.avoid}>
        <DateHead date={today} />
        {todos.length === 0 ? <Empty /> : <TodoList todos={todos} />}
        <AddTodo onInsert={onInsert} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});
