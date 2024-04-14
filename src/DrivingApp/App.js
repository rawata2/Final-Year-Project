import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import TheoryTest1 from './screens/TheoryTest1';
import DrivingTest from './screens/DrivingTest';
import FindInstuctors from './screens/FindInstructors';
import TestCentre1 from './screens/TestCentre1';
import PracticeQs from './screens/PracticeQs';
import SidePanel from './screens/SidePanel';

const Stack = createNativeStackNavigator();
const categories = ["Control of Vehicle", "Managing Risk", "Rules of the Road", "Safe and Responsible Driving", "Technical Matters"]


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TheoryTest" component={TheoryTest1} />
        <Stack.Screen name="DrivingTest" component={DrivingTest} />
        <Stack.Screen name="FindInstructors" component={FindInstuctors} />
        <Stack.Screen name="TestCentre" component={TestCentre1} />
        <Stack.Screen name="Practice" component={PracticeQs} initialParams = {{"categories" : categories}} />
        <Stack.Screen name="Practice" component={PracticeQs} initialParams = {{"categories" : categories}} />
        <Stack.Screen name="SidePanel" component={SidePanel} />
      </Stack.Navigator>
    </NavigationContainer>
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


