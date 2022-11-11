import { StackParamsList } from '@app/app-navigation/types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { PrimaryButton } from '@ui/molecules'
import { useContext, useState } from 'react'
import { ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { Context } from '../../store/store'

type TCreateTodoProps = NativeStackScreenProps<StackParamsList, 'createTodo'>

export const CreateTodo = ({ navigation }: TCreateTodoProps) => {
  const [value, setValue] = useState<string>('');

  const { dispatch } = useContext(Context)

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode="on-drag" keyboardShouldPersistTaps="always">
      <View style={styles.root}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
        />

        <PrimaryButton onPress={() => {
          dispatch({ type: 'ADD_TODO', payload: { text: value } })
          navigation.goBack()
        }}>
          Create
        </PrimaryButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    padding: 16
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 100
  }
})

