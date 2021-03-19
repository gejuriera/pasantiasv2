import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Account from './Account'
import TopRooms from './TopRooms'
import MetodoDePago from './MetodoDePago'
import DetallesReserva from './DetallesReserva'

const Tab = createBottomTabNavigator()

export default function Perfil (){
    return(
    
            <Tab.Navigator>
                <Tab.Screen
                    name="Cuenta"
                    component={Account}

                />
                

                <Tab.Screen
                    name="Rooms"
                    component={TopRooms}

                />

                <Tab.Screen
                    name="Metodos de Pago"
                    component={MetodoDePago}
                    

                />

                <Tab.Screen
                    options={{ title: "Detalles reserva" }}
                    name="Reservas"
                    component={DetallesReserva}

                />

                

            </Tab.Navigator>
        
    )
}

