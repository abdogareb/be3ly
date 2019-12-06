import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from "./Components/HomePage";
const RootStack = createStackNavigator({
    HomePage: {
        screen: HomePage
      },
  });
  
  const AppNavigator = createAppContainer(RootStack);
  
  export default AppNavigator;