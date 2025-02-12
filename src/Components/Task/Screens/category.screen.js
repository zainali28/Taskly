import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export const CategoryScreen = ({ route }) => {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: category.color }]}>
        {category.title}
      </Text>
      <Text style={styles.taskCount}>{category.tasks?.length} of 10 Tasks</Text>

      <FlatList
        data={category.tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <TouchableOpacity style={styles.checkbox} />
            <Text style={styles.taskText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskCount: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 20,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#10B981",
    marginRight: 10,
  },
  taskText: {
    fontSize: 16,
  },
});
