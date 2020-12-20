import React from 'react'

import {
  Title,
  Container,
  Box,
  Header,
  NotificationContent,
  Message,
  MessageTime,
  Divider
} from './styles'

import { messages } from '../../services/notifications'
export default function NotifiScreen () {
  return (
    <Container>
      <Header>
        <Title>Notificações</Title>
      </Header>
      <Box>
        {messages.map((msg) => (
          <>
            <NotificationContent key={msg.key}>
              <Message>{msg.msg}</Message>
              <MessageTime>{msg.timastamp}</MessageTime>
            </NotificationContent>
            <Divider />
          </>
        ))}
      </Box>
    </Container>
  )
}
