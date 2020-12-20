import styled from 'styled-components/native'

export const Container = styled.View`
  background: #fff;
  flex: 1;
`

export const Header = styled.View`
  background: #002e6e;
  justify-content: center;
  height: 50px;
  width: 100%;
  position: absolute;
`

export const Title = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin:0 auto
`

export const Box = styled.ScrollView`
  padding-top:60px;
  margin: 25px 16px;
  border-radius: 8px;
  height: 150px;
  margin-top: 15px;
`

export const NotificationContent = styled.View`
  background: #ef6c00;
  padding: 15px;
  border-radius: 8px;
  height: 120px;
  width: 100%;
`

export const Message = styled.Text`
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
`

export const MessageTime = styled.Text`
  color: #000;
  margin-top: 3%;
  font-size: 12px;
`

export const Divider = styled.View`
  height: 1px;
  width: 91%;
  margin-top:1px;
  margin-left: 4%;
  background: #fff;
`
