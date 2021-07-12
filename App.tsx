import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './src/navigation/StackNav'
import { View } from 'react-native'

const App = () => {
  return (

    <NavigationContainer>
      
        <StackNav />
      
    </NavigationContainer >

  )
}

export default App

