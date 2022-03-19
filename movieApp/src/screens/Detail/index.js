import { View, Text } from 'react-native'
import React from 'react'
import style from './style'

const Detail = ({route}) => {
  const { params } = route.params;

  return (
    <View style={style.mainPage}>
      <Text>{JSON.stringify(params.idMovie)}</Text>
    </View>
  )
}

export default Detail