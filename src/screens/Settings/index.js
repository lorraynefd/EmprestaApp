import React, { useState, useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import api from '../../services/api'
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

  return (
    <Container>
      <Wrapper>
        <Profile>
          <FontAwesome name='user-circle' size={90} color='#ef6c00' />
          <InfoProfile>
            <Title>{data.nome}</Title>
          </InfoProfile>
        </Profile>
        <UseBalance>
          <UseBalanceTitle>Meus Dados</UseBalanceTitle>
        </UseBalance>
        <Options>
          <Option>
            <TitleOption>Nome</TitleOption>
            <SubtitleOption>{data.nome}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Email</TitleOption>
            <SubtitleOption>{data.email}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Meu Número</TitleOption>
            <SubtitleOption>{data.telefone}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>CPF</TitleOption>
            <SubtitleOption>{data.cpf}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Data de Nascimento</TitleOption>
            <SubtitleOption>{data.data_nascimento}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Nome da Mãe</TitleOption>
            <SubtitleOption>{data.mae}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>CEP</TitleOption>
            <SubtitleOption>{data.cep}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Logradouro</TitleOption>
            <SubtitleOption>{data.logradouro}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Cidade</TitleOption>
            <SubtitleOption>{data.cidade}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Estado</TitleOption>
            <SubtitleOption>{data.estado}</SubtitleOption>
          </Option>
          <Dividir />
          <Option>
            <TitleOption>Convenio</TitleOption>
            <SubtitleOption>{data.convenio}</SubtitleOption>
          </Option>
          <Dividir />
        </Options>
        {/* <Options>
          {menus.map((menu) => (
            <>
              <Option key={menu.key}>
                <TitleOption>{menu.title}</TitleOption>
                <SubtitleOption>{menu.data}</SubtitleOption>
              </Option>
              <Dividir />
            </>
          ))}
        </Options> */}
      </Wrapper>
    </Container>
  )
}
