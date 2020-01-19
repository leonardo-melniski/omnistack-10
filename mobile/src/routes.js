import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main'
import Profile from './pages/Profile'

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevRadar'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil github'
      }
    }
  },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#2f4883',
        },
        headerBackTitleVisible: false,
        headerTintColor: '#fff'
      }
    })
);

export default Routes;