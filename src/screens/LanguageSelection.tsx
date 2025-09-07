import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const LanguageScreen = () => {
  const languages = [
    {
      id: 1,
      country: "US",
      name: "English",
      subtitle: "English Language",
    },
    {
      id: 2,
      country: "IN",
      name: "हिंदी",
      subtitle: "हिंदी भाषा",
    },
    {
      id: 3,
      country: "IN",
      name: "मराठी",
      subtitle: "मराठी भाषा",
    },
  ];

  const handleSelect = (lang) => {
    console.log("Selected:", lang);
    // yaha navigation ya state set kar sakte ho
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Gradient Header */}
      <LinearGradient
        colors={["#16a34a", "#2563eb"]}
        style={styles.header}
      >
        <Ionicons name="language-outline" size={40} color="#fff" />
        <Text style={styles.headerTitle}>Choose Your Language</Text>
        <Text style={styles.headerSubtitle}>
          अपनी भाषा चुनें | तुमची भाषा निवडा
        </Text>
      </LinearGradient>

      {/* Language Cards */}
      <View style={styles.cardWrapper}>
        {languages.map((lang) => (
          <TouchableOpacity
            key={lang.id}
            style={styles.card}
            onPress={() => handleSelect(lang.name)}
          >
            <Text style={styles.country}>{lang.country}</Text>
            <Text style={styles.lang}>{lang.name}</Text>
            <Text style={styles.subtitle}>{lang.subtitle}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.note}>
        You can change the language anytime during the conversation
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0fdf4",
    paddingBottom: 20,
  },
  header: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: 30,
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
    marginTop: 8,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#e5e7eb",
    marginTop: 4,
  },
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    width: "30%",
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  country: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 6,
    color: "#111827",
  },
  lang: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
  },
  subtitle: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 4,
    textAlign: "center",
  },
  note: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
    color: "#6b7280",
  },
});

export default LanguageScreen;
