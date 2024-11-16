import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainLayout from '../layouts/MainLayout';

function AboutScreen() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.text}>App Name: To Do</Text>
      <Text style={styles.text}>Your Name: Mike</Text>
      <Text style={styles.text}>Current Date: {currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;