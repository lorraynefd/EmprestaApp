import React from 'react'
import { StyleSheet, Image } from 'react-native'

import {
  Wrapper,
  Container
} from './styles'
import Activities from '../../components/Activities'
import Tips from '../../components/Tips'

export default function HomeScreen () {
  return (
    <Wrapper>
      <Image source={require('../../images/texto-a-melhor-opcao.png')} style={styles.img} />
      <Container>
        <Activities />
        <Tips />
      </Container>
    </Wrapper>
  )
}
const styles = StyleSheet.create({
  img: {
    height: '30%',
    width: '100%'
    // borderBottomLeftRadius: 35,
    // borderBottomRightRadius: 35
  }
})
