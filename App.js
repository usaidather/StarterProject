import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import LandingScreen from './screens/LandingScreen'
import SignInScreen from './screens/SigninScreen'
import SignUpScreen from './screens/SignupScreen'

const loginFlow = createStackNavigator({
  LandingScreen: LandingScreen,
  SignInScreen: SignInScreen,
  SignUpScreen: SignUpScreen
 
})

const App = createAppContainer(loginFlow)
export default App