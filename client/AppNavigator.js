import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from "./Components/HomePage";
import BuyingForm from "./Components/buyingForm";
import MapComp from "./Components/mapComp";
const RootStack = createStackNavigator({
    HomePage: {
        screen: HomePage
      },
      BuyingForm: {
        screen: BuyingForm
      },
      MapComp:{
        screen:MapComp
      }
  });
  
  const AppNavigator = createAppContainer(RootStack);
  
  export default AppNavigator;