import React from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { loginStyles } from '../theme/loginTheme'
import { Background } from '../components/Background'

//pantalla inicial del aplicativo
export const BtnScreen = ({navigation}) => {
  return (
    <>
        <Background />
        <View style={{
            flexDirection: 'column',
            //flexWrap: 'wrap',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={loginStyles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.button}
                    onPress={ () => navigation.replace('LoginScreen') }
                >
                    <Text style={loginStyles.buttonText}>Iniciar</Text>
                </TouchableOpacity>
            </View>

            <View style={loginStyles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.button}
                    onPress={ () => navigation.replace('RegisterScreen') }
                >
                    <Text style={loginStyles.buttonText}>Registro</Text>
                </TouchableOpacity>
            </View>

            <View style={loginStyles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={loginStyles.button}
                    onPress={ () => {
                        Alert.alert(
                            'Alerta', 
                            'Seccion no construida',
                            [
                                {
                                    text:'OK',
                                }
                            ]
                            );
                    } }
                >
                    <Text style={loginStyles.buttonText}>Editar perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    </>
   
  )
}
