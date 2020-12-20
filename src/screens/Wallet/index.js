import React from 'react'
import { Image, ScrollView, Text } from 'react-native'

import {
  MaterialCommunityIcons,
  AntDesign,
  Feather,
  SimpleLineIcons
} from '@expo/vector-icons'

import {
  Container,
  Wrapper,
  Header,
  HeaderTitle,
  Option,
  Options,
  OptionTitle,
  Icon,
  StoreContainer,
  StoreContent,
  IconStore,
  StoreTitle,
  StoreDescription
} from './styles'

export default function PayScreen () {
  return (
    <Container>
      <Wrapper>
        <Header>
          <HeaderTitle>Perguntas Frequentes</HeaderTitle>
        </Header>
        <Option>
          <Options>
            <Icon>
              <AntDesign name='phone' size={25} color='#fff' />
            </Icon>
            <OptionTitle>Ligar para a central</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <AntDesign name='message1' size={25} color='#fff' />
            </Icon>
            <OptionTitle>Mandar E-mail</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <AntDesign name='creditcard' size={25} color='#fff' />
            </Icon>
            <OptionTitle>Pague nas maquininhas</OptionTitle>
          </Options>
          <Options>
            <Icon>
              <AntDesign name='message1' size={25} color='#fff' />
            </Icon>
            <OptionTitle>Fazer cobranças</OptionTitle>
          </Options>
        </Option>
        <ScrollView>
          <StoreContainer>
            <IconStore>
              <SimpleLineIcons name='bag' size={25} color='#ef6c00' />
            </IconStore>
            <StoreContent>
              <StoreTitle> O que é o empréstimo consignado? </StoreTitle>
              <StoreDescription>
                O empréstimo consignado é uma modalidade de crédito
                em que as parcelas são descontadas diretamente da
                folha de pagamento do tomador.
              </StoreDescription>
            </StoreContent>
          </StoreContainer>
          <StoreContainer>
            <IconStore>
              <SimpleLineIcons name='bag' size={25} color='#ef6c00' />
            </IconStore>
            <StoreContent>
              <StoreTitle> Quem pode contratar o consignado? </StoreTitle>
              <StoreDescription>
                O Empréstimo consignado está disponível para aposentados e
                pensionistas do INSS, Servidores públicos municipais,
                estaduais e federais e militares das forças armadas.
              </StoreDescription>
            </StoreContent>
          </StoreContainer>
          <StoreContainer>
            <IconStore>
              <SimpleLineIcons name='bag' size={25} color='#ef6c00' />
            </IconStore>
            <StoreContent>
              <StoreTitle> O que é margem consignável? </StoreTitle>
              <StoreDescription>
                A margem consignável é o limite de 35% do seu salário ou aposentadoria,
                que pode ser comprometido com crédito. Sendo 30% para o empréstimo consignado,
                e 5% destinado ao saque no cartão consignado.
              </StoreDescription>
            </StoreContent>
          </StoreContainer>
          <StoreContainer>
            <IconStore>
              <SimpleLineIcons name='bag' size={25} color='#ef6c00' />
            </IconStore>
            <StoreContent>
              <StoreTitle> Quais são os prazos máximos para pagamento do Empréstimo Consignado? </StoreTitle>
              <StoreDescription>
                Atualmente, aposentados e pensionistas do INSS podem parcelar
                o empréstimo em até 84 meses.
                Já servidores púbicos em até 96 meses.
              </StoreDescription>
            </StoreContent>
          </StoreContainer>
        </ScrollView>
      </Wrapper>
    </Container>
  )
}
