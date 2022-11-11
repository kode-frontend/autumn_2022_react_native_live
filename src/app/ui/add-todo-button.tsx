import { StackParamsList } from '@app/app-navigation/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { IconAddPlus } from '@ui/icons'
import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

type TAddTodoButtonProps = {}

type Navigation = NativeStackNavigationProp<StackParamsList, 'todolist'>

export const AddTodoButton = ({}: TAddTodoButtonProps) => {

  const navigation = useNavigation<Navigation>()

  return (
    <TouchableOpacity style={styles.root} onPress={() => {
      navigation.navigate('createTodo')
    }}>
      <IconAddPlus color='blue' />
    </TouchableOpacity>
  )
}

const styles= StyleSheet.create({
  root: {
    paddingHorizontal: 16,

  }
})
