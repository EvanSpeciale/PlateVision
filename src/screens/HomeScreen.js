import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Welcome to</Text>
      <Text style={styles.text}>PlateVision</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Player')}>
        <Text style={styles.button}>Player Page</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Leaders')}>
        <Text style={styles.button}>Leaders Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 24,
    backgroundColor: '#001427'
  },
  text: {
    fontSize: 30,
    color: '#f4d58d',
    fontWeight: 'bold'
  },
  button: {
    marginVertical: 5,
    fontSize: 20,
    color: '#bf0603'
  }
});

export default HomeScreen;
