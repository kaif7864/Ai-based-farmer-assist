import React from 'react';
import { View, StyleSheet } from 'react-native';

interface SectionProps {
  children: React.ReactNode;
  style?: object;
}

export default function Section({ children, style }: SectionProps) {
  return <View style={[styles.section, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  section: {
    marginVertical: 10,
    paddingHorizontal: 16,
  },
});
