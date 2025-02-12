import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const categories = [
  {
    title: "Inspiration",
    color: "#FECACA",
    tasks: ["Read a book", "Watch a documentary"],
  },
  {
    title: "Travel Plans",
    color: "#E0E7FF",
    tasks: ["Book flight", "Plan itinerary"],
  },
  { title: "Work", color: "#FDE68A", tasks: ["Finish project", "Send emails"] },
  {
    title: "Groceries",
    color: "#A7F3D0",
    tasks: ["Avocados", "Onions", "Tomatoes"],
  },
];

export const TasksScreen = ({ navigation }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [animatedHeights, setAnimatedHeights] = useState(
    categories.map(() => new Animated.Value(80)) // Default height
  );

  const toggleExpand = (index) => {
    const isExpanded = expandedIndex === index;
    setExpandedIndex(isExpanded ? null : index);

    Animated.timing(animatedHeights[index], {
      toValue: isExpanded ? 80 : 180, // Expand smoothly
      duration: 300,
      useNativeDriver: false, // ✅ Fix: Height animation must use JS driver
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Tasks</Text>
        <TouchableOpacity onPress={() => navigation.navigate("EditTasks")}>
          <Ionicons name="pencil-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>Create your categorized task boards.</Text>

      {/* Task Categories */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => toggleExpand(index)}
            activeOpacity={0.8}
          >
            <Animated.View
              style={[
                styles.card,
                {
                  backgroundColor: category.color,
                  maxHeight: animatedHeights[index],
                },
              ]}
            >
              <Text style={styles.cardTitle}>{category.title}</Text>
              {expandedIndex === index && (
                <View style={styles.taskList}>
                  {category.tasks.map((task, i) => (
                    <Text key={i} style={styles.taskItem}>
                      • {task}
                    </Text>
                  ))}
                </View>
              )}
            </Animated.View>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 28, fontWeight: "bold" },
  subtitle: { fontSize: 16, color: "#6B7280", marginBottom: 20 },
  card: { padding: 20, borderRadius: 15, marginBottom: 15, overflow: "hidden" },
  cardTitle: { fontSize: 20, fontWeight: "bold" },
  taskList: { marginTop: 10 },
  taskItem: { fontSize: 14, color: "#4B5563", marginVertical: 3 },
});
