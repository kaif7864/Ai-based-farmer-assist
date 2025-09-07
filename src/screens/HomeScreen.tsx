import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Animated, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../../components/Card";
import Footer from "./Footer";
import FarmingSolution from "./FarmingSolution";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("home");

  const move1 = useRef(new Animated.Value(0)).current;
  const move2 = useRef(new Animated.Value(0)).current;
  const move3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(move1, { toValue: -20, duration: 2000, useNativeDriver: true }),
        Animated.timing(move1, { toValue: 0, duration: 2000, useNativeDriver: true }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(move2, { toValue: 20, duration: 2500, useNativeDriver: true }),
        Animated.timing(move2, { toValue: -20, duration: 2500, useNativeDriver: true }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(move3, { toValue: -15, duration: 3000, useNativeDriver: true }),
        Animated.timing(move3, { toValue: 15, duration: 3000, useNativeDriver: true }),
      ])
    ).start();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#1B5E20", "#4CAF50", "#81C784"]} style={styles.container}>
        {/* Floating circles */}
        <Animated.View style={[styles.circle, styles.circleGreen, { transform: [{ translateY: move1 }] }]} />
        <Animated.View style={[styles.circle, styles.circleBlue, { transform: [{ translateX: move2 }] }]} />
        <Animated.View style={[styles.circle, styles.circleYellow, { transform: [{ translateY: move3 }] }]} />

        <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
          {/* Header */}
          <View style={styles.header}>
            <Ionicons name="leaf-outline" size={28} color="#fff" />
            <Text style={styles.headerText}>DigiShivar AI</Text>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.title}>Your Smart Farming Companion</Text>
            <Text style={styles.subtitle}>Anytime, Anywhere</Text>
            <Text style={styles.description}>
              Empowering farmers with AI-driven crop advisory, real-time weather insights,
              pest diagnosis, market prices, and sustainable farming practices across India.
            </Text>
          </View>

          {/* Buttons */}
          <TouchableOpacity style={styles.primaryButton} onPress={() => alert("AI Farming Advice Coming Soon...")}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#fff" />
            <Text style={styles.primaryButtonText}> Get AI Farming Advice</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.secondaryButton} onPress={() => alert("Videos Page Coming Soon...")}>
            <Ionicons name="play-circle-outline" size={20} color="#fff" />
            <Text style={styles.secondaryButtonText}> Watch Farming Videos</Text>
          </TouchableOpacity>

          {/* Cards */}
          <Card icon="flash-outline" title="Real-time AI Support" description="Get instant answers to your farming questions with advanced AI technology" />
          <Card icon="flash-outline" title="Community Driven" description="Connect with fellow farmers and agricultural experts nationwide" />
          <Card icon="flash-outline" title="Weather Updates" description="Stay ahead with real-time weather and climate insights" />

          <FarmingSolution />
        </ScrollView>
      </LinearGradient>

      {/* Footer */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  circle: { position: "absolute", borderRadius: 9999, opacity: 0.25 },
  circleGreen: { top: 100, left: 50, width: 120, height: 120, backgroundColor: "rgba(74, 222, 128, 0.4)" },
  circleBlue: { top: 200, right: 60, width: 90, height: 90, backgroundColor: "rgba(96, 165, 250, 0.4)" },
  circleYellow: { bottom: 150, left: 80, width: 70, height: 70, backgroundColor: "rgba(250, 204, 21, 0.4)" },
  header: { flexDirection: "row", alignItems: "center", padding: 15 },
  headerText: { color: "#fff", fontSize: 18, fontWeight: "bold", marginLeft: 10 },
  heroSection: { padding: 20 },
  title: { fontSize: 26, fontWeight: "bold", color: "#fff" },
  subtitle: { fontSize: 18, fontWeight: "600", color: "#FFEB3B", marginVertical: 5 },
  description: { fontSize: 14, color: "#fff", marginTop: 10, lineHeight: 20 },
  primaryButton: { flexDirection: "row", alignItems: "center", backgroundColor: "#2E7D32", padding: 15, borderRadius: 10, marginHorizontal: 20, marginTop: 10, justifyContent: "center" },
  primaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  secondaryButton: { flexDirection: "row", alignItems: "center", borderColor: "#fff", borderWidth: 1, padding: 15, borderRadius: 10, marginHorizontal: 20, marginTop: 10, justifyContent: "center" },
  secondaryButtonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});

export default HomeScreen;
