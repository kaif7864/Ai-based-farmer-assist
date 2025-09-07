import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <Text style={styles.title}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 12,
    textAlign: 'center',
  },
});
