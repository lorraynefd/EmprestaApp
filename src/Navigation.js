import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, Ionicons } from '@expo/vector-icons'

import PayButton from './components/PayButton'

import HomeScreen from './screens/Home'
import WalletScreen from './screens/Wallet'
import PayScreen from './screens/Pay'
import NotifiScreen from './screens/Notifications'
import SettingsScreen from './screens/Settings'

const Tab = createBottomTabNavigator()

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },
  Wallet: {
    lib: Ionicons,
    name: 'ios-help-circle-outline'
  },
  Notifications: {
    lib: Ionicons,
    name: 'ios-notifications-outline'
  },
  Settings: {
    lib: Ionicons,
    name: 'ios-person'
  }
}

export default function Navigation () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === 'Pay') {
            return (
              <PayButton
                onPress={() => navigation.navigate('Pay')}
                focused={focused}
              />
            )
          }

          const { lib: Icon, name } = icons[route.name]
          return <Icon name={name} size={size} color={color} />
        }
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#002E6E',
          borderTopColor: 'rgba(255, 255, 255, 0.2)'
        },
        activeTintColor: '#ffff',
        inactiveTintColor: '#C8D6DE'
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          title: 'Início'
        }}
      />

      <Tab.Screen
        name='Wallet'
        component={WalletScreen}
        options={{
          title: 'Duvidas'
        }}
      />

      <Tab.Screen
        name='Pay'
        component={PayScreen}
        options={{
          title: ''
        }}
      />

      <Tab.Screen
        name='Notifications'
        component={NotifiScreen}
        options={{
          title: 'Notificações'
        }}
      />

      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: 'Perfil'
        }}
      />
    </Tab.Navigator>
  )
}
