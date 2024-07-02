import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginCadastro from '../../views/LoginCadastro';
import LoginView from '../../views/Login';
import Cadastro from '../../views/Cadastro';
import EsqueceuSenha from '../../views/EsqueceuSenha';
import CodigoValidacaoEmail from '../../views/CodigoValidacaoEmail';
import CadastroConfirmacao from '../../views/Cadastro/Tabs';
import TelaInicial from '../../views/TelaInicial';

const Stack = createStackNavigator();

function LoginViewmodels() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="LoginCadastro">

        <Stack.Screen 
          name="LoginCadastro" 
          component={LoginCadastro} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />

        <Stack.Screen 
          name="LoginView" 
          component={LoginView} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />

        <Stack.Screen 
            name="Cadastro" 
            component={Cadastro} 
            options={{ 
              title: '', 
              headerTransparent: true,
              headerShown: false, 
            }}
        />  
        
        <Stack.Screen 
          name="EsqueceuSenha" 
          component={EsqueceuSenha} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />

        <Stack.Screen 
          name="CodigoValidacaoEmail" 
          component={CodigoValidacaoEmail} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />

        <Stack.Screen
          name="CadastroConfirmacao"
          component={CadastroConfirmacao}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false, 
          }}
        />

        <Stack.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{
            title: '',
            headerTransparent: true,
            headerShown: false, 
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default LoginViewmodels;