import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TasksScreen } from "../../Components/Task/Screens/tasks.screen";
// import ProfileScreen from "./ProfileScreen"; // Placeholder for future screens
// import SettingsScreen from "./SettingsScreen"; // Placeholder for future screens
import { AddTaskScreen } from "../../Features/Tasks/add-task-screen.feature";
import { TaskNavigator } from "./task.navigator";

const Tab = createBottomTabNavigator();

export const BottomTabs = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
    >
      {/* Tasks Tab */}
      <Tab.Screen
        name="Home"
        component={TaskNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Placeholder Profile Tab */}
      <Tab.Screen
        name="Profile"
        component={() => null}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      {/* Floating Add Button */}
      <Tab.Screen
        name="AddTask"
        component={AddTaskScreen}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity
              {...props}
              style={{
                top: -20,
                backgroundColor: "#007AFF",
                borderRadius: 30,
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#007AFF",
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 10,
              }}
              onPress={() => navigation.navigate("AddTask")}
            >
              <Ionicons name="add" size={32} color="white" />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Placeholder Settings Tab */}
      <Tab.Screen
        name="Settings"
        component={() => null}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
