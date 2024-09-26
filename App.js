import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "./screens/MapScreen";
import About from "./screens/About";
import Home from "./screens/Home";

const Tab = createBottomTabNavigator()

export default function App() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="About" component={About}/>
                <Tab.Screen name="Map" component={MapScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}