import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type FarmingCardProps = {
  title: string;
  description: string;
  image?: any; // optional
  icon?: keyof typeof Ionicons.glyphMap; // Ionicons ka naam pass karenge
};

const FarmingCard: React.FC<FarmingCardProps> = ({ title, description, image, icon }) => {
  return (
    <View style={styles.card}>
      {/* Icon */}
      {icon && (
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={28} color="#2E7D32" />
        </View>
      )}

      {/* Image */}
      {image && <Image source={image} style={styles.image} />}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Description */}
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  iconContainer: {
    backgroundColor: "#E8F5E9",
    borderRadius: 50,
    padding: 10,
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
  },
});

export default FarmingCard;
