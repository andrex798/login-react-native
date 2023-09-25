import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { BtnScreen } from '../screens/BtnScreen';

const Stack = createNativeStackNavigator();

//configuracion de la navegacion y las diferentes pantallas utilizadas en el sistema
export const Navigator = () => {

  const {status} = useContext(AuthContext);

  if( status == 'Revisando') return <LoadingScreen />

  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor:'white'
            }
        }}
    >
      {
        (status === 'Autenticado')
        ? (
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        )
        :
        (
          <>
            <Stack.Screen name="BtnScreen" component={BtnScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )
      }
        
        
    </Stack.Navigator>
  )
}
