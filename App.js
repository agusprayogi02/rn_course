import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import ColorScreen from './src/Screens/ColorScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={ColorScreen} name="Color" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
