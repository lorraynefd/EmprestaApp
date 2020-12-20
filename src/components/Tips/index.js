import React from 'react'

import { Container, Option, Title, Img } from './styles'

import img001 from '../../images/001.png'
import img002 from '../../images/002.png'
import img003 from '../../images/003.png'

const items = [
  {
    key: String(Math.random()),
    img: img001,
    title: 'Menor taxa do mercado com segurança e conforto',
    bgColor: '#F87C43'
  },
  {
    key: String(Math.random()),
    img: img002,
    title: '100% Seguro',
    bgColor: '#F88F43'
  },
  {
    key: String(Math.random()),
    img: img003,
    title: 'Rápido e Digital',
    bgColor: '#F88F43'
  },
  {
    key: String(Math.random()),
    img: img001,
    title: 'Zero burocracia',
    bgColor: '#F88F26'
  },
  {
    key: String(Math.random()),
    img: img003,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#F88F43'
  }
]

export default function Tips () {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img} />
        </Option>
      ))}
    </Container>
  )
}
