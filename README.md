<h1>Configuracion e instalacion de react-native</h1>

<strong>A tener en cuenta:</strong>
<p>
1. Descargar e instalar android Studio https://developer.android.com/studio
2. Descargar e instalar Chocolatey https://chocolatey.org/ para el manejo de paquetes
2. Descargar e instalar node https://nodejs.org/es
</p>

<strong>Pasos a seguir:</strong>
<p>
1. ejecutar el comando npm install en la raiz del proyecto para instalar las dependencias </br>
2. ejecutar el comando npx react-native run-android </br>
3. esperar a que el emulador que se tenga configurado inicie la aplicacion</br>
4. levantar el backend contruido en laravel, seguir las instrucciones en la carpeta del proyecto</br>
5. configurar los datos del endpoint que se encuentra en el archivo src/api/authApi.js, solo se debe cambiar la linea 
const baseURL = 'http://192.168.0.3/prueba/public/api'; cambiando la ip por la de la maquina en donde se encuentre el backend</br>
6. la aplicacion tiene las siguientes funcionalidades a probar:</br>
    *registro de usuarios</br>
    *login de usuarios registrados</br>
    *muestra de datos del usuarios una vez se inicia sesion</br>
    *cerrar sesion
</p>