import React, { useState, useEffect } from 'react'
import { Switch, TextInput, ScrollView, Button } from 'react-native'
import {
  Feather
} from '@expo/vector-icons'
import api from '../../services/api'
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
  const [data, setData] = useState({
    nome: '',
    cpf: '',
    data_nascimento: '',
    mae: '',
    email: '',
    senha: '',
    telefone: '',
    cep: '',
    logradouro: '',
    numero: '',
    cidade: '',
    estado: '',
    matricula: '',
    id_proposta: '',
    fase_proposta: '',
    pendencia: '',
    situacao: '',
    protocolo: '',
    instituicao: '',
    convenio: '',
    servico: '',
    valor_liberado: '',
    valor_parcela: '',
    quantidade_parcela: '',
    data_venda: '',
    responsavel_cancelame: ''
  })

  useEffect(() => {
    api.get().then(response => {
      setData(response.data.result)
      console.log(data.cep)
    })
  }, [])
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
                      <CardTitle>Valor: {data.valor_liberado}</CardTitle>
                      <CardInfo>
                      Parcelas: {data.quantidade_parcela}
                      </CardInfo>
                      <CardInfo>
                      Juros: 3.4% A.M
                      </CardInfo>
                      <CardInfo>
                      Data de Contratação: {data.data_venda}
                      </CardInfo>
                      <CardInfo>
                      Valor da Parcela: {data.valor_parcela}
                      </CardInfo>
                      <CardInfo>
                      Status: {data.situacao}
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
