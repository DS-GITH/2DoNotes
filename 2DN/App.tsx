import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './src/pages/Menu';
import Adding from './src/pages/Adding';

export default function App() {
  return (
    <View style={styles.container}>
      <Adding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
