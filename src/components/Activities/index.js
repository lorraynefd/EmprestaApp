import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date
} from './styles'

export default function Activities () {
  return (
    <Container>
      <Header>
        <Title>Status do Emprestimo</Title>
      </Header>
      <Card>
        <CardHeader>
          <FontAwesome name='user-circle' size={30} color='#ef6c00' />
          <Description>
            <Bold>Olá,  @ClienteEmpresta</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Sua Solicitação ainda esta sendo avaliada</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 5000,00</Value>
            <Divider />
            <Date>Data da solicitação 25/5/2020</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  )
}
