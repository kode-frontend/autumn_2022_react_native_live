import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreateTodo } from '../../screens/create-todo';
import { Todolist } from '../../screens/todolist';

import { StackParamsList, TabsParamsList } from './types';
import { IconBankAccount, IconSettings } from '@ui/icons';
import { AddTodoButton } from '@app/ui/add-todo-button';


const Stack = createNativeStackNavigator<StackParamsList>()


const HomeScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="todolist" component={Todolist} options={{
        headerRight: () => <AddTodoButton/>
      }} />
      <Stack.Screen name="createTodo" component={CreateTodo} options={({ navigation, route }) => ({
        headerTitle: 'Create ToDo',
      })} />
    </Stack.Navigator>
  )
}



const Tabs = createBottomTabNavigator<TabsParamsList>()

export const AppNavigation = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="home" options={{ headerTitle: 'Home', headerShown: false, tabBarIcon: ({ color }) => <IconBankAccount color={color} /> }} component={HomeScreenNavigator} />
      <Tabs.Screen name="settings" options={{ headerTitle: 'Settings', tabBarIcon: ({ color }) => <IconSettings color={color} /> }} >
        {
          () => (
            <View style={styles.root}>
              <Text>Settings</Text>
            </View>
          )
        }
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
