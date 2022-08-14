import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export interface GoalItemScrollViewProp {
  courseGoals: {
    text: string,
    id: string
  }[]
}

export default function GoalItemScrollView(props: GoalItemScrollViewProp) {

  return (
    <ScrollView>
      {props.courseGoals.map((goal, i) => (
        <View style={styles.goalItem} key={goal.id}>
          <Text style={styles.goalText}>{goal.text}</Text>
        </View>
      ))}
    </ScrollView>
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
