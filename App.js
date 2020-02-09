import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Screen1 from './screens/Screen1'

const loginFlow = createStackNavigator({
  screen1: Screen1,
 
})

const App = createAppContainer(loginFlow)
export default App