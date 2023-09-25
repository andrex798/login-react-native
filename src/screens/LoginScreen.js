import React, { useContext, useEffect } from 'react'
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Keyboard, Alert } from 'react-native'
import { Background } from '../components/Background'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { AuthContext } from '../context/AuthContext'


{/* navigation se encarga de tener las propiedades necesarias para navegar hacia otras pantallas */}
export const LoginScreen = ({navigation}) => {
    const {signIn, errorMessage, removeError} = useContext(AuthContext)
    {/* llama al hook para el manejo y envio de formularios */}
    const {email, password, onChange} = useForm({
        email: '',
        password: ''
    });

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
    
    //ejecuta el inicio de sesion
    const onLogin = () => {
        console.log({email, password})
        Keyboard.dismiss();
        signIn({email, password});
    }
    return (
        <>
            {/*estilo del fondo del formulario*/}
            <Background />
            <KeyboardAvoidingView
                style= {{flex: 1}}
            >
                <View style={loginStyles.formContainer}>
                    {/*camposd el formulario inicio de sesion*/}
                    <Text style={ loginStyles.title }>Inicio de Sesion</Text>
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
                    {/*boton de inicio de sesion*/}
                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>Iniciar</Text>
                        </TouchableOpacity>
                    </View>
                    {/*boton de registro*/}
                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={ () => navigation.replace('RegisterScreen') }
                        >
                            <Text style={loginStyles.buttonText}>Registro</Text>
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
