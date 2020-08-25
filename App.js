import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import PlayerScreen from "./src/screens/PlayerScreen";
import LeadersScreen from './src/screens/LeadersScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Player: PlayerScreen,
    Leaders: LeadersScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "PlateVision"
    }
  }
);

export default createAppContainer(navigator);
