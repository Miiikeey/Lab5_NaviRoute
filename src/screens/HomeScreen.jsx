import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

function HomeScreen({ navigation }) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
      ]);

    const [warning, setWarning] = useState('');

    const addTask = (taskText) => {
      if (tasks.includes(taskText)) {
        setWarning('Task already exists');
        return;
      }
      setTasks([...tasks, taskText]);
      setWarning('');
    };

    return (
        <SafeAreaView style={styles.container}>
          {warning ? (
              <View style={styles.warning}>
              <Text style={styles.warningText}>{warning}</Text>
            </View>
          ) : null}
          <ToDoList tasks={tasks} />
          <ToDoForm addTask={addTask} />

        <Button
            title="Go to About"
            onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f9fa',
    },
    warning: {
      padding: 10,
      backgroundColor: '#ffcccc',
      marginBottom: 10,
      borderRadius: 5,
    },
    warningText: {
      color: '#cc0000',
    },
    });

export default HomeScreen;