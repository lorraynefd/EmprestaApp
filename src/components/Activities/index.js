import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import api from '../../services/api'
import messaging from '@react-native-firebase/messaging'
import { Alert } from 'react-native'

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
  function App () {
    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert('O seu emprestimo foi liberado', JSON.stringify(remoteMessage))
      })

      return unsubscribe
    }, [])
  }

  async function requestUserPermission () {
    const authStatus = await messaging().requestPermission()
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
      console.log('Authorization status:', authStatus)
    }
  }
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
    requestUserPermission()
    api.get().then(response => {
      setData(response.data.result)
      console.log(data.cep)
    })
  }, [])

  return (
    <Container>
      <Header>
        <Title>Status do Emprestimo</Title>
      </Header>
      <Card>
        <CardHeader>
          <FontAwesome name='user-circle' size={30} color='#ef6c00' />
          <Description>
            <Bold>Olá,  {data.nome}</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>O status do seu emprestimo é {data.situacao}</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ {data.valor_parcela}</Value>
            <Divider />
            <Date>Data da Venda {data.data_venda}</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  )
}
