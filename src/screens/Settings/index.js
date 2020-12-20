import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import {
  Container,
  Wrapper,
  Profile,
  InfoProfile,
  Title,
  Subtitle,
  Options,
  Option,
  TitleOption,
  SubtitleOption,
  Dividir,
  UseBalance,
  UseBalanceTitle
} from './styles'

import { menus } from '../../services/menuOptions'

export default function SettingsScreen () {
  return (
    <Container>
      <Wrapper>
        <Profile>
          <FontAwesome name='user-circle' size={90} color='#ef6c00' />
          <InfoProfile>
            <Title>@ClienteEmpresta</Title>
            <Subtitle>Cliente Empresta Cotemmig</Subtitle>
          </InfoProfile>
        </Profile>
        <UseBalance>
          <UseBalanceTitle>Meus Dados</UseBalanceTitle>
        </UseBalance>
        <Options>
          {menus.map((menu) => (
            <>
              <Option key={menu.key}>
                <TitleOption>{menu.title}</TitleOption>
                <SubtitleOption>{menu.data}</SubtitleOption>
              </Option>
              <Dividir />
            </>
          ))}
        </Options>
      </Wrapper>
    </Container>
  )
}
