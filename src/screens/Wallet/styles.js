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
`

export const HeaderTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin:0 auto
`

export const Option = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false
}))`
  margin-top: 25px;
  margin-bottom:25px
`

export const Wrapper = styled.View``

export const Options = styled.TouchableOpacity`
  background: #ef6c00;
  height: 100px;
  width: 100px;
  border-radius: 5px;
  padding: 0px 10px;
  margin-left: 15px;
`

export const Icon = styled.View`
  padding: 3px 1px;
`

export const OptionTitle = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
  margin-left: 0px;
  margin-top: 15px;
  margin-bottom:55px
`

export const StoreContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 0px 5px;
  border-radius: 8px;
  background: #D4EFFF;
  margin-top: 15px;
  margin-bottom:5px;
  margin-left: 15px;
  width: 92%;
  height: 200px;
`

export const IconStore = styled.View`
  padding: 2px 7px;
`

export const StoreContent = styled.View`
`

export const StoreTitle = styled.Text`
  color: #000;
  font-size: 17px;
  font-weight: bold;
`

export const StoreDescription = styled.Text`
  color: #000;
  margin:0 auto;
  max-height:50%;
  max-width:85%;
  font-size: 14px;
`

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0px 10px;
  border-radius: 8px;
  background: #D4EFFF;
  margin-top: 15px;
  margin-left: 4%;
  width: 92%;
  height: 70px;
`

export const MapContent = styled.TouchableOpacity``
