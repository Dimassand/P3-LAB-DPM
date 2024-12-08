import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import WeatherCard from '../components/WeatherCard';

export default function WeatherScreen() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState([]);

  const weatherDatabase = {
    "Jakarta": { temperature: 30, description: "Cerah Berawan" },
    "Bandung": { temperature: 25, description: "Hujan Ringan" },
    "Surabaya": { temperature: 32, description: "Cerah" },
    "Yogyakarta": { temperature: 28, description: "Berawan" },
  };

  const searchWeather = () => {
    if (weatherDatabase[city]) {
      const { temperature, description } = weatherDatabase[city];
      setWeatherData([{ city, temperature, description }]);
    } else {
      setWeatherData([]);
    }
    setCity('');
  };

  return (
    <View style={styles.container}>
      <Header title="Weather App" />
      <TextInput
        style={styles.input}
        placeholder="Masukkan nama kota"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Cari Cuaca" onPress={searchWeather} />
      <FlatList
        data={weatherData}
        renderItem={({ item }) => (
          <WeatherCard
            city={item.city}
            temperature={item.temperature}
            description={item.description}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
});
