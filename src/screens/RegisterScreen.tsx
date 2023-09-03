import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';


interface Props extends StackScreenProps<any, any>{
    
}
//pantalla de registro
export const RegisterScreen = ({navigation}: Props) => {
    const {signUp,errorMessage, removeError} = useContext(AuthContext);

    //hook para el manejo del formulario
    const {email, password, name, onChange,} = useForm({
        email: '',
        password: '',
        name: '',
    });
    //muestra alerta si ocurre algun error
    useEffect(() => {
        if(errorMessage.length === 0) return;
  
        Alert.alert(
          'Inicio de Sesion Fallido', 
          errorMessage,
          [
              {
                  text:'OK',
                  onPress: removeError
              }
          ]
          );
      
      }, [errorMessage])
    //ejecuta la accion registrar
    const onRegister = () => {
        console.log({email, password, name})
        Keyboard.dismiss();
        signUp({
            name,
            email,
            password
        });
    }
    return (
        <>
            
            <KeyboardAvoidingView
                style= {{flex: 1, backgroundColor: '#5856D6'}}
            >
                <View style={loginStyles.formContainer}>
                    {/*camposd el formulario inicio de sesion*/}
                    <Text style={ loginStyles.title }>Registro de usuario</Text>

                    <Text style={ loginStyles.label }>Nombre</Text>
                    <TextInput 
                        placeholder='Ingrese su Nombre'
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        underlineColorAndroid='white'
                        style={
                            loginStyles.inputField
                        }
                        selectionColor="white"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                    />
                    <Text style={ loginStyles.label }>Correo</Text>
                    <TextInput 
                        placeholder='Ingrese correo'
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        keyboardType='email-address'
                        underlineColorAndroid='white'
                        style={
                            loginStyles.inputField
                        }
                        selectionColor="white"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                    />
                    <Text style={ loginStyles.label }>Contraseña</Text>
                    <TextInput 
                        placeholder='********'
                        placeholderTextColor="rgba(255, 255, 255, 0.4)"
                        underlineColorAndroid='white'
                        secureTextEntry
                        style={
                            loginStyles.inputField
                        }
                        selectionColor="white"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                    />
                    {/*boton de registro*/}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                    {/*boton para volver al inicio de sesion*/}
                    <TouchableOpacity
                        onPress={() => navigation.replace('BtnScreen')}
                        activeOpacity={0.8}
                        style={loginStyles.backLogin}
                    >
                        <Text style={loginStyles.buttonText}>Inicio</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
