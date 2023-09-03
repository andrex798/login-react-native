import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { Background } from '../components/Background'
import { profileStyles } from '../theme/profileTheme'
import { AuthContext } from '../context/AuthContext'

export const ProfileScreen = () => {

  const {user, token, logout} =  useContext(AuthContext);

  return (        
        <View style={profileStyles.container}>

          <Button
            title='Salir'
            color='#5856D6'
            onPress={logout}
          />

          <Text>
            {JSON.stringify(user, null, 5)}
          </Text>

          <Text>
            {token}
          </Text>
        </View>
    
  )
}
