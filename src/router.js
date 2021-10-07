import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Fifa from './pages/Detail/fifa';
import Codiw from './pages/Detail/codiw';
import Codwwii from './pages/Detail/codwwii';
import Hzd from './pages/Detail/hzd';
import Mk from './pages/Detail/mk';
import Sod from './pages/Detail/sod';
import Supermario from './pages/Detail/supermario';
import Thewitcher from './pages/Detail/thewitcher';
import Terramedia from './pages/Detail/tm';

const Stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen 
                name="Detail"
                component={Detail}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                 <Stack.Screen 
                name="Fifa"
                component={Fifa}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="codiw"
                component={Codiw}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="codwwii"
                component={Codwwii}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="Hzd"
                component={Hzd}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="Mk"
                component={Mk}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="Sod"
                component={Sod}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="SuperMario"
                component={Supermario}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="thewitcher"
                component={Thewitcher}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
                <Stack.Screen 
                name="TM"
                component={Terramedia}
                options={{
                    headerRight: () => (
                      <TouchableOpacity style={{ marginRight: 15 }}>
                          <Feather
                          name="shopping-cart"
                          size={24}
                          color="black"
                          />
                      </TouchableOpacity>  
                    )
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

