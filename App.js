import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AddTaskScreen } from "./src/Features/Tasks/add-task-screen.feature";
import { CategoryScreen } from "./src/Components/Task/Screens/category.screen";
import { MainScreen } from "./src/Components/Main/Screens/main.screen";
import { BottomTabs } from "./src/Infrastructure/Navigation/bttom-tabs.navigator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="App" component={BottomTabs} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
