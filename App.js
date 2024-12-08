import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WeatherScreen from './src/screens/WeatherScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7fa',
  },
});