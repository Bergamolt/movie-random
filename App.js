import { createNativeStackNavigator } from 'react-native-screens/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from './src/screens/home'
import { Film } from './src/screens/film'

const Slack = createNativeStackNavigator()

const options = {
  HOME: { title: 'КиноРандом' },
}

export default function App() {
  return (
    <NavigationContainer>
      <Slack.Navigator>
        <Slack.Screen name="Home" component={ Home } options={ options.HOME }/>
        <Slack.Screen name="Film" component={ Film }/>
      </Slack.Navigator>
    </NavigationContainer>
  )
}