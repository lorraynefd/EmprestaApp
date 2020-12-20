import React, { useState } from 'react'
import { Switch, TextInput, ScrollView, Button } from 'react-native'
import {
  Feather
} from '@expo/vector-icons'

import {
  Wrapper,
  Container,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  UseBalance,
  UseBalanceTitle,
  PaymentMethod,
  PaymentMethodTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  CardInput,
  CardBody
} from './styles'

export default function WalletScreen () {
  const [isVisible, setIsVisible] = useState(true)
  const [useBalance, setUseBalance] = useState(false)

  function hanldeToggleVisibility () {
    setIsVisible((prevstate) => !prevstate)
  }

  function handleToggleUseBalance () {
    setUseBalance((prevstate) => !prevstate)
  }

  return (
    <Wrapper>
      <Container>
        <Header
          colors={['#C8D6DE', '#002E6E']}
        >
          <HeaderContainer>
            <Title>Valor Do Emprestimo</Title>
            <BalanceContainer>
              <Value>
                R$ <Bold>{isVisible ? '122,500.23' : '----'}</Bold>
              </Value>
              <EyeButton onPress={hanldeToggleVisibility}>
                <Feather
                  name={isVisible ? 'eye' : 'eye-off'}
                  size={28}
                  color='#fff'
                />
              </EyeButton>
            </BalanceContainer>
            <Info>Aqui o seu dinheiro esta seguro</Info>
          </HeaderContainer>
        </Header>
        <UseBalance>
          <UseBalanceTitle>Solicitar Emprestimo</UseBalanceTitle>
          <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
        </UseBalance>
        {useBalance == false
          ? (
              <>
                <PaymentMethod>
                  <PaymentMethodTitle>Dados do Emprestimo</PaymentMethodTitle>
                </PaymentMethod>
                <Card>
                  <CardBody>
                    <CardDetails>
                      <CardTitle>Valor: 122,500.23</CardTitle>
                      <CardInfo>
                      Parcelas: 12x
                    </CardInfo>
                      <CardInfo>
                      Juros: 3.4% A.M
                    </CardInfo>
                      <CardInfo>
                      Data de Contratação: 12/05/2020
                    </CardInfo>
                      <CardInfo>
                      Previsão da Finalização: 12/05/2021
                    </CardInfo>
                      <CardInfo>
                      Status: Aprovado
                    </CardInfo>
                    </CardDetails>
                  </CardBody>
                </Card>
              </>
            )
          : (
              <>
                <ScrollView>
                  <PaymentMethod>
                    <PaymentMethodTitle>Valor do Emprestimo</PaymentMethodTitle>
                  </PaymentMethod>
                  <CardInput>
                    <CardBody>
                      <TextInput
                        style={{ height: 15 }}
                        placeholder='valor'
                      />
                    </CardBody>
                  </CardInput>
                  <PaymentMethod>
                    <PaymentMethodTitle>Numero de Parcelas</PaymentMethodTitle>
                  </PaymentMethod>
                  <CardInput>
                    <CardBody>
                      <TextInput
                        style={{ height: 15 }}
                        placeholder='Parcelas'
                      />
                    </CardBody>
                  </CardInput>
                  <PaymentMethod>
                    <PaymentMethodTitle>Data Inicial</PaymentMethodTitle>
                  </PaymentMethod>
                  <CardInput>
                    <CardBody>
                      <TextInput
                        style={{ height: 15 }}
                        placeholder='Data'
                      />
                    </CardBody>
                  </CardInput>
                  <PaymentMethod>
                    <PaymentMethodTitle>Salario Bruto Atual</PaymentMethodTitle>
                  </PaymentMethod>
                  <CardInput>
                    <CardBody>
                      <TextInput
                        style={{ height: 15 }}
                        placeholder='Salario'
                      />
                    </CardBody>
                  </CardInput>
                  <Button
                    title='Contratar'
                    color='#ef6c00'
                    accessibilityLabel='Learn more about this purple button'
                  />
                </ScrollView>
              </>
            )}
        {/*
        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons
              name='ticket-outline'
              size={20}
              color='#002e6e'
            />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer> */}
      </Container>
    </Wrapper>
  )
}
