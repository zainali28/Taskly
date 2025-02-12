import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export const EditTasksScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(["Example Task 1", "Example Task 2"]);

  const addTask = () => {
    setTasks([...tasks, "New Task"]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TextInput style={styles.input} defaultValue={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  addButtonText: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
});
