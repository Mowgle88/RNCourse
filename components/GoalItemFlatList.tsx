import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface GoalItemFlatListProps {
  text: string,
}

export default function GoalItemFlatList(props: GoalItemFlatListProps) {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white'
  }
});
