import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Illustration Image */}
      <Image
        source={{ uri: "https://via.placeholder.com/300" }} // Replace with your actual image
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>To-Do List</Text>

      {/* Description */}
      <Text style={styles.description}>
        Manage your tasks efficiently and stay productive with ease.
      </Text>

      {/* Get Started Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("App", { screen: "Home" })} // Navigate to Home Screen
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F9FD",
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
