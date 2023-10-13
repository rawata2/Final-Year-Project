import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { Link } from 'expo-router';

export default function App() {
  const [colourChange, setColourChange] = useState(true)
  return (
    <View style={colourChange ? styles.container : styles.change}>
      <Text style={colourChange ? styles.black : styles.white} onPress={() => setColourChange(!colourChange)}>Driving App</Text>
      <Link href="/">Start</Link>
      <StatusBar style="auto" />
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
  change: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
  },
  black: {
    color: 'black',
  },
});


