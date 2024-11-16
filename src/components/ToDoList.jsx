import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <Text key={index} style={styles.task}>
          {task}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});