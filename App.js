import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./HomeScreen/index";
import CatagoryScreen from "./CatagoryScreen/index";
import SummaryScreen from "./SummaryScreen/index";

const App = createStackNavigator(
  {
    HomeScreen: { screen: HomeScreen },
    CatagoryScreen: { screen: CatagoryScreen },
    SummaryScreen: { screen: SummaryScreen }
  },
  {
    initialRouteName: "HomeScreen"
  }
);

export default createAppContainer(App);
