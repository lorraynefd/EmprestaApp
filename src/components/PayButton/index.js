import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native'

import { Button } from './styles'

export default function PayButton ({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={
          focused
            ? ['#fff', '#002e6e']
            : ['#002e6e', '#00a4ca']
        }
        start={[1, 0.2]}
      >
        <MaterialIcons
          name='attach-money'
          size={30}
          color={focused ? '#000' : '#fff'}
        />
      </Button>
    </TouchableWithoutFeedback>
  )
}
