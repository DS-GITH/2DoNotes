import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Menu from '../pages/Menu'
import Adding from '../pages/Adding'
import { RootStackParamsList } from './RooStackParamsList'
import ScreenName from '../constants/ScreenName'

const Mainstack = () => {

    const Stack = createNativeStackNavigator<RootStackParamsList>()

  return (
    <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: false }}>

    <Stack.Screen name={ScreenName.Adding} component={Adding} />

    <Stack.Screen name={ScreenName.Menu} component={Menu} />
    </Stack.Navigator>
  )
}

export default Mainstack