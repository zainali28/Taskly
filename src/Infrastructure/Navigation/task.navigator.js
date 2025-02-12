import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { TasksScreen } from "../../Components/Task/Screens/tasks.screen";
import { CategoryScreen } from "../../Components/Task/Screens/category.screen";
import { EditTasksScreen } from "../../Features/Tasks/edit-tasks-screen.feature";

const Stack = createStackNavigator();

export const TaskNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tasks" component={TasksScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="EditTasks" component={EditTasksScreen} />
    </Stack.Navigator>
  );
};
