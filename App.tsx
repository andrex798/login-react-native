import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigator } from './src/navigator/Navigator'
import { AuthProvider } from './src/context/AuthContext'

//maneja el estado de la aplicacion de manera global
const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  )
}

export default App;