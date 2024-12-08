import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WeatherCard({ city, temperature, description }) {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{city}</Text>
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796b',
  },
  temperature: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#f4511e',
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});