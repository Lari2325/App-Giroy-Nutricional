import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TelaInicialView from '../../views/TelaInicial';
import ListaComprasView from '../../views/ListaCompras';
import NavBarView from '../../views/NavBar';

const Tab = createBottomTabNavigator();

function BottomTabNavigatorComponent() {
  return (
      <Tab.Navigator>
        
        <Tab.Screen 
          name="Tela inicial" 
          component={TelaInicialView} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />
        <Tab.Screen 
          name="Lista compras" 
          component={ListaComprasView} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />

        <Tab.Screen 
          name="Navbar" 
          component={NavBarView} 
          options={{ 
            title: '', 
            headerTransparent: true,
            headerShown: false, 
          }}
        />

      </Tab.Navigator>
  );
}

export default BottomTabNavigatorComponent;