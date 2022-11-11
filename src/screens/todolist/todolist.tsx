import React, { useContext } from 'react'
import { StackParamsList } from '@app/app-navigation/types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, FlatList, Image, Pressable, RefreshControl, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import { Context } from '../../store/store'
import { Todo } from '../../types'
import { IconClose } from '@ui/icons'
import { Images } from '@ui/assets'


type Navigation = NativeStackNavigationProp<StackParamsList, 'todolist'>
type TTodolistProps = NativeStackScreenProps<StackParamsList, 'todolist'>

const Separator = () => <View style={styles.separator} />


export const Todolist = ({ navigation, route }: TTodolistProps) => {

  // const navigation = useNavigation<Navigation>()

  const { state, dispatch } = useContext(Context)

  return (
    <View style={styles.root}>
      <FlatList<Todo>
        data={state.todos}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.listItem}>
              <Switch value={item.isCompleted} onChange={() => {
                dispatch({ type: 'TOGGLE_COMPLETED', payload: { id: item.id } })
              }} />
              <Text style={styles.text}>{index + 1}. {item.text}</Text>
              <Pressable style={({ pressed }) => {
                return pressed ? { opacity: 0.3 } : {}
              }} onPress={() => {
                dispatch({ type: 'DELETE_TODO', payload: { id: item.id } })
              }}>
                 <Image source={Images.trash} />
              </Pressable>
            </View>
          )
        }}
        keyExtractor={(item, index) => String(item.id)}
        refreshControl={
          <RefreshControl
            refreshing={false}
            title="Потяните вниз, чтобы обновить"
            onRefresh={() => { }}
          />
        }
        ItemSeparatorComponent={Separator}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  listItem: {
    paddingHorizontal: 16,
    paddingVertical: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  separator: {
    width: '100%',
    height: 2,
    backgroundColor: 'gray'
  },
  text: {
    paddingHorizontal: 10,
    flex: 1,
  }
})

