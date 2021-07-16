import React from 'react'
import { createStackNavigator, Header } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/responseMovieDB';


export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}

    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
}

