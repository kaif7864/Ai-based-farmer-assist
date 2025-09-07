import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import FarmingCard from "../../components/FarmingCard";
import AboutScreen from "../screens/AboutScreen";

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("home");

  // Sample farming cards data
  const farmingCards = [
  { id: "1", title: "Crop Planning", description: "Plan your crops according to season and soil type.", icon: "leaf-outline" },
  { id: "2", title: "Soil Health", description: "Monitor and maintain your soil for better yield.", icon: "analytics-outline" },
  { id: "3", title: "Water Management", description: "Efficient irrigation techniques for your farm.", icon: "water-outline" },
  { id: "4", title: "Market Prices", description: "Check live market prices for your crops.", icon: "cash-outline" },
  { id: "5", title: "Weather Forecast", description: "Get accurate weather predictions for farming.", icon: "cloud-outline" },
];

  return (
    <View style={{ flex: 1, backgroundColor: "#f9fdf9ff" }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50, paddingTop: 20 }}> 
       
        {/* Hero Section */}
                 <View style={styles.heroSection}>
                   <Text style={styles.subtitle}>Complete Solutions</Text>
                   <Text style={styles.title}>Complete Farming Solutions</Text>
                   <Text style={styles.description}>
                     From seed to harvest, DigiShivar AI provides comprehensive support for every aspect of modern agriculture
                   </Text>
                 </View>
        {farmingCards.map((item) => (
    <FarmingCard
  key={item.id}
  title={item.title}
  description={item.description}
  icon={item.icon}
/>

        ))}
        <AboutScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 32,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 10,
    color: "#299f17ff",
    textAlign:"center",
  },
  heroSection:{},
title: { fontSize: 32, fontWeight: "bold", marginTop: 10 ,color: "#0d0e0dff", textAlign: "center" },

  subtitle: {
  fontSize: 18,          // text-lg ≈ 18px
  fontWeight: "600",     // font-semibold
  color: "#16a34a",      // Tailwind text-green-600 = #16a34a
  textAlign: "center",   // center me align
},

  description: { fontSize: 14, color: "#111827", marginTop: 10, lineHeight: 20,textAlign:"center" }

});
  
export default HomeScreen;
