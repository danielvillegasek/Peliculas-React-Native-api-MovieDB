import React from 'react'
import { createStackNavigator, Header } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';

const Stack = createStackNavigator();

export const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown:false, cardStyle: {backgroundColor:'white'}}}

    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

